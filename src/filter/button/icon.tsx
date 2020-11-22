import React, { useMemo } from 'react';

export const Icon = ({ flip = false }: { readonly flip?: boolean }) => {
  const className = useMemo(() => (flip ? 'flip' : ''), [flip]);

  return (
    <svg className={className} width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.91 5L.302 1.667A.964.964 0 010 .965C0 .122 1.003-.315 1.615.262l3.896 3.606a1.556 1.556 0 010 2.264L1.615 9.738C1.003 10.314 0 9.878 0 9.035c0-.266.11-.52.303-.702L3.91 5z"
        fill="currentColor"
      />
    </svg>
  );
};
