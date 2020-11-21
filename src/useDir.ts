import { useMemo, useState } from 'react';

export const DIR = {
  LTR: 'ltr',
  RTL: 'rtl',
} as const;

export type Dir = typeof DIR[keyof typeof DIR];

export const useDir = () => {
  const [dir, setDir] = useState<Dir>(DIR.LTR);
  const isLTR = useMemo(() => dir === DIR.LTR, [dir]);

  return { setDir, isLTR };
};
