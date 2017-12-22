import React from 'react';

import { Bar, HeightControl, Logo, StyledLink, FlexContainer } from './styles';

const Navbar = () => (
  <HeightControl>
    <Bar>
      <FlexContainer>
        <Logo>
          <StyledLink to="/">
            Logo
          </StyledLink>
        </Logo>
      </FlexContainer>
    </Bar>
  </HeightControl>
);

export default Navbar;
