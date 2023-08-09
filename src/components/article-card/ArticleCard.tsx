import { ArticleMetadata } from "@/src/domain/Article";
import dayjs from "dayjs";
import Link from "next/link";
import styles from './articleCard.module.scss' 
import { SectionTitle } from "../atoms/section-title/SectionTitle";

 
export function  ArticleCard ({metadata}:{metadata: ArticleMetadata}){
  
  return (             
  <Link key={metadata.title} href={`/blog/${metadata.slug}`} passHref>
  <div className={styles.container}>
  <SectionTitle>{metadata.title}</SectionTitle>
    <p className={styles.summary}>{metadata.excerpt}</p>
    <p className={styles.date}>
      {dayjs(metadata.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
      
      {metadata.readTime}
    </p>
  </div>
</Link>
  );
}
