import React from 'react';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

const Trips = React.forwardRef((props, ref) => {

  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box ref={ref} sx={{ padding: 8 }}>
      <Stack spacing={{ xs: 8, md: 6 }} direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={4}>
          <Typography variant="h3" color="secondary">
            My Most Memorable Trips
          </Typography>
          <Typography variant="body1" color="initial">
            One of the most memorable trips I've ever taken was when I was a child and traveled with my family to La Dorada, Colombia. This journey is filled with unforgettable memories and experiences that I still treasure to this day.
            <br />
            <br />
            I vividly remember the day we sailed on a boat along the majestic Magdalena River. The fresh breeze, the sound of the water gently lapping against the boat, and the lush landscape surrounding us created a magical atmosphere that I can still recall clearly. This trip along the river not only brought me closer to my family, but it also allowed me to appreciate the natural beauty of my country.
            <br />
            <br />
            One of the highlights was our visit to Parque Las Iguanas, a place where nature and wildlife coexist in harmony. Seeing the iguanas in their natural habitat was a fascinating experience for me as a child, sparking my curiosity about animals and the world around me.
            <br />
            <br />
            Another activity we enjoyed was fishing in the Río del Coco. Although I was young, the thrill of casting the fishing rod and waiting patiently for the fish to bite taught me lessons in patience and perseverance—values I still apply in my daily life.
            <br />
            <br />
            This trip to La Dorada was not just a family adventure; it was also an opportunity for personal learning and growth. It left me with valuable lessons about the importance of family, connection with nature, and the joy of exploring the world around us.
          </Typography>
        </Stack>
        <Stack   justifyContent="center"
  alignItems="center" >
          <Box
            component="img"
            src="/dorada.jpeg"
            alt="Descripción de la imagen"
            sx={{
              width: isSmallScreen ? '100%' : 400,
              height: 'auto',
              borderRadius: 4,
              border: `12px solid #f8bbd0`,
              borderWidth: isSmallScreen ? '5px' : '15px',
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
});

export default Trips;

