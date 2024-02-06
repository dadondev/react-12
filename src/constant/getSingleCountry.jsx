const BASE_URL =
  "https://frontend-mentor-apis-6efy.onrender.com/countries?search=";

async function getSingleCountry(id) {
  const req = await fetch(BASE_URL + id);
  const res = await req.json();
  return res.data[0];
}

export default getSingleCountry;
