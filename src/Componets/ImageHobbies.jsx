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

export default function ImageHobbies() {
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
    img: 'https://i.pinimg.com/564x/99/8a/30/998a30b55564628b142a4a65751d420d.jpg',
    title: 'Rocy',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/736x/12/1f/98/121f9882e5f727eb46ef503b59cd3f48.jpg',
    title: 'Burger',
  },
  {
    img: 'https://i.pinimg.com/564x/3e/65/8d/3e658d97f0ef87952b899f9506e80c43.jpg',
    title: 'familia',
  },
  {
    img: 'https://i.pinimg.com/236x/0e/4a/a6/0e4aa63d1670fac1caa11395b5ed7b31.jpg',
    title: 'lucas',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/19/70/a3/1970a3cbf5a9269459ee5bbacf5b576a.jpg',
    title: 'amor',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/d8/8f/47/d88f4784ece266d6bbb212ddcb22d1ef.jpg',
    title: 'amor',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/8d/7d/4d/8d7d4dcbcc547c01f3cfb089c2f9a737.jpg',
    title: 'papa',
  },
  {
    img: 'https://i.pinimg.com/736x/04/ca/8f/04ca8f6dd03d405ac483c1640c7ac5bd.jpg',
    title: 'roky',
  },
  

];
