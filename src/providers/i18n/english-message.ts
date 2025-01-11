import englishMessages from "ra-language-english";

export const haEnglishMessages: any = {
  ...englishMessages,
  resources: {
    "role": {
      name: "Role",
      fields: {
        id: "Id",
        name: "Role name",
      },
    },
    "profile": {
      name: "Profile",
      fields: {
        id: "Id",
        email: "Email",
        username: "Username",
        firstName: "First Name",
        lastName: "Last Name",
        nic: "National ID",
        photo: "Photo",
        birthDate: "Birth Date",
        address: "Address",
        gender: "Gender",
        apv: "APV",
        createdAt: "Created At",
        updatedAt: "Updated At",
        role: {
          id: "Id",
          name: "Role Name",
          createdAt: "Created At",
          updatedAt: "Updated At",
        },
      },
    },
    "user": {
      name: "User",
      fields: {
        id: "Id",
        email: "Email",
        username: "Username",
        firstName: "First Name",
        lastName: "Last Name",
        nic: "National ID",
        photo: "Photo",
        birthDate: "Birth Date",
        address: "Address",
        gender: "Gender",
        apv: "APV",
        createdAt: "Created At",
        updatedAt: "Updated At",
        role: {
          id: "Id",
          name: "Role Name",
          createdAt: "Created At",
          updatedAt: "Updated At",
        },
      },
    },
    "operation-result": {
      name: "Result",
      fields: {
        numberOfDistributed: "Distributed total",
        sumOfDistributed: "Sum (Ar)",
      },
    },
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
      user_gender: {
        MALE: "Male",
        FEMALE: "Female",
      },
      ledger_mouvement_type: {
        IN: "In",
        OUT: "Out",
      },
    },
    common: {
      profile_picture_update_title: "Update Profile Picture",
      profile_picture_update_success:
        "The profile picture was updated successfully.",
      profile_picture_update_error:
        "An error occurred while updating the profile picture.",
      distribution_success: "The ticket was distributed successfully.",
      distribution_error: "An error occurred while distributing the ticket.",
      delete_item_title: "Are you sure you want to delete this item",
      orgnisator: "Organisator",
      activity: "Activity",
      event_details: "Event Details",
      must_be_higher_or_equal_than: "Must be higher or equal to %{value}",
      distribute: "Distribute",
      verify: "Verify",
      ticket_already_distributed: "The ticket has already been distributed",
      ticket_paid: "The ticket with number %{ticketNumber} is already paid",
      ticket_not_paid_yet:
        "The ticket with number %{ticketNumber} is not paid yet",
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
