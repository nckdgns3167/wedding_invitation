# Project: Wedding_invitation

### 프로젝트 환경

- **Boilerplate**: `yarn berry (PnP, Zero-Install)` + `CRA` + `Typescript`
- **Rules**: `ESLint` + `Prettier`
- **Style**: `Emotion`
- **Package Manager**: `yarn`
- **Auth & DB**: `Firebase`
- **state**: `context api`, `react-query`,
- **UI**: `swiper(캐러셀 구현)`, `react-day-picker(캘린더 구현)`, `IconFinder(svg)`
- **Util**: `date-fns(날짜표현)`, `react-copy-to-clipboard(텍스트 복사)`
- **활용 외부 서비스**
    - `KaKao API(지도, 공유)`
    - `Cloudinary(클라우드 기반  CND 획득)`
    - `Squoosh(이미지 압축)`
    - `Transfonter(폰트 용량 최적화)`

### Experience

1. **yarn berry의Plug'n'Play (PnP) 방식으로 모듈 의존성 관리**

    - 무거운 node_modules 폴더 사라짐.

    - Node.js는 필요한 모듈을 찾을 때 `.pnp.js`(어떤 패키지가 어디에 위치하는지 기록) 파일을 참조하여 압축된 파일 내에서 해당 모듈을 직접 찾는다.

      이는 전통적인 `node_modules` 방식보다 훨씬 효율적이며, "모듈 지옥" 문제를 피할 수 있게 해준다.

1. **yarn berry의 Zero-Install 기능으로 패키지 설치 과정 없이 프로젝트를 바로 사용**

    - `.yarn/cache`에 저장된 패키지를 프로젝트와 함께 버전 관리 시스템에 포함시킨다.

      이로 인해 다른 개발자나 CI/CD 시스템에서 별도의 패키지 설치 과정 없이도 프로젝트를 바로 사용할 수 있다.

1. **createPortal을 이용한 Modal 구현**

1. react-query를 이용한 **선언적 데이터 비동기 fetching** 기법 사용

    - Suspense와 ErrorBoundary를 같이 활용하여 개발하면 이곳저곳에 있던 로딩, 에러 처리를 한 곳에서 처리가 가능하다는 것을 확인. UI를 그리는 컴포넌트들로 부터 이러한 로직이 모두 외부로
      빠지게 됨...
    - useState, useEffect를 사용해 데이터를 불러오고 세팅해주던 코드가 사라졌고, 패칭 결과에 따라 어떤 UI를 보여줄지만 생각하면 됨.

1. **폰트, 이미지, 비디오를 관리하는 법**을 다양하게 확인하게 됨. 

