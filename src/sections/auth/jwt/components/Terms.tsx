import Typography from '@mui/material/Typography';
import React from 'react';

export default function Terms(): JSX.Element {
  return (
    <Typography
      component="div"
      sx={{
        mt: 2.5,
        textAlign: 'center',
        typography: 'caption',
        color: 'text.secondary',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ flex: 1, borderTop: '1px solid', margin: '0 10px', borderColor: 'inherit' }} />
      Welcome back 🙂
      <div style={{ flex: 1, borderTop: '1px solid', margin: '0 10px', borderColor: 'inherit' }} />
    </Typography>
  );
}
