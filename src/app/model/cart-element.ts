import {Product} from "./Product";
import {User} from "./user";

export interface CartElement {
  id?: number;
  product?: Product;
  user?: User;
  quantity?: number;
}
