import React from 'react';
import { MenuList, MenuListItem, Separator, Toolbar, styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Window from './components/Window1';
import MyToolbar from './components/Toolbar';
import Appbar from './components/Appbar'; 
import Counter from './components/Counter';
import "98.css";


import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => (
  <div>
    
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <div >
      <MenuList>
        <MenuListItem>🎤 Sing</MenuListItem>
        <MenuListItem>💃🏻 Dance</MenuListItem>
        <Separator />
        <Window />
        <MenuListItem disabled>😴 Sleep</MenuListItem>
      </MenuList>
      <button>Click me</button>
<input type="submit" />
<input type="reset" />

      </div>

    </ThemeProvider>
    <Counter />
    
  </div>
);

export default App;