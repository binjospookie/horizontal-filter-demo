import React, { useState, useRef, memo, useCallback } from 'react';

import { Item } from './item';

import { useListChange, useScrollToItem } from './hooks';

import { DEFAULT_VALUE } from './constants';

import './index.css';

import type { MakeScrollToItem } from './makeScrollToItem';
import type { ItemValue } from './item';

type Props = Pick<Required<Parameters<MakeScrollToItem>[0]>, 'stickLeft'> & {
  readonly list: readonly NonNullable<ItemValue>[];
};

export const Filter = memo(({ list, stickLeft }: Props) => {
  const listRef = useRef<null | HTMLUListElement>(null);
  const [selected, setSelected] = useState<ItemValue>(DEFAULT_VALUE);
  const reset = useCallback(() => setSelected(DEFAULT_VALUE), [setSelected]);
  const scrollToItem = useScrollToItem({ ref: listRef, stickLeft });

  useListChange({ list, reset });

  return (
    <div className="scroll-hider">
      <ul ref={listRef}>
        <Item value={DEFAULT_VALUE} selected={selected} setSelected={setSelected} scrollToItem={scrollToItem}>
          All
        </Item>
        {list.map((value) => (
          <Item key={value} value={value} selected={selected} setSelected={setSelected} scrollToItem={scrollToItem} />
        ))}
      </ul>
    </div>
  );
});
