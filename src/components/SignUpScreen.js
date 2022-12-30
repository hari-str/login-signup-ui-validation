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
import { useForm } from "react-hook-form";
import { FormHelperText } from "@mui/material";

const SignUpScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => console.log(data);
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
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          {...register("name", { required: "Name is required!" })}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
        />
        <TextField
          label="Mobile"
          type="number"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          {...register("mobile", { required: "mobile is required!" })}
          error={Boolean(errors.mobile)}
          helperText={errors.mobile?.message}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          {...register("email", { required: "email is required!" })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <FormControl
          variant="outlined"
          fullWidth
          error={Boolean(errors.password)}
          sx={{ marginBottom: "1rem" }}
        >
          <InputLabel htmlFor="outline-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outline-adornment-password"
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
            {...register("password", { required: "password is required!" })}
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          error={Boolean(errors.cpassword)}
          sx={{ marginBottom: "1rem" }}
        >
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
            {...register("cpassword", {
              required: "confirm password is required!",
            })}
          />
          <FormHelperText>{errors.cpassword?.message}</FormHelperText>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", marginTop: "1rem" }}
        >
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
