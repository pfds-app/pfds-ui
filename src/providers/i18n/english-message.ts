import englishMessages from "ra-language-english";

export const haEnglishMessages: any = {
  ...englishMessages,
  ha: {
    words: {
      welcome: "Welcome !",
      or: "Or",
      signin: "Signin",
      settings: "Settings",
      profil: "Profile",
      more: "More",
      signup: "Signup",
      next: "Next",
      home: "Home",
      prev: "Back",
      edit: "Edit",
      finish: "Finish",
      signout: "Logout",
      lang: "Langages",
      light: "Light",
      dark: "Dark",
    },
    text: {
      forgotPassword: "Forgot password ?",
      alreadyHaveAccount: "Already have a account ?",
      doesNotHaveAccountYet: "Does not have an account yet ?",
    },
    login: {
      forms: {
        confirmPassword: {
          label: "Confirm your password",
          error: "The passwords do not match",
        },
        password: "Password",
        username: "Username",
      },
    },
    locales: {
      fr: {
        name: "French",
      },
      en: {
        name: "English",
      },
    },
  },
};
