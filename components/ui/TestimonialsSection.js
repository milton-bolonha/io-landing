import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "CEO, TechCorp",
      image: "/images/testimonial-1.jpg",
      text: "A mentoria transformou completamente minha visão de liderança. Hoje lidero uma equipe de 50 pessoas com confiança.",
    },
    {
      id: 2,
      name: "João Santos",
      role: "Empreendedor",
      image: "/images/testimonial-2.jpg",
      text: "Consegui validar minha ideia e levantar investimento graças aos insights dos mentores. Inestimável!",
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Diretora de Marketing",
      image: "/images/testimonial-3.jpg",
      text: "A mentoria me ajudou a fazer a transição para o mercado internacional. Hoje trabalho remotamente para uma empresa americana.",
    },
    {
      id: 4,
      name: "Carlos Lima",
      role: "CTO, StartupXYZ",
      image: "/images/testimonial-4.jpg",
      text: "Os mentores me ensinaram estratégias de networking que mudaram minha carreira. Recomendo para todos!",
    },
    {
      id: 5,
      name: "Fernanda Oliveira",
      role: "Consultora",
      image: "/images/testimonial-5.jpg",
      text: "A mentoria em desenvolvimento pessoal foi fundamental para minha evolução profissional e pessoal.",
    },
    {
      id: 6,
      name: "Roberto Alves",
      role: "Gerente de Projetos",
      image: "/images/testimonial-6.jpg",
      text: "Aprender sobre tecnologia e inovação com mentores experientes acelerou meu crescimento na área.",
    },
    {
      id: 7,
      name: "Patricia Rocha",
      role: "Fundadora, Inovatec",
      image: "/images/testimonial-7.jpg",
      text: "A mentoria em empreendedorismo me deu as ferramentas necessárias para construir meu negócio do zero.",
    },
    {
      id: 8,
      name: "Lucas Ferreira",
      role: "Analista de Dados",
      image: "/images/testimonial-8.jpg",
      text: "Consegui migrar para a área de dados e hoje trabalho com IA graças à orientação dos mentores.",
    },
    {
      id: 9,
      name: "Juliana Martins",
      role: "Head de Vendas",
      image: "/images/testimonial-9.jpg",
      text: "As estratégias de vendas que aprendi na mentoria triplicaram meus resultados em apenas 6 meses.",
    },
    {
      id: 10,
      name: "Diego Souza",
      role: "Product Manager",
      image: "/images/testimonial-10.jpg",
      text: "A mentoria me ensinou a pensar estrategicamente sobre produtos e hoje lidero uma equipe de 20 pessoas.",
    },
  ];

  return (
    <div className="relative overflow-hidden mt-10">
      {/* Container dos testemunhos */}
      <div className="relative">
        {/* Gradiente lateral esquerdo */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #030014 0%, transparent 100%)",
          }}
        />

        {/* Gradiente lateral direito */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #030014 0%, transparent 100%)",
          }}
        />

        {/* Primeira linha - esquerda para direita */}
        <div className="flex gap-6 mb-6 overflow-hidden">
          <div className="flex gap-6 animate-scroll-left">
            {[...testimonials.slice(0, 5), ...testimonials.slice(0, 5)].map(
              (testimonial, index) => (
                <div
                  key={`row1-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Segunda linha - direita para esquerda */}
        <div className="flex gap-6 overflow-hidden">
          <div className="flex gap-6 animate-scroll-right">
            {[...testimonials.slice(5, 10), ...testimonials.slice(5, 10)].map(
              (testimonial, index) => (
                <div
                  key={`row2-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
