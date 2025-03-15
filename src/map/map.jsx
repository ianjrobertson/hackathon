import React from 'react';
import SideBar from './SideBar';
import MapWithGeoJSON from './mapWithGeoJSON';

export default function Map() {
    return (
        <>
        <div className="flex">
            <SideBar className="fixed top-16 left-0 h-full w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg" />  
            <MapWithGeoJSON className="flex h-screen w-[1000px]  justify-center items-center"/>              
        </div>
        
        </>
    );
}