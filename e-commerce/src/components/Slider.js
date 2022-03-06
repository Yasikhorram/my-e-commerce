import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f4eae6;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Arrow>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
