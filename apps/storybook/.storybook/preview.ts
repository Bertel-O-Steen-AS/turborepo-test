import type { Preview } from "@storybook/react";

// TODO: Check if this is the way
// import "../src/index.css"; // replace with the name of your tailwind css file
import 'ui/styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
