import Image from "next/image";
import { business } from "@/lib/site-config";

export function FloatingWhatsappButton() {
  return (
    <a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jet Now Drainage on WhatsApp"
      className="whatsapp-horizontal-shake fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center transition duration-200 hover:-translate-y-1 hover:scale-105"
    >
      <Image src="/WhatsApp%20(1).svg" alt="" width={64} height={64} className="h-16 w-16" />
    </a>
  );
}
