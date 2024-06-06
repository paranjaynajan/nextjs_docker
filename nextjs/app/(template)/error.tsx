"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={() => reset()} className="border-2 border-[black] px-5 py-5">Try again</button>
    </div>
  );
}