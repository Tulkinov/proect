import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-bottom: 150px;
  border-bottom: 1px solid red;
`;
Container.Left = styled.div`
  display: flex;
  flex: 1;
  margin-top: auto;
`;
Container.Right = styled.div`
  display: flex;
  flex: 1;
`;
export const Content = styled.div`
  font-family: Philosopher;
  font-style: normal;
  font-weight: bold;
  font-size: 48.83px;
  line-height: 58px;
  color: #150c01;
`;
