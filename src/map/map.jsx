import React from 'react';
import SideBar from './SideBar';
import MapWithGeoJSON from './mapWithGeoJSON';

export default function Map() {
    return (
        <div className="flex justify-center items-center h-screen">
            <SideBar className="fixed top-16 left-0 h-full w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg" />
            <div className="flex items-center justify-center">
                <MapWithGeoJSON />
            </div>
        </div>
    );
}