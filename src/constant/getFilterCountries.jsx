const BASE_URL = "https://frontend-mentor-apis-6efy.onrender.com/countries";

async function getFilterCountries(id) {
  const req = await fetch(BASE_URL);
  const res = await req.json();
  const arr = res.data.filter((e) => e.region == id);
  return arr;
}

export default getFilterCountries;
