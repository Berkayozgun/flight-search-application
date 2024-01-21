import React, { useState, useEffect } from "react";
import FlightList from "./FlightList";

const FlightSearch = () => {
  return (
    <div className="p-4 flex flex-col bg-gray-200 w-full">
      {error ? (
        <p className="text-red-500 mt-4">Error fetching flights: {error}</p>
      ) : (
        <FlightList flights={flights} />
      )}
    </div>
  );
};

export default FlightSearch;
