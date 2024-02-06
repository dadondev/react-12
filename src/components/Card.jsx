import React from "react";
import { Link } from "react-router-dom";

function Card({ props }) {
  const number = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(props.population);
  return (
    <div className="max-w-[264px] shadow bg-white dark:bg-primary flex flex-col items-center relative overflow-hidden max-h-[336px] w-full h-full rounded-xl">
      <div className="flex justify-center max-h-[132px]">
        <Link to={`${props.name.common}`} className="cursor-pointer">
          <img src={props.flags.svg} alt="usa" className="max-h-full w-full" />
        </Link>
      </div>
      <div className="dark:text-white px-4 pb-8 rounded-b-lg pt-3 w-full">
        <h1 className="font-bold text-lg mb-4"> {props.name.common}</h1>
        <ul>
          <li className="text-base font-bold">
            Population:<span className="font-normal"> {number}</span>
          </li>
          <li className="text-base font-bold">
            Region:<span className="font-normal"> {props.region}</span>
          </li>
          <li className="text-base font-bold">
            Capital:<span className="font-normal"> {props.capital[0]}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
