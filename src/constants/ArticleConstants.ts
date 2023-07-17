export const PROJECT = [
    {
        title: '개발 정원',
        url: 'https://devroadmap.netlify.app/signin',
        githubUrl: 'https://github.com/hailey-hy/devroadmap-front',
        subtitle: '예비 개발자를 위한 개발 공부 다이어리 & 기록 공유 웹 서비스',
        term: '2022.06 ~ 08',
        group: '팀 프로젝트',
        tool: 'Spring boot - React',
        detail: [
            'JWT token을 사용한 로그인',
            'axios 인스턴스를 통한 서버 통신',
            'Redux를 활용해 회원 정보를 전역에서 관리',
            '리팩토링: 전역에서 관리하는 모달 창',
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
        tabLables: ['React', 'redux-toolkit', 'react-router-dom', 'Axios'],
    },

    {
        title: '포트폴리오 페이지',
        url: 'https://haeyeon-portfolio.netlify.app/',
        githubUrl: 'https://github.com/hailey-hy/new-personal-portfolio',
        subtitle: '개인 포트폴리오로 활용할 웹 페이지 (현재 페이지)',
        term: '2023.04',
        group: '개인 프로젝트',
        tool: 'React with typescript',
        detail: [
            '재사용 가능한 레이아웃, 컴포넌트 설계',
            'custom hooks를 활용한 단일 책임',
            '타입스크립트 적용',
            '<https://github.com/hailey-hy/new-personal-portfolio/pull/35>github PR, issue 기능을 활용한 작업 내용 기록',
            'airbnb 코드 컨벤션 적용',
            '<https://github.com/hailey-hy/new-personal-portfolio/issues/37>이미지 최적화를 통한 성능 개선',
            'useRef를 이용한 DOM 접근',
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
                    'UI 라이브러리입니다. 리액트와 호환성이 좋고, 커스터마이징해서 사용할 예정이 없어 선택하였습니다.',
            },
            {
                index: 5,
                children:
                    'github을 기반으로 배포를 도와줍니다. 정해둔 branch에 새로운 push가 생기면 자동으로 배포를 시작하고, lighthouse로 성능 측정도 동시에 할 수 있어 선택하였습니다. ',
            },
        ],
        tabLables: [
            'React',
            'typescript',
            'Emotion(CSS-in-JS)',
            'Eslint & Prettier',
            'Mui',
            'Netlify',
        ],
    },
    {
        title: '선물 체커',
        url: 'https://gift-checker.vercel.app/',
        githubUrl: 'https://github.com/hailey-hy/gift-checker',
        subtitle: '친구들의 특별한 날, 선물 준비를 도와주는 웹 서비스',
        term: '2023.06 ~ 개발중',
        group: '팀 프로젝트',
        tool: 'Spring boot - Next with typescript',
        detail: [
            'Atomic 디자인 패턴 적용',
            '<https://gift-checker-storybook.vercel.app/?path=/docs/design-systems-atoms-inputtext--docs>storybook을 활용한 UI 컴포넌트 개발',
            'Next.js 사용',
        ],
        tabContents: [
            {
                index: 0,
                children:
                    '리액트를 SSR처럼 사용할 수 있습니다. 프로젝트 구조 상 SEO가 중요한 점, 페이지 이동이 많지 않은 점에 따라 SSR로 개발하고자 선택하였습니다.',
            },

            {
                index: 1,
                children:
                    '함수나 객체 안에 들어갈 인자와 프로퍼티의 타입을 추론할 수 있고, 에러를 미리 체크할 수 있습니다. 개발 시 예상치 못한 타입 관련 버그를 방지할 수 있어 선택하였습니다.',
            },
            {
                index: 2,
                children:
                    'UI 컴포넌트를 독립적으로 구현하고, 테스트할 수 있게 도와줍니다. 특히 Atomic 디자인 패턴에서 유용합니다. 각 단위 컴포넌트들의 props 설정을 한 눈에 볼 수 있어 편리합니다.',
            },
            {
                index: 3,
                children:
                    '자주 사용하는 CSS를 모아 둔 CSS 프레임워크로, 편리한 사용성으로 개발 속도가 빠르고 유지보수가 쉬워 선택하였습니다.',
            },
            {
                index: 4,
                children:
                    '정해둔 코드 컨벤션에 따라 자동으로 코드를 수정할 수 있어, 일관된 코드 양식을 유지할 수 있어 사용하였습니다.',
            },
            {
                index: 5,
                children:
                    'github을 기반으로 배포를 도와줍니다. 정해둔 branch에 새로운 push가 생기면 자동으로 배포를 시작하고, lighthouse로 성능 측정도 동시에 할 수 있어 선택하였습니다. ',
            },
        ],
        tabLables: [
            'Next.js',
            'typescript',
            'storybook',
            'tailwind CSS',
            'Eslint & Prettier',
            'Vercel',
        ],
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
        detail: ['하루 한 문제 해결을 목표로 현재 약 400문제 해결'],
    },
];

export const EDUCATION = [
    {
        title: '우아한 테크코스 5기 pre-course',
        url: 'https://github.com/hailey-hy/javascript-baseball',
        subtitle: '약 4주간 3개의 과제를 해결하는 프리코스 진행',
        term: '2022.10 ~ 2022.11',
        group: '교육',
        detail: ['한 달간 매주 자바스크립트 과제를 해결하고, 피드백 반영'],
    },
];
