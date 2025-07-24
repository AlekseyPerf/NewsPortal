import { useMemo } from "react";
import type { NewsItem } from "../types";

export const useFilteredNews = (news: NewsItem[], uniqueTags: string[]) => {
  return useMemo(
    () =>
      news.filter((item) =>
        uniqueTags.length > 0
          ? item.tags.some((tag) => uniqueTags.includes(tag))
          : true
      ),
    [news, uniqueTags]
  );
}