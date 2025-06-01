import { useState } from 'react';
import { Layout } from '../components/Layout';
import { FormModal } from '../components/FormModal';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { QuizModal } from '../components/QuizModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [showQuizBanner, setShowQuizBanner] = useState(true);

  const handleContratarClick = (planName) => {
    // Abre o modal
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleQuizComplete = (recommendedPlan) => {
    // Abre o modal com o plano recomendado
    setSelectedPlan(recommendedPlan);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {/* Quiz Banner */}
      {showQuizBanner && (
        <div className="bg-accent text-white py-3 px-4 flex justify-between items-center">
          <p className="text-sm md:text-base">
            Não sabe qual plano escolher? <span className="font-bold">Faça nosso quiz rápido</span> e descubra o ideal para seu negócio!
          </p>
          <div className="flex space-x-2">
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="bg-white text-accent px-3 py-1 rounded text-sm font-medium hover:bg-opacity-90 transition"
            >
              Fazer Quiz
            </button>
            <button 
              onClick={() => setShowQuizBanner(false)}
              className="text-white opacity-70 hover:opacity-100"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">ScalaUai</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">Transforme seu investimento em marketing digital em resultados reais e mensuráveis para empresas que faturam de R$ 20 mil até R$ 5 milhões</p>
          
          {/* Quiz Button Removed as requested */}
        </header>

        {/* Garantia de Resultados removida conforme solicitado */}

        <section className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Starter</h2>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Mais Vendido</span>
            </div>
            <p className="mb-2 text-primary text-2xl font-bold">12x de R$197</p>
            <p className="text-sm mb-4">Aumente suas vendas com campanhas direcionadas e resultados em 30 dias</p>
            
            <ul className="mb-6 space-y-2 text-sm">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                1 campanha ativa
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                1 criativo por mês
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Relatório mensal de resultados
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Suporte por email
              </li>
            </ul>
            
            <button 
              onClick={() => handleContratarClick('Starter')}
              className="w-full bg-primary text-white px-4 py-2 rounded inline-block hover:bg-opacity-90 transition"
            >
              Garantir Resultados
            </button>
          </div>

          <div className="border-2 border-primary rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative transform scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
              Mais Popular
            </div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Aceleração</h2>
              <span className="bg-primary bg-opacity-10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">Recomendado</span>
            </div>
            <p className="mb-2 text-primary text-2xl font-bold">12x de R$297</p>
            <p className="text-sm mb-4">Dobre seu ROI com estratégias avançadas e landing pages de alta conversão</p>
            
            <ul className="mb-6 space-y-2 text-sm">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                2 campanhas ativas
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                3 criativos por mês
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Landing page personalizada
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Relatórios semanais
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Suporte prioritário
              </li>
            </ul>
            
            <button 
              onClick={() => handleContratarClick('Aceleração')}
              className="w-full bg-primary text-white px-4 py-2 rounded inline-block hover:bg-opacity-90 transition"
            >
              Acelerar Crescimento
            </button>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Crescimento Exponencial</h2>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Premium</span>
            </div>
            <p className="mb-2 text-primary text-2xl font-bold">12x de R$397</p>
            <p className="text-sm mb-4">Multiplique seus resultados com estratégias omnichannel e otimização contínua</p>
            
            <ul className="mb-6 space-y-2 text-sm">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                4 campanhas ativas
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                5 criativos por mês
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Sistema completo de funil
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Estratégia omnichannel
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Relatórios em tempo real
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Consultor dedicado
              </li>
            </ul>
            
            <button 
              onClick={() => handleContratarClick('Crescimento Exponencial')}
              className="w-full bg-primary text-white px-4 py-2 rounded inline-block hover:bg-opacity-90 transition"
            >
              Escalar Negócio
            </button>
          </div>
        </section>
        
        {/* Comparativo com Concorrentes */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Por que escolher o ScalaUai?</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Recursos</th>
                  <th scope="col" className="px-6 py-3 text-center">ScalaUai</th>
                  <th scope="col" className="px-6 py-3 text-center">Agências Tradicionais</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Investimento Mensal
                  </th>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    A partir de R$197/mês
                  </td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">
                    R$1.500 a R$5.000/mês
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Contrato Mínimo
                  </th>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    Sem contrato mínimo
                  </td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">
                    6 a 12 meses
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Garantia de Resultados
                  </th>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    30 dias ou dinheiro de volta
                  </td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">
                    Sem garantias
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Transparência
                  </th>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    Relatórios detalhados e dashboard
                  </td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">
                    Relatórios limitados
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Tempo para Resultados
                  </th>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    Primeiros 30 dias
                  </td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">
                    3 a 6 meses
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Economize até 75% comparado a agências tradicionais com resultados superiores</p>
        </div>
      </section>
      
      <Benefits />
      
      <Testimonials />
      
      <FAQ />
      
      {/* Calculadora de ROI */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Calculadora de ROI</h2>
        <p className="text-center mb-8">Descubra quanto você pode economizar e ganhar com o ScalaUai</p>
        
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Com Agências Tradicionais</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Investimento mensal</label>
                  <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded">R$ 3.000,00</div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Contrato mínimo</label>
                  <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded">6 meses</div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Investimento total</label>
                  <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded">R$ 18.000,00</div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">ROI médio</label>
                  <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded">1.5x</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Com ScalaUai</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Investimento mensal</label>
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded">R$ 297,00</div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Contrato mínimo</label>
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded">Sem contrato</div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Investimento total (6 meses)</label>
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded">R$ 1.782,00</div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">ROI médio</label>
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded">3.5x</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
            <h4 className="font-semibold text-center mb-2">Sua economia com ScalaUai</h4>
            <p className="text-center text-2xl font-bold text-green-600 dark:text-green-400">R$ 16.218,00 (90%)</p>
          </div>
          
          {/* Botão de quiz removido conforme solicitado */}
        </div>
      </section>
      
      {/* Calendário de Implementação */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Como Funciona</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1 w-5 h-5 rounded-full bg-primary"></div>
              <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:pl-8 w-full md:w-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="font-bold mb-2">Dia 1: Diagnóstico</h3>
                <p className="text-sm">Análise completa da sua presença digital atual e definição de objetivos claros.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1 w-5 h-5 rounded-full bg-primary"></div>
              <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:pr-8 w-full md:w-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="font-bold mb-2">Dia 3-5: Estratégia</h3>
                <p className="text-sm">Desenvolvimento da estratégia personalizada e criação dos primeiros materiais.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1 w-5 h-5 rounded-full bg-primary"></div>
              <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:pl-8 w-full md:w-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="font-bold mb-2">Dia 7: Lançamento</h3>
                <p className="text-sm">Ativação das campanhas e início do monitoramento em tempo real.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1 w-5 h-5 rounded-full bg-primary"></div>
              <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:pr-8 w-full md:w-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="font-bold mb-2">Dia 15: Otimização</h3>
                <p className="text-sm">Primeira rodada de otimizações baseadas nos dados coletados.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1 w-5 h-5 rounded-full bg-primary"></div>
              <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:pl-8 w-full md:w-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="font-bold mb-2">Dia 30: Resultados</h3>
                <p className="text-sm">Análise completa dos primeiros resultados e planejamento dos próximos passos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
          aria-label="Chat"
          onClick={() => alert('Chatbot em breve!')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
      
      <FormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planName={selectedPlan} 
      />
      
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onComplete={handleQuizComplete}
      />
    </Layout>
  );
}
