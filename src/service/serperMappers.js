const getDomain = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const parseNewsDate = (dateStr) => {
  const now = new Date();
  const fallback = [
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    0,
    0,
    0,
    0,
    0,
    0,
  ];

  if (!dateStr) return fallback;

  const parsed = new Date(dateStr);
  if (!Number.isNaN(parsed.getTime())) {
    return [
      parsed.getFullYear(),
      parsed.getMonth() + 1,
      parsed.getDate(),
      parsed.getHours(),
      parsed.getMinutes(),
      parsed.getSeconds(),
      0,
      0,
      0,
    ];
  }

  return fallback;
};

export const mapWebSearchResponse = (data, ts) => ({
  results: (data.organic || []).map((item) => ({
    title: item.title,
    link: item.link,
    description: item.snippet || "",
    additional_links: (item.sitelinks || []).map((site) => ({
      text: site.title,
      href: site.link,
    })),
    cite: {},
  })),
  image_results: [],
  total: data.organic?.length ? data.organic.length * 1000000 : 0,
  answers: (data.peopleAlsoAsk || []).map((item) => item.question),
  ts,
  device_region: "US",
  device_type: "desktop",
});

export const mapImageSearchResponse = (data) => ({
  answers: [],
  image_results: (data.images || []).map((item) => ({
    image: {
      alt: item.title || "",
      src: item.imageUrl,
    },
    link: {
      domain: item.domain || getDomain(item.link),
      href: item.link,
      title: item.title || "",
    },
  })),
  results: [],
  total: data.images?.length ?? 0,
});

export const mapNewsSearchResponse = (data) => ({
  entries: (data.news || []).map((item, index) => ({
    guidislink: false,
    id: item.link || `news-${index}`,
    link: item.link,
    published: item.date || "",
    published_parsed: parseNewsDate(item.date),
    source: {
      href: item.link,
      title: item.source || getDomain(item.link),
    },
    sub_articles: [],
    summary: item.snippet || "",
    summary_detail: {
      base: "",
      language: null,
      type: "text/html",
      value: item.snippet || "",
    },
    title: item.title,
    title_detail: {
      base: "",
      language: null,
      type: "text/plain",
      value: item.title,
    },
  })),
  feed: {},
});
