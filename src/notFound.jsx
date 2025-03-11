import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [])

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-black">Not Found Redirecting Home</h1>
                </div>
            </div>
        </>
    )
}

