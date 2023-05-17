export const PROJECT = [
    {
        title: '포트폴리오 페이지',
        url: 'https://haeyeon-portfolio.netlify.app/',
        githubUrl: 'https://github.com/hailey-hy/new-personal-portfolio',
        subtitle: '개인 포트폴리오로 활용할 웹페이지 (현재 페이지)',
        term: '2023.04',
        group: '개인 프로젝트',
        detail: [
            'github PR, issue 기능을 활용해 작업 내용을 체계적으로 기록',
            'React hooks, custom hooks를 활용한 기능 개발',
            '이미지 최적화를 통한 성능 개선 및 크로스 브라우징 처리',
            '시멘틱 태그 사용',
        ],
        tabContents: [
            {
                index: 0,
                children:
                    'UI를 Component로 나누어 재사용할 수 있어 선택하였습니다. 또한, 리액트에서 제공하는 hooks와 직접 작성하는 custom hooks를 활용하면 개발 효율성을 높일 수 있습니다.',
            },
            {
                index: 1,
                children:
                    '함수나 객체 안에 들어갈 인자와 프로퍼티의 타입을 추론할 수 있고, 에러를 미리 체크할 수 있습니다. 개발 시 예상치 못한 타입 관련 버그를 방지할 수 있어 선택하였습니다.',
            },
            {
                index: 2,
                children:
                    'CSS-in-JS 라이브러리 중 하나이므로 불필요한 클래스 명명을 줄일 수 있고, 타 CSS-in-JS 라이브러리 대비 성능이 빠르고 가벼워 선택하였습니다.',
            },
            {
                index: 3,
                children:
                    '정해둔 코드 컨벤션에 따라 자동으로 코드를 수정할 수 있어, 일관된 코드 양식을 유지할 수 있어 사용하였습니다.',
            },
            {
                index: 4,
                children:
                    'github을 기반으로 배포를 도와줍니다. 정해둔 branch에 새로운 push가 생기면 자동으로 배포를 시작하고, lighthouse로 성능 측정도 동시에 할 수 있어 선택하였습니다. ',
            },
        ],
        tabLables: [
            '리액트',
            '타입스크립트',
            'Emotion(CSS-in-JS)',
            'Eslint & Prettier',
            'Netlify',
        ],
    },
    {
        title: '개발 정원',
        url: 'https://devroadmap.netlify.app/signin',
        githubUrl: 'https://github.com/hailey-hy/devroadmap-front',
        subtitle: '예비 개발자를 위한 개발 공부 다이어리 & 기록 공유 웹 서비스',
        term: '2022.06 ~ 08, 2023.04 ~',
        group: '팀 프로젝트',
        detail: [
            '리액트를 활용한 첫 프로젝트로, 기획부터 참여하며 단독으로 프론트를 담당',
            '협업용 노션 페이지에서 백엔드 개발자와 api 설계를 협의하며, 좋은 커뮤니케이션을 위해 노력',
            '리팩토링 후, 커스텀 훅을 적절히 활용하여 컴포넌트의 재사용성을 극대화',
        ],
        tabContents: [
            {
                index: 0,
                children:
                    'UI를 Component로 나누어 재사용할 수 있어 선택하였습니다. 또한, 리액트에서 제공하는 hooks와 직접 작성하는 custom hooks를 활용하면 개발 효율성을 높일 수 있습니다.',
            },
            {
                index: 1,
                children:
                    '상태 관리를 전역에서 할 수 있어, 과도한 props drilling에 따른 이슈를 방지할 수 있어 선택하였습니다.',
            },
            {
                index: 2,
                children:
                    'SPA인 리액트에서 페이지 이동을 구현하고자 사용하였습니다.',
            },
            {
                index: 3,
                children:
                    '인스턴스를 사용하여 네트워크 요청을 모듈화하였습니다.',
            },
        ],
        tabLables: ['리액트', 'redux-toolkit', 'react-router-dom', 'Axios'],
    },
];

export const ACTIVITY = [
    {
        title: 'CS 스터디',
        url: 'https://www.notion.so/CS-6d0707eb635a44128ebdc9024d0a8f24',
        subtitle: '운영체제, 네트워크 등의 computer science 과목 스터디',
        term: '2021.12 ~ 2022.05',
        group: '그룹 스터디',
        detail: [
            '논의한 분량만큼 일주일간 학습 후, 질의응답을 주고 받는 방식으로 진행 ',
        ],
    },
    {
        title: '알고리즘 문제 해결 스터디',
        url: 'https://github.com/hailey-hy/Problem-Solving',
        subtitle: '백준 및 프로그래머스 알고리즘 문제 풀이 스터디',
        term: '2021.10 ~ 진행중',
        group: '개인 스터디',
        detail: [
            '하루 한 문제 해결을 목표로 꾸준히 진행 중',
            '현재 약 400문제 해결로 백준 골드 1 달성',
        ],
    },
];

export const EDUCATION = [
    {
        title: '우아한 테크코스 5기',
        url: 'https://github.com/hailey-hy/javascript-baseball',
        subtitle: '약 4주간 3개의 과제를 해결하는 프리코스 진행',
        term: '2022.10 ~ 2022.11',
        group: '교육',
        detail: [
            'git commit 컨벤션, 자바스크립트 컨벤션 학습',
            '매주 피드백을 받으며 클린한 코드 작성을 연습',
        ],
    },
];
