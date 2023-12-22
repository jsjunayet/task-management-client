import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-5">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mx-2 text-xl hover:text-blue-500 transition">
                        <FaFacebookSquare className=" text-3xl" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-2 text-xl hover:text-blue-500 transition">
                        <FaTwitterSquare className=" text-3xl" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-2 text-xl hover:text-blue-500 transition">
                        <FaLinkedin className=" text-3xl" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-2 text-xl hover:text-blue-500 transition">
                        <FaInstagramSquare className=" text-3xl" />
                    </a>
                    {/* Add more social media icons as needed */}
                </div>
                <p className="mt-4 text-sm opacity-75">&copy; 2023 Task Management Platform Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;