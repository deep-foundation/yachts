import React from 'react';
import { Page } from '../components/page';
import { Provider } from '../imports/provider';

export default function IndexPage() {
  return (
    <Provider>
      <Page />
    </Provider>
  );
}

