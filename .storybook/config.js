import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyle from '../src/lib/themes/GlobalStyle';
import requireContext from 'require-context.macro'; //workaround for Jest to recognize Webpack's require.context function

// automatically import all files ending in *.stories.js
configure(requireContext('../src/lib', true, /stories\.js$/), module);

addDecorator(s => <><GlobalStyle />{s()}</>);
