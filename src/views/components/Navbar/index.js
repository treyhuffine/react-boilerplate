import React from 'react';
import { Link } from 'react-router-dom';

import { Bar, HeightControl, Logo } from './styles';
import Container from 'styles/components/Container';

const Navbar = () => (
  <HeightControl>
    <Bar>
      <Container>
        <Link to="/">
          <Logo>Logo</Logo>
        </Link>
      </Container>
    </Bar>
  </HeightControl>
);

export default Navbar;
