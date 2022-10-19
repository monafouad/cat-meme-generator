import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MemeGenerator from "./components/MemeGenerator/MemeGenerator";
import "./App.scss";

export default function App() {
  return (
    <Container maxWidth="xl" sx={{ p: 0 }}>
      <HeaderComponent />
      <Box maxWidth="lg" alignSelf="center">
        <MemeGenerator sz={{ mt: 4 }} />
      </Box>
    </Container>
  );
}
