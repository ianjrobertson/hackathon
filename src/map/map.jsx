import React from 'react';
import SideBar from './SideBar';
import MapWithGeoJSON from './mapWithGeoJSON';
import Home from '../home/home';

export default function Map() {
    return (
        <>
            <div className="flex flex-col">
                <SideBar className="fixed left-0 h-full w-16 bg-gray-900 text-white shadow-lg" />
                <Home />
                {/**<MapWithGeoJSON className="fixed left-16 h-full w-full m-0 bg-gray-900" />*/}
            </div>

        </>
    );
}