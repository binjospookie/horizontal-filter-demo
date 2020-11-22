import type { RefObject } from 'react';

export const makeScrollToItem = ({
  containerRef,
  stickLeft: stickLeftOriginal = true,
}: {
  readonly containerRef: RefObject<HTMLElement>;
  readonly stickLeft?: boolean;
}) => ({
  itemRef,
  behavior = 'smooth',
  invertStickLeft = false,
}: ScrollOptions & { readonly itemRef: RefObject<HTMLElement>; readonly invertStickLeft?: boolean }) => {
  const { current: container } = containerRef;
  const { current: item } = itemRef;

  if (!container || !item) {
    return;
  }

  const { width: containerWidth, x: containerX } = container.getClientRects()[0];
  const { width: itemWidth, x: itemX } = item.getClientRects()[0];

  const stickLeft = invertStickLeft ? !stickLeftOriginal : stickLeftOriginal;

  const offset = stickLeft ? itemX - containerX : -(containerWidth - (itemX - containerX) - itemWidth);

  container.scrollTo({ left: container.scrollLeft + offset, behavior });
};

export type MakeScrollToItem = typeof makeScrollToItem;
export type ScrollToItem = ReturnType<MakeScrollToItem>;
