import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import Footer from "./Footer";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        paddingTop: "2%",
      }}
    >
      <NavigationBar />
      <Typography
        fontWeight={700}
        fontSize={isMobile ? 32 : 40}
        variant="h2"
        sx={{
          textAlign: "start",
          color: "#ebdddd",
          marginTop: isMobile ? "8%" : "12.5%",
          marginBottom: "15%",
        }}
      >
        Tech Stack
      </Typography>
      <Grid
        container
        spacing={isMobile ? 2 : 4}
        justifyContent="space-around"
        sx={{ marginBottom: "5%" }}
      >
        <Grid item xs={6} sm={4} md={3}>
          <SkillBox
            imageSrc="./react.svg"
            alt="React"
            text="React"
            rating={3}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <SkillBox
            imageSrc="./typescript.svg"
            alt="TypeScript"
            text="TypeScript"
            rating={3}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <SkillBox
            imageSrc="./redux.svg"
            alt="Redux"
            text="Redux"
            rating={2}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <SkillBox
            imageSrc="./javascript.svg"
            alt="JavaScript"
            text="JavaScript"
            rating={2}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <SkillBox
            imageSrc="./mui.svg"
            alt="Material-UI"
            text="Material-UI"
            rating={3}
          />
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "#ebdddd" }} />

      <Box sx={{ marginTop: "5%", marginBottom: "10%" }}>
        <motion.div
          style={{
            color: "#ebdddd",
            fontSize: isMobile ? 14 : 20,
            fontWeight: 400,
            textAlign: "start",
          }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5 }}
        >
          <b>Disclaimer: </b>
          <br />
          Obviously I'm not an experienced developer yet, so I'm not a master in
          any of these technologies. But I'm trying to improve myself and learn
          new things about these technologies every day.
        </motion.div>
      </Box>
      <Footer />
    </Container>
  );
};

const SkillBox = ({
  imageSrc,
  alt,
  text,
  rating,
}: {
  imageSrc: string;
  alt: string;
  text: string;
  rating: number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <motion.img
        animate={{ opacity: 1, y: -40 }}
        initial={{ opacity: 0, y: 0 }}
        transition={{ delay: 0.25, duration: 1.5 }}
        src={imageSrc}
        alt={alt}
        style={{ width: "50%", maxWidth: "100%", height: "auto" }}
      />
      <Typography sx={{ color: "#ebdddd", fontSize: 20 }}>{text}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
        {Array.from({ length: 5 }, (_, index) =>
          index < rating ? (
            <StarIcon key={index} sx={{ color: "#ebdddd" }} />
          ) : (
            <StarBorderIcon key={index} sx={{ color: "#ebdddd" }} />
          )
        )}
      </Box>
    </Box>
  );
};

export default Skills;
