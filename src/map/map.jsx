import React from 'react';
import SideBar from './Sidebar';
import MapWithGeoJSON from './mapWithGeoJSON';
import Home from '../home/home';

export default function Map() {
    return (
        <>
            <div className="flex">
                <SideBar />
                <Home />
                {/**<MapWithGeoJSON className="fixed left-16 h-full w-full m-0 bg-gray-900" />*/}
            </div>

        </>
    );
}