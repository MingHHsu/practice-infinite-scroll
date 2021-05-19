import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
`;

export const Content = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
`;
