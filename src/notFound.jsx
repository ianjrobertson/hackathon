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
            <div className="">
                <div className="">
                    <h1 className="">Not Found Redirecting Home</h1>
                </div>
            </div>
        </>
    )
}

