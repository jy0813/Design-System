import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FiSearch } from 'react-icons/fi';
import { styled } from 'styled-components';

export const SearchIcon = styled(FiSearch)`
  font-size: ${(props) => props.fontSize}rem;
`;

export const ShoppingBag = styled(LiaShoppingBagSolid)`
  font-size: ${(props) => props.fontSize}rem;
`;
