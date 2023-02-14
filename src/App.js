import { lazy, Suspense } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./rapidcss/style.css";
import "./rapidcss/responsive.css";
import { Helmet } from "react-helmet";

const Home = lazy(() => import("./components/Home"));

const Header = lazy(() => import("./components/Header"));

function App() {
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Metro Girls Hostel",
    "image": "https://metrogirlshostel.com/images/bannerhostel.jpg",
    "@id": "",
    "url": "https://metrogirlshostel.com/",
    "telephone": "9329449972",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6/7 Vijay Nagar , Behind Police Station",
      "addressLocality": "Indore",
      "postalCode": "452010",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Friday",
        "Thursday",
        "Saturday",
        "Sunday"
      ],
      "opens": "05:00",
      "closes": "23:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100089494707877",
      "https://www.instagram.com/metro_girlshostel/",
      "https://www.linkedin.com/company/metro-girls-hostel/"
    ] 
  
  };
  const schemaLocalBusiness_JSON = JSON.stringify(schemaLocalBusiness);

  return (
    <div>
      <Helmet>

      <script type="application/ld+json">{schemaLocalBusiness_JSON}</script>

      </Helmet>
      <ScrollToTop />

      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          <Header />

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
export default App;
