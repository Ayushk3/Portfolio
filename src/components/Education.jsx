import React from 'react';

const education = [
    {
        level: '10th',
        school: 'The Tribhuvan School',
        subject: '',
        percentage: '94.8%',
        board: 'CBSE'
    },
    {
        level: '12th',
        school: 'The Tribhuvan School',
        subject: 'Physics , Chemistry , Maths',
        percentage: '96.8%',
        board: 'CBSE'
    },
    {
        level: 'BTech',
        school: 'NIT Jaipur',
        subject: 'Computer Science Engg.',
        percentage: '8.1 CGPA',
        board: ''
    },
];

const Education = () => {
    return (
        <section id="education" className="my-8">
            <h1 className="lg:text-[4vw] md:text-[5.5vw] text-[6.5vw] font-bold">Education</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4 '>
                {education.map((edu, index) => (
                    <div key={index} className="mt-4 border-[2px] flex flex-col justify-center hover:scale-105 items-center p-[30px] transition duration-500 cursor-pointer">
                        <h3 className="text-xl font-semibold">{edu.level}</h3>
                        <p>{edu.school}</p>
                        <p>{edu.subject}</p>
                        <p>{edu.percentage}</p>
                        <p>{edu.board}</p>
                    </div>
                ))}</div>
        </section>
    );
};

export default Education;
