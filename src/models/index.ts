type BaseResponseType = {
  status: string;
  message: string;
};

export interface Rating {
  average?: number | null;
}

export interface Series {
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export type SeriesResponseType = BaseResponseType & {
  page: number;
  results: Series[];
};

export type ItemSeries = {
  item?: Series | undefined;
};
