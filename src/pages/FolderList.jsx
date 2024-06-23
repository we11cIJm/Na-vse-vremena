import React from 'react';
import {FolderItemList} from '../components/FolderItemList';
import {AddFolder} from '../components/AddFolder';
import { useSpatnavInitialization, useSection } from '@salutejs/spatial';

export const FolderList = (props) => {
  const { items, onAdd, toFolder, delFol, curFolder } = props;
  useSpatnavInitialization();
  const [sectionProps] = useSection('sectionFolder');
  return (
    <main className="folders-list-container">
    <div {...sectionProps}>
      <AddFolder
        onAdd = { onAdd }
      />

     {items.length >= 1 ? <FolderItemList
        items  = { items.filter(({title}) => title !== null) }
        toFolder = { toFolder }
        delFol = { delFol }
        curFolder = { curFolder }
      /> : null} 
          </div>
    </main>
  )
}