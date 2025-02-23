import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <article className="my-10 bg-slate-50 flex flex-col md:flex-row justify-between items-center lg:mx-36 md:p-10">
        <div className="my-10">
          <h2 className="font-bold text-xl text-center mb-10">Contacto</h2>
          <div className="flex flex-row my-2 ">
            <Image
              src="/icon-whatsapp.svg"
              alt="icon map"
              width={24}
              height={24}
              unoptimized
              className="mx-2"
            />
            <Link
              href={`https://wa.me/+59895905258`}
              target="_blank"
              rel="noopener noreferrer"
            >
              095 90 52 58
            </Link>
          </div>
          <div className="flex flex-row my-2">
            <Image
              src="/icon-instagram-black.svg"
              alt="icon map"
              width={24}
              height={24}
              unoptimized
              className="mx-2"
            />
            <Link
              href="https://www.instagram.com/cosmetologa_vm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              cosmetologa_vm
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
            <p>San José 1172 esquina Héctor Gutiérrez Ruiz</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.981017724993!2d-56.1933784247964!3d-34.90692587357354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cd15b19477%3A0x4c3439ed11a55390!2sS.%20Jos%C3%A9%201172%2C%2011100%20Montevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1ses!2ses!4v1739264498355!5m2!1ses!2ses"
          width="400"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </article>

      <article className="bg-black my-20 md:py-10 lg:px-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:p-4 md:w-1/3 relative w-full max-w-[467px] h-[480px] overflow-hidden flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dlxdb2gs7/image/upload/v1739191253/CVM/c0kngmy1bdciwveg92nh.jpg"
              alt="icon map"
              width={467}
              height={700}
              unoptimized
              className="object-cover md:mx-2 md:mt-10"
            />
          </div>
          <div className="md:w-2/3 flex flex-col justify-between p-6 leading-normal">
            <h3 className="text-white font-bold text-xl text-center mb-5">
              Cosmetóloga Valery Miranda
            </h3>
            <p className="text-white">
              ¡Hola! Soy Valery (aunque algunos me conocen como Shishi).
            </p>
            <p className="text-white">
              Mi pasión por el mundo de la belleza y la estética nació después
              de la maternidad, cuando descubrí la fascinante variedad de
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
              Porque verte bien es sentirte bien, y mereces elegir cómo quieres
              mostrar tu mejor versión.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
