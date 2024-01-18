export type ClothingCategory = {
  Men: "men's clothing";
  Women: "women's clothing";
};

export type Rating = {
  count: number;
  rate: number;
};

export type Product = {
  category: ClothingCategory;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};
