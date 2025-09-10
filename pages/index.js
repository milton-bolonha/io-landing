import React from "react";
import Layout from "@/components/layout/Layout";
import PageSection from "@/components/ui/PageSection";
import StoriesSection from "@/components/ui/StoriesSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import { getFeaturedPosts, getAllPosts } from "@/lib/posts";
import PostCard from "@/components/ui/PostCard";

export default function Home({ featured, recent }) {
  return (
    <Layout>
      <PageSection
        title="Revolucione!"
        titleSize="text-6xl"
        subtitle="Os Mentores do Instituto Organizacionista vão te equipar<br />para o novo mercado internacional de trabalho.<br />Nova turma de Mentoria I/O aberta — vagas limitadas"
        ctaBtnText="Encontre Um/a Mentor/a"
        ctaBtnLink="#"
        ctaContrastBtnText="Seja Mentor/a"
        ctaContrastBtnLink="#"
        ctaContrastBtnPosition="center"
        ctaBtnColor="rgb(255,105,0)"
        isFullHeight
        fullHeightSubtract="10vh"
        vPadding="py-20"
        maxWidth="max-w-[550px]"
        bgImage="images/main-bg.jpg"
      />

      <StoriesSection />

      <PageSection
        title="Testemunhos Reais"
        titleSize="text-6xl"
        subtitle="Após mudarmos as vidas de pessoas simples, impactando de forma real, nossos mentorados conquistam os seus cliente e seus próprios testemunhos."
        isFullHeight
        vPadding="py-20 pt-60"
        bgImage="images/bg-1.jpg"
      >
        <TestimonialsSection />
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
