import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <article className="my-10 bg-slate-50 flex flex-col md:flex-row justify-between items-center lg:mx-36 md:p-10">
        <div className="my-10">
          <h2 className="font-bold text-xl text-center mb-10">Contacto</h2>
          <div className="flex flex-row items-center my-2">
            <Link
              href={`https://wa.me/+59899554539`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/icon-whatsapp.svg"
                alt="icon map"
                width={24}
                height={24}
                unoptimized
                className="mx-2"
              />
              090 00 00 00
            </Link>
          </div>
          <div className="flex flex-row items-center my-2">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/icon-instagram-black.svg"
                alt="icon map"
                width={24}
                height={24}
                unoptimized
                className="mx-2"
              />
              bellavita_centroestetico
            </Link>
          </div>
          <div className="flex flex-row my-2">
            <Image
              src="/icon-map.svg"
              alt="icon map"
              width={24}
              height={24}
              unoptimized
              className="mx-2"
            />
            <p>Sarandí 700, 11000 Montevideo, Uruguay</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9949008992585!2d-56.201115023349686!3d-34.90657747355751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802afe10cee1%3A0xb95846203de847c5!2sPuerta%20de%20la%20Ciudadela!5e0!3m2!1ses!2ses!4v1740844709727!5m2!1ses!2ses"
          width="400"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </article>

      <article className="bg-black md:py-10 lg:px-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:p-4 md:w-1/3 relative w-full max-w-[467px] h-[480px] overflow-hidden flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dlxdb2gs7/image/upload/v1740843912/CVM/tztmckxrwo83cxtclrqu.jpg"
              alt="icon map"
              width={467}
              height={700}
              unoptimized
              className="object-cover md:mx-2 md:mt-10"
            />
          </div>
          <div className="md:w-2/3 flex flex-col justify-between p-6 leading-normal">
            <h3 className="text-white font-bold text-xl text-center mb-5">
              Cosmetóloga Carmen Rojas
            </h3>
            <p className="text-white">¡Hola! Soy Carmen.</p>
            <p className="text-white">
              Mi pasión por el mundo de la belleza y la estética comenzó hace
              unos pocos años, cuando descubrí la fascinante variedad de
              técnicas y conocimientos que evolucionan constantemente para
              realzar la belleza de otras mujeres. Considero que ayudar a una
              mujer a sentirse cómoda, hermosa, empoderada y libre de decidir
              cómo quiere verse y mostrarse es un trabajo profundamente
              gratificante.
            </p>

            <p className="text-white">
              Me especializo en cosmetología, extensiones de pestañas
              (lashista), y micropigmentación de labios y cejas, disciplinas que
              me permiten ofrecer un enfoque integral para el cuidado y
              embellecimiento. He completado más de 10 cursos de procedimientos
              faciales estéticos.
            </p>

            <p className="text-white">
              Hace algún tiempo decidí transformar esta pasión en un proyecto
              personal, comprometiéndome al 100% con mi formación y desarrollo
              profesional, porque este trabajo llena mi corazón de alegría y
              satisfacción.
            </p>
            <p className="text-white">
              Mi objetivo es ofrecerte no solo un servicio de calidad, sino
              también crear un espacio en el que te sientas cómoda, especial y
              siempre quieras regresar. Ya sea para mejorar la apariencia de tu
              piel, realzar tu mirada con unas hermosas pestañas, definir tus
              cejas o dar color e hidratación a tus labios, estoy aquí para
              acompañarte en el proceso.
            </p>
            <p className="text-white font-bold mt-3">
              Porque verte bien es sentirte bien, y mereces elegir cómo mostrar
              tu mejor versión.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-black my-20 md:py-10 lg:px-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:p-4 md:w-1/3 relative w-full max-w-[467px] h-[480px] overflow-hidden flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dlxdb2gs7/image/upload/v1740844406/CVM/gjpom9htzwd2lf1tlviz.jpg"
              alt="icon map"
              width={467}
              height={700}
              unoptimized
              className="object-cover md:mx-2 md:mt-10"
            />
          </div>
          <div className="md:w-2/3 flex flex-col justify-between p-6 leading-normal">
            <h3 className="text-white font-bold text-xl text-center mb-5">
              Cosmetóloga Laura Iglesias
            </h3>
            <p className="text-white">¡Hola! Soy Laura.</p>

            <p className="text-white">
              Mi interés por el mundo de la belleza y la estética floreció desde
              joven, cautivándome la diversidad de técnicas y conocimientos que
              se desarrollan continuamente para resaltar la belleza de las
              mujeres. Creo firmemente que contribuir a que una mujer se sienta
              segura, hermosa, empoderada y libre de elegir cómo desea verse y
              presentarse es un trabajo profundamente satisfactorio.
            </p>

            <p className="text-white">
              Me especializo en cosmetología, tratamientos de rejuvenecimiento
              facial, y diseño y depilación de cejas, áreas que me permiten
              ofrecer una atención integral para el cuidado y embellecimiento.
              He finalizado más de 15 cursos de procedimientos estéticos y
              técnicas avanzadas.
            </p>

            <p className="text-white">
              Hace unos años, decidí transformar esta vocación en un proyecto
              personal, comprometiéndome plenamente con mi formación y
              desarrollo profesional, porque este trabajo llena mi vida de
              alegría y satisfacción.
            </p>

            <p className="text-white">
              Mi meta es brindarte no solo un servicio excepcional, sino también
              crear un ambiente en el que te sientas cómoda, única y siempre
              desees volver. Ya sea para mejorar la apariencia de tu piel,
              realzar tu expresión con unas cejas definidas, o disfrutar de
              tratamientos de rejuvenecimiento, estoy aquí para acompañarte en
              cada paso.
            </p>

            <p className="text-white font-bold mt-3">
              Porque verte bien es sentirte bien, y mereces elegir cómo mostrar
              tu mejor versión.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
