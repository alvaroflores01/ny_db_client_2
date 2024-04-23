import React, { useState, useEffect } from "react";
import BoroughData from "./BoroughData";

const Overview = () => {
  const [queryAll, setAll] = useState();
  const [queryManhattan, setManhattan] = useState();
  const [queryBronx, setBronx] = useState();
  const [queryBrooklyn, setBrooklyn] = useState();
  const [queryQueens, setQueens] = useState();
  const [queryStatenIsland, setStatenIsland] = useState();

  //   useEffect(() => {
  //     //Query Set All at page load up
  //   }, []);
  return (
    <div className="flex flex-col">
      <h1 className="italic text-3xl text-center">
        Which boroughx are you insterested in?
      </h1>
      <div className="flex flex-row w-1/2 self-center">
        <BoroughData setQuery={queryAll} title="All Boroughs" num="0" key={0} />
        <BoroughData setQuery={queryAll} title="Manhattan" num="1" key={1} />
        <BoroughData setQuery={queryAll} title="Bronx" num="2" key={2} />
        <BoroughData setQuery={queryAll} title="Brooklyn" num="3" key={3} />
        <BoroughData setQuery={queryAll} title="Queens" num="4" key={4} />
        <BoroughData setQuery={queryAll} title="StatenIsland" num="5" key={5} />
      </div>
    </div>
  );
};

export default Overview;
