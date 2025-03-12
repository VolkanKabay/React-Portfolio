import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Search } from "@mui/icons-material";
const AnimatedWelcome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const text1 = "Hi!".split("");
  const text2 = "My name is".split("");
  const text3 = "Volkan";
  const text4 = "I am a Frontend Developer.".split("");
  const buttonVariants = {
    hidden: { opacity: 0, y: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      y: [0, -5, 5],
      scale: 1,
      transition: {
        delay: 3.5,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    hover: {
      boxShadow: "0px 0px 8px 0px white",
      delay: 0.1,
      duration: 0.1,
    },
    tap: { scale: 0.95 },
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: isMobile ? "5%" : "10%",
        }}
      >
        <div
          style={{
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
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
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
            style={{
              marginTop: "3px",
              fontSize: isMobile ? "1.5rem" : "2rem",
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
            }}
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
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
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
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
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
        </div>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
          src={"./memoji.png"}
          alt="Memoji of"
          style={{
            zIndex: 1,
            userSelect: "none",
            height: "auto",
            width: isMobile ? "14rem" : "20rem",
            marginBottom: isMobile ? "2rem" : 0,
            boxShadow:
              "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
          }}
        />
      </div>

      <motion.button
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          window.location.href = "/projects";
        }}
        style={{
          width: "16rem",
          fontWeight: "bold",
          color: "black",
          margin: "auto",
          height: "4rem",
          border: "1px solid white",
          fontSize: "1.2rem",

          borderRadius: "2rem",
          cursor: "pointer",
          background: "#f5f5f5",
        }}
        className="animation-button"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Search /> Discover my work
        </div>
      </motion.button>
      <Footer />
    </>
  );
};

export default AnimatedWelcome;
