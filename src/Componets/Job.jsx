import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Job = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ padding: 8 }}>
    <Stack spacing={{ sx: 8, md: 6 }} direction={{ sx: 'column', md: 'row' }}>

      <Stack spacing={4}>
        <Typography variant="h3" color="secondary">
          My Professional Journey
        </Typography>
        <Typography variant="body1" color="initial">
          I am currently working as a Quality Assurance (QA) specialist at a company where I have been employed for the past seven months. In this role, I have gained solid experience in implementing automated testing, which has allowed me to significantly contribute to the quality and stability of the products we develop.
          <br />
          <br />
          During my time as a QA specialist, I have worked closely with development teams, which has enabled me not only to ensure the quality of the software but also to enhance my technical skills and understanding of the entire software development lifecycle. I have learned to proactively identify and resolve issues, which has continuously improved my technical competencies and ability to work effectively in a team.
        </Typography>
      </Stack>

      <Stack spacing={4}>
        <Typography variant="h3" color="secondary">My Future Goals</Typography>
        <Typography variant="body1" color="initial">
          My professional goal is to advance in my career towards a position as a software developer. I am committed to continuing to learn and improve my programming skills, with a focus on developing high-quality software. I aspire to combine my experience in quality assurance with my programming abilities to create robust and effective solutions.
          <br />
          <br />
          To achieve this goal, I am focused on strengthening my knowledge in programming languages such as JavaScript, Python, and frameworks like Angular and Ionic. Additionally, I am interested in exploring areas such as mobile application development and artificial intelligence, which will allow me to broaden my horizons and face new technological challenges.
        </Typography>
      </Stack>

    </Stack>
  </Box>
));

export default Job;
