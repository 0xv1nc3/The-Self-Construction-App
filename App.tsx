
import React, { useState, useCallback } from 'react';
import { View, Project } from './types';
import Header from './components/Header';
import DailyStimulus from './components/DailyStimulus';
import ProjectInitiation from './components/ProjectInitiation';
import MandateCategorization from './components/MandateCategorization';
import ActionExecution from './components/ActionExecution';

const App: React.FC = () => {
  const [view, setView] = useState<View>('daily');
  const [project, setProject] = useState<Project | null>(null);

  const handleStartNewProject = useCallback(() => {
    setProject({ answers: [], mandateCategory: null });
    setView('project_initiation');
  }, []);

  const handleProjectInitiated = useCallback((answers: string[]) => {
    setProject(prevProject => {
      if (!prevProject) return null;
      return { ...prevProject, answers };
    });
    setView('mandate_categorization');
  }, []);

  const handleMandateSelected = useCallback((category: string) => {
    setProject(prevProject => {
      if (!prevProject) return null;
      return { ...prevProject, mandateCategory: category };
    });
    setView('action_execution');
  }, []);

  const handleReset = useCallback(() => {
    setProject(null);
    setView('daily');
  }, []);

  const renderCurrentView = () => {
    switch (view) {
      case 'project_initiation':
        return <ProjectInitiation onComplete={handleProjectInitiated} onBack={handleReset} />;
      case 'mandate_categorization':
        return project ? <MandateCategorization onSelect={handleMandateSelected} /> : <div/>;
      case 'action_execution':
        return project ? <ActionExecution project={project} onReset={handleReset} /> : <div/>;
      case 'daily':
      default:
        return <DailyStimulus onStartProject={handleStartNewProject} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {renderCurrentView()}
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-brand-text-secondary">
        <p>&copy; 2024 The Self Construction App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
