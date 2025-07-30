import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Home | Agustin Contreras">
      <h1 className="text-5xl font-extrabold mb-6">Hey, I&apos;m Agustin 👋</h1>
      <p className="text-xl leading-relaxed mb-8 text-gray-700">
        I&apos;m a Cloud & SQL Server Engineer sharing honest, hands-on tutorials for Linux, Windows, cloud automation, and the daily chaos of tech life.
      </p>

      <div className="space-y-4">
        <Link href="/about">
          <span className="block text-lg text-blue-600 hover:underline">📘 Learn more about me</span>
        </Link>
        <Link href="/blog">
          <span className="block text-lg text-blue-600 hover:underline">📝 Read the latest blog posts</span>
        </Link>
        <a
          href="https://www.youtube.com/@agustincontreras1520"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-lg text-blue-600 hover:underline"
        >
          🎥 Watch my YouTube tutorials
        </a>
      </div>
    </Layout>
  );
}
