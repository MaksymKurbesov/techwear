import React from "react";
import styles from "./BlogScreen.module.css";
import HeroArticleImg from "../../assets/images/blog-hero.jpg";
import LeftArticleImg from "../../assets/images/blog-1.jpg";
import RightArticleImg from "../../assets/images/blog-2.jpg";

const BlogScreen = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.heroArticle}>
        <span>Хайлайты первого релиза в ассортименте TECHWEAR</span>
        <img src={HeroArticleImg} />
      </div>
      <div className={styles.leftArticle}>
        <span>Хайлайты второго релиза в ассортименте TECHWEAR</span>
        <img src={LeftArticleImg} />
      </div>
      <div className={styles.rightArticle}>
        <span>Хайлайты третьего релиза в ассортименте TECHWEAR</span>
        <img src={RightArticleImg} />
      </div>
    </div>
  );
};

export default BlogScreen;
