import React, { useState, useRef, memo, useCallback, useMemo } from 'react';

import { BackwardButton, ForwardButton, useBackward, useForward } from './button';
import { Item } from './item';

import { useListChange, useScrollToItem } from './hooks';

import { DEFAULT_VALUE } from './constants';

import './index.css';

import type { MakeScrollToItem } from './makeScrollToItem';
import type { ItemValue } from './item';

type List = readonly NonNullable<ItemValue>[];

type Props = Pick<Required<Parameters<MakeScrollToItem>[0]>, 'stickLeft'> & {
  readonly list: List;
};

const splitList = (list: List) => ({
  init: [...list.slice(0, list.length - 1)],
  last: list[list.length - 1],
});

export const Filter = memo(({ list, stickLeft }: Props) => {
  const listRef = useRef<null | HTMLUListElement>(null);
  const [selected, setSelected] = useState<ItemValue>(DEFAULT_VALUE);
  const reset = useCallback(() => setSelected(DEFAULT_VALUE), [setSelected]);
  const scrollToItem = useScrollToItem({ containerRef: listRef, stickLeft, baseOffset: 2 });
  const { isDisabled: isBackwardDisabled, setIsFirstInView, onClick: backwardOnClick } = useBackward({
    containerRef: listRef,
    scrollToItem,
  });
  const { isDisabled: isForwardDisabled, setLastInView, onClick: forwardOnClick } = useForward({
    containerRef: listRef,
    scrollToItem,
  });
  const { init, last } = useMemo(() => splitList(list), [list]);

  useListChange({ list, reset });

  return (
    <div className="scroll-hider">
      <BackwardButton disabled={isBackwardDisabled} onClick={backwardOnClick} />
      <ul ref={listRef}>
        <Item
          value={DEFAULT_VALUE}
          selected={selected}
          setSelected={setSelected}
          scrollToItem={scrollToItem}
          setInView={setIsFirstInView}
        >
          All
        </Item>
        {init.map((value) => (
          <Item key={value} value={value} selected={selected} setSelected={setSelected} scrollToItem={scrollToItem} />
        ))}
        <Item
          value={last}
          selected={selected}
          setSelected={setSelected}
          scrollToItem={scrollToItem}
          setInView={setLastInView}
        />
      </ul>
      <ForwardButton disabled={isForwardDisabled} onClick={forwardOnClick} />
    </div>
  );
});
