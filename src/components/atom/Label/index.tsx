import { useInputContext } from '@/contexts/useInputContext';
import { PropsWithChildren } from 'react';
import * as S from './index.styled';

export const Label = ({ children, ...props }: PropsWithChildren) => {
  const { id } = useInputContext();
  return (
    <S.Label htmlFor={id} {...props}>
      {children}
    </S.Label>
  );
};
