import frenchMessages from "ra-language-french";

//TODO: avoid type any
export const haFrenchMessages: any = {
  ...frenchMessages,
  ha: {
    words: {
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
      requirement: "Mes exigences",
    },
    text: {
      forgotPassword: "Mot de passe oublié ?",
      alreadyHaveAccount: "Vous avez déjà un compte ?",
      doesNotHaveAccountYet: "Vous n'avez pas encore de compte ?",
      settings:
        "Modifiez la configuration de l'application pour qu'elle corresponde à votre configuration",
      recommendedQuestion: "Pourquoi cela m'est-il recommandé ?",
      recommended1: "Parcs recommandés",
      recommended2: "pour vous",
    },
    login: {
      forms: {
        confirmPassword: {
          label: "Confirmer votre mot de passe",
          error: "Les mots de passe ne correspondent pas",
        },
        password: "Mot de passe",
      },
      illustration: {
        header:
          "Bienvenue sur Naturo Match, votre application pour trouver des parcs",
        description:
          "Ce sera votre nouveau compagnon écologique, vous aidant à faire des choix durables et à réduire votre impact environnemental.",
        find_our: "Trouver ici notre",
        general_rules: "Règles générale",
      },
      signin: {
        title: "Se connecter",
        description:
          "Entrez vos informations de connexion pour accéder à votre compte.",
        wrong_credentials: "Mauvais mot de passe ou email",
      },
      signup: {
        title: "Créer un compte",
        description:
          "Remplissez les informations ci-dessous pour créer un nouveau compte.",
      },
      completeInfo: {
        title: "Complétez vos informations",
        description:
          "Veuillez fournir les informations manquantes pour finaliser votre inscription.",
        step0: "Création de compte",
        step1: "Nom & Prénoms",
        step2: "Nom d'utilisateur & Date D'anniversaire",
        birthdate: "Date de Naissance",
        lastName: "Prénom",
        firstName: "Nom",
        username: "Nom d'Utilisateur",
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
    pref: {
      chooseActivities:
        "Choisissez le type d'activités de parc que vous souhaitez",
      chooseTypes: "Choisissez le type de parcs que vous souhaitez",
      validate:
        "Vous confirmez que toutes les préférences que vous choisissez sont finales",
      title: "Choisissez toutes vos préférences, et nous trouverons votre ",
      titlePrefix: "parc idéal",
    },
  },
};
