import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import getCountries from "../constant/getCountries";
import getFilterCountries from "../constant/getFilterCountries";
import searchCountries from "../constant/searchCountries";

function Main() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState();
  useEffect(() => {
    getCountry();
    setLoading(false);
  }, []);
  const handleSubmit = async () => {
    setLoading(true);
    const arr = await searchCountries(text);
    if (arr.length) {
      setCountry(arr);
    } else {
      setCountry([]);
    }
  };

  const getCountry = async (id) => {
    setLoading(true);
    const countries = await getCountries(id ? id : "?limit=10");
    setCountry(...country, countries.data);
    console.log(countries.data);
  };
  const getFilterCountry = async (value) => {
    setLoading(true);
    const countries = await getFilterCountries(value);
    setCountry(countries);
  };

  const handleChange = async (value) => {
    await getFilterCountry(value);
    setLoading(false);
  };

  return (
    <main className="bg-gray-100 dark:bg-secondary">
      <div className="container mx-auto px-3 sm:px-0 xl:px-3 pb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-5 mb-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              setLoading(false);
            }}
            className="relative md:h-[58px] h-[48px] max-w-[100%] sm:max-w-[300px] md:max-w-[480px] w-full"
          >
            <svg
              className="absolute top-2/4 -translate-y-1/2 left-6 text-placeholder dark:text-white"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="search">
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                  fill="currentColor"
                />
              </g>
            </svg>

            <input
              onChange={(e) => {
                setText(e.target.value);
              }}
              type="text"
              className="w-full pl-16 pr-4 bg-white dark:bg-primary h-full focus:outline-none rounded-md placeholder:text-placeholder dark:placeholder:text-white dark:text-white"
              placeholder="Search for a country"
            />
          </form>
          <select
            name="materic"
            onChange={(e) => {
              e.target.value != "none" ? handleChange(e.target.value) : "";
            }}
            id="select"
            className="rounded-md max-w-[200px] pl-4 pr-10 focus:outline-none outline-none py-3 dark:bg-primary dark:text-white"
          >
            <option value="None">Filter by Region</option>
            <option value="Africa">African</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="flex items-center flex-wrap justify-evenly gap-4">
          {loading ? (
            <span className="dark:text-white">Loading...</span>
          ) : country.length ? (
            country.map((card, i) => <Card key={i} props={card} />)
          ) : (
            "Bunday davlat mavjud emas"
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
