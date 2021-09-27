declare type RouteProps = {
  key: string;
  name: string;
  params: {
    [key: string]: any;
  };
};

declare type AppStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Auth: undefined;
  Intro: undefined;
};

declare type AuthParamList = {
  Login: undefined;
  Register: undefined;
  OTP: undefined;
};

declare type IntroParamList = {
  Intro: undefined;
}

declare type RootParamList = {
  Page1Name: undefined;
}