import { ButtonHTMLAttributes, PropsWithChildren, createContext } from 'react';
import * as S from './index.styled';
import { Button } from '@/components/atom/Button';

interface ButtonContextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export type ButtonProps = ButtonContextProps & PropsWithChildren;

export const ButtonContext = createContext<ButtonContextProps>({
  onClick: () => {},
});

export const ButtonWrapper = ({ onClick, children, ...props }: ButtonProps) => {
  const contextValue = { onClick, children, ...props };
  return (
    <ButtonContext.Provider value={contextValue}>
      <S.ButtonWrapper>{children}</S.ButtonWrapper>
    </ButtonContext.Provider>
  );
};

ButtonWrapper.Button = Button;
