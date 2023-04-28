import React from 'react';
import Styled, {useTheme} from 'styled-components/native';

type ViewData = {
  border: string;
  jus: string;
  ali: string;
  padL: string;
  padR: string;
  padT: string;
  padB: string;
  borR: string;
  ofl: string;
  fdr: string;
  padd: string;
  bcC: string;
  children: JSX.Element;
};
const getVariant = (
  border,
  jus,
  ali,
  padL,
  padR,
  padT,
  padB,
  borR,
  ofl,
  fdr,
  padd,
  bcC,
  theme,
) => {
  if (padd > 0) {
    return `
    flex-direction: ${fdr};
    border: ${border};
      justify-content: ${jus};
      align-items: ${ali};
  padding-left: ${padd}px;
  padding-right: ${padd}px;
  padding-top: ${padd}px;
  padding-bottom: ${padd}px;
  border-radius: ${borR}px;
  overflow: ${ofl};
  background-color: ${bcC}
      `;
  } else {
    return `
    flex-direction: ${fdr};
    border: ${border};
      justify-content: ${jus};
      align-items: ${ali};
  padding-left: ${padL}px;
  padding-right: ${padR}px;
  padding-top: ${padT}px;
  padding-bottom: ${padB}px;
  border-radius: ${borR}px;
  overflow: ${ofl};
  
  background-color: ${bcC}
      `;
  }
};

const CusView = Styled.View`
  ${({variant}) => variant}
`;

export const View = ({
  border,
  jus,
  ali,
  padL,
  padR,
  padT,
  padB,
  borR,
  ofl,
  fdr,
  padd,
  bcC,
  children,
}: ViewData) => {
  const theme = useTheme(theme);
  const variant = getVariant(
    border,
    jus,
    ali,
    padL,
    padR,
    padT,
    padB,
    borR,
    ofl,
    fdr,
    padd,
    bcC,
    theme,
  );
  return <CusView variant={variant}>{children}</CusView>;
};

View.defaultProps = {
  border: '0px black',
  jus: 'flex-start',
  ali: 'center',
  padL: 0,
  padR: 0,
  padT: 0,
  padB: 0,
  borR: 0,
  ofl: 'visible',
  fdr: 'column',
  bcC: 'transparent',
};
