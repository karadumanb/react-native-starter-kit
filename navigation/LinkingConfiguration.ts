/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

 import * as Linking from "expo-linking";

 export default {
   prefixes: [Linking.makeUrl("/")],
   config: {
     screens: {
       Auth: {
         screens: {
           Login: "login",
           Register: "register",
           OTP: "otp",
         },
       },
       Intro: {
         screens: {
           Intro: "intro",
         },
       },
       Root: {
         screens: {
           Feeds: {
             screens: {
               Feeds: "feeds",
             },
           },
         },
       },
       NotFound: "*",
     },
   },
 };
 