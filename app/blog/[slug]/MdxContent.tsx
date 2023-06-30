'use client';
// import { MDXRemote } from 'next-mdx-remote';
export function MdxContent({ source }: any) {
  // return <MDXRemote {...source} components={MdxComponents} />;
  return <h1>source</h1>;
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
