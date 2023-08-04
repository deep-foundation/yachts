import React, { useEffect } from 'react';
import {
  Text,
  Link,
  Stack,
  Card,
  CardBody,
  Heading,
  CardHeader,
} from '@chakra-ui/react';
import {
  DeepClient,
} from '@deep-foundation/deeplinks/imports/client';
import NextLink from 'next/link';


import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Page } from '../components/page';
import { Provider } from '../imports/provider';

export default function IndexPage() {
  return (
    <Provider>
      <Page />
    </Provider>
  );
}

