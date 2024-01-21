import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const FlightCard = ({ flight, onClick }) => {
  const router = useRouter();

  const handleFlightClick = () => {
    // Eğer bir onClick prop'u varsa, onu çağır
    if (onClick) {
      onClick();
    } else {
      // Yoksa varsayılan olarak sayfa yönlendirmesi yap
      router.push(`/flights/${flight.id}`);
    }
  };

  const formattedDepartureDate = new Date(
    flight.departureDate
  ).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      onClick={handleFlightClick}
      className="flex flex-row items-center bg-white text-white p-4 m-5
      drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-colors rounded-full cursor-pointer"
    >
      <div className="w-full h-full px-4 py-1 bg-white rounded-full justify-start items-center gap-2 inline-flex">
        <div className="justify-center items-center flex">
          <Image
            className="w-100 h-100"
            alt="airlines"
            width={100}
            height={100}
            src={flight.airlineLogo}
          />
        </div>
        <div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
          <div className="self-stretch justify-start items-start gap-[34px] inline-flex">
            <div className="w-min grow basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
              {flight.departureCity} ({flight.departureAirport}) →{" "}
              {flight.arrivalCity} ({flight.arrivalAirport})
            </div>
            <div className="grow shrink basis-0 text-slate-800 text-base font-normal font-['Nunito Sans']">
              {flight.flightTime}
            </div>

            <div className="grow shrink basis-0  text-slate-800 text-base font-normal font-['Nunito Sans']">
              {flight.departureTime} - {flight.arrivalTime}
            </div>
            <div className="grow shrink basis-0 text-right text-slate-800 text-xl font-bold">
              ₺&nbsp;{flight.price}
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-[34px] inline-flex">
            <div className="grow basis-0  text-slate-400 text-base font-normal font-['Nunito Sans']">
              {flight.airline}
            </div>

            <div className="grow shrink basis-0  text-slate-400 text-base font-normal font-['Nunito Sans']">
              {flight.isOneWay ? "One Way Trip" : "Round Trip"}
            </div>

            <div className="grow shrink basis-0 text-right text-slate-400 text-base font-normal font-['Nunito Sans']">
              {formattedDepartureDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
