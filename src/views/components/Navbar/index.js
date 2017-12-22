import React from 'react';

import { Bar, HeightControl, Logo, StyledLink } from './styles';
import Container from 'styles/components/Container';

const Navbar = () => (
  <HeightControl>
    <Bar>
      <Container>
        <Logo>
          <StyledLink to="/">
            Logo
          </StyledLink>
        </Logo>
      </Container>
    </Bar>
  </HeightControl>
);

export default Navbar;
