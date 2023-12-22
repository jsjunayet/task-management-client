import React from 'react';
import img from '../../assets/vector-flat-seamless-texture-pattern-big-data_51635-5961.jpg'
import { Link } from 'react-router-dom';
const Bannar = () => {
    return (
        <div>
            <div className="hero z-10 min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className="container mx-auto text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Your Task Management Platform</h1>
                            <p className="text-lg text-white mb-8">Effortlessly manage your tasks and boost your productivity with our powerful tools.</p>
                            <Link to="/login">
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                                    Let’s Explore
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;