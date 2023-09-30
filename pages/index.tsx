import React from 'react';
import { Page } from '../components/page';
import { Provider } from '../imports/provider';

// import { useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';
// import {useMemo} from 'react';

// const drawResultTypeId = 1202;
// const drawRequestTypeId = 1200;
// const midjourneyRequestTypeId = 1151;
// const isPublishedTypeId = 1204;
// const sendEmailTypeId = 1265;
// // deep links
// // const [requestId, setRequestId] = useState(0);
// const settingsId = 1438;
// const sendToId = 1458;
// const letterSubjectId = 1462;
// const letterTextId = 1486;




export default function IndexPage() {

  // useDeepSubscription(useMemo(() => ({
  //   _or: [
  //     {
  //       type_id: { _in: [drawResultTypeId, isPublishedTypeId] }
  //     },
  //     {
  //       id: {
  //         _eq: settingsId
  //       }
  //     }
  //   ]
  // }),[drawResultTypeId, settingsId]));


  return (
    <Provider>
      <Page />
    </Provider>
  );
}

