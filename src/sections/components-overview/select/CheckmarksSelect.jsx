import { useState } from 'react';

// material-ui
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

// project-imports
import MainCard from 'components/MainCard';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250 } } };

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
];

// ==============================|| SELECT - CHECKMARKERS ||============================== //

export default function CheckmarksSelect() {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const checkmarkSelectCodeString = `// CheckmarksSelect.tsx
<FormControl fullWidth>
  <InputLabel id="demo-multiple-checkbox-label">Checkmarks</InputLabel>
  <Select
    labelId="demo-multiple-checkbox-label"
    id="demo-multiple-checkbox"
    multiple
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput placeholder="Tag" />}
    renderValue={(selected) => selected.join(', ')}
    MenuProps={MenuProps}
  >
    {names.map((name) => (
      <MenuItem key={name} value={name}>
        <Checkbox checked={personName.indexOf(name) > -1} />
        <ListItemText primary={name} />
      </MenuItem>
    ))}
  </Select>
</FormControl>`;

  return (
    <MainCard title="With Checkmarks" codeString={checkmarkSelectCodeString}>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Checkmarks</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput placeholder="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </MainCard>
  );
}
