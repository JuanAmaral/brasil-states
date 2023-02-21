import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Mapa } from "../components/mapa";
import { gql, useQuery } from "@apollo/client";
import { states } from "@/utils/listStates";
import { useState, useEffect } from "react";
import { Container } from "../styles/pages/home/style";
import GetWeatherByPoint from "./api/apiClient";
import WeatherBox from "@/components/weatherBox";

const inter = Inter({ subsets: ["latin"] });
type StateAbbreviation = keyof typeof states;

export default function Home() {
  const [stateSelected, setStateSelected] = useState<StateAbbreviation>();
  const [weatherSelected, setWeatherSelected] = useState<IDataDays>();

  async function fetchData(value: StateAbbreviation) {
    const { weatherByPoint } = await GetWeatherByPoint(
      states[value].latitude,
      states[value].longitude
    );
    if (!weatherByPoint) return alert("Não foi possível solcitar ao servidor");
    setWeatherSelected(weatherByPoint.climate.days[0]);
  }

  const OnSelected = (value: StateAbbreviation) => {
    setStateSelected(value);
    fetchData(value);
  };

  return (
    <Container>
      {weatherSelected && stateSelected && (
        <WeatherBox
          nameState={states[stateSelected].name}
          weatherSelected={weatherSelected}
        />
      )}
      <Mapa onSeleted={OnSelected} />
    </Container>
  );
}
