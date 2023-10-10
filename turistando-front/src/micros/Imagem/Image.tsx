import * as S from "./styles";
import { ImageProps } from "./types";

export const Image = ({ src, alt, id }: ImageProps) => {
  if (id === "ImageLogo") {
    return <S.ImageLogo src={src} alt={alt} id={id} />;
  }
  if (id === "ImageLogin") {
    return <S.ImageLogin src={src} alt={alt} id={id} />;
  }
  if (id === "ImageResult") {
    return <S.ImageResult src={src} alt={alt} id={id} />;
  }
  if (id === "ImageResultItemCarrossel") {
    return <S.ImageResultItemCarrossel src={src} alt={alt} id={id} />;
  }
  if (id === "ImageAdmin") {
    return <S.ImageAdmin src={src} alt={alt} id={id} />;
  }
  if (id === "ImageError404") {
    return <S.ImageError404 src={src} alt={alt} id={id} />;
  }
  if (id === "ImageError401") {
    return <S.ImageError401 src={src} alt={alt} id={id} />;
  }
  if (id === "ImageBackgroundHome") {
    return <S.BackgroundHome src={src} alt={alt} id={id} />;
  } else {
    return <S.IconFooter src={src} alt={alt} />;
  }
};
