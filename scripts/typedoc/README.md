# Next Demo Documentation
##### This README outlines the scripts and configuration files used to generate the documentation of the parent Next Demo application

---
## Dependencies
Documentation is generated using `Typedoc`. It's functionality can be extended by installing plugins, of which are shown in this folders' [package.json](package.json) file

### Other
- Custom CSS and javascript files are stored in the [assets](assets) folder which are used to change the appearance and functionality of the generated documentation webpages
- Everything is called from [src/index.js](src/index.js)
  - First, the [typedoc.json](typedoc.json) file is updated to add any new files/folders found in the parent project by the main method in [updateTypedocConfig.js](src/functions/updateTypedocConfig.js)
  - Secondly, the script file [formatSidebar.js](assets/formatSidebar.js) is injected into the typedoc theme so that every html page calls this script
  - Lastly, the documentation is generated with the updated config and theme by the main method in [generateDocumentation.js](src/functions/generateDocumentation.js)
  