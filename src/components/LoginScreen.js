import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid
      sx={{
        maxWidth: "390px",
        border: "1px solid lightgray",
        padding: "1rem",
        minHeight: "500px",
        borderRadius: "4px",
      }}
    >
      <Typography
        variant="h4"
        textAlign={"center"}
        fontWeight={"700"}
        sx={{ fontSize: "2rem", marginBottom: "2rem" }}
      >
        Login
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Username"
          variant="outlined"
          sx={{ marginBottom: "1rem" }}
          fullWidth
        />

        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Typography textAlign="end" sx={{ my: 1, textDecoration: "none" }}>
          <Link to="/" className="forgot_pwd">
            Forgot password?
          </Link>
        </Typography>
        <Button variant="contained" sx={{ width: "100%", marginTop: "1rem" }}>
          Login
        </Button>
      </Box>
      <Typography textAlign="center" sx={{ mb: 2, mt: 1 }}>
        Don't have an account ?<Link to="/signup">Signup</Link>
      </Typography>
      <div className="or">OR</div>
      <Button
        sx={{ width: "100%", marginTop: "1rem" }}
        startIcon={<GoogleIcon />}
        variant="outlined"
      >
        Google
      </Button>
      <Button
        sx={{ width: "100%", marginTop: "1rem" }}
        startIcon={<FacebookIcon />}
        variant="outlined"
      >
        Facebook
      </Button>
    </Grid>
  );
};

export default LoginScreen;
