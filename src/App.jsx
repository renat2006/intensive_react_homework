import { Layout } from "./components/Layout/Layout";
import { GenrePage } from "./pages/GenrePage/GenrePage";
import { types } from "./constants/mock";
import { BookPage } from "./pages/BookPage/BookPage";

export const App = () => {
  return (
    <Layout>
      {/*Первая страница*/}
      <GenrePage genres={types}></GenrePage>
      {/*Вторая страница*/}
      {/*<BookPage book={types[0].books[1]}></BookPage>*/}
    </Layout>
  );
};
