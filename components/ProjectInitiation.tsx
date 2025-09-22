
import React, { useState } from 'react';
import { PROJECT_QUESTIONS } from '../constants';
import Card from './Card';
import Button from './Button';

interface ProjectInitiationProps {
  onComplete: (answers: string[]) => void;
  onBack: () => void;
}

const ProjectInitiation: React.FC<ProjectInitiationProps> = ({ onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(PROJECT_QUESTIONS.length).fill(''));

  const handleNext = () => {
    if (currentQuestionIndex < PROJECT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      onBack();
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };
  
  const progressPercentage = ((currentQuestionIndex + 1) / PROJECT_QUESTIONS.length) * 100;

  return (
    <Card>
      <h2 className="text-2xl font-bold text-brand-text-primary mb-4">Project Initiation Framework</h2>
      
      <div className="w-full bg-brand-border rounded-full h-2.5 mb-6">
        <div className="bg-brand-accent h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="project-answer" className="block text-lg font-semibold text-brand-text-secondary mb-3">
          Question {currentQuestionIndex + 1} of {PROJECT_QUESTIONS.length}
        </label>
        <p className="text-xl text-brand-text-primary mb-4">{PROJECT_QUESTIONS[currentQuestionIndex]}</p>
        <textarea
          id="project-answer"
          rows={5}
          className="w-full p-3 bg-gray-900 border border-brand-border rounded-md focus:ring-2 focus:ring-brand-accent focus:outline-none transition"
          value={answers[currentQuestionIndex]}
          onChange={handleAnswerChange}
          placeholder="Your thoughtful response..."
        />
      </div>

      <div className="flex justify-between items-center mt-8">
        <Button onClick={handleBack} variant="secondary">
          {currentQuestionIndex === 0 ? 'Cancel' : 'Back'}
        </Button>
        <Button onClick={handleNext} disabled={!answers[currentQuestionIndex]}>
          {currentQuestionIndex === PROJECT_QUESTIONS.length - 1 ? 'Finalize & Proceed' : 'Next'}
        </Button>
      </div>
    </Card>
  );
};

export default ProjectInitiation;
