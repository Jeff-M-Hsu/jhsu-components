import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';

storiesOf("Welcome")
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));