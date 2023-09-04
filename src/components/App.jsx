import React from 'react';
import { Reader } from './Reader/Reader';

import  publication  from "../publication.json";


export const App = () => {
  return (
    <div>
      <Reader items={publication} />     
  </div>
)
}

