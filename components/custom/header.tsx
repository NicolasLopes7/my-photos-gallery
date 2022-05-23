import { useState } from 'react';
import { Flex } from '../primitives/box';
import { Link } from '../primitives/link';
import { Text } from '../primitives/text';

const categories = [
  { id: 1, name: 'daily' },
  { id: 2, name: 'trips' },
];

export const Header = () => {
  const [link, setLink] = useState<number>(categories[0].id);

  const handleClickLink = (id: number) => setLink(id);

  return (
    <Flex direction="row" css={{ justifyContent: 'flex-start', gap: 20 }}>
      <Text type="nameHeader">nicolas l</Text>
      {categories.map(({ id, name }) => (
        <Link key={id} active={link === id} onClick={() => handleClickLink(id)}>
          {name}
        </Link>
      ))}
    </Flex>
  );
};
