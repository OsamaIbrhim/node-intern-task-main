import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  image?: string;
  children: React.ReactNode;
};

export default function AuthClassicLayout({ children, image, title }: Props) {
  const theme = useTheme();

  // const mdUp = useResponsive('up', 'md');

  const renderLogo = (
    <Logo
      sx={{
        zIndex: 9,
        position: 'absolute',
        m: { xs: 2, md: 5 },
      }}
    />
  );

  const renderContent = (
    <Stack
      direction="row"
      sx={{
        gap: 10,
        px: { md: 5 },
        py: { md: 5 },
        zIndex: 10,
      }}
    >
      <Stack>
        {/* <Box
          component="img"
          alt="auth"
          src={image}
          // sx={{
          //   maxWidth: {
          //     xs: 480,
          //     lg: 560,
          //     xl: 720,
          //   },
          // }}
        /> */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h1" style={{ fontSize: '3rem', paddingBottom: '12px', fontWeight: 'inherit', color: 'rgb(49, 65, 81)' }}>Royal Taxi</Typography >
          <Typography variant="body1" style={{ fontSize: '1.2rem' }}>Passion drives amateurs</Typography >
          <Typography variant="body1" style={{ fontSize: '1.2rem' }}>Responsibility drives professionals</Typography >
          <Typography variant="body1" style={{ fontSize: '1.2rem' }}>Curiosity drives geniuses</Typography >
          <Typography variant="body1" style={{ fontSize: '1.2rem', paddingTop: '120px' }}>❤️ Kareem Hussin</Typography >
        </Box>
      </Stack>
      <Box sx={{ 
        minWidth: '400px',
      }}>
        {children}
      </Box>
    </Stack>
  );

  const renderSection = (
    <Stack
      flexGrow={1}
      spacing={10}
      alignItems="center"
      justifyContent="center"
      sx={{
        ...bgGradient({
          color: alpha(
            theme.palette.background.default,
            theme.palette.mode === 'light' ? 0.88 : 0.94
          ),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        minHeight: '100vh',
        pt: 8,
      }}
    >
      <Box
        component="img"
        alt="auth"
        src={image || '/assets/illustrations/illustration_dashboard.png'}
        sx={{
          maxWidth: {
            xs: 480,
            lg: 560,
            xl: 720,
          },
        }}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: 2,
        }}
      >
        {renderContent}
      </Box>
    </Stack>
  );

  return (
    <Stack
      component="main"
      sx={{
        minHeight: '100vh',
      }}
    >
      {renderLogo}

      {renderSection}

    </Stack>
  );
}
