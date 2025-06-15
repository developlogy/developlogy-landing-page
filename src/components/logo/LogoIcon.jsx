import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function LogoIcon() {
  const theme = useTheme();

  return (
    <Box component={RouterLink} to="/" sx={{ display: 'inline-block', lineHeight: 0 }}>
      <svg
        baseProfile="tiny"
        height="28"
        version="1.2"
        width="250px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsev="http://www.w3.org/2001/xml-events"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect fill={theme.palette.primary.main} height="20" rx="4" ry="4" width="20" x="4" y="4" />
        <text fill={theme.palette.primary.main} fontFamily="Poppins" fontSize="16" fontWeight="bold" x="30" y="20">
          Developlogy
        </text>
      </svg>
    </Box>
  );
}