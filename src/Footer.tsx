import { Typography } from "@mui/material";
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
    <div
      style={{
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
      <a
        href="/impressum"
        style={{
          fontSize: "16px",
          color: "#ebdddd",
          fontWeight: "normal",
          marginTop: "1rem",
        }}
      >
        Disclaimer, Privacy Policy, and Impressum
      </a>
      <Typography
        variant="body2"
        sx={{
          color: "#ebdddd",
          marginTop: "0.3rem",
        }}
      >
        © 2024 Volkan Kabay. All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
