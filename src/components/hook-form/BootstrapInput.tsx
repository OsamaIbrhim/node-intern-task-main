import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3.5),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    backgroundColor: '#F3F6F9',
    borderColor: '#E0E3E7',
    border: '1px solid',
    fontSize: 16,
    width: '100%',
    color: 'black',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const BootstrapPasswordInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3.5),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    backgroundColor: '#F3F6F9',
    borderColor: '#E0E3E7',
    border: '1px solid',
    fontSize: 16,
    padding: '10px 12px',
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    color: 'black',
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));