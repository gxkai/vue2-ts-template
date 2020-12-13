/*eslint-disable*/
"use strict";
const path = require("path");

module.exports = function(plop) {
  // starting prompt can be customized to display what you want
  // plop.setWelcomeMessage('[CUSTOM]'.yellow + ' What can I do for you?');

  // helpers are passed through handlebars syntax and made
  // available for use in the generator templates

  // adds 4 dashes around some text (yes es6/es2015 is supported)
  plop.addHelper("dashAround", text => "---- " + text + " ----");

  // formats an array of options like you would write
  // it, if you were speaking (one, two, and three)
  plop.addHelper("wordJoin", function(words) {
    return words.join(", ").replace(/(:?.*),/, "$1, and");
  });

  plop.addHelper("absPath", function(p) {
    return path.resolve(plop.getPlopfilePath(), p);
  });

  // greet the user using a partial
  plop.addPartial(
    "salutation",
    "{{ greeting }}, my name is {{ properCase name }} and I am {{ age }}."
  );

  // load some additional helpers from a module installed using npm
  plop.load("plop-pack-fancy-comments", {
    prefix: "",
    upperCaseHeaders: true,
    commentStart: "",
    commentEnd: ""
  });

  const delayLog = msg => answers =>
    new Promise(resolve => {
      setTimeout(() => resolve(msg), 1000);
    });

  plop.setGenerator("custom-component", {
    description: "custom component",
    prompts: [
      {
        type: "input",
        name: "fileName",
        message: "Pick a file name:",
        validate: function(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "file name is required";
        }
      },
      {
        type: "directory",
        name: "path",
        message: "where would you like to put this component?",
        basePath: plop.getPlopfilePath()
      }
    ],
    actions: [
      function(data) {
        console.log(data);
        return "yay";
      },
      {
        type: "add",
        path: "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.less",
        templateFile: "templates/component/index.less"
      },
      {
        type: "add",
        path:
          "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.story.ts",
        templateFile: "templates/component/index.story.ts"
      },
      {
        type: "add",
        path: "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.vue",
        templateFile: "templates/component/index.vue"
      },
      {
        type: "add",
        path: "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.script.ts",
        templateFile: "templates/component/index.script.ts"
      }
    ]
  });

  plop.setGenerator("view", {
    description: "页面",
    prompts: [
      {
        type: "input",
        name: "fileName",
        message: "Pick a file name:",
        validate: function(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "file name is required";
        }
      },
      {
        type: "directory",
        name: "path",
        message: "where would you like to put this view?",
        basePath: plop.getPlopfilePath()
      }
    ],
    actions: [
      function(data) {
        console.log(data);
        return "yay";
      },
      {
        type: "add",
        path: "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.less",
        templateFile: "templates/view/index.less"
      },
      {
        type: "add",
        path:
          "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.story.ts",
        templateFile: "templates/view/index.story.ts"
      },
      {
        type: "add",
        path: "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.vue",
        templateFile: "templates/view/index.vue"
      },
      {
        type: "add",
        path: "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.script.ts",
        templateFile: "templates/view/index.script.ts"
      },
      {
        type: "add",
        path: "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.router.ts",
        templateFile: "templates/view/index.router.ts"
      },
      {
        type: "add",
        path: "{{absPath path}}/{{camelCase fileName}}/{{camelCase fileName}}.vuex.ts",
        templateFile: "templates/view/index.vuex.ts"
      }
    ]
  });

  // adding a custom inquirer prompt type
  plop.addPrompt("directory", require("inquirer-directory"));
};
