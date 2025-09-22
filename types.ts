
export type View = 'daily' | 'project_initiation' | 'mandate_categorization' | 'action_execution';

export interface Project {
  answers: string[];
  mandateCategory: string | null;
}
