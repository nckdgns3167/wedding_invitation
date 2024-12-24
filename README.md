### 프로젝트 환경

- **Boilerplate**: `CRA` + `Typescript`
- **Rules**: `ESLint` + `Prettier`
- **Style**: `SCSS` + `classnames`, `Reset CSS`
- **Package Manager**: `yarn`
- **DB**: `Json Server`
- **state**: `context api`, `react-query`,
- **UI**: `swiper(캐러셀 구현)`, `react-day-picker(캘린더 구현)`, `IconFinder(svg)`
- **Util**: `date-fns(날짜표현)`, `react-copy-to-clipboard(텍스트 복사)`
- **활용 외부 서비스**
    - `KaKao API(지도, 공유)`
    - `Cloudinary(클라우드 기반  CND 획득)`
    - `Squoosh(이미지 압축)`
    - `Transfonter(폰트 용량 최적화)`

### Experience

1. yarn berry의 **Plug'n'Play (PnP) 방식으로 패키지 의존성 관리** - 무거운 node_modules 폴더 사라짐.
1. createPortal을 이용한 Modal 구현
1. react-query를 이용한 **선언적 데이터 비동기 fetching** 기법 사용
    - Suspense와 ErrorBoundary를 같이 활용하여 개발하면 이곳저곳에 있던 로딩, 에러 처리를 한 곳에서 처리가 가능하다는 것을 확인. UI를 그리는 컴포넌트들로 부터 이러한 로직이 모두 외부로
      빠지게 됨...
    - useState, useEffect를 사용해 데이터를 불러오고 세팅해주던 코드가 사라졌고, 패칭 결과에 따라 어떤 UI를 보여줄지만 생각하면 됨.
1. 폰트, 이미지, 비디오를 관리하는 법을 다양하게 확인하게 됨. 

