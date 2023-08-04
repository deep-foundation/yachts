import { WithPackagesInstalled } from '@deep-foundation/react-with-packages-installed';
import { ProvidersAndLoginOrContent } from '../imports/providers-and-login-or-content';
import { ErrorAlert } from './error-alert';
import { Button, Stack, Text } from '@chakra-ui/react';
import { useLocalStore } from '@deep-foundation/store/local';
import { CapacitorStoreKeys } from '../imports/capacitor-store-keys';
import { WithDeviceInsertionIfDoesNotExistAndSavingData, insertDevice } from '@deep-foundation/capacitor-device';
import {
  DeepClient,
  DeepProvider,
  useDeep,
} from '@deep-foundation/deeplinks/imports/client';

export function Page({}:{}) {
  return (
    <ProvidersAndLoginOrContent />
  );
}
