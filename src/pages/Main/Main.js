import React, { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);
  const active = commentInput.length > 5;

  const saveCommentInput = event => {
    setCommentInput(event.target.value);
  };

  const handleClickBtn = () => {
    const pushedComments = [...commentList, commentInput]; // [a,b,c]
    setCommentList(pushedComments);
    setCommentInput('');
  };

  console.log(commentList);

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <img className="logo" src="/images/logo.png" alt="logo" />
          <h1 className="title">Westagram</h1>
        </div>
        <label className="search-bar" htmlFor="search">
          <span className="material-symbols-outlined search-icon">search</span>
          <input className="search-input" placeholder="검색" name="search" />
        </label>
        <div className="nav-right">
          <span className="material-symbols-outlined icon nav-icon">
            explore
          </span>
          <span className="material-symbols-outlined icon nav-icon">
            favorite
          </span>
          <span className="material-symbols-outlined icon nav-icon">
            person
          </span>
        </div>
      </nav>
      <main className="main">
        <div className="feeds">
          <article className="feed">
            <div className="feed-top">
              <img
                className="feed-profile"
                src="/images/profile.jpg"
                alt="profile"
              />
              <span className="bold">canon_mj</span>
              <span className="material-symbols-outlined icon more-icon">
                more_horiz
              </span>
            </div>
            <img
              className="feed-img"
              src="https://cdn.pixabay.com/photo/2022/03/08/21/20/running-7056590_1280.jpg"
              alt="feed"
            />
            <div className="feed-contents">
              <div className="feed-btns gray">
                <div className="feed-btns-left">
                  <span className="material-symbols-outlined icon">
                    favorite
                  </span>
                  <span className="material-symbols-outlined icon">
                    mode_comment
                  </span>
                  <span className="material-symbols-outlined icon">
                    ios_share
                  </span>
                </div>
                <span className="material-symbols-outlined icon bookmark-icon">
                  bookmark
                </span>
              </div>
              <div className="likes">
                <img
                  className="likes-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <span className="bold">alneworld</span>님&nbsp
                <span className="bold"> 외 10명</span>이 좋아합니다
              </div>
              <div className="contents">
                <span className="nickname">canon_mj</span>
                위워크에서 진행한 베이킹 클래스
              </div>
              <div className="comments">
                {commentList.map((comment, index) => (
                  <div key={index} className="comment">
                    <span className="nickname">neceosecius</span>
                    {comment}
                    <span className="material-symbols-outlined icon gray comment-heart">
                      favorite
                    </span>
                  </div>
                ))}
              </div>
              <div className="bold gray">42분 전</div>
            </div>
            <label className="comment-input-wrapper">
              <input
                className="comment-input"
                placeholder="댓글 달기..."
                value={commentInput}
                onChange={saveCommentInput}
              />
              <button
                className="comment-btn"
                disabled={!active}
                onClick={handleClickBtn}
              >
                게시
              </button>
            </label>
          </article>
        </div>
        <div className="main-right">
          <div className="profile">
            <img
              className="profile-img"
              src="/images/profile.jpg"
              alt="profile"
            />
            <div className="profile-info">
              <div className="profile-nickname">wecode_bootcamp</div>
              <div className="profile-description">Wecode | 위코드</div>
            </div>
          </div>
          <div className="main-right-box">
            <div className="main-right-box-top">
              <span className="bold gray">스토리</span>
              <span className="bold">모두 보기</span>
            </div>
            <div className="story-list">
              <div className="story-list-item">
                <img
                  className="story-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <div>
                  <div className="bold">we_sta_g_ram</div>
                  <div className="bold gray">6분 전</div>
                </div>
              </div>
              <div className="story-list-item">
                <img
                  className="story-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <div>
                  <div className="bold">a_e_i_o_u</div>
                  <div className="bold gray">16분 전</div>
                </div>
              </div>
              <div className="story-list-item">
                <img
                  className="story-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <div>
                  <div className="bold">wwwwww</div>
                  <div className="bold gray">3시간 전</div>
                </div>
              </div>
              <div className="story-list-item">
                <img
                  className="story-profile"
                  src="/images/profile.jpg"
                  alt="profile"
                />
                <div>
                  <div className="bold">we_code_boot_camp</div>
                  <div className="bold gray">20시간 전</div>
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
