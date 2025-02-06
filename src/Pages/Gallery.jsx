import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setImages(data.images))
            .catch(error => setError(error.message));
    }, []);

    return (
        <div className="container p-4 mx-auto">
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img src={image.image} alt={image.alt} className="object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
