import { useState } from "react";
import { Button, Input, Notification, Panel, Stack, useToaster } from "rsuite";

export default function AgregarPlanta() {
  const [loading, setLoading] = useState(false);
  const toaster = useToaster();

  const message = (
    <Notification
      closable
      header={"El dispositivo fue agregado exitosamente!"}
    ></Notification>
  );

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toaster.push(message, { placement: "topEnd" });
    }, 2000);
  };

  return (
    <Panel style={{ marginTop: "10px", backgroundColor: "#f2f2f2" }}>
      <h3>Agregar Nuevo Dispositivo</h3>
      <br />
      <Stack spacing={10}>
        <Input placeholder="ID del dispositivo" name="ID" />
        <Button
          appearance="primary"
          color="green"
          loading={loading}
          onClick={handleLoading}
        >
          Agregar
        </Button>
      </Stack>
    </Panel>
  );
}
