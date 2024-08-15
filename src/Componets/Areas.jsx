import React from 'react';
import { Box, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Areas({ onScrollToInterests }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height:  { xs:'auto', sm: '100vh', md:' 100vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       
      padding: { xs: 2, sm: 1, md: 1 },
        textAlign: 'center',
        marginTop: { xs: '50px', sm: '1px' },
      }}
    >
      <Stack
        direction={isSmallScreen ? 'column' : 'row'}
        justifyContent="space-around"
        alignItems="center"
        spacing={5}
      >
        <motion.div
          initial={{ scale: 0.8, y: 100, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 8.5,
            duration: 0.8,
          }}
        >
          <Box
            component="img"
            src="/yo.jpg"
            alt="Descripción de la imagen"
            sx={{
              width: isSmallScreen ? '100%' : 400,
              height: 'auto',
              borderRadius: 4,
              border: `12px solid ${isSmallScreen ? '#f8bbd0' : '#f8bbd0'}`,
              borderWidth: isSmallScreen ? '5px' : '15px',
              
            }}
          />
        </motion.div>
        <Box
          sx={{
            maxWidth: '900px',
            padding: { xs: 2, md: 4 },
          }}
        >
          <Stack alignItems="center" spacing={3}>
            <Stack direction={'row'} spacing={2}>
              <Typography variant="h3" color="secondary" textAlign={isSmallScreen ? 'center' : 'left'}>
                Welcome to My Blog!
              </Typography>
              <img
                id="welcome-gif"
                src="https://media.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif"
                alt="Hand waving"
                className="welcome-gif"
              />
            </Stack>

            <Typography variant="body1" color="initial" textAlign={isSmallScreen ? 'center' : 'left'}>
              Hello everyone! My name is Heidy Vanegas, and I’m 22 years old. Welcome to my blog, where I’ll be
              sharing a variety of topics that are important to me and have been a big part of my journey in learning
              English. Here, you will find posts about my family, hobbies, interests, work, travels, and reflections
              on current events.
              <br />
              <br />
              Through videos, audios, and written texts, I’ll be sharing my experiences and thoughts. Additionally,
              I’ve included special sections on critical thinking and media literacy, as well as crime and punishment,
              which are topics I’ve explored during my learning process.
              <br />
              <br />
              I hope you find these posts interesting and that they inspire you in your own journey. Thank you for
              joining me, and feel free to explore the different entries I’ve prepared for you!
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <motion.div
        animate={{
          scale: [1, 1.2, 1], 
        }}
        transition={{
          duration: 0.5, 
          ease: 'easeInOut', 
          repeat: Infinity, 
          repeatType: 'loop',
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="secondary"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onScrollToInterests} 
        >
          <ArrowDownwardIcon sx={{ flexGrow: 1 }} />
        </IconButton>
      </motion.div>
    </Box>
  );
}




