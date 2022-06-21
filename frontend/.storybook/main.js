const path = require('path');

module.exports = {
  stories: [
    "../__tests__/components/**/*.stories.tsx",
    // "../__tests__/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  // Add nextjs preset
  presets: [path.resolve(__dirname, "./next-preset.js")],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    //"@storybook/preset-scss"
  ],
  // framework: "@storybook/react",
  // core: {

  //   builder: "webpack5",
  // },
  // Add nextjs preset
};
