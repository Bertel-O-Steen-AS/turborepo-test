import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

// module.exports = {
//   stories: [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)",
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//     // Add PostCSS into addons for compiling tailwind below
//     {
//       name: "@storybook/addon-postcss",
//       options: {
//         postcssLoaderOptions: {
//           implementation: require("postcss"),
//         },
//       },
//     },
//     // End PostCSS
//   ],
//   framework: "@storybook/react",
//   core: {
//     builder: "@storybook/builder-webpack5",
//   },
// };

// module.exports = {
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//     {
//       name: "@storybook/addon-styling",
//       options: {
//         // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
//         // For more details on this addon's options.
//         postCss: true,
//       },
//     },
//   ],
//   // snipped for brevity
// };
