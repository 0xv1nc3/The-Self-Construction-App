
import React from 'react';
import { Project } from '../types';
import { PROJECT_QUESTIONS, STRATEGIC_PLANNING_STEPS, ITERATIVE_TESTING_STEPS } from '../constants';
import Card from './Card';
import Button from './Button';

interface ActionExecutionProps {
  project: Project;
  onReset: () => void;
}

const ListSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <Card>
    <h3 className="text-xl font-bold text-brand-text-primary mb-4">{title}</h3>
    <ul className="space-y-3 list-decimal list-inside text-brand-text-secondary">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </Card>
);

const ActionExecution: React.FC<ActionExecutionProps> = ({ project, onReset }) => {
  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-3xl font-bold text-brand-text-primary mb-4">Project Plan: Action & Execution</h2>
        <p className="text-brand-text-secondary">Your project is now defined. Proceed with the following phases to ensure constructive execution.</p>
      </Card>
      
      <Card>
        <h3 className="text-xl font-bold text-brand-text-primary mb-4">Selected Mandate</h3>
        <p className="p-4 bg-gray-900 border border-brand-border rounded-md text-brand-text-secondary italic">
          {project.mandateCategory}
        </p>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-brand-text-primary mb-4">Project Framework Answers</h3>
        <dl className="space-y-4">
          {project.answers.map((answer, index) => (
            <div key={index}>
              <dt className="font-semibold text-brand-text-secondary">{PROJECT_QUESTIONS[index]}</dt>
              <dd className="pl-4 mt-1 border-l-2 border-brand-border text-brand-text-primary">{answer || "No answer provided."}</dd>
            </div>
          ))}
        </dl>
      </Card>

      <ListSection title="Strategic Planning Phase" items={STRATEGIC_PLANNING_STEPS} />
      <ListSection title="Iterative Testing Phase" items={ITERATIVE_TESTING_STEPS} />

      <div className="text-center pt-8">
        <Button onClick={onReset} variant="primary">
          Start a New Project
        </Button>
      </div>
    </div>
  );
};

export default ActionExecution;
