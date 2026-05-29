export const parseSearchKeyword = (search = "") => {
  const params = new URLSearchParams(
    search.startsWith("?") ? search.slice(1) : search
  );
  const raw = params.get("q") || params.get("query") || "";
  return decodeURIComponent(raw.replace(/\+/g, " "));
};
