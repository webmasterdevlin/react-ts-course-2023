import styled from "styled-components";
import { Form as FormikForm, Field as FormikField } from "formik";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-right: 1rem;
`;

/*adding active props to toggle color and mouse cursor*/
export const ItemName = styled.span<{ done: boolean }>`
  color: ${(p) => (p.done ? "grey" : "black")};
  cursor: ${(p) => (p.done ? "pointer" : "auto")};
  text-transform: capitalize;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

/* I'm not super good at css, but I know how to google. =P */
/* codepen link: https://codepen.io/vescoyez/pen/wMyRLP */
export const Field = styled(FormikField)`
  margin-right: 1rem;
  font-family: inherit;
  border: 0;
  border-bottom: 1px solid #d2d2d2;
  outline: 0;
  font-size: 16px;
  color: #212121;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
`;

export const Button = styled.button<{
  backgroundColor?: string;
  color?: string;
}>`
  background-color: ${(p) => p.backgroundColor ?? "#ff3f80"};
  color: ${(p) => p.color ?? "#fff"};
  border: transparent;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  height: 2rem;
  width: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    background-color: #f44335;
  }
  &:disabled {
    background-color: lightgray;
    color: darkgray;
  }
`;
