import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getSingleCountry from "../constant/getSingleCountry";
import OneCountry from "../components/OneCountry";

function Country() {
  const { country } = useParams();
  const [oneCountry, setCountry] = useState();
  const [loading, setLoading] = useState(false);
  const getCountry = async () => {
    setLoading(true);
    const firstCountry = await getSingleCountry(country);
    setCountry(firstCountry);
  };
  useEffect(() => {
    setLoading(false);
    getCountry();
  }, []);
  useEffect(() => {
    setLoading(false);
    getCountry();
  }, [country]);

  return (
    <div className="dark:bg-secondary bg-gray-100">
      <div className="container mx-auto px-3 sm:px-3">
        <div className="max-w-[136px] w-full dark:bg-primary dark:text-white bg-white py-2 px-3 mb-2">
          <Link to={"/"} className="flex items-center gap-2 justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="CurrentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                  fill="CurrentColor"
                />
              </g>
            </svg>

            <span>Back</span>
          </Link>
        </div>
        {oneCountry ? <OneCountry props={oneCountry} /> : "loading"}
      </div>
    </div>
  );
}

export default Country;
