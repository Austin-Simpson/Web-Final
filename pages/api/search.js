export default async function handler(req, res) {
  const { term, location } = req.query;

  let apiUrl = `https://api.yelp.com/v3/businesses/search?term=${term}`;

  if (location) {
    apiUrl += `&location=${location}`;
  } else {
    // Use a different default location or alternative API endpoint
    apiUrl += `&location=your-default-location`;
  }

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  });

  const data = await response.json();
  res.status(200).json(data.businesses);
}
