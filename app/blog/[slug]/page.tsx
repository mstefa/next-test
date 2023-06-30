import { getArticleFromSlug, getSlug } from '@/src/infrastructure/file-managment/mdx-file-repository';
import React from 'react'
import { MdxContent } from './MdxContent';
import readingTime from 'reading-time';
import dayjs from 'dayjs';
import { Metadata } from '@/src/domain/Article';


export default async function BlogsPage({params} :any) {

  const article = await getArticle(params.slug)

  if (article === null){
    <h1>NOT FOUND</h1>
  }

  const {metadata, serialized} = article!;

  return (
    <>
      <div className="article-container">
        <h1 className="article-title">{metadata.title} </h1>
        <p className="publish-date">
          {metadata.publishedAt} &mdash;{' '}
          {metadata.readTime}
        </p>
        <div className="content">
        
        <MdxContent source={serialized} />

        </div>
      </div>

    </>
  )
}

export async function generateStaticParams() {
  const slugs = getSlug();
  return  slugs.map(((e) => { return {slug: e}}))
}

async function getArticle(slug:string) {

  const serialized = await getArticleFromSlug(slug);

  if(serialized === null){
    return null
  }
  
  const metadata: Metadata = {
    title: serialized.frontmatter.title,
    excerpt: serialized.frontmatter.excerpt,
    coverImage: serialized.frontmatter.cover_image,
    publishedAt: dayjs(serialized.frontmatter.published_at).format("D MMMM YYYY"),
    readTime: readingTime(serialized.compiledSource).text,
  }

  return {
    metadata,
    serialized,
  };
}


