import React, {useState} from 'react';
import normal from "../src/images/normal.svg";
import semirapido from "../src/images/semirapido.svg";
import rapido from "../src/images/rapido.svg";
import rapidotodosdisponibles from "../src/images/disp-n-rapido.svg";
import rapidoningunodisponible from "../src/images/disp-0-rapido.svg";
import semirapidoalgunodisponible from "../src/images/disp-1-semirapido.svg";
import ultrarapido from "../src/images/ultrarapido.svg";
import logoGalp from "../src/images/logo-galp.png";
import logoEdp from "../src/images/logo-edp.png";
import mennekes from "../src/images/type2mennekes.svg";
import combo from "../src/images/type2combo.svg";
import './Stationtab.css';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

const sockets = [
  {
    id: 1,
    image: mennekes,
    name: 'Socket 1',
    power: '22kW'
  },
  {
    id: 2,
    image: mennekes,
    name: 'Socket 2',
    power: '22kW'
  },
  {
    id: 3,
    image: combo,
    name: 'Socket 3',
    power: '50kW'
  }
];


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

const StationsTab = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="tab-content stations-tab">

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

      <Box>
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
        <div className='convention'>
          <span className='item-convention'>
            <img src={normal} alt='Normal' style={{height: '10px'}} ></img> Normal  
          </span>
          <span className='item-convention'>
            <img src={semirapido} alt='Semirapido' style={{height: '10px'}} ></img> Semirápido  
          </span>
          <span className='item-convention'>
            <img src={rapido} alt='Semirapido' style={{height: '10px'}} ></img> Rápido  
          </span>
          <span className='item-convention'>
            <img src={ultrarapido} alt='Semirapido' style={{height: '10px'}} ></img> Ultra Rápido  
          </span>
        </div>
          
        <div className='resume-stations'>
          <p>
            Se encontraron <strong>XX estaciones</strong> y <strong> XX puntos</strong>.
          </p>
        </div>

        <Divider/>

        <div className='stations-list'>
          

          <ListItemButton>
            <div className='container-station'>
              <div className='pin-station'>
                <img src={rapidotodosdisponibles} alt='RapidoTodosDisponibles' style={{ height: '37px' }} />
              </div>
              
              <div className='location-station'>              
                <ListItemText
                  primary="Makro Albufeira"
                  secondary="Albufeira"
                />
              </div>
              <div className='operator-station'>
                <img src={logoGalp} alt='logoGalp' style={{ height: '36px' }} />
                <Typography>ABF-00013</Typography>
              </div>            
              <div className='points-station'>
                {sockets.map(socket => (              
                  <ListItemAvatar className='sockets'>
                    <img src={socket.image} alt={socket.name} style={{ height: '36px' }} />
                    <Typography>{socket.power}</Typography>
                  </ListItemAvatar>              
                ))}
              </div>          
            </div>
          </ListItemButton>

          <Divider/>
          <ListItemButton>
            <div className='container-station'>
              <div className='pin-station'>
                <img src={semirapidoalgunodisponible} alt='RapidoTodosDisponibles' style={{ height: '37px' }} />
              </div>
              
              <div className='location-station'>              
                <ListItemText
                  primary="Rua Manuel Teixeira Gomes"
                  secondary="Albufeira"
                />
              </div>
              <div className='operator-station'>
                <img src={logoEdp} alt='logoEdp' style={{ height: '36px' }} />
                <Typography>ABF-90001</Typography>
              </div>            
              <div className='points-station'>
                {sockets.map(socket => (              
                  <ListItemAvatar className='sockets'>
                    <img src={socket.image} alt={socket.name} style={{ height: '36px' }} />
                    <Typography>{socket.power}</Typography>
                  </ListItemAvatar>              
                ))}
              </div>          
            </div>
          </ListItemButton>
          <Divider/>
          <ListItemButton>
            <div className='container-station'>
              <div className='pin-station'>
                <img src={rapidoningunodisponible} alt='RapidoTodosDisponibles' style={{ height: '37px' }} />
              </div>
              
              <div className='location-station'>              
                <ListItemText
                  primary="Rua das escolas 42"
                  secondary="Abrantes"
                />
              </div>
              <div className='operator-station'>
                <img src={logoGalp} alt='logoGalp' style={{ height: '36px' }} />
                <Typography>ABT-00012</Typography>
              </div>            
              <div className='points-station'>
                {sockets.map(socket => (              
                  <ListItemAvatar className='sockets'>
                    <img src={socket.image} alt={socket.name} style={{ height: '36px' }} />
                    <Typography>{socket.power}</Typography>
                  </ListItemAvatar>              
                ))}
              </div>          
            </div>
          </ListItemButton>
          <Divider/>

                      

          <Divider/>
      
        </div>      
      </Box>
    </div>
  );
};

export default StationsTab;