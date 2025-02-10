const FooterComponent = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="hidden md:block text-center py-2 bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:mb-0">
            <p className="text-sm">
              &copy; {year} Cosmetóloga Valery Miranda. Todos los derechos
              reservados.
            </p>
          </div>
          {/* <div className="flex space-x-4">
            <a href="/privacy-policy" className="text-sm hover:underline">
              Política de Privacidad
            </a>
            <a href="/terms-of-service" className="text-sm hover:underline">
              Términos de Servicio
            </a>
          </div> */}
          <div className="flex space-x-4 md:mt-0">
            <a
              href="https://www.instagram.com/cosmetologa_vm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icon-instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
