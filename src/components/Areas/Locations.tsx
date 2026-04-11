"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type CoverageArea = {
  id: string;
  county: string;
  towns: string[];
  svgIds: string[];
};

const greaterLondonSvgIds = [
  "GBBNE", // Barnet
  "GBBDG", // Barking and Dagenham
  "GBBEN", // Brent
  "GBBEX", // Bexley
  "GBBRY", // Bromley
  "GBCMD", // Camden
  "GBCRY", // Croydon
  "GBEAL", // Ealing
  "GBENF", // Enfield
  "GBGRE", // Greenwich
  "GBHCK", // Hackney
  "GBHAV", // Havering
  "GBHMF", // Hammersmith and Fulham
  "GBHIL", // Hillingdon
  "GBHNS", // Hounslow
  "GBHRW", // Harrow
  "GBHRY", // Haringey
  "GBISL", // Islington
  "GBKEC", // Kensington and Chelsea
  "GBKTT", // Kingston upon Thames
  "GBLBH", // Lambeth
  "GBLEW", // Lewisham
  "GBMRT", // Merton
  "GBNWM", // Newham
  "GBRDB", // Redbridge
  "GBRIC", // Richmond upon Thames
  "GBSTN", // Sutton
  "GBSWK", // Southwark
  "GBTWH", // Tower Hamlets
  "GBWFT", // Waltham Forest
  "GBWND", // Wandsworth
  "GBWSM", // Westminster
  "GBLND", // City of London
];

const londonCentralSvgIds = [
  "GBLND", // City of London
  "GBWSM", // Westminster
  "GBCMD", // Camden
  "GBISL", // Islington
  "GBKEC", // Kensington and Chelsea
  "GBHCK", // Hackney
  "GBTWH", // Tower Hamlets
  "GBSWK", // Southwark
  "GBLBH", // Lambeth
].filter((id) => greaterLondonSvgIds.includes(id));

const greaterLondonOuterSvgIds = greaterLondonSvgIds.filter(
  (id) => !londonCentralSvgIds.includes(id),
);

const coverageAreas: CoverageArea[] = [
  {
    id: "essex",
    county: "Essex",
    towns: ["Harlow", "Chelmsford", "Brentwood", "Basildon", "Colchester", "Epping"],
    svgIds: ["GBESS"],
  },
  {
    id: "hertfordshire",
    county: "Hertfordshire",
    towns: ["Bishop's Stortford", "Hertford", "Watford", "St Albans", "Stevenage", "Hemel Hempstead"],
    svgIds: ["GBHRT"],
  },
  {
    id: "london",
    county: "London",
    towns: ["Westminster", "Camden", "Islington", "Southwark", "Lambeth", "City of London"],
    svgIds: londonCentralSvgIds,
  },
  {
    id: "surrey",
    county: "Surrey",
    towns: ["Guildford", "Woking", "Epsom", "Redhill", "Reigate", "Camberley"],
    svgIds: ["GBSRY"],
  },
  {
    id: "greater-london",
    county: "Greater London",
    towns: ["Barnet", "Enfield", "Croydon", "Harrow", "Hillingdon", "Bromley", "Newham", "Ealing"],
    svgIds: greaterLondonOuterSvgIds,
  },
  {
    id: "kent",
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
    ],
    svgIds: ["GBKEN", "GBMDW", "GBTHR", "GBSOS"],
  },
  {
    id: "cambridgeshire",
    county: "Cambridgeshire",
    towns: ["Cambridge", "Huntingdon", "St Neots", "Peterborough", "Ely", "Wisbech"],
    svgIds: ["GBCAM"],
  },
  {
    id: "bedfordshire",
    county: "Bedfordshire",
    towns: ["Bedford", "Luton", "Leighton Buzzard", "Central Bedfordshire", "Dunstable", "Biggleswade"],
    svgIds: ["GBBDF", "GBLUT", "GBCBF"],
  },
  {
    id: "buckinghamshire",
    county: "Buckinghamshire",
    towns: ["Milton Keynes", "Aylesbury", "High Wycombe", "Marlow", "Beaconsfield", "Amersham"],
    svgIds: ["GBBKM", "GBMIK"],
  },
  {
    id: "suffolk",
    county: "Suffolk",
    towns: ["Ipswich", "Bury St Edmunds", "Felixstowe", "Lowestoft", "Sudbury", "Newmarket"],
    svgIds: ["GBSFK"],
  },
];

export function HomeLocations() {
  const pathname = usePathname();
  const [activeAreaId, setActiveAreaId] = useState<string>(coverageAreas[0].id);
  const [mapVersion, setMapVersion] = useState(0);
  const [mapReady, setMapReady] = useState<{ desktop: boolean; mobile: boolean }>({
    desktop: false,
    mobile: false,
  });
  const desktopMapObjectRef = useRef<HTMLObjectElement | null>(null);
  const mobileMapObjectRef = useRef<HTMLObjectElement | null>(null);
  const svgIdToAreaId = useMemo(() => {
    const map = new Map<string, string>();

    coverageAreas.forEach((area) => {
      area.svgIds.forEach((svgId) => {
        // Keep the first mapping to prioritise specific areas (for example London over Greater London).
        if (!map.has(svgId)) {
          map.set(svgId, area.id);
        }
      });
    });

    return map;
  }, []);

  const activeArea = useMemo(
    () => coverageAreas.find((area) => area.id === activeAreaId) ?? coverageAreas[0],
    [activeAreaId],
  );
  const mapSrc = useMemo(() => `/maps/gb-admin1.svg?v=${mapVersion}`, [mapVersion]);

  useEffect(() => {
    setMapReady({ desktop: false, mobile: false });
    setMapVersion((current) => current + 1);
  }, [pathname]);

  useEffect(() => {
    const objectEls = [desktopMapObjectRef.current, mobileMapObjectRef.current].filter(
      Boolean,
    ) as HTMLObjectElement[];
    if (objectEls.length === 0) return;

    const coverageIds = new Set(coverageAreas.flatMap((area) => area.svgIds));
    const eventCleanups: Array<() => void> = [];
    const loadCleanups: Array<() => void> = [];
    const retryTimeouts: Array<ReturnType<typeof setTimeout>> = [];

    const styleMap = (objectEl: HTMLObjectElement, interactive: boolean): boolean => {
      const svgDoc = objectEl.contentDocument;
      if (!svgDoc) return false;

      const svgEl = svgDoc.documentElement as unknown as SVGSVGElement;
      const featuresGroup = svgDoc.getElementById("features") as SVGGElement | null;
      const featurePaths = Array.from(svgDoc.querySelectorAll<SVGPathElement>("#features path"));
      const hasRequiredIds = ["GBESS", "GBHRT", "GBSRY"].every((id) => Boolean(svgDoc.getElementById(id)));
      if (!featuresGroup || featurePaths.length === 0 || !hasRequiredIds) {
        return false;
      }
      const boxes = featurePaths
        .map((path) => {
          try {
            return path.getBBox();
          } catch {
            return null;
          }
        })
        .filter((bbox): bbox is DOMRect => Boolean(bbox && bbox.width > 0 && bbox.height > 0));
      const coverageBoxes = featurePaths
        .filter((path) => coverageIds.has(path.id))
        .map((path) => {
          try {
            return path.getBBox();
          } catch {
            return null;
          }
        })
        .filter((bbox): bbox is DOMRect => Boolean(bbox && bbox.width > 0 && bbox.height > 0));

      if (boxes.length === 0) {
        return false;
      }

      const minX = Math.min(...boxes.map((bbox) => bbox.x));
      const minY = Math.min(...boxes.map((bbox) => bbox.y));
      const maxX = Math.max(...boxes.map((bbox) => bbox.x + bbox.width));
      const maxY = Math.max(...boxes.map((bbox) => bbox.y + bbox.height));

      const weighted = boxes.reduce(
        (acc, bbox) => {
          const area = bbox.width * bbox.height;
          const cx = bbox.x + bbox.width / 2;
          const cy = bbox.y + bbox.height / 2;

          acc.area += area;
          acc.x += cx * area;
          acc.y += cy * area;
          return acc;
        },
        { area: 0, x: 0, y: 0 },
      );

      const coverageWeighted = coverageBoxes.reduce(
        (acc, bbox) => {
          const area = bbox.width * bbox.height;
          const cx = bbox.x + bbox.width / 2;
          const cy = bbox.y + bbox.height / 2;

          acc.area += area;
          acc.x += cx * area;
          acc.y += cy * area;
          return acc;
        },
        { area: 0, x: 0, y: 0 },
      );

      const defaultCenterX = weighted.area > 0 ? weighted.x / weighted.area : (minX + maxX) / 2;
      const defaultCenterY = weighted.area > 0 ? weighted.y / weighted.area : (minY + maxY) / 2;
      const coverageCenterX =
        coverageWeighted.area > 0 ? coverageWeighted.x / coverageWeighted.area : defaultCenterX;
      const coverageCenterY =
        coverageWeighted.area > 0 ? coverageWeighted.y / coverageWeighted.area : defaultCenterY;

      const focusStrength = 0.16;
      const centerX = defaultCenterX + (coverageCenterX - defaultCenterX) * focusStrength;
      const centerY = defaultCenterY + (coverageCenterY - defaultCenterY) * focusStrength;

      const halfWidth = Math.max(centerX - minX, maxX - centerX);
      const halfHeight = Math.max(centerY - minY, maxY - centerY);
      const padding = 0.09;
      const zoomFactor = 0.62;
      const finalHalfWidth = halfWidth * (1 + padding) * zoomFactor;
      const finalHalfHeight = halfHeight * (1 + padding) * zoomFactor;

      svgEl.setAttribute(
        "viewBox",
        `${centerX - finalHalfWidth} ${centerY - finalHalfHeight} ${finalHalfWidth * 2} ${finalHalfHeight * 2}`,
      );
      svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");

      featurePaths.forEach((path) => {
        const pathId = path.id;
        path.style.fill = coverageIds.has(pathId) ? "#22c55e" : "#2b59c3";
        path.style.opacity = "0.9";
        path.style.stroke = "#ffffff";
        path.style.strokeWidth = "0.7";
      });

      const circles = svgDoc.querySelectorAll<SVGCircleElement>("circle");
      circles.forEach((circle) => {
        const circleId = circle.id;
        if (coverageIds.has(circleId)) {
          circle.style.opacity = "1";
          circle.style.fill = "#22c55e";
          circle.style.stroke = "#0f172a";
          circle.style.strokeWidth = "1";
        } else {
          circle.style.opacity = "0";
        }
      });

      activeArea.svgIds.forEach((svgId) => {
        const activePath = svgDoc.getElementById(svgId) as SVGPathElement | null;
        if (activePath) {
          activePath.style.fill = "#ea591b";
          activePath.style.opacity = "0.96";
        }

        const activeCircle = svgDoc.querySelector<SVGCircleElement>(`circle#${svgId}`);
        if (activeCircle) {
          activeCircle.style.opacity = "1";
          activeCircle.style.fill = "#ea591b";
          activeCircle.style.stroke = "#0f172a";
          activeCircle.style.strokeWidth = "1";
        }
      });

      if (!interactive) return true;

      const interactiveElements = Array.from(
        svgDoc.querySelectorAll<SVGPathElement | SVGCircleElement>("#features path, circle"),
      ).filter((el) => coverageIds.has(el.id));

      interactiveElements.forEach((el) => {
        const areaId = svgIdToAreaId.get(el.id);
        if (!areaId) return;

        const handleActivate = () => setActiveAreaId(areaId);
        el.style.cursor = "pointer";
        el.addEventListener("mouseenter", handleActivate);
        el.addEventListener("click", handleActivate);
        eventCleanups.push(() => {
          el.removeEventListener("mouseenter", handleActivate);
          el.removeEventListener("click", handleActivate);
        });
      });

      return true;
    };

    objectEls.forEach((objectEl, index) => {
      const mapKey = index === 0 ? "desktop" : "mobile";
      const isInteractive = index === 0;
      const applyStyles = () => {
        const didStyle = styleMap(objectEl, isInteractive);
        if (didStyle) {
          setMapReady((prev) => (prev[mapKey] ? prev : { ...prev, [mapKey]: true }));
        }
        return didStyle;
      };
      const runWithRetry = (attempt = 0) => {
        if (applyStyles()) return;
        if (attempt >= 24) return;

        const timeout = setTimeout(() => runWithRetry(attempt + 1), 90);
        retryTimeouts.push(timeout);
      };

      runWithRetry();

      const readyState = objectEl.contentDocument?.readyState;
      if (readyState !== "complete") {
        const handleLoad = () => runWithRetry();
        objectEl.addEventListener("load", handleLoad);
        loadCleanups.push(() => objectEl.removeEventListener("load", handleLoad));
      }
    });

    return () => {
      retryTimeouts.forEach((timeout) => clearTimeout(timeout));
      loadCleanups.forEach((cleanup) => cleanup());
      eventCleanups.forEach((cleanup) => cleanup());
    };
  }, [activeArea, pathname, svgIdToAreaId]);

  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            AREAS WE COVER
          </h2>

          <p className="text-base leading-8 text-slate-700">
            Jet Now Drainage supports residential and commercial properties across key counties in
            and around London with fast response, planned maintenance and specialist drainage
            solutions.
          </p>

          <div className="w-full max-w-[360px] rounded-xl border border-slate-200 bg-white p-3 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.28)] lg:hidden">
            <div className="relative aspect-square rounded-lg bg-[#eef2f8] p-2">
              <object
                ref={mobileMapObjectRef}
                type="image/svg+xml"
                data={mapSrc}
                aria-label="Interactive UK coverage map"
                className={`h-full w-full transition-opacity duration-150 ${
                  mapReady.mobile ? "opacity-100" : "opacity-0"
                }`}
              />
              {!mapReady.mobile && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[#eef2f8]">
                  <span className="animate-pulse text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Loading coverage map...
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {coverageAreas.map((area) => (
              <button
                key={area.id}
                type="button"
                onMouseEnter={() => setActiveAreaId(area.id)}
                onFocus={() => setActiveAreaId(area.id)}
                onClick={() => setActiveAreaId(area.id)}
                className={`flex items-center gap-2 rounded-md border px-3 py-2 text-left text-sm font-semibold transition ${
                  activeAreaId === area.id
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 bg-white text-slate-700 hover:border-brand-primary"
                }`}
              >
                <span className="text-emerald-500">✓</span>
                <span>{area.county}</span>
              </button>
            ))}
          </div>

          <p className="max-w-[58ch] text-base leading-8 text-slate-700">
            <span className="font-semibold text-slate-900">{activeArea.county} coverage:</span>{" "}
            {activeArea.towns.join(", ")}
          </p>

          <Link
            href="#full-locations"
            className="btn-outline-brand inline-flex px-8 py-3 text-sm font-bold uppercase tracking-wide transition"
          >
            Explore full locations and services
          </Link>
        </div>

        <div className="hidden w-full max-w-[540px] justify-self-center rounded-xl border border-slate-200 bg-white p-3 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.28)] lg:block lg:justify-self-end">
          <div className="relative aspect-square rounded-lg bg-[#eef2f8] p-2">
            <object
              ref={desktopMapObjectRef}
              type="image/svg+xml"
              data={mapSrc}
              aria-label="Interactive UK coverage map"
              className={`h-full w-full transition-opacity duration-150 ${
                mapReady.desktop ? "opacity-100" : "opacity-0"
              }`}
            />
            {!mapReady.desktop && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[#eef2f8]">
                <span className="animate-pulse text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Loading coverage map...
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
