
import React from 'react';
import { 
  Scale, 
  FileCheck, 
  Users, 
  Gavel, 
  Handshake, 
  UserRoundCheck, 
  ScrollText, 
  History, 
  Cpu 
} from 'lucide-react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'derechos-reales',
    title: 'Asesoría integral en derechos reales',
    description: 'Gestión y protección legal de la propiedad y otros derechos sobre bienes inmuebles.',
    icon: 'Scale'
  },
  {
    id: 'titulos',
    title: 'Estudio y saneamiento de títulos',
    description: 'Análisis exhaustivo de antecedentes dominiales para garantizar la seguridad jurídica.',
    icon: 'FileCheck'
  },
  {
    id: 'condominios',
    title: 'División de condominios',
    description: 'Resolución legal y técnica para la partición de bienes compartidos.',
    icon: 'Users'
  },
  {
    id: 'usucapiones',
    title: 'Usucapiones',
    description: 'Regularización de dominio a través de la posesión veinteañal o breve.',
    icon: 'Gavel'
  },
  {
    id: 'negociacion',
    title: 'Negociación',
    description: 'Resolución estratégica de conflictos mediante el diálogo técnico y legal.',
    icon: 'Handshake'
  },
  {
    id: 'mediacion',
    title: 'Mediación',
    description: 'Facilitación profesional para alcanzar acuerdos sin necesidad de litigio judicial.',
    icon: 'UserRoundCheck'
  },
  {
    id: 'declaratorias',
    title: 'Declaratorias de herederos',
    description: 'Gestión procesal para el reconocimiento formal de la calidad de heredero.',
    icon: 'ScrollText'
  },
  {
    id: 'sucesiones',
    title: 'Sucesiones',
    description: 'Tramitación completa de procesos sucesorios ab-intestato o testamentarios.',
    icon: 'History'
  },
  {
    id: 'blockchain',
    title: 'Blockchain legal y seguridad jurídica',
    description: 'Integración de tecnologías descentralizadas para la certificación y auditoría legal.',
    icon: 'Cpu',
    special: true
  }
];

export const getIcon = (iconName: string, className?: string) => {
  switch (iconName) {
    case 'Scale': return <Scale className={className} />;
    case 'FileCheck': return <FileCheck className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Gavel': return <Gavel className={className} />;
    case 'Handshake': return <Handshake className={className} />;
    case 'UserRoundCheck': return <UserRoundCheck className={className} />;
    case 'ScrollText': return <ScrollText className={className} />;
    case 'History': return <History className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    default: return <Scale className={className} />;
  }
};
