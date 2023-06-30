import { MDXRemoteSerializeResult } from "next-mdx-remote";

class Article {

  readonly data: any
  constructor() {

  }
}


export interface Frontmatter {
  title: string;
  published_at: string;
  excerpt: string;
  cover_image: string;
};

export interface Post<TFrontmatter> {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export interface Metadata {
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
}
