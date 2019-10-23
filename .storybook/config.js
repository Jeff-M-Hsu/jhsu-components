import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyle from '../src/lib/themes/GlobalStyle';

// automatically import all files ending in *.stories.js
configure(require.context('../src/lib', true, /stories\.js$/), module);

addDecorator(s => <><GlobalStyle />{s()}</>);
