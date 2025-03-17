import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [])

    return (
        <>
            <div className="flex items-center justify-center bg-accent h-screen text-primary text-4xl">
                Not Found Redirecting Home
            </div>
        </>
    )
}

export default NotFound
