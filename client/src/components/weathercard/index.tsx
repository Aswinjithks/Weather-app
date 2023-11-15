// WeatherCard.tsx

import { useAppSelector } from "@store/hooks";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const WeatherInfo = styled.div`
  margin-bottom: 10px;
`;

const WeatherCard: React.FC = () => {
  const data = useAppSelector((store) => store.search.data.data);

  //   const currentTime = new Date();
  //   const timezone = new Date(currentTime.getTime() + data?.timezone * 1000);
  //  const date = new Date(timezone).toLocaleDateString();
  //  console.log(date)

  const timestamp = data?.dt;
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return (
    <CardContainer>
      <Title>Weather Update</Title>
      <WeatherInfo>
        <strong>Current Conditions:</strong>
        <p>
          Temperature: {data ? (data?.main?.temp - 273.15).toFixed(2) : ""}°C
        </p>
        <p>Weather: {data?.weather[0]?.description}</p>
        <p>Humidity: {data?.main?.humidity}%</p>
        <p>Wind: {data?.wind?.speed}km/h</p>
      </WeatherInfo>
      <WeatherInfo>
        <p>Max: {data ? (data?.main?.temp_max - 273.15).toFixed(2) : ""}°C</p>
      </WeatherInfo>
      <WeatherInfo>
        <p>Min: {data ? (data?.main?.temp_min - 273.15).toFixed(2) : ""}°C</p>
      </WeatherInfo>
      <WeatherInfo>
        <strong>Location:</strong>
        <p>City: {data?.name} </p>
      </WeatherInfo>
      <WeatherInfo>
        <strong>Date and Time:{timestamp ? formattedDateTime : ""}</strong>
        <p></p>
      </WeatherInfo>
    </CardContainer>
  );
};

export default WeatherCard;
