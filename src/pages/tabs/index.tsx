import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Tabs() {
  const router = useRouter();

  useEffect(() => {
    router.push("/tabs/tab1");
  }, [router]);

  return;
}
