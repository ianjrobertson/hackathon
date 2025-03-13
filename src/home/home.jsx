import MapWithGeoJSON from "../map/map"

export default function Home() {

    return (
        <div className="flex items-center justify-center">
            <div className="h-[1000px] w-[1000px]">
                <MapWithGeoJSON>

                </MapWithGeoJSON>
            </div>
        </div>
    )
}