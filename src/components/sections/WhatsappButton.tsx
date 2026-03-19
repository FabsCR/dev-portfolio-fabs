"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function WhatsappButton() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <FloatingWhatsApp
        phoneNumber="+50685684670"
        accountName="Fabián Fernández"
        avatar="/Photo.jpeg"
        statusMessage="Typically replies within an hour"
        chatMessage="Hi there! 👋 Let me know if you have any questions!"
        placeholder="Type a message..."
        notification
        notificationDelay={30}
        allowClickAway={false}
        allowEsc={true}
        darkMode={theme === "dark"}
      />
    </div>
  );
}
