import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "./Footer";
const AnimatedWelcome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const text1 = "Hi!".split("");
  const text2 = "My name is".split("");
  const text3 = "Volkan";
  const text4 = "I am a Frontend Developer.".split("");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: isMobile ? "5%" : "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            textAlign: "center",
            marginBottom: isMobile ? "2rem" : 0,
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            style={{
              marginBottom: "0px",
              fontSize: isMobile ? "2rem" : "3rem",
            }}
          >
            {text1.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            style={{ marginTop: "3px", fontSize: isMobile ? "1.5rem" : "2rem" }}
          >
            {text2.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.08 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            style={{
              marginTop: isMobile ? "-1rem" : "-2rem",
              fontSize: isMobile ? "2rem" : "3rem",
              background: "-webkit-linear-gradient(45deg, #FD297B, #FF655B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {text3.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.75 + index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 2 }}
            style={{
              marginTop: isMobile ? "-1rem" : "-2rem",
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            {text4.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.25 + index * 0.08 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </Box>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
          src={"./memoji.png"}
          alt="Memoji of"
          style={{
            userSelect: "none",
            height: "auto",
            width: isMobile ? "14rem" : "20rem",
            marginBottom: isMobile ? "2rem" : 0,
          }}
        />
      </Box>

      <motion.button
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 15 }}
        transition={{ delay: 4, duration: 1.5 }}
        onClick={() => {
          window.location.href = "/projects";
        }}
        style={{
          width: "16rem",
          margin: "auto",
          marginBottom: "2rem",
          padding: "1rem",
          color: "white",
          height: "4rem",
          border: "none",
          fontSize: "1.4rem",
          background: "linear-gradient(to right, #FD297B, #FF655B)",
          borderRadius: "15px",
          cursor: "pointer",
        }}
        className="animation-button"
      >
        Discover my work
      </motion.button>
      <Footer />
    </>
  );
};

export default AnimatedWelcome;
