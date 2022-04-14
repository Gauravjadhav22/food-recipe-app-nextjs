import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

function Header({ results }) {
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);
  const [query, SetQuery] = useState("");
  const handleChange = (e) => {
    SetQuery(e.target.value);
    if (e.key === "Enter") {
      console.log(e.key);
      router.push(`/?dish=${query}`);
    }
  };

  return (
    <header className="header-main flex flex-col justify-between items-center h-auto m-2 px-10 sm:flex-row">
      <div className="flex flex-col mt-12">
        <h1 className="text-white text-3xl font-medium">Food Recipe app </h1>
        <Image
          className="object-contain m-0 p-0 "
          src="https://res.cloudinary.com/dwmm1r1ph/image/upload/v1649608306/jobs_pic/k7jkxnjd8apb1gzh8w2q.png"
          height={300}
          width={250}
        />
      </div>
      <div className="mt-20 absolute inset-x-0 flex flex-col items-center">
        <h4 className="text-2xl text-white bg-black mt-5 ">
          Search any dish name ..
        </h4>
        <br />
        <h1 className="text-white text-2xl font-medium">
          please be patience this api is slow so please do wait for 10
          seconds..🙏
        </h1>

        <br />
        <div className="flex justify-center">
          <div className="flex mb-3 xl:w-96">
            <input
              disabled={disabled ? "disabled" : ""}
              onChange={handleChange}
              onKeyPress={handleChange}
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="dish name.."
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              disabled={disabled ? "disabled" : ""}
              onClick={() => (
                router.push(`/?dish=${query}`),
                setDisabled(true),
                setTimeout(() => {
                  setDisabled(false);
                }, 10000)
              )}
              className="btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
