// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";


// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { 
      globals: { 
        ...globals.browser,
        ...globals.jest,
      },  
    },
    settings: {
      react: {
        version: "detect", 
      },
    },
},
    {
    ignores: [
      "node_modules/",
      "build/",
      "dist/",
      "coverage/",
      "*.min.js",
    ]
},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];

