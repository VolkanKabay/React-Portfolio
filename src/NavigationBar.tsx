import { AppBar, Box, Toolbar } from "@mui/material";
import { motion } from "framer-motion";
import "./NavigationBar.css";
import { GitHub, LinkedIn } from "@mui/icons-material";

const NavigationBar = () => {
  const linkVariants = {
    hover: { scale: 1.1, color: "#ebdddd" },
  };

  return (
    <div>
      <AppBar
        sx={{
          boxShadow: "none",
          width: "100%",
          backgroundColor: "#111111",
          transition: "opacity 0.5s",
          marginLeft: "0px",
          paddingLeft: "0px",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
            }}
          >
            <GitHub
              onClick={() =>
                window.open("https://github.com/Volkankabay", "_blank")
              }
              sx={{
                color: "#ebdddd",
                cursor: "pointer",
                fontSize: "1.5rem",
                marginTop: "0.5rem",
                marginLeft: "-1.5rem",
                marginRight: "1rem",
                width: "2.25rem",
                height: "2.25rem",
              }}
            />
            <LinkedIn
              onClick={() =>
                window.open(
                  "https://de.linkedin.com/in/volkan-kabay-9b3579233",
                  "_blank"
                )
              }
              sx={{
                color: "#ebdddd",
                cursor: "pointer",
                fontSize: "1.5rem",
                marginTop: "0.5rem",
                width: "2.6rem",
                height: "2.6rem",
              }}
            />
          </Box>

          <motion.a
            href="/"
            variants={linkVariants}
            whileHover="hover"
            className="nav-link"
          >
            Home
          </motion.a>
          <motion.a
            href="/about"
            variants={linkVariants}
            whileHover="hover"
            className="nav-link"
          >
            About
          </motion.a>
          <motion.a
            href="/skills"
            variants={linkVariants}
            whileHover="hover"
            className="nav-link"
          >
            Skills
          </motion.a>
          <motion.a
            href="/projects"
            variants={linkVariants}
            whileHover="hover"
            className="nav-link"
          >
            Projects
          </motion.a>
          <motion.a
            href="/contact"
            variants={linkVariants}
            whileHover="hover"
            className="nav-link"
          >
            Contact
          </motion.a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
