import React from 'react';
import { Panel, PanelGroup} from 'rsuite';
import {Button, ButtonGroup} from 'rsuite';
import { Progress, Row, Col } from 'rsuite';
import { Stack } from "rsuite";
import Container from 'rsuite/Container';

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
      <Panel>
        <Stack spacing={6}>
          <div>
            <label
              style={{
                fontSize: 20,
              }}>
                Planta 1
            </label>
          </div>

           <div
              style={{
                display: "inline-block",
                width: 150,
                height: 150,
                marginLeft: 25,
              }}>
              <img className="profileplant" 
              src="https://purepng.com/public/uploads/large/11232131312312-eke.png" 
              alt="Foto de perfil"
              style={
                {
                  width: 150,
                  height: 150,
                }
              }></img>
            </div>

            <div className="flex-item"
              style={{
                marginLeft: 25,
              }}>
              <Button
                  style={{
                    backgroundColor: "#24A148",
                  }}>
                    <p style={{ 
                      color: "#f2f2f2"
                    }}>Editar Planta</p>
              </Button>
            </div>

            <div className="flex-item"
              style={{
                marginLeft: 25,
              }}>
              <Button
                  style={{
                    backgroundColor: "#796236",
                  }}>
                    <p style={{ 
                      color: "#f2f2f2"
                    }}>Eliminar Planta</p>
              </Button>
            </div>
        </Stack>
      </Panel>
      <hr />
    </>
  );
}

const LowerPanel = () => {
  return (
    <Stack spacing={6} style={{marginLeft: 150}}>
      <HumedadMaxima/>
      <HumedadMinima/>
      <TemperaturaMaxima/>
      <TemperaturaMinima/>
    </Stack>
  )
}

const HumedadMaxima = () => {
  const [percent, setPercent] = React.useState(10);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };

  const status = percent === 100 ? 'success' : null;
  const color = percent === 100 ? '#52c41a' : '#3385ff';

  return (
    <>
      <ButtonGroup style={{marginLeft: 100}}>
        <Button onClick={decline}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>

      <Row>
        <Col md={6}>
          <div style={{ width: 180, marginTop: 10, marginLeft: 100 }}>
            <Progress.Circle percent={percent} strokeColor={color} status={status} />
          </div>
        </Col>
      </Row>
      <label style={{marginLeft: 90, marginTop: 24, fontSize: 24}}>
        Humedad Máxima
      </label>
    </>
  );
}

const HumedadMinima = () => {
  const [percent, setPercent] = React.useState(10);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };

  const status = percent === 100 ? 'success' : null;
  const color = percent === 100 ? '#52c41a' : '#3385ff';

  return (
    <>
      <ButtonGroup style={{marginLeft: 100}}>
        <Button onClick={decline}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>

      <Row>
        <Col md={6}>
          <div style={{ width: 180, marginTop: 10, marginLeft: 100 }}>
            <Progress.Circle percent={percent} strokeColor={color} status={status} />
          </div>
        </Col>
      </Row>
      <label style={{marginLeft: 95, marginTop: 24, fontSize: 24}}>
        Humedad Mínima
      </label>
    </>
  );
}

const TemperaturaMaxima = () => {
  return(
    <>
      <label style={{fontSize: 48, marginLeft: 150, display: "block"}}>
        35°C
      </label>
      <label style={{fontSize: 24, marginLeft: 95}}>
        Temperatura Máxima
      </label>
    </>
  )
}

const TemperaturaMinima = () => {
  return(
    <>
      <label style={{fontSize: 48, marginLeft: 125, display: "block"}}>
        18°C
      </label>
      <label style={{fontSize: 24, marginLeft: 75}}>
        Temperatura Mínima
      </label>
    </>
  )
}