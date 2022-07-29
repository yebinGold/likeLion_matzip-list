import React, { useEffect, useState, useCallback } from "react";
import { MatzipListBlock, PageDiv, PagingBlock } from "../styledComponents";
import Matzip from "./Matzip";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const MatzipList = ({ onAdd }) => {
  const [loading, setLoading] = useState(false);
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1); // 현재 페이지
  const [pages, setPages] = useState([]); // 전체 페이지
  const [shops, setShops] = useState([]); // 페이지 별로 보여줄 가게 정보
  const [shopsList, setShopsList] = useState([]); // 전체 가게 정보
  const params = useParams();
  let category = params.category === undefined ? "all" : params.category;

  const pagination = useCallback(() => {
    // 페이지네이션
    page === 0 && setPage(1);
    const totalPages = Math.ceil(shopsList.length / ITEMS_PER_PAGE);
    const tempPages = [];
    for (var i = 1; i <= totalPages; i++) {
      tempPages.push(i);
    }
    setPages(tempPages);

    const currentPageShops = shopsList.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE
    );
    setShops(currentPageShops);
  });

  // useEffect => category에 맞게 api 호출
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://cffb044b-c7ae-4505-a0b6-0d743cd9b0b4.mock.pstmn.io/${category}`
      )
      .then((res) => {
        setShopsList(res.data);
        setPage(0); // 페이지 바뀌었다는 걸 인식시켜서 리렌더링 시킴
      });
    setLoading(false);
  }, [category]);

  useEffect(() => {
    pagination();
  }, [page]);

  return (
    <MatzipListBlock>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ul>
            {shops.map((item) => (
              <Matzip
                key={item.id}
                name={item.name}
                type={item.category}
                onAdd={onAdd}
              />
            ))}
          </ul>
          <PagingBlock>
            {pages.map((nowpage) => (
              <PageDiv
                here={nowpage === page}
                key={nowpage}
                onClick={() => setPage(nowpage)}
              >
                {nowpage}
              </PageDiv>
            ))}
          </PagingBlock>
        </>
      )}
    </MatzipListBlock>
  );
};

export default MatzipList;
