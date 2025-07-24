import { useCallback, useState } from "react";
import type { NewsItem } from "../types";
import { API_URL } from "../constants";

export const useLoadNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadNews = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL}${page * 10}`
      );
      const newNews = await response.json();
      setNews((prev) => [...prev, ...newNews.posts]);
      setPage((prev) => prev + 1);
      setHasMore(newNews.skip < newNews.total);
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Ошибка загрузки:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  return { news, isLoading, hasMore, loadNews };
};
