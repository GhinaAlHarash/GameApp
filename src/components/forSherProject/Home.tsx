import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./NavBar"


const Home = () => {
  return (
    <Grid
    
    bgColor={'red.100'}
      templateAreas={
         `"nav"
            "main"`}
      style={{overflow:'hidden'}}

    >
      <GridItem bgColor={'red.200'} area={"nav"}>
        <NavBar/>
      </GridItem>
      <GridItem height={'700px'} area={"main"}>
        hi
      </GridItem>
    </Grid>
  )
}

export default Home