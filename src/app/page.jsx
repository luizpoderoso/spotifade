"use client";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const result = useUser();

  return (
    <div className="container mx-auto">
      <h1>
        Welcome to SpotiFade
        {result.isSignedIn ? `, ${result.user?.firstName}` : ""}!
      </h1>
    </div>
  );
}
