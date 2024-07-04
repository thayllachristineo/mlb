type Shades = { lighten: string; darken: string };

type Color = {
  black: Shades;
  blue: Shades & { regular: string };
  gray: Shades & { regular: string };
  yellow: string;
  white: string;
};

const color: Color = {
  black: {
    lighten: ' rgba(0, 0, 0, 0.8)',
    darken: 'rgba(0, 0, 0, 0.45)',
  },
  blue: {
    lighten: '#3483fa',
    regular: '#4189e626',
    darken: '#1f4e96',
  },
  gray: {
    lighten: '#ededed',
    regular: '#666',
    darken: '#333',
  },
  yellow: '#ffe500',
  white: '#fff',
};

export default color;
