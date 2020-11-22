import type { RefObject } from 'react';

export const makeScrollToItem = ({
  containerRef,
  stickLeft: stickLeftOriginal = true,
  baseOffset: baseOffsetOriginal = 0,
}: {
  readonly containerRef: RefObject<HTMLElement>;
  readonly stickLeft?: boolean;
  readonly baseOffset?: number;
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
  const baseOffset = stickLeft ? -baseOffsetOriginal : baseOffsetOriginal;

  container.scrollTo({ left: container.scrollLeft + offset + baseOffset, behavior });
};

export type MakeScrollToItem = typeof makeScrollToItem;
export type ScrollToItem = ReturnType<MakeScrollToItem>;
