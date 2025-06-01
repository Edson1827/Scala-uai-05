import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-darkbg shadow-inner pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">ScalaUai</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Soluções de marketing digital para pequenas e médias empresas que desejam escalar seus negócios.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary">Planos</a>
                </Link>
              </li>
              <li>
                <Link href="/institucional">
                  <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary">Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary">Contato</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary">Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contato</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              contato@scalauai.com.br
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              +55 (11) 99999-9999
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              São Paulo, SP - Brasil
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            &copy; {currentYear} ScalaUai. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/termos">
              <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary">Termos de Uso</a>
            </Link>
            <Link href="/privacidade">
              <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary">Política de Privacidade</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
