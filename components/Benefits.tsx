export const Benefits = () => {
  const benefits = [
    {
      title: 'Estratégia Personalizada',
      description: 'Desenvolvemos estratégias de marketing digital personalizadas para o seu negócio, considerando seu mercado, público-alvo e objetivos específicos.',
      icon: '📊'
    },
    {
      title: 'Resultados Mensuráveis',
      description: 'Acompanhe o desempenho das suas campanhas com relatórios detalhados e métricas claras que demonstram o retorno sobre seu investimento.',
      icon: '📈'
    },
    {
      title: 'Equipe Especializada',
      description: 'Nossa equipe é formada por profissionais experientes e certificados nas principais plataformas de marketing digital do mercado.',
      icon: '👥'
    },
    {
      title: 'Tecnologia Avançada',
      description: 'Utilizamos ferramentas e tecnologias de ponta para otimizar suas campanhas e maximizar seus resultados.',
      icon: '🚀'
    },
    {
      title: 'Suporte Dedicado',
      description: 'Conte com um atendimento personalizado e suporte técnico para esclarecer dúvidas e resolver problemas rapidamente.',
      icon: '🛠️'
    },
    {
      title: 'Escalabilidade',
      description: 'Nossos planos crescem junto com o seu negócio, permitindo que você escale suas estratégias de marketing conforme seus resultados aumentam.',
      icon: '📱'
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Por que escolher o ScalaUai?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
