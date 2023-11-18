import { Placeholder, Stack } from "rsuite";

export function LoadingComentarios() {
    return (
      <>
        <Stack direction="column">
          <Stack.Item style={{ width: "100%" }}>
            <Placeholder.Paragraph
              active
              graph="circle"
              style={{ marginBottom: 10 }}
            />
          </Stack.Item>
          <Stack.Item style={{ width: "100%" }}>
            <Placeholder.Paragraph
              active
              graph="circle"
              style={{ marginBottom: 10 }}
            />
          </Stack.Item>
        </Stack>
      </>
    );
  }
  