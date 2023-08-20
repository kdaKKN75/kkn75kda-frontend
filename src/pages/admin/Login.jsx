import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiShow, BiLowVision } from 'react-icons/bi';

const Login = () => {
    const [isPassword, setIsPassword] = useState(false);

    return (
        <>
            <section className="flex justify-center items-center h-screen bg-gradient-to-br from-green-400 to-white md:bg-login md:bg-cover">
                <div className="bg-white w-[25rem] h-[23rem] px-5 rounded-xl pt-7 md:border-2 md:shadow">
                    <div className="text-center mb-3">
                        <h1 className="text-black text-xl font-medium">Selamat Datang di Website Desa</h1>
                        <h1 className="text-purple-600 text-2xl font-bold">Koncer Darul Aman</h1>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="bg-white border-[3px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-600 focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                type={isPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className="bg-white border-[3px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-600 focus:shadow-outline"
                            />
                            <button
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 text-xl"
                                onClick={() => {
                                    setIsPassword(!isPassword);
                                }}
                            >
                                {isPassword ? <BiShow /> : <BiLowVision />}
                            </button>
                        </div>
                    </div>
                    <div className="mb-2">
                        <Link className="text-blue-600">Lupa password?</Link>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
