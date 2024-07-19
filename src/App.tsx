import { Container } from "@mui/material";
import AnimatedWelcome from "./AnimatedWelcome";
import NavigationBar from "./NavigationBar";
import ParticlesComponent from "./components/Particles";
import "./App.css";
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
      className="App"
    >
      <ParticlesComponent id="particles" />
      <NavigationBar />
      <AnimatedWelcome />
    </Container>
  );
}

export default App;
