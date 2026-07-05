/**
 * Renders a schema.org JSON-LD block. A tiny wrapper around the
 * `<script type="application/ld+json">` pattern already used in the root
 * layout, so every page adding structured data does it the same way.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
