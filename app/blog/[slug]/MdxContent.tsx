'use client';
import { MDXRemote } from 'next-mdx-remote';

export function MdxContent({ source }: any) {
  return (
    <>
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"></link> */} {/*Mucho css */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link> {/*TODO Copy this to our css*/}
      <MDXRemote {...source} components={MdxComponents} />;
    </>)
}

/** Place your custom MDX components here */
const MdxComponents = {
  /** h1 colored in yellow */
  
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 style={{ color: '#FFF676' }} {...props} />
  ),
  /** Card component */
  Card: (props: React.HTMLProps<HTMLDivElement>) => (
    <div
      style={{
        background: '#333',
        borderRadius: '0.25rem',
        padding: '0.5rem 1rem',
      }}
      {...props}
    />
  ),
};
