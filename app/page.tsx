import Head from 'next/head';

export default function EnvironmentalImpactPage() {
  return (
    <>
      <Head>
        {/* Importar la fuente Montserrat */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Página completa con fondo blanco */}
      <div className="bg-white flex flex-col items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {/* Primera Sección - Portada */}
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          <div className="text-center">
            {/* Título grande como antes */}
            <h1 className="text-8xl font-semibold" style={{ color: '#003A5C' }}>
              Una Gota, Mil Datos
            </h1>

            {/* Efecto subrayado turquesa */}
            <div className="mt-2 h-1 w-2/4 mx-auto bg-[#003A5C]"></div>

            {/* Subtítulo centrado */}
            <p className="text-xl mt-4 font-light" style={{ color: '#003A5C' }}>
              Visualizando el impacto del plástico en los océanos
            </p>
          </div>
          <img src="/flechita.svg" alt="Visualización de datos" className="mx-auto mt-20" width={100} height={200} />
        </div>

        {/* Segunda Sección - Paleta de Colores compacta */}
        <div className="flex flex-col items-center justify-center py-8 mt-20">
          {/* Subtítulo centrado en turquesa, en negrita */}
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#003A5C' }}>
            Paleta de Colores
          </h2>

          {/* Cuadrados más pequeños y centrados */}
          <div className="mb-15 mt-20">
            <img src="/PALETA.svg" alt="Visualización de datos" className="mx-auto" width={900} height={200} />
          </div>
        </div>

        {/* Sección de Visualización de Datos */}
        <div className="flex flex-col items-center w-full max-w-6xl px-4 text-center mt-20">
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Países que más contaminan el océano
            </h3>
            
            <hr className="mt-1 w-3/4 mx-auto bg-[#003A5C] h-[1px] border-0" />
            <img src="/DATA.svg" alt="Visualización de datos" className="mx-auto" width={800} height={200} />
          </div>

          <div className="mb-20">
            <h4 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Cantidad de plástico per cápita (kg)
            </h4>
            <hr className="mt-1 w-3/4 mx-auto bg-[#003A5C] h-[1px] border-0" />
            <img src="/DATA2.svg" alt="Visualización de datos" className="mx-auto" width={800} height={200} />
          </div>

          <div className="mb-20">
            <h5 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Población - Millones
            </h5>
            <hr className="mt-1 w-3/4 mx-auto bg-[#003A5C] h-[1px] border-0" />
            <img src="/DATA3.svg" alt="Visualización de datos" className="mx-auto" width={800} height={200} />
          </div>

          <div className="mb-20">
            <h6 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Con acceso al agua y sin acceso
            </h6>
            <hr className="mt-1 w-3/4 mx-auto bg-[#003A5C] h-[1px] border-0" />
            <img src="/salida.svg" alt="Visualización de datos" className="mx-auto" width={800} height={200} />
          </div>

          <div className="mb-20">
            <h6 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Impacto de plástico en los océanos por los países
            </h6>
            <hr className="mt-1 w-3/4 mx-auto bg-[#003A5C] h-[1px] border-0" />
            <img src="/botellita.svg" alt="Visualización de datos" className="mx-auto" width={900} height={700} />
          </div>

          {/* Sección de Especies Marinas con SVGs más chicos, excepto el cuarto */}
          <div className="mb-20">
            <h6 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Especies Marinas
            </h6>
            <hr className="mt-1 w-3/4 mx-auto bg-[#003A5C] h-[1px] border-0" />
            {/* Contenedor con SVGs en fila */}
            <div className="flex justify-center mt-10 space-x-[-10px]">
              {/* SVGs más chicos */}
              <img
                src="/animales_Mesa de trabajo 1.svg"
                alt="Especie Marina 1"
                className="w-70 h-70 transition-transform transform hover:scale-110"
              />
              <img
                src="/animales-03.svg"
                alt="Especie Marina 2"
                className="w-70 h-70 transition-transform transform hover:scale-110"
              />
              <img
                src="/animales-04.svg"
                alt="Especie Marina 3"
                className="w-70 h-70 transition-transform transform hover:scale-110 ml-[-60px]"
              />
              {/* El cuarto SVG mantiene su tamaño grande y se mueve más a la izquierda */}
              <img
                src="/animales-05.svg"
                alt="Especie Marina 4"
                className="w-80 h-80 transition-transform transform hover:scale-110 ml-[-80px]"
              />

            
            </div>
          </div>
          <div>
          <h6 className="text-1xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Aplicación
            </h6>
            <img src="/graficosmarinos-12.svg" alt="Visualización de datos" className="mx-auto mt-20 ml-20" width={800} height={200} />
          <img src="/graficosmarinos-09.svg" alt="Visualización de datos" className="mx-auto mt-20 ml-20" width={800} height={200} />
            <img src="/graficosmarinos-10.svg" alt="Visualización de datos" className="mx-auto mt-20 ml-20" width={800} height={200} />
            <img src="/graficosmarinos-11.svg" alt="Visualización de datos" className="mx-auto mt-20 ml-20  mb-20 " width={800} height={200} />
          
          </div>

            {/* Sección de Tipos de Plástico con 5 SVGs más chicos */}
            <div className="mb-20">
            <h6 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Tipos de Plástico
            </h6>
            <hr className="mt-1 w-4/4 mx-auto bg-[#003A5C] h-[1px] border-0" />
            {/* Contenedor con SVGs en fila */}
            <div className="flex justify-center mt-10 space-x-8">
              {/* Cada SVG con hover */}
              <img
                src="/iconos-02.svg"
                alt="Tipo de Plástico 1"
                className="w-50 h-50 transition-transform transform hover:scale-110"
              />
              <img
                src="/iconos-06.svg"
                alt="Tipo de Plástico 2"
                className="w-50 h-50 transition-transform transform hover:scale-110"
              />
              <img
                src="/iconos-07.svg"
                alt="Tipo de Plástico 3"
                className="w-50 h-50 transition-transform transform hover:scale-110"
              />
              <img
                src="/iconos-08.svg"
                alt="Tipo de Plástico 4"
                className="w-50 h-50 transition-transform transform hover:scale-110"
              />
              <img
                src="/iconos-09.svg"
                alt="Tipo de Plástico 5"
                className="w-50 h-50 transition-transform transform hover:scale-110"
              />
             
            </div>
          </div>

        </div>
      </div>
    </>
  );
}