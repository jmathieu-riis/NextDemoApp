import React from 'react';

const Styled = (
  {
    style,
    children,
  }: {
    style: {};
    children?: any;
  }) => {
  return (
    <div style={style}>{children}</div>
  );
};

export default Styled;
