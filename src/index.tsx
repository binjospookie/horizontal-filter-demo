// It's better to import polyfill if it needed. But for demo it's ok :D

import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import 'intersection-observer';

import { DirSelector } from './dirSelector';
import { Filter } from './filter';

import { useDir } from './useDir';

import './index.css';

import { LTR_DATA, RTL_DATA } from './__fixtures__';

smoothscroll.polyfill();

const App = () => {
  const { isLTR, setDir } = useDir();
  const list = useMemo(() => (isLTR ? LTR_DATA : RTL_DATA), [isLTR]);

  return (
    <>
      <DirSelector setDir={setDir} />
      <Filter stickLeft={isLTR} list={list} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
