export type Locale = 'fr' | 'it' | 'de' | 'en' | 'pl' | 'da' | 'sv' | 'no' | 'fi' | 'nl'

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
    affiliateUrlLabel: string
    affiliateUrlHint: string
    affiliateUrlInvalid: string
    changeNoticeTitle: string
    changeNotice: string
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
      affiliateUrlLabel: 'Lien d\'affiliation',
      affiliateUrlHint: 'Colle l\'URL complète de ton lien personnel (ex : https://tupperware-eu.com/?ref=96541)',
      affiliateUrlInvalid: 'URL invalide — elle doit commencer par https://',
      changeNoticeTitle: 'Nouveauté.',
      changeNotice: 'On ne demande plus juste ton numéro mais l\'URL complète, pour que les consultantes des pays nordiques (qui ont un lien avec leur nom au lieu d\'un numéro) puissent aussi utiliser l\'outil.',
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
      affiliateUrlLabel: 'Link affiliato',
      affiliateUrlHint: 'Incolla l\'URL completo del tuo link personale (es. https://tupperware-eu.com/?ref=96541)',
      affiliateUrlInvalid: 'URL non valido — deve iniziare con https://',
      changeNoticeTitle: 'Novità.',
      changeNotice: 'Non chiediamo più solo il tuo numero ma l\'URL completo, in modo che anche le consulenti dei paesi nordici (che hanno un link con il loro nome invece di un numero) possano usare lo strumento.',
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
      affiliateUrlLabel: 'Affiliate-Link',
      affiliateUrlHint: 'Füge die vollständige URL deines persönlichen Links ein (z. B. https://tupperware-eu.com/?ref=96541)',
      affiliateUrlInvalid: 'Ungültige URL — sie muss mit https:// beginnen',
      changeNoticeTitle: 'Neu.',
      changeNotice: 'Wir fragen nicht mehr nur deine Nummer, sondern die vollständige URL ab — damit auch Beraterinnen aus den nordischen Ländern (die einen Link mit ihrem Namen statt einer Nummer haben) das Tool nutzen können.',
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
      affiliateUrlLabel: 'Affiliate Link',
      affiliateUrlHint: 'Paste the full URL of your personal link (e.g. https://tupperware-eu.com/?ref=96541)',
      affiliateUrlInvalid: 'Invalid URL — must start with https://',
      changeNoticeTitle: 'New.',
      changeNotice: 'We no longer ask just for your number but for the full URL, so consultants from the Nordic countries (who get a link with their name instead of a number) can also use the tool.',
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
      affiliateUrlLabel: 'Link partnerski',
      affiliateUrlHint: 'Wklej pełny adres URL swojego osobistego linku (np. https://tupperware-eu.com/?ref=96541)',
      affiliateUrlInvalid: 'Nieprawidłowy URL — musi zaczynać się od https://',
      changeNoticeTitle: 'Nowość.',
      changeNotice: 'Nie pytamy już tylko o numer, ale o pełny adres URL — dzięki temu konsultantki z krajów nordyckich (które mają link z imieniem zamiast numeru) też mogą korzystać z narzędzia.',
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
      affiliateUrlLabel: 'Partnerlink',
      affiliateUrlHint: 'Indsæt den fulde URL til dit personlige link (f.eks. https://tupperware-eu.com/?ref=96541 eller https://tupperware.dk/dit-navn)',
      affiliateUrlInvalid: 'Ugyldig URL — skal starte med https://',
      changeNoticeTitle: 'Nyt.',
      changeNotice: 'Vi spørger ikke længere kun om dit nummer, men om hele URL\'en — så konsulenter fra de nordiske lande (der har et link med deres navn i stedet for et nummer) også kan bruge værktøjet.',
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
      affiliateUrlLabel: 'Partnerlänk',
      affiliateUrlHint: 'Klistra in hela URL:en till din personliga länk (t.ex. https://tupperware-eu.com/?ref=96541 eller https://tupperware.se/ditt-namn)',
      affiliateUrlInvalid: 'Ogiltig URL — måste börja med https://',
      changeNoticeTitle: 'Nyhet.',
      changeNotice: 'Vi frågar inte längre bara efter ditt nummer utan efter hela URL:en — så att konsulenter från de nordiska länderna (som har en länk med sitt namn istället för ett nummer) också kan använda verktyget.',
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
      affiliateUrlLabel: 'Partnerlenke',
      affiliateUrlHint: 'Lim inn hele URL-en til din personlige lenke (f.eks. https://tupperware-eu.com/?ref=96541 eller https://tupperware.no/ditt-navn)',
      affiliateUrlInvalid: 'Ugyldig URL — må starte med https://',
      changeNoticeTitle: 'Nytt.',
      changeNotice: 'Vi spør ikke lenger bare om nummeret ditt, men om hele URL-en — slik at konsulenter fra de nordiske landene (som har en lenke med navnet sitt i stedet for et nummer) også kan bruke verktøyet.',
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
      affiliateUrlLabel: 'Kumppanilinkki',
      affiliateUrlHint: 'Liitä henkilökohtaisen linkkisi koko URL-osoite (esim. https://tupperware-eu.com/?ref=96541 tai https://tupperware.fi/nimesi)',
      affiliateUrlInvalid: 'Virheellinen URL — sen on alettava https://',
      changeNoticeTitle: 'Uutta.',
      changeNotice: 'Emme kysy enää pelkkää numeroasi vaan koko URL-osoitetta — näin myös pohjoismaiden konsultit (joilla on linkki nimellään numeron sijaan) voivat käyttää työkalua.',
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
  nl: {
    ui: {
      title: 'Tupperware Visitekaartjes-generator',
      preview: 'Voorbeeld',
      download: 'PDF downloaden',
      print: 'A4-vel afdrukken (8 kaartjes)',
      langSwitcher: 'Taal',
      pageDisclaimer:
        'Deze visitekaartjes worden uitsluitend gegenereerd voor erkende Tupperware OOBO SA-verkoopsters in het kader van hun activiteit. Uitsluitend voor persoonlijk gebruik — elke reproductie of verspreiding aan onbevoegde derden is verboden.',
    },
    form: {
      affiliateUrlLabel: 'Affiliatielink',
      affiliateUrlHint: 'Plak de volledige URL van je persoonlijke link (bv. https://tupperware-eu.com/?ref=96541)',
      affiliateUrlInvalid: 'Ongeldige URL — moet beginnen met https://',
      changeNoticeTitle: 'Nieuw.',
      changeNotice: 'We vragen niet meer alleen om je nummer, maar om de volledige URL — zo kunnen ook consulenten uit de Noordse landen (die een link met hun naam krijgen in plaats van een nummer) de tool gebruiken.',
      firstName: 'Voornaam',
      lastName: 'Achternaam',
      phone: 'Telefoon',
      email: 'E-mail',
      optional: 'optioneel',
      affiliateLink: 'Affiliatielink',
      photo: 'Foto',
      uploadPhoto: 'Foto uploaden',
      orientation: 'Formaat',
      landscape: 'Liggend',
      portrait: 'Staand',
      theme: 'Kleur',
      themeTeal: 'Donkergroen',
      themeMint: 'Lichtgroen',
      flipFront: 'Voorkant tonen',
      flipBack: 'Achterkant tonen',
      testQR: 'QR-link testen',
    },
    card: {
      id: 'ID :',
      firstName: 'Voornaam :',
      lastName: 'Achternaam :',
      issuedOn: 'Uitgegeven op :',
      expiresOn: 'Vervalt op :',
      companyDesc: 'OOBO SA, erkende distributeur van TUPPERWARE-producten',
      legalText:
        'Onafhankelijke Tupperware-consulent — directe verkoop',
      brand: 'Brand',
      subtitle: 'OOBO SA, erkende distributeur van TUPPERWARE-producten',
    },
  },
}
