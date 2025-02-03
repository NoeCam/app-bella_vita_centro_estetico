import Link from "next/link";
import "./globals.css";

const NotFound = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link href="/">
          <p className="text-blue-600 bg-indigo-100 m-3 p-3 rounded-md hover:text-blue-800  hover:bg-indigo-300">
            Página principal
          </p>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
