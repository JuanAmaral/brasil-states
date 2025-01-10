import {
  Box,
  TemperDiv,
  Divisor,
} from "../../styles/components/weatherBox/style";
import Image from "next/image";

type weaterType = {
  nameState: string;
  weatherSelected: IDataDays;
};

export default function WeatherBox({ nameState, weatherSelected }: weaterType) {
  return (
    <Box>
      <p>{nameState}</p>
      <Image
        src={weatherSelected.icon}
        width={70}
        height={70}
        alt="Clima"
      ></Image>
      <TemperDiv>
        <h1>{weatherSelected.maxDayTemperature + "º"}</h1>
        <h2>{weatherSelected.minNightTemperature + "º"}</h2>
      </TemperDiv>
      <TemperDiv>
        <h4>Máx</h4>
        <h4>Min</h4>
      </TemperDiv>
      <Divisor />
      <TemperDiv>
        <h5>Probab. de Precipitação</h5>
        <h5>Vento max</h5>
        <h5>Humidade</h5>
      </TemperDiv>
      <TemperDiv>
        <h3>{weatherSelected.humidity + "%"}</h3>
        <h3>{weatherSelected.precProbability * 100 + "%"}</h3>
        <h3>{weatherSelected.maxWindSpeed + "km"}</h3>
      </TemperDiv>
    </Box>
  );
}
