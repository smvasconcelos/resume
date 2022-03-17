import styled from "styled-components";

export const Container = styled.div`
  ${(props) => props.theme.aligns.vertical};
  position: relative;
  flex-flow: column;
  width: 100%;
  height: 545px;
`;
export const ImgLogo = styled.img`
  width: 90px;
  margin: 20px 0 20px 0;
`;
export const Title = styled.span`
  ${(props) => props.theme.fonts.poppins};
  color: ${(props) => props.theme.colors.titleCacauDigital};
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
`;

export const Link = styled.span`
  ${(props) => props.theme.fonts.poppins};
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryBtn};
  &:hover {
    color: ${(props) => props.theme.colors.primaryBtn}dd;
  }
  width: 80%;
`;
export const ForgotPasswordText = styled.span`
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  float: right;
  padding: 10px 0;
`;
export const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.blackTransparentMind};
`;
export const SignUpText = styled.span`
  cursor: pointer;
  position: absolute;
  bottom: 15px;
  font-size: 14px;
  width: 80%;
  text-align: center;
`;
