import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        category: '개발과제',
        team: {
          name: ''
        },
        project: {
          name: '모바일오더 기능 개선'
        },
        title: '모바일오더 기능 개선',
        requester: '김선덕K',
        requestDepartment: '운영기획팀',
        startDate: '20220830',
        endDate: '20220930',
        progress: 'PROCEED',
        percentage: 80,
        managers: [
          {
            name: '이병훈D'
          },
          {
            name: '황남익K'
          }
        ],
        importance: 'HIGH',
        comment: 15
      },
      {
        id: 2,
        category: 'SR',
        team: {
          name: ''
        },
        project: {
          name: '2022 메가박스 ISMS'
        },
        title: 'ISMS 취약점 개선 조치',
        requester: '박선종K',
        requestDepartment: '인프라운영팀',
        startDate: '20220815',
        endDate: '20220915',
        progress: 'READY',
        percentage: 80,
        managers: [
          {
            name: '이병훈D'
          }
        ],
        importance: '',
        comment: 5
      },
      {
        id: 3,
        category: '개발과제',
        team: {
          name: '스크린개발팀'
        },
        project: {
          name: ''
        },
        title: '쿠폰정책관리 기능 개선',
        requester: '이은지K',
        requestDepartment: '마케팅팀',
        startDate: '20220701',
        endDate: '20220914',
        progress: 'TESTING',
        percentage: 80,
        managers: [
          {
            name: '이병훈D'
          },
          {
            name: '강찬미P'
          }
        ],
        importance: 'MID',
        comment: 5
      },
      {
        id: 4,
        category: 'SR',
        team: {
          name: ''
        },
        project: {
          name: '2022 메가박스 ISMS'
        },
        title: '서버 TLS 취약버전 비활성화 작업',
        requester: '박선종K',
        requestDepartment: '인프라운영팀',
        startDate: '20220810',
        endDate: '20220915',
        progress: 'COMPLETED',
        percentage: 80,
        managers: [
          {
            name: '이병훈D'
          },
          {
            name: '이주호K'
          }
        ],
        importance: '',
        comment: 0
      },
      {
        id: 5,
        category: 'SR',
        team: {
          name: '스크린개발팀'
        },
        project: {
          name: ''
        },
        title: '모바일오더 예약 기능',
        requester: '김선덕K',
        requestDepartment: '운영기획팀',
        startDate: '20220810',
        endDate: '20220915',
        progress: 'PROCEED',
        percentage: 80,
        managers: [
          {
            name: '황남익K'
          },
          {
            name: '강찬미P'
          },
          {
            name: '김진우K'
          },
          {
            name: '강현철K'
          },
          {
            name: '박주희D'
          }
        ],
        importance: '',
        comment: 0
      },
      {
        id: 6,
        category: 'SR',
        team: {
          name: '스크린개발팀'
        },
        project: {
          name: ''
        },
        title: '부티크 프라이빗 예약 오픈 기능 개발',
        requester: '최연지D',
        requestDepartment: 'IT솔루션팀',
        startDate: '20220810',
        endDate: '20220909',
        progress: 'TESTING',
        percentage: 80,
        managers: [
          {
            name: '이병훈D'
          }
        ],
        importance: '',
        comment: 1
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
