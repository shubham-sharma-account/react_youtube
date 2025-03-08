import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export const style = {
  postcss: {
    plugins: [tailwindcss, autoprefixer],
  },
};
