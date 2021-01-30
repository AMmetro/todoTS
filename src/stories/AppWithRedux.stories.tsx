
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {action} from "@storybook/addon-actions";
import AppWithReducers from "../AppWithRedux";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";

export default {
  title: 'Todolists/AppWithReducers',
  component: AppWithReducers,
  decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = () => <AppWithReducers />;

export const AppWithReducersExample  = Template.bind({});
// AppWithReducersExample.args = {
  // ...baseArgs,


