import { useCallback, useState } from 'react';

import type { RefObject } from 'react';
import type { ScrollToItem } from '../../makeScrollToItem';

type Parameters = {
  readonly containerRef: RefObject<HTMLElement>;
  readonly scrollToItem: ScrollToItem;
};

export const useForward = ({ containerRef, scrollToItem }: Parameters) => {
  const [isLastInView, setLastInView] = useState<boolean>(true);
  const onClick = useCallback(() => {
    const { current: container } = containerRef;
    if (!container) {
      return;
    }

    // querySelector?! Yes. Many setState on scroll you're get instead of.
    const firstNotInViewPort = container.querySelector('[data-in-view=true] + [data-in-view=false]');

    if (!firstNotInViewPort) {
      return;
    }

    scrollToItem({
      item: firstNotInViewPort,
    });
  }, [containerRef, scrollToItem]);

  return {
    isDisabled: isLastInView,
    setLastInView,
    onClick,
  };
};
