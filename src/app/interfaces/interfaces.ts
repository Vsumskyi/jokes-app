export interface Joke {
  icon_url?: string;
  value: string;
  id: number | string;
  updatedAt?: Date;
  url?: string;
  favorite?: boolean;
  categories: Array<string>;
  result?: [Joke];
}

export interface JokeSearchFormValue {
  formOptions: string;
  apiValue: { random: string; categories: string; search: string };
}

export interface UserInterface {
  token: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface ApiUserInterface {
  token: string;
  user: {
    email: string;
    id: number;
    firstName: string;
    lastName: string;
    roles: Array<string>;
  };
}

export interface RegistryUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
