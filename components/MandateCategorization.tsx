
import React from 'react';
import { MANDATE_TITLE, MANDATE_CATEGORIES } from '../constants';
import Card from './Card';

interface MandateCategorizationProps {
  onSelect: (category: string) => void;
}

const MandateCategorization: React.FC<MandateCategorizationProps> = ({ onSelect }) => {
  return (
    <Card>
      <h2 className="text-2xl font-bold text-brand-text-primary mb-4">The Overarching Mandate</h2>
      <p className="text-brand-text-secondary mb-6 italic">{MANDATE_TITLE}</p>
      
      <div className="space-y-4">
        <p className="text-brand-text-primary font-semibold">Categorize your project under one of these purposes:</p>
        {MANDATE_CATEGORIES.map((category) => (
          <button
            key={category.title}
            onClick={() => onSelect(category.description)}
            className="w-full text-left p-4 bg-brand-border hover:bg-gray-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent"
          >
            <h3 className="font-bold text-brand-text-primary">{category.title}</h3>
            <p className="text-brand-text-secondary">{category.description}</p>
          </button>
        ))}
      </div>
    </Card>
  );
};

export default MandateCategorization;
