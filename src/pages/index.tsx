import WeatherBox from "@/components/weatherBox";
import { states } from "@/utils/listStates";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { Mapa } from "../components/mapa";
import { Container } from "../styles/components/home/style";
import GetWeatherByPoint from "./api/apiClient";

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
    if (weatherByPoint) setWeatherSelected(weatherByPoint.climate.days[0]);
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
