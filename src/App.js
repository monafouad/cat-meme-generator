import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "./components/Header/Header";
import MemeGenerator from "./components/MemeGenerator/MemeGenerator";
import "./App.scss";

export default function App() {
  return (
    <Container maxWidth="xl" sx={{ p: 0 }}>
      <Header />
      <Box maxWidth="lg" alignSelf="center">
        <MemeGenerator sz={{ mt: 4 }} />
      </Box>
    </Container>
  );
}
