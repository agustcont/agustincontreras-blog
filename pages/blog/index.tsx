type BlogPostMeta = {
  title: string;
  date: string;
  description?: string;
};

type BlogIndexProps = {
  posts: {
    slug: string;
    data: BlogPostMeta;
  }[];
};
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/Layout';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const mdx = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(mdx);

    // ✅ Explicitly cast the frontmatter
    const frontMatter = data as {
      title: string;
      date: string;
      description?: string;
    };

    return { slug, data: frontMatter };
  });

  posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return {
    props: { posts },
  };
}



export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <Layout title="Blog | Agustin Contreras">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <ul className="space-y-8">
        {posts.map(({ slug, data }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-2xl font-semibold text-blue-600 hover:underline">
              {data.title}
            </Link>
            <p className="text-gray-600">{new Date(data.date).toLocaleDateString()}</p>
            {data.description && <p className="text-gray-700">{data.description}</p>}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
