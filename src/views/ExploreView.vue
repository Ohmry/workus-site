<template>
  <main>
    <AppNavigator />
    <section class="container">
      <section class="aside">
        <aside>
          <article>
            <span>최근 열람한 프로젝트</span>
            <button @click="goToProjectCreate">새 프로젝트</button>
          </article>
          <span data-type="caption">프로젝트가 존재하지 않습니다.</span>
          <ul>
            <li v-for="(project, index) in recentProjects" :key="index">
              <font-awesome-icon icon="fa-solid fa-caret-right"></font-awesome-icon>
              <span>{{ project.title }}</span>
            </li>
          </ul>
          <div class="divider"></div>
          <article>
            <span>내가 속한 그룹</span>
            <button @click="goToGroupCreate">새 그룹</button>
          </article>
          <span data-type="caption">내가 속해있는 그룹이 존재하지 않습니다.</span>
          <ul>
            <li v-for="(group, index) in belongGroups" :key="index">
              <font-awesome-icon icon="fa-solid fa-caret-right"></font-awesome-icon>
              <span>{{ group.name }}</span>
            </li>
          </ul>
        </aside>
      </section>
      <section class="contents">
        <section class="contents-container">
          <section class="summary">
            <article class="today">
              <h3>오늘 해야할 일정</h3>
              <span data-type="caption">오늘 해야할 일정이 없습니다.</span>
              <!-- <ul>
                <li>삼성페이 멤버십 API 개발</li>
              </ul> -->
            </article>
            <article class="proceed">
              <h3>진행 중인 일정</h3>
              <span data-type="caption">현재 진행 중인 일정이 없습니다.</span>
            </article>
          </section>
          <section class="activity">
            <h3>최근 활동</h3>
            <span data-type="caption">최근 활동내역이 존재하지 않습니다.</span>
            <!-- <article>
              <span data-type="title">페이즈 금액권 기능 개발</span>
              <span data-type="description">삼성페이 멤버십 연동 일정이 생성되었습니다.</span>
              <span data-type="datetime">2022.07.21 10:38:54</span>
            </article>
            <article>
              모바일오더 프로젝트 그룹이 생성되었습니다.
            </article>
            <article>
              스크린개발팀 그룹에 이병훈님을 초대하였습니다.
            </article>
            <article>
              운영파트 그룹에 초대되었습니다.
            </article>
            <article>
              메가박스 포인트 부분 사용 일정의 상태가 완료로 변경되었습니다.
            </article> -->
          </section>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'

export default {
  name: 'ExploreView',
  components: {
    AppNavigator
  },
  data: () => {
    return {
      recentProjects: [
        // { title: '메가박스 포인트 부분 사용' },
        // { title: '페이즈 금액권 기능 개발' },
        // { title: '삼성페이 멤버십 연동' }
      ],
      belongGroups: [
        // { name: '메가박스' },
        // { name: '스크린개발팀' },
        // { name: '운영파트' },
        // { name: '모바일오더 프로젝트 그룹' }
      ]
    }
  },
  methods: {
    open: function (e) {
      this.$contextmenu(e)
    },
    goToGroupCreate: function (e) {
      this.$router.push('/group/create')
    },
    goToProjectCreate: function (e) {
      this.$router.push('/project/create')
    }
  }
}
</script>

<style lang="scss" scoped>
span[data-type=caption] {
  font-size: 14px;
  color: #6B6B6B;
}

section.container {
  display: flex;
  min-height: calc(100vh - 50px);
  background-color: var(--background-color);

  section.aside {
    width: 300px;
    padding: 0 20px 0 20px;
    border-right: 1px solid var(--secondary-color);

    aside {
      position: sticky;
      top: 0px;
      width: 300px;
      padding: 30px 0 0 0;
      align-self: flex-start;

      article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 0 10px 0;
        line-height: 30px;
        span {
          font-weight: bold;
          color: var(--secondary-color);
        }
        button {
          border: 0;
          background-color: var(--primary-color);
          color: white;
          font-weight: normal;
          font-size: 14px;
          padding: 5px 15px;
          border-radius: 5px;

          &:hover {
            cursor: pointer;
          }
          &:active {
            background-color: var(--secondary-color);
          }
        }
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0 0 0 10px;

        li {
          margin: 10px 0 0 0;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }

          svg {
            margin: 0 10px 0 0;
          }
        }
      }

      div.divider {
        width: 300px;
        padding: 20px 0 0 0;
        margin: 0 0 19px 0;
        border-bottom: 1px solid var(--foreground-color);
      }
    }
  }
  section.contents {
    flex: 1;
    padding: 10px 30px;
    background-color: #F2F2F2;

    h3 {
      color: var(--secondary-color);
      margin: 20px 0 10px 0;
    }

    section.contents-container {
      width: 800px;

      section.summary {
        display: flex;
        flex-direction: row;
        article {
          flex: 1;
        }
      }

      section.activity {
        h3 {
          margin: 50px 0 10px 0;
        }
        article {
          border: 1px solid #8E8E8E;
          border-radius: 5px;
          background-color: var(--background-color);
          margin: 20px 0 0 0;
          padding: 15px 15px;
          box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
          -webkit-box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
          -moz-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
          -o-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
          -ms-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
          span {
            display: block;
          }
          span[data-type=title] {
            font-size: 16px;
            font-weight: bold;
          }
          span[data-type=description] {
            font-size: 14px;
            padding: 5px 0 0 0;
          }
          span[data-type=datetime] {
            font-size: 12px;
            color: #8E8E8E;
            padding: 10px 0 0 0;
          }
        }
      }
    }
  }
}
</style>
