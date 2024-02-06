const BASE_URL = "https://frontend-mentor-apis-6efy.onrender.com/countries";

async function getCountries(id) {
  const req = await fetch(BASE_URL + id);
  const res = await req.json();
  return res;
}

export default getCountries;
