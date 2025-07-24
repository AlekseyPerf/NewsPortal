import { useState, useEffect, useRef } from "react";
import { Spin, Splitter } from "antd";
import {
  Filters,
  CardNews,
  ScrollToTopButton,
  Header,
  SplitterDesc,
} from "./components";
import "./NewsPortal.css";
import {
  useFilteredNews,
  useLastElementObserver,
  useLoadNews,
  useTagOptions,
} from "./hooks";
import {
  DEFAULT_SIZE_FILTER,
  DEFAULT_SIZE_NEWS,
  MIN_SIZE_FILTER,
  MIN_SIZE_NEWS,
} from "./constants";

const NewsPortal = () => {
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);
  const { news, isLoading, hasMore, loadNews } = useLoadNews();
  const filteredNews = useFilteredNews(news, uniqueTags);
  const lastNewsElementRef = useLastElementObserver(
    isLoading,
    hasMore,
    loadNews
  );
  const uniqueTagsOptions = useTagOptions(news);

  const loadedRef = useRef(false);

  useEffect(() => {
    if (!loadedRef.current) {
      loadNews();
      loadedRef.current = true;
    }
  }, []);

  return (
    <>
      <Header />
      <Splitter className="splitter">
        <Splitter.Panel
          collapsible
          min={MIN_SIZE_FILTER}
          max={MIN_SIZE_FILTER}
          defaultSize={DEFAULT_SIZE_FILTER}
        >
          <SplitterDesc>
            <Filters
              options={uniqueTagsOptions}
              value={uniqueTags}
              onChange={setUniqueTags}
            />
          </SplitterDesc>
        </Splitter.Panel>
        <Splitter.Panel
          collapsible={{ start: true }}
          defaultSize={DEFAULT_SIZE_NEWS}
          min={MIN_SIZE_NEWS}
        >
          <SplitterDesc>
            <div className="news-container">
              {filteredNews.map((item, index) => {
                const isLast = index === filteredNews.length - 1;
                return (
                  <div
                    ref={isLast ? lastNewsElementRef : undefined}
                    key={item.id}
                    className="news-item"
                  >
                    <CardNews
                      title={item.title}
                      body={item.body}
                      tags={item.tags}
                      likes={item.reactions.likes}
                      dislikes={item.reactions.dislikes}
                    />
                  </div>
                );
              })}
            </div>
            {isLoading && (
              <Spin tip="Loading" size="large">
                <div className="spin">Loading...</div>
              </Spin>
            )}
            {!hasMore && <div>You have seen all news</div>}
          </SplitterDesc>
        </Splitter.Panel>
        <Splitter.Panel>
          <SplitterDesc>
            <p className="advertising">Advertising space</p>
          </SplitterDesc>
        </Splitter.Panel>
      </Splitter>
      <ScrollToTopButton />
    </>
  );
};

export default NewsPortal;
