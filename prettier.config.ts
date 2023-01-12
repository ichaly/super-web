/** @type {import('prettier').Config} */
module.exports = {
  semi: false, //去分号
  singleQuote: true, //js单引号
  endOfLine: "lf",
  tabWidth: 2, //tab键缩进为2空格
  trailingComma: "none", //无尾逗号
  plugins: [require("prettier-plugin-tailwindcss")],
};
