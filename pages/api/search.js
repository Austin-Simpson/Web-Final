export default async function handler(req, res) {
    const { term, location } = req.query;
  
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );
  
    const data = await response.json();
    res.status(200).json(data.businesses);
  }
  