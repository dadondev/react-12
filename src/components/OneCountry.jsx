import { Link, useNavigate } from "react-router-dom";
function OneCountry({ props }) {
  console.log(props);
  const number = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(props.population);

  return (
    <div className="flex flex-col w-full md:justify-evenly dark:text-white md:gap-12 mx-auto md:flex-col mt-6 lg:flex-row">
      <div className="md:max-w-[400px] md:max-h-[501px]  sm:max-w-[500px] max-h-[239px] lg:max-w-[460px] xl:max-w-[560px] rounded-md mb-3">
        <img
          src={props.flags.svg}
          alt="big"
          className="rounded-md md:h-[300px] sm:h-[230px]"
        />
      </div>
      <div className="md:max-w-[100%] max-w-[420px] grid grid-rows-[auto_1fr] pb-6">
        <h1 className="text-[22px] md:text-[34px] xl:text-[44px] font-bold">
          {props.name.common}
        </h1>
        <div className="grid grid-rows-[1fr_32px]">
          <div className="flex flex-col md:flex-row gap-7 mb-3 ">
            <div>
              <p className="font-bold mb-1">
                Native name:{" "}
                <span className="font-normal">{props.name.nativeName}</span>
              </p>
              <p className="font-bold mb-1">
                Population: <span className="font-normal">{number}</span>
              </p>
              <p className="font-bold mb-1">
                Region: <span className="font-normal">{props.region}</span>
              </p>
              <p className="font-bold mb-1">
                Sub Region:{" "}
                <span className="font-normal">{props.subregion}</span>
              </p>
              <p className="font-bold mb-1">
                Capital: <span className="font-normal">{props.capital[0]}</span>
              </p>
            </div>
            <div>
              <p className="font-bold mb-1">
                Top Level Domain:{" "}
                <span className="font-normal">{props.cca3}</span>
              </p>
              <p className="font-bold mb-1">
                Currencies:{" "}
                <span className="font-normal">{props.currencies}</span>
              </p>
              <p className="font-bold mb-1">
                Language:{" "}
                <span className="font-normal">{props.languages[0]}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold">Border Countries:</span>
            <ul className="flex gap-2 items-center flex-wrap">
              {props.borders.map((e, i) => (
                <Link to={e.common}>
                  <li className="py-1 px-3 list-none shadow bg-white dark:bg-primary inline-block capitalize">
                    {e.slug}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCountry;
