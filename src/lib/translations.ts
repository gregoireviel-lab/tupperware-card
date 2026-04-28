export type Locale = 'fr' | 'it' | 'de' | 'en' | 'pl' | 'da' | 'sv' | 'no' | 'fi'

export interface Translation {
  ui: {
    title: string
    preview: string
    download: string
    print: string
    langSwitcher: string
    pageDisclaimer: string
  }
  form: {
    id: string
    idHint: string
    firstName: string
    lastName: string
    phone: string
    email: string
    optional: string
    affiliateLink: string
    photo: string
    uploadPhoto: string
    orientation: string
    landscape: string
    portrait: string
    theme: string
    themeTeal: string
    themeMint: string
    flipFront: string
    flipBack: string
    testQR: string
  }
  card: {
    id: string
    firstName: string
    lastName: string
    issuedOn: string
    expiresOn: string
    companyDesc: string
    legalText: string
    brand: string
    subtitle: string
  }
}

export const translations: Record<Locale, Translation> = {
  fr: {
    ui: {
      title: 'Générateur de carte Tupperware',
      preview: 'Aperçu',
      download: 'Télécharger PDF',
      print: 'Imprimer la feuille A4 (8 cartes)',
      langSwitcher: 'Langue',
      pageDisclaimer:
        'Ces cartes de visite sont générées exclusivement pour les vendeuses agréées Tupperware OOBO SA dans le cadre de leur activité. Usage personnel uniquement — toute reproduction ou distribution à des tiers non autorisés est interdite.',
    },
    form: {
      id: 'Numéro consultant',
      idHint: 'Votre numéro de consultant·e Tupperware (5 ou 6 chiffres) — utilisé pour générer le lien d\'affiliation du QR code',
      firstName: 'Prénom',
      lastName: 'Nom',
      phone: 'Téléphone',
      email: 'Email',
      optional: 'optionnel',
      affiliateLink: 'Lien affilié',
      photo: 'Photo',
      uploadPhoto: 'Choisir une photo',
      orientation: 'Format',
      landscape: 'Paysage',
      portrait: 'Portrait',
      theme: 'Couleur',
      themeTeal: 'Vert foncé',
      themeMint: 'Vert clair',
      flipFront: 'Voir le recto',
      flipBack: 'Voir le verso',
      testQR: 'Tester le lien du QR',
    },
    card: {
      id: 'ID :',
      firstName: 'Prénom :',
      lastName: 'Nom :',
      issuedOn: 'Émise le :',
      expiresOn: 'Expire le :',
      companyDesc: 'OOBO SA, distributeur agréé des produits TUPPERWARE',
      legalText:
        'Consultant·e Tupperware indépendant·e — vente à domicile',
      brand: 'Brand',
      subtitle: 'OOBO SA, distributeur agréé des produits TUPPERWARE',
    },
  },
  it: {
    ui: {
      title: 'Generatore di carte Tupperware',
      preview: 'Anteprima',
      download: 'Scarica PDF',
      print: 'Stampa foglio A4 (8 carte)',
      langSwitcher: 'Lingua',
      pageDisclaimer:
        'Queste tessere sono generate esclusivamente per le venditrici autorizzate Tupperware OOBO SA nell\'ambito della loro attività. Solo per uso personale — qualsiasi riproduzione o distribuzione a terzi non autorizzati è vietata.',
    },
    form: {
      id: 'Numero consulente',
      idHint: 'Il tuo numero di consulente Tupperware (5 o 6 cifre) — usato per generare il link affiliato del QR',
      firstName: 'Nome',
      lastName: 'Cognome',
      phone: 'Telefono',
      email: 'Email',
      optional: 'opzionale',
      affiliateLink: 'Link affiliato',
      photo: 'Foto',
      uploadPhoto: 'Carica foto',
      orientation: 'Formato',
      landscape: 'Orizzontale',
      portrait: 'Verticale',
      theme: 'Colore',
      themeTeal: 'Verde scuro',
      themeMint: 'Verde chiaro',
      flipFront: 'Mostra fronte',
      flipBack: 'Mostra retro',
      testQR: 'Prova il link del QR',
    },
    card: {
      id: 'ID :',
      firstName: 'Nome :',
      lastName: 'Cognome :',
      issuedOn: 'Rilasciata il :',
      expiresOn: 'Scade il :',
      companyDesc: 'OOBO SA, distributore autorizzato dei prodotti TUPPERWARE',
      legalText:
        'Consulente Tupperware indipendente — vendita a domicilio',
      brand: 'Brand',
      subtitle: 'OOBO SA, distributore autorizzato dei prodotti TUPPERWARE',
    },
  },
  de: {
    ui: {
      title: 'Tupperware Karten-Generator',
      preview: 'Vorschau',
      download: 'PDF herunterladen',
      print: 'A4-Blatt drucken (8 Karten)',
      langSwitcher: 'Sprache',
      pageDisclaimer:
        'Diese Visitenkarten werden ausschließlich für autorisierte Tupperware OOBO SA-Verkäuferinnen im Rahmen ihrer Tätigkeit erstellt. Nur für den persönlichen Gebrauch — jegliche Reproduktion oder Weitergabe an unbefugte Dritte ist untersagt.',
    },
    form: {
      id: 'Beraternummer',
      idHint: 'Ihre Tupperware-Beraternummer (5 oder 6 Ziffern) — wird zur Generierung des QR-Affiliate-Links verwendet',
      firstName: 'Vorname',
      lastName: 'Nachname',
      phone: 'Telefon',
      email: 'E-Mail',
      optional: 'optional',
      affiliateLink: 'Affiliate-Link',
      photo: 'Foto',
      uploadPhoto: 'Foto hochladen',
      orientation: 'Format',
      landscape: 'Querformat',
      portrait: 'Hochformat',
      theme: 'Farbe',
      themeTeal: 'Dunkelgrün',
      themeMint: 'Hellgrün',
      flipFront: 'Vorderseite',
      flipBack: 'Rückseite',
      testQR: 'QR-Link testen',
    },
    card: {
      id: 'ID :',
      firstName: 'Vorname :',
      lastName: 'Nachname :',
      issuedOn: 'Ausgestellt am :',
      expiresOn: 'Läuft ab am :',
      companyDesc: 'OOBO SA, autorisierter Vertreiber von TUPPERWARE-Produkten',
      legalText:
        'Selbstständige·r Tupperware-Berater·in — Direktvertrieb',
      brand: 'Brand',
      subtitle: 'OOBO SA, autorisierter Vertreiber von TUPPERWARE-Produkten',
    },
  },
  en: {
    ui: {
      title: 'Tupperware Card Generator',
      preview: 'Preview',
      download: 'Download PDF',
      print: 'Print A4 sheet (8 cards)',
      langSwitcher: 'Language',
      pageDisclaimer:
        'These business cards are generated exclusively for authorised Tupperware OOBO SA sellers in the course of their activity. Personal use only — any reproduction or distribution to unauthorised third parties is prohibited.',
    },
    form: {
      id: 'Consultant Number',
      idHint: 'Your Tupperware consultant number (5 or 6 digits) — used to generate the affiliate link in the QR code',
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: 'Phone',
      email: 'Email',
      optional: 'optional',
      affiliateLink: 'Affiliate Link',
      photo: 'Photo',
      uploadPhoto: 'Upload Photo',
      orientation: 'Format',
      landscape: 'Landscape',
      portrait: 'Portrait',
      theme: 'Color',
      themeTeal: 'Dark green',
      themeMint: 'Light green',
      flipFront: 'Show front',
      flipBack: 'Show back',
      testQR: 'Test QR link',
    },
    card: {
      id: 'ID :',
      firstName: 'First Name :',
      lastName: 'Last Name :',
      issuedOn: 'Issued on :',
      expiresOn: 'Expires on :',
      companyDesc: 'OOBO SA, authorised distributor of TUPPERWARE products',
      legalText:
        'Independent Tupperware consultant — direct sales',
      brand: 'Brand',
      subtitle: 'OOBO SA, authorised distributor of TUPPERWARE products',
    },
  },
  pl: {
    ui: {
      title: 'Generator wizytówek Tupperware',
      preview: 'Podgląd',
      download: 'Pobierz PDF',
      print: 'Drukuj arkusz A4 (8 kart)',
      langSwitcher: 'Język',
      pageDisclaimer:
        'Te wizytówki są generowane wyłącznie dla autoryzowanych sprzedawców Tupperware OOBO SA w ramach ich działalności. Tylko do użytku osobistego — wszelkie powielanie lub dystrybucja osobom trzecim bez upoważnienia jest zabronione.',
    },
    form: {
      id: 'Numer konsultanta',
      idHint: 'Twój numer konsultanta Tupperware (5 lub 6 cyfr) — używany do generowania linku partnerskiego w kodzie QR',
      firstName: 'Imię',
      lastName: 'Nazwisko',
      phone: 'Telefon',
      email: 'E-mail',
      optional: 'opcjonalne',
      affiliateLink: 'Link partnerski',
      photo: 'Zdjęcie',
      uploadPhoto: 'Wgraj zdjęcie',
      orientation: 'Format',
      landscape: 'Poziomy',
      portrait: 'Pionowy',
      theme: 'Kolor',
      themeTeal: 'Ciemnozielony',
      themeMint: 'Jasnozielony',
      flipFront: 'Pokaż przód',
      flipBack: 'Pokaż tył',
      testQR: 'Testuj link QR',
    },
    card: {
      id: 'ID :',
      firstName: 'Imię :',
      lastName: 'Nazwisko :',
      issuedOn: 'Data wydania :',
      expiresOn: 'Ważna do :',
      companyDesc: 'OOBO SA, autoryzowany dystrybutor produktów TUPPERWARE',
      legalText:
        'Niezależny konsultant Tupperware — sprzedaż bezpośrednia',
      brand: 'Brand',
      subtitle: 'OOBO SA, autoryzowany dystrybutor produktów TUPPERWARE',
    },
  },
  da: {
    ui: {
      title: 'Tupperware Visitkortgenerator',
      preview: 'Forhåndsvisning',
      download: 'Download PDF',
      print: 'Udskriv A4-ark (8 kort)',
      langSwitcher: 'Sprog',
      pageDisclaimer:
        'Disse visitkort er udelukkende genereret til autoriserede Tupperware OOBO SA-konsulenter i forbindelse med deres aktivitet. Kun til personlig brug — enhver reproduktion eller distribution til uautoriserede tredjeparter er forbudt.',
    },
    form: {
      id: 'Konsulentnummer',
      idHint: 'Dit Tupperware-konsulentnummer (5 eller 6 cifre) — bruges til at generere partnerlinket i QR-koden',
      firstName: 'Fornavn',
      lastName: 'Efternavn',
      phone: 'Telefon',
      email: 'E-mail',
      optional: 'valgfri',
      affiliateLink: 'Partnerlink',
      photo: 'Foto',
      uploadPhoto: 'Upload foto',
      orientation: 'Format',
      landscape: 'Liggende',
      portrait: 'Stående',
      theme: 'Farve',
      themeTeal: 'Mørkegrøn',
      themeMint: 'Lysegrøn',
      flipFront: 'Vis forside',
      flipBack: 'Vis bagside',
      testQR: 'Test QR-link',
    },
    card: {
      id: 'ID :',
      firstName: 'Fornavn :',
      lastName: 'Efternavn :',
      issuedOn: 'Udstedt :',
      expiresOn: 'Udløber :',
      companyDesc: 'OOBO SA, autoriseret distributør af TUPPERWARE-produkter',
      legalText:
        'Uafhængig Tupperware-konsulent — direkte salg',
      brand: 'Brand',
      subtitle: 'OOBO SA, autoriseret distributør af TUPPERWARE-produkter',
    },
  },
  sv: {
    ui: {
      title: 'Tupperware Visitkortsgenerator',
      preview: 'Förhandsvisning',
      download: 'Ladda ner PDF',
      print: 'Skriv ut A4-ark (8 kort)',
      langSwitcher: 'Språk',
      pageDisclaimer:
        'Dessa visitkort genereras uteslutande för auktoriserade Tupperware OOBO SA-konsulenter inom ramen för deras verksamhet. Endast för personligt bruk — all reproduktion eller distribution till obehöriga tredje parter är förbjuden.',
    },
    form: {
      id: 'Konsultnummer',
      idHint: 'Ditt Tupperware-konsultnummer (5 eller 6 siffror) — används för att generera partnerlänken i QR-koden',
      firstName: 'Förnamn',
      lastName: 'Efternamn',
      phone: 'Telefon',
      email: 'E-post',
      optional: 'valfri',
      affiliateLink: 'Partnerlänk',
      photo: 'Foto',
      uploadPhoto: 'Ladda upp foto',
      orientation: 'Format',
      landscape: 'Liggande',
      portrait: 'Stående',
      theme: 'Färg',
      themeTeal: 'Mörkgrön',
      themeMint: 'Ljusgrön',
      flipFront: 'Visa framsida',
      flipBack: 'Visa baksida',
      testQR: 'Testa QR-länk',
    },
    card: {
      id: 'ID :',
      firstName: 'Förnamn :',
      lastName: 'Efternamn :',
      issuedOn: 'Utfärdat :',
      expiresOn: 'Giltigt till :',
      companyDesc: 'OOBO SA, auktoriserad återförsäljare av TUPPERWARE-produkter',
      legalText:
        'Oberoende Tupperware-konsult — direktförsäljning',
      brand: 'Brand',
      subtitle: 'OOBO SA, auktoriserad återförsäljare av TUPPERWARE-produkter',
    },
  },
  no: {
    ui: {
      title: 'Tupperware Visittkortgenerator',
      preview: 'Forhåndsvisning',
      download: 'Last ned PDF',
      print: 'Skriv ut A4-ark (8 kort)',
      langSwitcher: 'Språk',
      pageDisclaimer:
        'Disse visittkortene genereres utelukkende for autoriserte Tupperware OOBO SA-konsulenter i forbindelse med deres virksomhet. Kun til personlig bruk — enhver reproduksjon eller distribusjon til uautoriserte tredjeparter er forbudt.',
    },
    form: {
      id: 'Konsulentnummer',
      idHint: 'Ditt Tupperware-konsulentnummer (5 eller 6 sifre) — brukes til å generere partnerlenken i QR-koden',
      firstName: 'Fornavn',
      lastName: 'Etternavn',
      phone: 'Telefon',
      email: 'E-post',
      optional: 'valgfri',
      affiliateLink: 'Partnerlenke',
      photo: 'Foto',
      uploadPhoto: 'Last opp foto',
      orientation: 'Format',
      landscape: 'Liggende',
      portrait: 'Stående',
      theme: 'Farge',
      themeTeal: 'Mørkegrønn',
      themeMint: 'Lysegrønn',
      flipFront: 'Vis forside',
      flipBack: 'Vis bakside',
      testQR: 'Test QR-lenke',
    },
    card: {
      id: 'ID :',
      firstName: 'Fornavn :',
      lastName: 'Etternavn :',
      issuedOn: 'Utstedt :',
      expiresOn: 'Utløper :',
      companyDesc: 'OOBO SA, autorisert distributør av TUPPERWARE-produkter',
      legalText:
        'Uavhengig Tupperware-konsulent — direktesalg',
      brand: 'Brand',
      subtitle: 'OOBO SA, autorisert distributør av TUPPERWARE-produkter',
    },
  },
  fi: {
    ui: {
      title: 'Tupperware-käyntikorttigeneraattori',
      preview: 'Esikatselu',
      download: 'Lataa PDF',
      print: 'Tulosta A4-arkki (8 korttia)',
      langSwitcher: 'Kieli',
      pageDisclaimer:
        'Nämä käyntikortit on luotu yksinomaan valtuutetuille Tupperware OOBO SA -konsulteille heidän toimintansa puitteissa. Vain henkilökohtaiseen käyttöön — kaikki kopiointi tai jakelu valtuuttamattomille kolmansille osapuolille on kielletty.',
    },
    form: {
      id: 'Konsulttinumero',
      idHint: 'Tupperware-konsulttinumerosi (5 tai 6 numeroa) — käytetään QR-koodin kumppanilinkin luomiseen',
      firstName: 'Etunimi',
      lastName: 'Sukunimi',
      phone: 'Puhelin',
      email: 'Sähköposti',
      optional: 'valinnainen',
      affiliateLink: 'Kumppanilinkki',
      photo: 'Valokuva',
      uploadPhoto: 'Lataa kuva',
      orientation: 'Muoto',
      landscape: 'Vaaka',
      portrait: 'Pysty',
      theme: 'Väri',
      themeTeal: 'Tummanvihreä',
      themeMint: 'Vaaleanvihreä',
      flipFront: 'Näytä etupuoli',
      flipBack: 'Näytä takapuoli',
      testQR: 'Testaa QR-linkki',
    },
    card: {
      id: 'ID :',
      firstName: 'Etunimi :',
      lastName: 'Sukunimi :',
      issuedOn: 'Myönnetty :',
      expiresOn: 'Voimassa :',
      companyDesc: 'OOBO SA, TUPPERWARE-tuotteiden valtuutettu jakelija',
      legalText:
        'Itsenäinen Tupperware-konsultti — suoramyynti',
      brand: 'Brand',
      subtitle: 'OOBO SA, TUPPERWARE-tuotteiden valtuutettu jakelija',
    },
  },
}
