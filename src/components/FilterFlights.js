import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterFlights = ({ flights, onFilterChange = () => {} }) => {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [isOneWay, setIsOneWay] = useState(false);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleDepartureChange = (e) => {
    const selectedDepartureCity = e.target.value;
    setDepartureCity(selectedDepartureCity);
    onFilterChange(
      selectedDepartureCity,
      arrivalCity,
      isOneWay,
      departureDate,
      returnDate
    );
  };

  const handleArrivalChange = (e) => {
    const selectedArrivalCity = e.target.value;
    setArrivalCity(selectedArrivalCity);
    onFilterChange(
      departureCity,
      selectedArrivalCity,
      isOneWay,
      departureDate,
      returnDate
    );
  };

  const handleDateChange = (date, type) => {
    type === "departure" ? setDepartureDate(date) : setReturnDate(date);
    onFilterChange(
      departureCity,
      arrivalCity,
      isOneWay,
      departureDate,
      returnDate
    );
  };

  return (
    <div className="flex items-center w-5/6 mt-6 mb-10 py-2 bg-white rounded border shadow-xl border-slate-300">
      <div className="flex-row w-2/6 justify-start items-center gap-1 inline-flex">
        <div className="self-stretch px-3 py-2 w-full h-full bg-white rounded justify-start items-center gap-2 flex ">
          <div className="w-8 h-8 relative rounded focus:border-opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29285 16.3155C4.02797 16.419 3.91945 16.7356 4.06513 16.9799L5.81319 19.9108C6.06359 20.3306 6.58081 20.5079 7.0361 20.3299L23.9381 13.723C24.7279 13.4143 25.1179 12.5237 24.8092 11.734C24.4883 10.913 23.5436 10.5302 22.7417 10.8961L17.7432 13.1773L10.773 6.77125C10.4838 6.50546 10.0685 6.4276 9.70266 6.5706C9.08963 6.81023 8.85636 7.55604 9.22358 8.10227L13.6983 14.7584L6.85554 17.8571L4.72413 16.3669C4.59802 16.2787 4.43618 16.2594 4.29285 16.3155ZM25.6776 23.4521H5.14764V25.0313H25.6776V23.4521Z"
                fill="#6E7491"
              />
            </svg>
          </div>
          <select
            className="h-full w-full items-center justify-center  text-slate-400 text-lg font-normal font-nunito-sans"
            placeholder="From Where?"
            onChange={handleDepartureChange}
            value={departureCity}
          >
            <option value="">From Where?</option>
            <option value="">All Cities</option>
            <option value="istanbul">Istanbul</option>
            <option value="ankara">Ankara</option>
            <option value="izmir">İzmir</option>
            <option value="antalya">Antalya</option>
            <option value="adana">Adana</option>
            <option value="bursa">Bursa</option>
            <option value="konya">Konya</option>
            <option value="gaziantep">Gaziantep</option>
            <option value="kocaeli">Kocaeli</option>
            <option value="mugla">Muğla</option>
            <option value="samsun">Samsun</option>
            <option value="kayseri">Kayseri</option>
            <option value="eskisehir">Eskişehir</option>
            <option value="mersin">Mersin</option>
            <option value="tekirdag">Tekirdağ</option>
            <option value="diyarbakir">Diyarbakır</option>
          </select>
        </div>
      </div>

      <div className="w-px self-stretch bg-slate-300"></div>

      <div className="flex-row w-2/6 justify-start items-center gap-1 inline-flex">
        <div className="self-stretch px-3 py-2 w-full h-full bg-white rounded justify-start items-center gap-2 flex ">
          <div className="w-8 h-8 relative rounded focus:border-opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.34164 9.97884C7.07116 9.89096 6.7865 10.067 6.74428 10.3482L6.23764 13.723C6.16507 14.2065 6.45263 14.6715 6.91754 14.8225L24.1768 20.4304C24.9833 20.6925 25.8495 20.2511 26.1115 19.4446C26.3839 18.6063 25.8961 17.7113 25.044 17.4859L19.7324 16.0805L18.4043 6.70728C18.3492 6.31838 18.0773 5.99483 17.7038 5.87345C17.0778 5.67006 16.4245 6.09886 16.3621 6.7541L15.602 14.7384L8.34583 12.7959L7.64252 10.2921C7.6009 10.1439 7.488 10.0264 7.34164 9.97884ZM26.1777 23.4521H5.64771V25.0314H26.1777V23.4521Z"
                fill="#6E7491"
              />
            </svg>
          </div>
          <select
            className="h-full w-full items-center justify-center  text-slate-400 text-lg font-normal font-nunito-sans"
            onChange={handleArrivalChange}
            value={arrivalCity}
          >
            <option value="">To where?</option>
            <option value="">All Cities</option>
            <option value="ankara">Ankara</option>
            <option value="izmir">İzmir</option>
            <option value="antalya">Antalya</option>
            <option value="adana">Adana</option>
            <option value="bursa">Bursa</option>
            <option value="konya">Konya</option>
            <option value="gaziantep">Gaziantep</option>
            <option value="kocaeli">Kocaeli</option>
            <option value="mugla">Muğla</option>
            <option value="samsun">Samsun</option>
            <option value="kayseri">Kayseri</option>
            <option value="eskisehir">Eskişehir</option>
            <option value="mersin">Mersin</option>
            <option value="tekirdag">Tekirdağ</option>
            <option value="diyarbakir">Diyarbakır</option>
          </select>
        </div>
      </div>

      <div className="w-px self-stretch bg-slate-300"></div>

      <div className="flex justify-evenly gap-20 h-full mb-4">
        <div className="ml-8">
          <label className="flex text-sm font-medium text-gray-700">
            Departure Date
          </label>
          <DatePicker
            selected={departureDate}
            onChange={(date) => handleDateChange(date, "departure")}
            dateFormat="dd/MM/yyyy"
            className="border border-gray-300 rounded h-6 text-black"
          />
        </div>
        <div className="mr-16">
          <label className="block text-sm font-medium text-gray-700">
            Return Date
          </label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => handleDateChange(date, "return")}
            dateFormat="dd/MM/yyyy"
            className="border border-gray-300 rounded h-6 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterFlights;
