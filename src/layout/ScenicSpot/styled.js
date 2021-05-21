import styled from 'styled-components';

export const Layout = styled.div`
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
  z-index: 999;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: auto;
  padding-top: 60px;
`;
