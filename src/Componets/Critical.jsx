import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const CriticalThinking = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ padding: 9 }}>
    <Stack direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}>

      <Stack spacing={4} justifyContent="center"
      alignItems="center">
        <Typography variant="h3" color="secondary">
          The Importance of Critical Thinking in the Digital Age
        </Typography>
        <Typography variant="body1" color="initial">
          In the digital age, where information is just a click away, critical thinking has become an essential skill for navigating the sea of data and opinions we face daily. The ability to analyze, evaluate, and question the information we consume is crucial for making informed decisions and avoiding misinformation.
          <br />
          <br />
          Critical thinking allows us not only to discern between reliable and unreliable sources of information but also to understand the context in which the information is presented. With the rise of fake news, algorithmic biases, and propaganda on social media, it is more important than ever to develop an analytical and reflective attitude.
        </Typography>
      </Stack>

      <Stack spacing={4} justifyContent="center"
      alignItems="center">
        <Typography variant="h3" color="secondary">How to Apply Critical Thinking in Daily Life</Typography>
        <Typography variant="body1" color="initial">
          Evaluate the Credibility of Sources: Before accepting any information as truth, it is essential to verify the source. Ask yourself who is behind the information and what their objective is. Reliable sources typically have a history of accuracy and a commitment to truthfulness.

          Question the Messages We Receive: Don’t just accept information at face value. Analyze the content for biases, omissions, or hidden agendas. Ask why the information is presented in a certain way and what might be missing.

          Encourage Debate and Reflection: Discussing different viewpoints with others can help broaden your perspective. Constructive dialogue and debate foster a deeper and more nuanced understanding of issues.

          Develop Research Skills: Learn how to search for information effectively and use tools and resources that allow you to access verified and well-founded data. The ability to conduct thorough research is a key part of critical thinking.

          Be Aware of Algorithms and Personalization: Recognize how algorithms on social media and search engines can influence the information you see. These algorithms often reinforce your pre-existing beliefs and limit your exposure to diverse perspectives.
        </Typography>
      </Stack>

    </Stack>
  </Box>
));

export default CriticalThinking;
