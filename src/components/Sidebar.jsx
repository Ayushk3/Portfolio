import React from 'react';
import profilePic from '../assets/profile.jpg';

const Sidebar = () => {
    return (
        <div className="w-[25%] bg-gray-300 dark:bg-gray-700 p-4 fixed min-h-full transition duration-500">
            <img src={profilePic} alt="Profile" className="rounded-full w-32 mx-auto border-gray-500 border-[3px]" />
            <nav className="mt-4 dark:text-gray-100 text-gray-800 p-[20%] text-[2.5vw]">
                <ul>
                    <li><a href="#about" className="block py-2 hover:scale-105 transition duration-500">About</a></li>
                    <li><a href="#experiences" className="block py-2 hover:scale-105 transition duration-500">Experiences</a></li>
                    <li><a href="#skills" className="block py-2 hover:scale-105 transition duration-500">Skills</a></li>
                    <li><a href="#projects" className="block py-2 hover:scale-105 transition duration-500">Projects</a></li>
                    <li><a href="#education" className="block py-2 hover:scale-105 transition duration-500">Education</a></li>
                    <li><a href="#contact" className="block py-2 hover:scale-105 transition duration-500">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
