import React, { memo, useCallback } from 'react';

import { DIR } from '../useDir';

import './index.css';

import type { ChangeEvent } from 'react';
import type { Dir } from '../useDir';

export const DirSelector = memo(({ setDir }: { readonly setDir: (dir: Dir) => void }) => {
  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
      setDir(value as Dir);
      document.body.dir = value;
    },
    [setDir],
  );

  return (
    <select onChange={onChange}>
      <option value={DIR.LTR}>{DIR.LTR}</option>
      <option value={DIR.RTL}>{DIR.RTL}</option>
    </select>
  );
});
