import {
  Chip,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const calculateAge = (birthDateString: string) => {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  if (!hasBirthdayPassed) {
    age -= 1;
  }
  return age;
};

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //* If you have copied this code from my repository, please replace the date below with your own birthdate.
  const age = calculateAge("2004-04-24");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "100vh",
        marginBottom: "2%",
      }}
    >
      <NavigationBar />
      <div
        style={{
          marginTop: 10,
          paddingLeft: 2,
          paddingRight: 2,
          marginLeft: isMobile ? "0" : "-1rem",
        }}
      >
        <div style={{ marginBottom: 4 }}>
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
            A dedicated and detail-oriented {age}-year-old Software Engineer
            with expertise in front-end development, leveraging technologies
            such as React, Redux, TypeScript, and Material-UI. Proficient in
            managing the WordPress website for a small business, ensuring
            seamless functionality and an optimized user experience.
            Additionally, equipped with extensive experience in hardware
            troubleshooting and maintenance, offering a well-rounded skill set
            in IT and software development. Driven to continually expand
            technical knowledge and contribute to impactful projects.
          </Typography>
        </div>

        <div style={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Work Experience
          </Typography>
          <WorkExperience
            title="WordPress Administrator for a small company"
            date="01.2025 - present"
            label="Wordpress / Part-time"
          />
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
        </div>

        <div style={{ marginBottom: 4 }}>
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
        </div>
      </div>
      <Footer />
    </Container>
  );
};

interface WorkExperienceProps {
  title: string;
  date: string;
  label: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  title,
  date,
  label,
}) => (
  <div style={{ marginBottom: 4 }}>
    <div
      style={{
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
    </div>
    <Typography
      variant="body1"
      sx={{ color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1 }}
    >
      {date}
    </Typography>
    <Divider sx={{ mt: 2, backgroundColor: "#ebdddd", opacity: 0.4 }} />
  </div>
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
  <div style={{ marginBottom: 4 }}>
    <div
      style={{
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
    </div>
    <Typography
      variant="body2"
      sx={{ color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1 }}
    >
      {date}
    </Typography>
    <Divider sx={{ mt: 2, backgroundColor: "#ebdddd", opacity: 0.4 }} />
  </div>
);

export default About;
