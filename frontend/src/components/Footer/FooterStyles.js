import styled from 'styled-components';
   
export const Box = styled.div`
  /* padding: 80px 60px; */
  background: black;
  margin-top: 30px;
  bottom: 0;
  width: 100%;
  height: fit-content;
   
  
`;
   
export const Container = styled.div`
    display: grid;
    width: 90%;
    margin: 0 auto;
    /* background-color: yellow; */
    `
   export const Row = styled.div`
     display: grid;
     justify-content: space-evenly;
    grid-template-columns: repeat(6, 15%);
    /* gap :1.3%; */
    @media (max-width: 800px) {
    grid-template-columns: repeat(2, 50%);
  }
   `
  export const Col = styled.div`
   /* background-color: tomato; */
   color: #FFFFFF;
   margin-top: 40px;
  `
  export const Heading = styled.div`
  font-size : 10px;
  font-weight: 600;
  margin-bottom: 15px;
  `
  export const FooterLink = styled.div`
  font-weight: 14px;
  margin-bottom: 5px;
  `

  export const SecondCont = styled.div`
  margin-left: 5%;
  width  :12% ;
  height: 70px;
  display: flex;
  
  `
  export const Logo = styled.div`
  /* background-image: url("https://img.icons8.com/ios/500/000000/twitter--v3.png"); */
  width: 20%;
  /* color: yellow; */
  height: 30%;
 padding: 8px;  
 margin-right: 10px;

 background-color:#faebec;
 border-radius: 50%;

  `
  export const Div = styled.div`
   height: 80px;
   border: 1.5px solid white;
   width: 95%;
   border-radius: 4px;
   margin-bottom: 15px;
   text-align: center;
   
  `

  export const H1 =styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-top: 15px;
  color : white;
  `

  export const Thirdcont = styled.div`
  width: 18%;
  height: 180px;
  margin-top: 20px;
  
  margin-left: 5%;
  text-align: center;
  `

  export const P = styled.div`
  font-size: 16px;
  color: white;
  margin-top: 30px;
  
  `