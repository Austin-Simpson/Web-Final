import { useState, useEffect } from 'react';

const Location = () => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        }
    }, []);



    return (
        <div>
            <h1>My Location</h1>
            {latitude && <p>Latitude: {latitude}</p>}
            {longitude && <p>Longitude: {longitude}</p>}
        </div>
    );
};
export const getLocation = async () => {
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            if (latitude && longitude) {
                clearInterval(intervalId);
                resolve({ latitude, longitude });
            }
        }, 100);
    });
};
export default Location;