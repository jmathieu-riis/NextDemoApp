const { JSX } = require('typedoc');
const { formatSidebarScriptPath } = require('../constants');

function injectCustomTheme(app) {
  app.renderer.hooks.on("body.end", () => {
    const props = {
      type: 'text/javascript',
      src: `.${formatSidebarScriptPath}`
    };
    const myScript = JSX.createElement('script', props, null);
    return myScript;
  });
}

module.exports = {
  injectCustomTheme
}
