"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsappButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="+50685684670"
      accountName="Fabian Fernandez"
      avatar="https://i.imgur.com/INkjjLs.jpeg"
      statusMessage="Typically replies within an hour"
      chatMessage="Hi there! 👋 Let me know if you have any questions!"
      placeholder="Type a message..."
      notification
      notificationDelay={30}
      allowClickAway={false}
      allowEsc={true}
      className="whatsapp-button"
    />
  );
}
