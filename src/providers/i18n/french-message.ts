import frenchMessages from "ra-language-french";

//TODO: avoid type any
export const haFrenchMessages: any = {
  ...frenchMessages,
  ha: {
    words: {
      welcome: "Bievenu !",
      or: "Ou",
      signin: "Se connecter",
      more: "Plus",
      lang: "Langues",
      settings: "Paramètres",
      profil: "Profil",
      signup: "S'inscrire",
      next: "Suivant",
      home: "Accueil",
      light: "Clair",
      dark: "Sombre",
      prev: "Précédent",
      edit: "Editer",
      finish: "Terminer",
      signout: "Se Déconnecter",
    },
    text: {
      forgotPassword: "Mot de passe oublié ?",
      alreadyHaveAccount: "Vous avez déjà un compte ?",
      doesNotHaveAccountYet: "Vous n'avez pas encore de compte ?",
    },
    login: {
      forms: {
        confirmPassword: {
          label: "Confirmer votre mot de passe",
          error: "Les mots de passe ne correspondent pas",
        },
        username: "Nom d'Utilisateur",
        password: "Mot de passe",
      },
    },
    locales: {
      fr: {
        name: "Français",
      },
      en: {
        name: "Anglais",
      },
    },
  },
};
