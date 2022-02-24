import React from "react";
import {
  Box,
  Col,
  Container,
  Div,
  FooterLink,
  H1,
  Heading,
  Logo,
  Row,
  SecondCont,
  Thirdcont,
  P,
} from "./FooterStyles";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { blue, red } from '@mui/material/colors';
const Footer = () => {
  return (
    <Box>
      <Container>
      <img style={{width:"60px", background : "while", marginLeft:"15px", marginBottom:"20px" }} alt="p" src="https://pbs.twimg.com/profile_images/1266950784609992705/xEe7mBx9_400x400.png"/>
       <Row>
         <Col>
          <Div>
            <H1>Language: English (United States) </H1>
          </Div>
          <Div style={{height:"50px"}}>
             <H1>India</H1>
          </Div>
          <Div style={{height:"50px"}}>
          <H1>Currency : USD</H1>
          </Div>
         </Col>
         <Col>
         
         </Col>


         <Col>
         <Heading>PRODUCT</Heading>
         <FooterLink>Lite</FooterLink>
         <FooterLink>Pro</FooterLink>
         <FooterLink>Premium</FooterLink>
         <FooterLink>Pricing</FooterLink>
         </Col>
         <Col>
         <Heading>FOR CREATORS</Heading>
         <FooterLink>Podecasters</FooterLink>
         <FooterLink>Video Creators</FooterLink>
         <FooterLink>Musicians</FooterLink>
         <FooterLink>Visual Artists</FooterLink>
         <FooterLink>Writers & Journalist</FooterLink>
         <FooterLink>Communities</FooterLink>
         <FooterLink>Gaming Creators</FooterLink>
         <FooterLink>Nonprofits</FooterLink>
         <FooterLink>Tutorials and Education</FooterLink>
         <FooterLink>Local Businesses</FooterLink>
         <FooterLink>Creators-of-all-kinds</FooterLink>
         </Col>
         <Col>
         <Heading>RESOURCES</Heading>
         <FooterLink>Blog</FooterLink>
         <FooterLink>Patreon U</FooterLink>
         <FooterLink>Creators Community</FooterLink>
         <FooterLink>Help Center & FAQ</FooterLink>
         <FooterLink>App Directory</FooterLink>
         <FooterLink>Developers</FooterLink>
         </Col>
         <Col>
         <Heading>COMPANY</Heading>
         <FooterLink href="#">About</FooterLink>
         <FooterLink>Press</FooterLink>
         <FooterLink>Careers</FooterLink>
         <FooterLink>Privacy</FooterLink>
         <FooterLink>Policy & Terms</FooterLink>
         <FooterLink>Privacy Preferences</FooterLink>
         <FooterLink>Accessibility</FooterLink>
         <FooterLink>Impressurm</FooterLink>
         </Col>
       </Row>
      </Container>
      <SecondCont>
        <Logo>
        <TwitterIcon sx={{ color: blue[500] }}/>
        </Logo>
        <Logo>
        <FacebookRoundedIcon sx={{ color: blue[500] }}/>
        </Logo>
        <Logo>
        <InstagramIcon sx={{ color: blue[500] }}/>

        </Logo>
        <Logo>
        <YouTubeIcon sx={{ color: red[500] }}/>
        </Logo>
      </SecondCont>
      <Thirdcont>
        <H1>Patreon    Sitemap</H1>
        <P>600 Townsend Street, Suite 500
                 San Francisco, CA 94103
                    USA
             Phone: +1 (833) 972-8766</P>
      </Thirdcont>   
    </Box>
  );
};
export default Footer;
