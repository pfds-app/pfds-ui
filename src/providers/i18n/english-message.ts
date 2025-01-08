import englishMessages from "ra-language-english";

export const haEnglishMessages: any = {
  ...englishMessages,
  resources: {
    "sacrament": {
      name: "Sakramenta",
      fields: {
        id: "Id",
        name: "Label",
      },
    },
    "region": {
      name: "Faritra |||| Faritra",
      fields: {
        id: "Id",
        name: "Label",
        code: "Code",
      },
    },
    "association": {
      name: "Fikambanana masina |||| Fikambanana masina",
      fields: {
        id: "Id",
        name: "Label",
        code: "Code",
      },
    },
    "committee": {
      name: "Vaomieran'asa |||| Vaomieran'asa",
      fields: {
        id: "Id",
        name: "Label",
        code: "Code",
      },
    },
    "event": {
      name: "Event |||| Events",
      fields: {
        id: "Id",
        name: "Event name",
        place: "Place",
        beginDate: "Event start date",
        endDate: "Event end date",
      },
    },
    "responsability": {
      name: "Andraikitra",
      fields: {
        id: "Id",
        name: "Label",
      },
    },
    "ledger": {
      name: "Ledger",
      fields: {
        id: "Id",
        name: "Label",
        mouvementType: "Mouvement",
        ledgerDate: "Date",
        price: "Amount",
      },
    },
    "operation": {
      name: "Operation",
      fields: {
        id: "Id",
        name: "Label",
        numberOfTickets: "Number of tickets",
        ticketPrice: "Price of ticket (Ariary)",
        description: "Description",
        operationDate: "Date",
      },
    },
    "ticket": {
      name: "Ticket",
      fields: {
        id: "Id",
        operation: "Operation",
        staff: "Staff",
        fromNumber: "From",
        toNumber: "To",
      },
    },
    "ticket-status": {
      name: "Situation",
      fields: {
        id: "Id",
        numberOfTickets: "Number of tickets",
        numberOfPayedTickets: "Number of paid tickets",
        numberOfNotPayedTickets: "Number of unpaid tickets",
        pourcentageOfPayedTickets: "Percentage of paid tickets",
        pourcentageOfNotPayedTickets: "Percentage of unpaid tickets",
        notPayedAmount: "Unpaid amount",
        payedAmount: "Paid amount",
      },
    },
  },
  custom: {
    enum: {
      ledger_mouvement_type: {
        IN: "In",
        OUT: "Out",
      },
    },
    common: {
      edit_profile: "Edit profile",
      empty: "There is no record!",
      optional: "Optional",
      mark_payed: "Mark as Payed",
    },
    sign_in: {
      welcome: "Welcome !",
      username: "Username",
    },
    locales: {
      fr: {
        name: "French",
      },
      en: {
        name: "English",
      },
    },
    about: {
      title: "About J.F.D.S",
      contacts: "Our Contacts",
      credits: "Created by",
      who_are_us: {
        title: "Who Are We?",
        content:
          "J.F.D.S, or more precisely Jeune Foi Digital Soavimasoandro, is a platform for an association of young believers from the Catholic Church located in Soavimasoandro.",
      },
    },
    menu: {
      home: "Home",
      calendar: "Calendar",
      stats: "Statistics",
      creation: "Creations",
      herivelona: "Herivelona",
      caisse: "Ledger",
      presence: "Presence",
      fitadiavamBola: "Fitadiavam-bola",
      activity: "Activities",
      history: "History",
      find: "Search",
      about: "About",
      welcome: "Welcome !",
    },
  },
};
