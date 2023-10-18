import { useInputContext } from '@/contexts/useInputContext';
import * as S from './index.styled';

export const Input = ({ ...props }) => {
  const { id, value, type, placeholder, onChange } = useInputContext();
  return (
    <S.Input
      id={id}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      {...props}
    />
  );
};
