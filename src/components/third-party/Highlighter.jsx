import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

// third-party
import { CopyToClipboard } from 'react-copy-to-clipboard';

// project-imports
import IconButton from 'components/@extended/IconButton';
import SyntaxHighlight from 'utils/SyntaxHighlight';

// assets
import { Code, Copy } from 'iconsax-react';

// ==============================|| CLIPBOARD & HIGHLIGHTER   ||============================== //

export default function Highlighter({ codeString, codeHighlight }) {
  const [highlight, setHighlight] = useState(codeHighlight);

  return (
    <>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex' }}>
          <CopyToClipboard text={codeString}>
            <Tooltip title="Copy the source" placement="top-end">
              <IconButton color="secondary" size="small">
                <Copy />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
          <Tooltip title="Show the source" placement="top-end">
            <IconButton
              sx={{ fontSize: '0.875rem' }}
              size="small"
              color={highlight ? 'primary' : 'secondary'}
              onClick={() => setHighlight(!highlight)}
            >
              <Code />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
      <Collapse in={highlight}>{highlight && <SyntaxHighlight>{codeString}</SyntaxHighlight>}</Collapse>
    </>
  );
}

Highlighter.propTypes = { codeString: PropTypes.string, codeHighlight: PropTypes.bool };
