export interface Joke {
  icon_url?: string;
  value: string;
  id: number | string;
  updated_at?: Date;
  url?: string;
  favorite?: boolean;
  categories: Array<string>;
  result?: [Joke];
}

export interface JokeSearchFormValue {
  formOptions: string;
  apiValue: { random: string; categories: string; search: string };
}
