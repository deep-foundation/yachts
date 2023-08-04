"use client"
import { TokenProvider, useTokenController } from '@deep-foundation/deeplinks/imports/react-token';
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
import { LocalStoreProvider } from '@deep-foundation/store/local';
import { QueryStoreProvider } from '@deep-foundation/store/query';
import { CookiesStoreProvider } from '@deep-foundation/store/cookies';

import { ChakraProvider } from '@chakra-ui/react';
import themeChakra from './theme';
import { useEffect, useMemo } from 'react';
import Debug from 'debug';

export function ProviderConnected({
  children,
}: {
  children: JSX.Element;
}) {
  const [token, setToken] = useTokenController();

  return <>{children}</>;
}

export function Provider({
  // gqlPath,
  // gqlSsl,
  children,
}: {
  // gqlPath?: string;
  // gqlSsl?: boolean;
  children: JSX.Element;
}) {
  const ThemeProviderCustom = ChakraProvider;
  const themeCustom = themeChakra;

  return (<>
    <ThemeProviderCustom theme={themeCustom}>
      <QueryStoreProvider>
        <CookiesStoreProvider>
          <LocalStoreProvider>
            <TokenProvider>
              {/* <ApolloClientTokenizedProvider options={useMemo(() => ({ client: 'yachts', path: gqlPath, ssl: gqlSsl, ws: !!(process as any)?.browser }), [gqlPath, gqlSsl])}> */}
								{children}
              {/* </ApolloClientTokenizedProvider> */}
            </TokenProvider>
          </LocalStoreProvider>
        </CookiesStoreProvider>
      </QueryStoreProvider>
    </ThemeProviderCustom>
  </>)
};