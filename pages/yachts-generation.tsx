import { YachtsGeneration } from '../components/yachts-generation/yachts-generation';
import { Provider } from '../imports/provider';


export default function IndexPage() {
  return (
    <Provider>
      <YachtsGeneration />
    </Provider>
  );
}
