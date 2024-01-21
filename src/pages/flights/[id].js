import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Vortex } from "react-loader-spinner";
import Image from "next/image";

const FlightDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [flightDetails, setFlightDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        if (!id) {
          throw new Error("Flight ID is not provided");
        }

        const response = await fetch(`http://localhost:3001/flights/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch flight details");
        }

        const data = await response.json();
        setFlightDetails(data);
      } catch (error) {
        console.error("Error fetching flight details:", error.message);
        setError(error.message);
      }
    };

    // Flight ID varsa detayları çek
    if (id) {
      fetchFlightDetails();
    }
  }, [id]);

  // Hata durumunda
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500">Error fetching flight details: {error}</p>
      </div>
    );
  }

  // Detaylar henüz yüklenmediyse
  if (!flightDetails) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center m-10">
      <h2 className="text-3xl font-bold mb-4">Flight Details</h2>
      <div className="bg-white p-4 m-5 rounded-full cursor-pointer">
        <div className="flex items-center">
          <Image
            className="m-5"
            src={flightDetails.airlineLogo}
            alt="Airline Logo"
            width={150}
            height={100}
          />
          <div className="flex flex-col justify-start">
            <p className="text-xl font-bold">
              {flightDetails.departureCity} ({flightDetails.departureAirport}) →{" "}
              {flightDetails.arrivalCity} ({flightDetails.arrivalAirport})
            </p>
            <p className="text-lg">
              {flightDetails.flightTime} flight - {flightDetails.departureTime}{" "}
              - {flightDetails.arrivalTime}
            </p>
            <p className="text-lg font-bold">₺{flightDetails.price}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-base">{flightDetails.airline}</p>
          <p className="text-base">
            {flightDetails.isOneWay ? "One Way Trip" : "Round Trip"}
          </p>
          <p className="text-base">
            Departure Date : {flightDetails.departureDate}
            <br />
            Return Date : {flightDetails.returnDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailPage;
