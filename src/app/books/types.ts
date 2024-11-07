export type BookListApiResponse = {
    data: BookData[];
  };

export type BookData = { 
    id: string; 
    title: string; 
    author: string; 
    year: number;
};