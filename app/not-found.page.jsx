import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link href="/">Go Back Home</Link>
      </div>
    </div>
  );
}
