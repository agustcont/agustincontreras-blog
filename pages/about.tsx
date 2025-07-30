import Layout from "../components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout title="About Me | Agustin Contreras">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>

      <p className="text-lg text-gray-700 mb-6">
        Hey, I'm Agustin — a Cloud Engineer and SQL Server Admin based in the U.S. I’ve worked across sysadmin, DevOps, and DBA roles, managing complex systems, automating the boring stuff, and always troubleshooting something on fire 🔥.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        I started this site to document what I learn, share how I solve problems, and maybe even help someone else avoid the pain I went through. From PowerShell to Terraform, from SQL backups to Linux servers, this is my home base.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        When I’m not in the terminal, I’m hiking, playing tennis or golf, or learning something new (probably security-related).
      </p>

      <Link href="/" className="text-blue-600 hover:underline text-lg">← Back to home</Link>
    </Layout>
  );
}
