## 0. 설치 및 실행

```bash
# 설치
yarn
# 시작
yarn storybook
```

## 1. CSS-in-JS Markup Insight

###1-1. foundation(color, theme, typography, zindex, spacing)

- 기본적으로 디자인에서 정의한 foundation에 의해 철저히 동작하는 것들은 모두 디자인시스템으로 분리 시킨다.

###1-2. 협업(FE-Markup)

- 문제1: 이벤트 바인딩, DOM 접근에 대한 수정 그리고 FE, Markup 소스 최신화 이슈
- **Solution1: Markup시 최대한 이벤트 발생이 예상되는 곳에 props의 타입을 해당 DOM 타입을 지정하고 전개연산자를 사용함으로써 해당 DOM Event를 FE에서 마음껏 바인딩 시키고 또한 useRef Hook으로 선언한 변수도 props를 넘김으로써 FE에서 마음껏 DOM을 접근함으로써 이슈를 최소화한다.**

```javascript
// 예: TitleCount 컴포넌트
export const TitleCount = ({
  wrapperProps,
  exAnchorProps,
  mainTotalTitle,
  mainTotal,
  exLinkTitle,
}: ITitleCount) => {
  return (
    <CardTitleWrapper className="mb-12" {...wrapperProps}>
      <CardTitle>
        {mainTotalTitle}
        <CardTotal>{mainTotal}</CardTotal>
      </CardTitle>
      {exLinkTitle && (
        <CardTitleLink href="#" {...exAnchorProps}>
          {exLinkTitle}
        </CardTitleLink>
      )}
    </CardTitleWrapper>
  );
};

// TitleCount 타입
wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | ClassAttributes<HTMLDivElement>;

  /** 타사보험 링크 props */
  exAnchorProps?:
    | HTMLAttributes<HTMLAnchorElement>
    | ClassAttributes<HTMLAnchorElement>;
```

- 문제2: props 타입 수정 그리고 FE, Markup 소스 최신화 이슈
- **Solution2:컴포넌트 타입의 경우 마크업시 타입만 정의된 파일을 별도로 생성하고 최대한 예상되는 타입을 지정해주고 이후 FE에서 원하는 타입으로 마음껏 수정하도록 한다.**

- 최종인 폴더 구조는
  ui (모든 컴포넌트는 비즈니스 로직이 없어야한다.)
  |----combinations - 철저하게 디자인 규칙에 의해 동작하진 않지만 자주 사용되는 덩어리 위주의 컴포넌트
  |----elements - 더이상 쪼갤 수 없는 컴포넌트(대부분 디자인시스템에 존재)
  |----foundation - 디자인 규칙(대부분 디자인시스템에 존재)
  |----layouts - Page Layout (빼는게 좋을수도 있으므로 협의 필요)
  |----stories - Page 단위 스토리북
  |----styles - css

- 각 React 컴포넌트 폴더안에 있는 파일은
  combinations
  |----분류명
  |----index.ts
  |--------세부분류
  |------------분류명세부분류.stories.tsx // 스토리북에 노출될 영역
  |------------분류명세부분류.styled.tsx // styled 로만 정의된 파일
  |------------분류명세부분류.tsx // 메인 컴포넌트
  |------------분류명세부분류.types.tsx // 타입정의

- 컴포넌트선언시 default 보단 const로 선언하여 index에서 가저갈떄 문제가 없도록한다.

```javascript
// 컴포넌트 선언 예
export const Sample = ({ wrapperProps, anchorProps }: ISample) => {
  return (
    <div {...wrapperProps}>
      <a {...exAnchorProps}>Somtiing</a>
    </div>
  );
};
// type 예
export interface ISample {
  /** wrapper */
  wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | ClassAttributes<HTMLDivElement>;

  /**  링크 props */
  anchorProps?:
    | HTMLAttributes<HTMLAnchorElement>
    | ClassAttributes<HTMLAnchorElement>;
}

// styled 예
export const SampleStyle = styled.div`
  width: 100px;
  ...
`;
```

##1-3 컴포넌트 래핑(Wrapping)

- 레이아웃이나 Wrapper를 구성할때 React 함수형 컴포넌트로 감싸게 되면 부모 자식 관계가 만들어지기 때문에 래핑을 남발하게 될 경우 props를 계속해서 상속해줘야하는 문제가 발생함을 알 수 있었습니다.
- props를 계속 내리게되면 컴포넌트간 의존성과 복잡성이 높아집니다.
  -> 1. 래핑의 경우 최소한으로 하고 필요시 React 함수형 컴포넌트가 아닌 styled 컴포넌트로 감싸도록 합니다.
  -> 2. 덩어리 위주(블럭레벨) 위주로 쪼개 놓고 만약, 그안에서 반복되는 것들은 이후에 별도로 컴포넌트를 생성하는게 좋을듯 합니다.

```javascript
// 예) 레이아웃 예.
// 부모컴포넌트 LyMainGnb의 Props를 HeaderMain 컴포넌트로 계속해서 상속되어야한다.
// HeaderMain 메인에서 다른 컴포넌트에게 props를 내려줘야하는 상황이라면 2차, 3차...N차로 props를 내려줘야하므로 의존성과 복잡성이 증가하게됩니다.
export const LyMainGnb = ({
  children,
  padding,
  bgColor,
  headerIcons = [
    { iconProps: { className: "bell", onClick: () => console.log("bell") } },
    { iconProps: { className: "help", onClick: () => console.log("help") } },
  ],
}: ILyMainGnb) => {
  return (
    <>
      <PaddingContainer padding={padding} bgColor={bgColor}>
        <HeaderMain
          wrapperProps={{ className: "mb-8" }}
          headerIcons={headerIcons}
        />
        {children}
        <GnbMain />
      </PaddingContainer>
    </>
  );
};
```

##1-4 마진 사용

- 컴포넌트에 직접적으로 마진을 넣게 되는 경우 재활용 측면에서 여백의 문제가 발생하게 됨을 알 수 있었습니다.
- 마진의 경우 1.디자인 foundation이 있다면 foundation에 맞게 여백을 조정하고
- 2.호불호가 갈리겠지만 mb-10과 같이 간편하게 클래스명으로 마진을 필요할때 넣는 형태가 개인적으로 컴포넌트를 만드는 측면에서 효율적이라고 판단됩니다.

```css
.mb-8 {
  margin-bottom: 0.8rem !important;
}
.mb-12 {
  margin-bottom: 1.2rem !important;
}
```

```javascript
// 하단 마진 12px 적용
 <Someting className="mb-12">
```
