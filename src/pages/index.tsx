import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Mapa } from "../components/mapa";
import { gql, useQuery } from "@apollo/client";
import { states } from "@/utils/listStates";
import { useState, useEffect } from "react";
import { Box } from "../styles/pages/home/style";
const inter = Inter({ subsets: ["latin"] });
type StateAbbreviation = keyof typeof states;
import GetWeatherByPoint from "./api/apiClient";

export default function Home() {
  const [stateSelected, setStateSelected] = useState<StateAbbreviation>();
  const [weaterSelected, setWeaterSelected] = useState<IDataDays>();
  const [openBox, setOpenBox] = useState(false);

  async function fetchData(value: StateAbbreviation) {
    const { weatherByPoint } = await GetWeatherByPoint(
      states[value].latitude,
      states[value].longitude
    );
    if (!weatherByPoint) return alert("Não foi possível solcitar ao servidor");
    setWeaterSelected(weatherByPoint.climate.days[0]);
  }

  const OnSelected = (value: StateAbbreviation) => {
    setStateSelected(value);
    fetchData(value);
  };
  return (
    <>
      {weaterSelected && stateSelected && (
        <Box>
          <p>{states[stateSelected].name}</p>

          <Image
            src={weaterSelected.icon}
            width={50}
            height={50}
            alt="Clima"
          ></Image>
          <>
            <h1>{weaterSelected.maxDayTemperature}</h1>
            <h2>{weaterSelected.minNightTemperature}</h2>
          </>

          <h2>{weaterSelected.precProbability * 100 + "%"}</h2>
          <h2>{weaterSelected.maxWindSpeed + "km/h"}</h2>
          <h2>{weaterSelected.minWindSpeed + "km/h"}</h2>
          <h2>{weaterSelected.humidity + "%"}</h2>
        </Box>
      )}

      <div>
        <Mapa onSeleted={OnSelected} />
      </div>
    </>
  );
}
