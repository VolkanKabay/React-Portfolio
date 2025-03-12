import { Container } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Coming Soon!",
      description: "Currently working on a new project. Stay tuned!",
    },
  ];

  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
      }}
    >
      <NavigationBar />

      <div
        style={{
          position: "fixed",
          zIndex: 1,
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
        }}
      >
        {projects.map((project) => (
          <div key={project.id}>
            <motion.div
              transition={{ delay: 0.5, duration: 1.5 }}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              style={{
                fontSize: "2rem",
                textAlign: "center",
                display: "block",
                fontWeight: 700,
              }}
            >
              {project.title}
            </motion.div>

            <div
              style={{
                padding: "2%",
              }}
            >
              <motion.p
                transition={{ delay: 0.5, duration: 1.5 }}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                style={{
                  textAlign: "center",
                  display: "block",
                  fontWeight: 400,
                  fontSize: "20px",
                }}
              >
                {project.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ position: "fixed", zIndex: 1, bottom: 0, left: 0, right: 0 }}
      >
        <Footer />
      </div>
    </Container>
  );
};

export default Projects;
