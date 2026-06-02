import { FooterCredit, FooterNote, StyledFooter } from "./Footer.styles";

export function Footer() {
  return (
    <StyledFooter>
      <FooterNote>
        <span>contact me</span>
        <p>tati.muniz0@gmail.com</p>
      </FooterNote>
      <FooterCredit>
        Tatiana Muniz Rodriguez.<br/>
        All rights reserved.<br/>
        © 2026.
      </FooterCredit>
    </StyledFooter>
  );
}