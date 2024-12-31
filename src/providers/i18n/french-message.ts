import frenchMessages from "ra-language-french";

//TODO: avoid type any
export const haFrenchMessages: any = {
  ...frenchMessages,
  ha: {
    appBar: {
      userPopover: {
        editProfile: "Editer le profil",
      },
    },
    words: {
      home: "Accueil",
      calendar: "Calendrier",
      stats: "Statistiques",
      creation: "Créations",
      herivelona: "Herivelona",
      caisse: "Caisse",
      presence: "Présence",
      fitadiavamBola: "Fitadiavam-bola",
      activity: "Activité",
      history: "Historiques",
      find: "Rechercher",
      about: "A propos",
      welcome: "Bievenu !",
      or: "Ou",
      signin: "Se connecter",
      more: "Plus",
      lang: "Langues",
      settings: "Paramètres",
      profil: "Profil",
      signup: "S'inscrire",
      next: "Suivant",
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
