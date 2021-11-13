import styled from "styled-components";

/*adding active props to toggle background-color*/
export const NavButton = styled.button<{ active: boolean }>`
  background-color: ${(p) => (p.active ? "#342e68" : "#4050b5")};
  color: #fff;
  border: transparent;
  height: 2rem;
  width: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    background-color: #242e68;
  }

  /* I'm not super good at css, but I know how to google. =P */
  /* https://codepen.io/sdthornton/pen/wBZdXq */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
