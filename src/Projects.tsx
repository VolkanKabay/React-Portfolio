import { Box, Container, Typography } from "@mui/material";
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
      link: "https://volkankabay.netlify.app/",
      description:
        "This is the portfolio you are currently looking at. It was built using React, TypeScript, and Material-UI. The animations were made using Framer Motion. I also used React-Router to handle the routing. The project is hosted on Netlify and the source code is available on GitHub.You can clearly see the improvements I made in my coding skills since the Spotify Clone.Since this is a portfolio, I wanted to keep it simple and clean, so I implemented a dark theme, animations and no unnecessary features.",
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "100vh",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
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
            <Typography
              variant="h3"
              fontWeight={600}
              mt={5}
              mb={5}
              textAlign={"center"}
            >
              {project.title}
            </Typography>
            <Box
              sx={{
                backgroundColor: "linear-gradient(to right, #414345, #232526)",
                padding: "2%",
                boxShadow:
                  "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
              }}
            >
              <motion.img
                transition={{ delay: 1, duration: 1.5 }}
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

              <Typography
                variant="body1"
                fontWeight={400}
                fontSize={20}
                textAlign={"start"}
                mt={2}
                mb={10}
              >
                {project.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
