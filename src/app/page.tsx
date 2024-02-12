"use client";
import React, { useState } from "react";

import HeroSection from "@/components/hero-section";
import SearchSection from "@/components/search-section";
import Content from "@/components/content/content";
import AboutUs from "@/components/about-us";
import Gallery from "@/components/gallery";
import Testimonial from "@/components/testimonial";
import OurTeam from "@/components/our-team";
import Contact from "@/components/contact/contact";


const tabs = [
  {
    label: "Diplomados",
    content: [
      {
        imgUrl: "/images/content/graduates/ecografia_abdominal.jpg",
        title: "Ecografía Abdominal",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/neurociencia_y_educacion.jpg",
        title: "Neurociencia y Educación",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/formacion_docente.jpg",
        title: "Formación Docente",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/atencion_al_cliente.jpg",
        title: "Atención al Cliente",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/programacion_web.jpg",
        title: "Programación Web",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/asesoria_familiar.jpg",
        title: "Asesoría Familiar",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/higienista_dental.jpg",
        title: "Higienista Dental",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/estetica_facial_y_corporal.jpg",
        title: "Estética Facial y Corporal",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/terapia_fisica_y_regeneradora.jpg",
        title: "Terapia Física y Regeneradora",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/dermocosmiatria_integral.jpg",
        title: "Dermocosmiatría Integral",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
    ],
  },
  {
    label: "Cursos",
    content: [
      {
        imgUrl: "/images/content/courses/asistente_administrativo.jpg",
        title: "Asistente Administrativo",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/courses/maquillaje.jpg",
        title: "Maquillaje",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/courses/matematicas_preuniversitarias.jpg",
        title: "Matemáticas Preuniversitarias",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/courses/ingles_basico.jpg",
        title: "Inglés Básico",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
    ],
  },
  {
    label: "Talleres",
    content: [
      {
        imgUrl: "/images/content/workshops/desarrollo_de_videojuegos.jpg",
        title: "Desarrollo de Videjuegos",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/workshops/orientacion_vocacional.jpg",
        title: "Orientación Vocacional",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/workshops/auto_maquillaje.jpg",
        title: "Auto Maquillaje",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
    ],
  },
];

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredTabs, setFilteredTabs] = useState(tabs);
  // esta funcion handleSearch hace EXACTAMENTE lo mismo que la de abajo pero usando mucho menos codigo
  // const handleSearch = (value: string) => {
  //   
  //   setSearchValue(value);

  //   // Filtra las pestañas en base al valor de búsqueda
  //   const newFilteredTabs = tabs.map((tab) => ({
  //     ...tab,
  //     content: tab.content.filter(({ title }) =>
  //       title.toLowerCase().includes(value.toLowerCase())
  //     ),
  //   }));
  //   console.log(newFilteredTabs)
  //   setFilteredTabs(newFilteredTabs);
  // };

  const handleSearch = (value: string) => {
    // Setea el valor de búsqueda en el estado
    setSearchValue(value);

    // Crea un nuevo array para almacenar las pestañas filtradas
    const newFilteredTabs = [];

    // Itera sobre las pestañas originales
    for (const tab of tabs) {
      // Filtra los elementos de content según el valor de búsqueda
      const filteredContent = tab.content.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      );

      // Si hay elementos después del filtro, agrega la pestaña al nuevo array
      if (filteredContent.length > 0) {
        newFilteredTabs.push({
          ...tab,
          content: filteredContent,
        });
      }
    }

    // Actualiza el estado con las pestañas filtradas
    setFilteredTabs(newFilteredTabs);

    // Muestra el nuevo array en la consola
    console.log(newFilteredTabs);
  };

  return (
    <main>
      <HeroSection />
      <SearchSection onSearch={handleSearch} />
      <Content filter={searchValue} tabs={filteredTabs} />
      <AboutUs />
      <Gallery />
      <Testimonial />
      <OurTeam />
      <Contact />
    </main>
  );
}
