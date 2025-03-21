
import SideBar from "../ui/SideBar";
import MapWithGeoJSON from "./mapWithGeoJSON";
import { useState } from "react";

const Map = () => {

  const [data, setData] = useState("/data/edgemont.json");

    return (
        <div className="flex h-full w-full">
            <SideBar setData={setData}/>
            <MapWithGeoJSON dataSet={data} />
        </div>
    );
};

export default Map;

