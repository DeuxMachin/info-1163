import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>

export function NavBar() {
  const user = useUser();

  return (
    <nav className="border-gray-200 bg-blue-600">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            <img src="logo.png" alt="Logo Dales" className=" h-8 mr-3" />
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col  p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-950 md:p-0 dark:text-white md:dark:hover:text-blue-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Explorar
              </Link>
            </li>
            {user.isSignedIn && (
              <>
                <li>
                  <Link
                    href="/posts"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-950 md:p-0 dark:text-white md:dark:hover:text-blue-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Posts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vender-producto"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-950 md:p-0 dark:text-white md:dark:hover:text-blue-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Vender un Producto
                  </Link>
                </li>
              </>
            )}
            {!user.isSignedIn && (
              <li>
                <SignInButton>
                  <span className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-950 md:p-0 dark:text-white md:dark:hover:text-blue-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Iniciar Sesión
                  </span>
                </SignInButton>
              </li>
            )}
            <li>
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
