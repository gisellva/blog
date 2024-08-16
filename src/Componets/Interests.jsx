import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://i.pinimg.com/564x/0b/68/de/0b68de123cfa633484913d6fedb6af54.jpg',
    title: 'Family',
    width: '40%',
  },
  {
    url: 'https://i.pinimg.com/736x/b4/78/9e/b4789e98df99a517a62bdb02e2e100c4.jpg',
    title: 'Hobbies and Interests',
    width: '30%',
  },
  {
    url: 'https://i.pinimg.com/564x/7c/2b/ac/7c2bacf83a09e8390eb6802a57d22c88.jpg',
    title: 'Job',
    width: '30%',
  },
  {
    url: 'https://i.pinimg.com/564x/84/9b/b4/849bb4f7a3ae6bab391f93147a6a82a0.jpg',
    title: 'Trips',
    width: '40%',
  },
  {
    url: 'https://i.pinimg.com/564x/26/77/2c/26772ce729d05a136079ae94fee77cd1.jpg',
    title: 'Current Events',
    width: '30%',
  },
  {
    url: 'https://i.pinimg.com/564x/80/61/a1/8061a1a39bbb41ee3b2bd312bf4d4f57.jpg',
    title: 'Critical Thinking',
    width: '30%',
  },
  
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Interests({ interestsRef, onScrollToFamily, onScrollToHobbies, onScrollToJob ,onScrollToTrip,onScrollToEvents, onScrollToCritical}) {
  return (
    <Box ref={interestsRef} sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          onClick={() => {
            if (image.title === 'Family') {
              onScrollToFamily();
            } if (image.title === 'Hobbies and Interests') {
              onScrollToHobbies();
            }if(image.title === 'Job') {
              onScrollToJob();
            }if(image.title === 'Trips'){
              onScrollToTrip()
            }if(image.title === 'Current Events'){
              onScrollToEvents()
            }if (image.title === 'Critical Thinking') {
              onScrollToCritical()
            }
          }}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
