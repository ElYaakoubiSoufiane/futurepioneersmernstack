import React, { useEffect } from "react";
import ClubDesign from "./ClubDesign";
import TeamSection from "./TeamSection";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ClubDesign />
      <TeamSection />
    </>
  );
}
