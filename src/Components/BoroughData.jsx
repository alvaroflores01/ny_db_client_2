import React, { useState, useEffect } from "react";
import axios from "../util/axios.js";

const BoroughData = ({ setQuery, title, num }) => {
  const fetchData = async () => {
    try {
      let endpoint = "/query" + num;
      const response = await axios.get(endpoint);
      setQuery(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    // <div>
    <button
      className="block border bg-gray-400 text-xl p-3 my-3 italic w-full"
      onClick={fetchData}
      type="button"
    >
      {title}
    </button>
    //  </div>
  );
};

export default BoroughData;
