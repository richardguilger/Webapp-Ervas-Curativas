
import React from 'react';
import { MailIcon, ShieldIcon, HelpIcon, ChatIcon } from '../components/Icon';

const SettingsListItem: React.FC<{ icon: React.ReactNode, label: string, value?: string }> = ({ icon, label, value }) => (
    <div className="flex items-center gap-4 text-sm">
        <div className="text-brand-muted">{icon}</div>
        <div className="flex-grow">
            <p className="text-brand-text">{label}</p>
            {value && <p className="text-brand-muted text-xs">{value}</p>}
        </div>
    </div>
);

const SettingsScreen: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
            <h3 className="font-bold text-brand-text">Informações da Conta</h3>
            <SettingsListItem icon={<MailIcon className="w-5 h-5"/>} label="richardguilger@gmail.com" />
            <SettingsListItem icon={<ShieldIcon className="w-5 h-5"/>} label="Membro Premium" />
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
            <h3 className="font-bold text-brand-text">Opções</h3>
            <SettingsListItem icon={<HelpIcon className="w-5 h-5"/>} label="Central de Ajuda" />
            <SettingsListItem icon={<ChatIcon className="w-5 h-5"/>} label="Suporte" />
        </div>
        
        <div className="bg-brand-secondary/50 rounded-2xl p-4 text-center">
            <h4 className="font-bold text-sm text-brand-text">Ervas Curativas - Versão 1.0</h4>
            <p className="text-xs text-brand-muted">Sua área de membros para conhecimentos sobre plantas medicinais.</p>
        </div>
    </div>
  );
};

export default SettingsScreen;