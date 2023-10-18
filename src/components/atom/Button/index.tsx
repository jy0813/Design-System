import { useButtonContext } from '@/contexts/useButtonContext';
import * as S from './index.styled';
import { ButtonProps } from '@/components/organism/ButtonWrapper';

export const Button = ({ onClick, children, ...props }: ButtonProps) => {
  const { type, disabled } = useButtonContext();
  return (
    <S.Button type={type} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </S.Button>
  );
};
