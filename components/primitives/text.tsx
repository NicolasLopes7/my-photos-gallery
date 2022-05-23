import { styled } from '../../stitches.config';

export const Text = styled('span', {
  color: '$black',
  fontFamily: '$monospace',
  lineHeight: '1',
  fontStyle: 'normal',

  variants: {
    type: {
      nameHeader: {
        fontSize: '$4',
        letterSpacing: '2px',
        fontWeight: 600,
        lineHeight: '43px',
        textAlign: 'center',
        textTransform: 'uppercase',
      },
      errorMessage: {
        fontSize: '$6',
      },
    },
  },
});
