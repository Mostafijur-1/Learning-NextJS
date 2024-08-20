"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <main className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">HomePage</h1>
      </div>
      <button
        type="button" // Ensure it does not accidentally submit forms
        className="bg-transparent text-green-800 border border-green-400 p-2 rounded hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={handleClick}
      >
        Place Order
      </button>
    </main>
  );
}
