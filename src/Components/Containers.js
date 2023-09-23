import React from "react";
import { Container, Typography } from "@mui/material";
const Containers = () => {
  return (
    <>
      <Container sx={{ background: "green" }} maxWidth="xs">
        <Typography variant="body2">this is axis</Typography>
      </Container>
      <br />
      <Container
        sx={{ background: "green" }}
        maxWidth="sm"
        Container="text align center"
      >
        <Typography variant="body2">this is for small</Typography>
      </Container>
      <br />
      <Container sx={{ background: "green" }} maxWidth="md">
        <Typography variant="body2">this is medium</Typography>
      </Container>
      <br />
      <Container sx={{ background: "green" }} maxWidth="lg">
        <Typography variant="body2">this is large</Typography>
      </Container>
      <br />
      <Container sx={{ background: "green" }} maxWidth="xl">
        <Typography variant="body2">this is extra large</Typography>
      </Container>
    </>
  );
};

export default Containers;
