"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function WhatsappButton() {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent rendering until client-side and translations are ready
  if (!isClient || !ready) return null;

  return (
    <FloatingWhatsApp
      phoneNumber="+50685684670"
      accountName="Fabian Fernandez"
      avatar="https://i.imgur.com/INkjjLs.jpeg"
      statusMessage={t("whatsapp.statusMessage")}
      chatMessage={t("whatsapp.chatMessage")}
      placeholder={t("whatsapp.placeholder")}
      notification
      notificationDelay={30}
      allowClickAway={false}
      allowEsc={true}
      className="whatsapp-button"
    />
  );
}