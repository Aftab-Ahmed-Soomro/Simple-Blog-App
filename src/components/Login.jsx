import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'; // Ensure you're importing from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const { signInUser } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const result = await signInUser(email, password);
            if (result.success) {
                toast.success("Login Successfully")
                setTimeout(() => {
                  navigate('/dashboard');
                }, 2000);
            }
        } catch (err) {
            setError("An error occurred");
            toast.error("Incorrect email or passwor")
        }
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen p-4'>
            <h1 className='text-4xl font-semibold mb-4'>Account Login</h1>
            <form onSubmit={handleSignIn} className='w-full max-w-md space-y-4'>
                {/* Email */}
                <div className='flex flex-col'>
                    <label className='mb-1'>Email Address:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className='border-2 p-2 rounded-md focus:outline-none focus:border-black transition duration-200'
                        placeholder='Enter your email'
                        required
                    />
                </div>

                {/* Password */}
                <div className='flex flex-col'>
                    <label className='mb-1'>Password:</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className='border-2 p-2 rounded-md focus:outline-none focus:border-black transition duration-200'
                        placeholder='Enter your password'
                        required
                    />  
                </div>

                {error && <p className='text-red-600 text-center pt-2'>{error}</p>}

                <button
                    type='submit'
                    className='w-full py-2 mt-4 rounded-md bg-black text-white hover:bg-gray-800 transition duration-200'
                >
                    Login
                </button>
            </form>
            <p className='text-slate-600 mt-4'>
                Don't have an account?{' '}
                <Link to={'/signup'}>
                    <span className='text-black font-medium'>Signup here</span>
                </Link>
            </p>
        </div>
    );
}

export default Login;
