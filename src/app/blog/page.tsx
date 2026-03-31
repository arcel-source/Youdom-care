import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog — Conseils Aide à Domicile",
  description:
    "Articles et conseils sur l'aide à domicile, le maintien à domicile des personnes âgées, les aides financières, le handicap. Blog Youdom Care.",
};

export default function BlogPage() {
  return <BlogContent />;
}
