export type Lang = "en" | "es";

export type Content = {
  nav: { about: string; why: string; reviews: string; contact: string };
  hero: {
    tagline: string;
    subtagline: string;
    lead: string;
    cta: string;
    ctaSecondary: string;
  };
  about: { kicker: string; title: string; body: string };
  why: {
    kicker: string;
    title: string;
    quality: { title: string; body: string };
    guarantee: { title: string; body: string };
  };
  reviews: {
    kicker: string;
    title: string;
    disclaimer: string;
    items: { name: string; role: string; quote: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    emailLabel: string;
    whatsappLabel: string;
  };
  footer: { rights: string; credit: string };
};

export const content: Record<Lang, Content> = {
  en: {
    nav: { about: "About", why: "Why Us", reviews: "Reviews", contact: "Contact" },
    hero: {
      tagline: "Beyond Borders. Beyond Possibilities.",
      subtagline: "Más allá de las fronteras. Más allá de las posibilidades.",
      lead:
        "We bring premium kitchen and electronics essentials into homes that don't settle for less.",
      cta: "Get in Touch",
      ctaSecondary: "About Us",
    },
    about: {
      kicker: "Who We Are",
      title: "A family business built on one idea",
      body: "Global Beyond LLC started with a simple frustration: the kitchen and electronics you actually want shouldn't be hard to find, or feel disposable the moment you get them home. We source pieces built to last, curated for families who'd rather buy once and buy right.",
    },
    why: {
      kicker: "Why Global Beyond",
      title: "Two things we don't compromise on",
      quality: {
        title: "Premium Quality",
        body: "Every product goes through the same question before it reaches our catalog: would we put this in our own kitchen? If the answer's no, it doesn't make the cut.",
      },
      guarantee: {
        title: "Real Guarantee",
        body: "Not the fine-print kind. If something arrives wrong or doesn't hold up, you tell us and we fix it — no runaround, no forms to chase.",
      },
    },
    reviews: {
      kicker: "What People Say",
      title: "Early feedback from our first customers",
      disclaimer: "Example reviews — real customer stories coming soon.",
      items: [
        {
          name: "Marissa Ortiz",
          role: "Miami, FL",
          quote:
            "The set we bought looks and feels like it costs twice as much. Shipping was fast and everything arrived exactly as pictured.",
        },
        {
          name: "David Chen",
          role: "Austin, TX",
          quote:
            "Reached out with a question before ordering and got a real answer in minutes, not a bot. That alone earned my business.",
        },
        {
          name: "Ana Beltrán",
          role: "Houston, TX",
          quote:
            "Finally an electronics brand that doesn't feel disposable. Solid build, no buyer's remorse.",
        },
      ],
    },
    contact: {
      kicker: "Let's Talk",
      title: "Questions, bulk orders, or just want to say hi?",
      body: "Reach out directly — a real person reads every message.",
      emailLabel: "Email us",
      whatsappLabel: "WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
      credit: "Built with Claude Web Builder by",
    },
  },
  es: {
    nav: { about: "Nosotros", why: "Por Qué", reviews: "Reseñas", contact: "Contacto" },
    hero: {
      tagline: "Beyond Borders. Beyond Possibilities.",
      subtagline: "Más allá de las fronteras. Más allá de las posibilidades.",
      lead:
        "Llevamos productos premium de cocina y electrónicos a hogares que no se conforman con menos.",
      cta: "Contáctanos",
      ctaSecondary: "Quiénes Somos",
    },
    about: {
      kicker: "Quiénes Somos",
      title: "Un negocio familiar construido sobre una idea",
      body: "Global Beyond LLC nació de una frustración simple: los productos de cocina y electrónicos que de verdad quieres no deberían ser difíciles de encontrar, ni sentirse desechables apenas llegan a casa. Buscamos piezas hechas para durar, pensadas para familias que prefieren comprar una vez y comprar bien.",
    },
    why: {
      kicker: "Por Qué Global Beyond",
      title: "Dos cosas en las que no cedemos",
      quality: {
        title: "Calidad Premium",
        body: "Cada producto pasa por la misma pregunta antes de llegar a nuestro catálogo: ¿lo pondríamos en nuestra propia cocina? Si la respuesta es no, no entra.",
      },
      guarantee: {
        title: "Garantía Real",
        body: "No de las de letra chica. Si algo llega mal o no aguanta, nos dices y lo resolvemos — sin vueltas ni trámites eternos.",
      },
    },
    reviews: {
      kicker: "Lo Que Dicen",
      title: "Primeras opiniones de nuestros clientes",
      disclaimer: "Reseñas de ejemplo — historias reales de clientes muy pronto.",
      items: [
        {
          name: "Marissa Ortiz",
          role: "Miami, FL",
          quote:
            "El set que compramos se ve y se siente como si costara el doble. El envío fue rápido y todo llegó tal cual la foto.",
        },
        {
          name: "David Chen",
          role: "Austin, TX",
          quote:
            "Pregunté algo antes de comprar y me respondió una persona real en minutos, no un bot. Eso ya se ganó mi compra.",
        },
        {
          name: "Ana Beltrán",
          role: "Houston, TX",
          quote:
            "Por fin una marca de electrónicos que no se siente desechable. Construcción sólida, sin arrepentimientos.",
        },
      ],
    },
    contact: {
      kicker: "Hablemos",
      title: "¿Dudas, pedidos al mayoreo, o solo quieres saludar?",
      body: "Escríbenos directo — una persona real lee cada mensaje.",
      emailLabel: "Escríbenos",
      whatsappLabel: "WhatsApp",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      credit: "Hecho con Claude Web Builder por",
    },
  },
};

export const CONTACT = {
  email: "javier.torres@globalbeyondllc.com",
  whatsapp: "17863344556",
  whatsappDisplay: "+1 (786) 334-4556",
  instagram: "https://instagram.com/globalbeyondllc",
  instagramHandle: "@globalbeyondllc",
};
