import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Photo1 from "../../assets/pict2.jpg";
import "./About.css";
import Title from "../../components/Title/Title";
import Logo1 from "../../assets/IconSD.png";
import Logo2 from "../../assets/IconSMP.png";
import Logo3 from "../../assets/IconSMA.png";
import Logo4 from "../../assets/iconKuliah.png";

function About() {
  return (
    <>
      <Navbar />

      <Title id="text-center" text="About Me" />

      <div className="row justify-content-center mt-5">
        <div className="col-md-3">
          <div className="card">
            <img src={Photo1} className="card-img-top lanching" alt="photo" />
            <div className="card-body">
              <p className="card-text paragraph">
                My name is Virgina Nita Yosmeniar. I currently residing in Brang Rea, West Nusa Tenggara. I fresh graduated with Bachelor Degree of Mathematics in Mataram University on September 2021. I started my journey with Web
                Development after following Skilvul and Amman Mineral program for 2022. After learning through the foundation weeks, I find myself become entusiast with the field and will continue to learn more about web development. Thanks
                for the opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Riwayat Pendidikan */}
      <div className="container-fluid">
        <h1 className="text-white mt-4">Educational Background</h1>

        <div className="row g-5 mt-2">
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Logo1} className="card-img-top img-school" alt="icon SD" />
              <div className="card-body">
                <h3 className="card-title">Sekolah Dasar</h3>
                <p className="card-text">Saya bersekolah dasar di SDN Seminar, Kecamatan Brang Rea, Kabupaten Sumbawa Barat, NTB</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Logo2} className="card-img-top img-school" alt="icon SMP" />
              <div className="card-body">
                <h3 className="card-title">Sekolah Menengah Pertama</h3>
                <p className="card-text">Saya bersekolah di SMP Negeri 1 Sumbawa Besar, Kecamatan Sumbawa, Kabupaten Sumbawa, NTB</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Logo3} className="card-img-top img-school" alt="icon SMA" />
              <div className="card-body">
                <h3 className="card-title">Sekolah Menengah Atas</h3>
                <p className="card-text">Saya bersekolah di SMA Negeri 2 Sumbawa Besar, Kecamatan Sumbawa, Kabupaten Sumbawa, NTB</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Logo4} className="card-img-top img-school" alt="icon kuliah" />
              <div className="card-body">
                <h3 className="card-title">Universitas</h3>
                <p className="card-text">Saya bersekolah di Universitas Mataram, Kecamatan Selaparang, Kota Mataram, NTB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
