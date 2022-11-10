import React, { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleChangeComment = e => {
    setComment(e.target.value);
  };

  const handleKeydown = e => {
    if (e.key !== 'Enter') return;
    addComment();
  };

  const addComment = () => {
    if (!comment) return;
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <>
      <nav class="nav">
        <div class="nav-left">
          <img class="logo" src="/images/logo.png" alt="logo" />
          <h1 class="title">Westagram</h1>
        </div>
        <label class="search-bar" for="search">
          <span class="material-symbols-outlined search-icon"> search </span>
          <input class="search-input" placeholder="검색" name="search" />
        </label>
        <div class="nav-right">
          <span class="material-symbols-outlined icon nav-icon"> explore </span>
          <span class="material-symbols-outlined icon nav-icon">favorite</span>
          <span class="material-symbols-outlined icon nav-icon"> person </span>
        </div>
      </nav>
      <main class="main">
        <div class="feeds">
          <article class="feed">
            <div class="feed-top">
              <img
                class="feed-profile"
                src="/images/profile.jpg"
                alt="profile"
              />
              <span class="bold">canon_mj</span>
              <span class="material-symbols-outlined icon more-icon">
                more_horiz
              </span>
            </div>
            <img
              class="feed-img"
              src="https://cdn.pixabay.com/photo/2022/03/08/21/20/running-7056590_1280.jpg"
              alt="feed"
            />
            <div class="feed-contents">
              <div class="feed-btns gray">
                <div class="feed-btns-left">
                  <span class="material-symbols-outlined icon"> favorite </span>
                  <span class="material-symbols-outlined icon">
                    mode_comment
                  </span>
                  <span class="material-symbols-outlined icon">ios_share</span>
                </div>
                <span class="material-symbols-outlined icon bookmark-icon">
                  bookmark
                </span>
              </div>
              <div class="likes">
                <img
                  class="likes-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <span class="bold">alneworld</span>님&nbsp
                <span class="bold"> 외 10명</span>이 좋아합니다
              </div>
              <div class="contents">
                <span class="nickname">canon_mj</span>
                위워크에서 진행한 베이킹 클래스
              </div>
              <div class="comments">
                {comments.map((comment, index) => (
                  <div class="comment" key={index}>
                    <span class="nickname">neceosecius</span>
                    {comment}
                    <span class="material-symbols-outlined icon gray comment-heart">
                      favorite
                    </span>
                  </div>
                ))}
              </div>
              <div class="bold gray">42분 전</div>
            </div>
            <label class="comment-input-wrapper">
              <input
                class="comment-input"
                placeholder="댓글 달기..."
                value={comment}
                onChange={handleChangeComment}
                onKeyDown={handleKeydown}
              />
              <button
                class="comment-btn"
                disabled={!comment}
                onClick={addComment}
              >
                게시
              </button>
            </label>
          </article>
        </div>
        <div class="main-right">
          <div class="profile">
            <img class="profile-img" src="/images/profile.jpg" alt="profile" />
            <div class="profile-info">
              <div class="profile-nickname">wecode_bootcamp</div>
              <div class="profile-description">Wecode | 위코드</div>
            </div>
          </div>
          <div class="main-right-box">
            <div class="main-right-box-top">
              <span class="bold gray">스토리</span>
              <span class="bold">모두 보기</span>
            </div>
            <div class="story-list">
              <div class="story-list-item">
                <img
                  class="story-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <div>
                  <div class="bold">we_sta_g_ram</div>
                  <div class="bold gray">6분 전</div>
                </div>
              </div>
              <div class="story-list-item">
                <img
                  class="story-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <div>
                  <div class="bold">a_e_i_o_u</div>
                  <div class="bold gray">16분 전</div>
                </div>
              </div>
              <div class="story-list-item">
                <img
                  class="story-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <div>
                  <div class="bold">wwwwww</div>
                  <div class="bold gray">3시간 전</div>
                </div>
              </div>
              <div class="story-list-item">
                <img
                  class="story-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <div>
                  <div class="bold">we_code_boot_camp</div>
                  <div class="bold gray">20시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
