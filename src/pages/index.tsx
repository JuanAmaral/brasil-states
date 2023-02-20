import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Mapa } from "../components/mapa";
import { gql, useQuery } from "@apollo/client";
import { states } from "@/utils/listStates";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
type StateAbbreviation = keyof typeof states;
import GetWeatherByPoint from "./api/apiClient";

export default function Home() {
  const [stateSelected, setStateSelected] = useState<StateAbbreviation>();

  async function fetchData(value: StateAbbreviation) {
    const { weatherByPoint } = await GetWeatherByPoint(
      states[value].latitude,
      states[value].longitude
    );

    console.log(weatherByPoint);
  }

  const OnSelected = (value: StateAbbreviation) => {
    setStateSelected(value);
    fetchData(value);
  };
  return (
    <>
      <div>Teste mapa do brasil</div>
      {stateSelected && <p>Selected state: {states[stateSelected].name}</p>}
      <div>
        <Mapa onSeleted={OnSelected} />
      </div>
    </>
  );
}
