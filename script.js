// ========== TRADUCCIÓN BILINGÜE (Guarani / Español) ==========
      const translations = {
        gn: {
          "nav-inicio": "Ñepyrũ",
          "nav-historia": "Tembiasakue",
          "nav-paraguay": "Paraguay",
          "nav-teko": "Teko",
          "hero-sub":
            "Ñande Paraguay retã ruvicha marangatu ha ñe'ẽ ruguá ñangarekoha",
          "audio-title": "Narración oral · Ñe'ẽ ry",
          "audio-desc":
            "Purahéi oñe'ẽva ha'e rehegua.",
          "audio-foot": "Ñe'ẽnga oñe'ẽva tapicha ndaikuaaiva moñe'ẽ pe guarã",
          "cinta-text": "Cinta pytã · Símbolo de protección",
          "historia-title": "Tembiasakue · Raíz viva",
          "historia-card1":
            "San Blas ha’e peteĩ pohãnohára ha pa’i guasu Armenia-pe. Oipytyvõ heta tapicha ha mymba hasývape, ijeroviáre.",
          "historia-card2":
            "Ojekuaa chupe oñangareko haguére peteĩ mitã’i ojejopyva pira kanguére. Upévare ha’e ñe’ẽ ruguá ñangarekoha.",
          "historia-card3":
            "Omano ijerovia rehehápe, ohasa asy rire, ha oiko santo tuicháva kristiano-kuérape.",
          "historia-quote":
            "San Blas pytyvõ ohóva ha ogueru esperanza, ipópe oguereko poguy marangatu.",
          "paraguay-title": "Paraguay retãme · Mombe'urã",
          "paraguay-card1":
            "1539-pe oñemombe’u peteĩ ñorairõ Asunción-pe, ha San Blas ojehecha oñangarekóva tavayguakuérape.",
          "paraguay-card2":
            "Peteĩ kuimba’e ao morotĩ rehegua ojekuaa muralla ári, ha umi atacante okyhyje ha oheka.",
          "paraguay-card3":
            "Peteĩ guyra osapukái “Blas”, ha umi tapicha ohechakuaa ha’eha ñangareko marangatu.",
          "paraguay-quote":
            "Ha’e ñande joguaha yvytu poty, oipytyvõva opa mba’e asy",
          "tradicion-title": "Teko ha Jepokuaa · Creencias vivas",
          "tradicion-card1strong": "3 jasypokõi",
          "tradicion-card1":
            "— umi tapicha ogueru cinta pytã oñeñapytĩ hag̃ua ijajúre ñangarekorã.",
          "tradicion-card2":
            "Karu guasu ojapo umi familia ohupyty rire peteĩ milagro ha ome’ẽ tembi’u maymávape.",
          "tradicion-card3":
            "Purahéi ha jeroky oiko San Blas ára, ko’ýte bandita ha galopera reheve.",
          "tradicion-footer": "Cinta pytã ha’e ñangareko rysýi",
          footer1: "Haihára: Valeria Isabel Bogarin Flecha",
          footer2:
            "Tembiasakue ñemombe’u ñe’ẽ rupive opavavépe guarã - 2026",
        },
        es: {
          "nav-inicio": "Inicio",
          "nav-historia": "Historia",
          "nav-paraguay": "Paraguay",
          "nav-teko": "Tradición",
          "hero-sub": "Santo patrono del Paraguay y protector de la garganta",
          "audio-title": "Narración oral · Escucha la leyenda",
          "audio-desc":
            "Relato completo sobre su milagro.",
          "audio-foot": "Narración pensada para quienes dificultan leer",
          "cinta-text": "Cinta roja · Símbolo de protección",
          "historia-title": "Historia · Raíz viva",
          "historia-card1":
            "San Blas fue un médico y obispo en Armenia. Ayudó a muchas personas y animales enfermos con su fe.",
          "historia-card2":
            "Se le conoce por salvar a un niño que se había atragantado con una espina de pescado. Por eso es protector de la garganta.",
          "historia-card3":
            "Murió mártir por su fe, tras sufrir persecución, y se convirtió en un santo muy venerado.",
          "historia-quote":
            "San Blas ayuda a los que sufren y trae esperanza; en sus manos hay poder sanador.",
          "paraguay-title": "En Paraguay · Leyenda",
          "paraguay-card1":
            "En 1539 se relata una batalla en Asunción, y San Blas fue visto protegiendo a los pobladores.",
          "paraguay-card2":
            "Un hombre vestido de blanco apareció sobre la muralla, los atacantes sintieron miedo y huyeron.",
          "paraguay-card3":
            "Un ave gritó 'Blas, Blas', y los pobladores reconocieron la protección divina.",
          "paraguay-quote":
            "Él es nuestra sombra de viento suave, que auxilia en toda dificultad.",
          "tradicion-title": "Costumbres · Creencias vivas",
          "tradicion-card1strong": "3 de julio",
          "tradicion-card1":
            "— los fieles llevan cinta roja para atarla al cuello pidiendo protección.",
          "tradicion-card2":
            "Gran comida comunitaria: las familias que reciben un milagro comparten alimentos con todos.",
          "tradicion-card3":
            "Cantos y danzas en el día de San Blas, al ritmo de bandita y galopera paraguaya.",
          "tradicion-footer": "La cinta roja es símbolo de amparo y fe",
          footer1: "Autora: Valeria Isabel Bogarin Flecha",
          footer2:
            "Narración oral para todos - 2026",
        },
      };

      let currentLang = "gn";

      function updateTexts() {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach((el) => {
          const key = el.getAttribute("data-i18n");
          if (translations[currentLang] && translations[currentLang][key]) {
            if (el.tagName === "INPUT" || el.isContentEditable) {
              el.value = translations[currentLang][key];
            } else {
              el.innerHTML = translations[currentLang][key];
            }
          }
        });
        // Actualizar atributos especiales para textos dentro de strong mezclados
        const tradStrong = document.querySelector(
          '[data-i18n="tradicion-card1strong"]',
        );
        if (tradStrong && currentLang === "es")
          tradStrong.innerText = "3 de julio";
        if (tradStrong && currentLang === "gn")
          tradStrong.innerText = "3 jasypokõi";
      }

      const langBtns = document.querySelectorAll(".lang-btn");
      langBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const lang = btn.getAttribute("data-lang");
          currentLang = lang;
          langBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          updateTexts();
        });
      });
      updateTexts();

      // ========== SCROLL REVEAL ==========
      const faders = document.querySelectorAll(".fade-scroll");
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -30px 0px" },
      );
      faders.forEach((el) => obs.observe(el));

      // ========== NAVBAR ACTIVE LINK ==========
      const sections = document.querySelectorAll(".section, .hero");
      const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
      function setActiveLink() {
        let currentId = "";
        const scrollPos = window.scrollY + 200;
        sections.forEach((sec) => {
          const top = sec.offsetTop;
          const bottom = top + sec.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            currentId = sec.getAttribute("id");
          }
        });
        if (window.scrollY < 80) currentId = "inicio";
        navLinks.forEach((link) => {
          link.classList.remove("active");
          const hash = link.getAttribute("href").substring(1);
          if (hash === currentId) link.classList.add("active");
        });
      }
      window.addEventListener("scroll", setActiveLink);
      window.addEventListener("load", setActiveLink);

      // ========== SMOOTH SCROLL + CORREGIR INICIO SIN SALTO ==========
      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const target = document.getElementById(targetId);
          if (target) {
            const offset = targetId === "inicio" ? 0 : 70;
            const y = target.offsetTop - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        });
      });

      // Go to top
      const goTop = document.getElementById("goTopBtn");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) goTop.classList.add("show-btn");
        else goTop.classList.remove("show-btn");
      });
      goTop.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" }),
      );

      // fijar que no haya salto automático al cargar (sin hash por defecto)
      if (window.location.hash === "" || window.location.hash === "#inicio") {
        window.scrollTo(0, 0);
      }

      // Cambiar fondo del navbar según scroll
      const navbar = document.querySelector(".navbar");
      const heroSection = document.getElementById("inicio");

      window.addEventListener("scroll", () => {
        const heroBottom = heroSection.offsetHeight;

        if (window.scrollY > heroBottom - 80) {
          navbar.classList.remove("transparent");
          navbar.classList.add("solid");
        } else {
          navbar.classList.add("transparent");
          navbar.classList.remove("solid");
        }
      });

      // Inicializar transparente al cargar
      navbar.classList.add("transparent");