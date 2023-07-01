import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NavBar } from "~/components/NavBar";
import { Footer } from "~/components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div className="light:black bg-gray-800 dark:text-white">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
