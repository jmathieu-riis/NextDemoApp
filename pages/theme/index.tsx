import { NextPage } from 'next';
import React from 'react';
import theme from '../../styles/theme';

const ThemePage: NextPage = () => {
  const generateColorBlocks: Element = () => {
    const colors = theme.colors;
    Object.keys(colors).map((key: string) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <div>{colors[key]}</div>
      );
    });
  };
  return (
    <ul>
      {generateColorBlocks()}
    </ul>
  );
};

export default ThemePage;
