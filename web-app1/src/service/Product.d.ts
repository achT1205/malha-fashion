export interface Product {
  id: number;
  name: string;
  price: string;
  code: string;
  quantity: number;
  image: ImagesEntityOrImage;
  colors?: (ColorsEntity)[] | null;
  category: Category;
  material: TagsEntityOrOccasionsEntityOrMaterialOrModel;
  tags?: (TagsEntityOrOccasionsEntityOrMaterialOrModel)[] | null;
  model: TagsEntityOrOccasionsEntityOrMaterialOrModel;
  occasions?: (TagsEntityOrOccasionsEntityOrMaterialOrModel)[] | null;
  collection: Collection;
  description: string;
  details?: (DetailsEntity)[] | null;
}
export interface ImagesEntityOrImage {
  alt: string;
  src: string;
}
export interface ColorsEntity {
  name: string;
  class: string;
  selectedClass: string;
  reviews: Reviews;
  price: string;
  sizes?: (SizesEntity)[] | null;
  images?: (ImagesEntityOrImage)[] | null;
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
export interface Category {
  id: number;
  name: string;
  image: ImagesEntityOrImage;
}
export interface TagsEntityOrOccasionsEntityOrMaterialOrModel {
  id: number;
  name: string;
  value: string;
  description: string;
}
export interface Collection {
  id: number;
  name: string;
  image: ImagesEntityOrImage;
  description: string;
}
export interface DetailsEntity {
  name: string;
  items?: (string)[] | null;
}
