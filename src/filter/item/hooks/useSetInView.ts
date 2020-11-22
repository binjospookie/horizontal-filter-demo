import { useEffect } from 'react';

import type { ItemProps } from '../types';

export const useSetInView = ({
  inView,
  setInView,
}: Pick<ItemProps, 'setInView'> & {
  readonly inView: boolean;
}) => {
  useEffect(() => {
    if (setInView) {
      setInView(inView);
    }
  }, [inView, setInView]);
};
