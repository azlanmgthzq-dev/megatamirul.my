import type { Metadata } from "next";
import EngineeringSharingSection from "@/components/engineering-sharing/EngineeringSharingSection";

export const metadata: Metadata = {
  title: "Engineering Sharing | Megat Amirul",
  description:
    "Notes on how Megat Amirul thinks about building software, grounded in real problems solved across data, security, networking, and web performance.",
};

export default function EngineeringSharingPage() {
  return <EngineeringSharingSection />;
}
