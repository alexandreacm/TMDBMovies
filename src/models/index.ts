export interface Rating {
  average?: number | null;
}

interface HomeProps {
  id: number;
  original_name: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
}

export type FlatItem = {
  item?: HomeProps;
};
