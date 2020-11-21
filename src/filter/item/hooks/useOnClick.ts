import { useCallback } from 'react';

import { DEFAULT_VALUE } from '../../constants';

import type { ItemProps } from '../types';

export const useOnClick = ({
  setSelected,
  isSelected,
}: Pick<ItemProps, 'setSelected'> & {
  readonly isSelected: boolean;
}) => {
  const reset = useCallback(() => setSelected(DEFAULT_VALUE), [setSelected]);

  return useCallback(
    ({ target: { value } }) => {
      if (isSelected) {
        reset();
        return;
      }

      setSelected(value.length > 0 ? value : DEFAULT_VALUE);
    },
    [isSelected, reset, setSelected],
  );
};
