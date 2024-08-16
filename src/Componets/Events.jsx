import React from 'react';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

const Events = React.forwardRef((props, ref) => {

  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box ref={ref} sx={{ padding: 8 }}>
      <Stack spacing={{ xs: 8, md: 6 }} direction={{ xs: 'column', md: 'row-reverse' }}>
        <Stack spacing={4}>
          <Typography variant="h3" color="secondary">
            Reflections on Current Events
          </Typography>
          <Typography variant="body1" color="initial">
            One of the most pressing current issues that has caught my attention is the impact of artificial intelligence (AI) on our daily lives and society. This topic is not only crucial because of its far-reaching implications but also because it challenges us to think critically about the world we live in and the decisions we make as individuals and as a collective.
            <br />
            <br />
            From my perspective, AI presents both opportunities and challenges. On one hand, it has the potential to revolutionize industries, improve efficiency, and even solve some of the world’s most complex problems. On the other hand, it raises significant ethical questions about privacy, job displacement, and the potential for AI to be used in ways that could harm society.
            <br />
            <br />
            Critical thinking and media literacy are essential in this context. As AI continues to evolve, it is crucial that we remain informed about its capabilities and limitations. This includes understanding the biases that can be embedded in AI algorithms and the impact these biases can have on decision-making processes.
            <br />
            <br />
            We must adopt a critical approach to the information we receive about AI, questioning the sources and understanding the perspectives and interests that may influence how AI is portrayed in the media. By doing so, we can make informed decisions and contribute effectively to the conversations shaping our society.
            <br />
            <br />
            Include a video or audio: In this video/audio, I share my analysis of the rise of AI, exploring the various angles of this issue and offering my perspective on the potential solutions and the impact AI may have on our daily lives.
          </Typography>
        </Stack>
        <Stack justifyContent="center"
          alignItems="center" >
          <Box
            component="img"
            src="ia.jpg"
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

export default Events;

