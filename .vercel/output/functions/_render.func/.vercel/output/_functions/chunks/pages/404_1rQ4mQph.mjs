/* empty css                          */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, m as maybeRenderHead, f as renderComponent, g as renderSlot, h as renderTransition, i as renderHead } from '../astro_6lBLl91c.mjs';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/node_modules/.pnpm/astro@4.8.7_typescript@5.4.5/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const phoneNumber = "+523332579424";
  const serviceTitles = [
    "Rehabilitaci\xF3n pre y postquir\xFArgica",
    "Aplicaci\xF3n de Kinesiotape",
    "Rehabilitaci\xF3n ortop\xE9dica",
    "Masajes deportivos",
    "Masajes relajantes",
    "Rehabilitaci\xF3n Deportiva",
    "Ejercicios con fines terap\xE9uticos",
    "Rehabilitaci\xF3n geri\xE1trica",
    "Fisioterapia Traumatol\xF3gica",
    "Fisioterapia Neurol\xF3gica"
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-24"> <div class="flex flex-col md:flex-row"> <div class="w-full lg:w-2/6 lg:mx-4 lg:pr-8"> <h3 class="font-bold text-2xl">Physical Rehabilitation</h3> <p class="text-gray-400">
Especializado en la recuperación de lesiones, donde la confianza y la
        comodidad son prioridades
</p> <!-- <form class="flex items-center mt-6">
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Subscribe for our Newsletter
          </label>
          <div class="relative">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="Enter Your Email Address"
            />

            <button
              type="submit"
              class="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2"
              >Subscribe</button
            >
          </div>
        </div>
      </form> --> </div> <div class="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4"> <h5 class="uppercase tracking-wider font-semibold">Treatments</h5> <ul class="mt-4"> ${serviceTitles.map((service) => {
    return renderTemplate`<li class="mt-2"> <a href="#tratamientos" title="" class="opacity-75 hover:opacity-100"> ${service} </a> </li>`;
  })} </ul> </div> <div class="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8"> <h5 class="uppercase tracking-wider font-semibold">Contact Details</h5> <ul class="mt-4"> <li> <a href="#" title="" class="flex items-center opacity-75 hover:opacity-100"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"></path> </svg> </span> <span class="ml-3">
Calle 3 de Junio #421, San Rafael, Guadalajara Jalisco, México.
</span> </a> </li> <li class="mt-4"> <a href="#" title="" class="flex items-center opacity-75 hover:opacity-100"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path> <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path></svg> </span> <span class="ml-3">
Lunes - Viernes: 9:00 - 21:00<br>
Sabado: 9:00 - 15:00<br>
Domingo cerrado
</span> </a> </li> <li class="mt-4"> <a href="#" title="" class="flex items-center opacity-75 hover:opacity-100"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"></path> </svg> </span> <span class="ml-3"> +52 33 32 57 94 24</span> </a> </li> <li class="mt-4"> <a href="#" title="" class="flex items-center opacity-75 hover:opacity-100"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z"></path> </svg> </span> <span class="ml-3"> tfisicarehabilitation@gmail.com </span> </a> </li> </ul> </div> <div class="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4"> <h5 class="uppercase tracking-wider font-semibold">Redes Sociales</h5> <ul class="mt-4 flex"> <li> <a href="https://www.facebook.com/rehabilitationphysical/?ref=xav_ig_profile_page" target="_blank" title=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path> </svg> </a> </li> <li class="ml-6"> <a href="https://www.instagram.com/rehabilitationphysical_?igsh=eG5scHFtdXFjMXR6" target="_blank" title=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"></path> <circle cx="11.994" cy="11.979" r="3.003"></circle></svg> </a> </li> <li class="ml-6"> <a${addAttribute(`https://wa.me/${phoneNumber}`, "href")} target="_blank" title=""> <svg class="w-[24px] h-[24px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"></path> <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"></path> </svg> </a> </li> </ul> <p class="text-sm text-gray-400 mt-12">
© 2024 Physical Rehabilitation. <br class="hidden lg:block">Derechos
        reservados.
</p> </div> </div> </footer>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const phoneNumber = "+523332579424";
  const message = "Hola, me gustaria agendar una cita";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return renderTemplate`${maybeRenderHead()}<header class="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64"> <div class="hidden lg:flex justify-between items-center border-b text-sm py-3" style="border-color: rgba(255,255,255,.25)"> <div class=""> <ul class="flex text-white"> <!-- <li>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
              ></path>
            </svg>

            <span class="ml-2">1985 Kerry Way, Whittier, CA, USA</span>
          </div>
        </li> --> <!-- <li class="ml-6">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"
              ></path>
            </svg>

            <span class="ml-2">+1 562-789-1935</span>
          </div>
        </li> --> </ul> </div> <div class=""> <ul class="flex justify-end text-white"> <li> <a href="https://www.facebook.com/rehabilitationphysical/?ref=xav_ig_profile_page" target="_blank" title=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path> </svg> </a> </li> <li class="ml-6"> <a href="https://www.instagram.com/rehabilitationphysical_?igsh=eG5scHFtdXFjMXR6" target="_blank" title=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"></path> <circle cx="11.994" cy="11.979" r="3.003"></circle> </svg> </a> </li> <li class="ml-6"> <a${addAttribute(`https://wa.me/${phoneNumber}`, "href")} target="_blank" title=""> <svg class="w-[24px] h-[24px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"></path> <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"></path> </svg> </a> </li> </ul> </div> </div> <div class="flex flex-wrap items-center justify-between py-6"> <div class="w-1/2 md:w-auto"> <a class="text-white font-bold text-2xl" href="/dentalpro/">
Physical Rehabilitation
</a> </div> <!-- <label class="pointer-cursor md:hidden block"
      ><svg
        class="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg></label
    > --> <!-- <input class="hidden" /> --> <button id="menu-toggle" data-dropdown-toggle="dropdown" class="fixed right-6 lg:hidden" type="button"> <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path> </svg> </button> <!-- Dropdown menu --> <div id="dropdown" class="z-10 hidden bg-teal-300 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"> <nav class="w-full bg-teal-300 text-black text-start md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 md:p-0 md:mt-0 md:shadow-none"> <ul class="md:flex items-center"> <li class="md:ml-4"> <a class="py-2 inline-block md:hidden lg:block font-semibold hover:text-white active:text-white" href="#inicio">Inicio</a> </li> <li class="md:ml-4"> <a class="py-2 inline-block md:text-white md:hidden lg:block font-semibold hover:text-white active:text-white" href="#about">Conocenos</a> </li> <li class="md:ml-4"> <a class="py-2 inline-block md:text-white md:px-2 font-semibold hover:text-white active:text-white" href="#tratamientos">Tratamientos</a> </li> <li class="md:ml-4"> <a class="py-2 inline-block md:text-white md:px-2 font-semibold hover:text-white active:text-white" href="#paquetes">Paquetes</a> </li> <!-- <li class="md:ml-4">
            <a
              class="py-2 inline-block md:text-white md:px-2 font-semibold hover:text-white active:text-white"
              href="#testimonios">Testimonios</a
            >
          </li> --> <li class="md:ml-4"> <a class="py-2 inline-block md:text-white md:px-2 font-semibold hover:text-white active:text-white" href="#call-to-action">Comentarios</a> </li> <li class="md:ml-6 mt-3 md:mt-0"> <a class="inline-block font-semibold px-4 py-2 text-white bg-teal-500 md:bg-transparent md:text-white border border-white rounded hover:bg-black active:bg-black"${addAttribute(whatsappLink, "href")} target="_blank">Agenda una cita</a> </li> </ul> </nav> </div> <div class="hidden md:block w-full md:w-auto" id="menu"> <nav class="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none"> <ul class="md:flex items-center"> <li class="md:ml-4"> <a class="py-2 inline-block md:text-white md:hidden lg:block font-semibold" href="#inicio">Inicio</a> </li> <li class="md:ml-4"> <a class="py-2 inline-block md:text-white md:hidden lg:block font-semibold" href="#about">Conocenos</a> </li> <li class="md:ml-4"> <a class="py-2 inline-block md:text-white md:px-2 font-semibold" href="#tratamientos">Tratamientos</a> </li> <li class="md:ml-4"> <a class="py-2 inline-block md:text-white md:px-2 font-semibold" href="#paquetes">Paquetes</a> </li> <!-- <li class="md:ml-4">
            <a
              class="py-2 inline-block md:text-white md:px-2 font-semibold"
              href="#testimonios">Testimonios</a
            >
          </li> --> <li class="md:ml-4"> <a class="py-2 inline-block md:text-white md:px-2 font-semibold" href="#call-to-action">Comentarios</a> </li> <li class="md:ml-6 mt-3 md:mt-0"> <a class="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded"${addAttribute(whatsappLink, "href")} target="_blank">Agenda una cita</a> </li> </ul> </nav> </div> </div> </header>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon2.svg"><meta name="generator"', "><title>", "</title><!-- Simula que es una singlePageAplication aun que no lo es -->", "", '</head> <body class="bg-sky-100 min-h-screen"> ', ' <main class="h-full w-full text-black"', "> ", " </main> ", '  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), addAttribute(renderTransition($$result, "ekcrbxgw"), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/layouts/Layout.astro", "self");

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPhysicalRehabilitation", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center h-96"> <h1 class="text-blue-900 text-3xl">Esta página no existe ...</h1> <img src="https://midu.dev/images/this-is-fine-404.gif"> </div> ` })}`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/pages/404.astro", void 0);

const $$file = "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
