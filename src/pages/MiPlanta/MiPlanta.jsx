import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Panel } from "rsuite";
import { Button, ButtonGroup } from "rsuite";
import { Progress, Row, Col } from "rsuite";
import { Stack } from "rsuite";

export default function MiPlanta() {
  return (
    <>
      <PanelGroup>
        <UpperPanel />
      </PanelGroup>
      <LowerPanel />
    </>
  );
}

const UpperPanel = () => {
  return (
    <>
      <Panel shaded>
        <Stack
          justifyContent="flex-start"
          spacing={6}
          style={{ marginLeft: 75 }}
        >
          <div>
            <label
              style={{
                fontSize: 20,
              }}
            >
              Planta 1
            </label>
          </div>

          <div
            style={{
              display: "inline-block",
              width: 150,
              height: 150,
              marginLeft: 25,
            }}
          >
            <img
              className="profileplant"
              src="https://purepng.com/public/uploads/large/11232131312312-eke.png"
              alt="Foto de perfil"
              style={{
                width: 150,
                height: 150,
              }}
            ></img>
          </div>

          <div
            className="flex-item"
            style={{
              marginLeft: 25,
            }}
          >
            <Button
              style={{
                backgroundColor: "#24A148",
              }}
            >
              <p
                style={{
                  color: "#f2f2f2",
                  fontWeight: "bold",
                }}
              >
                Editar Planta
              </p>
            </Button>
          </div>

          <div
            className="flex-item"
            style={{
              marginLeft: 25,
            }}
          >
            <Button
              style={{
                backgroundColor: "#796236",
              }}
            >
              <p
                style={{
                  color: "#f2f2f2",
                  fontWeight: "bold",
                }}
              >
                Eliminar Planta
              </p>
            </Button>
          </div>
        </Stack>
      </Panel>
    </>
  );
};

const LowerPanel = () => {
  return (
    <>
      <Stack justifyContent="center" style={{ marginTop: 25 }}>
        <Stack direction="column" spacing={4}>
          <HumedadMaxima />
        </Stack>
        <Stack direction="column" spacing={4}>
          <HumedadMinima />
        </Stack>
        <Stack direction="column" spacing={4}>
          <TemperaturaMaxima />
        </Stack>
        <Stack direction="column" spacing={4}>
          <TemperaturaMinima />
        </Stack>
      </Stack>
      <Stack justifyContent="center" style={{ marginTop: 50 }}>
        <Dispositivo />
      </Stack>
    </>
  );
};

const HumedadMaxima = () => {
  const [percent, setPercent] = React.useState(50);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };

  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#52c41a" : "#3385ff";

  return (
    <>
      <ButtonGroup style={{}}>
        <Button onClick={decline}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>

      <Row>
        <Col md={6}>
          <div style={{ width: 180, marginTop: 10, display: "block" }}>
            <Progress.Circle
              percent={percent}
              strokeColor={color}
              status={status}
            />
          </div>
        </Col>
      </Row>
      <label style={{ marginTop: 12, fontSize: 24, display: "block" }}>
        Humedad Máxima
      </label>
    </>
  );
};

const HumedadMinima = () => {
  const [percent, setPercent] = React.useState(15);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };

  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#52c41a" : "#3385ff";

  return (
    <>
      <ButtonGroup style={{ marginLeft: 100 }}>
        <Button onClick={decline}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>

      <Row>
        <Col md={6}>
          <div
            style={{
              width: 180,
              marginTop: 10,
              marginLeft: 100,
              display: "block",
            }}
          >
            <Progress.Circle
              percent={percent}
              strokeColor={color}
              status={status}
            />
          </div>
        </Col>
      </Row>
      <label
        style={{
          marginLeft: 95,
          marginTop: 12,
          fontSize: 24,
          display: "block",
        }}
      >
        Humedad Mínima
      </label>
    </>
  );
};

const TemperaturaMaxima = () => {
  return (
    <>
      <label
        style={{
          fontSize: 48,
          marginLeft: 80,
          marginTop: 128,
          paddingBottom: 40,
          display: "block",
        }}
      >
        35°C
      </label>
      <label style={{ fontSize: 24, marginLeft: 95, display: "block" }}>
        Temperatura Máxima
      </label>
    </>
  );
};

const TemperaturaMinima = () => {
  return (
    <>
      <label
        style={{
          fontSize: 48,
          marginLeft: 80,
          marginTop: 128,
          paddingBottom: 40,
          display: "block",
        }}
      >
        18°C
      </label>
      <label style={{ fontSize: 24, marginLeft: 75, display: "block" }}>
        Temperatura Mínima
      </label>
    </>
  );
};

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

const Dispositivo = () => {
  return (
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
  );
};
