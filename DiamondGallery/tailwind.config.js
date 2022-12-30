module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Open Sans',
      secondary: 'Lato',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        primary: '#334155',
        secondary: '#0f172a',
        accent: {
          primary: '#94a3b8',
          primary_hover: '#64748b',
          secondary: '#e5e7eb',
          secondary_hover: '#6b7280',
          secondary_hover1: '#111827',
          tertiary: '#334155',
        },
      },
      backgroundImage: {
      },
      dropShadow: {
        primary: ' 0px 5px 5px rgba(75, 93, 104, 0.1)',
      },
    },
  },
  plugins: [],
};
