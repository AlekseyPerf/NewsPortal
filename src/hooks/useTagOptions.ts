import type { NewsItem } from "../types";

export const useTagOptions = (news: NewsItem[]) => {
  return Array.from(new Set(news.flatMap((item) => item.tags))).map((tag) => ({
    value: tag,
    label: tag,
  }));
};