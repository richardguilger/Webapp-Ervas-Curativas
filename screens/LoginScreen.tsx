
import React, { useState } from 'react';
import { LeafIcon, MailIcon, LockClosedIcon } from '../components/Icon';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('cliente713@ervascurativas.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'cliente713@ervascurativas.com' && password === 'c713') {
      setError('');
      onLogin();
    } else {
      setError('Credenciais inválidas. Tente novamente.');
      setPassword('');
    }
  };

  return (
    <div 
        className="min-h-screen flex items-center justify-center p-4 font-sans bg-cover bg-center"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1920&auto=format&fit=crop')"}}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-sm mx-auto bg-black/20 backdrop-blur-lg rounded-2xl p-8 text-white shadow-2xl">
        <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full mb-4">
                <LeafIcon className="w-8 h-8 text-white"/>
            </div>
            <h1 className="text-3xl font-bold">Bem-vindo de Volta</h1>
            <p className="text-white/80 mt-1">Acesse sua conta para continuar.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
             <MailIcon className="w-5 h-5 text-white/50 absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none" />
             <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                aria-label="Email"
                className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-brand-primary/50 focus:outline-none transition placeholder:text-white/50"
             />
          </div>
          <div className="relative">
            <LockClosedIcon className="w-5 h-5 text-white/50 absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none" />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                aria-label="Senha"
                className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-brand-primary/50 focus:outline-none transition placeholder:text-white/50"
            />
          </div>

          {error && <p className="text-orange-400 text-sm pt-1 text-center">{error}</p>}
          
          <div className="text-right text-sm">
            <a href="#" className="hover:underline text-white/70 hover:text-white transition">Esqueceu a senha?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl hover:bg-brand-accent transition-all duration-300 shadow-lg shadow-brand-primary/30 transform hover:scale-105"
          >
            Entrar
          </button>
        </form>

        <p className="mt-8 text-sm text-center text-white/70">
          Não tem uma conta? <a href="#" className="font-semibold hover:underline text-white transition">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;