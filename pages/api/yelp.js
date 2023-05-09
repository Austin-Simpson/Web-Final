import fetch from 'node-fetch';
import cors from 'cors';

const corsMiddleware = cors({
    methods: ['GET', 'OPTIONS'],
});

const yelpHandler = async (req, res) => {
    const { term, latitude, longitude } = req.query;
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}`;
    const headers = {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        'Content-Type': 'application/json',
    };

    try {
        const result = await fetch(url, { headers });
        const data = await result.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default async function handler(req, res) {
    await corsMiddleware(req, res);
    await yelpHandler(req, res);
}
