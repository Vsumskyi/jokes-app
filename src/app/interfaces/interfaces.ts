export interface Joke {
  iconUrl?: string;
  value: string;
  id: number | string;
  updatedAt?: Date;
  url?: string;
  favorite?: boolean;
  categories: Array<string>;
  result?: [Joke];
}

export interface PostJokeInterface {
  id?: string | number;
  value: string;
  url: string;
  iconUrl: string;
  categories: Array<number>;
  customCategories?: string;
}

export interface JokeSearchFormValue {
  formOptions: string;
  apiValue: {
    random: string;
    categories: string;
    search: string;
    latest: string;
    top: string;
  };
}

export interface CategoryInterface {
  id: number;
  title: string;
}

export interface UserInterface {
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Array<string>;
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
  roles?: Array<string>;
}

export interface LoginUser {
  email: string;
  password: string;
}
