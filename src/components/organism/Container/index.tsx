import { HTMLAttributes, PropsWithChildren } from 'react';
import * as S from './index.styled';

interface ContainerInterface extends HTMLAttributes<HTMLDivElement> {
  maxWidth: number;
}

type ContainerProps = ContainerInterface & PropsWithChildren;

export default function Container({
  children,
  maxWidth,
  ...props
}: ContainerProps) {
  return (
    <S.Container $maxWidth={maxWidth} {...props}>
      {children}
    </S.Container>
  );
}
