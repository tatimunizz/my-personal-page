import styled from 'styled-components';

export const AccordionContainer = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`;

export const AccordionButton = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  box-shaddow: none;
  background-color: transparent;

  padding: 10px 0px;
`;

export const AccordionToggle = styled.div<{ $isOpen: boolean }>`
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
  transition: transform 0.2s ease;
  display: inline-flex;
  align-items: center;
`;
