import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Section = styled.div`
  height: 500px;
  padding: 42px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #666;
  background: #fff;
`;

export const Description = styled.h2``;

export const Warning = styled.h4``;

export const Link = styled.a`
  font-size: 24px;
  transition: all 0.2s ease;
  font-weight: 500;
  margin-top: 8rem;

  &:hover {
    color: #91baf8;
  }
`;
