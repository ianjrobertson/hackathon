import { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow  } from "@react-google-maps/api";
import data from "../../maps.config.json"
import calculateHomeScore from "../residenceData/score";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: 40.2634, lng: -111.6549 };

const MapWithGeoJSON = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: data.apiKey,
  });

  const [map, setMap] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [infoPosition, setInfoPosition] = useState(null);
  const [homeData, setHomeData] = useState({});
  const [homeNote, setHomeNote] = useState({});
  
  //const { markers } = useMapMarkers(map, homeData)

  useEffect(() => {
    if (map) {
      fetch("/data/edgemont.json")
        .then((response) => response.json())
        .then((data) => {
          map.data.addGeoJson(data); 
        })
        .catch((error) => console.error("Error loading GeoJSON:", error));

        map.data.addListener("click", (event) => {
        const feature = event.feature;
        const properties = {};

        feature.forEachProperty((value, key) => {
          properties[key] = value;
        });

        setSelectedFeature(properties);
        setInfoPosition(event.latLng);
      });
    }
  }, [map]);

  useEffect(() => {
    if (!map) return;
    map.data.setStyle((feature) => {
      const marketValue = feature.getProperty("MKT_CUR_VA");
      const homeStatus = homeData[feature.getProperty("OWN_FULL_A")] ?? "not_visited";

      if (marketValue == null || marketValue == undefined || marketValue == 0) {
        return {
          strokeColor: "#CCCCCC",
          strokeWeight: 1,
          fillColor: "transparent",
          fillOpacity: 0, 
        };
    
      }
    
      let color = "#FF0000";

      const homeScore = calculateHomeScore({status: homeStatus, value: marketValue});
      
      if (homeScore > 3 && homeScore < 5) {
        color = "#FFD700"; // Yellow 
      } else if (homeScore >= 5) {
        color = "#008000"; // Green 
      }

      if (homeStatus === "sold") {
        color = "#058ED9"
      }

      return {
        strokeWeight: 2,
        fillColor: color, // Inside color
        fillOpacity: 0.4,
      };
    });
  }, [map, homeData]);

  useEffect(() => {
    if (selectedFeature) {
      setHomeNote((prevNotes) => {
        return {
          ...prevNotes,
          [selectedFeature.OWN_FULL_A]: prevNotes[selectedFeature.OWN_FULL_A] ?? "",
        };
      })
    }
  }, [selectedFeature]);

  return isLoaded ? (
    <div className="h-full w-full">
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={13}
            onLoad={(map) => setMap(map)} // Save reference to map
        >
          {selectedFeature && infoPosition && (
        <InfoWindow
          position={infoPosition}
          onCloseClick={() => setSelectedFeature(null)}
        >
          <div>
            <h3>{selectedFeature.OWNER_NAME || "Region Info"}</h3>
            <p><strong>Home Value:</strong> $ { selectedFeature.MKT_CUR_VA || "N/A"}</p>
            <p><strong>Tax Paid:</strong> $ { selectedFeature.TOT_PRV_TA || "Unknown"} </p>
            <p><strong>Address:</strong> { selectedFeature.OWN_FULL_A || "Unkown" }</p>
            <p><strong>Home Score:</strong> { calculateHomeScore({status: homeData[selectedFeature.OWN_FULL_A] ?? "not_visited", value: selectedFeature.MKT_CUR_VA})}</p>
            <div className="flex flex-row justify-between mt-3">
              <button
              className="text-white bg-green-600 hover:bg-green-700 px-1 py-1 rounded" 
              onClick={() => setHomeData({...homeData, [selectedFeature.OWN_FULL_A]: "sold"})}>
                Sold
              </button>
              <button 
              className="text-white bg-blue-600 hover:bg-blue-700 px-1 py-1 rounded"
              onClick={() => setHomeData({...homeData, [selectedFeature.OWN_FULL_A]: "come_back"})}>
                Come Back
              </button>
              <button 
              className="text-white bg-yellow-600 hover:bg-yellow-700 px-1 py-1 rounded"
              onClick={() => setHomeData({...homeData, [selectedFeature.OWN_FULL_A]: "not_home"})}>
                Not Home
              </button>
              <button 
              className="text-white bg-red-600 hover:bg-red-700 px-1 py-1 rounded"
              onClick={() => setHomeData({...homeData, [selectedFeature.OWN_FULL_A]: "not_interested"})}>
                Not Interested
              </button>
            </div>
            <div>
              <textarea
                value={homeNote[selectedFeature.OWN_FULL_A]}
                onChange={(e) => setHomeNote({...homeNote, [selectedFeature.OWN_FULL_A]: e.target.value})}
                placeholder="Enter a note..."
                className="w-full mt-3 h-12 bg-slate-100 resize-none border-2 rounded"
              >
              </textarea>
            </div>
          </div>
        </InfoWindow>
      )}

        </GoogleMap>
    </div>
  ) : (
    <p>Loading map...</p>
  );
};

export default MapWithGeoJSON;
