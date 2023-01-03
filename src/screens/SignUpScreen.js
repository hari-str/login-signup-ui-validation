import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { FormHelperText, useTheme } from "@mui/material";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [showPassword, setShowPassword] = useState(false);

  //muitheme
  const { palette } = useTheme();

  const handleRegister = (data) => {
    alert("Register Successfully");
    console.log(data);
    if (data) {
      navigate("/");
    }
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //check password event
  const password = watch("password");

  return (
    <Box backgroundColor={palette.background.alt} sx={{ flex: 1 }}>
      <Grid
        sx={{
          maxWidth: "430px",
          margin: "0 auto",
          padding: "1rem",
          minHeight: "500px",
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
          Create new account.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleRegister)}
          noValidate
          autoComplete="off"
        >
          <Box display="flex" sx={{ columnGap: "1rem" }}>
            <TextField
              label="FirstName*"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "1rem" }}
              {...register("firstname", { required: "firstname is required!" })}
              error={Boolean(errors.firstname)}
              helperText={errors.firstname?.message}
            />
            <TextField
              label="LastName*"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "1rem" }}
              {...register("lastname", { required: "lastname is required!" })}
              error={Boolean(errors.lastname)}
              helperText={errors.lastname?.message}
            />
          </Box>

          <TextField
            label="Mobile"
            type="number"
            minLength="10"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "1rem" }}
            {...register("mobile", { required: "mobile is required!" })}
            error={Boolean(errors.mobile)}
            helperText={errors.mobile?.message}
          />
          <TextField
            label="Email*"
            type="email"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "1rem" }}
            {...register("email", {
              required: "email is required!",
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
            fullWidth
            error={Boolean(errors.password)}
            sx={{ marginBottom: "1rem" }}
          >
            <InputLabel htmlFor="outline-adornment-password">
              Password*
            </InputLabel>
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              {...register("password", {
                required: "password is required!",
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message:
                    "password should contain atleast one number and one special character",
                },
                minLength: {
                  value: 8,
                  message: "Minimum Required length is 8",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum Required lenth is 20",
                },
              })}
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
              Confirm Password*
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
              label="Confirm Password"
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              {...register("cpassword", {
                required: "confirm password is required!",
                validate: (value) =>
                  value === password || "The password do not match!",
              })}
            />
            <FormHelperText>{errors.cpassword?.message}</FormHelperText>
          </FormControl>
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
            Create account
          </Button>
        </Box>

        <Typography
          textAlign="center"
          fontSize={14}
          sx={{ my: 3, color: palette.neutral.main }}
        >
          Already have an account ?
          <Link to="/" style={{ marginLeft: 5, color: palette.primary.main }}>
            Login
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
};

export default SignUpScreen;
