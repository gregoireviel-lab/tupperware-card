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
    },
    card: {
      id: 'ID :',
      firstName: 'Prénom :',
      lastName: 'Nom :',
      issuedOn: 'Émise le :',
      expiresOn: 'Expire le :',
      companyDesc: 'OOBO SA, distributeur agréé des produits TUPPERWARE',
      legalText:
        'CHARGÉ DES VENTES À DOMICILE DE CONTENANTS ALIMENTAIRES, JOUETS ET ARTICLES MÉNAGERS. ADMINISTRATEUR DÉLÉGUÉ GEOFFROY DESTEXHE',
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
    },
    card: {
      id: 'ID :',
      firstName: 'Nome :',
      lastName: 'Cognome :',
      issuedOn: 'Rilasciata il :',
      expiresOn: 'Scade il :',
      companyDesc: 'OOBO SA, distributore autorizzato dei prodotti TUPPERWARE',
      legalText:
        'INCARICATO ALLE VENDITE A DOMICILIO DI CONTENITORI PER ALIMENTI, GIOCATTOLI E ARTICOLI CASALINGHI. AMMINISTRATORE DELEGATO GEOFFROY DESTEXHE',
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
    },
    card: {
      id: 'ID :',
      firstName: 'Vorname :',
      lastName: 'Nachname :',
      issuedOn: 'Ausgestellt am :',
      expiresOn: 'Läuft ab am :',
      companyDesc: 'OOBO SA, autorisierter Vertreiber von TUPPERWARE-Produkten',
      legalText:
        'VERKAUFSBEAUFTRAGTER FÜR HAUSTÜRVERKAUF. GESCHÄFTSFÜHRER GEOFFROY DESTEXHE',
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
    },
    card: {
      id: 'ID :',
      firstName: 'First Name :',
      lastName: 'Last Name :',
      issuedOn: 'Issued on :',
      expiresOn: 'Expires on :',
      companyDesc: 'OOBO SA, authorised distributor of TUPPERWARE products',
      legalText:
        'HOME SALES REPRESENTATIVE FOR FOOD CONTAINERS, TOYS AND HOUSEHOLD ITEMS. MANAGING DIRECTOR GEOFFROY DESTEXHE',
      brand: 'Brand',
      subtitle: 'OOBO SA, authorised distributor of TUPPERWARE products',
    },
  },
}
