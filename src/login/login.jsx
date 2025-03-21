import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        alert('Logging In');
        navigate('/map');

    }

    return (
        <>
            <form className='flex flex-col mx-auto text-2xl text-center text-neutral gap-4' onSubmit={handleSubmit}>
                <div>
                    <h2>Sign in</h2>
                </div>
                <div>
                    <label htmlFor="username"><small>Username</small></label>
                    <br />
                    <input type="text" className='bg-accent border rounded-md text-primary text-base px-1' id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password"><small>Password</small></label>
                    <br />
                    <input type="password" className='bg-accent border rounded-md text-primary text-base px-1' id="password" name="password" required />
                </div>
                <div>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe"><small>Remember me</small></label>
                </div>
                <div>
                    <button type="submit" className="bg-accent px-1 py-0 cursor-pointer rounded-md text-primary"><small>Login</small></button>
                </div>
            </form>
        </>
    );
};

export default Login;