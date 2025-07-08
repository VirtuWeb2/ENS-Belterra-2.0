import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "./hero/Hero";
import Home from "./mainContent/Home";
const Homepage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home | EN Belterra</title>
          <meta property="og:title" content="É Notícia Acara" />
          <meta
            property="og:description"
            content="Site de notícias Paraense, atualizado diariamente com notícias de todos os jornais convencionais e fontes seguras"
          />
          <meta property="og:image" content="../images/logo.png" />
        </Helmet>
      </HelmetProvider>

      <Hero />
      <Home />
    </>
  );
};

export default Homepage;
