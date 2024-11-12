"use client";

import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface Certification {
  title: string;
  link: string;
}

const certifications: Certification[] = [
  { title: "certifications.efSet", link: "https://cert.efset.org/QnGMAj" },
  { title: "certifications.scrumFundamentals", link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=921105" },
  { title: "certifications.ccnaIntroNetworks", link: "https://www.credly.com/badges/1f46c465-e158-4b0d-bb8a-7f2051432a57?source=linked_in_profile" },
  { title: "certifications.ccnaSwitchingRouting", link: "https://www.credly.com/badges/826147a2-fa20-4f44-82b3-8cead744d20c/linked_in_profile" },
  { title: "certifications.introCybersecurity", link: "https://www.credly.com/badges/33234c56-7a7d-49cc-9509-76137ebdaf74?source=linked_in_profile" },
  { title: "certifications.cyberFundamentals", link: "https://www.credly.com/badges/1802feae-badc-4cdc-ba9d-97173f560aa9/linked_in_profile" },
  { title: "certifications.cyberEssentials", link: "https://www.credly.com/badges/ed4dde3e-4c3a-4522-a83e-43dc2020144d?source=linked_in_profile" },
  { title: "certifications.introIoT", link: "https://www.credly.com/badges/b1412e71-3573-4f12-b6e3-385f859c2e48?source=linked_in_profile" },
  { title: "certifications.networkingEssentials", link: "https://www.credly.com/badges/c78c0009-35c4-4c9e-ae60-b3c255fbaf12?source=linked_in_profile" },
  { title: "certifications.pythonEssentials", link: "https://www.credly.com/badges/76b05d4f-c483-436c-b9b2-1a78dc78c4e3/linked_in_profile" },
  { title: "certifications.dataScienceFoundations", link: "https://www.credly.com/badges/adb67730-7477-4e79-99b6-8841c6ccf71c/linked_in_profile" },
  { title: "certifications.dataScienceTools", link: "https://www.credly.com/badges/2a598409-56bf-4a06-ad90-1ed4fabfd11b/linked_in_profile" },
  { title: "certifications.c3sa", link: "https://www.credential.net/e0e1a022-8b21-441a-aacf-b677359243f4#acc.Yrh0RC4t" }
];

export function Certifications() {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag to avoid SSR mismatches
    setIsClient(true);
  }, []);

  // Avoid rendering until on the client side and translations are loaded
  if (!isClient || !ready) return null;

  return (
    <section id="certifications" className="my-20 px-6 sm:px-8 lg:px-12 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
        {t("certifications.title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {t(certification.title)}
            </h3>
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 flex items-center justify-center gap-2 font-medium transition duration-300 ease-in-out"
            >
              {t("certifications.viewCertificate")} <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}