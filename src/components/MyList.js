import React, { useEffect, useState, useCallback } from "react";
import { ListContainer, PagingBlock, PageDiv } from "./../styledComponents";
import EachListItem from "./EachListItem";
import Loading from "./Loading";

const MyList = ({ todos, onToggle, onRemove }) => {
  const [todoLoading, setTodoLoading] = useState(false);
  const [listPage, setListPage] = useState(1);
  const [listPages, setListPages] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState([]);
  const ITEMS_PER_PAGE = 6;

  const pagination = useCallback(() => {
    // 페이지네이션
    const totalPages = Math.ceil(todos.length / ITEMS_PER_PAGE);
    const tempPages = [];
    for (var i = 1; i <= totalPages; i++) {
      tempPages.push(i);
    }
    setListPages(tempPages);

    const currentPageTodos = todos.slice(
      (listPage - 1) * ITEMS_PER_PAGE,
      listPage * ITEMS_PER_PAGE
    );
    setTodosPerPage(currentPageTodos);
  });

  useEffect(() => {
    setTodoLoading(true);
    setTimeout(() => {
      // 로딩창 보여주기용
      setTodoLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    pagination();
  }, [todos, listPage]);

  return (
    <div style={{ minHeight: "510px" }}>
      {todoLoading ? (
        <Loading />
      ) : (
        <ListContainer>
          {todos.length === 0 ? (
            <h2 style={{ textAlign: "center", opacity: 0.6 }}>Empty</h2>
          ) : (
            todosPerPage.map((todo) => (
              <EachListItem
                key={todo.name}
                name={todo.name}
                checked={todo.checked}
                onToggle={onToggle}
                onRemove={onRemove}
              />
            ))
          )}
          <PagingBlock>
            {listPages.map((page) => (
              <PageDiv
                key={page}
                here={page === listPage}
                onClick={() => setListPage(page)}
              >
                {page}
              </PageDiv>
            ))}
          </PagingBlock>
        </ListContainer>
      )}
    </div>
  );
};

export default MyList;
