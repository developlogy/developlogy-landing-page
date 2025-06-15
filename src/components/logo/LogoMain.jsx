// material-ui
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain() {
  const theme = useTheme();

  return (
    <Box component={RouterLink} to="/" sx={{ display: 'inline-block', lineHeight: 0 }}>
      <svg
        baseProfile="tiny"
        height="60px"
        version="1.2"
        width="250px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsev="http://www.w3.org/2001/xml-events"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <text fill={theme.palette.primary.main} fontFamily="Poppins" fontSize="30" fontWeight="bold" x="0px" y="40px">
          Developlogy
        </text>
      </svg>
    </Box>
  );
}