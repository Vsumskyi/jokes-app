export interface Joke {
  icon_url?: string;
  value: string;
  id: number | string;
  updated_at?: string;
  url?: string;
  favorite: boolean;
  categories?: [];
  result?: [Joke];
}

export interface FormValue {
  formOptions: string;
  apiValue: { random: string; categories: string; search: string };
}
