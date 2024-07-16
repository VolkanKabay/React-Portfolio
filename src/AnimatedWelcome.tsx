import { Box } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedWelcome = () => {
  const text1 = "Hi,👋".split("");
  const text2 = "My name is".split("");
  const text3 = "Volkan";
  const text4 = "I am a Frontend Developer.".split("");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "end",
          marginTop: "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            style={{ marginBottom: "0px", fontSize: "3rem" }}
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
            style={{ marginTop: "3px", fontSize: "2rem" }}
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
              marginTop: "-2rem",
              fontSize: "3rem",
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
            style={{ marginTop: "-2rem", fontSize: "2rem" }}
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
          src="../memoji.png"
          alt="Memoji of"
          style={{ height: "auto", width: "20rem", marginRight: "-4rem" }}
        />
      </Box>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1.5 }}
        onClick={() => {
          window.location.href = "/projects";
        }}
        whileHover={{
          backgroundColor: "#ff4081",
          color: "white",
        }}
        style={{
          width: "16rem",
          margin: "2rem auto 0",
          marginTop: "20rem",
          padding: "1rem",
          height: "4rem",
          fontSize: "1.4rem",
          background: "-webkit-linear-gradient(45deg, #FD297B, #FF655B)",

          color: "white",
          border: "none",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        Discover my work
      </motion.button>
    </>
  );
};

export default AnimatedWelcome;
