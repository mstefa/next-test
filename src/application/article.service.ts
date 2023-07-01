import { getArticleFromSlug, getSlug } from "../infrastructure/file-managment/mdx-file-repository";
import dayjs from "dayjs";
import readingTime from "reading-time";
import { ArticleMetadata } from "../domain/Article";

export async function getArticleBySlug(slug: string) {

  const serialized = await getArticleFromSlug(slug);

  if (serialized === null) {
    return null
  }

  const metadata: ArticleMetadata = {
    slug,
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

export async function getArticlesMetadata(): Promise<ArticleMetadata[]> {
  const slugs = getSlug();
  const readArticles = slugs.map(slug => {
    return getArticleBySlug(slug)
  })

  return Promise.all(readArticles).then((articles) =>
    articles
      .filter((article) => article !== null)
      .map((article) => article!.metadata)
      .sort((a, b) => {
        if (a.publishedAt > b.publishedAt) return 1
        if (a.publishedAt < b.publishedAt) return -1
        return 0
      })
      .reverse()
  )

}
