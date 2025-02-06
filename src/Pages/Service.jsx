import React from 'react';

const services = [
    {
        title: 'Web Development',
        description: 'Building responsive and interactive websites using modern technologies.',
        icon: '🌐',
    },
    {
        title: 'Mobile Development',
        description: 'Creating mobile applications for both Android and iOS platforms.',
        icon: '📱',
    },
    {
        title: 'UI/UX Design',
        description: 'Designing user-friendly interfaces and experiences.',
        icon: '🎨',
    },
];

const Service = () => {
    return (
        <div id='service' className="w-full h-screen p-6 py-10 mx-auto bg-gray-100">
            <h2 className="mb-8 text-3xl font-bold text-center">Our Services</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-6 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <div className="mb-4 text-4xl">{service.icon}</div>
                        <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;