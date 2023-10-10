export interface ImageProps {
  src: string;
  alt: string;
  id?:
    | "ImageLogo"
    | "ImageLogin"
    | "ImageBackgroundHome"
    | "ImageResult"
    | "ImageResultItemCarrossel"
    | "ImageAdmin"
    | "ImageError404"
    | "ImageError401";
}
