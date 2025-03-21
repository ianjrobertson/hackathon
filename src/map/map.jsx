
import SideBar from "../ui/SideBar";
import MapWithGeoJSON from "./MapWithGeoJSON";

const Map = () => {
    return (
        <div className="flex h-full w-full">
            <SideBar />
            <MapWithGeoJSON />
        </div>
    );
};

export default Map;

