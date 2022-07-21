import {Category} from "./category";

export interface Product {
  id?: number;
  name?: string;
  avatar?: string
  price?: number;
  inventory?: number;
  category?: Category;
}
