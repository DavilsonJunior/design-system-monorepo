module.exports = {
  "stories": ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/addon-a11y', "@storybook/addon-mdx-gfm", "storybook-dark-mode"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  
  "features": {
    "storyStoreV7": true
  },

  docs: {
    autodocs: true
  },

  async viteFinal (config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system/'
    }

    return config
  },

};