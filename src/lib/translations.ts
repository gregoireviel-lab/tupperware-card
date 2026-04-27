export type Locale = 'fr' | 'it' | 'de' | 'en'

export interface Translation {
  ui: {
    title: string
    preview: string
    download: string
    print: string
    langSwitcher: string
  }
  form: {
    id: string
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
      print: 'Imprimer la feuille A4 (10 cartes)',
      langSwitcher: 'Langue',
    },
    form: {
      id: 'Identifiant',
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
        'Chargé des ventes à domicile de contenants alimentaires, jouets et articles ménagers',
      brand: 'Brand',
      subtitle: 'OOBO SA, distributeur agréé des produits TUPPERWARE',
    },
  },
  it: {
    ui: {
      title: 'Generatore di carte Tupperware',
      preview: 'Anteprima',
      download: 'Scarica PDF',
      print: 'Stampa foglio A4 (10 carte)',
      langSwitcher: 'Lingua',
    },
    form: {
      id: 'Identificativo',
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
        'Incaricato alle vendite a domicilio di contenitori per alimenti, giocattoli e articoli casalinghi',
      brand: 'Brand',
      subtitle: 'OOBO SA, distributore autorizzato dei prodotti TUPPERWARE',
    },
  },
  de: {
    ui: {
      title: 'Tupperware Karten-Generator',
      preview: 'Vorschau',
      download: 'PDF herunterladen',
      print: 'A4-Blatt drucken (10 Karten)',
      langSwitcher: 'Sprache',
    },
    form: {
      id: 'Kennung',
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
        'Verkaufsbeauftragter für Haustürverkauf von Lebensmittelbehältern, Spielzeug und Haushaltswaren',
      brand: 'Brand',
      subtitle: 'OOBO SA, autorisierter Vertreiber von TUPPERWARE-Produkten',
    },
  },
  en: {
    ui: {
      title: 'Tupperware Card Generator',
      preview: 'Preview',
      download: 'Download PDF',
      print: 'Print A4 sheet (10 cards)',
      langSwitcher: 'Language',
    },
    form: {
      id: 'ID',
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
        'Home sales representative for food containers, toys and household items',
      brand: 'Brand',
      subtitle: 'OOBO SA, authorised distributor of TUPPERWARE products',
    },
  },
}
