import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToken } from "./API/tokenSlice";
import { IconButton } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  return (
    <>
      <Container sx={{ marginLeft: "8%" }}>
        <Stack spacing={2} direction="row" mt={5}>
          <IconButton onClick={() => navigate("/")}>
            <AutoStoriesSharpIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              marginLeft: "10%",
              display: { xs: "none", md: "flex" },
              fontWeight: 900,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Book Buddy
          </Typography>

          <Stack spacing={2} direction="row" style={{ paddingLeft: "25%" }}>
            {token === null ? (
              <>
                <Button variant="contained" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button
                  variant="contained"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(setToken({ token: null }));
                  navigate("/");
                }}
              >
                Logout
              </Button>
            )}

            <Button variant="contained" onClick={() => navigate("/Account")}>
              My profile
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
export default HomePage;
