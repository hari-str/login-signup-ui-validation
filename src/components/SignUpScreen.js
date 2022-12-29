import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid
      sx={{
        maxWidth: "430px",
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
        Signup
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
        />
        <TextField
          label="Mobile"
          type="number"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
        />
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: "1rem" }}>
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
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: "1rem" }}>
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
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
            label="Confirm Password"
          />
        </FormControl>
        <Button variant="contained" sx={{ width: "100%", marginTop: "1rem" }}>
          Register
        </Button>
      </Box>

      <Typography textAlign="center" sx={{ my: 3 }}>
        Already have an account ?<Link to="/">Login</Link>
      </Typography>
    </Grid>
  );
};

export default SignUpScreen;
