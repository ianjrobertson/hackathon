import MapWithGeoJSON from "../map/map"

export default function Home() {

    return (
        <div className="flex justify-center">
            <div className="h-screen w-screen">
                <MapWithGeoJSON>

                </MapWithGeoJSON>
            </div>
        </div>
    )
}