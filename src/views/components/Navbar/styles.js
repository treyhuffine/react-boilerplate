import styled from 'styled-components';
import { height } from 'styles/measurements';
import { colors } from 'styles/palette';
import { size } from 'styles/font';

export const Bar = styled.div`
  height: ${height.nav};
  background-color: ${colors.brand};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeightControl = styled.div`
  height: ${height.nav};
  width: 100%;
`;

export const Logo = styled.div`
  color: ${colors.white};
  font-size: ${size.large};
  line-height: ${height.nav};
  display: inline-flex;
`;
