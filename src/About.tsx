import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const About = () => {
  return (
    <Container sx={{ marginTop: "2%" }}>
      <NavigationBar />

      <Box sx={{ mt: 4, px: 2 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ebdddd", maxWidth: "75ch", mb: 2 }}
          >
            I am a 20-year-old Software Engineer passionate about developing web
            applications. I have experience with front-end development using
            React, Redux, TypeScript, and Material-UI. Currently improving my
            skills in frontend development and interested in backend development
            as well.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Work Experience
          </Typography>
          <WorkExperience
            title="Apprenticeship as IT-Specialist"
            date="09.2023 - present"
            label="Full-time"
          />
          <WorkExperience
            title="Internship as IT-Specialist"
            date="06.2023 - 07.2023"
            label="Internship"
          />
          <WorkExperience
            title="Self Employed - Hardware related services"
            date="12.2022 - 05.2024"
            label="Self Employed"
          />
          <WorkExperience
            title="Voluntary Social Year"
            date="10.2021 - 09.2022"
            label="Social Year"
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Education
          </Typography>
          <Education
            title="Self Teaching - Web Development"
            date="2023 - present"
            label="Self Teaching"
          />
          <Education
            title="Secondary school certificate"
            date="2021"
            label="School Certificate"
          />
        </Box>
      </Box>

      <Footer />
    </Container>
  );
};

const WorkExperience = ({
  title,
  date,
  label,
}: {
  title: string;
  date: string;
  label: string;
}) => (
  <Box sx={{ mb: 4 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2" sx={{ color: "#ebdddd", opacity: 0.7 }}>
        {title}
      </Typography>
      <Chip
        label={label}
        variant="filled"
        sx={{ background: "#D7FFE0", color: "#1B5E20" }}
      />
    </Box>
    <Typography
      variant="body1"
      sx={{ color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1 }}
    >
      {date}
    </Typography>
    <Divider sx={{ mt: 2, backgroundColor: "#ebdddd", opacity: 0.4 }} />
  </Box>
);

const Education = ({
  title,
  date,
  label,
}: {
  title: string;
  date: string;
  label: string;
}) => (
  <Box sx={{ mb: 4 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body1" sx={{ color: "#ebdddd", opacity: 0.7 }}>
        {title}
      </Typography>
      <Chip
        label={label}
        variant="filled"
        sx={{ background: "#D7FFE0", color: "#1B5E20" }}
      />
    </Box>
    <Typography
      variant="body2"
      sx={{ color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1 }}
    >
      {date}
    </Typography>
    <Divider sx={{ mt: 2, backgroundColor: "#ebdddd", opacity: 0.4 }} />
  </Box>
);

export default About;
