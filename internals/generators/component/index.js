/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or element with this name already exists'
            : true;
        }

        return 'The name is required';
      }
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?'
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?'
    }
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.jsx',
        templateFile: './component/component.jsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.stories.jsx',
        templateFile: './component/stories.jsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.source.md',
        templateFile: './component/source.md.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/tests/{{properCase name}}.test.jsx',
        templateFile: './component/test.jsx.hbs',
        abortOnFail: true
      }
    ];

    // If the user wants Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
