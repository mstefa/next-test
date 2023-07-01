// import HelloWorld from '../../posts/solid.mdx'
 
// export default function Page() {
//   return <HelloWorld />
// }


import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import { getArticlesMetadata } from '../../src/application/article.service'
import dayjs from 'dayjs';

export default async function ListOfBlogsPage() {
  const articlesMetadata = await getArticlesMetadata()
  return (
    <React.Fragment>
      <Head>
        <title>My Blog</title>
      </Head>
      <div>
        <h1>My Blog</h1>
        {articlesMetadata.map((metadata) => {
          return (
            <Link key={metadata.title} href={`/blog/${metadata.slug}`} passHref>
              <div>
                <h2 className="title">{metadata.title}</h2>
                <p className="summary">{metadata.excerpt}</p>
                <p className="date">
                  {dayjs(metadata.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                  
                  {metadata.readTime}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </React.Fragment>
  )
}


