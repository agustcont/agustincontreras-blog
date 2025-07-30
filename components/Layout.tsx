import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({
  children,
  title = "Agustin Contreras",
  description = "Cloud Engineer & SQL Admin sharing tutorials, blogs, and lessons learned.",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Agustin Contreras Logo" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-blue-600">Agustin Contreras</span>
          </Link>
          <div className="space-x-4 text-sm">
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <a href="https://www.youtube.com/@agustincontreras1520" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              YouTube
            </a>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
        <div className="max-w-3xl mx-auto">{children}</div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Agustin Contreras. All rights reserved.
        </div>
      </footer>
    </>
  );
}
