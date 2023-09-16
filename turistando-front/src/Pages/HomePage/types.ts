export interface HomePageProps {
  list?: ResultListProps[];
}

export interface ResultListProps {
  cityName: string;
  imgResult: string;
  attractionsResults: string;
  climateResult: string;
  costsResult: string;
}
