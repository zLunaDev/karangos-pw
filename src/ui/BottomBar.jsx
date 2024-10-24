import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function BottomBar() {
  /* sx = estilos estendidos do MUI, estende styles */
  return (
    <Toolbar 
      variant="dense"
      sx={{ 
        backgroundColor: 'action.disabledBackground',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100vw'
      }}
    >
      <Typography 
        variant="caption" 
        gutterBottom 
        sx={{ 
          display: 'block',
          '& a': {
            color: 'secondary.light'
          }
        }}
      >
       Desenvolvido com <CoffeeIcon fontSize="small" sx={{mb: -0.5}} /> or <a href="mailto:yfoxiih@gmail.com.br">zLuna.Dev</a>
      </Typography>
    </Toolbar>
  )
}