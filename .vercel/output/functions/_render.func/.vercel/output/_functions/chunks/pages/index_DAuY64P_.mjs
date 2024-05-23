/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, f as renderComponent, g as renderSlot } from '../astro_6lBLl91c.mjs';
import { $ as $$Layout } from './404_DsYknoF2.mjs';
import axios from 'axios';

const $$Astro$2 = createAstro();
const $$Paquetes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Paquetes;
  const { content, description, price, title, message } = Astro2.props;
  const phoneNumber = "+523332579424";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return renderTemplate`${maybeRenderHead()}<div class="relative z-0 max-w-sm my-8 border border-gray-00 rounded-lg sm:my-5 md:-mr-4 border-teal-400"> <div class="overflow-hidden text-black bg-white border-t border-gray-100 rounded-lg shadow-sm"> <div class="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6"> <h3 class="p-3 text-lg font-bold tracking-wide text-center uppercase"> ${title}<span class="ml-2 font-light">Plan</span> </h3> <h4 class="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900"> <span class="mr-1 -ml-2 text-lg text-gray-700">$</span>${price} </h4> <p class="text-sm text-gray-600"> ${description} </p> </div> <div class="flex flex-wrap px-6 mt-8"> <ul> ${content.map((text) => {
    return renderTemplate`<li class="flex items-center"> <div class="p-2 text-green-500 rounded-full fill-current"> <svg class="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg> </div> <span class="ml-3 text-lg text-gray-700">${text}</span> </li>`;
  })} </ul> </div> <div class="flex items-center p-8 uppercase"> <a target="_blank"${addAttribute(whatsappLink, "href")} class="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-teal-500 rounded shadow-sm hover:bg-black">Eligue este plan</a> </div> </div> </div>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/Paquetes.astro", void 0);

const $$Treatments = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="paquetes" class="relative px-8 py-10 bg-white border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"> <div id="pricing" class="container flex flex-col items-center h-full max-w-6xl mx-auto"> <h2 class="text-black text-md uppercase font-semibold tracking-widest">
Paquetes
</h2> <h3 class="w-full max-w-2xl px-5 mt-2 text-2xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0">
Planes accesibles para cualquiera
</h3> <div class="fw-full mx-auto md:max-w-6xl sm:px-8"> <!-- Basic Pricing --> <div class="relative flex flex-col items-center sm:flex-row gap-8"> ${renderComponent($$result, "Paquetes", $$Paquetes, { "title": "B\xE1sico", "content": ["5 sesiones", "Servicio a domicilio"], "description": "Paquete de 5 sesiones de terapia f\xEDsica", "price": 1700, "message": "Hola, me gustar\xEDa saber m\xE1s acerca de tu paquete BASICO de 5 sesiones" })} ${renderComponent($$result, "Paquetes", $$Paquetes, { "title": "Pro", "content": ["10 sesiones", "Servicio a domicilio"], "description": "Paquete de 10 sesiones de terapia f\xEDsica", "price": 3e3, "message": "Hola, me gustar\xEDa saber m\xE1s acerca de tu paquete PRO de 10 sesiones" })} </div> </div> </div> </div>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/Treatments.astro", void 0);

const Image = new Proxy({"src":"/_astro/inicio.DI6hOw_f.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/images/inicio.jpg";
							}
							
							return target[name];
						}
					});

const $$Home = createComponent(($$result, $$props, $$slots) => {
  const phoneNumber = "+523332579424";
  const message = "Hola, me gustar\xEDa agendar una cita";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-100" id="inicio"> <section class="cover bg-blue-teal-gradient relative bg-blue-400 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
    items-center"> <div class="h-full w-full absolute top-0 left-0 z-0"> <img${addAttribute(Image.src, "src")} alt="" class="w-full h-full object-cover opacity-20"> </div> <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16"> <div> <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
Una vida comienza con una salud integral
</h1> <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
Bienvenido a Physical Rehabilitation, especializado en la recuperación
          de lesiones, donde la confianza y la comodidad son prioridades.
</p> <a target="_blank"${addAttribute(whatsappLink, "href")} class="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold hover:bg-black active:bg-black">Agendar Cita</a> </div> </div> </section> </div>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/Home.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32"> <div class="flex flex-col md:flex-row lg:-mx-8 gap-8"> <div class="w-full lg:w-1/2 lg:px-8"> <h6 class="text-sm uppercase font-semibold tracking-widest">
Nuestra clinica
</h6> <h2 class="text-3xl leading-tight font-bold mt-4">
Bienvenidos a Physical Rehabilitation
</h2> <p class="text-lg mt-4">Profesionales en la recuperación física</p> <p class="mt-2 leading-relaxed">
En Physical Rehabilitation, nos dedicamos a ofrecer servicios de alta
        calidad para la recuperación física. Nuestro equipo de profesionales
        está comprometido con tu bienestar, proporcionando tratamientos
        personalizados y efectivos para ayudarte a volver a tu mejor forma. Ya
        sea que estés recuperándote de una lesión, una cirugía o buscando
        mejorar tu movilidad y fuerza, estamos aquí para apoyarte en cada paso
        del camino. Confía en nuestra experiencia y dedicación para brindarte el
        cuidado que necesitas para una recuperación completa y saludable.
</p> </div> <div class="w-full lg:w-1/2 lg:px-8"> <div class="flex"> <div> <div class="w-12 h-12 bg-teal-400 rounded-full"></div> </div> <div class="ml-8"> <h4 class="text-xl font-bold">
Todo lo que necesitas en un solo lugar
</h4> <p class="mt-2 leading-relaxed">
Nuestros servicios integrales te permiten recibir toda la atención
            necesaria para tu recuperación física aquí mismo en nuestra clínica
            de última generación, desde terapias manuales y ejercicios de
            rehabilitación hasta tratamientos avanzados para lesiones y
            recuperación postoperatoria.
</p> </div> </div> <div class="flex mt-8"> <div> <div class="w-12 h-12 bg-teal-400 rounded-full"></div> </div> <div class="ml-8"> <h4 class="text-xl font-bold">
Nuestro enfoque centrado en el paciente
</h4> <p class="mt-2 leading-relaxed">
Tu plan de tratamiento se ajustará perfectamente a tus necesidades,
            estilo de vida y objetivos. Incluso si ha pasado mucho tiempo desde
            tu última visita, podemos ayudarte. Nuestra clínica cómoda, nuestro
            equipo compasivo y nuestros tratamientos mínimamente invasivos te
            harán sentir completamente a gusto.
</p> </div> </div> </div> </div> </section>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/AboutUs.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const phoneNumber = "+523332579424";
  const message = "Hola, me gustar\xEDa agendar una cita";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-teal-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8"> <div class="flex items-center justify-center"> <h2 class="text-xl font-bold text-white">
Contactanos hoy mismo! Manda mensage por WhatsApp
</h2> <a target="_blank"${addAttribute(whatsappLink, "href")} class="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold ml-8">Agendar</a> </div> </section>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/CallToAction.astro", void 0);

const customAxios = axios.create({
  baseURL: "https://physical-rehabilitation-53187579fd28.herokuapp.com/"
});
customAxios.defaults.headers.common["Accept"] = "application/json";
customAxios.defaults.headers.common["Content-Type"] = "application/json";
customAxios.interceptors.response.use(
  //@ts-ignore
  (response) => {
    if (response.config)
      console.info(
        //@ts-ignore
        `[AXIOS]:${response.config.method.toUpperCase()}:${response.config.url}`,
        {
          config: response.config,
          data: response.data
        }
      );
    return {
      ok: true,
      status: response.status,
      data: (response || {}).data,
      //@ts-ignore
      message: response.message
    };
  },
  (error) => {
    console.log({
      error
    });
    if (error.response)
      throw {
        ok: false,
        status: error.response.status,
        data: error.response.data,
        message: error.response.message
      };
    throw {
      ok: false,
      status: 400,
      message: "Axios error"
    };
  }
);
customAxios.origin = axios;

const ENDPOINT = "sendgrid";
const sendEmail = async ({
  Subject,
  Text,
  To
}) => {
  try {
    const {
      data
    } = await customAxios.post(`${ENDPOINT}/feedback`, {
      To,
      Subject,
      Text
    });
    return data;
  } catch (error) {
    throw new Error(`Something gas wrong try to send email`);
  }
};

const $$Astro$1 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const email = data.get("email");
      const message = data.get("message");
      console.log(email, message);
      await sendEmail({
        To: "tfisicarehabilitation@gmail.com",
        Subject: `Comentario creado por: ${email}`,
        Text: `Comentario: ${message}`
      });
    } catch (error) {
      console.error(error);
    }
  }
  if (Astro2.request.method == "POST") {
    try {
      const data = await Astro2.request.formData();
      const messaje = data.get("message");
      const email = data.get("email");
      console.log(email, messaje);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<section id="call-to-action" class="text-gray-600 body-font relative"> <div class="absolute inset-0 bg-gray-300"> <!-- <iframe
     
      title="map"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> --> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.4508012088136!2d-103.29860967820066!3d20.654676912213812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3c453ca6f09%3A0x6e7aa68edff42ea8!2sC.%203%20de%20Junio%20421%2C%20San%20Rafael%2C%2044810%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1716350997843!5m2!1ses-419!2smx" width="100%" height="100%" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> <div class="container px-5 py-24 mx-auto flex"> <form method="POST" class="lg:w-1/3 md:w-1/2 bg-teal-500 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md text-teal-100"> <h2 class="text-xl mb-1 font-medium title-font">Comentarios</h2> <p class="leading-relaxed mb-5">
Nos interesa saber que opinas, dejanos tu comentario
</p> <div class="relative mb-4"> <label for="email" class="leading-7 text-sm">Correo
<input required type="email" id="email" name="email" class="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-nonepy-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> </label> <!-- {errors.email && <p>{errors.email}</p>} --> </div> <div class="relative mb-4"> <label for="message" class="leading-7 text-sm">Mensaje
<textarea required id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea> </label> <!-- {errors.message && <p>{errors.message}</p>} --> </div> <button type="submit" class="text-black bg-teal-200 border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white active:bg-black active:text-white rounded text-lg">Enviar</button> </form> </div> </section>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/Contact.astro", void 0);

const $$Astro = createAstro();
const $$CarouselItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CarouselItem;
  const { description, title, message } = Astro2.props;
  const phoneNumber = "+523332579424";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-lg p-8 md:mx-4 w-60 h-6/8"> ${renderSlot($$result, $$slots["default"])} <h4 class="text-xl font-bold">${title}</h4> <p class="mt-1">${description}</p> <a${addAttribute(whatsappLink, "href")} target="_blank" class="block mt-4 p-2 bg-teal-500 rounded-lg text-white text-center hover:bg-black active:bg-black">Saber más</a> </div>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/services/CarouselItem.astro", void 0);

const $$LargeCarpusel = createComponent(($$result, $$props, $$slots) => {
  const firstGroupCarouselItems = [
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre su servicio de Rehabilitaci\xF3n pre y postquir\xFArgica.",
      title: "Rehabilitaci\xF3n pre y postquir\xFArgica",
      description: "Acelera la recuperaci\xF3n antes y despu\xE9s de una cirug\xEDa."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre la Aplicaci\xF3n de Kinesiotape.",
      title: "Aplicaci\xF3n de Kinesiotape",
      description: "Soporte muscular y articular sin restringir el movimiento."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre su servicio de Rehabilitaci\xF3n ortop\xE9dica.",
      title: "Rehabilitaci\xF3n ortop\xE9dica",
      description: "Recupera fuerza y movilidad tras lesiones musculoesquel\xE9ticas."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre sus Masajes deportivos.",
      title: "Masajes deportivos",
      description: "Prevenci\xF3n de lesiones y mejora del rendimiento deportivo."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre sus Masajes relajantes.",
      title: " Masajes de relajaci\xF3n",
      description: "Reducci\xF3n del estr\xE9s y promoci\xF3n de la relajaci\xF3n."
    }
  ];
  const secondGroupCarouselItems = [
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre su servicio de Rehabilitaci\xF3n Deportiva.",
      title: "Rehabilitaci\xF3n Deportiva",
      description: "Recuperaci\xF3n r\xE1pida de lesiones para deportistas."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre los Ejercicios con fines terap\xE9uticos que ofrecen.",
      title: "Ejercicios con fines terap\xE9uticos",
      description: "Mejora la fuerza, flexibilidad y funcionalidad personalizadas."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre su servicio de Rehabilitaci\xF3n geri\xE1trica.",
      title: "Rehabilitaci\xF3n geri\xE1trica",
      description: "Mant\xE9n la independencia y calidad de vida en adultos mayores."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre su servicio de Fisioterapia Traumatol\xF3gica.",
      title: "Fisioterapia Traumatol\xF3gica",
      description: "Tratamiento de lesiones traum\xE1ticas como fracturas y esguinces."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre su servicio de Fisioterapia Neurol\xF3gica.",
      title: "Fisioterapia Neurol\xF3gica",
      description: "Mejora la movilidad en afecciones del sistema nervioso."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="duration-700 ease-in-out flex justify-center items-center" data-carousel-item> ${firstGroupCarouselItems.map(({ description, message, title }) => {
    return renderTemplate`${renderComponent($$result, "CarouselItem", $$CarouselItem, { "description": description, "message": message, "title": title }, {})}`;
  })} </div> <!-- Item 2 --> <div class="duration-700 ease-in-out flex justify-center items-center" data-carousel-item> ${secondGroupCarouselItems.map(({ description, message, title }) => {
    return renderTemplate`${renderComponent($$result, "CarouselItem", $$CarouselItem, { "description": description, "message": message, "title": title }, {})}`;
  })} </div>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/services/LargeCarpusel.astro", void 0);

const $$MediumCarousel = createComponent(($$result, $$props, $$slots) => {
  const firstGroupCarouselItems = [
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre su servicio de Rehabilitaci\xF3n pre y postquir\xFArgica.",
      title: "Rehabilitaci\xF3n pre y postquir\xFArgica",
      description: "Acelera la recuperaci\xF3n antes y despu\xE9s de una cirug\xEDa."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre la Aplicaci\xF3n de Kinesiotape.",
      title: "Aplicaci\xF3n de Kinesiotape",
      description: "Soporte muscular y articular sin restringir el movimiento."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre su servicio de Rehabilitaci\xF3n ortop\xE9dica.",
      title: "Rehabilitaci\xF3n ortop\xE9dica",
      description: "Recupera fuerza y movilidad tras lesiones musculoesquel\xE9ticas."
    }
  ];
  const secondGroupCarouselItems = [
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre sus Masajes deportivos.",
      title: "Masajes deportivos",
      description: "Prevenci\xF3n de lesiones y mejora del rendimiento deportivo."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre sus Masajes relajantes.",
      title: " Masajes de relajaci\xF3n",
      description: "Reducci\xF3n del estr\xE9s y promoci\xF3n de la relajaci\xF3n."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre su servicio de Rehabilitaci\xF3n Deportiva.",
      title: "Rehabilitaci\xF3n Deportiva",
      description: "Recuperaci\xF3n r\xE1pida de lesiones para deportistas."
    }
  ];
  const thirdGroupCarouselItems = [
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre los Ejercicios con fines terap\xE9uticos que ofrecen.",
      title: "Ejercicios con fines terap\xE9uticos",
      description: "Mejora la fuerza, flexibilidad y funcionalidad personalizadas."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre su servicio de Rehabilitaci\xF3n geri\xE1trica.",
      title: "Rehabilitaci\xF3n geri\xE1trica",
      description: "Mant\xE9n la independencia y calidad de vida en adultos mayores."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre su servicio de Fisioterapia Traumatol\xF3gica.",
      title: "Fisioterapia Traumatol\xF3gica",
      description: "Tratamiento de lesiones traum\xE1ticas como fracturas y esguinces."
    }
  ];
  const lastGroupItems = [
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre su servicio de Fisioterapia Neurol\xF3gica.",
      title: "Fisioterapia Neurol\xF3gica",
      description: "Mejora la movilidad en afecciones del sistema nervioso."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="duration-700 ease-in-out flex justify-center items-center" data-carousel-item> ${firstGroupCarouselItems.map(({ description, message, title }) => {
    return renderTemplate`${renderComponent($$result, "CarouselItem", $$CarouselItem, { "description": description, "message": message, "title": title }, {})}`;
  })} </div> <!-- Item 2 --> <div class="duration-700 ease-in-out flex justify-center items-center" data-carousel-item> ${secondGroupCarouselItems.map(({ description, message, title }) => {
    return renderTemplate`${renderComponent($$result, "CarouselItem", $$CarouselItem, { "description": description, "message": message, "title": title }, {})}`;
  })} </div> <!-- Item 3 --> <div class="duration-700 ease-in-out flex justify-center items-center" data-carousel-item> ${thirdGroupCarouselItems.map(({ description, message, title }) => {
    return renderTemplate`${renderComponent($$result, "CarouselItem", $$CarouselItem, { "description": description, "message": message, "title": title }, {})}`;
  })} </div> <!-- Item 4 --> <div class="duration-700 ease-in-out flex justify-center items-center" data-carousel-item> ${lastGroupItems.map(({ description, message, title }) => {
    return renderTemplate`${renderComponent($$result, "CarouselItem", $$CarouselItem, { "description": description, "message": message, "title": title }, {})}`;
  })} </div>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/services/MediumCarousel.astro", void 0);

const $$SmallCarousel = createComponent(($$result, $$props, $$slots) => {
  const firstGroupCarouselItems = [
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre su servicio de Rehabilitaci\xF3n pre y postquir\xFArgica.",
      title: "Rehabilitaci\xF3n pre y postquir\xFArgica",
      description: "Acelera la recuperaci\xF3n antes y despu\xE9s de una cirug\xEDa."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre la Aplicaci\xF3n de Kinesiotape.",
      title: "Aplicaci\xF3n de Kinesiotape",
      description: "Soporte muscular y articular sin restringir el movimiento."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre su servicio de Rehabilitaci\xF3n ortop\xE9dica.",
      title: "Rehabilitaci\xF3n ortop\xE9dica",
      description: "Recupera fuerza y movilidad tras lesiones musculoesquel\xE9ticas."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre sus Masajes deportivos.",
      title: "Masajes deportivos",
      description: "Prevenci\xF3n de lesiones y mejora del rendimiento deportivo."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre sus Masajes relajantes.",
      title: " Masajes de relajaci\xF3n",
      description: "Reducci\xF3n del estr\xE9s y promoci\xF3n de la relajaci\xF3n."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre su servicio de Rehabilitaci\xF3n Deportiva.",
      title: "Rehabilitaci\xF3n Deportiva",
      description: "Recuperaci\xF3n r\xE1pida de lesiones para deportistas."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre los Ejercicios con fines terap\xE9uticos que ofrecen.",
      title: "Ejercicios con fines terap\xE9uticos",
      description: "Mejora la fuerza, flexibilidad y funcionalidad personalizadas."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre su servicio de Rehabilitaci\xF3n geri\xE1trica.",
      title: "Rehabilitaci\xF3n geri\xE1trica",
      description: "Mant\xE9n la independencia y calidad de vida en adultos mayores."
    },
    {
      message: "Hola, me gustar\xEDa saber m\xE1s sobre su servicio de Fisioterapia Traumatol\xF3gica.",
      title: "Fisioterapia Traumatol\xF3gica",
      description: "Tratamiento de lesiones traum\xE1ticas como fracturas y esguinces."
    },
    {
      message: "Hola, me gustar\xEDa obtener informaci\xF3n sobre su servicio de Fisioterapia Neurol\xF3gica.",
      title: "Fisioterapia Neurol\xF3gica",
      description: "Mejora la movilidad en afecciones del sistema nervioso."
    }
  ];
  return renderTemplate`${firstGroupCarouselItems.map(({ description, message, title }) => {
    return renderTemplate`${maybeRenderHead()}<div class="duration-700 ease-in-out flex justify-center items-center" data-carousel-item>${renderComponent($$result, "CarouselItem", $$CarouselItem, { "description": description, "message": message, "title": title }, {})}</div>`;
  })}`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/services/SmallCarousel.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- CARAOUSEL -->${maybeRenderHead()}<div id="tratamientos" class="relative w-full" data-carousel="static"> <!-- Carousel wrapper --> <div class="h-96 overflow-hidden rounded-lg flex justify-center items-center bg-blue-300"> <div class="self-start p-4"> <h4 class="text-black text-md uppercase font-semibold tracking-widest bg-blue-300">
Tratamientos
</h4> </div> <!-- LARGE CARoUSEL --> <div class="hidden xl:block"> ${renderComponent($$result, "LargeCarpusel", $$LargeCarpusel, {})} <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button> </div> </div> <!-- LARGE CARoUSEL --> <div class="hidden md:block lg:hidden"> ${renderComponent($$result, "MediumCarousel", $$MediumCarousel, {})} <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="true" aria-label="Slide 3" data-carousel-slide-to="3"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="4"></button> </div> </div> <div class="block md:hidden"> ${renderComponent($$result, "SmallCarousel", $$SmallCarousel, {})} <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="true" aria-label="Slide 3" data-carousel-slide-to="3"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="4"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="5"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="6"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="7"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="8"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="9"></button> <button type="button" class="w-3 h-3 rounded-full bg-gray-600" aria-current="false" aria-label="Slide 10" data-carousel-slide-to="10"></button> </div> </div> <!-- Slider indicators --> <!-- Slider controls --> <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> </div>`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/components/services/Services.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Combos", $$Treatments, {})}  ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ` })}`;
}, "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/pages/index.astro", void 0);

const $$file = "/Users/christianalejandroramosperez/Documents/Proyects/PhysicalRehabilitation/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
