import { styled } from '../../stitches.config';

export const Link = styled('a', {
  cursor: 'pointer',
  textDecoration: 'none',
  fontFamily: '$sans',
  lineHeight: '1',
  fontSize: '$2',
  letterSpacing: '0.2px',
  color: 'rgba(17,17,17,0.4)',
  fontWeight: 600,

  variants: {
    active: {
      true: {
        color: '$black',
      },
      false: {},
    },
    type: {
      backToHome: {
        textDecoration: 'underline',
        fontSize: '$3',
        letterSpacing: '2px',
        fontWeight: 600,
        lineHeight: '43px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '$black',
        fontFamily: '$monospace',
        fontStyle: 'normal',
      },
    },
  },
});
