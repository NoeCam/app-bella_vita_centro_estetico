import Link from "next/link";
import "./globals.css";

const NotFound = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-10">404</h1>
        <h2>Page not found</h2>
        <Link href="/">
          <p className="hover:bg-slate-300 m-3 p-3 rounded-md text-gold  bg-slate-100 mt-10">
            Página principal
          </p>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
