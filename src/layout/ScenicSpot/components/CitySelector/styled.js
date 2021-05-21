import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Select as Selector, MenuItem, Button } from '@material-ui/core';

export const SelectWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 60px;
  display: flex;
  align-items: center;
  margin-left: auto;
  background-color: #fff;
  z-index: 900;
`;

export const Label = styled.label`
`;

export const SearchLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Search = styled(Button)`
`;

export const Select = styled(Selector)`
  min-width: 200px;
  margin: 20px;
  border-radius: 4px;
`;

export const Option = styled(MenuItem)`
  min-width: 200px;
`;
