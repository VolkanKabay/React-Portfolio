import { Container } from "@mui/material";
import AnimatedWelcome from "./AnimatedWelcome";
import NavigationBar from "./NavigationBar";
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
      <NavigationBar />
      <AnimatedWelcome />
    </Container>
  );
}

export default App;
