import path from 'path'
import fs from 'fs' //use promise version
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'

const articlesRelativePath = 'data/articles'
const articlesPath = path.join(process.cwd(), articlesRelativePath)

export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`)

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}

// dsflkj
export async function getArticleFromSlug(slug: string) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`)
  const source = fs.readFileSync(articleDir)
  return source;
  // const { content, data } = matter(source)

  // return {
  //   content,
  //   frontmatter: {
  //     slug,
  //     excerpt: data.excerpt,
  //     title: data.title,
  //     publishedAt: data.publishedAt,
  //     readingTime: readingTime(source.toString()).text,
  //     ...data,
  //   },
  // }
}

// get the path that stores all the articles or blog post
export async function getAllArticles(): Promise<Array<Article>> {
  const articles = fs.readdirSync(path.join(process.cwd(), articlesRelativePath));

  return articles.reduce((allArticles: any, articleSlug) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), articlesRelativePath, articleSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ];
  }, []);
}
