import { ButtonContext } from '@/components/organism/ButtonWrapper';
import { useContext } from 'react';

export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  return context;
};
