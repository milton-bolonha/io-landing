import React from "react";
import Layout from "@/components/layout/Layout";
import PageSection from "@/components/ui/PageSection";
import { getFeaturedPosts, getAllPosts } from "@/lib/posts";
import PostCard from "@/components/ui/PostCard";

export default function Home({ featured, recent }) {
  return (
    <Layout>
      <PageSection
        title="Construa mais rápido"
        subtitle="Boilerplate Next.js completo"
        ctaBtnText="Começar"
        ctaBtnLink="#"
        ctaContrastBtnText="Ver GitHub"
        ctaContrastBtnLink="#"
        vPadding="py-20"
      >
        <div className="md:col-span-3">
          <p className="opacity-80">
            Pronto para produção, focado em performance, acessibilidade e UX.
          </p>
        </div>
      </PageSection>

      <PageSection title="Posts em destaque" numColumns={3}>
        {featured.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </PageSection>

      <PageSection title="Posts recentes" numColumns={3}>
        {recent.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </PageSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const featured = getFeaturedPosts(3);
  const recent = getAllPosts().slice(0, 6);
  return { props: { featured, recent } };
}
