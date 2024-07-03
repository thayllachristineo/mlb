type Shades = { lighten: string; darken: string };

type Color = {
  black: Shades;
  blue: Shades;
  gray: Shades & { regular: string };
  yellow: string;
  white: string;
};

const color: Color = {
  black: {
    lighten: ' rgba(0, 0, 0, 0.8)',
    darken: 'rgba(0, 0, 0, 0.45)',
  },
  blue: { lighten: '#3483fa', darken: '#1f4e96' },
  gray: {
    lighten: '#ededed',
    regular: '#666',
    darken: '#333',
  },
  yellow: '#fff059',
  white: '#fff',
};

export default color;
