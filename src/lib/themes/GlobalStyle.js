import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@font-face{
		font-family: "Roboto";
		src: url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
	}
  * {
    font-family: "Roboto", Helvetica, sans-serif !important;
  }
`

export default GlobalStyle;