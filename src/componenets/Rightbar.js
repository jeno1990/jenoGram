import { Avatar, AvatarGroup, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Advert } from "../smallComponents/Advert";
import { Contacts } from "../smallComponents/Contacts";

const Rightbar = () => {
  const src1 =
    "https://qph.cf2.quoracdn.net/main-qimg-bc664ee44b30a0bc2ea126bacf512b81-lq";
  const src2 =
    "https://media.istockphoto.com/photos/beautiful-afro-woman-picture-id1183573070?k=20&m=1183573070&s=612x612&w=0&h=jfw4vbzeozMeLPqaAf4Qt5cw291LhK2txHWLwKF5iTA=";
  const src3 =
    "https://qph.cf2.quoracdn.net/main-qimg-783a153bfe3cfcf027e7d74976deff00.webp";
  const src4 =
    "https://image.shutterstock.com/image-photo/edmonton-alberta-canada-08-05-260nw-1171271752.jpg";
  const src5 =
    "https://www.gorebet.com/wp-content/uploads/2021/06/sara-nuru.jpg";
  return (
    <Box flex={2} p={2} ml={1} sx={{ display: { xs: "none", sm: "block" } }}>
      {" "}
      <Box
        position="fixed"
        sx={{ alignItems: "center", alignContent: "center" }}
      >
        <Advert />
        <h2 style={{ fontWeight: "200" }}>Online Contacts</h2>
        <Container  sx={{width:'100%' ,alignContent:'center',paddingLeft:'20%'}}>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src={src1} />
            <Avatar alt="Travis Howard" src={src2} />
            <Avatar alt="Cindy Baker" src={src3} />
            <Avatar alt="Agnes Walker" src={src4} />
            <Avatar alt="Trevor Henderson" src={src5} />
          </AvatarGroup>
        </Container>
        <Contacts src={src2} username="hana" />
        <Contacts src={src1} username="meron" />
        <Contacts src={src3} username="gete" />
        <Contacts src={src4} username="aselef" />
        <Contacts src={src5} username="ye sidamawa" />
        <Contacts src={src1} username="hagere" />
        <Contacts src={src3} username="caltu" />
        <Contacts src={src2} username="kidy" />
      </Box>
    </Box>
  );
};

export default Rightbar;
