import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "🌅 Good morning";
    if (hour < 18) return "☀️ Good afternoon";
    return "🌙 Good evening";
  };

  return (
    <>
      <div className="text-center py-6 bg-base-200 rounded-xl shadow-md mx-4 my-4">
        <div className="flex flex-col items-center gap-2">
          {/* Branding image - replace with your logo URL or local file */}
          <img
            src="https://img.icons8.com/ios-filled/100/000000/books.png"
            alt="Bookstore Logo"
            className="w-12 h-12"
          />
          <h1 className="text-xl font-semibold text-secondary">{getGreeting()},</h1>
          <h2 className="text-3xl font-bold text-primary underline">
            Welcome to <span className="text-accent">Isha Shah’s Bookstore 📚</span>
          </h2>
        </div>
      </div>

      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
