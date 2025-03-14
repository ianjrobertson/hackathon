import React from 'react';
import SideBar from './SideBar';
import MapWithGeoJSON from './mapWithGeoJSON';

export default function Map() {
    return (
        <div className="flex flex-col h-screen">
            <SideBar className="fixed top-16 left-0 h-[calc(100%-4rem)] w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg" />
            <div className="flex flex-1">
                <MapWithGeoJSON className="flex-1" />
            </div>
        </div>
    );
}