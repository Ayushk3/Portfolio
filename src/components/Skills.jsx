import React from 'react';
import mongodbLogo from '../assets/mongodb.png';
import expressLogo from '../assets/express.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import nodejsLogo from '../assets/nodejs.png';
import reactLogo from '../assets/react.png';
import cppLogo from '../assets/cpp.png';
import jsLogo from '../assets/js.png';

const skills = [
    { name: 'C++', logo: cppLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'MongoDB', logo: mongodbLogo },
    { name: 'Express', logo: expressLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'Node.js', logo: nodejsLogo },
    { name: 'React', logo: reactLogo },
];

const Skills = () => {
    return (
        <section id="skills" className="my-8">
            <h1 className="lg:text-[4vw] md:text-[5.5vw] text-[6.5vw] font-bold">Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col hover:scale-105 cursor-pointer items-center p-4 border rounded-lg transition duration-500 hover:shadow-lg dark:bg-gray-800">
                        <img src={skill.logo} alt={skill.name} className=" h-16 object-contain" />
                        <p className="mt-2 text-[2vw] text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
