import { useMemo } from 'react';
import { makeScrollToItem } from '../makeScrollToItem';

import type { RefObject } from 'react';

export const useScrollToItem = ({
  ref,
  stickLeft,
}: {
  readonly ref: RefObject<HTMLElement>;
  readonly stickLeft: boolean;
}) =>
  useMemo(
    () =>
      makeScrollToItem({
        containerRef: ref,
        stickLeft,
      }),
    [ref, stickLeft],
  );
