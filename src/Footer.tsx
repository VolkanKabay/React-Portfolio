import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const VisitorCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const docRef = doc(db, "visitorCount", "count");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCount(docSnap.data().count);
      }
    };

    fetchVisitorCount();
  }, []);

  return count ? `Total visitors: ${count}` : null;
};

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#ebdddd",
        }}
      >
        <VisitorCount />
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#ebdddd",
          marginTop: "1rem",
        }}
      >
        © 2024 Volkan Kabay. All rights reserved.
      </Typography>

      <a
        href="/impressum"
        style={{ fontSize: "16px", color: "#ebdddd", fontWeight: "normal" }}
      >
        Disclaimer, Privacy Policy, and Impressum
      </a>
    </Box>
  );
};

export default Footer;
