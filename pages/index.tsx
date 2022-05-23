import { Header } from '../components/custom/header';
import { Flex } from '../components/primitives/box';
export default function Home() {
  return (
    <div>
      <Flex css={{ padding: 40, alignItems: 'flex-start', flex: 0.5 }}>
        <Header />
      </Flex>
    </div>
  );
}
