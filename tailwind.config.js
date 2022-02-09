module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      purple: {
        100: '#F4F4FF',
        200: '#DBDAF4',
        300: '#B6B5E8',
        400: '#8B8AEC',
        500: '#6D6BD1',
        600: '#5553C0',
      },
      red: {
        100: '#FDEDEE',
        200: '#FBDCDE',
        300: '#F6A7AD',
        400: '#FF717A',
        500: '#ED4E5C',
        600: '#E23A49',
      },
      blue: {
        100: '#ECF7FD',
        200: '#C4E8FC',
        300: '#9FDBFD',
        400: '#74CDFF',
        500: '#45ADE8',
        600: '#0F93DD',
      },
      green: {
        100: '#EBF8F6',
        200: '#C3F1E8',
        300: '#A1E7D9',
        400: '#61DBC5',
        500: '#3ABEA6',
        600: '#09B092',
      },
      yellow: {
        100: '#FFF5E2',
        200: '#FFECC9',
        300: '#FFE3AB',
        400: '#FFD581',
        500: '#FFC85B',
        600: '#FFB627',
      },
      gray: {
        100: '#F7F7FA',
        200: '#F0F0F5',
        300: '#E2E2EA',
        400: '#B9B9C5',
        500: '#8B8B9E',
        600: '#6C6C7D',
      },
      black: '#222222',
      white: '#FFFFFF',
    },
    fontSize: {
        h1: ['24px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        h2: ['20px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        h3: ['18px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        h4: ['14px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        h5: ['13px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        b1: ['16px', {
          lineHeight: '160%',
          letterSpacing: '-0.5px',
        }],
        b2: ['15px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        p1: ['14px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        p2: ['12px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        p3: ['11px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        button1: ['18px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        button2: ['16px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        button3: ['15px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }],
        button4: ['13px', {
          lineHeight: '125%',
          letterSpacing: '-0.5px',
        }]
    },
    fontWeight: {
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      'semi-bold': 600,
      bold: 700,
      'extra-bold': 800,
      black: 900,
    },
    extend: {},
  },
  plugins: [],
}
