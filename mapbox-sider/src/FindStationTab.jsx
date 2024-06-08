import React, {useState} from 'react';
import './FindStationTab.css';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Modal from '@mui/material/Modal';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
    'Kelly Snyder',
  ];

const minDistance = 10;

function valuetext(value) {
    return `${value}kW`;
}


const markskm = [
{
    value: 1,
    label: '1Km',
},
{
    value: 30,
    label: '30Km',
},
];

function valuetextkm(valuekm) {
    return `${valuekm}Km`;
}
  
function getStyles(name, personName, theme) {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const FindStationTab = () => {

    const theme = useTheme();
    const [personName, setPersonName] = useState([]);


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [value1, setValue1] = React.useState([0, 100]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
          setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
          setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
      };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className="tab-content find-station-tab">
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            </Box>
        </Modal>
        
        <div className='filters'>            
            <div className='cleanfilters'>
                <Icon fontSize="small">cancel</Icon>
                <span>Limpiar filtros</span>
            </div>
            
            <div className="filter-buttons">
            
                <Button variant="contained" className="filter-button">Filtrar</Button>
            
                <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={handleOpen}>
                    <Fab color="default" size="small" aria-label="help">
                        <QuestionMarkIcon />
                    </Fab>                
                </Box>
            </div>

        </div>

        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar estación"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

        </Paper>

        
        <FormControl sx={{ m: 1, width: 400 }}>
            <InputLabel id="demo-multiple-chip-label">Ciudad</InputLabel>
            <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                    <Chip key={value} label={value} />
                ))}
                </Box>
            )}
            MenuProps={MenuProps}
            >
            {names.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 400 }}>
            <InputLabel id="demo-multiple-chip-label">Conector</InputLabel>
            <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                    <Chip key={value} label={value} />
                ))}
                </Box>
            )}
            MenuProps={MenuProps}
            >
            {names.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 400 }}>
            <InputLabel id="demo-multiple-chip-label">Operador</InputLabel>
            <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                    <Chip key={value} label={value} />
                ))}
                </Box>
            )}
            MenuProps={MenuProps}
            >
            {names.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>

        <Box sx={{ display: 'flex' }}>
                <FormControlLabel control={<Checkbox />} label="Normal" />
                <FormControlLabel control={<Checkbox />} label="Semirápido" />                            
        </Box>
        <Box sx={{ display: 'flex' }}>
        <FormControlLabel control={<Checkbox />} label="Rápido" />
                <FormControlLabel control={<Checkbox />} label="Ultrrápido" />
        </Box>

        <Box sx={{ width: 400 }}>
            <Typography gutterBottom>Potencia</Typography>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />            
        </Box>


        <Box sx={{ width: 400 }}>
            <Typography gutterBottom>Distancia</Typography>
            <Slider
                aria-label="Custom marks"
                defaultValue={2}
                getAriaValueText={valuetextkm}
                step={1}
                valueLabelDisplay="auto"
                marks={markskm}
                min={1}
                max={30}
                
            />
        </Box>

        <Box sx={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Estaciones disponibles" />            
        </Box>

       
    </div>
  );
};

export default FindStationTab;