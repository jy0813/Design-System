import { InputContext } from '@/components/organism/InputWrapper';
import { useContext } from 'react';

export const useInputContext = () => {
  const context = useContext(InputContext);
  return context;
};
