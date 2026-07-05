export type AreaFaq = {
  question: string;
  answer: string;
};

export type AreaPageData = {
  /** URL slug, e.g. "greater-london" for /areas-we-cover/greater-london. */
  slug: string;
  /** Display name shown in headings, breadcrumbs and the coverage accordion. */
  county: string;
  towns: string[];
  heroImage: string;
  heroImageAlt: string;
  /** Short, single-sentence summary shown directly under the H1 in the hero. */
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  /** Two hand-written paragraphs referencing real local geography and drainage context, not spun template text. */
  intro: string[];
  faqs: AreaFaq[];
};

/**
 * Single source of truth for every area/coverage page. Mirrors the intent of
 * `services-data.ts` from SEOPlan.md Phase 4: `AreasSeo.tsx`'s "Full
 * Locations Covered" accordion, `sitemap.ts` and the individual
 * `/areas-we-cover/[area]` pages all read from this one list, so the town
 * lists and page copy can never drift apart. Content is written per-county
 * with genuine local detail (geography, housing stock, coastal vs fenland
 * drainage behaviour) rather than one generic paragraph with the county name
 * swapped in, both because that reads better and because near-duplicate
 * content across ten pages would work against the SEO goal this was built
 * for.
 */
export const areas: AreaPageData[] = [
  {
    slug: "essex",
    county: "Essex",
    towns: [
      "Harlow",
      "Chelmsford",
      "Brentwood",
      "Basildon",
      "Colchester",
      "Epping",
      "Braintree",
      "Billericay",
      "Southend-on-Sea",
      "Clacton-on-Sea",
      "Grays",
      "Witham",
    ],
    heroImage: "/JetNow/NewImages/JN-ExternalUnblocks.jpg",
    heroImageAlt: "Jet Now Drainage engineer carrying out external drainage work in Essex",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across Essex, covering Chelmsford, Colchester, Basildon, Harlow, Southend-on-Sea and every town in between.",
    metaTitle: "Drainage Services in Essex | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across Essex, including Chelmsford, Colchester, Basildon, Harlow and Southend-on-Sea. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Essex is one of Jet Now Drainage's core coverage areas, spanning historic market towns such as Chelmsford and Colchester, commuter hubs like Harlow, Brentwood and Billericay, and coastal towns including Southend-on-Sea and Clacton-on-Sea. The county's mix of older clay drainage in its town centres and newer housing around Basildon and Witham means we regularly deal with everything from root ingress in mature Victorian pipework to blocked gullies on modern estates.",
      "Our engineers know the local network well, from the tidal stretches of the Thames Estuary around Grays and Southend-on-Sea, where surface water drainage works harder during storm surges and high tides, to the flatter arable land further inland around Braintree and Epping, where field run-off can silt up external drains after heavy rain. Whatever the cause, we aim to be on site across Essex within 1-2 hours, day or night.",
    ],
    faqs: [
      {
        question: "Do you cover the whole of Essex, or just specific towns?",
        answer:
          "We cover Essex in full, including Chelmsford, Colchester, Harlow, Basildon, Southend-on-Sea, Brentwood, Braintree, Billericay, Clacton-on-Sea, Grays and Witham, along with the surrounding villages in between. If you're unsure whether we reach your postcode, give us a call and we'll confirm straight away.",
      },
      {
        question: "How quickly can you attend a drainage emergency in Essex?",
        answer:
          "We operate 24 hours a day, 7 days a week across Essex and aim to attend emergency call-outs within 1-2 hours, whether that's a blocked drain in Chelmsford or a collapsed pipe out towards the coast at Clacton-on-Sea.",
      },
      {
        question: "Are Essex properties prone to any particular drainage problems?",
        answer:
          "Older properties in towns like Colchester and Braintree often have ageing clay drain runs that are more prone to root ingress and cracking, while coastal and low-lying areas around Southend-on-Sea and Grays can see more surface water and gully blockages during heavy rain or high tides. Our engineers carry equipment suited to both scenarios.",
      },
    ],
  },
  {
    slug: "hertfordshire",
    county: "Hertfordshire",
    towns: [
      "Bishop's Stortford",
      "Hertford",
      "Watford",
      "St Albans",
      "Stevenage",
      "Hemel Hempstead",
      "Hitchin",
      "Welwyn Garden City",
      "Borehamwood",
      "Harpenden",
      "Cheshunt",
      "Rickmansworth",
    ],
    heroImage: "/JetNow/NewImages/JN-InternalUnblocks.jpg",
    heroImageAlt: "Jet Now Drainage engineer clearing an internal drain blockage in Hertfordshire",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across Hertfordshire, covering St Albans, Watford, Hertford, Stevenage and every town in between.",
    metaTitle: "Drainage Services in Hertfordshire | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across Hertfordshire, including St Albans, Watford, Hertford, Stevenage and Hemel Hempstead. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Hertfordshire combines cathedral cities and market towns such as St Albans and Hertford with well-established commuter towns including Watford, Stevenage and Hemel Hempstead. Much of the county's older housing stock, particularly in St Albans and Harpenden, sits on original Victorian and Edwardian drainage that was never designed for modern water use, which is a common cause of slow-draining or recurring blockages.",
      "In the new town developments around Stevenage, Hemel Hempstead and Welwyn Garden City, drainage runs are generally more modern, but shared or combined systems on larger estates can still back up when one section blocks. From Bishop's Stortford in the east to Rickmansworth in the west, our engineers carry CCTV survey equipment and jetting kit to identify the exact cause first, rather than guessing at a fix.",
    ],
    faqs: [
      {
        question: "Which Hertfordshire towns do you cover?",
        answer:
          "We cover Hertfordshire in full, including St Albans, Watford, Hertford, Stevenage, Hemel Hempstead, Bishop's Stortford, Hitchin, Welwyn Garden City, Borehamwood, Harpenden, Cheshunt and Rickmansworth.",
      },
      {
        question: "Do you deal with older Victorian drainage systems common in towns like St Albans?",
        answer:
          "Yes. Ageing clay drainage is common in Hertfordshire's older towns, and our engineers regularly clear root ingress, sagging pipe runs and cracked joints in this type of pipework using drain rods, mechanical clearance tools and CCTV surveys.",
      },
      {
        question: "Can you attend the same day for a blocked drain in Hertfordshire?",
        answer:
          "In most cases, yes. We aim to attend within 1-2 hours across Hertfordshire and operate 24/7, so same-day and emergency out-of-hours call-outs are both available.",
      },
    ],
  },
  {
    slug: "london",
    county: "London",
    towns: [
      "Westminster",
      "Camden",
      "Islington",
      "Southwark",
      "Lambeth",
      "City of London",
      "Chelsea",
      "Kensington",
      "Hackney",
      "Tower Hamlets",
      "Holborn",
      "Shoreditch",
    ],
    heroImage: "/JetNow/NewImages/JN-CCTVDrainSurveys.jpg",
    heroImageAlt: "Jet Now Drainage engineer carrying out a CCTV drain survey in central London",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across central London, covering Westminster, Camden, Islington, Southwark and every borough in between.",
    metaTitle: "Drainage Services in Central London | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across central London, including Westminster, Camden, Islington, Southwark and Chelsea. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Central London, from Westminster and the City of London through to Camden, Islington, Southwark and Lambeth, is home to some of the oldest and most densely packed drainage networks we work on. Period conversions and terraced housing in areas like Chelsea, Kensington and Holborn often share drain runs with neighbouring properties, which is why establishing exactly whose responsibility a blockage is can be as important as clearing it.",
      "Access is often the biggest challenge on central London call-outs, whether that's a basement flat in Shoreditch, a converted townhouse in Islington, or a commercial unit in Tower Hamlets. Our engineers are used to working within tight urban sites, on-street parking restrictions and shared building access, and carry compact CCTV and jetting equipment suited to this kind of property.",
    ],
    faqs: [
      {
        question: "Do you cover central London boroughs like Westminster and Camden?",
        answer:
          "Yes, we cover central London in full, including Westminster, Camden, Islington, Southwark, Lambeth, the City of London, Chelsea, Kensington, Hackney, Tower Hamlets, Holborn and Shoreditch.",
      },
      {
        question: "Who is responsible for a shared drain in a London terrace or conversion?",
        answer:
          "Since the 2011 transfer of private sewers, any drain shared between two or more properties, or one that runs beyond your boundary, is usually the responsibility of the local water company, while any section serving only your property remains yours. Our engineers can help establish which applies before starting work.",
      },
      {
        question: "Can you access flats and basement properties in central London?",
        answer:
          "Yes, we regularly work on flats, basement conversions and commercial units across central London and carry equipment sized for tighter access points and shared communal drainage.",
      },
    ],
  },
  {
    slug: "surrey",
    county: "Surrey",
    towns: [
      "Guildford",
      "Woking",
      "Epsom",
      "Redhill",
      "Reigate",
      "Camberley",
      "Farnham",
      "Leatherhead",
      "Dorking",
      "Staines-upon-Thames",
      "Esher",
      "Godalming",
    ],
    heroImage: "/JetNow/NewImages/highpressurejetting.jpeg",
    heroImageAlt: "Jet Now Drainage engineer high-pressure jetting a drain in Surrey",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across Surrey, covering Guildford, Woking, Redhill, Reigate and every town in between.",
    metaTitle: "Drainage Services in Surrey | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across Surrey, including Guildford, Woking, Redhill, Reigate and Camberley. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Surrey's commuter towns, from Guildford and Woking to Esher and Leatherhead, sit alongside more rural pockets around Dorking, Farnham and Godalming, where larger properties on the edge of the Surrey Hills and Green Belt sometimes still rely on private drainage such as septic tanks or soakaways rather than mains sewers.",
      "In busier towns like Redhill, Reigate, Camberley and Staines-upon-Thames, drainage issues are more often down to established mains connections struggling with tree root ingress, fat and grease build-up from nearby high streets, or ageing pipework beneath older housing. Wherever your property sits in Surrey, we can survey the system with CCTV to confirm the cause before recommending any work.",
    ],
    faqs: [
      {
        question: "Do you cover rural parts of Surrey as well as the main towns?",
        answer:
          "Yes. Alongside Guildford, Woking, Redhill, Reigate, Camberley and Staines-upon-Thames, we also cover more rural areas around Dorking, Farnham, Godalming, Leatherhead and Esher, including properties with private drainage systems.",
      },
      {
        question: "Do you work on septic tanks and private drainage systems in Surrey?",
        answer:
          "Yes, we service, empty and repair septic tanks, cesspits and private drainage systems, which are more common on rural and semi-rural properties around the edges of Surrey.",
      },
      {
        question: "How fast can you respond to a drainage emergency in Surrey?",
        answer:
          "We aim to attend emergency call-outs across Surrey within 1-2 hours, 24 hours a day, whether you're in a town centre like Guildford or a more rural property near Dorking or Godalming.",
      },
    ],
  },
  {
    slug: "greater-london",
    county: "Greater London",
    towns: [
      "Barnet",
      "Enfield",
      "Croydon",
      "Harrow",
      "Hillingdon",
      "Bromley",
      "Newham",
      "Ealing",
      "Wandsworth",
      "Richmond upon Thames",
      "Sutton",
      "Greenwich",
      "Havering",
      "Redbridge",
    ],
    heroImage: "/JetNow/JN%20-%20HomeServicesImg.jpeg",
    heroImageAlt: "Jet Now Drainage engineer on a residential drainage call-out in outer London",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across outer London, covering Barnet, Croydon, Harrow, Bromley and every borough in between.",
    metaTitle: "Drainage Services in Greater London | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across outer London, including Barnet, Croydon, Harrow, Bromley and Richmond upon Thames. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Across Greater London's outer boroughs, from Barnet and Enfield in the north to Croydon, Bromley and Sutton in the south, drainage systems tend to be a mix of interwar and post-war housing, with more modern developments in areas like Havering and Redbridge. Semi-detached and terraced housing built between the 1920s and 1960s is common across boroughs such as Harrow, Ealing and Hillingdon, and often has original clay or early plastic drainage that benefits from periodic CCTV checks.",
      "Boroughs closer to the Thames, including Richmond upon Thames, Wandsworth, Greenwich and Newham, can also see higher water tables and surface water drainage challenges during periods of heavy rain. Our engineers cover the full outer London area and carry the same jetting, rodding and CCTV survey equipment used across our central London and county work.",
    ],
    faqs: [
      {
        question: "Which outer London boroughs do you cover?",
        answer:
          "We cover Greater London's outer boroughs in full, including Barnet, Enfield, Croydon, Harrow, Hillingdon, Bromley, Newham, Ealing, Wandsworth, Richmond upon Thames, Sutton, Greenwich, Havering and Redbridge.",
      },
      {
        question: "Are older semi-detached homes in outer London prone to drainage issues?",
        answer:
          "Interwar and post-war housing common across boroughs like Harrow, Ealing and Hillingdon often still has its original drainage, which can be more prone to blockages, root ingress and cracked joints over time. A CCTV survey is the quickest way to confirm the condition of the pipework.",
      },
      {
        question: "Do you offer emergency drainage call-outs in outer London?",
        answer: "Yes, we operate 24/7 across all of outer London's boroughs and aim to attend emergency call-outs within 1-2 hours.",
      },
    ],
  },
  {
    slug: "kent",
    county: "Kent",
    towns: [
      "Dartford",
      "Gravesend",
      "Maidstone",
      "Sevenoaks",
      "Tunbridge Wells",
      "Medway",
      "Ashford",
      "Canterbury",
      "Tonbridge",
      "Sittingbourne",
      "Folkestone",
      "Rochester",
      "Dover",
      "Faversham",
    ],
    heroImage: "/JetNow/JN%20-%20Repairs%20Relining.jpeg",
    heroImageAlt: "Jet Now Drainage engineer carrying out a drain repair in Kent",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across Kent, covering Maidstone, Canterbury, Rochester, Dartford and every town in between.",
    metaTitle: "Drainage Services in Kent | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across Kent, including Maidstone, Canterbury, Rochester, Dartford and Tunbridge Wells. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Known as the Garden of England, Kent stretches from the commuter towns of Dartford, Gravesend and Sevenoaks close to the M25, through the county town of Maidstone and the historic cities of Rochester and Canterbury, to the coastal towns of Folkestone and Dover. This range means our engineers deal with everything from Victorian terraces with ageing clay drainage in Rochester and Canterbury to newer estate housing around Ashford and Sittingbourne.",
      "Coastal towns including Folkestone, Dover and Faversham can face additional pressure on external drainage during storms and high tides, while inland towns such as Tunbridge Wells, Tonbridge and the Medway towns more often see blockages from tree root ingress or general wear in older pipework. We aim to reach any Kent postcode within 1-2 hours of your call.",
    ],
    faqs: [
      {
        question: "Do you cover the whole of Kent, including the coast?",
        answer:
          "Yes, we cover Kent in full, from Dartford, Gravesend and Sevenoaks in the west to the coastal towns of Folkestone and Dover in the east, including Maidstone, Canterbury, Rochester, Medway, Ashford, Tunbridge Wells, Tonbridge, Sittingbourne and Faversham.",
      },
      {
        question: "Do coastal Kent properties have different drainage problems?",
        answer:
          "Coastal towns like Folkestone, Dover and Faversham can see extra strain on external drainage during storms and high tides, leading to more frequent gully and surface water blockages, which our engineers are well equipped to clear.",
      },
      {
        question: "How quickly can you attend an emergency drainage call-out in Kent?",
        answer: "We aim to be on site within 1-2 hours anywhere in Kent and operate 24 hours a day, 7 days a week for emergency call-outs.",
      },
    ],
  },
  {
    slug: "cambridgeshire",
    county: "Cambridgeshire",
    towns: ["Cambridge", "Huntingdon", "St Neots", "Peterborough", "Ely", "Wisbech", "March", "Chatteris", "St Ives", "Soham", "Whittlesey", "Ramsey"],
    heroImage: "/JetNow/JN%20-%20DrainDescaling2.jpeg",
    heroImageAlt: "Jet Now Drainage engineer descaling a drain in Cambridgeshire",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across Cambridgeshire, covering Cambridge, Peterborough, Huntingdon, Ely and every town in between.",
    metaTitle: "Drainage Services in Cambridgeshire | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across Cambridgeshire, including Cambridge, Peterborough, Huntingdon, Ely and St Neots. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Cambridgeshire is largely flat fenland, and towns such as Ely, Wisbech, March, Chatteris, Whittlesey and Ramsey sit on some of the lowest-lying, highest water table land in the country. This makes external drainage, land drains and soakaways work considerably harder than in most other counties we cover, and standing water after heavy rain is a common call-out we attend.",
      "In the city of Cambridge and busier towns like Huntingdon, St Neots, Peterborough, St Ives and Soham, drainage issues are more typically down to established mains connections, older student and rental housing, or blockages from fat, oil and grease in food and hospitality premises. Whatever the cause, our engineers bring CCTV survey and jetting equipment suited to both fenland and urban drainage systems.",
    ],
    faqs: [
      {
        question: "Do you cover the fenland towns as well as Cambridge itself?",
        answer: "Yes, alongside Cambridge, we cover Huntingdon, St Neots, Peterborough, Ely, Wisbech, March, Chatteris, St Ives, Soham, Whittlesey and Ramsey.",
      },
      {
        question: "Why do fenland areas in Cambridgeshire get more standing water?",
        answer:
          "Much of Cambridgeshire's fenland sits on low-lying land with a naturally high water table, which means external drains, gullies and soakaways have less capacity to cope with heavy rainfall than in higher-lying counties, making standing water and slow-draining gullies more common.",
      },
      {
        question: "Can you attend rental and student properties in Cambridge quickly?",
        answer:
          "Yes, we regularly attend rental and multi-occupancy properties across Cambridge and the surrounding towns, and aim to be on site within 1-2 hours for both routine and emergency call-outs.",
      },
    ],
  },
  {
    slug: "bedfordshire",
    county: "Bedfordshire",
    towns: ["Bedford", "Luton", "Leighton Buzzard", "Dunstable", "Biggleswade", "Sandy", "Ampthill", "Flitwick", "Kempston", "Houghton Regis", "Shefford"],
    heroImage: "/JetNow/NewImages/JN-TankerUnblocks.jpeg",
    heroImageAlt: "Jet Now Drainage tanker unit attending a drainage job in Bedfordshire",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across Bedfordshire, covering Bedford, Luton, Dunstable, Leighton Buzzard and every town in between.",
    metaTitle: "Drainage Services in Bedfordshire | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across Bedfordshire, including Bedford, Luton, Dunstable, Leighton Buzzard and Biggleswade. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Bedfordshire's mix of larger towns, including Bedford, Luton and Dunstable, and smaller market towns such as Leighton Buzzard, Biggleswade, Ampthill and Shefford, means our engineers see a broad range of drainage systems, from Victorian and interwar terraces to newer estates around Houghton Regis and Flitwick.",
      "Luton and Dunstable's denser housing and commercial premises tend to see more grease and fat-related blockages from food outlets, while the more rural market towns further out, including Sandy and Kempston, more commonly deal with tree root ingress and gradual pipe wear in older drainage runs. Across the county, we aim to attend call-outs within 1-2 hours, day or night.",
    ],
    faqs: [
      {
        question: "Which Bedfordshire towns do you cover?",
        answer: "We cover Bedfordshire in full, including Bedford, Luton, Leighton Buzzard, Dunstable, Biggleswade, Sandy, Ampthill, Flitwick, Kempston, Houghton Regis and Shefford.",
      },
      {
        question: "Do you clear grease and fat blockages from commercial premises in Luton and Dunstable?",
        answer:
          "Yes, we regularly clear fat, oil and grease build-up from commercial kitchens and food premises in Luton, Dunstable and the surrounding towns, using high-pressure jetting to clear the full length of the affected run.",
      },
      {
        question: "Can you attend an emergency drainage call-out in Bedfordshire out of hours?",
        answer: "Yes, we operate 24 hours a day, 7 days a week across Bedfordshire and aim to attend emergency call-outs within 1-2 hours.",
      },
    ],
  },
  {
    slug: "buckinghamshire",
    county: "Buckinghamshire",
    towns: [
      "Milton Keynes",
      "Aylesbury",
      "High Wycombe",
      "Marlow",
      "Beaconsfield",
      "Amersham",
      "Chesham",
      "Buckingham",
      "Princes Risborough",
      "Wendover",
      "Gerrards Cross",
      "Olney",
    ],
    heroImage: "/JetNow/HomeDrainServices.jpg",
    heroImageAlt: "Jet Now Drainage engineer carrying out drainage services in Buckinghamshire",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across Buckinghamshire, covering Milton Keynes, Aylesbury, High Wycombe, Beaconsfield and every town in between.",
    metaTitle: "Drainage Services in Buckinghamshire | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across Buckinghamshire, including Milton Keynes, Aylesbury, High Wycombe and Beaconsfield. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Buckinghamshire spans the modern grid-planned city of Milton Keynes, the county town of Aylesbury and High Wycombe in the Chiltern Hills, through to smaller towns such as Marlow, Beaconsfield, Amersham, Chesham and Buckingham. Milton Keynes' newer housing generally has modern drainage, though shared systems on larger estates can still back up when one section blocks.",
      "In the Chiltern villages and market towns, including Princes Risborough, Wendover, Gerrards Cross and Olney, older and rural properties sometimes rely on private drainage, septic tanks or soakaways rather than mains sewers, and can be more affected by tree root ingress given the wooded surroundings. Our engineers carry equipment for both modern estate drainage and older, private systems across the county.",
    ],
    faqs: [
      {
        question: "Do you cover Milton Keynes as well as the surrounding market towns?",
        answer: "Yes, we cover Milton Keynes, Aylesbury, High Wycombe, Marlow, Beaconsfield, Amersham, Chesham, Buckingham, Princes Risborough, Wendover, Gerrards Cross and Olney.",
      },
      {
        question: "Do you service septic tanks in rural Buckinghamshire?",
        answer:
          "Yes, many rural and Chiltern village properties in Buckinghamshire rely on septic tanks or private drainage rather than mains sewers, and we offer emptying, servicing and repair for these systems.",
      },
      {
        question: "How quickly can you attend a blocked drain in Buckinghamshire?",
        answer: "We aim to attend call-outs across Buckinghamshire within 1-2 hours and are available 24 hours a day, 7 days a week.",
      },
    ],
  },
  {
    slug: "suffolk",
    county: "Suffolk",
    towns: ["Ipswich", "Bury St Edmunds", "Felixstowe", "Lowestoft", "Sudbury", "Newmarket", "Stowmarket", "Haverhill", "Beccles", "Mildenhall", "Kesgrave", "Aldeburgh"],
    heroImage: "/JetNow/NewImages/JN-HomeHero.jpg",
    heroImageAlt: "Jet Now Drainage engineer on a drainage call-out in Suffolk",
    heroDescription:
      "We specialise in fast, fixed-price drainage services across Suffolk, covering Ipswich, Bury St Edmunds, Felixstowe, Lowestoft and every town in between.",
    metaTitle: "Drainage Services in Suffolk | Jet Now Drainage",
    metaDescription:
      "Fast, fixed-price drainage services across Suffolk, including Ipswich, Bury St Edmunds, Felixstowe and Lowestoft. 24/7 call-outs, on site within 1-2 hours.",
    intro: [
      "Suffolk combines the county town of Ipswich and the historic market town of Bury St Edmunds with the busy port of Felixstowe, the coastal towns of Lowestoft and Aldeburgh, and smaller towns such as Sudbury, Newmarket, Stowmarket, Haverhill, Beccles, Mildenhall and Kesgrave.",
      "Coastal and estuary towns like Felixstowe, Lowestoft and Aldeburgh can see additional pressure on external drainage during storms and high tides, while inland market towns typically deal with more conventional blockages from ageing clay pipework or tree root ingress. Whether you're in Ipswich, out towards Newmarket, or on the coast at Felixstowe, we aim to be on site within 1-2 hours.",
    ],
    faqs: [
      {
        question: "Do you cover coastal Suffolk towns like Felixstowe and Lowestoft?",
        answer:
          "Yes, we cover the whole of Suffolk, including Ipswich, Bury St Edmunds, Felixstowe, Lowestoft, Sudbury, Newmarket, Stowmarket, Haverhill, Beccles, Mildenhall, Kesgrave and Aldeburgh.",
      },
      {
        question: "Are coastal Suffolk properties more prone to drainage problems?",
        answer:
          "Coastal and estuary towns such as Felixstowe, Lowestoft and Aldeburgh can see extra strain on external drainage during storms and high tides, which is something our engineers regularly attend to in this part of the county.",
      },
      {
        question: "How fast can you respond to a call-out in Suffolk?",
        answer: "We aim to attend emergency call-outs across Suffolk within 1-2 hours, 24 hours a day, 7 days a week.",
      },
    ],
  },
];

export function getAreaBySlug(slug: string): AreaPageData | undefined {
  return areas.find((area) => area.slug === slug);
}
