import { Container } from "@mui/material";
import NavigationBar from "./NavigationBar";

const Projects = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2%",
          height: "100vh",
        }}
      >
        <NavigationBar />
      </Container>
    </>
  );
};

export default Projects;
