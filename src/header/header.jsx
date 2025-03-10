import React from "react";

export function Header() {
    return (
        <div className="flex flex-row bg-slate-600 text-center items-center space-x-4 text-white">
            <div>
                <div className="pl-4 text-2xl">Simple-Finance</div>
            </div>
            <div>
                <div className="text-lg">Home</div>
            </div>
            <div>
                <div className="text-lg">Income</div>
            </div>
            <div>
                <div className="text-lg">Settings</div>
            </div>
        </div>
    )
}