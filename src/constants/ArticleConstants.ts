export const Project = [
    {
        title: '개발 정원',
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
                    'UI를 Component로 나누어 재사용할 수 있고, 적은 수의 호출로 화면을 구성할 수 있어 개발 상 효율성이 높아 선택하였습니다.',
            },
            {
                index: 1,
                children:
                    '상태 관리를 전역에서 할 수 있어, 과도한 props drilling에 따른 이슈를 방지할 수 있어 선택하였습니다.',
            },
            {
                index: 2,
                children:
                    'SPA인 리액트에서 페이지 이동을 가능하게 해주는 라이브러리입니다.',
            },
        ],
        tabLables: ['리액트', 'redux-toolkit', 'react-router-dom'],
    },
    {
        title: '포트폴리오 페이지 (현재 페이지)',
        subtitle: '개인 포트폴리오로 활용할 웹페이지',
        term: '2023.04',
        group: '개인 프로젝트',
        detail: ['타입스크립트를 활용'],
        tabContents: [
            {
                index: 0,
                children:
                    'UI를 Component로 나누어 재사용할 수 있고, 적은 수의 호출로 화면을 구성할 수 있어 개발 상 효율성이 높아 선택하였습니다.',
            },
            {
                index: 1,
                children:
                    '타입 에러를 미리 체크할 수 있으므로, 예상치 못한 타입 관련 버그를 방지할 수 있어 선택하였습니다.',
            },
            {
                index: 2,
                children:
                    'CSS-in-JS 라이브러리 중 하나로, 불필요한 클래스 명명을 줄일 수 있어 선택하였습니다.',
            },
        ],
        tabLables: ['리액트', '타입스크립트', 'Emotion(CSS-in-JS)'],
    },
];

export const Activity = [
    {
        title: 'CS 스터디',
        subtitle: '운영체제, 네트워크 등의 computer science 과목 스터디',
        term: '2021.12 ~ 2022.05',
        group: '그룹 스터디',
        detail: [
            '논의한 분량만큼 일주일간 학습 후, 질의응답을 주고 받는 방식으로 진행 ',
        ],
    },
    {
        title: '알고리즘 문제 해결 스터디',
        subtitle: '백준 및 프로그래머스 알고리즘 문제 풀이 스터디',
        term: '2021.10 ~ 진행중',
        group: '개인 스터디',
        detail: [
            '하루 한 문제 해결을 목표로 꾸준히 진행 중',
            '현재 약 400문제 해결로 백준 골드 1 달성',
        ],
    },
];
