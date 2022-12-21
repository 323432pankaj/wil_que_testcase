import styled from "styled-components";

export const KeyFeatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const KeyFeatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media (max-width: 1350px) {
    margin-top: 50px;
  }
  @media (max-width: 767px) {
    display: grid;
    margin-top: 0;
  }
`;
export const HeadWrapper = styled.div`
  width: 100%;
`;

export const SubHeadingText = styled.div`
  width: 100%;
  max-width: 950px;
  align-items: center;
  justify-content: center;
  font-family: "OutfitRegular";
  font-size: 40px;
  text-align: center;
  line-height: 34px;
  background-color: red;
`;
export const TextSection = styled.div``;

export const MainWrapper = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  gap: 70px;
  align-items: center;
  @media (max-width: 1350px) {
    padding: 40px;
  }
  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    display: grid;
    padding: 2.667vw;
    gap: 3.667vw;
    justify-content: center;
  }
`;
export const CardWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 442px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1366px) {
    width: 100%;
    max-width: 442px;
    gap: 28px;
  }
  @media (max-width: 767px) {
    gap: 2px;
  }
`;
export const ImgWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  margin-top: 15px;
  /* display: grid;
  width: 100%;
  max-width: 700px;

  @media (max-width: 767px) {
    width: 100%;
    max-width: 89.333vw;
  } */
`;
export const ImageView = styled.img`
  margin-top: 40px;
  max-width: 710px;
  @media (max-width: 1440px) {
    height: 457px;
  }
  @media (max-width: 1350px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1000px) {
    height: 340px;
    width: 335px;
    margin-top: 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 0;
    display: none;
  }
`;
export const MobileDashboardpic = styled.img`
  display: none;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 0;
    display: block;
  }
`;
