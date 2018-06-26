import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import Task from './Task'
import configureStore from 'conf/redux/redux'
import { Provider } from 'react-redux'


const { store } = configureStore()

storiesOf('Task', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('pure', withInfo({ inline: true })(() => <Task tag="" tasks={
    [
      {
        id: '1',
        completed: false,
        tags: ['Home'],
        title: 'Task 1',
      },
      {
        id: '2',
        completed: true,
        tags: ['Home'],
        title: 'Task 2',
      },
      {
        id: '3',
        completed: true,
        tags: ['Home'],
        title: 'Task 3',
      },
      {
        id: '4',
        completed: true,
        tags: ['Home'],
        title: 'Task 4',
      },
    ]
  } />),
)