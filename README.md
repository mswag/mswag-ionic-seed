# MSWAG Ionic Seed Project

Starter seed for Ionic ( Ionic 3.9 / Angular 5.0) applications

* based on the Ionic blank template
* follows the concepts and setup of the [Ionic unit testing example](https://github.com/driftyco/ionic-unit-testing-example)
* integrates test utils of the [Clicker Seed Project](https://github.com/lathonez/clicker)
* strictly following the Ionic project structure and conventions


## Features

Comes fully loaded and configured out of the box with:

* Unit testing ([Karma](https://karma-runner.github.io/), [Jasmine](https://jasmine.github.io/))
* Code Coverage ([Istanbul](https://istanbul.js.org/))
* E2E testing ([Protractor](http://www.protractortest.org))
* Pre-push and pre-commit hooks ([Husky](https://github.com/typicode/husky/))
* Prettier Code Formatter ([prettier](https://github.com/prettier/prettier))
* Translation ([ngx-translate](https://github.com/ngx-translate)) and translation string extraction ([ngx-translate-extract](https://github.com/biesbjerg/ngx-translate-extract))


## Why oh Why


### Why not use any of the Ionic default templates?

Because it does not come with any of the features listed here.


### Why have you not used a more complex project as base, like [Ionic Starter 'Super' template](https://github.com/ionic-team/ionic-starter-super) or [big-top](https://github.com/Robinyo/big-top).

We prefer to have a minimal setup that we extend later on. Based on our experience, most of the code from the more complex starter projects will be deleted or amended.


### Why not use the [Ionic testing template](https://github.com/driftyco/ionic-unit-testing-example)?

Because it only inlcudes a basic testing setup.


### Why not use the [Clicker Seed Project](https://github.com/lathonez/clicker) or [big-top](https://github.com/Robinyo/big-top)?

Clicker and big-top make heavy use of the ng-cli and therefore comes with a rather complex configuration. Both have included features that we do not consider core to any project.


### Why is it not an Ionic starter template that can be used with the Ionic Start Command (ionic start ...)?
The Ionic starter template focuses very much on the content of the /src folder. But it is very difficult/ not possible to deliver a custom configuration, test setup etc.

## Install & run

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


### Code Formatting

	$ npm run prettier

Will execute the [prettier](https://github.com/prettier/prettier) code formatter. Additionaly, pretter is also added to the pre-commit hook.


### UNIT Testing

	$ npm test

	# With code coverage
	$ npm run testWithCoverage


### End-2-End Testing

1. make sure the app is running

	$ npm start

2. And run in another shell:

	$ npm run e2e

## Translations

1. Define the relevant translation languages in package.json => scripts => extract and update the list in curly braces:

  ... {en,de}.json ...

2. Extract your translation strings by

	$ npm extract

3. Use the Translation Service to set the language, e.g.:

  translate.use('de');

## License

MIT
