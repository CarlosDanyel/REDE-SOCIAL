import style from "./app.module.css";
import "./global.css";

import { Header } from "./components/Header";

import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
