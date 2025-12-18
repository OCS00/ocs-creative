"use client";

import { NextStudio } from "next-sanity/studio";
// DİKKAT: Aşağıdaki satıra bir tane daha ../ ekledik
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}