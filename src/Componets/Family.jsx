import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import QuiltedImageList from './Image';


const Family = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ padding: 8 }}> 
    <Stack spacing={4} direction={{ sx: 'column', md: 'row' }}>
      <Stack spacing={4}> 
        <Typography variant="h3" color="secondary">
          The Importance of Family in My Life
        </Typography>
        <Typography variant="body1" color="initial">
          Family is the cornerstone of my life, and to me, family isn’t just about blood relations—it also includes those who have profoundly and meaningfully impacted my life. My partner and my dogs have been essential parts of that family, and their support has been crucial in my personal and professional growth.
          <br />
          <br />
          My partner and I have been together for six years, and throughout this time, he has been a true pillar in my life. With his unwavering support, I’ve grown both as a person and as a professional, facing each challenge with him by my side. His presence has been a constant reminder of what true love and companionship mean. Together, we’ve built a life full of special moments and lessons that have strengthened us as a team.
          <br />
          <br />
          In addition to my partner, my dogs are also a crucial part of my life. Lucas, my beloved Siberian husky who is no longer with me, and Sasha, my loving bully who has also passed away, taught me important lessons about loyalty, unconditional love, and patience. Though they are no longer physically here, their memories live on in my heart.
          <br />
          <br />
          Today, Rocky, my German shepherd, and my partner are my top priorities. With Rocky, I’ve learned more about responsibility and the deep bond that can form with animals. He, along with my partner, make my life fuller and filled with love. Both of them represent what is most important to me and are my daily motivation to keep moving forward.
        </Typography>
      </Stack>
      <QuiltedImageList/>
    </Stack>
  </Box>
));

export default Family;
