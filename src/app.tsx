import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Header />
          <main class="min-h-screen pt-14">
            <Suspense>{props.children}</Suspense>
          </main>
          <Footer />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
