type AreaGroup = { county: string; locations: string[] };

const coverageByCounty: AreaGroup[] = [
  {
    county: "Essex",
    locations: [
      "Harlow",
      "Chelmsford",
      "Brentwood",
      "Basildon",
      "Colchester",
      "Epping",
      "Braintree",
      "Romford",
      "Southend-on-Sea",
      "Clacton-on-Sea",
    ],
  },
  {
    county: "Hertfordshire",
    locations: [
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
    ],
  },
  {
    county: "London",
    locations: [
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
    ],
  },
  {
    county: "Surrey",
    locations: [
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
    ],
  },
  {
    county: "Greater London",
    locations: [
      "Barnet",
      "Enfield",
      "Croydon",
      "Harrow",
      "Hillingdon",
      "Bromley",
      "Newham",
      "Ealing",
      "Wandsworth",
      "Richmond",
      "Sutton",
      "Greenwich",
    ],
  },
  {
    county: "Kent",
    locations: [
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
    ],
  },
  {
    county: "Cambridgeshire",
    locations: [
      "Cambridge",
      "Huntingdon",
      "St Neots",
      "Peterborough",
      "Ely",
      "Wisbech",
      "March",
      "Chatteris",
      "St Ives",
      "Soham",
    ],
  },
  {
    county: "Bedfordshire",
    locations: [
      "Bedford",
      "Luton",
      "Leighton Buzzard",
      "Central Bedfordshire",
      "Dunstable",
      "Biggleswade",
      "Sandy",
      "Ampthill",
      "Flitwick",
      "Kempston",
    ],
  },
  {
    county: "Buckinghamshire",
    locations: [
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
    ],
  },
  {
    county: "Suffolk",
    locations: [
      "Ipswich",
      "Bury St Edmunds",
      "Felixstowe",
      "Lowestoft",
      "Sudbury",
      "Newmarket",
      "Stowmarket",
      "Haverhill",
      "Beccles",
      "Mildenhall",
    ],
  },
];

export function AreasSeo() {
  return (
    <section id="full-locations" className="pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <header className="mb-6 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Full Locations Covered
          </h2>
          <p className="max-w-4xl text-sm leading-7 text-[var(--text-muted)] md:text-base md:leading-8">
            Jet Now Drainage covers London and surrounding counties, with local teams operating
            across the locations below.
          </p>
        </header>

        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] md:p-6">
          <div className="divide-y divide-[var(--border)]">
            {coverageByCounty.map((area) => (
              <div key={area.county} className="py-3 first:pt-0 last:pb-0">
                <p className="text-sm font-semibold text-foreground md:text-base">{area.county}</p>
                <p className="mt-1 text-sm leading-7 text-[var(--text-muted)]">{area.locations.join(", ")}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
