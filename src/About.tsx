import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const About = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          marginTop: "15%",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            color: "#ebdddd",
            marginBottom: "2%",
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          fontSize={18}
          sx={{
            color: "#ebdddd",
            maxWidth: "75ch",
            marginBottom: "2%",
          }}
        >
          I am a 20 year old Software Engineer with a passion for developing web
          applications. I have experience with front-end development using
          React, Redux, Typescript, Testing-Software (Vitest & Playwright) and
          Material-UI. Currently I am trying to improve my Frontend skills and
          learn new technologies which will help me to become a better
          developer. I am also interested in learning more about backend
          development. Building Projects and educating myself is what I enjoy
          the most.
        </Typography>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            color: "#ebdddd",
            marginBottom: "2%",
          }}
        >
          Work Experience
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            fontSize={20}
            sx={{
              color: "#ebdddd",
              opacity: 0.7,
              flexGrow: 1,
            }}
          >
            Apprenticeship as IT-Specialist
          </Typography>
          <Chip
            label="Full-time"
            variant="filled"
            sx={{
              background: "#D7FFE0",
              color: "#1B5E20",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          fontSize={14}
          sx={{
            color: "#ebdddd",
            opacity: 0.7,
          }}
        >
          09.2023 - present
        </Typography>
        <Divider
          sx={{
            marginTop: "2%",
            height: "2px",
            width: "100%",
            backgroundColor: "#ebdddd",
            opacity: 0.4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2%",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            fontSize={20}
            sx={{
              color: "#ebdddd",
              opacity: 0.7,
              flexGrow: 1,
            }}
          >
            Internship as IT-Specialist
          </Typography>
          <Chip
            label="Internship"
            variant="filled"
            sx={{
              background: "#D7FFE0",
              color: "#1B5E20",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          fontSize={14}
          sx={{
            color: "#ebdddd",
            opacity: 0.7,
          }}
        >
          06.2023 - 07.2023
        </Typography>
        <Divider
          sx={{
            marginTop: "2%",
            height: "2px",
            width: "100%",
            backgroundColor: "#ebdddd",
            opacity: 0.4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2%",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            fontSize={20}
            sx={{
              color: "#ebdddd",
              opacity: 0.7,
              flexGrow: 1,
            }}
          >
            Self Employed - Hardware related services
          </Typography>
          <Chip
            label="Self Employed"
            variant="filled"
            sx={{
              background: "#D7FFE0",
              color: "#1B5E20",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          fontSize={14}
          sx={{
            color: "#ebdddd",
            opacity: 0.7,
          }}
        >
          12.2022 - 05.2024
        </Typography>
        <Divider
          sx={{
            marginTop: "2%",
            height: "2px",
            width: "100%",
            backgroundColor: "#ebdddd",
            opacity: 0.4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2%",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            fontSize={20}
            sx={{
              color: "#ebdddd",
              opacity: 0.7,
              flexGrow: 1,
            }}
          >
            Voluntary Social Year
          </Typography>
          <Chip
            label="Social Year"
            variant="filled"
            sx={{
              background: "#D7FFE0",
              color: "#1B5E20",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          fontSize={14}
          sx={{
            color: "#ebdddd",
            opacity: 0.7,
          }}
        >
          10.2021 - 09.2022
        </Typography>
        <Divider
          sx={{
            marginTop: "2%",
            height: "2px",
            width: "100%",
            backgroundColor: "#ebdddd",
            opacity: 0.4,
          }}
        />
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            color: "#ebdddd",
            marginTop: "2%",
          }}
        >
          Education
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2%",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            fontSize={20}
            sx={{
              color: "#ebdddd",
              opacity: 0.7,
              flexGrow: 1,
            }}
          >
            Self Teaching - Web Development
          </Typography>
          <Chip
            label="Self Teaching"
            variant="filled"
            sx={{
              background: "#D7FFE0",
              color: "#1B5E20",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          fontSize={14}
          sx={{
            color: "#ebdddd",
            opacity: 0.7,
          }}
        >
          2023 - present
        </Typography>
        <Divider
          sx={{
            marginTop: "2%",
            height: "2px",
            width: "100%",
            backgroundColor: "#ebdddd",
            opacity: 0.4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2%",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            fontSize={20}
            sx={{
              color: "#ebdddd",
              opacity: 0.7,
              flexGrow: 1,
            }}
          >
            Secondary school certificate
          </Typography>
          <Chip
            label="School Certificate"
            variant="filled"
            sx={{
              background: "#D7FFE0",
              color: "#1B5E20",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          fontSize={14}
          sx={{
            color: "#ebdddd",
            opacity: 0.7,
          }}
        >
          2021
        </Typography>
        <Divider
          sx={{
            marginTop: "2%",
            height: "2px",
            width: "100%",
            backgroundColor: "#ebdddd",
            opacity: 0.4,
            marginBottom: "20%",
          }}
        />
      </Box>
      <Footer />
    </Container>
  );
};
export default About;
