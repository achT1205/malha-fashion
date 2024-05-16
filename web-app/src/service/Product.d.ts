export interface Product {
  price: string;
  code: string;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
  colors?: (ColorsEntity)[] | null;
  id: number;
  name: string;
  type: TypeOrGender;
  gender: TypeOrGender;
  child: boolean;
  age?: null;
  category: CategoryOrSubcategory;
  subcategory: CategoryOrSubcategory;
  collection: Collection;
  description: string;
  details?: (DetailsEntity)[] | null;
}
export interface ColorsEntity {
  name: string;
  class: string;
  selectedClass: string;
  reviews: Reviews;
  price: string;
  sizes?: (SizesEntity)[] | null;
  images?: (ImagesEntity)[] | null;
}
export interface Reviews {
  href: string;
  average: number;
  totalCount: number;
}
export interface SizesEntity {
  name: string;
  quantity: number;
}
export interface ImagesEntity {
  src: string;
  alt: string;
}
export interface TypeOrGender {
  name: string;
  label: string;
}
export interface CategoryOrSubcategory {
  id: number;
  name: string;
  label: string;
}
export interface Collection {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}
export interface DetailsEntity {
  name: string;
  items?: (string)[] | null;
}
