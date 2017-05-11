# MSWAG Ionic Seed

Starter seed for Ionic based apps.

## Install & run

	$ yarn install
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


### End-2-End Testing

1. make sure the app is running

	$ npm start

2. And run in another shell:

	$ npm run e2e
