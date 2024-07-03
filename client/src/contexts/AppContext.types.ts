interface Price {
  currency: string;
  amount: number;
  decimals: number;
  full: number;
}

export interface Products {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  sellerCity: string;
}

export interface Data {
  products: Products[];
  breadcrumbs: Array<string>;
}

interface ContextType {
  data: Data;
  setSearchResult: (breadcrumbs: Array<string>, products: Products[]) => void;
}

export default ContextType;
