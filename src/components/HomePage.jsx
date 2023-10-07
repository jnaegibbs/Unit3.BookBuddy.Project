import Books from './Books';
import {Link} from "react-router-dom"; 
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';




const HomePage = () => {
   return (
    <>
    <Container>
    <Stack spacing={2} direction="row" mt={5}>
    <AutoStoriesSharpIcon/>
    <Typography variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
            
              mr: 2,
              mt: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Book Buddy
          </Typography>

        <Stack spacing={2} direction="row">
        <Button variant="contained" >
            <Link to="/login">Log In</Link>
        </Button>


        <Button variant="contained">
            <Link to="/register">Register</Link>
        </Button>
        </Stack>
        </Stack>
    </Container>
   <Books/>
    </>
   )

}
export default HomePage

