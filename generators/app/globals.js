const path = require('path');
const projectConfig = require('./templates/base/config.json');

const CONFIG = projectConfig;

const PATHS = {
  appFolder: path.resolve(process.cwd(), 'generators/app/'),
  templatesFolder: path.resolve(process.cwd(), 'generators/app/templates/'),
  baseFolder: path.resolve(process.cwd(), 'generators/app/templates/base/'),
  tetFolder: path.join(process.cwd(), 'test/'),
  tempFolder: path.join(process.cwd(), 'test/tmp/'),
  tempMarkupFolder: path.join(process.cwd(), 'test/tmp/markup/'),
  destination: 'markup',
};

const PROMPTS_VALUES = {
  projectType: {
    markup: 'markup',
    markupCms: 'markupCms',
  },
  cms: {
    wp: 'wp',
    other: 'other',
  },
  framework: {
    none: false,
    bootstrap: 'bootstrap',
    zurb: 'zurb',
    materialize: 'materialize',
    tailwind: 'tailwind',
  },
  linters: {
    add: true,
    remove: false,
    css: 'css',
    js: 'js',
  }
};

const PACKAGES = {
  linters: {
    css: {
      scripts: {
        "lint:fix:css": "stylelint --fix \"src/**/*.{scss,sass}\" --config stylelint.config.js",
      },
    },
    js: {
      scripts: {
        "lint:fix:js": "eslint --fix \"src/**/*.{js,jsx}\" --config eslintrc.js --ignore-path .prettierignore",
      },
    },
  },
  frameworks: {
    bootstrap: {
      dependencies: {
        bootstrap: 'latest',
        'popper.js': 'latest'
      },
    },
    zurb: {
      dependencies: {
        'foundation-sites': 'latest',
        'what-input': 'latest'
      },
    },
    materialize: {
      dependencies: {
        'materialize-css': 'latest'
      },
    },
    tailwind: {
      dependencies: {
        'tailwindcss': 'latest'
      }
    }
  },
};

module.exports = {
  CONFIG, PATHS, PROMPTS_VALUES, PACKAGES
}