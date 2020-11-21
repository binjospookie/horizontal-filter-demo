import { ScrollToItem } from '../makeScrollToItem';

import type { ReactNode } from 'react';

export type ItemValue = string | undefined;

export type ItemProps = {
  readonly children?: ReactNode;
  readonly selected: ItemValue;
  readonly setSelected: (x: ItemValue) => void;
  readonly scrollToItem: ScrollToItem;
  readonly value: ItemValue;
};
