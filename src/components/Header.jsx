import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, description, isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default Header;
