import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-surface py-6 shadow-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <svg
            className="w-10 h-10 text-brand-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17" />
            <path d="M2 12L12 17L22 12" />
          </svg>
          <h1 className="text-4xl font-bold text-brand-text-primary tracking-tight">
            The Self Construction App
          </h1>
        </div>
        <p className="mt-2 text-md text-brand-text-secondary italic">
          Every person is "employed" at all times, either in the production of justice or in the maintenance of non-justice.
        </p>
      </div>
    </header>
  );
};

export default Header;