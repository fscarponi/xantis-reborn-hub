
import React from 'react';
import { type Project, View } from './types';

const GearsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const HammerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 20.828V14.5a2.5 2.5 0 00-2.5-2.5H6.5A2.5 2.5 0 014 9.5v-3A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v3A2.5 2.5 0 0117.5 12H14"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 12v8.828"/>
    </svg>
);

const WandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

export const PROJECTS: Project[] = [
  {
    id: View.PS_CALCULATOR,
    name: 'PS Calculator',
    url: 'https://xantis-reborn-ps-calculator.vercel.app/',
    icon: <GearsIcon />,
    description: 'Quanti reni devi vendere per quel +1 in Oratoria? Scoprilo qui prima che sia troppo tardi.',
  },
  {
    id: View.ITEM_CALCULATOR,
    name: 'Item Calculator',
    url: 'https://xantis-reborn-item-calculator.vercel.app/',
    icon: <HammerIcon />,
    description: 'Perché craftare una spada leggendaria non dovrebbe richiedere un Dottorato in Economia. O forse sì?',
  },
  {
    id: View.MAGIC_FOR_DUMMIES,
    name: 'Magic for Dummies',
    url: 'https://xantis-reborn-mana-calculator.vercel.app',
    icon: <WandIcon />,
    description: "'Abracadabra' non basta? Questo strumento ti aiuta a non finire il mana dopo aver acceso una candela.",
  },
];
