import path from 'path'
import fs from 'fs' //use promise version
import { sync } from 'glob'
import { serialize } from 'next-mdx-remote/serialize'
import { Frontmatter, Post } from '@/src/domain/Article'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeHighlight from "rehype-highlight";

const articlesRelativePath = 'data/articles'
const articlesPath = path.join(process.cwd(), articlesRelativePath)

export function getSlug(): string[] {
  const paths = sync(`${articlesPath}/*.mdx`)

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}

export async function getArticleFromSlug(slug: string): Promise<MDXRemoteSerializeResult<Post<Frontmatter>, Frontmatter> | null> {

  const articleDir = path.join(articlesPath, `${slug}.mdx`)

  try {
    const raw = fs.readFileSync(articleDir)
    const serialized = await serialize<Post<Frontmatter>, Frontmatter>(raw, {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
        ],
      },
    });
    return serialized

  } catch (e) {
    console.log(e)
    return null
  }

}

// // get the path that stores all the articles or blog post
// export async function getAllArticles(): Promise<Array<Article>> {
//   const articles = fs.readdirSync(path.join(process.cwd(), articlesRelativePath));

//   return articles.reduce((allArticles: any, articleSlug) => {
//     // get parsed data from mdx files in the "articles" dir
//     const source = fs.readFileSync(
//       path.join(process.cwd(), articlesRelativePath, articleSlug),
//       "utf-8"
//     );
//     const { data } = matter(source);

//     return [
//       {
//         ...data,
//         slug: articleSlug.replace(".mdx", ""),
//         readingTime: readingTime(source).text,
//       },
//       ...allArticles,
//     ];
//   }, []);
// }
