import { Container } from "@mui/material";
import AnimatedWelcome from "./AnimatedWelcome";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "115vh",
        marginBottom: "2%",
      }}
    >
      <NavigationBar />
      <AnimatedWelcome />
    </Container>
  );
}

export default App;
