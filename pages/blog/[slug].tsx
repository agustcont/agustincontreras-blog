import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';

type BlogProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    date: string;
    description?: string;
  };
};

export default function BlogPost({ source, frontMatter }: BlogProps) {
  return (
    <Layout title={`${frontMatter.title} | Agustin Contreras`}>
      <article className="prose prose-lg mx-auto px-4">
        <h1>{frontMatter.title}</h1>
        <p className="text-gray-500 text-sm mb-8">
          {new Date(frontMatter.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <MDXRemote {...source} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join('posts', `${params?.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
