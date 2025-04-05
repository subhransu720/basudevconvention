'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-8">An error occurred while loading this page.</p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try again
          </button>
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 