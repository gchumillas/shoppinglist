# Simple Shopping List

A simple shopping list application created in React Native with voice recognition.

<a href="https://play.google.com/store/apps/details?id=com.gchumillas.shoppinglist"><img src="https://user-images.githubusercontent.com/5312427/158223874-c1db9dc7-95ff-4c27-8634-1c4105f77ebe.svg" height="40" alt="Get it on Google Play" /></a>

## Screenshots

<img src="https://user-images.githubusercontent.com/5312427/148349979-a161f698-20bc-4026-a68f-e9814e13fe18.png" alt="screeshot" width="320"> <img src="https://user-images.githubusercontent.com/5312427/148349993-2c21c1bd-6a7e-4aa7-9b7c-98ca8300fbd8.png" alt="screeshot" width="320">

## How to test the application

You need an Android device with the "USB debugging" option enabled or an emulated device. See [Geanymotion](https://www.genymotion.com/download/) or [Android Studio](https://developer.android.com/studio) for more info. Then simply execute the following commands:

```bash
# install dependencies
yarn

# run the app into the Android device
yarn android
```

## Most relevant libraries

The app uses these relevant libraries:

* [@react-native-voice/voice](https://github.com/vadimdemedes/tailwind-rn) -- for Voice Recognition
* [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn) -- a Tailwind CSS library for React Native
* [i18n](https://www.npmjs.com/package/i18next) -- for internationalization
* [react-router-native](https://www.npmjs.com/package/react-router-native) -- a routing framework for React Native
* [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/) -- to store data locally

Take a look at the `package.json` file for a complete list of libraries.
