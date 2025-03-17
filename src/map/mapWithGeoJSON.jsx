import { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow  } from "@react-google-maps/api";

import data from "../../maps.config.json"

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const center = { lat: 40.2634, lng: -111.6549 };

const MapWithGeoJSON = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: data.apiKey,
  });

  const [map, setMap] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [infoPosition, setInfoPosition] = useState(null);



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

      map.data.setStyle((feature) => {
        const marketValue = feature.getProperty("MKT_CUR_VA");

        if (marketValue == null || marketValue == undefined || marketValue == 0) {
          return {
            strokeColor: "#CCCCCC",
            strokeWeight: 1,
            fillColor: "transparent",
            fillOpacity: 0, 
          };
      
        }
      
        let color = "#FF0000";
        
        if (marketValue >= 150000 && marketValue < 350000) {
          color = "#FFD700"; // Yellow for medium price homes ($150,000 - $299,999)
        } else if (marketValue >= 300000 && marketValue <= 800000) {
          color = "#008000"; // Green for high price homes ($300,000 - $499,999)
        } else if (marketValue >= 800000) {
          color = "#800080";
        }
      
        return {
          strokeWeight: 2,
          fillColor: color, // Inside color
          fillOpacity: 0.6, 
        };
      });
      
    
    }
  }, [map]);

  return isLoaded ? (
    <div className="flex-auto">
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
