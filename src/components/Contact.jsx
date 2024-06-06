import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="my-8">
            <h1 className="lg:text-[4vw] md:text-[5.5vw] text-[6.5vw] font-bold">Contact</h1>
            <div className="mt-4 flex justify-between flex-wrap">
                <p className="flex items-center">
                    <i className="fas fa-envelope mr-2"></i>
                    <span>Email: </span>
                    <a href="mailto:ayushk2k22@gmail.com" className="text-blue-500 ml-1">ayushk2k22@gmail.com</a>
                </p>
                <p className="flex items-center mt-2">
                    <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="w-6 h-4 mr-2" />
                    <span>Phone: </span>
                    <a href="tel:+9190606618259" className="text-blue-500 ml-1">+91-90606 618259</a>
                </p>
                <p className="flex items-center mt-2">
                    <i className="fab fa-linkedin mr-2"></i>
                    <span>LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/ayush-kumar-177778888888888962/" className="text-blue-500 ml-1">Ayush Kumar</a>
                </p>
                <p className="flex items-center mt-2">
                    <i className="fab fa-github mr-2"></i>
                    <span>GitHub: </span>
                    <a href="https://github.com/Ayushk3" className="text-blue-500 ml-1">@Ayushk3</a>
                </p>
            </div>

        </section>
    );
};

export default Contact;
