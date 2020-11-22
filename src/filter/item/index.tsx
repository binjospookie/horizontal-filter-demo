import React, { memo, useMemo } from 'react';

import { useInView } from '../hooks';
import { useOnClick, useSelect, useSetInView } from './hooks';

import './index.css';

import type { ItemProps } from './types';

export const Item = memo(({ children, selected, setInView, setSelected, scrollToItem, value }: ItemProps) => {
  const { inView, ref, setRef } = useInView({});
  const isSelected = useMemo(() => selected === value, [selected, value]);
  const onClick = useOnClick({ setSelected, isSelected });
  const text = useMemo(() => value || children, [value, children]);
  const buttonClassName = useMemo(() => (isSelected ? 'selected' : ''), [isSelected]);

  useSetInView({ inView, setInView });

  useSelect({
    scrollToItem,
    isSelected,
    ref,
  });

  return (
    <li ref={setRef} data-in-view={`${inView}`}>
      <button className={buttonClassName} onClick={onClick} type="button" value={value}>
        {text}
      </button>
    </li>
  );
});

export type { ItemValue } from './types';
