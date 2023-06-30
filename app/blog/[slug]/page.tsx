import { getArticleFromSlug } from '@/src/infrastructure/file-managment/mdx-file-repository';
import { serialize } from "next-mdx-remote/serialize";
import React from 'react'
import { MdxContent } from './MdxContent';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticPaths } from 'next';

type Frontmatter = {
  title: string;
  publishedAt: string;
  excerpt: string;
  cover_image: string;
};
 
type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export default async function BlogsPage({params} :any) {
  let article
  try{
    article = await getArticle(params.slug) as any
  }catch(e){
    return(
      <h1>Not found</h1>
    )
  }

  const raw = await getArticleFromSlug("solid");
  // console.log( article )
  return (
    <React.Fragment>
      {/* <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head> */}
      <div className="article-container">
        <h1 className="article-title">frontmatter.title {params.slug} </h1>
        <p className="publish-date">
          {/* {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
          {frontmatter.readingTime} */}
        </p>
        <div className="content">
        
        <MdxContent source={article.serialized} />

        </div>
      </div>

    </React.Fragment>
  )
}

export async function generateStaticParams() {
  return [{ slug: 'solid' }, { slug: 'ejemplo' }]
}

async function getArticle(slug:any) {
  //fetch the particular file based on the slug
  const raw = await getArticleFromSlug(slug);
  // console.log(raw)

  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });  

  console.log(serialized)
  console.log(serialized.frontmatter)

  const frontmatter = serialized.frontmatter as Frontmatter;  //add reeding time

  return {
    frontmatter,
    serialized,
  };
}


