/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Đường dẫn tới các tệp trong thư mục app
    './pages/**/*.{js,ts,jsx,tsx}', // Nếu bạn sử dụng thư mục pages
    './components/**/*.{js,ts,jsx,tsx}', // Nếu bạn có thư mục components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
