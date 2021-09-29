# react-native-starter-kit
React Native Starter kit with expo that includes native-base.v3 &amp; axios-hooks &amp; intl &amp; lodash.debounce

## Requirements
- [x] Expo version 41 or higher
- [x] Yarn package manager
- [x] Xcode with Simulator or Android Studio

## HOW TO RUN
1. yarn install
2. yarn start
3. Follow expo guide (eg. to start with ios -> click i) or use web interface of expo


## Structure

#### /screens
In this folder you will start initial containers for each screen.

#### /navigation
Each screen will have some navigation item here. Screen folders or files should match with navigation files. Navigations can include sub navigations inside which then need to be defined in screens as sub folders.

#### /services
Common javascript or library helpers/utilities would be here. This file is generally referred as 'utilities'. But i would like to call it 'services' to combine utilities with 3rd party helpers.

#### /hooks
Our hooks will live here. These hooks need to be called in the body of the functional component. 

#### /contexts
Contexts are here to keep global state across the application or in smaller contexts. For example, when we generate a form, form context should be provided in order to manage the data inside the form. So all the inputs, buttons and error messages are aware of the data and what's going on in the context.

#### /constants
Common constants would go here such as 'enums', 'layout width/height', 'colors'.

#### /concepts
Components that belong to specific concept such as authentication. In auth folder you can find relative form or layout components that will be used only for authentication purposes.

#### /components
Common components to manage **UI**. Folder structure is self explanatory.

#### /modules
Modules have ever another concept. These components handle some specific need such as 'map', 'slider', 'form'. They generally need contexts(if they are big enough or have complex logic).

#### /assets
Fonts and images

#### /lib
3rd party libraries configs can be found here. IntlProvider is here to fetch strings from specific json source. Axios will be introduced to handle api requests.
