import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Panel, Stack } from "rsuite";

const data = [
  {
    name: "11/11/2023",
    temperatura: 28,
    humedad: 56,
    amt: 2400,
  },
  {
    name: "12/11/2023",
    temperatura: 29,
    humedad: 64,
    amt: 2210,
  },
  {
    name: "13/11/2023",
    temperatura: 27,
    humedad: 60,
    amt: 2290,
  },
  {
    name: "14/11/2023",
    temperatura: 30,
    humedad: 58,
    amt: 2000,
  },
  {
    name: "15/11/2023",
    temperatura: 27,
    humedad: 67,
    amt: 2181,
  },
  {
    name: "16/11/2023",
    temperatura: 28,
    humedad: 67,
    amt: 2500,
  },
  {
    name: "17/11/2023",
    temperatura: 29,
    humedad: 58,
    amt: 2100,
  },
];

function Dispositivo() {
  return (
    <Panel shaded>
      <Stack justifyContent="space-around">
        <Stack direction="column" spacing={5}>
          <h6>Temperatura</h6>
          <h5>22°C</h5>
        </Stack>
        <Stack direction="column">
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperatura" stroke="#ff3b30" />
            <Line type="monotone" dataKey="humedad" stroke="#4285f4" />
          </LineChart>
        </Stack>
      </Stack>
    </Panel>
  );
}

export default function Dashboard() {
  return (
    <>
      <Panel shaded>
        <Stack justifyContent="space-around">
          <Stack direction="column">
            <h6>Dispositivos activos</h6>
            <p>2</p>
          </Stack>
          <Stack direction="column">
            <h6>Dispositivos inactivos</h6>
            <p>2</p>
          </Stack>
        </Stack>
      </Panel>
      <Dispositivo />
    </>
  );
}
