import { Stack } from "rsuite";

export default function AppFooter() {
  return (
    <Stack
      className="copyright"
      justifyContent="center"
      style={{ height: 40, marginTop: 20 }}
    >
      <div className="container">
        <p>
          © 2023, Made with ❤️ by{" "}
          <a
            href="#"
          >
            TI Suhsimi
          </a>
        </p>
      </div>
    </Stack>
  );
}
