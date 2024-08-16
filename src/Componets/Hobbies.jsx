import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ImageHobbies from './ImageHobbies';

const Hobbies = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ padding: 8 }}>
    <Stack spacing={4} direction={{ sx: 'column', md: 'row' }}>
      <Stack spacing={4}>
        <Typography variant="h3" color="secondary">
          My Hobbies and How They Have Influenced Me
        </Typography>
        <Typography variant="body1" color="initial">
          Throughout my life, my hobbies have played a crucial role in my personal and professional development. One of my greatest passions is programming. Since I started learning to program, I've discovered a world full of possibilities and challenges that have allowed me to develop logical skills and solve problems creatively. Programming is not only my job but also a form of expression and a hobby that brings me great satisfaction.
          <br />
          <br />
          Another hobby of mine is walking with my dog. These moments allow me to disconnect from daily stress, enjoy nature, and strengthen the bond with my pet. Walking with my dog is a relaxing activity that helps me maintain a balance between my professional and personal life.
          <br />
          <br />
          Additionally, I greatly enjoy crafting. Working with my hands and creating unique objects is a way to channel my creativity and relax. Whether it's painting, sculpting, or designing, crafting provides me with a space to express myself artistically.
          <br />
          <br />
          Lastly, art in general is an important part of my life. I am passionate about exploring different forms of art, from painting to sculpture. Art inspires me and offers me a different perspective on the world, allowing me to appreciate the beauty in everyday details.
        </Typography>
      </Stack>
      <ImageHobbies />
    </Stack>
  </Box>
));

export default Hobbies;
