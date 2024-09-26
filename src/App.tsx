import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import MainTable from "./components/MainTable";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Grid 
      templateAreas={{
        base: `"side main"`,
        md: `"nav nav "
              "side main"`,
      }}
    >
      <Show above="md">
        <GridItem area={"nav"}>
          <Nav />
        </GridItem>
      </Show>
      <GridItem  bg="grey" area={"side"} borderTopRightRadius={10}>
        <SideBar></SideBar>
      </GridItem>
      <GridItem area={"main"}>
        <MainTable/>
      </GridItem>
    </Grid>
  );
}

export default App;