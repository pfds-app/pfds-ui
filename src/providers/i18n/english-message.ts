import englishMessages from "ra-language-english";

export const haEnglishMessages: any = {
  ...englishMessages,
  resources: {
    "presence": {
      name: "Presence",
    },
    "activity": {
      name: "Hetsika",
      fields: {
        id: "Id",
        name: "Name",
        place: "Place",
        beginDate: "Event start date",
        endDate: "Event end date",
        description: "Description",
        rolType: "Type",
        organisatorRole: "Organisator",
      },
    },
    "user-stat": {
      name: "Member per year",
      fields: {
        id: "Id",
        year: "Year",
        maleCount: "Male Count",
        femaleCount: "Female Count",
        fromDate: "From",
        endDate: "To",
      },
    },
    "role": {
      name: "Role",
      fields: {
        id: "Id",
        name: "Role name",
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
        nic: "Num Karatra",
        role: "Role",
        photo: "Photo",
        birthDate: "Birth Date",
        address: "Address",
        gender: "Gender",
        apv: "APV",
        createdAt: "Created At",
        updatedAt: "Updated At",
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
      name: "Faritra",
      fields: {
        id: "Id",
        name: "Label",
        code: "Code",
      },
    },
    "association": {
      name: "Fikambanana masina",
      fields: {
        id: "Id",
        name: "Label",
        code: "Code",
      },
    },
    "committee": {
      name: "Vaomieran'asa",
      fields: {
        id: "Id",
        name: "Label",
        code: "Code",
      },
    },
    "event": {
      name: "Special Event",
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
      activity_role_type: {
        ALL: "All",
        MANAGER: "Filan-kevitra",
      },
      ledger_stat_type: {
        ACCULUMATED: "Acculumated",
        PER_YEAR: "Registered per year",
      },
      user_stat_type: {
        ACCULUMATED: "Acculumated",
        PER_YEAR: "Registered per year",
      },
      user_role: {
        ADMIN: "Admin",
        REGION_MANAGER: "Filohan’ny Faritra",
        COMMITTEE_MANAGER: "Filohan’ny Vaomieran’asa",
        ASSOCIATION_MANAGER: "Filohan’ny Fikambanana Masina",
        SIMPLE_USER: "Mpikambana",
      },
      user_gender: {
        MALE: "Male",
        FEMALE: "Female",
      },
      ledger_mouvement_type: {
        IN: "In",
        OUT: "Out",
      },
      presence: {
        PRESENT: "Present",
        ABSENT: "Absent",
      },
    },
    common: {
      found: "User founded",
      watch_presence: "Watch presence",
      all: "All",
      download_qr_code: "Download QR Code",
      clear_search: "Reset",
      find_member: "Search for a member",
      simple_signin: "Simple Signin",
      signin_by_role: "Signin By Role",
      not_defined: "Not Define",
      count: "Count",
      month: "Month",
      year: "Year",
      budget_per_month: "Budget per month",
      required_when: "Required when %{source}=%{destination}",
      today: "Today",
      incoming_event: "Incoming event",
      activity_today: "Today's Activities",
      teams: "Teams",
      langs: "Languages",
      profile: "Profile",
      created_default_user: "Default user created successfully",
      api_key: "Api Key",
      confirm_password: "Confirm your password",
      confirm_password_error: "The passwords do not match.",
      create_default_user: "Create a default user (you can delete it later).",
      create_default_user_btn: "Create a default user",
      profile_picture_update_title: "Update Profile Picture",
      profile_picture_update_success:
        "The profile picture was updated successfully.",
      profile_picture_update_error:
        "An error occurred while updating the profile picture.",
      distribution_success: "The ticket was distributed successfully.",
      distribution_error: "An error occurred while distributing the ticket.",
      delete_item_title: "Are you sure you want to delete this item",
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
