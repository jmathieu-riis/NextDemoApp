import store from '../../../store';
import Styled from '../../styled/Styled';
import React from 'react';
import { observer } from 'mobx-react';

export const NavigationContainer = observer(({ children }: { children: any; }) => {
  return (
    <Styled
      style={{
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 120px 0 120px',
        background: `${store.theme.current.navbar.background}`,
        color: `${store.theme.current.navbar.color}`,
        transition: `${store.theme.global.themeTransition}`,
      }}
    >
      {children}
    </Styled>
  );
});
