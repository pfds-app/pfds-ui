import frenchMessages from "ra-language-french";

export const haFrenchMessages: any = {
  ...frenchMessages,
  resources: {
    "user": {
      name: "Utilisateur",
      fields: {
        id: "Id",
        email: "Email",
        username: "Identifiant",
        firstName: "Prénom",
        lastName: "Nom de famille",
        nic: "Num Karatra",
        photo: "Photo",
        birthDate: "Date de naissance",
        address: "Adresse",
        gender: "Genre",
        apv: "APV",
        createdAt: "Créé le",
        updatedAt: "Mis à jour le",
        role: "Rôle",
      },
    },
    "operation-result": {
      name: "Résultat",
      fields: {
        numberOfDistributed: "Total distribué",
        sumOfDistributed: "Sommes (Ar)",
      },
    },
    "sacrament": {
      name: "Sakramenta",
      fields: {
        id: "Id",
        name: "Libellé",
      },
    },
    "region": {
      name: "Faritra",
      fields: {
        id: "Id",
        name: "Libellé",
        code: "Code",
      },
    },
    "association": {
      name: "Fikambanana masina",
      fields: {
        id: "Id",
        name: "Libellé",
        code: "Code",
      },
    },
    "committee": {
      name: "Vaomieran'asa",
      fields: {
        id: "Id",
        name: "Libellé",
        code: "Code",
      },
    },
    "event": {
      name: "Evènment",
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
      user_role: {
        ADMIN: "Administrateur",
        REGION_MANAGER: "Filohan’ny Faritra",
        COMMITTEE_MANAGER: "Filohan’ny Vaomieran’asa",
        ASSOCIATION_MANAGER: "Filohan’ny Fikambanana Masina",
        SIMPLE_USER: "Mpikambana"
      },
      user_gender: {
        MALE: "Homme",
        FEMALE: "Femme",
      },
      ledger_mouvement_type: {
        IN: "Entrée",
        OUT: "Sortie",
      },
    },
    common: {
      profile: "Profil",
      created_default_user: "Utilisateur par défaut créé avec succès",
      create_default_user_btn: "Créer un utilisateur par défaut",
      api_key: "Clé API",
      confirm_password: "Confirmez votre mot de passe",
      confirm_password_error: "Les mots de passe ne correspondent pas.",
      create_default_user:
        "Créer un utilisateur par défaut (vous pourrez le supprimer plus tard).",
      profile_picture_update_title: "Mettre à jour la photo de profil",
      profile_picture_update_success:
        "La photo de profil a été mise à jour avec succès.",
      profile_picture_update_error:
        "Une erreur est survenue lors de la mise à jour de la photo de profil.",
      distribution_success: "Le ticket a été distribué avec succès.",
      distribution_error:
        "Une erreur est survenue lors de la distribution du ticket.",
      delete_item_title: "Êtes-vous sûr de vouloir supprimer cet élément ?",
      orgnisator: "Organisateur",
      activity: "Activité",
      verify: "Vérifier",
      event_details: "Détails de l'événement",
      distribute: "Distribuer",
      must_be_higher_or_equal_than: "Doit être supérieur ou égal à %{value}",
      ticket_already_distributed: "Le billet a déjà été distribué",
      ticket_paid: "Le billet avec le numéro %{ticketNumber} est déjà payé",
      ticket_not_paid_yet:
        "Le billet avec le numéro %{ticketNumber} n'est pas encore payé",
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
