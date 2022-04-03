import { styled } from '@/theme/stitches.config';

export const Container = styled('div', {
  position: 'relative'
})

export const Row = styled('div', {
  display: 'flex',

  variants: {
    gap: {
      1: { gap: '$1' },
      2: { gap: '$2' },
      3: { gap: '$3' },
      4: { gap: '$4' },
      5: { gap: '$5' },
      6: { gap: '$6' },
      7: { gap: '$7' },
      8: { gap: '$8' },
    }
  }
})

export const Col = styled('div', {
  display: 'block',

  variants: {
    collapse: {
      sm: {
        '@sm': { display: 'none' }
      },
      md: {
        '@md': { display: 'none' }
      },
      lg: {
        '@lg': { display: 'none' }
      },
    },
    size: {
      '1/3': { flex: '33.3%' },
      1: { flex: 1 },
      2: { flex: 2 },
      3: { flex: 3 },
      4: { flex: 4 },
      5: { flex: 5 },
      6: { flex: 6 },
      7: { flex: 7 },
      8: { flex: 8 },
    }
  }
})

export const Grid = {
  Row: Row,
  Col: Col,
  Container: Container
};

export default Grid
