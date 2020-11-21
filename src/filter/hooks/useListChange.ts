import { useEffect } from 'react';

import type { ItemValue } from '../item';

export const useListChange = ({ reset, list }: { readonly reset: () => void; readonly list: readonly ItemValue[] }) => {
  useEffect(reset, [reset, list]);
};
