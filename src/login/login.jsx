import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setIsLoggingIn(true);
        setTimeout(() => {
            navigate('/map');
        }, 3000);
    }

    return (
        <>
            {isLoggingIn ? (
                <div className="text-primary text-4xl flex items-center justify-center min-h-screen">
                    Welcome, {username}
                </div>
                ) : (
                <div className="flex items-center justify-center min-h-screen">
                    <form className="flex flex-col bg-primary text-secondary p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                        <div>
                            <h2 className="text-3xl mb-4 flex justify-center">Sign in</h2>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-lg mb-2">Username</label>
                            <input
                                type="text"
                                className="bg-accent border rounded-md text-primary text-base px-2 py-1 w-full"
                                id="username"
                                name="username"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-lg mb-2">Password</label>
                            <input
                                type="password"
                                className="bg-accent border rounded-md text-primary text-base px-2 py-1 w-full"
                                id="password"
                                name="password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-secondary px-4 py-2 cursor-pointer rounded-md text-primary hover:bg-neutral hover:text-secondary transition-all duration-500">Login</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Login;
