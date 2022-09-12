import { Box } from "@mui/material";
import React from "react";
import RecipeReviewCard from "../smallComponents/RecipeReviewCard";

const Feed = () => {
  const src1 =
    "https://i.pinimg.com/736x/95/91/97/95919793e8510779b81a9e78ceb085da.jpg";
  const src2 =
    "https://media.istockphoto.com/photos/beautiful-afro-woman-picture-id1183573070?k=20&m=1183573070&s=612x612&w=0&h=jfw4vbzeozMeLPqaAf4Qt5cw291LhK2txHWLwKF5iTA=";
  const src3 =
    "https://qph.cf2.quoracdn.net/main-qimg-bc664ee44b30a0bc2ea126bacf512b81-lq";
  const src4 =
    "https://image.shutterstock.com/image-photo/edmonton-alberta-canada-08-05-260nw-1171271752.jpg";
  const src5 =
    "https://www.gorebet.com/wp-content/uploads/2021/06/sara-nuru.jpg";
  return (
    <Box flex={4} p={2}
    >
      <RecipeReviewCard src={src2} name='hellen'/>
      <RecipeReviewCard src={src1} name='meron'/>
      <RecipeReviewCard src={src3} name='hana'/>
      <RecipeReviewCard src={src4} name='genet'/>
      <RecipeReviewCard src={src5} name='gete'/>
      <RecipeReviewCard src={src2} name='caltu'/>
    </Box>
  );
};

export default Feed;
