// import React from "react";
import React, { useState, useEffect } from "react";
import Chart from "./Chart.jsx";

const Complex = () => {
  const [queryOne, setQueryOne] = useState();
  const [queryTwo, setQueryTwo] = useState();
  const [queryThree, setQueryThree] = useState();
  const [queryFour, setQueryFour] = useState();
  const [queryFive, setQueryFive] = useState();
  return (
    <div className="bg-gray-900 text-white sm:py-24 py-12  ">
      <div className="container mx-auto px-5 ">
        <h1 className="lg:text-5xl text-3xl italic">The Complex</h1>
        <div>
          {/* ADD ADDITIONAL CHART STUFF */}
          <Chart setQuery={setQueryOne} title="1title" num="0" key={0} />
          <p>{queryOne}</p>
          <Chart setQuery={setQueryTwo} title="2title" num="1" key={1} />
          <p>{queryTwo}</p>
          <Chart setQuery={setQueryThree} title="3title" num="2" key={2} />
          <p>{queryThree}</p>
          <Chart setQuery={setQueryFour} title="4title" num="3" key={3} />
          <p>{queryFour}</p>
          <Chart setQuery={setQueryFive} title="5title" num="4" key={4} />
          <p>{queryFive}</p>
        </div>
      </div>
    </div>
  );
};

export default Complex;
