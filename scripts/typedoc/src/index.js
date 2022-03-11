const { generateDocumentation, updateTypedocConfig } = require('./functions');

updateTypedocConfig();
generateDocumentation().catch(console.error);
