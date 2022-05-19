import React from 'react';

export const ThemeToggle = () => {
  return (
    <label onClick={() => {
      // @ts-ignore
      let current = window?.__theme;
      // @ts-ignore
      window?.__setPreferredTheme(current === 'dark' ? 'light' : 'dark');
    }} className={"theme-toggle"}>
      <div className="peg"/>
      <div className="bg"/>
    </label>
  );
};
