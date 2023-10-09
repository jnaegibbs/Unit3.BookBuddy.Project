import Books from './Books';
import {Link} from "react-router-dom"; 
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();
   return (
    <>
    <Container sx={{marginLeft: "8%"}}>
    <Stack spacing={2} direction="row" mt={5}>
    <AutoStoriesSharpIcon/>
    <Typography variant="h4"
            noWrap
            component="a"
            sx={{
              marginLeft: "10%",
              display: { xs: 'none', md: 'flex' },
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Book Buddy
          </Typography>

        <Stack spacing={2} direction="row" style={{paddingLeft:"25%"}}>
        <Button 
            variant="contained" 
            onClick={()=> navigate("/login")}>
        Login</Button>


        <Button 
          variant="contained"
          onClick={()=> navigate("/register")}
          >Register
        </Button>
        </Stack>
        </Stack>
    </Container>
   <Books/>
    </>
   )

}
export default HomePage