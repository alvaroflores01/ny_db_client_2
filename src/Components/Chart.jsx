import React, { useState, useEffect } from "react";
import axios from "../util/axios.js";

const Chart = ({ setQuery, title, num }) => {
  //   const [queryOne, setQueryOne] = useState();

  const fetchData = async () => {
    try {
      let endpoint = "/query" + num;
      const response = await axios.get(endpoint);
      // Assuming you have an API route set up
      setQuery(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button
        className="block w-1/5 border bg-gray-400 text-xl p-3 my-3 italic"
        onClick={fetchData}
        type="button"
      >
        {title}
      </button>
    </div>
  );
};

export default Chart;
