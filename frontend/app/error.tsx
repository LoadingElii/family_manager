"use client";

import { Spinner } from "@heroui/spinner";
import { div } from "framer-motion/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  reset = () => router.push("/dashboard/home");
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-row justify-center h-screen">
      <div className="grid grid-cols-1 content-center">
        <Spinner size="md" color="primary" variant="spinner" />
        <h2 className="pb-2 text-xl font-semibold">Something went wrong!</h2>
        <button
          aria-label="try again button"
          className="bg-blue-600 hover:bg-blue-300 w-24 justify-self-center rounded-md"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
