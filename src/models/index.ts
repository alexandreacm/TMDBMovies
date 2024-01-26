type BaseResponseType = {
  status: string;
  message: string;
};

export interface Rating {
  average?: number | null;
}

export interface Series {
  id: number;
  name: string;
  adult: boolean;
  backdrop_path: string;
  original_name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
}

export interface SeriesMock {
  page: number;
  results: Series[];
}

export type SeriesResponseType = BaseResponseType & {
  page: number;
  results: Series[];
};

export type ItemSeries = {
  item?: Series | undefined;
};
