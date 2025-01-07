export type AttemptsCountVariant = 'default' | 'white';

export interface AttemptsCountProps {
  className?: string;
  count: number;
  variant?: AttemptsCountVariant;
}
