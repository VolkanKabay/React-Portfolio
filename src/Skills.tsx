import { Box, Container, Divider, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";

const Skills = () => {
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
      <Typography
        fontWeight={700}
        fontSize={40}
        variant="h2"
        sx={{ textAlign: "start", color: "#ebdddd", marginTop: " 12.5%" }}
      >
        Tech Stack
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5%",
        }}
      >
        <SkillBox imageSrc="../src/assets/react.svg" alt="React" text="React" />
        <SkillBox
          imageSrc="../src/assets/typescript.svg"
          alt="TypeScript"
          text="TypeScript"
        />
        <SkillBox imageSrc="../src/assets/redux.svg" alt="Redux" text="Redux" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5%",
        }}
      >
        <SkillBox
          imageSrc="../src/assets/javascript.svg"
          alt="JavaScript"
          text="JavaScript"
        />
        <SkillBox
          imageSrc="../src/assets/mui.svg"
          alt="Material-UI"
          text="Material-UI"
        />
      </Box>
      <Divider sx={{ marginTop: "10%", backgroundColor: "#ebdddd" }} />

      <Box
        sx={{
          display: "flex",
          marginTop: "10%",
        }}
      >
        <motion.text
          style={{
            color: "#ebdddd",
            fontSize: 30,
            fontWeight: 400,
            marginBottom: "10%",
          }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5 }}
        >
          <b>Disclaimer: </b> <br /> Obviously I'm not a experienced developer
          yet, so I'm not a master in any of these technologies. But I'm trying
          to improve myself and learn new things about these technologies
          everyday.
        </motion.text>
      </Box>
    </Container>
  );
};

const SkillBox = ({
  imageSrc,
  alt,
  text,
}: {
  imageSrc: string;
  alt: string;
  text: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <motion.img
        animate={{ opacity: 1, y: -40 }}
        initial={{ opacity: 0, y: 0 }}
        transition={{ delay: 0.25, duration: 1.5 }}
        src={imageSrc}
        alt={alt}
        style={{ width: "50%", height: "100%" }}
      />
      <Typography sx={{ textAlign: "center", color: "#ebdddd" }} fontSize={40}>
        {text}
      </Typography>
    </Box>
  );
};

export default Skills;
