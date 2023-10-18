import { Input } from '@/components/atom/Input';
import { InputHTMLAttributes, PropsWithChildren, createContext } from 'react';
import * as S from './index.styled';
import { Label } from '@/components/atom/Label';

interface InputContextProps extends InputHTMLAttributes<HTMLInputElement> {}

export type InputProps = InputContextProps & PropsWithChildren;

export const InputContext = createContext<InputContextProps>({});

export const InputWrapper = ({ children, ...props }: InputProps) => {
  const contextValue = { children, ...props };
  return (
    <InputContext.Provider value={contextValue}>
      <S.InputWrapper>{children}</S.InputWrapper>
    </InputContext.Provider>
  );
};

InputWrapper.Input = Input;
InputWrapper.Label = Label;
