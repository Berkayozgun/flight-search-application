import React, { useState, useEffect } from "react";
import FlightCard from "./FlightCard";
import { Vortex } from "react-loader-spinner";

const FlightList = ({ filters }) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState(null);

  useEffect(() => {
    // API'den veri çekme işlemi
    const fetchFlights = async () => {
      try {
        setLoading(true);

        // filters objesini kullanarak API'ye filtreleri gönder
        const response = await fetch("http://localhost:3001/flights");
        const data = await response.json();

        // Filtreleme işlemi
        const filteredFlights = data.filter((flight) => {
          const isDepartureCityMatch =
            !filters.departureCity ||
            flight.departureCity.toLowerCase() ===
              filters.departureCity.toLowerCase();
          const isArrivalCityMatch =
            !filters.arrivalCity ||
            flight.arrivalCity.toLowerCase() ===
              filters.arrivalCity.toLowerCase();
          const isOneWayMatch =
            flight.isOneWay === filters.isOneWay ||
            filters.isOneWay === undefined;

          return isDepartureCityMatch && isArrivalCityMatch && isOneWayMatch;
        });

        setFlights(filteredFlights);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching flights:", error);
        setLoading(false);
      }
    };

    // Filtreler değiştikçe uçuşları yeniden çek
    fetchFlights();
  }, [filters]);

  // Sıralama işlemi
  const sortFlights = (criteria) => {
    const sortedFlights = [...flights];
    sortedFlights.sort((a, b) => {
      switch (criteria) {
        case "departureTime":
          return a.departureTime.localeCompare(b.departureTime);
        case "arrivalTime":
          return a.arrivalTime.localeCompare(b.arrivalTime);
        case "flightTime":
          return a.flightTime.localeCompare(b.flightTime);
        case "price":
          return a.price - b.price;
        default:
          return 0;
      }
    });

    setFlights(sortedFlights);
    setSortType(criteria);

    // Sıralama sonuçlarını kontrol et ve console'a yaz
    console.log(`Sorted flights by ${criteria}:`, sortedFlights);
  };

  return (
    <div className="w-5/6">
      {/* Sıralama düğmeleri */}
      <div className="text-black flex flex-row items-center ">
        Sort &nbsp;: &nbsp; &nbsp; &nbsp; &nbsp;
        <div className="flex justify-between gap-4 items-center ">
          <button
            className={`px-4 py-2 border rounded-full shadow-2xl ${
              sortType === "departureTime"
                ? "bg-gray-500 text-white"
                : "bg-white text-gray-700"
            } rounded`}
            onClick={() => sortFlights("departureTime")}
          >
            Departure Time
          </button>
          <button
            className={`px-4 py-2 border rounded-full shadow-2xl ${
              sortType === "arrivalTime"
                ? "bg-gray-500 text-white"
                : "bg-white text-gray-700"
            } rounded`}
            onClick={() => sortFlights("arrivalTime")}
          >
            Arrival Time
          </button>
          <button
            className={`px-4 py-2 border rounded-full shadow-2xl ${
              sortType === "flightTime"
                ? "bg-gray-500 text-white"
                : "bg-white text-gray-700"
            } rounded`}
            onClick={() => sortFlights("flightTime")}
          >
            Flight Duration
          </button>
          <button
            className={`px-4 py-2 border rounded-full shadow-2xl ${
              sortType === "price"
                ? "bg-gray-500 text-white"
                : "bg-white text-gray-700"
            } rounded`}
            onClick={() => sortFlights("price")}
          >
            Price
          </button>
        </div>
      </div>
      {/* Uçuş listesi */}
      {loading ? (
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      ) : (
        flights.map((flight) => <FlightCard key={flight.id} flight={flight} />)
      )}
    </div>
  );
};

export default FlightList;
