import type { RefObject } from 'react';

export const makeScrollToItem = ({
  containerRef,
  stickLeft: stickLeftOriginal = true,
}: {
  readonly containerRef: RefObject<HTMLElement>;
  readonly stickLeft?: boolean;
}) => ({
  item,
  behavior = 'smooth',
  invertStickLeft = false,
}: ScrollOptions & { readonly item: HTMLElement | Element; readonly invertStickLeft?: boolean }) => {
  const { current: container } = containerRef;

  if (!container) {
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
