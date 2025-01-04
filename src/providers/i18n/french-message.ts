import frenchMessages from "ra-language-french";

export const haFrenchMessages: any = {
  ...frenchMessages,
  resources: {
    sacrament: {
      name: "Sakramenta |||| Sakramenta",
      fields: {
        id: "Id",
        name: "Libellé",
      },
    },
    region: {
      name: "Faritra |||| Faritra",
      fields: {
        id: "Id",
        name: "Libellé",
        code: "Code",
      },
    },
    association: {
      name: "Fikambanana masina |||| Fikambanana masina",
      fields: {
        id: "Id",
        name: "Libellé",
        code: "Code",
      },
    },
    committee: {
      name: "Vaomieran'asa |||| Vaomieran'asa",
      fields: {
        id: "Id",
        name: "Libellé",
        code: "Code",
      },
    },
    event: {
      name: "Evènment |||| Evènments",
      fields: {
        id: "Id",
        name: "Nom de l'evènment",
        place: "Lieu",
        beginDate: "Début de d'evènement",
        endDate: "Fin de d'evènement",
      },
    },
  },
  pfds: {
    common: {
      edit_profile: "Editer le profil",
      empty: "Il n'y a pas d'enregistrement!",
      optional: "Facultatif",
    },
    sign_in: {
      welcome: "Bievenu !",
      username: "Nom d'Utilisateur",
    },
    locales: {
      fr: {
        name: "Français",
      },
      en: {
        name: "Anglais",
      },
    },
    about: {
      title: "À propos de J.F.D.S",
      contacts: "Nos Contacts",
      credits: "Crée par",
      who_are_us: {
        title: "Nous sommes qui ?",
        content:
          "J.F.D.S ou plus précisement Jeune Foi Digital Soavimasoandro est une plateforme d'association des jeunes croyant de l'église catholique sise à Soavimasoandro",
      },
    },
    menu: {
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
    },
  },
};
