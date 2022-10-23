export interface DogImageRest {
  message: string[],
  status: string;
}

export interface DogItemRest {
  message: Record<string, string[]>
  status: string;
}

export const DOG_API_URL = 'https://dog.ceo/api';
