import { CategoriesBlock, Category } from "../styledComponents";

const categories = [
  { text: "전체", type: "all" },
  { text: "한식", type: "kr" },
  { text: "중식", type: "cn" },
  { text: "일식", type: "jp" },
  { text: "양식", type: "west" },
  { text: "카페", type: "coffee" },
  { text: "마이페이지", type: "mypage" },
];

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.type}
          className={({ isActive }) => (isActive ? "active" : "")}
          to={c.type === 'all' ? '/' : `/${c.type}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
