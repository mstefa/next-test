import { getArticleFromSlug } from '@/src/infrastructure/file-managment/mdx-file-repository';
import Image from "next/image";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from "next-mdx-remote/serialize";
import React from 'react'

export default async function BlogsPage({params} :any) {
  const article = await getPost(params.slug) as any
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
        <MDXRemote source={article} components={{ Image }} />
        </div>
      </div>
    </React.Fragment>
  )
}

async function getPost(slug:any) {
  //fetch the particular file based on the slug
  // const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);
  console.log(content)

  const mdxSource = await serialize(content);

  return {
        source: mdxSource,
        frontmatter,
  };
}
