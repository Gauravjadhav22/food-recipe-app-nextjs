import Recipe from "./Recipe";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Result(
  {
    results
  }
) {
  const router = useRouter();
  const [postData, setPostData] = useState({
    show: true,
  });
  // const [key, setKey] = useState({});
  // let results = [];
  // if (typeof window !== "undefined") {
  //   // Perform localStorage action
  //   results = JSON.parse(localStorage.getItem("data"));
  // }
  console.log(results);
  const handleClick = () => {
    setPostData({ ...{ show: true } });
  };

  console.log(postData);
  return (
    <>
      {postData.show ? (
        <>
          <div className=" px-5 my-12 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results ? (
              Object.entries(results).map(([key, { image, name, time }]) => {
                return (
                  <div
                    onClick={() =>
                      setPostData({ ...results[key], show: false })
                    }
                    key={key}
                    className="ml-10 cursor-pointer p-2 group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
                  >
                    <Image src={image} height={200} width={400} />
                    <div className="relative flex justify-between items-center">
                      <h2 className="font-bold text-3xl">{name}</h2>
                      <div>
                        <h3 className="font-medium">
                          Additional Time :{time.additional_time || 0}
                        </h3>
                        <h3 className="font-medium">
                          Coocking Time :{time.cooking_time || 0}
                        </h3>
                        <h3 className="font-medium">
                          Prepration Time:{time.prepration_time || 0}
                        </h3>
                        <h3 className="font-bold">Total Time:{time.total}</h3>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>
                <h2>Oops.. No recipes found</h2>
              </p>
            )}
          </div>
        </>
      ) : (
        <div
          onClick={handleClick}
          className="cursor-pointer ml-8 p-2 flex flex-col items-center font-medium"
        >
          <h1 className="text-3xl text-white">Click Me to Go back..</h1>
          <br />
          <Image src={postData.image} height={400} width={600} />

          <h2 className="text-3xl font-bold">{postData.name}</h2>
          <br />

          <ul>
            {postData.ingredients.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <br />
          <ul className="text-xl">
            <h1 className="text-2xl">Instructions:</h1>
            {postData.instructions.map((item) => {
              return (
                <>
                  <li>{item}</li>
                  <br />
                </>
              );
            })}
          </ul>
          <br />

          <ul>
            {Object.entries(postData.nutrients).map(([key]) => (
              <li>{key.value}</li>
            ))}
          </ul>
        </div>
      )}
    </>
    // <div>fdsfsd</div>
  );
}

export default Result;
