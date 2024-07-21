import * as React from "react";
import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../Header";

const regeMail =
  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
const regPhone = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => handleClick();

  return (
    <Box>
      <Header title="CREATE USER" description="Create a New User Profile" />

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" sx={{ gap: 2 }}>
          <TextField
            label="First Name"
            variant="filled"
            sx={{ flex: 1 }}
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This field is required and max 20 characters"
                : null
            }
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <TextField
            label="Last Name"
            variant="filled"
            sx={{ flex: 1 }}
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required and max 20 characters"
                : null
            }
            {...register("lastName", { required: true, maxLength: 20 })}
          />
        </Stack>
        <TextField
          label="Email"
          variant="filled"
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? "Please provide a valid email address"
              : null
          }
          {...register("email", { required: true, pattern: regeMail })}
        />
        <TextField
          label="Contact Number"
          variant="filled"
          error={Boolean(errors.contact)}
          helperText={
            Boolean(errors.contact)
              ? "Please provide a valid phone number"
              : null
          }
          {...register("contact", { required: true, pattern: regPhone })}
        />
        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 2" variant="filled" />
        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New User
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              User created successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
