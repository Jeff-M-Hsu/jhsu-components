import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: Roboto, Helvetica, sans-serif !important;
  }
`

export default GlobalStyle;