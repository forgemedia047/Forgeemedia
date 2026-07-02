import type { Metadata } from "next";
import NicheTemplate from "@/components/sections/NicheTemplate";

export const metadata: Metadata = {
  title: "Coach Shorts",
  description:
    "Authority-building short-form edits for coaches by Forgemedia — talking-head content designed to convert watch time into booked calls.",
};

export default function CoachesShortsPage() {
  return (
    <NicheTemplate
      eyebrow="Coach edits"
      title="Authority shorts built to book calls."
      description="Talking-head edits with punch-in cuts, on-screen text, and hooks engineered to turn watch time into strategy-call bookings."
      clips={[
        "Client Win Story",
        "Framework Breakdown",
        "Myth vs. Reality",
        "Quick Tip Clip",
        "Objection Response",
        "Behind-the-Offer",
      ]}
    />
  );
}
