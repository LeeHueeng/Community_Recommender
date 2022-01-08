/*
   DC,0
   FM,1
   ruri,2
   nate,3
   ppom,4
   duku,5
   inven,6
   clien,7
   utde,8
   instiz,9
   boba,10
   coolen,11
   순서대로 0,1,2,3,4~~~
   DC, FM, 루리웹, 네이트판, 뽐뿌, 더쿠, 인벤, 클리앙, 웃대, 인스티즈, 보배드림, 쿨엔조이,
*/



const qnaList = [



  {
    q: '1. 나는 게임이나 애니 콘솔,PC에 관해 관심이 많다',
    a: [
      {type: [2, 4, 6, 7, 11]},
      {type: [0, 1, 3, 5, 9, 8, 10]},
    ]
  },
  {
    q: '2. 나는 정치색이 많이 드러났으면 좋겠다. ',
    a: [
      {type: [0, 1, 4, 7]},
      {type: [5, 11, 3, 2, 8, 6]},
    ]
  },
  {
    q: '3. 나는 익명이 보장되었으면 좋겠다.',
    a: [
      {type: [0, 5, 4, 3, 9]},
      {type: [2, 1, 6, 7, 8, 10, 11]},
    ]
  },
  {
    q: '4. 나는 정보를 얻는것보다 유머를 보는것이 좋다.',
    a: [
      {type: [0, 1, 3, 5, 9, 8, 4]},
      {type: [2, 6, 7, 10, 11]},
    ]
  },
  {
    q: '5. 나는 주작글이여도 재미만 있으면 상관없다.',
    a: [
      {type: [0, 3, 5, 8, 9]},
      {type: [1, 2, 4, 6, 7, 10, 11]},
    ]
  },

  {
    q: '6. 나는 남자다.',
    a: [
      {type: [0, 1, 2, 7, 11]},
      {type: [3, 4, 5, 9, 10]},
    ]
  },
  {
    q: '7. 나는 인터넷에서 10원 20원 온라인 폐지줍는걸 즐긴다.',
    a: [
      {type: [4, 7, 11, 1, 4]},
      {type: [0, 2, 3, 5, 6, 8, 9, 10]},
    ]
  },
  {
    q: '8. 나는 스포츠가 좋다.',
    a: [
      {type: [1, 0]},
      {type: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]},
    ]
  },
  {
    q: '9. 나는 연예계에 관심이 많다.',
    a: [
      {type: [0, 3, 5, 8, 9]},
      {type: [1, 2, 4, 6, 7, 10, 11]},
    ]
  },
  {
    q: '10. 나는 젊다(10대~ 20대) ',
    a: [
      {type: [0, 1, 2, 3, 5, 6, 8, 9]},
      {type: [4, 7, 10, 11]},
    ]
  },
  {
    q: '11. 나는 영화, 드라마등 다양한 스트리밍을 즐겨본다.  ',
    a: [
      {type: [3, 5, 7, 8, 9]},
      {type: [0, 1, 6, 2, 4, 10, 11]},
    ]
  },
       {
    q: '12. 나는 사람과 만나는것 보다는 커뮤니티를 더 좋아한다.',
    a: [
      {type: [0, 2, 3, 8, 10, 11]},
      {type: [1, 4, 5, 6, 7, 9]},
    ]
  }
]

const infoList = [{
    name: '대한민국 최고규모의 익명커뮤니티 DC 인사이드가 적합합니다.',
    desc: '디시인사이드는 대한민국의 최대 규모 커뮤니티 포털 사이트이다. 운영 주체는 주식회사 디시인사이드이며 본사는 서울특별시 강남구 삼성동에 있다.디지털 카메라 정보를 다루는 사이트로 1999년 출범했으며 2000년대 초반 디지털 카메라 사진을 올리는 용도로 사용되던 게시판인 디시인사이드 갤러리가 큰 인기를 얻게 되자 커뮤니티 서비스로 방향을 선회, 2000년대 후반부터 폭발적인 인기를 얻으며 최대 규모 커뮤니티 포털 사이트로 거듭나게 되었다. 다른 커뮤니티의 게시판 격에 해당되는 디시인사이드 갤러리 서비스를 중심으로, 개인 페이지인 갤로그, 뉴스 페이지인 디시뉴스와 디시미디어, 위키 서비스인 디시위키, 게임 서비스인 디시게임, 데이터 서비스인 익사이팅 디시 등의 부속 서비스를 제공하고 있다.'
  },
  {
    name: '대한민국 최대규모의 스포츠 커뮤니티 FM 코라아가 적합합니다.',
    desc: '2008년 10월에 오픈한 대한민국의 인터넷 커뮤니티. 본래는 시뮬레이션 게임인 풋볼 매니저의 정보를 공유하는 커뮤니티였으나 유머갤 등 게임과 상관없는 여러 게시판이 생기고 유입 인원이 늘어났다. 2021년 12월 기준, 대한민국 사이트 접속자 수 8위, 커뮤니티로는 2위 규모의 사이트다 '
  },
  {
    name: '대한민국 최대규모의 게임 애니관련 커뮤니티 루리웹이 적합합니다.',
    desc: '한국의 비디오 게임 전문 사이트 및 커뮤니티. 2021년 12월 기준, 대한민국 인터넷 커뮤니티 접속자수 4위, 전체 18위 규모의 사이트이며, 디시 계통이 아닌 종합커뮤니티 중 가장 규모가 큰 사이트이다. 이름의 유래는 공식적으로는 운영자가 하이텔에서 활동했을때 하이텔 ID를 ONNURI(온누리)로 하려고 했으나 오타가 발생하여 ONRULI라는 애매모호한 단어로 ID가 등록되었고, 나름대로 애착이 생겨 RULI로 변경하여 이 ID를 바탕으로 RULIWEB(루리웹)이라고 명명했음을 주장하고 있으나, 네티즌 사이에서는 실질적으로 기동전함 나데시코의 호시노 루리에서 유래되었다고 여겨지고 있다.'
  },
  {
    name: '재미난 유머글이 많은 네이트 판이 적합합니다.',
    desc: '2001년에 개설된 네이트 내에 존재하는 인터넷 커뮤니티이자 여초 커뮤니티.홈, 문화, 뷰티 등등의 여러 카테고리가 있는데, 그 중에서도 유난히 큰 카테고리는 톡톡 카테고리이다.'
  },
  {
    name: '대한민국 최대규모의 쇼핑몰 정보공유 커뮤니티 뽐뿌가 적합합니다.',
    desc: '쇼핑몰 정보 공유 사이트로 시작하여, 스마트폰 대중화 이후부터 이동통신기기 거래 관련 최대의 커뮤니티 스마트폰 관련 정보나 쇼핑 정보 및 각종 재테크 관련 글들이 올라온다.  '
  },
  {
    name: '대한민국 최대 연예인 관련 커뮤니티 더쿠가 적합합니다.',
    desc: '일본 음악 관련 커뮤니티를 기원으로 하는, 연예인 관련 정보를 비롯한 다양한 주제를 다루는 인터넷 커뮤니티. 게시글 작성에는 아이디가 필요하지만, 회원가입 개방은 비정기적으로 이루어진다는 특징이 있다. 이에 따라 아이디 자체가 희소성을 가져 거래의 대상이 되기도 하며, 이러한 행위는 약관에 위배되어 처분될 수 있다.# 모든 게시물과 댓글의 닉네임은 무명의 더쿠로 통일되며, 실명 인증을 필요로 하는 제한적 익명성[3]을 보장받는다. 수집된 개인정보는 위탁 관리되며 탈퇴 후 3개월에서 최대 5년까지 보관되어 수사기관에 대한 협조를 비롯한 사이트 운영을 위해 이용된다.'
  },
  {
    name: '대한민국 최대 게임커뮤니티 인벤이 적합합니다.',
    desc: '대한민국의 주요 게임 웹진이자 커뮤니티. 주식회사 인벤커뮤니케이션즈에서 운영하고 있다.2021년 12월 기준, 대한민국 인터넷 커뮤니티 접속자수 3위, 전체 16위 규모의 사이트이다.'
  },
  {
    name: '대한민국 최대의 IT 커뮤니티 클리앙이 적합합니다.',
    desc: '2001년 말 개설된, IT 커뮤니티이다. 사이트 운영자는 cipher(테이스터). 운영회사는 씨엘커뮤니케이션즈(대표:이봉희)다.'
  },
  {
    name: '대한민국 최대의 유머커뮤니티 웃긴대학이 적합합니다.',
    desc: '1998년 8월 24일에 설립된 유머 커뮤니티이며 뿌리 깊은 국내 최장수 커뮤니티중 하나이다.현재 웃긴자료, 대기자료 등의 유머게시판 중심으로 운영하며 웃대툰, 공포, 사진 등의 창작게시판과 헬스, 만화, 게임, 요리, 동물, SNS 등의 취미 테마 게시판도 있으며 얼굴인식, 패션 분석 등의 인공지능이 가미된 게시판도 있다.'
  },
  {
    name: '대한민국의 아이돌 덕질커뮤니티! 인스티즈가 적합합니다.',
    desc: '2009년 8월 3일에 오픈한 유료 회원제 연예오락 커뮤니티 사이트. 주로 아이돌 덕질을 다루는 여초 사이트 중 하나다.'
  },
  {
    name: '대한민국 최대의 자동차 커뮤니티 보배드림이 적합합니다.',
    desc: '중고차 인터넷 쇼핑몰 겸 자동차 관련 인터넷 커뮤니티. 홈페이지시작은 중고차 쇼핑몰로 했으나 현재는 자동차 커뮤니티로 훨씬 유명하며, 보배드림이란 이름은 대표이사 김보배와 회사가 처음 입주한 건물인 드림타워에서 따왔다.'
  },
  {
    name: '대한민국 PC 커뮤니티 쿨엔조이가 적합합니다.',
    desc: '쿨엔조이는 원래 2004년에 현재 쿨엔조이대장인 주유환씨의 개인블로그로 시작되었으나, 2006년 3월에 쿨러관련 사이트로 리뉴얼한후 (이때까지는 아직 쿨엔조이가 아닌 Cooling Solution 라는 이름이었다.[2]) 2006년에 이름을 다시지어 쿨링박스, 하드웨어쿨, 쿨링웹 등 다양한 이름이 거론되었지만 결국 쿨엔조이로 결정이 되어 현재까지 이어지고 있다. '
  },
]
