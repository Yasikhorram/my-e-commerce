import { teal } from "@mui/material/colors";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  font-weight: 500px;
  font-size: 14px;

  align-items: center;
  justify-content: center;
`;

const News = () => {
  return <Container>SUPER DEALS!! Free shipping all across the USA</Container>;
};

export default News;
