
import React from 'react';
import { DAILY_ACTIVITIES } from '../constants';
import Card from './Card';
import Button from './Button';

interface DailyStimulusProps {
  onStartProject: () => void;
}

const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 text-brand-accent flex-shrink-0 mr-3" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);


const DailyStimulus: React.FC<DailyStimulusProps> = ({ onStartProject }) => {
  return (
    <Card>
      <h2 className="text-2xl font-bold text-brand-text-primary mb-2">Daily Constructive Stimulus</h2>
      <p className="text-brand-text-secondary mb-6">Choose a constructive activity to "freshen" your mind and body.</p>
      
      <ul className="space-y-4 mb-8">
        {DAILY_ACTIVITIES.map((activity, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon/>
            <span>{activity}</span>
          </li>
        ))}
      </ul>

      <div className="text-center border-t border-brand-border pt-6">
        <p className="text-brand-text-secondary mb-4">Or, translate an idea into a formal project.</p>
        <Button onClick={onStartProject}>
          Start a New Project
        </Button>
      </div>
    </Card>
  );
};

export default DailyStimulus;
