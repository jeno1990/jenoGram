import { ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Advert = () => {
  return (
    <Box>
      <h2 style={{fontWeight:'200'}}>Promotions</h2>
      <ImageList sx={{ width: '100%', height: '50%' }} cols={2} rowHeight={164}>
          <ImageListItem >
            <img
              src='https://africaslist.com/wp-content/uploads/Marathon-Motors-1.png'
            //   srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt='marathon motors'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBaYUzrdPOb76u9k93It50aNu9FqtFG61umxZemA7FA8eQapQPv6PZ7fI0ZoAUUgVV0g&usqp=CAU'
            //   srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt='marathon motors'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIY6bXzSTra9YAsalM8ne62M_KhXbc-5vSMEuv7oNVkPV2K3cjHM8nYwJvC00tv9OMyuI&usqp=CAU'
            //   srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt='marathon motors'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBaYUzrdPOb76u9k93It50aNu9FqtFG61umxZemA7FA8eQapQPv6PZ7fI0ZoAUUgVV0g&usqp=CAU'
            //   srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt='marathon motors'
              loading="lazy"
            />
          </ImageListItem>
      </ImageList>
    </Box>
  );
};
