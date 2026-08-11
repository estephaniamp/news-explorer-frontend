const NEWS_API_URL = "https://newsapi.org/v2/everything";
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
}

export function getNews(keyword) {
  const currentDate = new Date();
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  const to = currentDate.toISOString().split("T")[0];
  const from = sevenDaysAgo.toISOString().split("T")[0];

  const url = `${NEWS_API_URL}?q=${encodeURIComponent(
    keyword,
  )}&apiKey=${NEWS_API_KEY}&from=${from}&to=${to}&pageSize=100`;

  return fetch(url).then(checkResponse);
}
