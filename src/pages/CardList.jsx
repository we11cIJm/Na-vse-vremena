import React from 'react';
import {AddCard} from '../components/AddCard';
import {CardItemList} from '../components/CardItemList';
import {CardItemPlay} from '../components/CardItemPlay';
import { useSpatnavInitialization, useSection } from '@salutejs/spatial';

export const CardList = (props) => {
  const { items, onAdd, delCard, curFolder } = props;
  const [sectionProps] = useSection('sectionTask');
  return (

    <main className="card-list-container">
      <div {...sectionProps}>
      <span className = "cur-folder">Текущая папка: {curFolder.title}</span>
            { items.filter(({folder}) => folder === curFolder.title).length > 0 ?<CardItemPlay
        items = { items.filter(({folder}) => folder === curFolder.title) }
      /> : null }
      <AddCard
        onAdd = { onAdd }
      />
      <CardItemList className="card-player"
        items  = { items.filter(({folder}) => folder === curFolder.title) }
        delCard = { delCard }
      />
    </div>
    </main>
  )
}
