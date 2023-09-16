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

export const ImageAdmin = styled(ImageLogin)``;

export const ImageResult = styled.img`
  height: 90%;
  border-radius: 0.6rem;
`;

export const ImageError404 = styled.img`
  height: 40%;
`;

export const ImageError401 = styled(ImageError404)``;

export const BackgroundHome = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-repeat: repeat-x;
  background-size: auto;
`;

export const IconFooter = styled.img`
  height: 70%;
  margin-left: 5%;
`;
