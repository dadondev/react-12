const BASE_URL =
  "https://frontend-mentor-apis-6efy.onrender.com/countries?search=";

async function searchCountries(id) {
  const req = await fetch(BASE_URL + id);
  const res = await req.json();
  console.log(id);
  return res.data;
}

export default searchCountries;
