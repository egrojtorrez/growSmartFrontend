import { BiUser, BiLock } from "react-icons/bi";

import { Button, Panel, Stack, Input, InputGroup, Divider } from "rsuite";

// import Brand from "@components/layout/Sidebar/Brand";

import { useActionData, Form } from "react-router-dom";
import { useEffect } from "react";
import { useToast } from "@hooks/useToast";
import { MessageError } from "@components/Notifications/MessageNotification";
import BrandLogin from "./BrandLogin";
import { FaSeedling } from "react-icons/fa";

export default function Login() {
  const { notify } = useToast();
  const action = useActionData();

  useEffect(() => {
    if (action?.message) {
      notify(<MessageError text={action.message} />);
    }
  }, [action]);

  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="column"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#24A148",
          // background: "linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(215,215,242,1) 38%, rgba(255,245,197,1) 100%)",
        }}
      >
        <BrandLogin style={{ marginBottom: 10 }} />
        <Panel
          bordered
          style={{ background: "#fff", width: "80vw", maxWidth: 400 }}
          header={
            <Stack justifyContent="center" direction="column">
              <h3>Inicio de Sesion</h3>
              <FaSeedling
                style={{ fontSize: 60, color: "#24A148", margin: "15px" }}
              />
            </Stack>
          }
        >
          {/* <Form onSubmit={handleLogin} fluid> */}
          <Form method="post">
            <Stack direction="column" alignItems="stretch" spacing={10}>
              <InputGroup>
                <InputGroup.Addon>
                  <BiUser />
                </InputGroup.Addon>
                <Input placeholder="Usuario" name="identifier" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Addon>
                  <BiLock />
                </InputGroup.Addon>
                <Input
                  placeholder="Contraseña"
                  name="password"
                  id="password"
                  type="password"
                />
              </InputGroup>
              <Stack
                spacing={6}
                divider={<Divider vertical />}
                direction="row-reverse"
                justifyContent="space-between"
              >
                <Button
                  type="submit"
                  appearance="primary"
                  style={{
                    backgroundColor: "#796236",
                  }}
                >
                  Acceder
                </Button>
              </Stack>
            </Stack>
          </Form>

          {/* </Form> */}
        </Panel>
      </Stack>
    </>
  );
}
