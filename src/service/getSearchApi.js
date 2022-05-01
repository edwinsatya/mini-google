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

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return promise;
};

export default getSearchApi;
