export interface TagInterface {
  id: string;
  title: string;
  slug: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  tags: TagInterface[];
  thumbnailUrl: string | null;
  author: Author;
  date: string;
  slug: string;
  _createdAt: string;
}

export interface Author{
  id: string;
  name: string;
  profile: {url: string, title: string}
  slug: string
}

export interface FaqInterface{
  id: string;
  question: string;
  answer: string;
}

export interface BlogDetail {
  id: string;
  slug: string;
  title: string;
  description: { value: DastValue } | null;
  author: Author;
  _createdAt: string;
  thumbnail: { url: string; title: string } | null;
  category: DatoCategory[];
  gallery: BlogGallery[];
  faqs: FaqInterface[];
  quote: {id: string; quote:string; author:string}
}

export interface BlogGallery {
  url: string;
  title: string;
}

export interface DatoBlog {
  id: string;
  slug: string;
  title: string;
  excerpt: { value: DastValue } | null;
  author: Author;
  _createdAt: string;
  thumbnail: { url: string; title: string } | null;
  isMain: boolean;
  category: DatoCategory[];
}

export interface DastValueInterface {
  value?: {
    schema?: string;
    document?: any;
  } | null;
}

export interface DatoCategory {
  id: string;
  title: string;
  slug: string;
}
interface DastValue {
  schema: string;
  document: { type: string; children?: DastNode[] };
}
interface DastNode {
  value?: string;
  children?: DastNode[];
}

export interface Category{
  id: string;
  title: string;
  slug: string;
}

export interface QuickLink{
  id: string;
  label: string;
  link: string;
}