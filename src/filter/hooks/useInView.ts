import { useCallback, useRef } from 'react';
import { useInView as useInViewObserver } from 'react-intersection-observer';

type UseInViewObserverParams = Required<Parameters<typeof useInViewObserver>>[0];

export const useInView = ({ threshold = 0.95 }: Pick<UseInViewObserverParams, 'threshold'>) => {
  const ref = useRef<HTMLElement>(null);
  const [inViewRef, inView] = useInViewObserver({
    threshold,
  });

  const setRef = useCallback(
    (node: never) => {
      // @ts-expect-error https://github.com/thebuilder/react-intersection-observer#how-can-i-assign-multiple-refs-to-a-component
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  return {
    setRef,
    ref,
    inView,
  };
};
