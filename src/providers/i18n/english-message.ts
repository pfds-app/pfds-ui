import englishMessages from "ra-language-english";

export const haEnglishMessages: any = {
  ...englishMessages,
  ha: {
    words: {
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
      requirement: "My Requirements",
    },
    text: {
      recommendedQuestion: "Why is this recommended to me ?",
      forgotPassword: "Forgot password ?",
      alreadyHaveAccount: "Already have a account ?",
      doesNotHaveAccountYet: "Does not have an account yet ?",
      settings: "Change the app configuration to match your config",
      recommended1: "Recommended parks",
      recommended2: "for you",
    },
    login: {
      forms: {
        confirmPassword: {
          label: "Confirm your password",
          error: "The passwords do not match",
        },
        password: "Password",
      },
      illustration: {
        header: "Welcome to Naturo Match, your application for finding parks",
        description:
          "This will be your new eco-friendly companion, helping you make sustainable choices and reduce your environmental impact.",
        find_our: "Find here our",
        general_rules: "General rules",
      },
      signin: {
        title: "Sign In",
        description: "Enter your login details to access your account.",
        wrong_credentials: "Wrong Password or Email",
      },
      signup: {
        title: "Sign Up",
        description: "Fill out the information below to create a new account.",
      },
      completeInfo: {
        title: "Complete Your Information",
        description: "Please provide the missing",
        step0: "Account creation",
        step1: "Name & Firstname",
        step2: "Username & Birthdate",
        birthdate: "Birthdate",
        lastName: "Last Name",
        firstName: "First Name",
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
    pref: {
      chooseActivities: "Choose what kind of park activities you want",
      chooseTypes: "Choose what kind of park types you want",
      title: "Choose all of your preferences, and we'll find your ",
      validate: "You confirm that all the preferences you choose are final",
      titlePrefix: "dream park",
    },
  },
};
