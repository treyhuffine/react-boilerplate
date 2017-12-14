import styled from 'styled-components';
import { width, height } from 'styles/measurements';
import { colors } from 'styles/palette';

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

export const Container = styled.div`
  max-width: ${width.container};
  margin-left: auto;
  margin-right: auto;
`;

export const Logo = styled.div`
  color: ${colors.white};
  line-height: ${height.nav};
`;
