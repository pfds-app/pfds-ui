import frenchMessages from "ra-language-french";

export const haFrenchMessages: any = {
  ...frenchMessages,
  resources: {
    "sacrament": {
      name: "Sakramenta |||| Sakramenta",
      fields: {
        id: "Id",
        name: "Libellé",
      },
    },
    "region": {
      name: "Faritra |||| Faritra",
      fields: {
        id: "Id",
        name: "Libellé",
        code: "Code",
      },
    },
    "association": {
      name: "Fikambanana masina |||| Fikambanana masina",
      fields: {
        id: "Id",
        name: "Libellé",
        code: "Code",
      },
    },
    "committee": {
      name: "Vaomieran'asa |||| Vaomieran'asa",
      fields: {
        id: "Id",
        name: "Libellé",
        code: "Code",
      },
    },
    "event": {
      name: "Evènment |||| Evènments",
      fields: {
        id: "Id",
        name: "Nom de l'evènment",
        place: "Lieu",
        beginDate: "Début de d'evènement",
        endDate: "Fin de d'evènement",
      },
    },
    "responsability": {
      name: "Andraikitra",
      fields: {
        id: "Id",
        name: "Libellé",
      },
    },
    "ledger": {
      name: "Caisse",
      fields: {
        id: "Id",
        name: "Libellé",
        mouvementType: "Mouvement",
        ledgerDate: "Date",
        price: "Montant",
      },
    },
    "operation": {
      name: "Opération",
      fields: {
        id: "Id",
        name: "Libellé",
        numberOfTickets: "Nombre de billets",
        ticketPrice: "Prix de billet (Ariary)",
        description: "Description",
        operationDate: "Date",
      },
    },
    "ticket": {
      name: "Billet",
      fields: {
        id: "Id",
        operation: "Opération",
        staff: "Staff",
        fromNumber: "De",
        toNumber: "À",
      },
    },
    "ticket-status": {
      name: "Situation",
      fields: {
        id: "Id",
        numberOfTickets: "Nombre de billets",
        numberOfPayedTickets: "Nombre de billets payés",
        numberOfNotPayedTickets: "Nombre de billets non payés",
        pourcentageOfPayedTickets: "Pourcentage de billets payés",
        pourcentageOfNotPayedTickets: "Pourcentage de billets non payés",
        notPayedAmount: "Montant non payé",
        payedAmount: "Montant payé",
      },
    },
  },
  custom: {
    enum: {
      ledger_mouvement_type: {
        IN: "Entrée",
        OUT: "Sortie",
      },
    },
    common: {
      verify: "Vérifier",
      distribute: "Distribuer",
      must_be_higher_or_equal_than: "Doit être supérieur ou égal à %{value}",
      ticket_already_distributed: "Le billet a déjà été distribué",
      ticket_paid: "Le billet avec le numéro %{ticketNumber} est déjà payé",
      ticket_not_paid_yet: "Le billet avec le numéro %{ticketNumber} n'est pas encore payé",
      edit_profile: "Editer le profil",
      empty: "Il n'y a pas d'enregistrement!",
      optional: "Facultatif",
      mark_payed: "Marquer payé",
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
