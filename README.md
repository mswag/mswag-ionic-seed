# MSWAG Ionic Seed Project

Starter seed for Ionic (v3) apps
  * based on the tabs template
  * following the concepts and setup of the [Ionic unit testing exmaple](https://github.com/driftyco/ionic-unit-testing-example)
  * integrating test utils of the [Clicker Seed Project](https://github.com/lathonez/clicker)
  * strictly followong the Ionic project structure and conventions


## Features
Comes fully loaded and configured out of the box with
  * Unit testing (Karma, Jasmine)
  * Code Coverage (Istanbul)
  * E2E testing (Protractor)
  * Pre-push and pre-commit hooks with Husky
  * Yarn


## Why oh Why

### Why not use any of the Ionic default templates?
Because it does not come with any of the features listed here.

### Why not use the [Ionic testing template](https://github.com/driftyco/ionic-unit-testing-example)?
Because it only inlcudes a basic testing setup.

### Why not use the [Clicker Seed Project](https://github.com/lathonez/clicker)?
Clicker makes heavy use of the ng-cli and therefore comes with a rather complex configuration.


## Install & run

If you have yarn installed (if not, get it [here](https://yarnpkg.com/lang/en/docs/install/))
	$ yarn install
	$ npm start

Or use npm:
	$ npm install
	$ npm start


## Runing on devices

On Android:

Connect debuggable android device via USB and run:

	$ ionic platform add android
	$ ionic run android

On iOS:

	$ ionic platform add ios
	$ ionic build ios
	$ ionic build ios --prod # build for production (With AOT compilation)

Then open the xcode project in `./platforms/ios`, create a provisioning profile
and run on the device


## Quality assurance

_“Quality is free, but only to those who are willing to pay heavily for it.”_ – T. DeMarco and T. Lister


### Linting

	$ npm run lint


### UNIT Testing

	$ npm test

	# With code coverage
	$ npm run testWithCoverage


### End-2-End Testing

1. make sure the app is running

	$ npm start

2. And run in another shell:

	$ npm run e2e
