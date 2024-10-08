import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Star<span style={{ color: theme.palette.primary.main }}>Stream</span>
    </Typography>
  );
};

export default Logo;