import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import Gambar from "../../components/Gambar/Gambar";

function Blog() {
  return (
    <>
      <Navbar />
      <Title id="text-center" text="Blog" />
      <Gambar />
      <Footer />
    </>
  );
}

export default Blog;
