import SideBar from "../ui/SideBar";
import MapWithGeoJSON from "./mapWithGeoJSON";

const Map = () => {
    return (
        <div className="flex">
            <SideBar />
            <MapWithGeoJSON />
        </div>
    );
};

export default Map;