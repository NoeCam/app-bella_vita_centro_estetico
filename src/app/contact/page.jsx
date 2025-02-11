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
              Mi nombre es Valery (pero también algunos me conocen por Shishi).
            </p>
            <p className="text-white">Taurina, 35 años, mamá de Julián.</p>
            <p className="text-white">
              Luego de la maternidad comencé a interesarme en el mundo de la
              belleza, la estética y la cantidad de técnicas y conocimientos que
              surgen todo el tiempo 𝗽𝗮𝗿𝗮 𝗽𝗼𝘁𝗲𝗻𝗰𝗶𝗮𝗿 𝗹𝗮 𝗯𝗲𝗹𝗹𝗲𝘇𝗮 𝗱𝗲 𝗼𝘁𝗿𝗮𝘀 𝗺𝘂𝗷𝗲𝗿𝗲𝘀 𝘆
              𝗲𝘀𝗼 𝗺𝗲 𝗽𝗮𝗿𝗲𝗰𝗲 𝘂𝗻 𝘁𝗿𝗮𝗯𝗮𝗷𝗼 𝗳𝗮𝘀𝗰𝗶𝗻𝗮𝗻𝘁𝗲. 🤩 Que 𝗹𝗮 𝗺𝘂𝗷𝗲𝗿 𝘀𝗲 𝘀𝗶𝗲𝗻𝘁𝗮 𝗮
              𝗴𝘂𝘀𝘁𝗼, 𝘀𝗲 𝘀𝗶𝗲𝗻𝘁𝗮 𝗹𝗶𝗻𝗱𝗮, 𝘀𝗲 𝘀𝗶𝗲𝗻𝘁𝗮 𝗲𝗺𝗽𝗼𝗱𝗲𝗿𝗮𝗱𝗮 𝘆 𝗹𝗶𝗯𝗿𝗲 𝗱𝗲 𝗲𝗹𝗲𝗴𝗶𝗿
              𝗰𝗼́𝗺𝗼 𝗾𝘂𝗶𝗲𝗿𝗲 𝘃𝗲𝗿𝘀𝗲 𝘆 𝗺𝗼𝘀𝘁𝗿𝗮𝗿𝘀𝗲. Que pueda elegir mejorar su piel,
              cuidarla, realzar su mirada con unas lindas pestañas, mejorar su
              aspecto de cejas, hidratar y darle color a sus labios, entre
              otros.🙌🏻
            </p>

            <p className="text-white">
              Soy cosmetóloga, lashista, micropigmentadora en labios y
              cejas.🧴💋 Finalice más de 10 cursos que iré contando más adelante
              de diferentes procedimientos faciales estéticos.
            </p>

            <p className="text-white">
              Hace ya un tiempo comencé con este proyecto en el cual 𝗱𝗲𝗰𝗶𝗱𝗶́
              𝗳𝗼𝗿𝗺𝗮𝗿𝗺𝗲 𝘆 𝗲𝗻𝗳𝗼𝗰𝗮𝗿𝗺𝗲 𝗮𝗹 𝟭𝟬𝟬% 𝗽𝗼𝗿𝗾𝘂𝗲 𝗺𝗲 𝗹𝗹𝗲𝗻𝗮 𝗲𝗹 𝗰𝗼𝗿𝗮𝘇𝗼́𝗻 𝗱𝗲 𝗮𝗹𝗲𝗴𝗿𝗶́𝗮
              𝘆 𝗳𝗲𝗹𝗶𝗰𝗶𝗱𝗮𝗱. Mi objetivo es poder darles no solo un servicio sino
              un espacio donde 𝘀𝗲 𝘀𝗶𝗲𝗻𝘁𝗮𝗻 𝗰𝗼́𝗺𝗼𝗱𝗮𝘀 𝘆 𝗾𝘂𝗶𝗲𝗿𝗮𝗻 𝘃𝗼𝗹𝘃𝗲𝗿 𝘀𝗶𝗲𝗺𝗽𝗿𝗲. ♥️
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
