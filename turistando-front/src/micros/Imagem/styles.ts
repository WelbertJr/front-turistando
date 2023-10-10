import styled from "styled-components";
import { ImageProps } from "./types";

export const ImageLogo = styled.img`
  height: 9rem;

  @media (max-width: 600px) {
    height: 6rem;
  }
`;

export const ImageLogin = styled.img`
  width: 50%;
  height: 100%;

  @media (max-width: 999px) {
    display: none;
  }
`;

export const ImageAdmin = styled(ImageLogin)`
  height: 100vh;
  box-shadow: inset -16px -9px 25px -1px rgba(0, 0, 0, 0.66);
`;

export const ImageResult = styled.img`
  max-height: 90%;
  width: 90%;
  border-radius: 0.6rem;
  @media (max-width: 888px) {
    width: 50%;
  }
  @media (max-width: 555px) {
    width: 80%;
    height: 60%;
  }
  @media (max-width: 372px) {
    width: 70%;
  }
`;

export const ImageResultItemCarrossel = styled(ImageResult)`
  @media (max-width: 888px) {
    width: 90%;
  }
`;

export const ImageError404 = styled.img`
  height: 40%;
`;

export const ImageError401 = styled(ImageError404)``;

export const BackgroundHome = styled.div<ImageProps>`
  width: 100%;
  height: 20rem;
  background-image: url(${({ src }) => src});
  background-repeat: repeat-x;
  background-size: auto;
`;

export const IconFooter = styled.img`
  height: 70%;
  margin-left: 5%;
  @media (max-width: 540px) {
    width: 15%;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
