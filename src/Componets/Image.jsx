import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    
    <ImageList
      sx={{ width: '100%', height: 'auto' }} 
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/rocky.jpg',
    title: 'Rocy',
    rows: 2,
    cols: 2,
  },
  {
    img: '/shahs.jpg',
    title: 'Burger',
  },
  {
    img: '/familia.jpg',
    title: 'familia',
  },
  {
    img: '/lucas.jpg',
    title: 'lucas',
    cols: 2,
  },
  {
    img: '/lucas2.jpg',
    title: 'amor',
    cols: 2,
  },
  {
    img: '/amor.PNG',
    title: 'amor',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'papa.jpg',
    title: 'papa',
  },
  {
    img: 'rock2.jpg',
    title: 'roky',
  },
  

];
