import React, { useState, useEffect } from "react";
import FlightList from "@/components/FlightList";
import FilterFlights from "@/components/FilterFlights";
import LoadingSpinner from "@/components/LoadingSpinner";

const Home = () => {
  // Filtre ve uçuş durumu state'leri
  const [filters, setFilters] = useState({
    departureCity: "",
    arrivalCity: "",
  });
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filtre değişiklikleri
  const handleFilterChange = (departureCity, arrivalCity) => {
    setFilters({
      departureCity,
      arrivalCity,
    });
  };

  // Uçuşları API'den çekme
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);
        setError(null);

        // API'den uçuşları çek
        const response = await fetch("http://localhost:3001/flights");

        if (!response.ok) {
          throw new Error("Failed to fetch flights");
        }

        const data = await response.json();

        // Filtreleme işlemi
        const filteredFlights = data.filter(
          (flight) =>
            flight.departureCity.toLowerCase() ===
              filters.departureCity.toLowerCase() &&
            flight.arrivalCity.toLowerCase() ===
              filters.arrivalCity.toLowerCase()
        );

        // Filtrelenmiş uçuşları state'e kaydet
        setFlights(filteredFlights);
      } catch (error) {
        console.error("Error fetching or filtering flights:", error);
        setError("An error occurred while fetching or filtering flights.");
      } finally {
        // Veri çekme işlemi tamamlandığında loading durumunu false yapın
        setLoading(false);
      }
    };

    // Filtreler değiştikçe uçuşları yeniden çek
    fetchFlights();
  }, [filters]);

  return (
    <div className="flex flex-col h-full">
      {/* Ana İçerik */}
      <div
        className={`bg-white w-full h-full border flex flex-col items-center justify-center text-white ${
          loading ? "hidden" : ""
        }`}
      >
        <div className="text-center w-full text-black">
          <div className="w-full h-40 items-center justify-center mt-32 text-center text-transparent inline-block bg-clip-text bg-gradient-to-r from-blue-500 via-purple-800 to-blue-500 text-8xl font-extrabold leading-[90px]">
            It’s more than just a trip
          </div>
        </div>
        {/* Filtre bileşeni */}
        <FilterFlights onFilterChange={handleFilterChange} />
        {/* Uçuş listesi */}
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <FlightList filters={filters} />
        )}
      </div>

      {/* Yüklenme Animasyonu */}
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default Home;
