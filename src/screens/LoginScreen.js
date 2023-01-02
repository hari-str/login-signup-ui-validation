import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormHelperText, useTheme } from "@mui/material";
import GoogleLogo from "../assets/google-logo.png";

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => alert(JSON.stringify(data));
  // showpassword
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //muitheme
  const { palette } = useTheme();

  return (
    <Box backgroundColor={palette.background.alt} sx={{ flex: 1 }}>
      <Grid
        sx={{
          maxWidth: "390px",
          margin: "0 auto",
          padding: "1rem",
          borderRadius: "4px",
        }}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight={"700"}
          sx={{
            fontSize: "2rem",
            marginBottom: "2rem",
            color: palette.neutral.light,
          }}
        >
          Welcome back!
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            size="medium"
            sx={{ marginBottom: "1rem" }}
            fullWidth
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />

          <FormControl
            variant="outlined"
            size="medium"
            fullWidth
            error={Boolean(errors.password)}
          >
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              {...register("password", { required: "Password is required!" })}
            />
            <FormHelperText>{errors.password?.message}</FormHelperText>
          </FormControl>
          <Typography
            textAlign="end"
            sx={{
              my: 1,
            }}
          >
            <Link to="/" style={{ color: palette.neutral.main }}>
              Forgot password?
            </Link>
          </Typography>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{
              fontWeight: 700,
              marginTop: "1rem",
              color: palette.background.alt,
              "&:hover": {
                color: palette.primary.main,
                backgroundColor: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            Log in
          </Button>
        </form>

        <Typography
          textAlign="center"
          fontSize={14}
          sx={{
            my: 3,
            color: palette.neutral.main,
          }}
        >
          Don't have an account ?
          <Link
            to="/signup"
            style={{
              marginLeft: 5,
              color: palette.primary.main,
            }}
          >
            Signup
          </Link>
        </Typography>
        <div className="or">or</div>

        {/* social button */}

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={2}
          sx={{
            padding: "0.6rem",
            border: "1px solid lightgray",
            borderRadius: 1,
            cursor: "pointer",
            "&:hover": {
              color: palette.neutral.light,
              backgroundColor: palette.background.default,
            },
          }}
        >
          <Grid sx={{ flex: "1" }}>
            <img src={GoogleLogo} alt="GoogleLogo" width={20} />
          </Grid>
          <Grid sx={{ flex: "9" }} container justifyContent="center">
            <Typography noWrap color={palette.neutral.main}>
              Login with Google
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginScreen;
