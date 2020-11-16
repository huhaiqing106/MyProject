import React, { Fragment, useEffect, useContext, useRef, useState } from 'react';
import { PublicProps } from 'yss-trade-base';

export default () => {
  const { trDom, query, pageList, callbackForTableChange } = useContext(PublicProps);
  const currentRef = useRef();

  useEffect(() => {}, []);
  
  return <Fragment></Fragment>;
};
