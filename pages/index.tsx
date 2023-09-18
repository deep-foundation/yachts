import React from 'react';
import { Page } from '../components/page';
import { Provider } from '../imports/provider';
import 'bear-react-carousel/dist/index.css';

export default function IndexPage() {
  return (
    <Provider>
      <Page />
    </Provider>
  );
}

