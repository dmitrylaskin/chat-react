import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";

export const Login = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: "93vh" }}
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid
          style={{ width: "400px", background: "lightgrey" }}
          container
          alignItems={"center"}
          direction="column"
        >
          <Box p={5}>
            <Button variant="outlined">Enter with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
