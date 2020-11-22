import { useEffect } from 'react';

import type { RefObject } from 'react';
import type { ItemProps } from '../types';

export const useSelect = ({
  scrollToItem,
  isSelected,
  ref,
}: Pick<ItemProps, 'scrollToItem'> & {
  readonly isSelected: boolean;
  readonly ref: RefObject<HTMLElement>;
}) =>
  useEffect(() => {
    if (isSelected) {
      scrollToItem({
        itemRef: ref,
      });
    }
  }, [isSelected, ref, scrollToItem]);
