import { useCallback, useState } from 'react';

import type { RefObject } from 'react';
import type { ScrollToItem } from '../../makeScrollToItem';

type Parameters = {
  readonly containerRef: RefObject<HTMLElement>;
  readonly scrollToItem: ScrollToItem;
};

export const useBackward = ({ containerRef, scrollToItem }: Parameters) => {
  const [isFirstInView, setIsFirstInView] = useState<boolean>(true);
  const onClick = useCallback(() => {
    const { current: container } = containerRef
    if (!container) {
      return;
    }

    // querySelector?! Yes. Many setState on scroll you're get instead of.
    const firstInViewPort = container.querySelector('[data-in-view=false] + [data-in-view=true]');

    if (!firstInViewPort || !firstInViewPort.previousSibling) {
      return;
    }

    scrollToItem({
      item: firstInViewPort.previousSibling as HTMLElement,
      invertStickLeft: true,
    });

  }, [containerRef, scrollToItem]);

  return {
    isDisabled: isFirstInView,
    setIsFirstInView,
    onClick
  };
};
