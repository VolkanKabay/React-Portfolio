import { Box, Container } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "./spotify clone 2.png",
      title: "Spotify Clone",
      link: "https://github.com/VolkanKabay/spotify-klon",
      description:
        "This was a project I did to learn more about different technologies like React, Redux, and the Material-UI component library. This Project features dynamic routing, state management, and showing data based on API calls. The layout is obviously based on the Spotify Web Player. This was one of my first projects so it has some flaws, for example it not being responsive.",
    },
    {
      id: 2,
      image: "./react portfolio.png",
      title: "This Portfolio!",
      link: "https://github.com/VolkanKabay/React-Portfolio",
      description:
        "This is the portfolio you are currently looking at. It was built using React, TypeScript, and Material-UI. The animations were made using Framer Motion. I also used React-Router to handle the routing. The project is hosted on Netlify and the source code is available on GitHub.You can clearly see the improvements I made in my coding skills since the Spotify Clone.Since this is a portfolio, I wanted to keep it simple and clean, so I implemented a dark theme, animations and no unnecessary features. A visitor count is present, which is obtained from an firebase database.",
    },
  ];

  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "100vh",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          marginTop: "10%",
          gap: "3%",
          display: "block",
          justifyContent: "space-around",
          alignItems: "space-around",
          height: "100%",
        }}
      >
        {projects.map((project) => (
          <Box key={project.id} sx={{}}>
            <motion.text
              transition={{ delay: 0.5, duration: 1.5 }}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              fontWeight={600}
              style={{
                fontSize: "2rem",
                marginBottom: "2%",
                textAlign: "center",
                display: "block",
                fontWeight: 600,
              }}
            >
              {project.title}
            </motion.text>
            <Box
              sx={{
                backgroundColor: "linear-gradient(to right, #414345, #232526)",
                padding: "2%",
                boxShadow:
                  "0px 0px 10px 0px linear-gradient(to right, #414345, #232526)",
              }}
            >
              <motion.img
                transition={{ delay: 0.5, duration: 1.5 }}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                onClick={() => window.open(project.link, "_blank")}
                src={project.image}
                alt={project.title}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "auto",
                  objectFit: "fill",
                  boxShadow: "0px 0px 10px 0px #000000",
                }}
              />

              <motion.text
                transition={{ delay: 0.5, duration: 1.5 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                fontWeight={400}
                fontSize={20}
                style={{
                  marginTop: "3%",
                  textAlign: "start",
                }}
              >
                {project.description}
              </motion.text>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
