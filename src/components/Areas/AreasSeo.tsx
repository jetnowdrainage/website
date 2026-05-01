"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

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
      "Billericay",
      "Southend-on-Sea",
      "Clacton-on-Sea",
      "Grays",
      "Witham",
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
      "Cheshunt",
      "Rickmansworth",
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
      "Holborn",
      "Shoreditch",
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
      "Esher",
      "Godalming",
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
      "Richmond upon Thames",
      "Sutton",
      "Greenwich",
      "Havering",
      "Redbridge",
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
      "Dover",
      "Faversham",
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
      "Whittlesey",
      "Ramsey",
    ],
  },
  {
    county: "Bedfordshire",
    locations: [
      "Bedford",
      "Luton",
      "Leighton Buzzard",
      "Dunstable",
      "Biggleswade",
      "Sandy",
      "Ampthill",
      "Flitwick",
      "Kempston",
      "Houghton Regis",
      "Shefford",
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
      "Gerrards Cross",
      "Olney",
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
      "Kesgrave",
      "Aldeburgh",
    ],
  },
];

export function AreasSeo() {
  const searchParams = useSearchParams();
  const [openCounties, setOpenCounties] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleExpandAll = () => {
      setOpenCounties(new Set(coverageByCounty.map((area) => area.county)));
    };

    window.addEventListener("expand-all-areas-locations", handleExpandAll);
    return () => window.removeEventListener("expand-all-areas-locations", handleExpandAll);
  }, []);

  useEffect(() => {
    if (searchParams.get("expandAll") === "1") {
      setOpenCounties(new Set(coverageByCounty.map((area) => area.county)));
    }
  }, [searchParams]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <section ref={sectionRef} id="full-locations" className="scroll-mt-24 pb-16 md:scroll-mt-28 md:pb-24">
      <div className={`mx-auto w-full max-w-7xl px-6 reveal-fade-up ${visibleClass}`}>
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
            {coverageByCounty.map((area) => {
              const isOpen = openCounties.has(area.county);
              const contentId = `locations-${area.county.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <div key={area.county} className="py-3 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() =>
                      setOpenCounties((prev) => {
                        const next = new Set(prev);
                        if (next.has(area.county)) {
                          next.delete(area.county);
                        } else {
                          next.add(area.county);
                        }
                        return next;
                      })
                    }
                    className="flex w-full items-center justify-between gap-3 text-left"
                  >
                    <span className="text-sm font-semibold text-foreground md:text-base">{area.county}</span>
                    <span aria-hidden="true" className="text-lg font-semibold text-brand-primary">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p id={contentId} className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                      {area.locations.join(", ")}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
