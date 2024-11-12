"use client";

import "../i18n";
import { useEffect, useState } from "react";
import React, { Suspense } from 'react';
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import WhatsappButton from "../components/WhatsappButton";
import { Certifications } from "../components/Certifications";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex flex-col gap-6">
        <About />
        <Projects />
        <Certifications />
        <Contact />
        <WhatsappButton />
      </main>
    </Suspense>
  );
}
