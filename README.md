# 윤재 포켓몬 모닝

윤재의 아침 등교 루틴 대시보드 — GitHub Pages에서 바로 열 수 있는 정적 페이지입니다.

- https://stolberry.github.io/yunjae-morning-dashboard/

## 구성

- **대시보드**: 08:15 등교 카운트다운(피카츄 러닝 진행바), 5단계 아침 루틴 그림 카드, 오늘의 학원 스케줄, 아래쪽 얇은 날씨·응원 문구 띠
- **학원 스케줄**: 월~일 주간 스케줄 추가/수정/삭제
- **공부**: 요일별 공부 항목 체크
- **포켓몬 도감**: 루틴·공부 완료로 몬스터볼을 모아 36마리 중 한 마리 뽑기 (도감 수집)

## 파일

- `index.html` — 전체 앱 (HTML/CSS/JS 한 파일)
- `assets/routine-*.png` — 5단계 루틴 그림
- `assets/icon-*.png`, `manifest.json`, `sw.js` — 홈 화면에 추가(PWA)용
- 검색엔진에는 노출되지 않도록 `noindex,nofollow` 설정

## 저장되는 것 (브라우저 localStorage)

루틴 체크(`yj_routine_done_v1`), 루틴 목록(`yj_routine_items_v2`), 학원(`yj_academies_v1`),
공부(`yj_study_tasks_v1`, `yj_study_done_v1`), 몬스터볼(`yj_balls_v1`), 도감(`yj_dex_v1`), 보상 기록(`yj_awards_v1`).
