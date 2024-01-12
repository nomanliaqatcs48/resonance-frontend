import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  padding: 35px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #666;
  background: #fff;
`;

export const Link = styled.a`
  font-size: 24px;
  transition: all 0.2s ease;
  font-weight: 500;
  margin-top: 8rem;

  &:hover {
    color: #91baf8;
  }
`;

export const Text = styled.p`
  color: #141414;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const LogoText = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  margin-top: 9px;
  margin-left: 9px;
`;

export const Description = styled.p`
  color: #141414;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LoginButton = styled.button`
  display: flex;
  height: 60px;
  padding: 19.5px 0px 20.5px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 32px;
  width: 100%;
  background-color: #1877f2;
  border: none;
  outline: none;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  margin-block: 3rem 4rem;

  &:disabled {
    background-color: #b8c1fb;
    cursor: not-allowed;
  }
`;
