import Axios from "./axiosInstance";

const getSearchApi = async () => {
  let data = {
    results: [
      {
        title: "Dota 2",
        link: "https://www.dota2.com/",
        description: "",
        additional_links: [
          {
            text: "Dota 2https://www.dota2.com",
            href: "https://www.dota2.com/",
          },
          {
            text: "Heroes",
            href: "https://www.dota2.com/heroes",
          },
        ],
        cite: {},
      },
      {
        title: "DOTA 2 (@DOTA2) · Twitter",
        link: "https://twitter.com/DOTA2?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        description:
          "Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTSdashdhasdsajhdmhs sdakjhdkashdsajd dsakdhk",
        cite: {},
      },
      {
        title: "DOTA 2 (@DOTA2) · Twitter",
        link: "https://twitter.com/DOTA2?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        description: "",
        cite: {},
      },
    ],
    image_results: [],
    total: 272000000,
    answers: [
      "Is DotA 3 coming?",
      "Is Dota 2 free?",
      "Which is better Dota 2 or LOL?",
      "How big is Dota 2?",
    ],
    ts: 2.90442156791687,
    device_region: "EU",
    device_type: "desktop",
  };
  let dataImg = {
    answers: [],
    image_results: [
      {
        image: {
          alt: "Tesla Model S — Wikipédia",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcyfRzUGtO3mSZAAaAG-SbsljU7esjzmT5lQ&usqp=CAU",
        },
        link: {
          domain: "fr.wikipedia.org",
          href: "https://fr.wikipedia.org/wiki/Tesla_Model_S",
          title: "Tesla Model S — Wikipédia",
        },
      },
      {
        image: {
          alt: "Tesla Model S — Wikipédia",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwhfgafGneYwzBKaSEzGsS-ugj-3WHDGmAig&usqp=CAU",
        },
        link: {
          domain: "fr.wikipedia.org",
          href: "https://fr.wikipedia.org/wiki/Tesla_Model_S",
          title: "Tesla Model S — Wikipédia",
        },
      },
      {
        image: {
          alt: "Tesla Model S — Wikipédia",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwhfgafGneYwzBKaSEzGsS-ugj-3WHDGmAig&usqp=CAU",
        },
        link: {
          domain: "fr.wikipedia.org",
          href: "https://fr.wikipedia.org/wiki/Tesla_Model_S",
          title: "Tesla Model S — Wikipédia",
        },
      },
      {
        image: {
          alt: "Tesla Model S — Wikipédia",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwhfgafGneYwzBKaSEzGsS-ugj-3WHDGmAig&usqp=CAU",
        },
        link: {
          domain: "fr.wikipedia.org",
          href: "https://fr.wikipedia.org/wiki/Tesla_Model_S",
          title: "Tesla Model S — Wikipédia",
        },
      },
      {
        image: {
          alt: "Tesla Model S — Wikipédia",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwhfgafGneYwzBKaSEzGsS-ugj-3WHDGmAig&usqp=CAU",
        },
        link: {
          domain: "fr.wikipedia.org",
          href: "https://fr.wikipedia.org/wiki/Tesla_Model_S",
          title: "Tesla Model S — Wikipédia",
        },
      },
      {
        image: {
          alt: "Tesla Model S — Wikipédia",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmsxnwoceLA1hl_u0MgMbBa35fXTAoumf1JA&usqp=CAU",
        },
        link: {
          domain: "fr.wikipedia.org",
          href: "https://fr.wikipedia.org/wiki/Tesla_Model_S",
          title: "Tesla Model S — Wikipédia",
        },
      },
      {
        image: {
          alt: "Tesla Model S — Wikipédia",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmsxnwoceLA1hl_u0MgMbBa35fXTAoumf1JA&usqp=CAU",
        },
        link: {
          domain: "fr.wikipedia.org",
          href: "https://fr.wikipedia.org/wiki/Tesla_Model_S",
          title: "Tesla Model S — Wikipédia",
        },
      },
    ],
    results: [],
    total: null,
  };
  let dataNews = {
    entries: [
      {
        guidislink: false,
        id: "CBMiaWh0dHBzOi8vd3d3LndoaXRlaG91c2UuZ292L2JyaWVmaW5ncy1zdGF0ZW1lbnRzL3ByZXNzLWJyaWVmaW5nLXByZXNzLXNlY3JldGFyeS1rYXlsZWlnaC1tY2VuYW55LTctOS0yMDIwL9IBAA",
        link: "https://www.whitehouse.gov/briefings-statements/press-briefing-press-secretary-kayleigh-mcenany-7-9-2020/",
        links: [
          {
            href: "https://www.whitehouse.gov/briefings-statements/press-briefing-press-secretary-kayleigh-mcenany-7-9-2020/",
            rel: "alternate",
            type: "text/html",
          },
        ],
        published: "Thu, 09 Jul 2020 22:18:58 GMT",
        published_parsed: [2020, 7, 9, 22, 18, 58, 3, 191, 0],
        source: {
          href: "https://www.whitehouse.gov",
          title: "Whitehouse.gov",
        },
        sub_articles: [],
        summary: "",
        summary_detail: {
          base: "",
          language: null,
          type: "text/html",
          value: "",
        },
        title:
          "Press Briefing by Press Secretary Kayleigh McEnany | 7/9/2020 - Whitehouse.gov",
        title_detail: {
          base: "",
          language: null,
          type: "text/plain",
          value:
            "Press Briefing by Press Secretary Kayleigh McEnany | 7/9/2020 - Whitehouse.gov",
        },
      },
      {
        guidislink: false,
        id: "CBMiZ2h0dHBzOi8vd3d3LndoaXRlaG91c2UuZ292L2JyaWVmaW5ncy1zdGF0ZW1lbnRzL3ByZXNzLWJyaWVmaW5nLXByZXNzLXNlY3JldGFyeS1rYXlsZWlnaC1tY2VuYW55LTA3MDYyMC_SAQA",
        link: "https://www.whitehouse.gov/briefings-statements/press-briefing-press-secretary-kayleigh-mcenany-7-9-2020/",
        links: [
          {
            href: "https://www.whitehouse.gov/briefings-statements/press-briefing-press-secretary-kayleigh-mcenany-7-9-2020/",
            rel: "alternate",
            type: "text/html",
          },
        ],
        published: "Thu, 09 Jul 2020 22:18:58 GMT",
        published_parsed: [2020, 7, 9, 22, 18, 58, 3, 191, 0],
        source: {
          href: "https://www.whitehouse.gov",
          title: "Whitehouse.gov",
        },
        sub_articles: [],
        summary: "",
        summary_detail: {
          base: "",
          language: null,
          type: "text/html",
          value: "",
        },
        title: "Press Briefing by Press BACOD",
        title_detail: {
          base: "",
          language: null,
          type: "text/plain",
          value:
            "Press Briefing by Press Secretary Kayleigh McEnany | 7/9/2020 - Whitehouse.gov",
        },
      },
    ],
    feed: {},
  };

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });

  return promise;
};

export default getSearchApi;
