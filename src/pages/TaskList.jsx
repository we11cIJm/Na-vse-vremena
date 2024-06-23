import React from 'react';
import {AddTask} from '../components/AddTask';
import {TaskItemList} from '../components/TaskItemList';
import {TaskItemPlay} from '../components/TaskItemPlay';
import { useSpatnavInitialization, useSection } from '@salutejs/spatial';

export const TaskList = (props) => {
  const { items, onAdd, delTask, curFolder } = props;
  const [sectionProps] = useSection('sectionTask');
  return (

    <main className="task-list-container">
      <div {...sectionProps}>
      <span className = "cur-folder">Текущая папка: {curFolder.title}</span>
            { items.filter(({folder}) => folder === curFolder.title).length > 0 ?<TaskItemPlay
        items = { items.filter(({folder}) => folder === curFolder.title) }
      /> : null }
      <AddTask
        onAdd = { onAdd }
      />
      <TaskItemList className="card-play"
        items  = { items.filter(({folder}) => folder === curFolder.title) }
        delTask = { delTask }
      />
    </div>
    </main>

  )
}
