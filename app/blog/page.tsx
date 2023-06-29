// import HelloWorld from '../../posts/solid.mdx'
 
// export default function Page() {
//   return <HelloWorld />
// }


import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import { getAllArticles } from '../../src/infrastructure/file-managment/mdx-file-repository'
import dayjs from 'dayjs';

const getArticles = async (): Promise<Array<Article>>  =>  {
  const articles = await getAllArticles()

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1

      return 0
    })

  return articles.reverse();
};

export default async function ListOfBlogsPage() {
  const posts = await getArticles();
  return (
    <React.Fragment>
      <Head>
        <title>My Blog</title>
      </Head>
      <div>
        <h1>My Blog</h1>
        {posts.map((frontMatter :any) => {
          return (
            <Link key={frontMatter.title} href={`/blog/${frontMatter.slug}`} passHref>
              <div>
                <h1 className="title">{frontMatter.title}</h1>
                <p className="summary">{frontMatter.excerpt}</p>
                <p className="date">
                  {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                  
                  {frontMatter.readingTime}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </React.Fragment>
  )
}


