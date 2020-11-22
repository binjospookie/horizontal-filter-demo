import { useMemo } from 'react';
import { makeScrollToItem } from '../makeScrollToItem';

import type { MakeScrollToItem } from '../makeScrollToItem';

export const useScrollToItem = ({
  containerRef,
  stickLeft,
  baseOffset,
}: Parameters<MakeScrollToItem>[0]) =>
  useMemo(
    () =>
      makeScrollToItem({
        containerRef: containerRef,
        stickLeft,
        baseOffset
      }),
    [baseOffset, containerRef, stickLeft],
  );
