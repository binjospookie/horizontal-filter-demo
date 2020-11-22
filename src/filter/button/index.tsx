import React, { memo } from 'react';

import { Icon } from './icon';

import './index.css';

type Props = {
  readonly disabled: boolean;
  readonly onClick: () => void;
};

export const BackwardButton = memo(({ disabled, onClick }: Props) => (
  <button type="button" className="backward" disabled={disabled} onClick={onClick}>
    <Icon flip />
  </button>
));

export const ForwardButton = memo(({ disabled, onClick }: Props) => (
  <button type="button" className="forward" disabled={disabled} onClick={onClick}>
    <Icon />
  </button>
));

export { useBackward, useForward } from './hooks'
