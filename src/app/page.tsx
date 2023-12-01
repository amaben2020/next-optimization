"use client";
import useDataFetch from "@/hooks/useDataFetch";

export default function Home() {
  const { state } = useDataFetch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(state)}
    </main>
  );
}
