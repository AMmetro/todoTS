

import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Task, PropsType} from "../Task";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Todolists/Task',
  component: Task,
  argTypes: {},
   args: {
    changeTaskStatus: action("Button inside form clicked"),
    onTitleChangeHandler: action("Title change"),
    removeTask:action("Remove change")
  }
} as Meta;

// const baseArgs = {
//   changeTaskStatus: action("Button inside form clicked"),
//   onTitleChangeHandler: action("Title change"),
//   removeTask:action("Remove change")
// }

const Template: Story<PropsType> = (args) => <Task {...args} />;

export const TaskDoneExample  = Template.bind({});
TaskDoneExample.args = {
       // ...baseArgs,
      checked: true,
      title: "done task"
};

export const TaskNotDoneExample  = Template.bind({});
TaskNotDoneExample.args = {
  // ...baseArgs,
  checked: false,
  title: "not done task",
  // task: {id:1, isDone:true, title: "js" },
  // todolistId: "todolistId1"
};
