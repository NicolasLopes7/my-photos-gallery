import { Flex } from '../components/primitives/box';
import { Link } from '../components/primitives/link';
import { Text } from '../components/primitives/text';

const Custom404 = () => {
  return (
    <Flex css={{ height: '100vh', gap: 6 }}>
      <Text>This page {"doesn't"} exists</Text>
      <Link type="backToHome" href="/">Click here</Link>
    </Flex>
  );
};

export default Custom404;
