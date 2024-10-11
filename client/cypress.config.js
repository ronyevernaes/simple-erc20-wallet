import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  env: {},
  component: {
    experimentalJustInTimeCompile: true,
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "create-react-app",
      bundler: "vite",
    },
  },
});
