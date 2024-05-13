/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      colors: {
        danger: { DEFAULT: '#EB4100' },
        primary: {
          DEFAULT: '#007AEB',
          light: '#E5F1FD',
          chosen: '#CCE4FB',
          disabled: '#99C9F7',
        },
        text: {
          DEFAULT: '#000',
          second: '#595959',
          light: '#7F7F7F',
          disabled: '#CACACA',
          weak: '#A6A6A6',
          hover: '#3395EF',
          regular: '#262626',
        },
        icon: {
          second: '#AEAEAE',
        },
        iconBg: {
          DEFAULT: '#F2F2F2',
          hover: '#E5E5E5',
          active: '#CCCCCC',
          disabled: '#F2F2F2',
        },
        border: {
          DEFAULT: '#ccc',
        },
        bg: {
          DEFAULT: '#F9F9FA',
        },
      },
    },
    // screens: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
  corePlugins: {
    // preflight: false, // 添加这一行
  },
};
