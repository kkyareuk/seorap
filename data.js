window.SEORAP_DATA={
  projects:[{id:"drawer-village",name:"서랍마을",description:"캐릭터 생활 관찰 게임"},{id:"other-projects",name:"오타쿠놀이터",description:"취향과 창작을 모아 만드는 다음 프로젝트"}],
  directionLabels:{
    concept:"전체 인상",silhouette:"형태와 실루엣",facade:"정면 배치",palette:"색과 재질",details:"구체적인 소품과 생활감",small:"작은 지도에서 반드시 남길 것",avoid:"피해야 할 것"
  },
  tasks:[
    {
      id:"dv-draw-cafe",project:"서랍마을",type:"그림",title:"카페 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/cafe.png",completed:true,
      summary:"사용자가 완성한 카페 원화와 별도 불빛 레이어를 v1.0.168(181) 개발판에 반영했어요. 건물과 불빛이 함께 이동·확대·반전되고, 현실 시간에 따라 켜져요.",
      direction:{concept:"새 그림을 만들지 않고 제공된 완성 원화를 그대로 사용해요.",details:"불빛 레이어는 건물 원화와 같은 좌표로 추출하고 부드러운 빛 번짐만 적용해요."}
    },
    {
      id:"dv-draw-restaurant",project:"서랍마을",type:"그림",title:"음식점 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/restaurant.png",
      summary:"따뜻한 저녁 식사를 파는 작은 식당. 거대한 포크 대신 입구, 조리창, 테이블의 배치로 음식점임을 보여줘요.",
      direction:{
        concept:"오랫동안 같은 자리에서 장사해 온 가족 식당이에요. 특정 국가 음식으로 고정되지 않는 기본 음식점이므로, 익숙하고 따뜻하되 프랜차이즈처럼 보이지 않는 외관이 필요해요.",
        silhouette:"낮고 옆으로 넓은 2층 건물로 그려요. 1층 전면은 밝게 열고, 2층은 주거 공간처럼 창 두 개와 작은 지붕을 둬 시선을 아래로 모아요. 지붕은 한쪽이 짧게 이어진 비대칭 박공지붕으로 만들어 카페와 구분해요.",
        facade:"중앙의 미닫이 유리문을 기준으로 왼쪽에는 주방 조리창, 오른쪽에는 손님 좌석 창을 둬요. 조리창에는 김이 오르는 넓은 냄비와 국자 하나, 좌석 창에는 2인 식탁과 작은 물병만 보여요. 입구 위 차양은 따뜻한 벽돌색 한 줄로 단순하게 처리해요.",
        palette:"따뜻한 미색 회벽 50%, 밤색 목재 25%, 말린 벽돌색 15%, 실내 주황 조명 10%를 사용해요. 음식 색은 창 안의 작은 포인트로만 넣어요.",
        details:["입구 옆 메뉴판은 음식 사진 대신 그릇 실루엣 세 개","문손잡이는 둥근 나무 손잡이","창 아래에 빈 배달 바구니 하나","비를 맞지 않는 벽 쪽에 짧은 대기 벤치","주방 환기구는 지붕 뒤로 작게 보이게 배치"],
        small:"넓은 주방 조리창, 벽돌색 차양, 밝은 2인 식탁 창, 비대칭 지붕이 남아야 해요.",
        avoid:["포크와 나이프를 건물보다 크게 교차하기","음식 모형을 지붕에 쌓기","메뉴 사진을 벽 전체에 붙이기","카페처럼 테라스 좌석과 커피 소품을 강조하기"]
      }
    },
    {
      id:"dv-draw-hospital",project:"서랍마을",type:"그림",title:"병원 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/hospital.png",completed:true,
      summary:"사용자가 완성한 병원 원화와 별도 불빛 레이어를 v1.0.168(181) 개발판에 반영했어요. 건물과 불빛이 함께 이동·확대·반전되고, 현실 시간에 따라 켜져요.",
      direction:{concept:"새 그림을 만들지 않고 제공된 완성 원화를 그대로 사용해요.",details:"불빛 레이어는 건물 원화와 같은 좌표로 추출하고 부드러운 빛 번짐만 적용해요."}
    },
    {
      id:"dv-draw-theater",project:"서랍마을",type:"그림",title:"공연장 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/theater.png",completed:true,
      summary:"사용자가 완성한 피아노 공연장 원화와 별도 불빛 레이어를 v1.0.173(186) 개발판에 반영했어요. 건물과 불빛이 같은 위치·크기·반전 상태를 유지하며 시간 설정에 맞춰 켜져요.",
      direction:{
        concept:"콘서트, 연극, 뮤지컬을 모두 열 수 있는 마을 대표 공연장이에요. 낮에는 묵직한 문화시설, 밤에는 중앙 홀만 따뜻하게 빛나는 모습이 되어야 해요.",
        silhouette:"낮고 넓은 본관 양쪽이 펼쳐지고, 중앙 유리 입구 홀만 2층 높이로 솟는 구조예요. 중앙 홀의 위쪽은 완만한 곡선으로 마감해 무대 막이 열리는 인상을 주되 실제 커튼 모양 건물로 만들지는 않아요.",
        facade:"중앙 유리문 앞에 넓은 계단과 양쪽 경사로를 함께 두고, 입구 홀 안에는 샹들리에를 세밀한 선 대신 황금빛 점 여섯 개로 보여요. 좌우 벽에는 세로 포스터 박스를 한 개씩 넣고 나머지 벽은 비워 건물의 규모감을 살려요.",
        palette:"짙은 남색 석재 45%, 크림색 벽 25%, 황동 프레임 15%, 포도주색 포스터 박스 10%, 황금빛 조명 5%를 사용해요.",
        details:["중앙 홀 위에 별 세 개가 흩어진 자체 공연장 문장","포스터는 인물 그림 대신 서로 다른 색면과 제목선으로 단순화","계단 아래 작은 매표 창구 하나","벽면을 비추는 따뜻한 바닥 조명 네 개","공연이 끝난 뒤 잠시 앉는 낮은 벤치 두 개"],
        small:"세로로 밝은 중앙 홀, 양옆의 낮고 어두운 날개, 포도주색 포스터 박스가 남아야 해요.",
        avoid:["거대한 마이크와 음표를 지붕에 올리기","카지노처럼 전구를 외곽 전체에 두르기","네온 색을 여러 개 섞기","접근 가능한 입구를 계단 뒤나 옆면에 숨기기"]
      }
    },
    {
      id:"dv-draw-shop",project:"서랍마을",type:"그림",title:"옷가게 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/shop.png",completed:true,
      summary:"사용자가 완성한 웨딩드레스 부티크 원화를 v1.0.184(197) 개발판에 반영했어요.",
      direction:{
        concept:"주인이 직접 고른 옷과 액세서리를 파는 작은 편집숍이에요. 화려한 백화점보다 골목 안의 감각적인 가게에 가깝고, 성별이나 한 가지 스타일로 고정되지 않아야 해요.",
        silhouette:"폭이 좁은 2층 상가로 만들고 1층 쇼윈도를 건물 폭의 절반 정도로 크게 열어요. 2층 창은 한쪽으로 치우치게 두고 짧은 패브릭 차양으로 비대칭 균형을 잡아요.",
        facade:"쇼윈도 안에는 마네킹을 여러 개 두지 말고 재킷 한 벌, 긴 옷 한 벌, 가방 하나를 높이가 다른 삼각형 구도로 배치해요. 입구는 쇼윈도 옆으로 살짝 들어가게 만들고 바닥에는 작은 매트를 둬요.",
        palette:"바랜 청록 외벽 35%, 크림색 창틀 25%, 짙은 호두나무색 20%, 말린 겨자색 차양 15%, 옷의 포인트색 5%를 사용해요.",
        details:["간판은 글자보다 천 조각 세 장이 겹친 자체 심벌","차양 아래 서로 다른 모양의 옷걸이 두 개","문 옆에 오늘의 코디를 그린 작은 입간판","쇼윈도 바닥에 낮은 나무 상자 하나","창 안 조명은 둥근 스포트라이트 두 개만 사용"],
        small:"말린 겨자색 차양, 넓은 쇼윈도, 재킷과 긴 옷의 두 실루엣, 청록 외벽이 남아야 해요.",
        avoid:["거대한 옷걸이와 드레스를 지붕에 올리기","쇼윈도 안에 옷을 빽빽하게 채우기","실제 브랜드 로고 사용하기","분홍색이나 정장 한 종류로 가게 성격을 고정하기"]
      }
    },
    {
      id:"dv-draw-office",project:"서랍마을",type:"그림",title:"사무실 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/office.png",completed:true,
      summary:"사용자가 완성한 도심 오피스 원화와 조명 레이어를 v1.0.184(197) 개발판에 반영했어요.",
      direction:{
        concept:"일반 회사, IT 회사, 연구소, 디자인 스튜디오가 함께 사용할 수 있는 범용 업무 건물이에요. 딱딱한 기업 본사보다 오래된 건물을 고쳐 여러 팀이 일하는 곳처럼 보여요.",
        silhouette:"회갈색 벽돌 3층 건물 위에 작은 유리 회의실을 한쪽으로 얹어요. 입구 쪽 모서리를 세로 유리창으로 잘라 무거운 직육면체가 되지 않게 하고, 옥상 높이는 한쪽만 살짝 다르게 만들어요.",
        facade:"1층에는 로비와 긴 공동 테이블이 보이는 통창, 2·3층에는 일정한 창을 두되 블라인드, 화분, 켜진 조명의 위치를 다르게 해요. 입구는 유리 모서리 아래에 두고 작은 자전거 거치대를 붙여요.",
        palette:"회갈색 벽돌 50%, 짙은 청록 금속 20%, 청회색 유리 20%, 주황빛 실내 조명 10%를 사용해요.",
        details:["회사 이름 대신 픽셀 네 칸이 모인 중립적인 심벌","옥상 유리방 안에 긴 테이블 실루엣","입구 옆 우편함과 배송 상자 하나","직원 자전거 두 대가 꽂힌 거치대","한 층의 창가에만 길게 이어진 화분 상자"],
        small:"벽돌 상자 위의 옥상 유리방, 청록색 입구 모서리, 층마다 다른 조명 패턴이 남아야 해요.",
        avoid:["거대한 연필과 서류를 지붕에 올리기","파란 유리 초고층 건물로 만들기","회로 문양을 외벽 전체에 넣기","모든 창을 똑같이 복사해 사람이 없는 건물처럼 만들기"]
      }
    },
    {
      id:"dv-draw-school",project:"서랍마을",type:"그림",title:"학교 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/school.png",completed:true,
      summary:"사용자가 완성한 학사모 학교와 시계탑 학교 원화를 v1.0.184(197) 개발판에 반영했어요.",
      direction:{
        concept:"초·중·고등학교에 공통으로 사용할 수 있는 기본 학교예요. 아이들이 생활하는 장소라는 따뜻함은 있지만 장난감 학교처럼 유아적으로 보이지 않아야 해요.",
        silhouette:"가운데 현관동이 3층으로 조금 높고, 양옆 교실동이 2층 높이로 길게 뻗는 구조예요. 뒤편 한쪽에 체육관의 낮은 둥근 지붕이 조금만 보이게 해 건물 기능을 넓혀요.",
        facade:"중앙 현관 앞에 넓은 비가림 지붕과 계단·경사로를 함께 두고, 현관 위에는 숫자 대신 굵은 점으로 된 둥근 시계를 달아요. 교실 창은 반복하되 몇 군데에만 화분, 블라인드, 색종이 장식을 넣어요.",
        palette:"밝은 모래색 벽돌 50%, 연한 하늘색 창틀 20%, 나무색 현관 15%, 잔디 녹색 10%, 운동장 원색 5%로 잡아요.",
        details:["현관 위 문장은 펼친 서랍이 아니라 작은 집들과 새싹이 모인 마을 문장","나무 그늘 아래 낮은 벤치","차도와 분리된 보행로와 횡단 표시","자전거 거치대 네 칸","운동장 쪽에 농구 골대 실루엣 하나만 작게 표시"],
        small:"높은 중앙 현관동, 둥근 시계, 양옆의 긴 교실동, 뒤편 체육관 지붕이 남아야 해요.",
        avoid:["거대한 종과 연필을 지붕에 올리기","감옥 같은 높은 철문과 담장","모든 창을 완전히 똑같이 복사하기","놀이터 소품을 건물 앞에 과도하게 배치하기"]
      }
    },
    {
      id:"dv-draw-park",project:"서랍마을",type:"그림",title:"공원 그림 그리기",checkLabel:"그렸어요",image:"assets/buildings/park.png",completed:true,
      summary:"사용자가 완성한 분수·벤치·나무 공원 원화와 가로등 불빛 레이어를 v1.0.173(186) 개발판에 반영했어요.",
      direction:{
        concept:"산책, 휴식, 반려동물과의 외출이 모두 가능한 동네 공원이에요. 놀이공원처럼 시설을 채우지 않고, 큰 나무 아래 머물 수 있는 여백을 중심으로 그려요.",
        silhouette:"낮은 타원형 잔디 지형 위에 높이가 다른 나무 세 그루를 삼각형으로 배치해 하나의 덩어리처럼 보여요. 가장 큰 나무는 뒤쪽 한편에 두고 중앙 시야는 열어둬요.",
        facade:"공원 입구는 낮은 돌기둥 두 개와 완만한 산책로로 표시해요. 길은 앞에서 시작해 큰 나무 뒤로 부드럽게 휘어 사라지고, 벤치는 길을 바라보는 방향으로 두 개만 배치해요.",
        palette:"세이지 녹색 35%, 짙은 숲 녹색 25%, 연두 15%, 흙길 베이지 15%, 벤치 목재와 꽃색 10%를 사용해요. 풀을 낱개로 그리지 말고 큰 색면 세 단계로 나눠요.",
        details:["작은 원형 분수는 중앙이 아니라 입구 가까운 한쪽에 배치","반려동물 물그릇과 배변 봉투함을 낮게 배치","벤치 옆 가로등 하나","계절꽃은 한 군데에 세 덩어리만","산책로 가장자리에 납작한 돌 표식 몇 개"],
        small:"가장 큰 나무의 둥근 수관, 휘어진 밝은 산책로, 벤치 두 개, 낮은 타원 지형이 남아야 해요.",
        avoid:["거대한 나무 한 그루만 그리고 끝내기","분수·놀이터·꽃·동물을 모두 채우기","잔디를 가는 선으로 빽빽하게 묘사하기","서랍이나 화분 모양 테두리 안에 공원을 가두기"]
      }
    },
    {
      id:"dv-draw-library",project:"서랍마을",type:"그림",title:"도서관 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/library.png",completed:true,
      summary:"사용자가 완성한 책더미 도서관 원화를 v1.0.184(197) 개발판에 반영했어요.",
      direction:{
        concept:"아이, 학생, 어른이 함께 쓰는 공공도서관이에요. 엄숙한 지식의 신전보다 조용히 오래 머물 수 있는 밝은 생활 공간으로 보여야 해요.",
        silhouette:"높이가 다른 직사각형 세 덩어리가 옆으로 겹치는 2층 건물로 만들어요. 가장 낮은 덩어리 위에는 작은 옥상정원을 두고, 중앙 덩어리의 세로 창을 가장 높게 올려요.",
        facade:"중앙 입구 옆에 2층까지 이어지는 긴 세로 창을 두고 그 안으로 계단과 책장 몇 줄이 보이게 해요. 입구는 깊게 파인 그늘 아래 자동문으로 만들고, 문 앞은 계단 없이 광장과 이어져요.",
        palette:"따뜻한 회색 석재 40%, 밝은 나무 루버 25%, 청록 유리 20%, 식물 녹색 10%, 책의 작은 색점 5%를 사용해요.",
        details:["책갈피가 꽂힌 작은 사각형을 자체 도서관 표식으로 사용","입구 옆 둥근 반납함 하나","큰 나무 그늘 아래 독서 벤치","세로 창 안의 계단 난간과 펜던트 조명","옥상정원 가장자리의 낮은 풀과 의자 두 개"],
        small:"높이가 다른 세 건물 덩어리, 긴 세로 창, 밝은 나무 루버, 옥상정원의 녹색이 남아야 해요.",
        avoid:["지붕 위에 거대한 열린 책과 안경을 올리기","창마다 책등을 세밀하게 그리기","고대 신전처럼 거대한 계단과 기둥 사용하기","외벽을 모두 갈색 책장처럼 만들기"]
      }
    },
    {
      id:"dv-draw-mall",project:"서랍마을",type:"그림",title:"쇼핑몰 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/shop.png",
      summary:"여러 가게가 한 건물에 모였다는 것이 창과 입구 리듬으로 보이는 중형 쇼핑몰이에요.",
      direction:{
        concept:"백화점보다 작고 동네 상점보다 큰 3층 규모의 복합 쇼핑몰이에요. 거대한 쇼핑백 상징 대신 여러 가게의 서로 다른 쇼윈도가 한 지붕 아래 이어지는 모습으로 기능을 보여줘요.",
        silhouette:"높이가 조금씩 다른 세 덩어리를 옆으로 연결하고 중앙에 둥근 유리 아트리움을 배치해요. 좌우 건물의 지붕선을 다르게 하되 전체 바닥선은 하나로 이어지게 해요.",
        facade:"중앙 자동문 위에 2층 높이의 유리창을 두고, 양옆 1층에는 폭이 다른 쇼윈도 네 개를 배치해요. 각 쇼윈도는 옷, 생활용품, 카페처럼 색면과 소품 하나만 다르게 보여주고 간판 크기는 통일해요.",
        palette:"따뜻한 회백색 35%, 연한 살구색 20%, 청록 유리 20%, 밝은 목재 15%, 가게별 포인트색 10%를 사용해요.",
        details:["중앙 아트리움 안에 층을 잇는 계단 실루엣","입구 앞 작은 화단 두 개","가게 간판은 글자 대신 서로 다른 단순 심벌","택배 보관함과 자전거 거치대","옥상 가장자리에 작은 테라스 우산 두 개"],
        small:"둥근 중앙 유리 아트리움, 양옆으로 이어진 여러 쇼윈도, 서로 다른 높이의 세 덩어리가 남아야 해요.",
        avoid:["거대한 쇼핑백과 선물 상자를 지붕에 올리기","수십 개 간판을 제각각 크기로 붙이기","초대형 백화점이나 마천루처럼 만들기","유리만 사용해 차갑고 비어 보이게 만들기"]
      }
    },
    {
      id:"dv-draw-lodging",project:"서랍마을",type:"그림",title:"숙박시설 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/lodging.png",completed:true,
      summary:"사용자가 완성한 여행가방 호텔 원화를 v1.0.184(197) 개발판에 반영했어요.",
      direction:{
        concept:"여행자가 하루 쉬고 가는 4층 규모의 작은 호텔이에요. 궁전이나 고급 체인점보다 오래된 저택을 정성껏 고쳐 운영하는 숙소의 인상을 줘요.",
        silhouette:"모서리가 둥근 세로 건물 한쪽에 작은 탑처럼 돌출된 계단실을 두고, 1층 입구에는 깊은 캐노피를 달아요. 지붕 높이를 한쪽만 살짝 높여 단조로운 직사각형을 피하세요.",
        facade:"각 층 창은 같은 간격으로 두되 커튼, 화분, 켜진 조명의 위치를 조금씩 다르게 해요. 1층에는 로비 소파와 둥근 조명이 보이는 큰 창, 중앙에는 문턱 없는 자동문을 둬요.",
        palette:"바랜 살구색 회벽 45%, 크림색 창틀 20%, 짙은 녹색 캐노피 15%, 황동 조명 10%, 따뜻한 객실 불빛 10%를 사용해요.",
        details:["캐노피 위에 작은 열쇠와 달이 결합된 심벌","입구 옆 손잡이가 둥근 짐수레 하나","계단과 나란히 이어지는 완만한 진입로","한 객실 창에만 작은 발코니와 의자","옆벽에 빗물을 받는 가느다란 배수관"],
        small:"짙은 녹색 캐노피, 살구색 세로 건물, 층마다 다른 따뜻한 창, 달과 열쇠 심벌이 남아야 해요.",
        avoid:["거대한 침대와 별을 지붕에 올리기","금장과 샹들리에를 외벽 전체에 반복하기","별 다섯 개 등급을 크게 표시하기","궁전처럼 폭이 넓고 위압적으로 만들기"]
      }
    },
    {
      id:"dv-draw-public-office",project:"서랍마을",type:"그림",title:"관공서 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/generic.png",
      summary:"주민이 편하게 드나드는 작은 시청·주민센터용 공공건물이에요.",
      direction:{
        concept:"시청, 주민센터 등 공공 업무에 공통으로 사용할 건물이에요. 권위를 드러내는 석조 기념물이 아니라 주민이 질문하고 서류를 처리하는 열린 생활 공간처럼 보여야 해요.",
        silhouette:"가운데 홀은 3층, 양옆 민원실은 2층으로 낮게 펼쳐요. 중앙 지붕에는 높은 탑 대신 작은 시계와 가느다란 깃발봉을 두고, 전체 모서리는 단정하지만 조금 둥글게 처리해요.",
        facade:"넓은 유리 자동문과 낮은 안내 데스크가 밖에서도 보이게 하고, 입구 앞 광장은 계단 없이 완만하게 이어지게 해요. 좌우 창은 반복하되 한쪽에는 주민 게시판, 다른 쪽에는 대기 의자가 보이게 해요.",
        palette:"따뜻한 밝은 석재 45%, 벽돌색 20%, 짙은 청록 지붕 15%, 나무 문틀 10%, 실내 조명과 식물 10%를 사용해요.",
        details:["작은 집 다섯 채가 모인 중립적인 마을 문장","광장 한쪽의 낮은 마을 지도 게시판","나무 그늘 벤치와 낮은 음수대","자동문까지 이어지는 촉각 안내선","우편·민원 서류를 넣는 낮은 투입함"],
        small:"높은 중앙 홀, 청록 시계 지붕, 양옆으로 낮게 펼쳐진 민원실, 밝은 자동문이 남아야 해요.",
        avoid:["거대한 국기와 도장을 지붕에 올리기","궁전 같은 기둥과 긴 계단 사용하기","사자상이나 권위적인 문장 넣기","주민 출입문을 작게 숨기고 정문을 장식용으로 만들기"]
      }
    },
    {
      id:"dv-draw-home",project:"서랍마을",type:"그림",title:"기본 주택 그리기",checkLabel:"그렸어요",image:"assets/buildings/home.png",completed:true,
      summary:"사용자가 완성한 빨간 지붕 집 원화와 창문 불빛 레이어를 v1.0.173(186) 개발판에 반영했어요. 집 내부 설정과 마을 지도에서 편집하는 외형 설정도 분리했어요.",
      direction:{
        concept:"한두 명부터 가족, 친구, 공동생활까지 다양한 구성원이 살 수 있는 기본 집이에요. 지나치게 부유하거나 가난한 인상 없이 오래 살며 조금씩 고쳐 온 편안한 주택이어야 해요.",
        silhouette:"2층 본채와 낮은 1층 확장 공간이 옆으로 붙은 비대칭 구조로 만들어요. 박공지붕 두 개의 높이를 다르게 하고, 작은 굴뚝은 뒤쪽으로 치워요. 정면이 보이는 3/4 시점에서 현관과 옆마당이 함께 보여야 해요.",
        facade:"현관은 건물 중앙에서 약간 벗어나게 두고 짧은 지붕을 달아요. 1층에는 넓은 거실 창, 2층에는 크기가 다른 창 두 개를 배치해 방의 쓰임이 다르게 느껴지게 해요. 창 안은 커튼과 조명만 단순하게 보여요.",
        palette:"따뜻한 크림 회벽 45%, 회갈색 지붕 25%, 세이지색 현관문 10%, 자연 목재 10%, 벽돌과 화분색 10%를 사용해요.",
        details:["현관 옆 우편함과 젖은 우산 하나","거실 창 아래 작은 화분 상자","옆마당의 접힌 빨래 건조대 또는 자전거 하나","현관까지 이어지는 납작한 디딤돌","창마다 모양이 조금 다른 커튼"],
        small:"높이가 다른 두 지붕, 세이지색 현관문, 넓은 거실 창, 낮은 옆 확장 공간이 남아야 해요.",
        avoid:["집 전체를 서랍이나 장난감 상자로 만들기","하트 모양 창과 과도한 꽃 장식","모든 창과 지붕을 완벽하게 대칭으로 만들기","특정 가족 구성을 암시하는 사람이나 이름표를 고정해서 넣기"]
      }
    },
    {
      id:"dv-draw-generic",project:"서랍마을",type:"그림",title:"중립 건물 그리기",checkLabel:"그렸어요",image:"assets/buildings/generic.png",completed:true,
      summary:"사용자가 완성한 옥상 정원 중립 건물 원화를 v1.0.184(197) 개발판에 반영했어요.",
      direction:{
        concept:"전용 디자인이 아직 없는 건물 유형을 대신하는 기본 상가예요. 미완성처럼 보이지 않으면서도 카페, 병원, 학교 등 특정 기능의 상징을 가져서는 안 돼요.",
        silhouette:"2층의 단순한 직사각 건물에 한쪽이 낮은 별채를 붙이고 지붕 높이를 조금 다르게 해요. 정면을 너무 비워 두지 않되 간판을 얹기 쉬운 평평한 면을 남겨요.",
        facade:"1층에는 크기가 다른 창 두 개와 중앙에서 약간 벗어난 문을 두고, 2층에는 작은 창 세 개를 불규칙하지만 균형 있게 배치해요. 입구 위에는 내용이 비어 있는 작은 간판 틀만 달아요.",
        palette:"따뜻한 회베이지 50%, 회갈색 지붕 20%, 짙은 청록 문 10%, 자연 목재 10%, 실내 조명과 화분 10%를 사용해요.",
        details:["빈 간판 틀은 네모가 아니라 모서리가 둥근 얕은 나무판","문 옆 화분 하나와 작은 벤치","창 안에는 기능을 암시하지 않는 커튼과 조명","옆벽에 작은 배수관","바닥에 납작한 디딤돌 세 개"],
        small:"높이가 다른 두 건물 덩어리, 청록 문, 빈 나무 간판 틀, 따뜻한 창이 남아야 해요.",
        avoid:["거대한 물음표 사용하기","서랍 손잡이를 기능 상징처럼 강조하기","다른 전용 건물의 소품을 섞기","아무 디테일도 없는 회색 상자로 만들기"]
      }
    }
  ],
  gptPrompt:`당신은 사용자의 여러 프로젝트를 함께 관리하고 실제 파일까지 수정하는 작업 파트너다.

[작업 목록 저장소]
- GitHub: https://github.com/kkyareuk/seorap
- 공개 사이트 데이터의 단일 기준 파일: data.js
- 기본 브랜치: main

[가장 중요한 목적]
- 사이트에는 사용자가 아직 해야 하는 실제 작업만 남긴다.
- 서랍마을뿐 아니라 사용자의 다른 모든 프로젝트도 같은 목록에서 project 값으로 구분한다.
- 목록을 회고록, 완료 기록, 개발 일지처럼 사용하지 않는다.

[항목 작성 규칙]
1. 하나의 결과물은 하나의 항목으로 쓴다. 세부 단계를 불필요하게 쪼개지 않는다.
2. 작업판은 완료 여부를 입력받지 않는 열람 전용 자산·디렉팅 목록으로 유지한다.
3. 제목은 ‘카페 건물 그리기’, ‘로고 최종본 그리기’처럼 결과물이 바로 보이게 쓴다.
4. 막연한 아이디어, 언젠가 할 일, 이미 끝난 일은 넣지 않는다.
5. 새 프로젝트가 생기면 projects에 추가하고 모든 task에 project 이름을 명시한다.

[그림 디렉팅 규칙]
1. ‘큰 창과 따뜻한 조명으로 카페처럼 보이게’ 같은 한 문장짜리 지시는 금지한다.
2. 반드시 전체 인상, 실루엣과 구조, 정면 배치, 정확한 색 비율과 재질, 구체적인 소품과 위치, 작은 크기에서 남길 특징, 피해야 할 것을 작성한다.
3. 상징물을 건물보다 크게 지붕에 올리는 방식에 의존하지 않는다. 기능은 건축 구조와 생활 흔적으로 보여준다.
4. 모든 건물을 서랍 모양으로 만들거나 서랍 손잡이를 반복하지 않는다. 프로젝트 이름의 말장난보다 하나의 따뜻한 마을에 속하는 통일된 시점·선·명암·색감을 우선한다.
5. ‘귀엽게’, ‘아기자기하게’로 끝내지 말고 무엇을 어디에 몇 개, 어떤 크기와 색으로 둘지 설명한다.
6. 접근성 동선이나 실제 사용 구조를 장식처럼 그리지 않는다. 경사로, 문, 창, 출입로는 실제로 이어져야 한다.
7. 기존 AI 이미지는 참고용일 뿐 복제하지 않으며, 사용자가 직접 그릴 최종 디자인을 독립적으로 디렉팅한다.

[완료 처리 규칙]
1. 사용자와 함께 문제를 해결했거나 사용자가 그림을 완성했다고 알리면 해당 task를 삭제하지 않고 O 완료 상태로 남긴다.
2. 해결과 동시에 관련 사이트 파일을 수정하고 필요한 검증을 실행한다.
3. 사용자가 매번 따로 요청하지 않아도 seorap 저장소의 main에 직접 커밋하고 푸시한다.
4. 커밋에는 이번에 추가·수정·삭제한 작업만 포함하고, 사용자의 다른 변경은 건드리지 않는다.
5. 마지막 답변에는 삭제하거나 추가한 항목, 커밋 해시, main 반영 여부를 알려준다.

[서랍마을 업데이트 기록]
- 서랍마을 코드 작업이 끝날 때마다 실제 적용 버전과 사용자가 체감하는 변경사항을 이 작업판의 업데이트 기록에 추가한다.
- 작업판 변경도 같은 작업 안에서 커밋하고 main에 푸시한다.

[새 작업이 생겼을 때]
- 사용자의 대화에서 명확한 미완료 결과물이 생기면 seorap의 data.js에 간결한 task로 추가한다.
- 그림이라면 위 수준의 상세 direction을 함께 작성한다.
- 코드 문법과 이미지 경로를 확인하고 main에 커밋·푸시한다.
- 사용자가 단순히 의견을 묻는 중이라면 확정된 할 일로 오해해 추가하지 않는다.`
};

Object.assign(window.SEORAP_DATA,{
  sections:[
    {id:"art",label:"그림",icon:"✦",subsections:[
      {id:"building-exterior",label:"건물 외관"},{id:"building-interior",label:"건물 내부"},{id:"preference-icons",label:"취향사전 아이콘"},{id:"ui",label:"UI·기타"}
    ]},
    {id:"audio",label:"음악·소리",icon:"♪",subsections:[
      {id:"music",label:"음악"},{id:"sfx",label:"효과음"}
    ]},
    {id:"release",label:"출시",icon:"↑",subsections:[
      {id:"play-store",label:"Google Play"},{id:"web",label:"웹사이트"},{id:"testing",label:"테스트"}
    ]},
    {id:"docs",label:"문서·이메일",icon:"□",subsections:[
      {id:"email",label:"이메일"},{id:"store-copy",label:"스토어 문구"},{id:"policy",label:"정책·안내"}
    ]}
  ],
  documents:[
    {
      id:"dv-closed-beta-invite",project:"서랍마을",section:"docs",subsection:"email",title:"비공개 베타테스트 참여 안내",description:"테스트 계정을 등록한 뒤 참여자에게 그대로 붙여넣어 보내는 이메일입니다.",
      content:`[서랍마을] 비공개 베타테스트 참여 안내

안녕하세요! 서랍마을 개발자입니다.

먼저 서랍마을: 캐릭터 생활 시뮬레이터 비공개 베타테스트에 신청해주셔서 감사합니다.

신청해주신 Google 계정을 테스트 사용자로 등록해드렸습니다. 아래 링크를 통해 Google Play에서 서랍마을을 설치하고 테스트에 참여해주세요!

Google Play 설치 링크
https://play.google.com/store/apps/details?id=com.drawervillage.app

테스트 중에는 자유롭게 게임을 이용해주시면 됩니다. 플레이하시면서 오류가 발생하거나 불편한 점, 개선되었으면 하는 부분을 발견하셨다면 제보해주시면 정식 출시 준비에 큰 도움이 됩니다.

또한 Google Play 비공개 테스트 진행을 위해 테스트 참여 후 14일 동안 참여 상태를 유지해주시길 부탁드립니다. 가능하면 테스트 기간 중 앱을 삭제하거나 테스트에서 탈퇴하지 말아주세요.

베타테스트에 참여해주셔서 정말 감사합니다!

서랍마을 개발자 드림`
    }
  ]
});

window.SEORAP_DATA.tasks.forEach(task=>{
  task.section=task.section||"art";
  task.subsection=task.subsection||"building-exterior";
  task.checkLabel=task.checkLabel||"완료";
});

window.SEORAP_DATA.tasks.push(
  {id:"dv-art-interior-home",project:"서랍마을",section:"art",subsection:"building-interior",title:"기본 주택 내부 세트 그리기",checkLabel:"그렸어요",summary:"거실·현관·침실·주방·욕실이 한 집의 구조와 재질로 이어지는 기본 내부 세트."},
  {id:"dv-art-interior-cafe",project:"서랍마을",section:"art",subsection:"building-interior",title:"카페 내부 그리기",checkLabel:"그렸어요",summary:"로스터, 주문대, 창가 2인석이 실제 동선으로 이어지는 작은 로스터리 내부."},
  {id:"dv-art-interior-restaurant",project:"서랍마을",section:"art",subsection:"building-interior",title:"음식점 내부 그리기",checkLabel:"그렸어요",summary:"조리 공간과 손님 좌석이 분리되지만 따뜻한 생활감이 이어지는 가족 식당 내부."},
  {id:"dv-art-interior-hospital",project:"서랍마을",section:"art",subsection:"building-interior",title:"병원 내부 그리기",checkLabel:"그렸어요",summary:"접수대·대기석·진료실 입구와 접근 가능한 이동 폭이 분명한 병원 내부."},
  {id:"dv-art-interior-theater",project:"서랍마을",section:"art",subsection:"building-interior",title:"공연장 내부 그리기",checkLabel:"그렸어요",summary:"로비·매표·객석 입구가 연결되고 공연 전후의 조명이 다른 공연장 내부."},
  {id:"dv-art-interior-shop",project:"서랍마을",section:"art",subsection:"building-interior",title:"옷가게 내부 그리기",checkLabel:"그렸어요",summary:"행거·거울·피팅룸·계산대가 좁은 공간에서 겹치지 않는 편집숍 내부."},
  {id:"dv-art-interior-school",project:"서랍마을",section:"art",subsection:"building-interior",title:"학교 내부 세트 그리기",checkLabel:"그렸어요",summary:"교실·복도·급식실·도서 공간이 같은 학교의 재질과 창 구조를 공유하는 세트."},
  {id:"dv-art-interior-library",project:"서랍마을",section:"art",subsection:"building-interior",title:"도서관 내부 그리기",checkLabel:"그렸어요",summary:"서가 사이 통로, 열람석, 어린이 공간과 계단이 실제로 이어지는 공공도서관 내부."},
  {id:"dv-art-pref-food",project:"서랍마을",section:"art",subsection:"preference-icons",title:"취향사전 음식 아이콘 세트 그리기",checkLabel:"그렸어요",summary:"밥·면·국물·구이·튀김·샐러드·디저트를 작은 크기에서도 구분하는 투명 아이콘 세트."},
  {id:"dv-art-pref-drink",project:"서랍마을",section:"art",subsection:"preference-icons",title:"취향사전 음료 아이콘 세트 그리기",checkLabel:"그렸어요",summary:"물·커피·차·주스·탄산·술의 용기와 표면 차이를 살린 투명 아이콘 세트."},
  {id:"dv-art-pref-hobby",project:"서랍마을",section:"art",subsection:"preference-icons",title:"취향사전 취미 아이콘 세트 그리기",checkLabel:"그렸어요",summary:"독서·게임·음악·운동·공예·여행 등 취미 분류용 투명 아이콘 세트."},
  {id:"dv-art-pref-fashion",project:"서랍마을",section:"art",subsection:"preference-icons",title:"취향사전 패션 아이콘 세트 그리기",checkLabel:"그렸어요",summary:"옷 종류와 스타일을 작은 실루엣만으로 구분하는 투명 아이콘 세트."},
  {id:"dv-art-pref-object",project:"서랍마을",section:"art",subsection:"preference-icons",title:"취향사전 소지품 아이콘 세트 그리기",checkLabel:"그렸어요",summary:"선물·구매·소지품 장면에 함께 쓰는 생활 물건 투명 아이콘 세트."},
  {id:"dv-art-ui-menu",project:"서랍마을",section:"art",subsection:"ui",title:"메인 메뉴 아이콘 최종본 그리기",checkLabel:"그렸어요",summary:"집·캐릭터·취향·관계·루틴·마을·상점·설정을 같은 선 굵기와 면 처리로 통일."},
  {id:"dv-art-ui-action",project:"서랍마을",section:"art",subsection:"ui",title:"생활 행동 아이콘 세트 그리기",checkLabel:"그렸어요",summary:"먹기·마시기·씻기·면도·수면·청소·이동 등 현재 행동 위에 표시할 투명 아이콘."},
  {id:"dv-art-ui-empty",project:"서랍마을",section:"art",subsection:"ui",title:"사진 미등록 빈 상태 그림 그리기",checkLabel:"그렸어요",summary:"프로필·SD·LD·건물 사진이 없을 때 실제 사진처럼 오해되지 않는 중립 빈 상태 세트."},
  {id:"dv-art-ui-store",project:"서랍마을",section:"art",subsection:"ui",title:"상점 상품 대표 그림 그리기",checkLabel:"그렸어요",summary:"캐릭터 슬롯·마을 슬롯·응원 선물·직업 확장팩을 서로 다른 실루엣으로 구분하는 대표 그림."},

  {id:"dv-music-observe",project:"서랍마을",section:"audio",subsection:"music",title:"관찰 화면 잔잔한 루프 음악 만들기",summary:"대사와 생활 효과음을 덮지 않는 60~90초 길이의 아주 조용한 기본 루프."},
  {id:"dv-music-home",project:"서랍마을",section:"audio",subsection:"music",title:"집 화면 포근한 루프 음악 만들기",summary:"실내의 느린 시간감을 살리되 멜로디 반복이 피곤하지 않은 작은 편성 루프."},
  {id:"dv-music-relationship",project:"서랍마을",section:"audio",subsection:"music",title:"관계 화면 루프 음악 만들기",summary:"연애에만 치우치지 않고 우정·가족·긴장 관계에도 어울리는 중립적이고 섬세한 루프."},
  {id:"dv-music-town",project:"서랍마을",section:"audio",subsection:"music",title:"마을 화면 산책 루프 음악 만들기",summary:"작은 상점과 이동을 가볍게 받쳐 주며 밝지만 들뜨지 않는 낮 시간 루프."},
  {id:"dv-music-night",project:"서랍마을",section:"audio",subsection:"music",title:"밤·수면 시간 루프 음악 만들기",summary:"고음과 강한 저음을 줄이고 자연스럽게 잠잠해지는 야간용 루프."},
  {id:"dv-sfx-wood-button",project:"서랍마을",section:"audio",subsection:"sfx",title:"나무 버튼 누름 소리 녹음하기",summary:"손톱 소리가 아니라 손가락으로 작은 나무 조각을 눌렀다 놓는 짧고 둔한 틱. 가까이 녹음하되 고역을 부드럽게."},
  {id:"dv-sfx-paper-tab",project:"서랍마을",section:"audio",subsection:"sfx",title:"종이 탭 넘김 소리 녹음하기",summary:"얇은 종이 한 장을 손끝으로 넘기는 0.2~0.4초 소리. 구김과 찢김 없이 작은 마찰만 남기기."},
  {id:"dv-sfx-save",project:"서랍마을",section:"audio",subsection:"sfx",title:"저장·확인 소리 녹음하기",summary:"나무 단추가 홈에 가볍게 맞는 두 박자 소리. 성공 알림처럼 반짝이거나 크지 않게."},
  {id:"dv-sfx-door-open",project:"서랍마을",section:"audio",subsection:"sfx",title:"큰 메뉴 이동 문 여는 소리 녹음하기",summary:"집·캐릭터·관계 같은 큰 메뉴에 들어갈 때 쓰는 작은 목재 방문 소리. 손잡이와 경첩을 짧게, 울림은 최소화."},
  {id:"dv-sfx-door-close",project:"서랍마을",section:"audio",subsection:"sfx",title:"큰 메뉴 이동 문 닫는 소리 녹음하기",summary:"큰 메뉴에서 나올 때 쓰는 부드러운 문 닫힘. 쾅 소리 없이 문틀에 천천히 닿는 저음만."},
  {id:"dv-sfx-drawer",project:"서랍마을",section:"audio",subsection:"sfx",title:"서랍·패널 여닫는 소리 녹음하기",summary:"작은 나무 서랍을 5~10cm 움직이는 마찰음. 시작과 멈춤이 들리되 레일 소리는 거칠지 않게."},
  {id:"dv-sfx-crispy",project:"서랍마을",section:"audio",subsection:"sfx",title:"바삭한 음식 먹는 소리 녹음하기",summary:"과자·튀김용 한입과 짧은 씹기. 입소리는 줄이고 식감만 가까이, 2~3가지 변형 녹음."},
  {id:"dv-sfx-soft-food",project:"서랍마을",section:"audio",subsection:"sfx",title:"부드러운 음식 먹는 소리 녹음하기",summary:"빵·케이크·부드러운 밥용. 바삭함 없이 포크나 접시의 작은 접촉과 한두 번의 조용한 씹기."},
  {id:"dv-sfx-noodle",project:"서랍마을",section:"audio",subsection:"sfx",title:"면 음식 먹는 소리 녹음하기",summary:"짧은 면 흡입과 그릇·젓가락 접촉을 따로 녹음. 과장된 먹방처럼 길거나 크게 만들지 않기."},
  {id:"dv-sfx-soup",project:"서랍마을",section:"audio",subsection:"sfx",title:"국물 음식 먹는 소리 녹음하기",summary:"숟가락이 그릇에 닿는 소리와 작은 후루룩을 분리 녹음. 뜨거운 국물과 차가운 국물 변형 준비."},
  {id:"dv-sfx-water",project:"서랍마을",section:"audio",subsection:"sfx",title:"물·차 마시는 소리 녹음하기",summary:"컵을 드는 소리, 한 모금, 아주 작은 꿀꺽을 분리해 녹음. 목소리와 입소리는 최소화."},
  {id:"dv-sfx-carbonated",project:"서랍마을",section:"audio",subsection:"sfx",title:"탄산음료 마시는 소리 녹음하기",summary:"뚜껑·기포·한 모금을 별도 파일로 녹음해 상황에 맞게 조합할 수 있게 하기."},
  {id:"dv-sfx-shower",project:"서랍마을",section:"audio",subsection:"sfx",title:"물 씻기 생활 소리 녹음하기",summary:"수도꼭지, 세면, 짧은 샤워 물줄기를 각각 조용한 근접음으로 녹음."},
  {id:"dv-sfx-fabric",project:"서랍마을",section:"audio",subsection:"sfx",title:"침구·옷감 생활 소리 녹음하기",summary:"이불을 당기기, 옷을 접기, 소파에 앉기의 부드러운 천 마찰을 각각 녹음."},
  {id:"dv-sfx-dishes",project:"서랍마을",section:"audio",subsection:"sfx",title:"식기 생활 소리 녹음하기",summary:"컵·접시·수저를 내려놓는 소리를 재질별로 작게 녹음하고 날카로운 충돌음은 제외."},

  {id:"dv-release-internal",project:"서랍마을",section:"release",subsection:"play-store",title:"Google Play 내부 테스트 v1.0.61(63) 올리기",summary:"설정·집·일정·마을 화면 수정이 포함된 최신 AAB를 내부 테스트 트랙에 올리고, 새 버전이 출시 가능 상태가 된 뒤 실제 기기에서 시작 화면과 집 화면 진입을 확인."},
  {id:"dv-release-closed",project:"서랍마을",section:"release",subsection:"play-store",title:"비공개 테스트 참여자 등록 확인하기",summary:"신청 Google 계정, 참여 링크, 14일 유지 안내가 서로 맞는지 확인."},
  {id:"dv-release-listing",project:"서랍마을",section:"release",subsection:"play-store",title:"Play 스토어 등록정보 최종 점검하기",summary:"앱 이름·짧은 설명·상세 설명·아이콘·스크린샷·연락처·개인정보처리방침 점검."},
  {id:"dv-release-web-smoke",project:"서랍마을",section:"release",subsection:"web",title:"사이트 배포 뒤 핵심 화면 점검하기",summary:"모바일과 데스크톱에서 사진 로딩, 메뉴 이동, 캐릭터 저장, 설정 연동을 실제 도메인으로 확인."},
  {id:"dv-release-device",project:"서랍마을",section:"release",subsection:"testing",title:"실기기 앱 핵심 기능 점검하기",summary:"Galaxy Android 15·16에서 앱 버전 1.0.59·빌드 61이 반복 종료 없이 시작되는지 먼저 확인. 이어서 집·캐릭터·취향 사전·관계·루틴·마을·상점·설정 버튼, 사진 복원과 저장 공간 상품을 점검."},
  {id:"dv-release-feedback",project:"서랍마을",section:"release",subsection:"testing",title:"베타 피드백 처리 목록 정리하기",summary:"재현 조건과 수정 버전을 기록하고 해결된 항목은 작업판의 현재 자료에서 정리."}
);

window.SEORAP_DATA.tasks.push(
  {id:"dv-doc-release-email",project:"서랍마을",section:"docs",subsection:"email",title:"정식 출시 안내 이메일 쓰기",summary:"베타 참여자에게 감사와 정식 출시 링크, 업데이트 방법을 알려 주는 붙여넣기용 이메일."},
  {id:"dv-doc-store-description",project:"서랍마을",section:"docs",subsection:"store-copy",title:"스토어 상세 설명 최종본 쓰기",summary:"게임의 실제 기능, 기기 저장 방식, 베타 상태를 과장 없이 설명하는 Google Play용 본문."},
  {id:"dv-doc-test-guide",project:"서랍마을",section:"docs",subsection:"policy",title:"베타테스터 오류 제보 안내 쓰기",summary:"설정 → 앱 정보의 버전·빌드 번호와 기기, 재현 순서, 화면 캡처를 부담 없이 보내도록 안내하는 짧은 문서."},
  {id:"dv-doc-release-faq",project:"서랍마을",section:"docs",subsection:"policy",title:"출시 전 자주 묻는 질문 정리하기",summary:"사진 저장, 기기 변경, 테스트 참여, 업데이트, 데이터 삭제 질문의 확정 답변 모음."}
);

// v4: 프로젝트 → 분야 → 분류 → 실제 결과물 순서로만 보여 주는 작업판 구조.
window.SEORAP_DATA.projects=[
  {id:"drawer-village",name:"서랍마을",description:"캐릭터 생활 관찰 게임"},
  {id:"otaku-playground",name:"오타쿠놀이터",description:"새로 준비할 프로젝트"}
];
window.SEORAP_DATA.sections=[
  {id:"art",label:"그림",categories:[
    {id:"building-exterior",label:"건물 외관"},{id:"building-interior",label:"건물 내부"},
    {id:"preference-icons",label:"취향사전 아이콘",groups:[
      {id:"food-icons",label:"음식 아이콘"},{id:"drink-icons",label:"음료 아이콘"},{id:"hobby-icons",label:"취미 아이콘"},{id:"fashion-icons",label:"패션 아이콘"},{id:"object-icons",label:"소지품 아이콘"}
    ]},
    {id:"ui",label:"UI·기타"}
  ]},
  {id:"music",label:"음악",categories:[{id:"scene-music",label:"화면 음악"}]},
  {id:"sound",label:"소리",categories:[{id:"interface-sfx",label:"버튼·화면 소리"},{id:"food-sfx",label:"먹기·마시기 소리"},{id:"life-sfx",label:"생활 소리"}]},
  {id:"release",label:"출시",categories:[{id:"play-store",label:"Google Play"},{id:"web",label:"웹사이트"},{id:"testing",label:"테스트"}]},
  {id:"documents",label:"문서",categories:[{id:"store-copy",label:"스토어 문구"},{id:"policy",label:"안내·정책"}]},
  {id:"email",label:"이메일",categories:[{id:"templates",label:"붙여넣기용 이메일"}]}
];

const removedSetTasks=new Set(["dv-art-pref-food","dv-art-pref-drink","dv-art-pref-hobby","dv-art-pref-fashion","dv-art-pref-object"]);
window.SEORAP_DATA.tasks=window.SEORAP_DATA.tasks.filter(task=>!removedSetTasks.has(task.id));
window.SEORAP_DATA.tasks.forEach(task=>{
  if(task.section==="audio"&&task.subsection==="music"){task.section="music";task.subsection="scene-music"}
  if(task.section==="audio"&&task.subsection==="sfx"){
    task.section="sound";
    task.subsection=["dv-sfx-crispy","dv-sfx-soft-food","dv-sfx-noodle","dv-sfx-soup","dv-sfx-water","dv-sfx-carbonated"].includes(task.id)?"food-sfx":["dv-sfx-shower","dv-sfx-fabric","dv-sfx-dishes"].includes(task.id)?"life-sfx":"interface-sfx";
  }
  if(task.section==="docs"){
    if(task.subsection==="email"){task.section="email";task.subsection="templates"}
    else task.section="documents";
  }
});
window.SEORAP_DATA.documents.forEach(document=>{document.section="email";document.subsection="templates"});

const preferenceIconSets={
  "food-icons":[
    {id:"rice",title:"밥 아이콘 그리기",shape:"낮고 둥근 도자기 그릇에 윤기가 다른 밥알 덩어리 세 개가 포개진 3/4 시점",palette:"크림색 밥 65%, 청회색 그릇 25%, 연한 황토 그림자 10%",point:"그릇 윗선 뒤로 밥이 반원처럼 올라오고, 앞면에는 짧은 가로 무늬 하나만 둬요.",avoid:"밥알을 하나씩 빽빽하게 묘사하거나 국그릇처럼 깊게 그리지 않기"},
    {id:"noodles",title:"면 요리 아이콘 그리기",shape:"넓은 그릇 위로 젓가락에 들린 면 세 가닥이 S자로 이어지는 실루엣",palette:"밀색 면 50%, 벽돌색 국물 25%, 짙은 갈색 그릇 20%, 파 고명 5%",point:"면 끝 한 가닥은 국물에 닿게 하고, 둥근 고명 두 개만 서로 다른 높이에 놓아요.",avoid:"면을 수십 가닥 그리거나 라면 봉지처럼 보이게 만들지 않기"},
    {id:"soup",title:"국물 요리 아이콘 그리기",shape:"양손잡이 냄비 안에 국자와 큼직한 재료 세 조각이 보이는 정면에 가까운 3/4 시점",palette:"주황빛 국물 45%, 짙은 청록 냄비 35%, 크림색 재료 15%, 초록 고명 5%",point:"김은 냄비 중앙에서 짧은 곡선 두 줄만 올리고 국자 손잡이는 오른쪽 위로 빼요.",avoid:"면을 넣어 면 요리와 겹치거나 김을 구름처럼 크게 그리지 않기"},
    {id:"grilled-meat",title:"구운 고기 아이콘 그리기",shape:"타원 접시 위에 두께가 다른 구운 고기 두 조각이 비스듬히 겹친 실루엣",palette:"적갈색 고기 55%, 짙은 갈색 굽기선 15%, 미색 접시 25%, 초록 곁들임 5%",point:"각 고기에 굽기선은 세 줄만 넣고 왼쪽 아래에 잎 한 장을 붙여요.",avoid:"생고기처럼 붉은 단면을 강조하거나 불꽃을 배경에 두르지 않기"},
    {id:"fish",title:"생선 요리 아이콘 그리기",shape:"긴 접시 위에 머리와 꼬리가 분명한 작은 통생선 한 마리가 놓인 옆모습",palette:"청회색 껍질 45%, 은빛 배 20%, 크림색 접시 25%, 레몬 노랑 10%",point:"비늘은 세 개의 짧은 곡선으로만 표시하고 꼬리 옆에 레몬 반달 하나를 둬요.",avoid:"낚시용 생물 아이콘처럼 헤엄치게 그리거나 뼈만 남은 생선으로 만들지 않기"},
    {id:"fried-food",title:"튀김 아이콘 그리기",shape:"종이 바구니에 길고 둥근 튀김 네 개가 부채꼴로 꽂힌 실루엣",palette:"황금 갈색 튀김 65%, 크림색 종이 20%, 적갈색 바구니 15%",point:"튀김마다 울퉁불퉁한 가장자리를 두세 번만 만들고 높이를 모두 다르게 해요.",avoid:"감자튀김 상자나 특정 패스트푸드 로고처럼 보이게 하지 않기"},
    {id:"salad",title:"샐러드 아이콘 그리기",shape:"넓고 얕은 투명 볼 안에 큰 잎 세 장과 둥근 토핑 세 개가 층을 이루는 실루엣",palette:"세이지·짙은 녹색 55%, 토마토색 15%, 노랑 10%, 유리 청회색 20%",point:"가장 큰 잎은 왼쪽 뒤, 토마토 두 개는 오른쪽 앞에 모아 색 덩어리를 나눠요.",avoid:"채소를 잘게 쪼개 복잡하게 만들거나 과일 그릇처럼 보이게 하지 않기"},
    {id:"bread",title:"빵 아이콘 그리기",shape:"둥근 식빵 한 덩이와 잘린 한 조각이 앞뒤로 겹치는 낮은 실루엣",palette:"꿀빛 껍질 45%, 크림색 속 40%, 갈색 그림자 15%",point:"빵 윗면에 사선 칼집 세 개, 잘린 조각에는 작은 기공 네 개만 넣어요.",avoid:"바게트와 크루아상을 한 아이콘에 함께 넣거나 밀 이삭을 크게 붙이지 않기"},
    {id:"cake",title:"케이크 아이콘 그리기",shape:"삼각 케이크 한 조각의 옆면에 두 겹 시트와 크림이 선명한 3/4 시점",palette:"딸기색 25%, 크림색 45%, 스펀지 황토색 25%, 짙은 갈색 5%",point:"윗면에는 작은 과일 하나와 짧은 크림 물결만 두고 접시는 생략해요.",avoid:"생일초와 장식을 여러 개 꽂거나 전체를 원형 케이크로 그리지 않기"},
    {id:"ice-cream",title:"아이스크림 아이콘 그리기",shape:"낮은 유리컵 위에 크기가 다른 둥근 스쿱 두 개와 짧은 스푼이 꽂힌 실루엣",palette:"연분홍 35%, 바닐라색 30%, 민트색 15%, 유리 청회색 20%",point:"아래 스쿱은 컵 안에 반쯤 잠기고 위 스쿱은 왼쪽으로 살짝 기울여요.",avoid:"무지개 토핑을 빽빽하게 넣거나 소프트콘과 컵을 섞지 않기"}
  ],
  "drink-icons":[
    {id:"water",title:"물 아이콘 그리기",shape:"투명한 낮은 유리컵에 수면이 70% 높이까지 차고 물방울 하나가 옆에 놓인 실루엣",palette:"투명 백색 45%, 옅은 하늘색 35%, 청회색 외곽 20%",point:"컵 안쪽 수면은 타원 한 줄, 앞면 반사는 세로선 한 줄만 남겨요.",avoid:"생수병 상표나 얼음을 넣어 다른 음료처럼 보이게 하지 않기"},
    {id:"coffee",title:"커피 아이콘 그리기",shape:"손잡이가 오른쪽인 낮은 머그와 표면의 작은 크림 원이 보이는 3/4 시점",palette:"짙은 커피색 45%, 크림색 잔 40%, 황토 그림자 15%",point:"김은 서로 길이가 다른 곡선 두 줄, 받침은 잔 아래에 반만 보이게 해요.",avoid:"원두를 잔보다 크게 놓거나 카페 로고를 넣지 않기"},
    {id:"tea",title:"차 아이콘 그리기",shape:"낮은 찻주전자와 손잡이 없는 찻잔이 대각선으로 이어지는 실루엣",palette:"세이지 주전자 45%, 호박빛 차 25%, 크림색 잔 20%, 갈색 그림자 10%",point:"주전자 주둥이는 왼쪽, 찻잔은 오른쪽 앞에 두고 작은 잎 하나만 곁들여요.",avoid:"커피 머그처럼 큰 손잡이를 붙이거나 다기 세트를 여러 개 늘어놓지 않기"},
    {id:"juice",title:"주스 아이콘 그리기",shape:"세로로 긴 투명컵에 굽은 빨대와 반달 과일 한 조각이 걸린 실루엣",palette:"주황·노랑 주스 55%, 투명 유리 25%, 초록 과일잎 10%, 분홍 빨대 10%",point:"컵 안에 과육 점은 세 개만 두고 과일 조각은 컵 오른쪽 테두리에 걸어요.",avoid:"여러 과일을 주변에 흩뿌리거나 칵테일 잔으로 보이게 하지 않기"},
    {id:"soda",title:"탄산음료 아이콘 그리기",shape:"짧은 유리병 안에 기포 다섯 개가 위로 작아지고 금속 뚜껑이 옆에 놓인 실루엣",palette:"청록 병 45%, 밝은 탄산색 25%, 은색 뚜껑 15%, 백색 반사 15%",point:"기포는 아래 두 개가 크고 위로 갈수록 작아지게 한 줄로 모아요.",avoid:"실제 음료 브랜드 색과 로고를 복제하거나 캔과 병을 함께 그리지 않기"},
    {id:"milk",title:"우유 아이콘 그리기",shape:"작은 유리병과 반쯤 채운 컵이 나란히 있는 둥근 실루엣",palette:"우윳빛 백색 60%, 옅은 파랑 유리 25%, 베이지 그림자 15%",point:"병 입구에는 종이 마개 한 겹만, 컵 수면에는 흰 타원 한 줄만 넣어요.",avoid:"젖소 무늬를 크게 넣거나 상표가 있는 우유팩으로 만들지 않기"},
    {id:"smoothie",title:"스무디 아이콘 그리기",shape:"둥근 돔 없이 넓은 컵에 걸쭉한 표면과 굵은 빨대가 보이는 실루엣",palette:"베리 보라 45%, 연분홍 25%, 크림색 15%, 투명컵 15%",point:"표면 한쪽에 작은 베리 두 알만 얹고 컵 벽에는 굵은 색면을 남겨요.",avoid:"주스처럼 투명하게 그리거나 휘핑크림을 높이 쌓지 않기"},
    {id:"wine",title:"와인·칵테일 아이콘 그리기",shape:"낮은 와인잔과 작은 칵테일 잔이 높이를 달리해 겹친 실루엣",palette:"포도주색 40%, 호박색 20%, 투명 유리 30%, 올리브 녹색 10%",point:"앞 잔에는 올리브 하나, 뒤 잔에는 붉은 수면만 보여 음료 차이를 만들어요.",avoid:"술병을 여러 개 세우거나 파티 장식과 네온색을 넣지 않기"}
  ],
  "hobby-icons":[
    {id:"reading",title:"독서 아이콘 그리기",shape:"반쯤 펼친 책 위로 책갈피가 아래쪽에 짧게 내려오는 대칭 실루엣",palette:"크림 종이 55%, 세이지 표지 30%, 벽돌색 책갈피 15%",point:"양쪽 페이지에는 짧은 선을 세 줄씩만 두고 중앙 제본선을 굵게 남겨요.",avoid:"안경과 책장을 함께 넣어 작은 크기에서 뭉치게 하지 않기"},
    {id:"gaming",title:"게임 아이콘 그리기",shape:"손잡이가 둥근 게임패드 하나에 십자키와 버튼 두 개가 분리된 실루엣",palette:"짙은 청록 55%, 크림색 25%, 살구·노랑 버튼 20%",point:"왼쪽 십자키와 오른쪽 두 버튼의 크기 차이를 분명히 해요.",avoid:"실제 콘솔 디자인이나 로고를 복제하지 않기"},
    {id:"music",title:"음악 감상 아이콘 그리기",shape:"둥근 헤드폰 안쪽에 작은 음표 하나가 들어가는 세로 실루엣",palette:"짙은 녹색 50%, 황동색 25%, 크림색 25%",point:"이어패드는 아래로 약간 벌리고 음표는 중앙보다 오른쪽에 작게 둬요.",avoid:"음표를 여러 개 흩뿌리거나 스피커와 악기를 함께 넣지 않기"},
    {id:"exercise",title:"운동 아이콘 그리기",shape:"운동화 한 짝과 짧은 물병이 대각선으로 맞물린 실루엣",palette:"벽돌색 신발 45%, 세이지 물병 25%, 크림색 밑창 20%, 갈색 끈 10%",point:"신발 앞코는 오른쪽, 물병은 뒤쪽에 세워 움직임 방향을 만들어요.",avoid:"덤벨·공·매트를 한꺼번에 넣어 종목을 고정하지 않기"},
    {id:"photography",title:"사진 촬영 아이콘 그리기",shape:"둥근 렌즈가 중앙보다 왼쪽에 있는 작은 카메라 실루엣",palette:"짙은 갈색 50%, 청회색 렌즈 30%, 황동 버튼 10%, 크림 반사 10%",point:"렌즈 안 반사는 사선 두 면만, 상단 셔터 버튼은 작게 돌출시켜요.",avoid:"사진 프레임과 삼각대를 함께 넣지 않기"},
    {id:"knitting",title:"뜨개질 아이콘 그리기",shape:"실타래 하나를 뜨개바늘 두 개가 X자로 느슨하게 가르는 실루엣",palette:"말린 장미색 실 50%, 밝은 목재 바늘 35%, 크림색 하이라이트 15%",point:"실 끝은 아래로 한 번만 굽어 나오고 실타래 홈은 세 줄만 넣어요.",avoid:"바늘을 날카로운 무기처럼 길게 빼거나 여러 색 실을 섞지 않기"},
    {id:"cooking",title:"요리 아이콘 그리기",shape:"낮은 프라이팬 위에 뒤집개가 사선으로 놓이고 재료 세 조각이 보이는 실루엣",palette:"짙은 청록 팬 50%, 나무색 손잡이 25%, 노랑·초록 재료 25%",point:"팬 손잡이는 오른쪽 위, 뒤집개는 반대 방향으로 짧게 교차시켜요.",avoid:"셰프 모자와 칼을 추가해 복잡하게 만들지 않기"},
    {id:"plants",title:"식물 돌보기 아이콘 그리기",shape:"작은 화분의 잎 세 장 위로 물뿌리개 주둥이가 들어오는 실루엣",palette:"세이지·짙은 녹색 50%, 황토 화분 30%, 청회색 물뿌리개 20%",point:"물방울은 주둥이와 잎 사이에 두 개만 두고 잎 높이를 모두 다르게 해요.",avoid:"정원 전체나 꽃 여러 송이를 그리지 않기"}
  ],
  "fashion-icons":[
    {id:"top",title:"상의 아이콘 그리기",shape:"어깨선이 둥근 기본 셔츠 한 벌의 정면 실루엣",palette:"세이지 55%, 크림색 칼라 25%, 짙은 녹색 그림자 20%",point:"칼라와 소매 끝만 다른 색으로 나눠 작은 크기에서도 상의로 읽히게 해요.",avoid:"옷걸이와 사람 몸을 함께 넣지 않기"},
    {id:"bottom",title:"하의 아이콘 그리기",shape:"허리선이 넓고 밑단이 살짝 좁아지는 바지 한 벌의 정면 실루엣",palette:"청회색 60%, 짙은 남색 그림자 25%, 황동 단추 15%",point:"주머니 선은 좌우 한 줄씩, 중앙 단추는 점 하나만 남겨요.",avoid:"치마와 바지를 한 아이콘에 겹치지 않기"},
    {id:"dress",title:"원피스 아이콘 그리기",shape:"짧은 소매 상체에서 A라인 치맛단으로 이어지는 하나의 실루엣",palette:"말린 장미색 55%, 크림색 칼라 20%, 포도주색 주름 25%",point:"허리선을 위쪽 40% 지점에 두고 치마 주름은 세 면으로만 나눠요.",avoid:"과도한 레이스와 리본을 반복하거나 특정 성별 상징으로 장식하지 않기"},
    {id:"outerwear",title:"아우터 아이콘 그리기",shape:"앞이 열린 짧은 코트의 두 앞섶이 좌우로 나뉜 실루엣",palette:"카멜색 55%, 짙은 갈색 25%, 크림 안감 20%",point:"한쪽 앞섶에 단추 두 개, 반대쪽에는 큰 주머니 한 개만 넣어요.",avoid:"정장 재킷과 패딩을 동시에 표현하지 않기"},
    {id:"shoes",title:"신발 아이콘 그리기",shape:"방향이 다른 신발 두 짝이 앞뒤로 살짝 겹친 낮은 실루엣",palette:"짙은 갈색 50%, 크림색 밑창 30%, 벽돌색 끈 20%",point:"앞 신발의 끈 세 칸과 뒤 신발의 옆면만 보여 중복을 줄여요.",avoid:"발이나 양말을 함께 그리지 않기"},
    {id:"accessory",title:"액세서리 아이콘 그리기",shape:"작은 귀걸이 한 쌍과 얇은 목걸이 펜던트가 삼각 구도를 이루는 실루엣",palette:"황동색 55%, 진주 크림 25%, 청록 보석 20%",point:"가운데 펜던트를 가장 크게, 귀걸이는 양옆에 서로 다른 높이로 둬요.",avoid:"보석을 지나치게 반짝이게 하거나 왕관처럼 보이게 하지 않기"}
  ],
  "object-icons":[
    {id:"phone",title:"스마트폰 아이콘 그리기",shape:"모서리가 둥근 휴대폰이 약간 기울고 화면 아래 작은 알림점 하나가 있는 실루엣",palette:"짙은 청록 55%, 청회색 화면 30%, 살구색 알림 15%",point:"화면에는 가로선 두 개와 작은 원 하나만 두어 특정 앱처럼 보이지 않게 해요.",avoid:"실제 제조사 카메라 배열과 로고를 복제하지 않기"},
    {id:"laptop",title:"노트북 아이콘 그리기",shape:"화면을 110도 연 노트북이 키보드 면과 삼각형을 이루는 3/4 시점",palette:"청회색 50%, 크림색 화면 30%, 짙은 녹색 키보드 20%",point:"키보드는 개별 키 대신 세 줄의 색면으로 단순화해요.",avoid:"데스크톱 모니터와 마우스를 함께 넣지 않기"},
    {id:"bag",title:"가방 아이콘 그리기",shape:"둥근 손잡이와 앞주머니 하나가 있는 중간 크기 토트백 정면 실루엣",palette:"카멜색 55%, 짙은 갈색 25%, 황동 잠금 20%",point:"손잡이 안쪽 여백을 크게 남기고 앞주머니는 아래쪽 40%에 둬요.",avoid:"명품 로고나 복잡한 패턴을 넣지 않기"},
    {id:"gift",title:"선물 아이콘 그리기",shape:"낮은 상자 위 리본 고리 두 개가 좌우 비대칭으로 놓인 실루엣",palette:"세이지 상자 50%, 말린 장미색 리본 35%, 크림색 하이라이트 15%",point:"리본 꼬리 하나는 상자 앞면까지 내려오고 다른 하나는 옆으로 짧게 빼요.",avoid:"폭죽과 별 장식을 주변에 흩뿌리지 않기"},
    {id:"perfume",title:"향수 아이콘 그리기",shape:"각진 낮은 유리병과 둥근 마개가 세로로 이어지는 실루엣",palette:"투명 크림 35%, 호박빛 향수 35%, 황동 마개 20%, 청회색 외곽 10%",point:"병 안 액체 높이는 절반, 라벨은 글자 없는 작은 타원만 둬요.",avoid:"실제 향수병 디자인과 브랜드 라벨을 복제하지 않기"},
    {id:"umbrella",title:"우산 아이콘 그리기",shape:"접힌 우산이 대각선으로 놓이고 굽은 손잡이가 아래쪽에서 크게 보이는 실루엣",palette:"짙은 청록 천 55%, 밝은 목재 손잡이 30%, 황동 살대 15%",point:"묶음끈 하나와 접힌 천 주름 세 면만 남겨요.",avoid:"펼친 우산과 빗방울을 함께 크게 그리지 않기"},
    {id:"wallet",title:"지갑 아이콘 그리기",shape:"반쯤 열린 작은 지갑에서 카드 두 장의 모서리만 보이는 실루엣",palette:"적갈색 가죽 55%, 크림 카드 25%, 청록 카드 10%, 황동 단추 10%",point:"카드는 높이를 다르게 하고 지갑 앞면에는 봉제선 한 줄만 둘러요.",avoid:"현금과 동전을 밖으로 쏟아 놓지 않기"},
    {id:"plush",title:"봉제인형 아이콘 그리기",shape:"둥근 귀와 짧은 팔다리를 가진 중립적인 작은 동물 인형의 정면 실루엣",palette:"따뜻한 회베이지 55%, 크림색 얼굴 25%, 벽돌색 목도리 20%",point:"눈은 작은 점 두 개, 봉제선은 배 한가운데 짧게 한 줄만 넣어요.",avoid:"기존 캐릭터나 유명 인형의 얼굴을 닮게 만들지 않기"}
  ]
};

Object.entries(preferenceIconSets).forEach(([group,items])=>items.forEach(item=>window.SEORAP_DATA.tasks.push({
  id:`dv-pref-${group}-${item.id}`,project:"서랍마을",section:"art",subsection:"preference-icons",group,
  title:item.title,checkLabel:"그렸어요",summary:item.shape,
  direction:{
    concept:`취향사전에서 ${item.title.replace(" 아이콘 그리기","")} 항목 하나를 나타내는 투명 배경 아이콘이에요. 다른 아이콘과 같은 3/4 시점, 같은 외곽선 굵기, 같은 그림자 방향을 유지해요.`,
    silhouette:item.shape,
    palette:item.palette,
    details:item.point,
    small:`48px에서도 주 대상의 바깥 윤곽과 가장 중요한 내부 특징 두세 개가 분리되어 보여야 해요. 대상 둘레에는 충분한 투명 여백을 남겨요.`,
    avoid:[item.avoid,"아이콘 뒤에 흰 원이나 네모 배경 넣기","글자·상표·굵은 흰 테두리 넣기","작은 소품을 여러 개 추가해 중심 실루엣 흐리기"]
  }
})));

window.SEORAP_DATA.gptPrompt=`당신은 사용자의 서랍마을과 그 밖의 사이트·앱·창작 프로젝트를 함께 만드는 작업 파트너다.

1. 오류나 디자인 문제는 CSS를 끝에 계속 덧붙여 가리지 말고, 구조·상태·데이터·이벤트·기존 스타일을 살펴 근본 원인을 고친다.
2. 사용자가 수정을 요청하면 가능한 범위에서 실제 수정과 검증까지 마친다. 완료한 변경은 따로 재촉하지 않아도 해당 저장소에 커밋하고 main에 반영한다.
3. 서랍마을을 수정할 때는 영어·일본어 번역도 함께 이어서 진행하고, 마지막에 각 언어의 번역 진행률을 알려준다.
4. 확정된 새 작업이나 완료된 작업이 생기면 작업판에도 반영한다. 완료된 항목은 삭제하지 않고 O 완료 상태로 남겨 진행률에 포함하며, 작업판 변경 역시 커밋해 main에 반영한다.
5. 이번 요청과 무관한 사용자 파일이나 변경은 건드리거나 커밋하지 않는다.
6. 마지막에는 무엇을 바꿨는지, 무엇을 검증했는지, 커밋과 main 반영 여부를 간단히 알려준다.`;

// v5: 그림 제작은 적당한 길이의 아트 디렉팅과 실제 픽셀 가이드로,
// 음악과 효과음은 하나의 사운드 제작 흐름으로 묶는다.
window.SEORAP_DATA.sections=[
  {id:"art",label:"그림",emoji:"🎨",categories:[
    {id:"building-exterior",label:"건물 외관",emoji:"🏘️"},
    {id:"home-exterior",label:"집 외관",emoji:"🏠"},
    {id:"building-interior",label:"건물 내부",emoji:"🛋️"},
    {id:"village-background",label:"마을 배경",emoji:"🗺️",groups:[
      {id:"city",label:"도시",emoji:"🏙️"},{id:"coast",label:"해안가",emoji:"🌊"},{id:"department-store",label:"백화점 내부",emoji:"🏬"},{id:"european",label:"유럽풍",emoji:"🏰"},
      {id:"residential",label:"주택가",emoji:"🏡"},{id:"countryside",label:"시골·전원",emoji:"🌾"},{id:"fantasy",label:"중세·판타지",emoji:"🕯️"},{id:"seasonal",label:"밤·계절",emoji:"🌙"}
    ]},
    {id:"preference-icons",label:"취향사전 아이콘",emoji:"🍰",groups:[
      {id:"food-icons",label:"음식 아이콘",emoji:"🍽️"},{id:"drink-icons",label:"음료 아이콘",emoji:"🥤"},{id:"hobby-icons",label:"취미 아이콘",emoji:"🎲"},{id:"fashion-icons",label:"패션 아이콘",emoji:"👗"},{id:"object-icons",label:"소지품 아이콘",emoji:"🎁"}
    ]},
    {id:"ui",label:"UI·기타",emoji:"🧩",groups:[
      {id:"ui-icons",label:"UI 아이콘류",emoji:"🔘"},{id:"missing-sprites",label:"미등록·기본 스프라이트",emoji:"👤"},{id:"menu-ui",label:"메뉴·팝업 UI 그림",emoji:"📜"}
    ]}
  ]},
  {id:"sound",label:"사운드",emoji:"🎧",categories:[
    {id:"scene-music",label:"음악",emoji:"🎼"},{id:"interface-sfx",label:"버튼·화면 효과음",emoji:"🪵"},{id:"food-sfx",label:"먹기·마시기 효과음",emoji:"🥣"},{id:"life-sfx",label:"생활 효과음",emoji:"🫧"},{id:"ambient-sfx",label:"공간 환경음",emoji:"🌙"}
  ]},
  {id:"release",label:"출시",emoji:"🚀",categories:[{id:"play-store",label:"Google Play",emoji:"📱"},{id:"web",label:"웹사이트",emoji:"🌐"},{id:"testing",label:"테스트",emoji:"🧪"}]},
  {id:"documents",label:"문서",emoji:"📄",categories:[{id:"store-copy",label:"스토어 문구",emoji:"📝"},{id:"policy",label:"안내·정책",emoji:"📌"}]},
  {id:"email",label:"이메일",emoji:"✉️",categories:[{id:"templates",label:"붙여넣기용 이메일",emoji:"📮"}]}
];

window.SEORAP_DATA.tasks.forEach(task=>{
  if(task.section==="music"){task.section="sound";task.subsection="scene-music"}
  if(task.subsection==="ui"){
    task.group=task.id==="dv-art-ui-menu"||task.id==="dv-art-ui-store"?"menu-ui":task.id==="dv-art-ui-action"?"ui-icons":"missing-sprites";
  }
});

const buildingSymbols={
  "dv-draw-cafe":"지붕 한쪽을 가득 차지하는 커다란 커피잔과 굵은 김 두 줄을 건물 실루엣으로 사용해요. 1층의 넓은 창과 작은 테라스가 받쳐 주되, 멀리서는 커피잔이 가장 먼저 보여야 해요.",
  "dv-draw-restaurant":"지붕 위에 포크와 나이프를 교차시켜 건물 높이의 절반만큼 크게 올려요. 입구 옆에는 오늘의 요리가 보이는 둥근 진열창을 두어 식당임을 한눈에 읽게 해요.",
  "dv-draw-hospital":"건물 중앙보다 큰 십자 표식을 옥상 구조물처럼 세우고, 입구 캐노피는 양팔을 벌린 듯 넓게 만들어요. 차갑고 거대한 병원보다 작지만 믿음직한 동네 종합병원 느낌을 목표로 해요.",
  "dv-draw-theater":"붉은 커튼을 건물 정면 전체의 아치로 만들고 지붕 위에는 별 모양 조명과 작은 무대 왕관을 크게 올려요. 밤에는 정면 자체가 보석상자처럼 빛나는 실루엣이면 좋아요.",
  "dv-draw-shop":"옷걸이에 걸린 커다란 코트 한 벌이 2층 정면을 감싸도록 만들어요. 1층 쇼윈도에는 서로 다른 실루엣의 옷 세 벌만 크게 보여 줘요.",
  "dv-draw-office":"서류철 세 권을 세워 놓은 모양으로 건물의 층을 만들고, 꼭대기에는 거대한 만년필 촉을 간판처럼 세워요. 딱딱한 고층 빌딩보다 바쁘고 아기자기한 사무실로 보여야 해요.",
  "dv-draw-school":"펼친 책 두 장이 지붕이 되고 그 위에 큰 종 하나가 매달린 형태예요. 중앙 현관과 양쪽 교실 창을 대칭으로 두되 종과 책 지붕이 가장 강한 인상이 되게 해요.",
  "dv-draw-park":"거대한 나무 한 그루의 수관이 화면 절반을 차지하고, 아래에 분수와 벤치 두 개가 작은 마을처럼 모여 있어요. 건물 대신 나무가 랜드마크가 되는 그림이에요.",
  "dv-draw-library":"펼친 책이 지붕을 통째로 덮고 책갈피 리본이 입구까지 길게 내려오게 해요. 정면 창문은 책등처럼 세로로 나눠 작은 크기에서도 도서관으로 읽히게 해요.",
  "dv-draw-mall":"서로 다른 상점 상자 네 개를 쌓은 건물 위에 거대한 쇼핑백 손잡이가 아치처럼 걸쳐져요. 복잡한 간판 대신 네 가지 색 덩어리와 큰 손잡이로 쇼핑몰을 표현해요.",
  "dv-draw-lodging":"폭신한 침대 모양 지붕과 베개 같은 두 개의 돌출창을 만들고, 꼭대기에 초승달을 크게 걸어요. 밤에 쉬어 가는 곳이라는 느낌이 실루엣만으로 보여야 해요.",
  "dv-draw-public-office":"큰 도장 손잡이 모양의 중앙 돔과 넓은 계단을 사용해요. 위엄은 있지만 무섭지 않게, 둥근 기둥과 마을 문장 하나를 크게 배치해요.",
  "dv-draw-home":"붉은 지붕과 굴뚝, 큰 현관등이 중심인 가장 평범한 집이에요. 다른 특수 주택의 기준이 되므로 한눈에 집으로 읽히는 단순하고 포근한 실루엣을 유지해요.",
  "dv-draw-generic":"용도를 정하지 않은 조립식 건물이에요. 큰 빈 간판판과 교체 가능한 둥근 장식 홈을 두어 어떤 상징물을 얹어도 자연스럽게 만들어요."
};
window.SEORAP_DATA.tasks.filter(task=>task.section==="art").forEach(task=>{
  if(task.completed&&["dv-draw-cafe","dv-draw-hospital"].includes(task.id))return;
  if(buildingSymbols[task.id])task.direction={concept:buildingSymbols[task.id],details:"작은 마을 지도에서는 창문 수보다 지붕과 정면의 거대한 상징물이 먼저 보이게 그려요. 건물 자체는 3/4 시점의 손그림 질감을 유지해요.",avoid:["글자를 읽어야만 용도를 알 수 있는 간판","상징물이 건물과 따로 떠 보이는 구성","지나치게 사실적인 사진 질감"]};
  else if(task.subsection==="preference-icons")task.direction={concept:`${task.summary} 대상의 가장 재미있는 특징을 실제보다 조금 크게 과장해 한눈에 읽히는 아이콘으로 그려요.`,details:"주인공 물건 한두 개만 남기고, 작은 크기에서도 표정처럼 기억되는 굵은 모양을 만들어 주세요.",avoid:["주변 장식이 주인공보다 많아지는 구성","아이콘 뒤 흰 원·네모 배경","글자와 상표"]};
  else if(task.subsection==="building-interior")task.direction={concept:`${task.summary} 방 전체를 설명하려 하지 말고 그 장소를 대표하는 가구나 설비 하나를 크게 과장해 중심에 놓아요.`,details:"16:9 화면에서 캐릭터가 설 자리는 비워 두고, 전경 소품과 조명을 이용해 아늑한 깊이감을 만들어요.",avoid:["모든 벽과 가구를 같은 크기로 빽빽하게 채우기","인물 자리를 막는 중앙 소품"]};
});

window.SEORAP_DATA.tasks.push(
  ...[
    ["cozy","소박한 작은 집","낮은 박공지붕과 굴뚝, 커다란 현관등이 중심인 한두 명용 집. 지붕보다 큰 찻주전자 화분 같은 생활 소품 하나를 과장해요."],
    ["family","일반 가족 주택","서로 다른 크기의 창 세 개와 넓은 현관이 있는 2층 집. 가족 신발과 우편함을 크게 보여 생활감이 느껴지게 해요."],
    ["luxury","럭셔리 저택","양쪽 날개가 펼쳐진 대칭 저택에 거대한 보석 모양 천창과 분수 계단을 붙여요. 금색은 장식선에만 쓰고 밝은 석재와 짙은 지붕으로 고급스럽게 보여요."],
    ["classic-mansion","고전 대저택","높은 지붕과 탑, 장미 덩굴이 감싼 대문을 사용해요. 창문 하나는 다른 창보다 훨씬 크게 만들어 오래된 저택의 얼굴처럼 보여요."],
    ["penthouse","현대 펜트하우스","유리 상자 두 개를 비껴 쌓고 옥상 수영장이 건물 밖으로 살짝 돌출되게 해요. 날카롭기보다 둥근 모서리와 큰 곡선 테라스로 표현해요."],
    ["traditional","전통 저택","넓은 처마와 중정으로 이어지는 ㄷ자 실루엣이에요. 커다란 문패 대신 달 모양 중정 연못을 중심 상징으로 보여요."],
    ["villa","휴양 별장","비대칭 경사지붕과 통유리 거실, 큰 해먹이 한 덩어리로 읽히는 집이에요. 바다·숲 어디에도 놓을 수 있게 자연 소재를 강조해요."]
  ].map(([id,title,summary])=>({id:`dv-art-home-${id}`,project:"서랍마을",section:"art",subsection:"home-exterior",title:`${title} 그리기`,summary,checkLabel:"그렸어요",direction:{concept:summary,details:"3/4 시점에서 집의 계급과 생활 방식이 지붕선과 한 가지 과장된 상징물만으로 구분되게 그려요.",avoid:["창문과 장식을 무작정 늘려 고급스러움을 표현하기","사진처럼 딱딱한 원근과 재질"]}})),
  ...[
    ["nav-icons","굵직한 메뉴 아이콘 세트 그리기","집·캐릭터·관계·마을·상점·설정을 각각 하나의 굵은 흰색 실루엣으로 만들어요."],
    ["action-icons","생활 행동 아이콘 그리기","먹기·씻기·자기·일하기·산책·선물 행동을 작은 소품 하나가 크게 움직이는 모양으로 만들어요."],
    ["status-icons","상태·감정 아이콘 그리기","기쁨·피곤·긴장·아픔·집중을 얼굴 대신 별, 구름, 땀방울 같은 상징으로 과장해요."],
    ["default-character","캐릭터 미등록 기본 스프라이트 그리기","성별과 나이를 특정하지 않는 둥근 실루엣에 작은 서랍 손잡이 브로치를 달아요."],
    ["missing-photo","사진 미등록 스프라이트 그리기","빈 액자 안에서 작은 캐릭터가 고개를 내미는 모습으로, 오류 아이콘처럼 보이지 않게 해요."],
    ["missing-room","방 사진 미등록 스프라이트 그리기","작은 방 모형 위에 붓과 페인트통이 놓인 모습으로 아직 꾸미는 중이라는 느낌을 줘요."],
    ["ui-atlas","종이·나무 UI 아틀라스 그리기","참고 이미지처럼 팝업, 버튼, 탭, 게이지, 슬롯, 말풍선을 한 장의 부품 시트로 그려요. 종이는 크고 밝게, 나무는 가장자리와 손잡이에만 써서 글자가 편하게 올라가게 해요."],
    ["popup","캐릭터 질문 팝업 프레임 그리기","캐릭터 얼굴이 왼쪽 위에서 종이창을 살짝 들여다보고, 질문과 선택지 세 개가 아래로 이어지는 말풍선형 팝업이에요."],
    ["menu-panels","메인 메뉴·서브메뉴 프레임 그리기","굵직한 메뉴는 문짝처럼, 세부 메뉴는 얇은 종이 탭처럼 구분해요. 선택된 탭만 작은 서랍 손잡이가 튀어나오게 해요."],
    ["log-card","현재 장면·생활로그 카드 그리기","현재 장면은 큰 펼친 종이, 생활로그는 시간표가 적힌 긴 메모지로 구분하고 끝부분을 살짝 말아 올려요."]
  ].map(([id,title,summary],index)=>({id:`dv-art-ui-v5-${id}`,project:"서랍마을",section:"art",subsection:"ui",group:index<3?"ui-icons":index<6?"missing-sprites":"menu-ui",title,summary,checkLabel:"그렸어요",direction:{concept:summary,details:"실제 화면 글자와 캐릭터 그림이 올라갈 빈 공간을 넉넉히 두고, 장식은 바깥 테두리 쪽에서만 크게 보여 주세요.",avoid:["글자 영역을 덮는 질감과 장식","모든 부품의 테두리 굵기가 제각각인 구성"]}})),
  ...[
    ["soft-alert","부드러운 캐릭터 질문 알림","나무 조각을 손끝으로 한 번 건드린 뒤 얇은 종이가 살짝 펴지는 0.6초 소리."],
    ["toggle","토글 전환","작은 목재 걸쇠가 홈을 넘는 둔한 두 박자. 금속성 클릭은 빼요."],
    ["warning","삭제·경고 확인","낮은 나무 울림 한 번과 종이 떨림 한 번. 놀라게 하는 경고음은 금지."],
    ["rice","밥 먹기","숟가락이 그릇에 가볍게 닿고 부드러운 한입이 이어지는 가까운 소리."],
    ["grilled","구이 먹기","촉촉한 고기를 자르는 소리와 짧은 씹기. 입소리보다 식감이 앞에 오게 녹음."],
    ["fruit","과일 먹기","단단한 과일 한입과 수분감 있는 짧은 씹기 두 가지 변형."],
    ["cake","케이크 먹기","포크가 부드러운 시트를 가르고 접시에 살짝 닿는 소리."],
    ["ice","얼음 음료 마시기","컵을 기울일 때 얼음 두세 개가 부딪히고 작은 한 모금이 이어지는 소리."],
    ["pour","차·커피 따르기","주전자에서 잔으로 이어지는 가는 물줄기와 마지막 한 방울."],
    ["steps-wood","나무 바닥 발걸음","양말 또는 실내화로 걷는 낮고 부드러운 네 걸음."],
    ["steps-tile","타일 바닥 발걸음","욕실·현관용 짧은 두세 걸음. 반향은 작고 가까이."],
    ["steps-carpet","카펫 발걸음","천 마찰만 남는 거의 들리지 않는 네 걸음."],
    ["keyboard","키보드 타이핑","작은 키보드로 천천히 한 문장을 치고 멈추는 소리."],
    ["paper-writing","종이에 글쓰기","연필과 펜 두 종류로 짧게 쓰고 마지막에 점을 찍는 소리."],
    ["book","책 읽기","책을 펼치고 한 장 넘긴 뒤 손가락으로 종이를 누르는 소리."],
    ["toothbrush","양치하기","물소리를 줄이고 칫솔의 부드러운 마찰과 컵을 놓는 소리."],
    ["hairdryer","머리 말리기","고음이 세지 않은 약한 바람과 머리카락을 손으로 넘기는 소리."],
    ["clothes","옷 갈아입기","셔츠와 니트의 천 마찰, 옷걸이를 조용히 거는 소리."],
    ["chopping","재료 썰기","나무 도마 위 느린 칼질 네 번. 칼날 충돌음은 둥글게."],
    ["frying","프라이팬 조리","작은 지글거림과 나무 뒤집개가 한 번 닿는 소리."],
    ["boiling","냄비 끓이기","잔잔한 보글거림과 뚜껑을 살짝 여는 소리."],
    ["sink","세면대·수도꼭지","수도꼭지를 열고 손을 짧게 씻은 뒤 물을 잠그는 흐름."],
    ["laundry","세탁기","멀리서 작게 들리는 저속 회전과 물결. 기계 진동은 최소화."],
    ["vacuum","청소기","문 너머에서 들리는 낮은 흡입음이 천천히 좌우로 움직이는 소리."],
    ["bed","침대에 눕기","이불을 들추고 매트리스가 천천히 눌리며 천이 가라앉는 소리."],
    ["bag","가방 챙기기","지퍼를 짧게 열고 작은 물건 두 개를 넣은 뒤 닫는 소리."],
    ["keys","열쇠·현관","열쇠 두 개가 작게 닿고 잠금장치가 부드럽게 돌아가는 소리."],
    ["car","자동차 탑승","차 문을 조용히 닫고 안전벨트가 작은 소리로 잠기는 흐름."],
    ["room-tone","조용한 집 실내음","아주 낮은 공기 흐름과 먼 생활 소리만 있는 30초 무봉제 루프."],
    ["cafe-ambience","카페 환경음","멀리서 잔과 스푼이 한두 번 닿고 낮은 대화가 흐르는 45초 루프."],
    ["office-ambience","사무실 환경음","멀리서 키보드와 종이, 의자 움직임이 드문드문 들리는 45초 루프."],
    ["park-ambience","공원 환경음","부드러운 바람, 잎 흔들림, 아주 먼 발걸음이 섞인 45초 루프."],
    ["rain-window","창밖 비","유리창에 닿는 잔비와 가끔 굵은 물방울이 섞인 60초 루프."],
    ["night-ambience","밤 실내음","시계나 전자음 없이 아주 먼 바람과 집이 가라앉는 소리만 있는 루프."],
    ["morning-ambience","아침 실내음","작은 새소리와 커튼을 통과하는 바람이 아주 멀게 들리는 루프."]
  ].map(([id,title,summary],index)=>({id:`dv-sfx-v5-${id}`,project:"서랍마을",section:"sound",subsection:index<3?"interface-sfx":index<9?"food-sfx":index<28?"life-sfx":"ambient-sfx",title:`${title} 녹음하기`,summary:`ASMR 기준: ${summary} 피크를 낮추고 갑자기 튀는 고역과 큰 저음을 제거해요.`}))
);

// v7: 제작 자료는 완료 뒤에도 O 상태로 남겨 전체 진행률과 함께 확인한다.
const villageBackgrounds={
  city:[
    ["central","도심 중심가 배경","화면 중앙을 가르는 넓은 대로와 양쪽의 서로 다른 높이 건물, 멀리 보이는 거대한 시계탑 하나로 도시의 중심을 보여요."],
    ["night-neon","네온 상업지구 배경","커다란 세로 간판과 육교, 젖은 도로에 번지는 색 덩어리로 밤거리를 만들어요. 글자를 읽지 않아도 번화가로 보여야 해요."]
  ],
  coast:[
    ["promenade","해변 산책로 배경","굽은 해안선과 커다란 등대, 줄무늬 파라솔 세 개를 멀리서도 읽히는 중심 상징으로 두어요."],
    ["harbor","작은 항구 마을 배경","방파제와 높이 솟은 크레인, 색이 다른 배 세 척을 크게 묶어 생활하는 항구의 인상을 만들어요."]
  ],
  "department-store":[
    ["atrium","백화점 중앙 아트리움 배경","여러 층을 한눈에 올려다보는 시점에 거대한 샹들리에와 교차 에스컬레이터를 중심축으로 놓아요."],
    ["luxury-floor","백화점 명품·패션층 배경","둥근 쇼윈도와 크게 늘어진 리본 장식, 중앙의 조각상형 안내대를 이용해 고급 매장 층으로 보여요."]
  ],
  european:[
    ["old-square","유럽풍 구시가지 광장 배경","굽은 박공지붕과 커다란 분수, 시계가 달린 시청 건물을 삼각 구도로 묶어 오래된 광장을 만들어요."],
    ["canal","유럽풍 운하 거리 배경","화면을 가로지르는 운하와 아치형 돌다리, 창문마다 달린 큰 꽃상자를 반복해 낭만적인 거리로 보여요."]
  ],
  residential:[
    ["suburb","평범한 주택가 배경","완만하게 굽은 골목과 서로 다른 지붕의 집, 커다란 동네 나무 한 그루가 중심인 생활 주택가예요."],
    ["luxury-hill","고급 언덕 주택가 배경","층층이 높아지는 언덕길과 대문이 큰 저택, 아래로 내려다보이는 도시 불빛을 한 화면에 담아요."]
  ],
  countryside:[
    ["farm","전원 농장 마을 배경","넓은 밭의 곡선과 큰 풍차, 붉은 헛간을 과장해 작은 캐릭터가 살아가는 전원 마을로 보여요."],
    ["mountain","산골 마을 배경","산자락을 따라 층층이 놓인 집과 커다란 물레방아, 멀리 이어지는 돌계단을 중심으로 그려요."]
  ],
  fantasy:[
    ["medieval","중세 성곽 마을 배경","화면 위쪽의 거대한 성과 아래 시장 골목, 깃발이 이어진 중앙 계단으로 위아래 생활권을 연결해요."],
    ["magic","마법 상점 거리 배경","휘어진 탑과 공중에 떠 있는 큰 수정, 빛나는 문 세 개를 이용해 현실과 다른 거리임을 즉시 보여요."]
  ],
  seasonal:[
    ["rainy-night","비 오는 밤 마을 배경","검은 실루엣보다 창문 불빛과 웅덩이 반사를 크게 쓰고, 우산처럼 둥근 가로등을 반복해요."],
    ["snow-festival","눈 축제 마을 배경","눈 덮인 지붕 사이에 거대한 별 장식과 따뜻한 시장 천막을 배치해 추위보다 포근함이 먼저 보이게 해요."]
  ]
};
Object.entries(villageBackgrounds).forEach(([group,items])=>window.SEORAP_DATA.tasks.push(...items.map(([id,title,summary])=>({
  id:`dv-art-background-${group}-${id}`,project:"서랍마을",section:"art",subsection:"village-background",group,title:`${title} 그리기`,summary,
  direction:{concept:summary,details:"세로형 마을 지도에서 길과 큰 랜드마크가 먼저 읽히게 하고, 캐릭터와 건물 아이콘이 올라갈 중앙·하단 공간은 복잡한 장식 없이 남겨 주세요.",avoid:["모든 건물을 같은 크기로 반복하기","캐릭터 아이콘 뒤에서 얼굴을 가리는 강한 무늬","사진처럼 흐린 배경만 사용하기"]}
}))));

// 이전 작업판에서 이미 완료했던 13개는 개별 항목 기록이 지워진 탓에
// 전체 진행률에만 보존하고, 새 식당 일러스트는 실제 항목에 O로 표시한다.
window.SEORAP_DATA.historicalCompleted={"서랍마을":13};
window.SEORAP_DATA.completedTaskIds=["dv-draw-restaurant","dv-draw-cafe","dv-draw-hospital","dv-draw-theater","dv-draw-shop","dv-draw-office","dv-draw-school","dv-draw-park","dv-draw-library","dv-draw-lodging","dv-draw-home","dv-draw-generic"];
window.SEORAP_DATA.tasks.push({
  id:"dv-release-notification-care",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"Android 알림·사이트와 앱 메뉴 반응 개선",summary:"권한 화면 복귀 시 폭 깨짐과 캐릭터 선택 시 화면 이동을 고쳤어요. 화면과 이벤트가 서로 다른 상태를 읽던 원인을 제거해 모든 큰 메뉴와 일반 버튼이 같은 데이터로 반응하게 했고, v1.0.56(58) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-contact-settings-57",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"연락·설정·캐릭터 배치 사용성 개선",summary:"설정 선택 뒤 최상단으로 튀는 재렌더를 제거하고, 캐릭터 화면 연락함·HEX 색상 선택·위아래 배치·주간 루틴 반복 요일·방 사진 전체 보기·Android 전체 화면을 반영한 v1.0.57(59) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-layout-routine-58",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터·연락·집·일정 모바일 화면 교정",summary:"캐릭터 화면의 연락을 작은 메뉴로 분리하고, 테마 색상칩과 연락 선택 화면의 폭 깨짐, 홈 선택 원형 배경을 고쳤어요. 주간·월간 일정 분리, 집 행동 소품, 기존 방 사진 여백 교정과 손그림 식당 기본 일러스트를 v1.0.58(60)에 반영했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-crash-hotfix-59",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"Android 앱 반복 종료 긴급 수정",summary:"v1.0.58에서 처음 적용한 릴리스 코드·리소스 축소를 되돌리고, 특정 화면 설정에서 시작 중 종료될 수 있던 기본 스플래시 리소스를 보강했어요. 데이터 형식은 바꾸지 않고 v1.0.59(61) APK·AAB를 새로 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-settings-performance-60",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"설정·관찰·마을 화면 안정화와 최적화",summary:"설정 메뉴의 받고 싶은 연락 선택 시 화면이 사라지던 상태 분리 문제와 전역 메뉴 스타일 충돌을 근본 수정했어요. 설정을 분야별 메뉴로 정리하고, 월간 달력·테마 색상·집 행동 소품·마을 배율·캐릭터 선택 이동을 사이트와 앱에 함께 교정했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-android-package-61",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"최신 사이트 수정분 Android 앱 패키징",summary:"사이트에 먼저 반영된 설정·집·일정·마을 화면 수정을 Android 앱 자산에도 동기화하고, 집 행동 이모지의 큰 흰 배경을 제거한 v1.0.61(63) 내부 테스트 AAB와 직접 설치 APK를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-scene-notification-62",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"동시 장면·캐릭터 연락·집 애니메이션 개선",summary:"한 캐릭터가 서로 다른 장소의 두 장면에 동시에 등장하지 않게 하고, 연락을 보내는 캐릭터가 날짜와 발송 순서에 따라 고르게 바뀌도록 개선했어요. 집 캐릭터에는 잔잔한 둥둥 애니메이션을 넣고 행동 아이콘이 이름표와 상태표를 가리지 않게 분리했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-notification-screen-63",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"연락 종류 선택 화면 이탈 근본 수정",summary:"받고 싶은 연락을 누를 때 Android 화면이 옆으로 밀려 백지처럼 보이던 숨김 체크박스 초점 문제를 제거했어요. 연락 종류를 안정적인 선택 버튼으로 바꾸고 전체 화면을 다시 그리지 않게 했으며, 앱 버전은 설정 첫 화면에서 바로 확인할 수 있게 했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-game-hud-64",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"관찰 화면 게임 HUD와 손그림 마을 아이콘 적용",summary:"관찰 화면을 상단 캐릭터 정보, 좌우 기능 메뉴, 중앙 생활 장면, 현재 순간 카드, 하단 주요 메뉴로 다시 구성했어요. 사용자가 그린 두루마리 지도 마을 아이콘을 원화 그대로 적용하고 v1.0.64(66) Android APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-mailbox-hud-65",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"우편함 HUD·캐릭터 스와이프·지도 원화 교정",summary:"다른 화면에서 돌아왔을 때 인물 변경 목록이 저절로 열리지 않게 고치고, Android 관찰 화면을 좌우로 밀어 이전·다음 캐릭터를 선택할 수 있게 했어요. 메뉴 뒤 색상 상자를 제거하고 캐릭터 연락을 독립 우편함으로 옮겼으며, 손그림 원화에서 지도만 정확히 잘라 마을 메뉴에 적용한 v1.0.65(67) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-profile-popup-resident-scroll-66",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"프로필 선택 팝업·집 구성원 편집 안정화",summary:"관찰 화면을 러프 배치에 맞춰 다시 정리하고 상단 원형에는 프로필 사진을 표시하도록 바꿨어요. 인물 선택은 독립 팝업으로 분리하고, 현재 순간은 항상 펼쳐 두며, 우편함·마을 원화의 흰 배경을 제거하고 지도를 키웠어요. 집 구성원 선택 시 화면이 위로 튀지 않게 하고 출퇴근 구성원은 숙박 방을 ‘기타·없음’으로 지정할 수 있게 한 v1.0.66(68) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-responsive-hud-swipe-67",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"반응형 관찰 HUD·앱 캐릭터 스와이프",summary:"관찰 화면을 사용자가 그린 위치 관계에 맞춰 상단 프로필 영역, 좌우 메뉴, 현재 순간 카드와 하단 메뉴로 정돈했어요. 고정 좌표 대신 화면 비율·안전영역·작은 화면용 규칙을 사용해 기기별 겹침을 줄이고, Android 홈 관찰 화면을 좌우로 밀면 이전·다음 캐릭터가 선택되도록 한 v1.0.67(69) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-native-hud-root-rebuild-68",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"앱 홈 HUD 근본 개편·PC 화면 분리 복구",summary:"뒤로가기 입력이 관찰 화면의 프로필 버튼까지 전달되어 인물 선택 팝업이 열리던 원인을 차단했어요. Android 홈은 사용자가 그린 프로필 테두리·캐릭터 카드·취향 사전·우편함·마을 원화를 자르지 않고 쓰는 전용 HUD로 다시 구성하고, PC 사이트는 앱 HUD와 완전히 분리해 상단 메뉴와 마을 선택 기능을 복구한 v1.0.68(70) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-figma-hud-placement-69",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"피그마 좌표 기준 앱 홈 HUD 정밀 배치",summary:"제공된 412×917 피그마·SVG를 기준으로 상단 프로필, 좌우 메뉴, 현재 순간과 하단 메뉴의 위치 비율을 다시 맞췄어요. 회색 상자는 자리표시로만 사용하고 실제 화면에서는 제거했으며, 손그림 아이콘과 원형 프로필 사진이 잘리거나 별도 흰 상자에 갇히지 않도록 한 v1.0.69(71) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-selection-scene-stability-70",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"선택 항목·관계 설정·생활 소품 안정화",summary:"집 구성원과 방문 요일, 관계의 편안함, 마을 건물 편집 선택값이 사라지거나 화면을 위로 올리던 원인을 정리했어요. 관찰 장면의 음식 소품이 겹쳐 깨져 보이던 표시와 상대 이름이 자기 자신으로 반복되던 장면 문구도 고친 v1.0.70(72) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-settings-hud-stability-71",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"설정 선택 연속성·관찰 HUD 시안 반영",summary:"집 구성원·방문 요일과 마을 건물 설정을 고를 때 열린 편집창과 스크롤이 유지되도록 다시 고치고, 관계의 편안함 선택값을 사용자가 고른 그대로 보존했어요. 인물 선택창을 메뉴보다 위에 표시하고 사진의 흰 네모를 없앴으며, 제공 SVG·글꼴에 맞춘 이름·시간·현재 순간 배치와 현재 건물 외관을 적용한 v1.0.71(73) 변경이에요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-desktop-restore-aab-72",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"PC 사이트 관찰 화면 복구·AAB 생성",summary:"Android 전용 게임 HUD가 PC 사이트 관찰 화면에 함께 표시되던 렌더링 경로를 분리했어요. 사이트는 캐릭터 목록, 큰 현재 장면, 마을 지도와 오늘의 기록이 이어지는 기존 PC 구성을 복구했고, 앞선 설정·관계·HUD 수정까지 포함한 서명된 v1.0.72(74) AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-svg-hud-expand-ja-73",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"SVG 기준 관찰 HUD·현재 순간 펼치기·일본어 메뉴 교정",summary:"412×917 SVG의 실제 좌우 비대칭 여백과 카드 좌표를 다시 적용하고, 현재 순간 카드에 제목 탭과 펼치기·접기 동작을 복구했어요. 검은 외곽선처럼 보이던 인물 이름 그림자를 없애고, 일본어 메뉴를 人物·好み·予定처럼 버튼 안에 자연스럽게 들어가는 명칭으로 다듬은 v1.0.73(75) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-moment-font-header-74",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"현재 순간·선택 글꼴·상단 프로필 SVG 교정",summary:"‘지금 이 순간’을 배경 없는 흰 글씨와 검은 외곽선으로 표시하고, 접힌 카드의 말줄임·건물 외관·위치와 펼치기·접기 배치를 다듬었어요. 상단 이름·직업·시간은 사용자가 고른 글꼴을 따르게 하고, 제공받은 그리운 심심체는 선택 항목으로 추가했어요. SVG의 갈색 상단 모양과 직업 길이에 맞춰 늘어나는 영역을 반영한 v1.0.74(76) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-moment-controls-comfort-75",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"현재 순간 조작·관계 편안함·알림 설정 안정화",summary:"‘지금 이 순간’의 제목·펼치기 버튼·내용 카드 전체를 눌러 펼치고 접을 수 있게 하고, 접힌 설명은 최대 4줄까지 표시하면서 카드 빈 여백을 줄였어요. 상단 직업 배경의 틈과 프로필 침범을 고치고 알림을 독립 설정 메뉴로 분리했으며, 예전 관계 데이터가 새 편안함 선택을 덮어쓰던 원인을 제거한 v1.0.75(77) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-visits-return-ld-76",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 집 방문 일정·즉시 귀환·LD 장면 배치",summary:"일정 장소에서 캐릭터별 집을 골라 친구 집 방문을 등록하고 실제 생활 장면·귀가까지 이어지게 했어요. 선택 캐릭터 또는 전원을 다음 등록 일정 전까지 집으로 돌려보내는 즉시 귀환을 추가하고, LD 두 인물은 HUD 아래에서 선택 인물이 왼쪽 전경, 동행 인물이 오른쪽 후경에 보이도록 배치했어요. 현재 순간 제목과 내용 카드 테두리, 독립 직업 캡슐까지 교정한 v1.0.76(78) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-ui-schedule-77",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"완성 홈 UI·손그림 일정 화면·일정 저장 복구",summary:"제공 SVG와 투명 스프라이트를 기준으로 모바일 홈 HUD의 나무 상단·프로필·좌우 메뉴·하단 메뉴·현재 순간 카드를 다시 만들고 KCC 한빛체를 반영했어요. 모바일 사이트도 Android 앱과 같은 UI를 사용하도록 통일했으며, 일정 화면을 7열 주간·월간 달력으로 재구성하고 일정 추가를 막던 목적지 선택 오류와 선택 중 팝업·스크롤 이탈을 고쳤어요. 집으로 부르기는 우편함으로 옮긴 v1.0.77(79) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-assets-sheets-groups-78",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"홈 원화 라벨·일정 바텀시트·캐릭터 그룹 완성",summary:"홈 메뉴의 손그림 라벨 배경과 상단 목재 장식을 복구하고 현재 순간 펼치기·접기에 제공된 빨간 테이프를 적용했어요. 기기 글꼴 선택은 제거하고 KCC 한빛체로 UI를 통일했으며, 일정·기념일 편집을 아래에서 오르내리는 바텀시트와 월·일 선택으로 바꿨어요. 일정 종료 알림, 관계 화면의 캐릭터 그룹, 마을 사이 자동 이동 차단 설정과 영어·일본어 문구를 추가한 v1.0.78(80) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-hud-seams-character-draft-79",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"홈 라벨 틈·투명 버튼 교정과 캐릭터 프로필 러프",summary:"홈 메뉴 라벨의 이어 붙인 경계와 글자 잘림을 원화 한 장 배경 방식으로 고치고, 펼치기·접기 테이프와 일정 되돌아가기 버튼 뒤의 흰 네모를 제거했어요. 연결된 밝은 바탕만 투명화하는 원화 추출 방식을 적용해 아이콘 안쪽 색은 보존했으며, 캐릭터 화면을 프로필 용지와 색상별 설정 띠로 구성한 1차 러프로 재배치했어요. 새 문구의 영어·일본어 번역과 v1.0.79(81) APK·AAB까지 반영했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-responsive-theme-mailbox-80",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"기기 맞춤 홈 HUD·테마팩 기반·우편함 선물 안정화",summary:"상단 목재 원화는 비율을 유지한 채 화면을 채우고 홈 HUD 자체는 어떤 모바일 화면에서도 스크롤되지 않게 고쳤어요. 프로필 링의 틈을 없애고 메뉴 라벨을 양끝은 보존하고 가운데만 늘어나는 3조각 프레임으로 다시 만들어 #FFF5DD 글자가 틀 안에 안정적으로 들어가게 했어요. 현재 홈 UI 하나만 기본 테마로 남기면서 전체·캐릭터별 테마팩을 나중에 추가할 기반을 마련했고, 빈 마을 전환 화면과 물건 선호 저장을 복구했어요. 실제 선물 보내기는 우편함으로 옮기고 영어·일본어 문구와 v1.0.80(82) APK·AAB까지 반영했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-wallet-scene-export-81",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"SVG 카드지갑 캐릭터 화면·프로필 저장·공동 장면 무결성",summary:"제공 캐릭터 SVG의 종이·카드지갑·주민등록증·연필 띠와 KoPub 바탕·푸라닭 젠틀고딕을 그대로 추출해 모바일 캐릭터 화면을 다시 만들었어요. 선택됨 위 칸은 현재 캐릭터의 SD 아이콘만 표시하며, 프로필에서 생일 월·일을 따로 저장할 수 있게 했어요. Android 프로필 PNG/PDF를 기기 저장소에 직접 기록하도록 고치고, 자기 자신과 대화하거나 다른 장소의 인물을 대화 상대로 표시하는 로그 및 같은 공동 장면의 소품이 시점마다 달라지는 문제를 막은 v1.0.81(83) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-svg-photo-moment-82",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"SVG 캐릭터 화면 복구·프로필 사진 연결·현재 순간 3줄",summary:"공통 모바일 여백과 테마 스타일이 제공 SVG의 카드지갑 화면을 덮어쓰던 원인을 제거해 384×854와 412×917에서 원화 비율·배치·폰트를 복구했어요. 선택됨 칸은 SD 아이콘이 있으면 아이콘, 없으면 프로필 사진, 둘 다 없으면 기존 더미 프로필을 보여줘요. 주민등록증 사진 칸은 KCC 한빛체 안내와 함께 눌러 바로 프로필 사진을 고를 수 있게 연결했고, 현재 순간은 접었을 때 설명을 읽기 좋은 3줄로 표시하며 글자 하단이 잘리지 않게 고쳤어요. 선택 중 팝업·스크롤·페이지 위치가 유지되는지 실제 모바일 화면에서 확인하고 v1.0.82(84) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-wallet-picker-home-type-83",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 카드지갑·선택창 SVG 정밀 복원과 홈 글자 교정",summary:"카드지갑을 주민등록증보다 위에 보이게 하면서 사진 선택은 그대로 작동하도록 레이어를 바로잡고, 선택됨·내보내기·저장·삭제 버튼을 KCC 한빛체와 손그림 알약 에셋으로 통일했어요. 연필 설정 띠는 SVG의 크기·간격으로 줄이고 추가 버튼은 세로 캐릭터 선택창 안으로 옮겼으며 선택 아이콘 뒤 미색 상자를 제거했어요. 홈 상단 목재 사이의 갈색 노출을 없애고 이름·시간을 흰색 검은 외곽선과 같은 하단선으로 맞췄으며 현재 순간 제목과 본문 행간을 다듬은 v1.0.83(85) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-tablet-character-interaction-84",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"태블릿 동기화 화면 복구·캐릭터 설정 조작 안정화",summary:"태블릿 가로 화면에서 홈 메뉴 원화가 화면 너비만큼 커져 동기화 뒤에도 UI가 망가져 보이던 반응형 크기 계산을 고쳤어요. 상단 목재 장식은 비율을 유지하며 틈 없이 겹치고 직업은 흰색으로 정리했어요. 캐릭터 선택창의 선택 버튼·아이콘·목록 레이어와 세로 그라데이션을 바로잡고 모든 캐릭터를 스크롤해 고를 수 있게 했으며, 주민등록증을 푸라닭 제목과 2열 KoPub 명조 정보로 재배치했어요. 여섯 연필 메뉴의 지정 색·검은 외곽선과 터치 동작, 관계 편집창의 세로 스크롤까지 복구하고 v1.0.84(86) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-tablet-hud-hotfix-78-1",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"배포판 v1.0.78 태블릿 HUD 긴급 복구",summary:"현재 배포 중인 v1.0.78(80) 계보에서 태블릿 가로 화면의 좌우·하단 메뉴 원화와 글자판이 화면 너비를 따라 거대해지던 반응형 크기 계산을 직접 수정했어요. 휴대폰용 좌표는 유지하면서 태블릿에서만 아이콘과 라벨 최대 크기를 제한하고 동기화 데이터나 캐릭터 설정은 건드리지 않았어요. v1.0.78.1(87) 서명 AAB와 설치 확인용 APK를 만들고 같은 방어 로직을 dev에도 반영했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-wallet-expansion-85",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 주민등록증·선택 목록 확장",summary:"주민등록증에서 키·몸무게를 제거하고 긴 직업 이름을 끝까지 보여 주는 전체 너비 직업 칸으로 바꿨어요. 정보 영역을 제목에서 조금 내리고 선택됨 글자판을 아이콘 아래에 분리했으며, 내보내기·저장·삭제 버튼의 원화 비율을 유지한 채 높이를 키웠어요. 캐릭터 선택창에는 다른 캐릭터 세 명을 한 번에 표시하고 추가 인원은 스크롤로 모두 고를 수 있게 한 v1.0.85(88) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-picker-paper-86",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 선택창 확장·종이 배경 장식 교정",summary:"뒤로가기 버튼을 원화 비율 그대로 줄여 위로 옮기고, 현재 캐릭터 아이콘·선택됨 글자판·선택 팝업도 함께 위쪽으로 정리했어요. 선택됨 글자판은 아이콘 바로 아래에 여백 없이 붙이고, 캐릭터 수에 따라 다른 인물을 최대 여섯 명까지 한 번에 보여 주도록 팝업 높이를 자동 확장했어요. 위치 바꾸기와 추가 조작을 다시 선명하게 표시하고 팝업이 연필 위에서 불투명하게 가리도록 레이어 구조를 고쳤으며, 모자이크 종이는 찌그러뜨리지 않고 기울어진 배경 장식으로 사용한 v1.0.86(89) APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-android-asset-package-hotfix-87",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"Android 시작 화면·전체 자산 패키징 복구",summary:"v1.0.86 앱에 준비된 웹 자산 143개 중 25개만 포함되어 로고가 깨지고 시작 화면에서 멈추던 패키징 오류를 복구했어요. Android 빌드는 이제 중간 복사본 대신 준비가 끝난 www 자산 143개를 외부 빌드 폴더에 직접 옮기며, 원본과 개수가 하나라도 다르면 빌드가 실패하도록 검사를 추가했어요. APK 내부의 필수 실행 모듈·로고·UI 원화·폰트를 확인하고 v1.0.87(90) AAB와 APK를 다시 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-game-date-schedule-companion-91-92",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"게임 날짜·일정 우선·관계 동행 반영",summary:"v1.0.78.1(87) 배포 계보와 최신 개발본에 게임 날짜 표시를 추가했어요. 등록된 일정 시간에는 해당 일정을 최우선으로 사용하고, 동행자가 없는 일정 중 임의 대화가 끼어들지 않도록 생활 로그를 교정했어요. 관계별 ‘함께 다니기’는 두 캐릭터 모두 별도 일정이 없을 때만 같은 장소와 공동 행동을 만들도록 구현했어요. v1.0.78.2(91) 핫픽스와 v1.0.88(92) 최신 개발판 APK·AAB를 각각 만들고 전체 자산 포함 여부를 검증했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-forward-schema-cloud-recovery-93-94",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"Google Play 업데이트 뒤 캐릭터 불러오기 복구",summary:"v1.0.78.2(91)가 최신 개발판의 저장 형식을 읽을 때 클라우드 캐릭터를 빈 새 게임으로 잘못 바꾸던 원인을 수정했어요. 핫픽스는 이후 버전의 캐릭터·집·마을 데이터를 보존해 읽고, 불러오기 전 데이터와 마지막 정상 캐릭터 상태를 별도 복구본으로 유지해 빈 상태보다 우선 복원해요. v1.0.78.3(93) Google Play용 AAB·확인 APK와 동일 방어가 적용된 v1.0.89(94) 최신 개발판을 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-group-layout-95-96",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"모바일 캐릭터 그룹·관계 화면 레이아웃 복구",summary:"좁은 휴대폰 화면에서 캐릭터 그룹 이름이 한 글자 폭으로 찌그러지고 편집·삭제 버튼이 내용을 밀어내던 구조를 고쳤어요. 그룹 아이콘·이름·동작 영역을 분리하고 버튼을 아래 행에 배치했으며, 그룹 목록과 관계 편집 화면에 중복 적용된 화면 높이를 제거해 중간의 큰 빈 공간 없이 바로 이어지도록 했어요. v1.0.78.4(95) 핫픽스와 동일 수정이 적용된 v1.0.90(96) 최신 개발판 APK·AAB를 만들고 모바일 회귀검사와 전체 앱 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-relationship-scroll-97-98",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 그룹 아래 관계 설정 스크롤 복구",summary:"현재 관계 화면과 맞지 않는 과거 룰렛형 관계 화면 CSS가 여러 번 중복되어 전체 높이와 스크롤을 덮어쓰던 원인을 제거했어요. 캐릭터 그룹 목록 뒤의 관계 설정 영역은 페이지 내용만큼 자연스럽게 이어지고, 휴대폰에서는 화면 전체를 하나의 세로 스크롤 영역으로 사용해 맨 아래 관계 설정 버튼까지 누를 수 있어요. 관계 편집 팝업도 별도 스크롤을 유지하며, v1.0.78.5(97) 핫픽스와 동일 수정이 적용된 v1.0.91(98) 최신 개발판 APK·AAB를 만들고 회귀검사와 Android 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-empty-custom-town-hud-99-100",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"주민 없는 사용자 마을 홈 화면 복구",summary:"새로 만든 마을에 사는 캐릭터가 없을 때 빈 상태 화면만 구형 HUD 규칙을 사용해 홈 메뉴 원화가 화면 전체로 커지고 흰 띠가 생기던 원인을 고쳤어요. 빈 마을도 정상 홈과 같은 HUD v4 좌표계·테마·투명 메뉴를 사용하고, 휴대폰과 태블릿 모두 화면 밖으로 넘치지 않아요. 기존 캐릭터·마을 데이터는 바꾸지 않아 업데이트 뒤 앱을 다시 열면 초기화 없이 정상 화면으로 복구돼요. 새 버전 업데이트 소식을 보내던 알림 UI·예약·열기 경로도 제거했으며, v1.0.78.6(99) 핫픽스와 동일 수정이 적용된 v1.0.92(100) 최신 개발판 APK·AAB를 만들었어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-adjustable-ld-stage-104-105",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"홈 LD 고정 영역·캐릭터별 위치 조정",summary:"홈 HUD의 좁은 자동 레이아웃이 LD를 작고 높은 위치에 띄우던 원인을 고쳤어요. LD는 상단바 아래부터 화면 최하단까지의 고정 영역 안에서만 렌더링되고, 캐릭터 설정에서 회색 미리보기 영역을 직접 끌거나 크기 손잡이·화면 채우기 버튼으로 캐릭터별 위치와 크기를 저장할 수 있어요. 2인 장면은 1인 장면과 같은 Y 위치·크기를 유지하고 X 위치만 좌우로 나뉘며 기존 둥둥 애니메이션과 행동 소품은 보존했어요. v1.0.78.7(104) 핫픽스 APK·AAB와 동일 수정이 적용된 v1.0.96(105) 개발 브랜치를 만들고 412×917 화면·전체 회귀검사를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-true-ld-editor-preview-106",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"LD 편집기와 실제 홈 화면 좌표 일치",summary:"LD 위치 편집 미리보기를 기존 9:16 간이 상자에서 실제 홈과 같은 412×917 전체 화면으로 교체했어요. 상단바 아래부터 화면 최하단까지의 LD 좌표계, 전신 이미지 원본 비율, 행동 아이콘 기준점을 실제 홈 렌더링과 동일하게 맞추고, 임시 선 아이콘 대신 홈의 좌우 메뉴·하단 도크 원화와 현재 행동 아이콘을 표시해 완성 화면을 보며 배치할 수 있어요. v1.0.97(106) dev APK·AAB를 만들고 실제 홈과 편집창의 정규화 좌표를 직접 대조했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-true-ld-editor-hotfix-107",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"LD 편집기 실제 홈 좌표 핫픽스",summary:"dev에서 검증한 실제 홈 화면형 LD 위치 편집기를 현재 배포 계열 main에도 옮겼어요. 412×917 전체 홈 프레임과 상단바 아래부터 최하단까지의 동일 좌표계를 사용하고, 홈 메뉴·하단 도크·현재 행동 아이콘까지 실제 자산으로 표시해 편집 결과를 그대로 확인할 수 있어요. v1.0.78.8(107) 핫픽스 APK·Play Console용 AAB를 만들고 전체 회귀검사·서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-svg-fidelity-108",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"새 SVG 기준 캐릭터 허브 완전 재배치",summary:"캐릭터 화면을 새 412×917 SVG와 직접 대조해 체크 종이·지갑·주민등록증·기능 버튼·붉은 천·펼친 책·테이프·선호 물품 3자리·클립·열쇠의 위치와 크기, 회전값을 같은 좌표계로 옮겼어요. 실제 캐릭터 정보와 선호 물품, 빠른 설정 팝업과 전체 설정 이동은 유지하고 한국어·영어·일본어를 함께 반영했어요. v1.0.98(108) dev APK·AAB를 만들고 브라우저 412×917 시각 대조·전체 회귀검사·Android 빌드·서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-refine-rain-109",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 허브 세부 고증·홈 비 효과 개선",summary:"캐릭터 허브의 주민등록증 카드와 문구를 SVG 좌표에 다시 맞추고, 빠른 설정을 흰색 수첩으로 교체했어요. 기능 버튼과 선택됨 버튼의 에셋·색을 통일하고 캐릭터 선택창에 새 캐릭터 ＋칸, 5글자 줄바꿈 이름을 적용했어요. 홈 이름·날짜·시간 정렬과 날짜 외곽선을 다듬고 음식점 생활 문구를 자연스럽게 고쳤으며, 굵은 대각선 띠처럼 보이던 비 효과는 길이와 속도가 다른 가는 빗방울 두 겹으로 교체했어요. v1.0.99(109) dev APK·AAB를 만들고 한국어·영어·일본어 문구, 412×917 브라우저 시각 확인, 전체 회귀검사, Android 빌드와 서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-layer-stability-110",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 허브 레이어·설정 연동·대화 주도권 보정",summary:"전역 배경 규칙에 가려지던 체크 종이를 독립 전체 화면 레이어로 분리하고, 주민등록증 안쪽 종이·사진·이름·나이·성별·생일·직업을 412×917 SVG 좌표에 맞췄어요. 선택됨과 기능 버튼은 조합형 에셋으로 복구하고 모든 기능 문구와 빠른·전체 설정 바로가기를 밝은 글자로 통일했어요. 빠른 설정의 성격 키워드는 전체 설정과 같은 데이터를 사용하며 선택값을 캐릭터 테마색으로 표시하고, 책 뒤 천도 현재 캐릭터 테마색을 따라가요. 공동 장면은 성격·사회성 설정을 바탕으로 먼저 말을 꺼낼 인물을 정해 내향적인 캐릭터가 부자연스럽게 대화를 시작하는 빈도를 줄였어요. v1.0.100(110) dev APK·AAB를 만들고 412×917 브라우저 확인, 전체 회귀검사 17종, Android 빌드와 APK/AAB 서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-sync-log-continuity-111",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"동기화 캐릭터 복구·생활 로그 연속성 수정",summary:"이전 버전이나 동기화 데이터의 선호·보유 항목 형식이 달라도 캐릭터 화면 전체가 오류로 바뀌지 않도록 호환 처리를 보강했어요. 동기화된 정보 불러오기는 실제 클라우드 캐릭터를 오래된 기기 삭제 기록보다 우선해 복구하고, 같은 생활 로그와 관계 기록은 두 배로 합쳐지지 않게 중복 판정을 강화했어요. 일반 저장·동기화·앱 재시작만으로 하루 생활 시간표가 다시 만들어지지 않도록 기준을 분리하고, 화면에 머무는 동안 다음 행동 시점에 맞춰 갱신하며 재실행 뒤 같은 행동의 시간이 현재 시각으로 바뀌지 않게 했어요. v1.0.101(111) dev APK·AAB를 만들고 동기화·로그 전용 검사를 포함한 전체 회귀검사 18종, 네이티브 준비, Android 빌드와 APK/AAB 서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-contrast-112",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 허브 글자 대비·테마색 충돌 수정",summary:"공통 화면 테마가 캐릭터 허브의 전용 글자색과 캐릭터별 강조색을 뒤에서 덮어쓰던 범위를 분리했어요. 프로필 내보내기·캐릭터 저장·삭제는 #FFF5DD, 빠른·전체 설정과 바로가기는 흰색으로 표시하고, 선택 팝업 이름은 흰색과 검은 외곽선을 유지해요. 주민등록증의 이름·나이·생일·성별·직업 종류 항목은 17px 말줄임 제한을 제거해 전체 글자를 보이며, 빠른 설정 성격 키워드와 책 뒤 천은 공통 팔레트가 아니라 실제 캐릭터 테마색을 사용해요. v1.0.102(112) dev APK·AAB를 만들고 412×917 실제 계산 스타일·시각 확인, 전체 회귀검사 18종, Android 빌드와 APK/AAB 서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-reference-canvas-113",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 허브 SVG 비율·테마 종이·홈 그림자 보정",summary:"캐릭터 허브의 카드지갑·주민등록증·사진·정보 글자·책 장식을 412×917 전용 좌표 폭 안에서 함께 계산하도록 바꿔, 화면이 원본보다 넓은 기기에서도 사진만 커지거나 글자가 사진 쪽으로 붙지 않게 했어요. 새 흰 종이 원화를 투명 에셋으로 추출해 캐릭터 테마색이 탁해지지 않고 검은 외곽선과 함께 선명하게 보이도록 했고, 선택 팝업 이름은 이중 외곽선을 없애 한 겹의 검은 테두리와 흰 글씨로 정리했어요. 홈 날짜·시간은 같은 오른쪽 기준선과 각각의 검은 외곽선을 유지하며 날짜를 12px로 표시하고, 캐릭터 아래에 따로 떠 있던 배경 그림자만 제거했어요. v1.0.103(113) dev에 반영하고 412×917·412×883 시각 확인, 캐릭터·홈·성능·Android 에셋 회귀검사와 네이티브 파일 준비를 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-svg-layer-114",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"주민등록증 투명 구멍·버튼 최상위 레이어 수정",summary:"주민등록증의 흰 안쪽 종이를 실제 투명 이미지 레이어로 분리하고 사진을 그 아래에 배치해, 원본 SVG의 사진 구멍 크기·각도·위치를 그대로 따르도록 고쳤어요. 프로필 내보내기·캐릭터 저장·캐릭터 삭제는 책과 테마색 천의 바깥 독립 레이어로 옮겨 어떤 장식에도 가려지지 않고 항상 가장 앞에서 눌리게 했어요. 영어 주민등록증 제목과 영어 작업 버튼은 한 줄 안에서 잘리지 않도록 언어별 폭과 글자 크기를 조정했고, 홈 날짜는 시간보다 확실히 작은 10px로 표시해 같은 오른쪽 기준선에 정렬했어요. v1.0.104(114) dev APK·AAB를 만들고 412×917·412×883 시각·터치 레이어 확인, 캐릭터·홈·성능·Android 에셋·로그 회귀검사와 APK/AAB 서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-popup-notification-voice-115",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 팝업 계층·알림 말투 전체 적용",summary:"캐릭터 선택 팝업을 열면 프로필 내보내기·저장·삭제보다 높은 전용 계층에서 표시하고, 닫힐 때까지 뒤쪽 관리 버튼의 터치를 막아 팝업을 뚫고 눌리지 않게 했어요. 팝업 이름은 검은 외곽선을 없애고 흰색 글자와 아래로 번지는 검은 그림자만 사용해요. 캐릭터 연락 알림은 접두사만 붙이던 방식에서 제목과 본문 종결형을 함께 바꾸는 방식으로 확장해, 마왕·군주·신탁·반말·격식체 등을 포함한 모든 직접 선택 말투가 한국어·영어·일본어에서 실제로 적용돼요. 생활로그는 관찰 기록이므로 기존처럼 캐릭터 말투를 넣지 않아요. v1.0.105(115) dev APK·AAB를 만들고 412×917 실제 터치 판정, 전체 회귀검사 18종, Android 빌드와 APK/AAB 서명 검증을 완료했어요. 같은 최신 결과물을 사이트 배포 기준 브랜치인 main에도 병합했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-room-layout-edit-menu-116",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 방 크기 누적 증가·편집 메뉴 대비 수정",summary:"집 편집 격자의 최소 방 높이와 저장 상태 복원의 최소 높이가 서로 달라 앱을 다시 열 때 방이 커지던 원인을 하나의 12×16 격자 규칙으로 통합했어요. 저장할 때 테두리와 여백이 섞인 화면 픽셀을 다시 비율로 계산하지 않고 실제 저장 좌표를 사용해 재실행을 반복해도 방 위치와 크기가 그대로 유지돼요. 집 편집 메뉴는 검은 배경과 번진 검은 그림자를 제거하고 반투명 종이색 배경·또렷한 글자·가벼운 테두리로 정리했어요. v1.0.106(116) dev APK·AAB를 만들고 384×853 실제 화면에서 편집 전후와 새로고침 뒤 방 좌표가 같은지 확인했으며 전체 회귀검사 18종, Android 빌드와 APK/AAB 서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-furniture-placement-117",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 가구 직접 배치·편집 기능 추가",summary:"방 편집에서 방 종류별 가구를 여러 개 추가하고 실제 방 화면 안에서 직접 배치할 수 있게 했어요. 가구를 끌어 위치를 정하고 하단 도구로 크기·15도 회전·앞뒤 순서·삭제를 조절하며, 좌표와 모양은 기기 저장·동기화·앱 재실행 뒤에도 유지돼요. 가구는 캐릭터와 반려생물보다 아래 레이어에 놓이고 정적인 요소로 렌더링해 기존 둥둥 애니메이션과 발열 최적화를 보존했어요. 전체 가구 이름과 편집 문구를 한국어·영어·일본어에 반영하고 v1.0.107(117) dev APK·AAB를 만들었어요. 384×853 화면에서 추가·크기·회전·재실행 저장을 확인하고 전체 회귀검사 18종, Android 빌드와 APK/AAB 서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-life-simulation-118",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 방 이동·가구 사용 생활 시뮬레이션 추가",summary:"집에 있는 캐릭터가 방마다 놓인 가구를 고르고 실제 배치 좌표까지 걸어간 뒤 쉬기·씻기·요리·공부·창작 등 가구 종류에 맞는 행동을 하게 했어요. 한 가구는 한 명만 사용하도록 자리를 선점하며, 남은 캐릭터는 다른 가구를 고르거나 기다려 겹쳐 쓰지 않아요. 진행 상태는 저장·동기화 데이터에 포함되고 화면을 닫았을 때는 고빈도 계산을 멈춰 기존 둥둥 애니메이션과 발열 최적화를 유지해요. 행동 문구를 한국어·영어·일본어에 적용하고 v1.0.108(118) dev APK·AAB를 만들었어요. 384×853 화면에서 거실 소파와 서재 컴퓨터 사이의 방 이동·가구 도착·사용 전환을 직접 확인했으며 전체 회귀검사 19종, 신규 시뮬레이션 검사 24개, Android 빌드와 APK/AAB 서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-log-immutable-hotfix-119",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"저장된 생활 로그 교체 오류 핫픽스",summary:"동기화 불러오기나 집 배치·캐릭터 설정 변경을 할 때 현재 시각 이전의 생활 로그까지 다시 생성되어 행동과 시간이 바뀌던 원인을 수정했어요. 이미 기록된 오늘의 로그는 원문과 시각을 그대로 보존하고, 바뀐 설정은 아직 기록되지 않은 미래 장면부터만 적용돼요. 같은 동기화 데이터를 반복해 불러와도 로그가 복제되지 않는 기존 병합 규칙도 함께 검증했어요. 현재 배포판 v1.0.106(116)을 기준으로 main에서 v1.0.106.1(119) 핫픽스 APK·AAB를 만들고 dev에도 같은 수정을 반영했으며 전체 회귀검사 19종과 Android 빌드·서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-grid-furniture-120",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"12×16 격자 가구 꾸미기·선반 소품 추가",summary:"집 편집의 기존 12×16 방 격자를 가구에도 연결해, 가구를 끌면 방 안의 실제 칸 중심에 맞춰 배치되도록 했어요. 선반·책상·테이블·수납장처럼 물건을 올릴 수 있는 가구에는 책·화분·향수·액자·컵·인형·수집품·조명을 최대 4개까지 붙일 수 있고, 소품은 부모 가구와 함께 이동·회전·크기 변경돼요. 나중에 사용자가 그린 가구 이미지로 교체해도 저장 ID와 배치 데이터는 유지되는 구조예요. 한국어·영어·일본어 소품 이름과 팝업 문구를 적용하고 v1.0.109(120) dev APK·AAB를 만들었어요. 384×854 실제 화면에서 그리드·가구 추가·소품 팝업·화분 저장을 조작 확인하고 전체 회귀검사 19종, Android 490개 작업 빌드와 서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-sync-couple-bed-121",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 생활 동기화·커플 침대·독립 가구 배치",summary:"집 화면이 별도의 짧은 행동을 만들지 않고 기존 생활 시뮬레이션의 현재 장면과 로그를 그대로 따라가도록 통합했어요. TV는 30~90분, 샤워는 10~20분처럼 가구별 생활 시간을 현실적인 범위로 유지하고, 일반 침대는 1명·커플 침대는 최대 2명까지 캐릭터를 지정해 함께 사용할 수 있어요. 가구 배치는 방 설정과 분리된 전용 창으로 옮겼고, 집 안 캐릭터는 아이콘·애니메이션·이모지·이름만 보이며 누르면 화면을 가리지 않는 하단 상태·최근 로그 창이 열려요. 새 문구를 한국어·영어·일본어에 적용하고 v1.0.110(121) dev APK·AAB를 만들었어요. 384×854 실제 화면에서 커플 침대 추가·지정·상태 로그를 조작 확인하고 전체 회귀검사 19종과 Android 빌드·서명 검증을 완료했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-hud-122",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 화면 손그림 HUD 전면 개편",summary:"제공한 412×917 집 UI SVG를 기준으로 상단 나무 바·뒤로가기·현재 캐릭터·집 정보·집 이동·우측 기능 메뉴·UI 숨김을 같은 위치 관계로 다시 만들었어요. 상단 78px 아래부터 화면 최하단까지를 실제 집과 방이 표시되는 영역으로 고정해 메뉴가 집을 밀어내지 않으며, 집 이동과 모든 메뉴 버튼은 기존 양끝 캡·가운데 조각 에셋을 조합해 선명하게 표시돼요. 집 이동 팝업, 집 정보, 편집·완료, 구성원, 반려생물, UI 숨김·복원과 기존 가구·방 편집 기능을 연결하고 영어·일본어 장문 버튼 폭도 보정했어요. v1.0.111(122) dev APK·AAB를 만들고 384×854 화면에서 y=78 집 영역과 전체 버튼을 실제 클릭 확인했으며 전체 회귀검사 19종과 Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-hud-cards-123",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 HUD 정밀 교정·구성원 생활 카드 복구",summary:"상단 장식과 나무 바를 자연스럽게 겹쳐 흰 틈과 눌림을 없애고, 뒤로가기를 최상단에 둔 채 캐릭터 이름 대신 집 아이콘과 실제 집 이름을 표시했어요. 집 이름·집 정보·방 이름은 흰색, 집 이동·편집·구성원·반려생물·UI 숨김은 #FFF5DD로 고정하고 공통 테마가 전용 색과 투명 배경을 덮던 근본 선택자를 정리했어요. 집 편집 세부 도구는 우측 기본 메뉴에서 분리된 하단 도구막대로 옮겼으며, 구성원은 이름과 현재 행동을 담은 네모 카드로 복구했어요. 같은 상호작용에 참여한 두 캐릭터는 한 카드에 이름을 함께 표시하고 뽀뽀·포옹·대화·식사·놀이별 애니메이션을 재생해요. 한국어·영어·일본어를 적용한 v1.0.112(123) dev APK·AAB를 만들고 384×854 모바일 시각 검수, 전체 회귀검사 19종, Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-furniture-size-124",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 버튼 캡 교정·커플 침대 2×2",summary:"집 이름과 집 정보를 같은 하단선에 고정하고, 전역 버튼 최소 높이가 조합형 캡을 세로로 늘려 좌우와 글자를 자르던 충돌을 해결했어요. 집 이동·편집 완료·구성원·반려생물·UI 숨김과 하단 편집 메뉴는 원래 비율을 유지하며, 편집 완료 뒤의 갈색 네모도 제거했어요. 집 설정·방 구성·가구 배치·거주 설정 글자는 #FFF5DD로 통일했어요. 커플 침대는 기존 배치와 새 배치 모두 2×2 칸을 차지하며, 두 캐릭터가 함께 사용할 때 서로 다른 침대 칸에 표시되어 겹치지 않아요. v1.0.113(124) dev APK·AAB를 만들고 384×854 모바일 시각 검수, 전체 회귀검사 19종, 집 UI·생활 검사 45개, Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-elevator-motion-125",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 층 이동·저발열 생활 이동 애니메이션",summary:"집 이름을 누르면 집 이동 메뉴가 열리고, 기존 집 이동 자리에는 현재 층수가 표시되도록 바꿨어요. 우측에는 엘리베이터형 위·아래 층 이동 버튼을 추가했으며 UI를 숨겨도 상단 바는 유지돼요. 집 이름 옆에는 실제 집 외형 아이콘을 표시하고 집 정보 글자를 줄였어요. 편집 완료·UI 숨김 버튼과 방 이름·층/격자 안내의 공통 테마 충돌을 해결해 글자와 버튼이 잘리거나 어둡게 보이지 않아요. 캐릭터와 반려생물은 좌표를 순간 변경하지 않고 GPU transform 기반으로 부드럽게 이동하며, 대화 중에는 말풍선 효과가 나타나요. 한국어·영어·일본어를 적용한 v1.0.114(125) dev APK·AAB를 만들고 384×854 실제 화면에서 버튼 폭·색상·층 이동·UI 숨김을 조작 검수했으며 전체 회귀검사 19종, 집 UI·생활 검사 54개, Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-lively-motion-126",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 SVG 재배치·방 사이 생활감 개선",summary:"수정한 집 UI SVG의 412×917 좌표를 기준으로 상단바와 78px 집 장면 경계, 뒤로가기, 집 외형 아이콘, 집 이름, 우측 집 정보·편집·구성원·반려생물 메뉴, UI 숨김 버튼을 다시 맞췄어요. 공통 테마가 집 제목에 흰 배경과 갈색 글자를 덮던 원인을 분리해 제목을 배경 없는 흰 글자·검은 외곽선으로 고정했어요. 화면을 두 번 탭하면 상단바를 남긴 채 UI를 숨기고, 방을 길게 누르면 바로 방 편집을 열어요. 캐릭터는 방 경계에서 잘리지 않은 채 방 사이를 걸으며 상단바와 메뉴 아래로 지나가고, 대화 중인 두 캐릭터는 좌우 위치와 하단 이름표가 안정적으로 유지되며 각 아이콘을 눌러 각자의 로그를 볼 수 있어요. 반려생물은 발걸음이 느껴지는 단계형 움직임과 여러 작은 행동을 사용하되 잠든 동안에는 완전히 멈춰요. 캐릭터 정보창은 작고 반투명하게 줄이고, 시청·휴식·씻기·요리·집중·음악·운동·놀이·수면별 애니메이션을 추가했어요. 새 상태 문구를 한국어·영어·일본어에 맞추고 v1.0.115(126) dev APK·AAB를 만들었어요. 384×854 실제 화면에서 제목 투명 배경, 버튼 위치, 두 번 탭 UI 숨김·복원, 정보창을 확인했으며 전체 회귀검사 19종, 집 UI·생활 검사 57개, 생활 시뮬레이션 검사 30개, Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-tv-jog-motion-127",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"함께 TV 보기·조깅 이동·집 상단바 정리",summary:"같은 TV를 사용하는 캐릭터 둘을 한 장면에 배치하고 웃음·분노·울음 반응과 TV 시청 동작을 추가했어요. 아침 조깅을 마치고 돌아오는 캐릭터는 집에 도착한 것처럼 멈추지 않고 마을 화면에서 집 방향으로 달리는 이동자와 이동 아이콘으로 표시돼요. 집 상단바가 화면 오른쪽 끝까지 빈틈없이 이어지도록 폭을 고치고, 집 이름은 20px로 키웠으며 우측 집 정보는 12px 흰 글자·검은 외곽선으로 줄여 같은 하단선에 정렬했어요. UI를 숨긴 뒤 나타나는 UI 표시 버튼에서는 갈색 조합형 배경을 제거했어요. 한국어·영어·일본어 상태 문구를 적용하고 v1.0.116(127) dev APK·AAB를 만들었어요. 384×854 실제 화면에서 상단바 폭, 글자 크기·색상·정렬, UI 숨김 상태를 확인했으며 전체 회귀검사 20종과 Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-hud-tv-jog-nail-128",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 SVG 메뉴 복원·조깅/TV/손톱 장면 교정",summary:"집 정보는 수정 SVG와 동일하게 우측 조합형 메뉴의 첫 버튼으로 되돌리고, 상단의 일반 주거·층수는 갈색 공통 스타일에 덮이지 않는 작은 흰 글자·검은 외곽선·우측 정렬로 고정했어요. UI 숨김 뒤 UI 표시 버튼은 좌·중·우 조합형 에셋을 다시 표시하면서 버튼 뒤의 별도 갈색 네모만 제거했어요. 아침 조깅 복귀는 관찰 화면에서도 실제 이동 애니메이션과 이동 배지를 보이고 마을에서는 더 분명한 이동 경로를 사용해요. 함께 TV를 볼 때 중복 TV 아이콘을 없애고 각 반응 아이콘을 캐릭터 바깥쪽으로 분산했어요. 손톱 정돈 장면은 파일 이모지 대신 💅를 사용하며, 과묵하고 마초적인 남성 성격에는 배정하지 않고 문장도 손톱줄로 명확히 고쳤어요. 새 문구를 한국어·영어·일본어로 적용하고 v1.0.117(128) dev APK·AAB를 만들었어요. 412×917 실제 화면에서 최종 글자색·정렬·버튼 에셋을 확인했으며 전체 회귀검사 20종과 Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-floor-town-social-life-129",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"방 바닥 꾸미기·마을 생활·상대 접근 애니메이션",summary:"집 화면의 방 사진을 제거하고 거실·침실·서재·주방에는 마루, 현관·욕실에는 크림 타일을 기본 적용했어요. 방마다 마루·타일·직접 그린 바닥을 바꿀 수 있으며 덧그리기용 원본 PNG도 함께 만들었어요. 아침 조깅 복귀는 집 활동이 아닌 이동 상태로 처리해 마을에서 달려온 뒤 현관에서 신발과 겉옷을 정리해요. 마을을 돌아다니거나 마주쳐 대화하는 캐릭터에 이동·말풍선·몸동작을 추가했어요. 집에서는 대화 상대를 향해 직접 걸어가고, 이동 도중 장면이 바뀌어도 현재 위치부터 이어 움직여 순간이동하지 않아요. 운동·대화는 아이콘만 흔드는 대신 캐릭터 몸 전체가 반응하며, 사람과 반려생물은 서로의 현재 위치를 피해 이동하고 우연히 가까워져도 반려생물이 사람을 가리지 않아요. 새 바닥·이동 문구의 영어·일본어를 적용하고 v1.0.118(129) dev APK·AAB를 만들었어요. 브라우저 DOM 검수, 생활 시뮬레이션 53개·집/미디어 57개 및 전체 회귀검사, Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-room-tone-pair-motion-130",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"방 색감 통일·관계 좌우·상호작용 장면 교정",summary:"집 방마다 강제로 씌워지던 반투명 검정 오버레이와 그림자를 제거해 일반·편집·선택 상태의 밝기를 모두 같게 맞췄어요. 방 테두리와 방 사이 공간은 #5C4234로 통일했으며 다크 모드에서도 색이 바뀌지 않아요. 관계 설정의 표시 순서를 공동 장면과 집 배치까지 이어 첫 인물은 왼쪽, 두 번째 인물은 오른쪽에 안정적으로 표시해요. ‘함께 시간을 보내는 중’ 같은 일반 공동 장면에도 두 캐릭터의 몸동작과 반응 애니메이션을 추가했고, 관계나 명확한 호감·갈등이 없는 낯선 사람은 같은 방에 있어도 억지로 공동 장면에 묶이지 않고 각자 행동해요. 새 UI 문구는 없어 기존 영어·일본어 번역을 그대로 유지한 v1.0.119(130) dev APK·AAB를 만들었어요. 412×917 실제 화면에서 모든 방의 테두리·그림자·필터를 확인하고 전체 회귀검사 19종, 생활 시뮬레이션 59개, Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-furniture-sprites-log-dismiss-131",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"집 가구 스프라이트·로그 닫기·대화 재진입 교정",summary:"집에 쓰이는 80종 가구를 서랍마을 손그림 계열의 투명 PNG 스프라이트로 제작해 이모지 가구를 교체했어요. 소파 3×1, 냉장고 1×2, 커플 침대 3×2처럼 물건마다 실제 점유 칸을 다르게 정하고, 큰 가구도 방 격자 밖으로 넘지 않도록 배치를 보정했어요. 작가가 그대로 덧그릴 수 있는 투명 5×4 원본 시트 4장과 자동 분리 스크립트도 함께 준비했으며 앱에는 256px 런타임 스프라이트만 포함해 가구 이미지 용량을 약 17.6MB에서 5.7MB로 줄였어요. 집 캐릭터 로그는 바깥 화면을 누르면 그 자리에서 닫히고 다른 화면으로 이동할 때도 자동으로 정리돼요. 같은 대화 장면의 식별값을 화면 재진입 사이에 유지해 집 화면을 새로 열 때마다 상대에게 다시 뛰어가는 동작이 반복되지 않아요. 가구 이름과 로그 닫기 접근성 문구의 한국어·영어·일본어를 적용한 v1.0.120(131) dev APK·AAB를 만들었어요. 384×854 모바일 화면에서 실제 PNG 로드·가구 크기·로그 닫기를 조작 검수하고 가구 91항목·생활 시뮬레이션 59개·알림 28개·Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-home-surfaces-wall-edit-hide-132",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"사용자 바닥 5종·벽면·집 편집 표시 정리",summary:"임시 손그림 가구 스프라이트와 생성 도구를 앱에서 제거하고, 작가가 새 그림을 주기 전까지 가구를 배경 없는 이모지로 표시하도록 되돌렸어요. 사용자가 그린 판재 재질 5종을 바닥 선택지로 넣고 방마다 별도의 벽 재질도 고를 수 있게 했으며, 상단 벽면과 #5C4234 경계선을 세워 내려다보는 집의 깊이가 느껴지도록 구성했어요. 기존 마루·타일 저장값은 새 재질로 자동 이관돼요. 집 편집 중에는 배치를 가리지 않도록 캐릭터와 반려생물을 숨기고, UI 숨김 시 뒤로가기 버튼도 함께 감추되 UI 표시 버튼은 반투명하게 남겨요. 바닥·벽 이름과 안내 문구를 한국어·영어·일본어로 적용한 v1.0.121(132) dev APK·AAB를 만들었어요. 384×853 실제 화면에서 5종 재질·벽면·편집 숨김을 조작 검수하고 집/미디어 57개·생활 59개·성능 10개·캐릭터 UI·Android 자산 검사와 Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-wall-log-character-ui-133",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"손그림 벽·생활 로그 안정화·캐릭터 화면 재배치",summary:"집 벽을 따뜻한 크림색 손그림 벽지와 호두나무 몰딩으로 교체하고 방마다 2px 검은 윤곽을 적용했어요. 작가가 바로 덧그릴 수 있는 벽·가구 PNG/SVG 격자 틀도 함께 준비했으며 가구는 앱에 새 그림을 적용하지 않고 기존 이모지를 유지해요. 방 크기·위치·바닥·벽 편집이 생활 시뮬레이션과 로그를 다시 만들지 않도록 분리하고, 재실행 때 방 크기가 누적 변경되지 않도록 저장 정규화를 검증했어요. 반려생물의 주로 있는 방은 임의 배치보다 우선 적용돼요. 집에서 반복되지 않는 다국어 생활 행동 21종을 추가하고 최근 행동을 피하도록 했어요. 캐릭터 화면은 제공한 SVG를 기준으로 세로 나무 배경·사선 체크 종이·주제색 천·책·메모·열쇠의 위치 관계를 다시 구성했으며 전체 설정 상단 메뉴를 고정하고 현재 항목을 강조했어요. 한국어·영어·일본어를 적용한 v1.0.122(133) dev APK·AAB를 만들고 412×917 캐릭터 화면 시각 검수, 전체 회귀검사와 Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-book-ai-exterior-cleanup-134",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 전체설정 책 UI·AI 건물 외형 정리",summary:"캐릭터 전체설정을 제공한 SVG처럼 나무 바탕 위에 큰 책과 다섯 색인(개요·신체·성격·취향·소지품)이 놓이는 독립 화면으로 전면 교체했어요. 기존 프로필·사진·색상·LD 배치·홈 배치·삭제를 포함한 모든 설정은 개요와 각 색인에 빠짐없이 유지하고 현재 색인은 아이콘과 함께 길게 펼쳐져요. 캐릭터 메인 화면의 체크무늬 띠와 이모지 노란 포스트잇 및 전용 파일을 제거했어요. AI로 만든 카페·주택·병원·도서관·숙박·사무실·공원·학교·상점·공연장·범용 건물 외형 파일과 자동 연결을 삭제하고 사용자 손그림·서랍·중세 에셋만 남겼어요. 새 탭 이름은 한국어·영어·일본어로 적용했으며 v1.0.123(134) dev APK·AAB를 만들고 412×917 화면에서 다섯 탭 이동·색상·저장 버튼을 조작 검수했어요. 캐릭터 UI 회귀검사, 성능·알림·생활 검사, Android 자산 준비와 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-user-walls-schedule-tablet-135",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"사용자 벽지 7종·일정 로그·태블릿 집 화면 안정화",summary:"기존 임시 생성 벽지를 앱과 작가용 자료에서 제거하고 사용자가 그린 크림·회백색·토프 몰딩 및 하늘·남색·호박 타일 벽지 7종만 방별 선택지로 적용했어요. 시작과 종료가 같은 일정은 24시간이 아닌 30분 일정으로 처리하고 공동 일정 로그도 현재 시각으로 복제하지 않고 원래 시작 시각을 보존해 중복을 막았어요. 수면을 포함한 현재 행동은 생활 로그와 같은 저장 장면을 사용하며 자기 자신을 걱정하거나 자기 자신에게 말하는 잘못된 관계 로그를 정리해요. 막연한 ‘반복 행동을 멈춰 달라’ 문구는 세 차례 말을 끊은 상황을 구체적으로 따지는 장면으로 교체했어요. 사전의 게임 ‘기타’ 선택지를 항상 유지하고 영화 장르에 드라마를 비롯한 세부 장르를 보강했어요. 반려생물은 transform 기반 선형 이동으로 부드럽게 움직이고 캐릭터 간 기본 간격을 넓혔으며, 태블릿 집 화면은 휴대전화와 같은 최대 480px 좌표계로 고정해 방 배치가 늘어나거나 깨지지 않아요. 벽지·편집 안내와 새 장면은 한국어·영어·일본어로 적용한 v1.0.124(135) dev APK·AAB를 만들고 전체 회귀검사, 384×854·800×1100 반응형 실화면, Android 490개 작업 빌드와 APK 내부 벽지 7종 포함을 검증했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-book-perception-147",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 설정책 SVG 고증·관계 인식 생활 시뮬레이션",summary:"캐릭터 전체설정의 첫 장·개요 2장·신체 첫 장을 412×917 SVG 좌표계로 다시 구성해 나무 바탕, 펼친 책, 목차 책갈피, 이미지·LD·아이콘 슬롯, 입력지, 잉크병, 하단 모양 책갈피와 페이지 화살표의 위치·각도·크기·쌓임 순서를 고정했어요. 현재 목차만 책 앞쪽으로 올라오고 나머지는 책 뒤에 머물며 모든 글씨와 저장 버튼은 KCC 글꼴을 사용해요. 화장대는 단장, 옷장은 옷 고르기로 의미를 분리하고, 서로 다른 방의 인물이 같은 대화에 합류하지 않도록 실제 방 위치를 재검증해요. 집 캐릭터는 상단 메뉴·하단 끝·우측 메뉴를 피하는 안전 동선을 사용하며, 마을과 집에서 신뢰·편안함·관계 친밀도와 좌우 시야 상태를 계산해 상대를 인식하고 먼저 다가갈지를 결정해요. 오른쪽 저시력처럼 방향별 시야가 낮으면 해당 방향의 인식 확률도 실제로 낮아져요. 새 설정·행동 문구의 한국어·영어·일본어를 적용한 v1.0.136(147) dev APK·AAB를 만들고 412×917 실제 브라우저 좌표·레이어·에셋 로드, 생활 시뮬레이션 67개, 일정 13개, 성능 10개, 캐릭터 UI 회귀검사와 Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-release-character-book-audio-148",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 설정책 하단 배치·구두 효과음 설정",summary:"캐릭터 전체설정 첫 장에서 크게 튀어나오던 모양 책갈피를 원본 SVG의 62×37 크기·좌표·회전값으로 되돌리고 사진·배치·LD·아이콘 안내 글자도 원본 비율에 맞춰 정돈했어요. 제공한 녹음에서 구두 발걸음 두 번이 또렷한 약 0.72초 구간만 추출해 이동 중에 재생하고 여러 캐릭터의 소리가 겹치지 않도록 하나의 공유 재생기로 연결했어요. 설정에는 효과음 전체 음소거, 0~100 효과음 크기, 구두소리 미리 듣기를 추가했어요. 시뮬레이션과 화면이 서로 다른 캐시의 상태 모듈을 읽던 충돌도 통일해 일정·생활 상태가 어긋날 가능성을 제거했어요. 새 소리 설정의 한국어·영어·일본어를 적용한 v1.0.137(148) dev APK·AAB를 만들고 412×917 실화면, 전체설정 24개·생활 67개·일정 13개·알림 28개·성능 10개 회귀검사와 Android 490개 작업 빌드를 통과했어요."
});
window.SEORAP_DATA.tasks.push({
  id:"dv-pwa-cloudflare-pages-115",project:"서랍마을",section:"release",subsection:"testing",completed:false,
  title:"PWA 최신 115 Cloudflare Pages 배포 확인",summary:"Cloudflare Pages가 main의 최신 커밋을 복제한 뒤 package.json에 build 명령이 없어 실패하며, 운영 PWA가 과거 성공본에 머물던 원인을 확인했어요. 정적 웹 파일을 dist에 안전하게 모으는 npm build와 Cloudflare Pages 출력 폴더 설정을 추가해 로컬 빌드·최신 캐시 표식·전체 회귀검사 18종을 통과했고 커밋 2cd5842를 main에 반영했어요. Cloudflare에서 새 커밋의 프로덕션 배포를 성공시킨 뒤 drawervillage.com이 최신 charactercontrast 파일을 제공하는지 최종 확인해야 해요."
});

window.SEORAP_DATA.copyTemplates=[
  {id:"bug",emoji:"🐛",title:"오류 신고",question:"버튼을 눌러도 반응하지 않거나 화면이 사라지고 흰 화면만 보여요.",replies:[{label:"한국어",code:"ko",content:`안녕하세요. 오류를 제보해주셔서 감사합니다.

확인을 위해 현재 사용 중인 앱 버전과 기기명, 문제가 생기기 직전에 누른 버튼이나 메뉴를 알려주세요. 가능하다면 같은 현상이 보이는 화면 녹화나 스크린샷도 함께 보내주시면 확인에 도움이 됩니다.

불편을 드려 죄송하며, 보내주신 내용은 확인 후 안내드리겠습니다.`}]},
  {id:"feature",emoji:"💡",title:"기능 제안",question:"같은 일정을 여러 요일에 넣거나 더 편하게 복사할 수 있으면 좋겠어요.",replies:[{label:"한국어",code:"ko",content:`안녕하세요. 기능을 제안해주셔서 감사합니다.

어떤 상황에서 해당 기능이 필요했는지 자세히 적어주셔서 큰 도움이 되었습니다. 보내주신 의견은 사용 흐름과 함께 검토하겠습니다. 반영 여부나 일정이 정해지면 업데이트 내역을 통해 안내드리겠습니다.

소중한 의견 감사합니다.`}]},
  {id:"scene",emoji:"🏠",title:"생활 장면",question:"같은 캐릭터가 집과 학교처럼 서로 다른 장소에 동시에 등장해요.",replies:[{label:"한국어",code:"ko",content:`안녕하세요. 생활 장면에서 이상한 부분을 발견해 알려주셔서 감사합니다.

확인을 위해 문제가 보인 캐릭터 이름과 두 장면의 장소, 표시된 시각을 알려주세요. 가능하다면 두 화면을 함께 확인할 수 있는 스크린샷도 부탁드립니다.

보내주신 내용은 확인 후 안내드리겠습니다.`}]},
  {id:"relationship",emoji:"🤝",title:"관계 장면",question:"두 캐릭터의 관계 설정과 맞지 않는 대화나 행동이 나와요.",replies:[{label:"한국어",code:"ko",content:`안녕하세요. 관계 장면에 관한 의견을 보내주셔서 감사합니다.

어떤 캐릭터 조합에서 어떤 관계로 설정되어 있었는지, 실제로 표시된 대화나 행동은 무엇이었는지 알려주세요. 장면 문구가 보이는 스크린샷을 함께 보내주시면 확인에 도움이 됩니다.

소중한 제보 감사합니다.`}]},
  {id:"translation",emoji:"🌐",title:"번역 문구",question:"영어 또는 일본어 화면에 번역되지 않았거나 어색한 문구가 있어요.",replies:[
    {label:"한국어",code:"ko",content:`안녕하세요. 번역 문구를 제보해주셔서 감사합니다.

어느 언어에서 어떤 화면을 보고 있었는지와 어색하거나 번역되지 않은 문구를 알려주세요. 가능하다면 해당 화면의 스크린샷도 함께 부탁드립니다.

보내주신 문구는 화면 맥락과 함께 확인하겠습니다.`},
    {label:"English",code:"en",content:`Hello, and thank you for reporting a translation issue.

Please let us know which language and screen you were using, and include the untranslated or awkward text you found. A screenshot of the screen would also be very helpful.

We will review the wording together with its in-game context.`},
    {label:"日本語",code:"ja",content:`こんにちは。翻訳についてご報告いただき、ありがとうございます。

ご利用中の言語と画面、未翻訳または不自然に感じた文章をお知らせください。可能でしたら、該当画面のスクリーンショットも添えていただけると助かります。

お送りいただいた文章は、ゲーム内の状況とあわせて確認いたします。`}
  ]},
  {id:"payment",emoji:"💳",title:"결제·상품",question:"결제했는데 상품이 지급되지 않았거나 결제 상태를 확인하고 싶어요.",replies:[{label:"한국어",code:"ko",content:`안녕하세요. 결제 과정에서 불편을 드려 죄송합니다.

중복 결제를 피하기 위해 같은 상품을 다시 결제하지 마시고, Google Play 주문번호와 결제 시각, 구매한 상품명을 보내주세요. 비밀번호나 카드번호 등 결제 수단 정보는 보내지 않으셔도 됩니다.

보내주신 내용을 확인한 뒤 안내드리겠습니다.`}]},
  {id:"sync",emoji:"☁️",title:"계정·동기화",question:"불러온 뒤 캐릭터나 사진이 달라졌거나 일부 데이터가 보이지 않아요.",replies:[{label:"한국어",code:"ko",content:`안녕하세요. 계정·동기화 문제를 알려주셔서 감사합니다.

현재 앱 버전과 사용 기기, 마지막으로 데이터가 정상적으로 보였던 시점, 동기화 또는 불러오기를 누른 순서를 알려주세요. 가능하다면 설정 화면의 저장 공간 표시와 문제가 보이는 화면도 함께 보내주세요.

현재 상태를 확인할 때까지 추가로 불러오기를 반복하거나 앱 데이터를 삭제하지 말아주세요.`}]},
  {id:"design",emoji:"🎨",title:"디자인·사용성",question:"글자나 버튼이 겹치고, 화면이 잘리거나 누르기 어려워요.",replies:[{label:"한국어",code:"ko",content:`안녕하세요. 화면 사용 중 불편했던 점을 알려주셔서 감사합니다.

문제가 보인 메뉴와 사용 기기, 글자 크기 설정을 알려주세요. 겹치거나 잘린 부분이 보이는 스크린샷을 함께 보내주시면 화면 크기에 맞춰 확인하는 데 도움이 됩니다.

소중한 제보 감사합니다.`}]}
];

window.SEORAP_DATA.tasks.push({
  id:"dv-release-town-building-book-fallback-128",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"마을 건물 바로 편집·캐릭터 책 배경 복구",summary:"마을의 집 정보에서 외형을 바로 바꾸고 일반 건물은 상세 화면이나 길게 누르기로 편집할 수 있게 했어요. Android에서 캐릭터 전체설정의 책과 나무 배경이 사라지던 이미지 레이어 충돌을 CSS 표면 레이어로 교체해 복구하고 v1.0.128(139) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-release-custom-floor-character-layers-129",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"직접 그린 방 바닥·전체설정 장식 레이어 복구",summary:"직접 그린 바닥 이미지를 선택한 방은 기존 벽을 자동으로 숨겨 첨부 그림이 방 전체를 채우게 했어요. 일부 Android 기기에서 캐릭터 전체설정의 책과 나무 배경만 사라지던 경로를 실제 DOM 이미지와 CSS 예비 표면으로 이중화하고 v1.0.129(140) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-release-room-layer-book-overview-130",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"방 인물 레이어·전체설정 책·걸음걸이 연결",summary:"방을 누르면 방 전체가 캐릭터와 반려생물 위로 올라오던 포커스 레이어 충돌을 제거했어요. 캐릭터 전체설정의 나무 배경과 책을 하나의 고정 셸로 묶고 개요를 기본·생활 두 장으로 정리했으며, 걸음걸이 설정이 집과 마을 이동의 속도·보폭·움직임에 실제 반영되도록 연결했어요. 반복 바닥 타일과 자르지 않는 방 전체 그림을 분리하고, 사용자가 그린 캐릭터 5명 추가 아이콘을 상점에 적용한 v1.0.130(141) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-character-book-root-fix-131",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 전체설정 책 구조 근본 수정",summary:"Android에서 책과 목재 배경이 사라지던 중첩 SVG 참조를 제거하고 두 자산을 직접 화면 레이어로 렌더링하도록 바꿨어요. SVG의 각도·크기·좌표·쌓임을 다시 맞추고 개요 기본·생활 입력을 책 안에 고정했으며, 모양 포스트잇을 아래쪽 페이지에 부착하고 공통 테마가 책 소탭과 포스트잇을 덮던 충돌도 제거한 v1.0.131(142) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-character-book-rewrite-132",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 전체설정 전용 책 화면 전면 재작성",summary:"기존 전체설정 래퍼와 누적 호환 스타일을 제거하고 제공한 두 SVG의 412×917 좌표계만 사용하는 독립 화면으로 다시 만들었어요. 나무 배경·펼친 책·책갈피·뒤로가기·개요 필드·첫 장의 모양 포스트잇·잉크병·저장 버튼을 원본 좌표와 쌓임 순서로 고정하고, 전역 테마가 책을 흰 화면으로 덮던 근본 충돌을 차단한 v1.0.132(143) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-character-hub-wall-height-133",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"일반 캐릭터 화면 복원·집 벽 높이 통일",summary:"전체설정의 열림 상태가 기기 저장·동기화 데이터에 남아 앱 재실행 시 일반 캐릭터 화면을 숨기던 원인을 제거했어요. 전체설정은 캐릭터 허브에서 직접 눌렀을 때만 열리고, 앱 재실행·탭 이동·동기화 복원 뒤에는 항상 기존 캐릭터 화면으로 돌아와요. 방 크기에 따라 제각각이던 집 벽 높이도 모든 방이 같은 화면 기준값을 사용하도록 통일한 v1.0.133(144) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-character-book-css-bundle-134",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"Android 캐릭터 책 스타일 누락 근본 수정",summary:"Android 패키지에는 캐릭터 전체설정 CSS 링크만 있고 실제 파일은 빠져 있어 원본 목재 이미지가 화면 전체를 덮던 원인을 확인했어요. 전체설정 스타일을 필수 Android 자산으로 등록하고 항상 로드되는 app.css에 빌드 시 묶었으며, 열기 전 전체설정 DOM도 hidden으로 보호했어요. 준비된 Android 화면과 실제 APK 내부 파일을 함께 검사하는 재발 방지 검사를 추가하고 v1.0.134(145) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-character-book-svg-navigation-135",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 책 SVG 배치·페이지 이동 정돈",summary:"캐릭터 전체설정 첫 장을 제공한 SVG의 책·목재 배경·다섯 색인·사진·LD·아이콘 좌표와 쌓임에 맞춰 다시 정돈했어요. 상단의 중복 모양 색인은 제거하고 책 하단 모양 책갈피가 사진 설정 첫 장을 가리키게 했으며, 개요 기본·생활은 별도 버튼 없이 좌우 페이지 화살표로만 넘겨요. 저장 글꼴은 KCC한빛으로 고정하고 전역 테마와 구형 모바일 전체설정 규칙이 새 책의 색상·배치를 덮던 충돌을 적용 범위에서 제거한 v1.0.135(146) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-character-body-choice-panels-140",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"신체 세부 항목별 다중선택 창 분리",summary:"캐릭터 전체설정 신체 페이지의 눈 특징·헤어스타일·머리장식을 서로 섞이지 않는 독립 다중선택 창으로 분리했어요. 눈 특징 19종, 헤어스타일 기존 후보, 왕관·티아라·뿔·후광 등을 포함한 머리장식 20종을 각각 저장·복원하고 한국어·영어·일본어 화면을 함께 반영한 v1.0.140(151) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-hotfix-media-cloud-recovery-121-3",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"기기 이미지 유실 뒤 클라우드 복원 핫픽스",summary:"기기 이미지 저장소가 정리된 뒤에도 오래된 로컬 참조가 동기화된 클라우드 사진 주소를 덮어써 사진이 계속 사라지던 원인을 수정했어요. 유효한 클라우드 이미지를 우선 복원하고 사라진 로컬 참조는 다시 저장하지 않도록 고쳤으며, 과거 업로드 코드와 충돌하지 않는 v1.0.121.3(153) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-character-body-layout-media-141",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 책 가독성·체모 설정·이미지 복구 통합",summary:"전체설정 책 옆면이 잘리지 않도록 책 레이어를 화면 안에 고정하고 테마 색상 코드와 그라데이션 선택 줄의 간격을 재배치했어요. 개요·신체 글자와 복수 선택 필드를 키우고 신체 5쪽을 위로 정돈했으며, 체모 정도와 위치별 복수 선택을 저장·복원하도록 추가했어요. 클라우드 사진 복구 핫픽스까지 포함한 v1.0.141(152) APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-character-book-spacing-hair-semantics-142",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 설정책 여백·색상 정렬·반응형 외형 미리보기",summary:"캐릭터 전체설정의 책 왼쪽 면이 화면에서 잘리지 않도록 단일 책 좌표를 안쪽으로 옮기고, 주 색상·보조 색상·HEX 값을 서로 겹치지 않는 두 행으로 재배치했어요. 하단 모양 책갈피를 제거하고 개요·신체 입력과 복수 선택 필드의 간격을 정돈했어요. 머리카락 설정은 형태를 고르는 곱슬기와 촉감·상태를 고르는 머릿결로 분리했으며, 곱슬기와 현재 머리색에 따라 머리 선이, 좌우 눈 색상에 따라 두 눈 미리보기가 각각 즉시 바뀌도록 연결했어요. 기존 값 변환과 한국어·영어·일본어까지 함께 반영한 v1.0.142(154) dev APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({
  id:"dv-character-book-habits-independent-movement-143",project:"서랍마을",section:"release",subsection:"testing",completed:true,
  title:"캐릭터 설정책 원본 좌표·습관 로그·독립 이동 완성",summary:"캐릭터 전체설정 책을 SVG 원본 외곽 좌표로 다시 맞춰 왼쪽 배경 노출과 신체 5쪽 조작부 돌출을 없애고, 사진이 비어 있을 때 검은 점선 추가 칸을 표시하도록 정돈했어요. 자연 모발은 현재·본래 머리색이 자동으로 같아지며, 생활습관과 행동 습관은 성격과 겹치지 않는 카테고리별 복수 선택으로 나눴어요. 식습관은 아침·점심·저녁 장면에서만 전용 로그를 만들고, 캐릭터는 각자 다른 시각에 이동을 시작하며 캐릭터별 시간차로 구두 발소리가 재생돼요. 한국어·영어·일본어, 모바일 실화면과 회귀검사까지 확인한 v1.0.143(155) dev APK·AAB를 만들었어요."
});

window.SEORAP_DATA.tasks.push({id:"dv-account-world-lighting-181",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.168(181) 계정별 월드 분리·원화 복구·현실 시간 조명",summary:"계정 전환·초기화·뒤늦은 동기화로 캐릭터가 섞이는 경로를 차단했어요. 사용자의 숲과 연못, 카페와 병원 원화를 적용하고 건물 불빛의 점등·소등 시각을 편집할 수 있어요. 낮·노을·밤, 휴대폰·태블릿 레이아웃, 건물과 조명의 확대·반전을 검수했어요. 새 문구 영어·일본어 번역 완료. 기존 회귀검사 4종은 수정 전에도 같은 실패가 확인되어 별도 기록했어요. 앱 변경은 dev 브랜치에 반영하며 운영 main·Play 배포와 구분합니다."});
window.SEORAP_DATA.tasks.push({id:"dv-restore-welcome-gifts-182",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.169(182) 불러오기 복구·첫 화면·선물 역할 수정",summary:"기기 저장 공간이 모자라도 저장본을 삭제하지 않고 압축해 불러오도록 개선했어요. 제공된 마을 그림으로 시작 화면을 바꾸고 새 캐릭터 생성·기존 마을 복원을 분리했어요. 네리네가 크로에게 선물을 주면 두 인물이 같은 장소에서 전달·수신 역할을 유지하며 크로의 취향과 네리네를 향한 감정·신뢰에 맞춰 반응해요. 휴대폰·태블릿 및 영어·일본어 검수, 회귀검사 27/30 통과(기존 기대값 실패 3종 기록). 앱은 dev, 작업판은 main에 반영하며 운영 앱·Play 배포와 구분합니다."});
window.SEORAP_DATA.tasks.push({id:"dv-village-performance-183",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.170(183) 렉 개선·마을/건물 관리·6열 사전·말투",summary:"생활 장면의 반복 계산을 줄이고 사전을 6열 아이콘과 지연 생성 편집 팝업으로 바꿨어요. 첫 마을과 삭제 기록을 안정화하고 마을 정보에서 다른 마을을 열람·삭제할 수 있어요. 건물·집의 상세 편집에서 삭제 가능하며 집 사진에는 집 일러스트나 가족사진을 넣는 안내를 붙였어요. 시작 화면은 휴대폰/태블릿 높이에 맞추고 과묵한 직설체·냉정한 격식체 및 전체 문장 알림을 추가했어요. 새 회귀검사 통과, 기존 27/30 통과(기존 기대값 실패 3종). 영어·일본어 정적 UI 각 72.9%. 앱 dev/작업판 main, 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-dictionary-mail-184",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.171(184) 사전 원화 UI·반점 별점·알림 우편 동기화",summary:"제공된 사전 SVG의 나무·책·잉크병과 버튼을 적용하고 겹침·색·크기·기울기·위치를 맞췄어요. 사진은 인게임/링크/기기에서 선택하며 별점 0.5 단위와 실제 물품 효과를 지원해요. 알림과 우편의 제목·본문을 일치시키고 건물 삭제 후 목록 복귀, 마을 제목 높이, 파란 터치 강조를 수정했어요. 목록 30개씩 표시·건물 상세창 지연 생성으로 반복 렌더를 줄였어요. APK/AAB 빌드와 29/32 회귀검사 통과(기존 기대값 실패 3종). 정적 UI 영어·일본어 각 73.6%. 앱 dev, 작업판 main이며 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-village-recovery-mood-185",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.172(185) 건물 소실 방지·선택 복구·캐릭터 기분",summary:"건물 동기화를 개별 건물 단위로 고치고 기기 복구본의 누락 건물을 선택 복구할 수 있어요. 건물 목록·스크롤, 캐릭터 10페이지 클릭, 캐릭터별 애니메이션 위치, 상점 카드, 마을 블러 배경과 노란 선택 버튼을 반영했어요. 현재 환경에 따른 인물 기분과 대화 주제를 추가했어요. 신규 검사와 Android 빌드 통과. 실제 계정의 건물 복구 여부와 집 진입 문제는 별도 확인이 필요해요. 앱 dev, 작업판 main; 정적 UI 영어 73.7%, 일본어 73.6%."});
window.SEORAP_DATA.tasks.push({id:"dv-town-scene-home-186",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.173(186) 마을 복구·상태별 이미지·집 편집 분리",summary:"계정 확인 전에 빈 월드가 먼저 열리던 문제와 동기화 후 서로 다른 마을의 건물이 합쳐지던 문제를 수정했어요. 피아노 공연장·공원·빨간 지붕 집과 시간대별 불빛을 추가하고 수면·아침 준비·욕실·업무·외출·감정별 캐릭터 아이콘과 LD를 설정할 수 있어요. 애니메이션 배치는 캐릭터 설정 3쪽에서 5단계로 고르며, 마을 건물 목록에서 집을 바로 추가하고 집 내부 설정과 마을 건물 외형 설정을 나눴어요. 신규·기존 회귀검사, 384×854 화면, Android APK/AAB 빌드를 통과했어요. 앱 dev, 작업판 main; 정적 UI 영어 73.6%, 일본어 73.5%."});
window.SEORAP_DATA.tasks.push({id:"dv-wardrobe-mood-shared-logs-187",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.174(187) 자유 옷장·기분 다양화·공동 로그 동기화",summary:"캐릭터 11쪽 옷장을 사전형 목록으로 바꾸고 사용자가 SD·LD, 상황·기분·보온·격식·편안함·유니폼 조건을 자유롭게 등록하도록 정리했어요. 현재 상황과 조건에 가장 잘 맞는 옷을 홈에서 자동 적용하고 없으면 기본 그림을 사용해요. 두 인물이 실제 같은 장소에 있을 때만 공동 장면을 만들며 하나의 사건을 공유하되 각 인물 시점으로 다르게 기록해 행동 불일치를 막았어요. 미뤄 둔 약속처럼 모호하던 갈등은 출발 시각·예산·취소 통보 등 구체적인 쟁점으로 바꾸고 기분 계산의 평온 편중을 줄였어요. 마을·건물의 인지도와 평판을 분리하고 사용자가 그린 카페·병원·공연장·공원·빨간 지붕 집 원화의 인접 선과 불빛 정렬을 교정했어요. 신규·기존 회귀검사와 Android APK/AAB 빌드를 통과했어요. 앱 dev, 작업판 main; 이번 신규 UI 영어·일본어 번역 완료."});
window.SEORAP_DATA.tasks.push({id:"dv-wardrobe-dresscode-town-actions-188",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.175(188) 사전형 옷장·드레스코드·마을 행동",summary:"옷장 11쪽을 사전과 같은 검색·필터·3열 카드 구조로 맞추고 휴대폰 화면에서 겹치지 않게 정리했어요. 옷 분류 입력을 없애고 유혹적임 기분 태그, 색·재질·분위기 다중 선택창, 비율이 유지되는 SD·LD 등록을 적용했어요. 건물과 주간·월간 일정에 격식·유니폼·색·재질·분위기 드레스코드를 지정하며 현재 상황의 자동 의상에 반영돼요. 행동·환경·집·관계·업무·옷을 함께 계산해 기분을 정하고 과묵하고 절제된 인물은 좋은 상황에서도 갑자기 들뜨지 않아요. 마을에서는 식사·음악·공부·업무·운동·대화·쇼핑·진료·청소·휴식 행동을 건물 안팎에서 구분해 보여줘요. 검은 점·건물 그림자·임시 빨간 지붕 집을 제거하고 병원 흰 면을 보존한 원화 투명화도 다시 적용했어요. 신규·성능·일정·조명 회귀검사와 384×854 UI 검사, Android APK/AAB 빌드를 통과했어요. 앱 dev, 작업판 main; 신규 UI 영어·일본어 번역 완료."});
window.SEORAP_DATA.tasks.push({id:"dv-character-mood-balance-189",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.176(189) 성격 기반 기분 균형",summary:"좋은 마을·깨끗한 집·좋은 관계·어울리는 옷이 모두 더해져 인물 전원이 좋은 기분이 되던 계산을 생활 기반 완충 효과로 묶었어요. 평범한 날에는 날짜별 컨디션, 기상 직후와 취침 전 피로, 업무와 사건이 더 크게 작용해 차분함·무덤덤함·평온함·긴장함이 자연스럽게 나뉘어요. 온화·다정·낙천·침착한 성격은 일상적인 컨디션 저하를 완만하게 받고, 예민·불안 성향은 화남 대신 긴장으로 더 크게 반응해 성격을 지켜요. 실제 다툼·분노가 있을 때만 화남이 나오고 ‘불편한 점이 없었는지 확인함’ 같은 배려 문장은 화난 사건으로 오인하지 않아요. 한국어·영어·일본어 기분 사유를 함께 적용하고 180개 평범한 장면 분포 검사, 성능·일정·조명 회귀검사, Android APK·AAB 빌드를 통과했어요. 앱 dev, 작업판 main; 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-character-emotion-performance-190",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.177(190) 감정 성향·캐릭터 편집 성능·드레스코드",summary:"캐릭터 성격 8쪽 뒤에 감정 성향 9쪽을 추가해 기본 정서·변화 폭·지속 시간·좋은 일과 스트레스 반응·회복 방식을 캐릭터별로 정해요. 낙천적인 인물은 평범한 날에 무덤덤함으로 바뀌지 않고, 부정적 사건은 성격에 맞는 긴장·걱정·가라앉음으로 반응해요. 캐릭터 전체설정에서 보이지 않는 모바일 허브·데스크톱 편집기·대화상자를 동시에 만들던 중복 DOM을 제거하고 책의 입력과 선택 버튼을 3쪽처럼 입체화했어요. 건물 드레스코드는 별도 창의 색·재질·분위기 3열 선택으로 바꾸고, 한국어로 남아 있던 생성 생활 로그에 영어·일본어 의미 번역 폴백을 적용했어요. 신규·성능·기존 버그·Android 자산 회귀검사와 APK·AAB 빌드를 통과했어요. 정적 UI 영어 73.4%, 일본어 73.3%. 앱 dev, 작업판 main; 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-statistics-emotion-calendar-191",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.178(191) 빈 기본 사전·정서 반응·통계 보고서·오늘 달력",summary:"새 월드의 사전과 기본 판매 목록을 비워 사용자가 직접 추가하기 전에는 음식·물품이 생기지 않도록 했고 기존 월드의 사용자 항목은 보존해요. 감정 성향 화면 겹침을 정리하고 분노·유혹·호감 반응을 추가해 기분 계산에 연결했어요. 옷장 SD·LD가 캐릭터 그림 전체를 바꾸는 기능임을 안내하고 각 그림의 화면 배치를 따로 저장해요. 캐릭터 1쪽에는 기본 서랍마을 전체 테마와 고급 LD 바로가기를 두고 프로필 사진에 액자를 적용했으며 잉크병도 저장 버튼으로 작동해요. 통계 보고서는 전체·마을별로 인구가 많은 순서의 마을, 마을·건물·캐릭터 수, 연령대·성비 피라미드, 생활 평균, 성격 분포와 사회 지표를 보여줘요. 월간 일정은 현재 달과 오늘을 기본 표시하고 양말 정리 같은 집안일도 마을 행동 애니메이션으로 보여줘요. 전용·기존 회귀검사와 Android APK·AAB 빌드를 통과했어요. 정적 UI 영어 73.7%, 일본어 73.7%. 앱 dev, 작업판 main; 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-direct-layout-mood-scenes-192",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.179(192) 옷 직접 배치·기분 행동·생활 시간 정합성",summary:"기분과 정서 성향 입력칸이 머리말과 겹치지 않게 내리고, 옷장 SD·LD 화면 배치는 수치 입력 대신 그림을 직접 끌고 두 손가락으로 크기·각도를 조절하도록 바꿨어요. 옷의 ‘유니폼으로 등록’과 건물·일정의 ‘유니폼 착용 필수’를 구분해 설명했어요. 낙천적 캐릭터도 최종 기분 점수가 음수이면 ‘기분 좋음’으로 표시되지 않으며 화남·슬픔·긴장·피곤·지루함은 다음 행동에 실제 반영돼요. 짧은 말씨름은 12분 뒤 끝나고 즉시 반복하지 않으며, 심야에는 야식 습관이 있는 캐릭터만 음식 장면을 사용해요. 한국어·영어·일본어 장면과 UI를 함께 반영하고 회귀검사와 Android APK·AAB 빌드를 통과했어요. 정적 UI 영어 73.7%, 일본어 73.7%. 앱 dev, 작업판 main; 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-play-games-achievements-193",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.180(193) Google Play 게임즈 업적 기반",summary:"첫 캐릭터·첫 건물/집·첫 공식 관계·첫 사전 항목과 캐릭터 5명·건물/집 10개·마을 3개·캐릭터 한 명의 6개 설정 장 완성까지 8개 업적을 추가했어요. 업적 진행도와 달성 시각은 월드에 먼저 저장되고, 설정의 업적 화면에서 언제든 확인해요. Android에는 Play 게임즈 v2 로그인·표준 업적 해제·증분 단계 동기화·Google 기본 업적 화면을 연결했으며 Console ID가 비어 있는 개발 빌드에서는 외부 호출 없이 로컬 기록만 안전하게 유지해요. 계정 분리·성능·내비게이션·Android 자산 회귀검사와 debug APK·release AAB 빌드를 통과했어요. 새 업적 화면과 문구는 한국어·영어·일본어 완료. 전체 정적 UI 영어 73.7%, 일본어 73.7%. 앱 dev, 작업판 main; 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-taste-scroll-emotion-header-194",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.181(194) 취향·사전·소지품 스크롤과 정서 화면 교정",summary:"캐릭터 취향의 좋아하는 것·좋아하는 것 사전·소지품 팝업을 제목, 독립 스크롤 목록, 하단 닫기 영역으로 분리해 긴 항목도 끝까지 볼 수 있게 했어요. 휴대폰 하단 안전 영역을 포함하고, 이어서 열리는 사전·다중 선택 목록에도 같은 스크롤 제약을 적용했어요. 팝업 제목과 닫기 버튼을 같은 줄에 고정했으며, 전역 상단바 스타일이 기분과 정서 성향 설명을 네모 상자로 만들고 선택 항목을 가리던 구조를 일반 설명 영역으로 교체하고 불필요한 안내 상자를 제거했어요. 384×854에서 마지막 항목과 하단 버튼 노출을 직접 검수하고 신규·업적·정서·캐릭터 UI·내비게이션·성능 회귀검사와 Android debug APK·release AAB 빌드를 통과했어요. 새 번역 문구는 없으며 기존 한국어·영어·일본어를 그대로 유지해요. 전체 정적 UI 영어·일본어 각 73.5%. 앱 dev, 작업판 main; 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-personality-home-hydration-195",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.182(195) 정서 화면·성격 반영·집 이동 안정화",summary:"캐릭터 설정 9쪽의 제목·설명·선택 항목을 하나의 흐름 레이아웃으로 묶어 작은 화면의 글자 겹침을 없앴어요. 8쪽의 사회성·판단·계획·활동 속도·부지런함·정리 습관·갈등·애정 표현·생활 리듬·유머가 상황별 기분, 행동 주도권과 생활 로그에 반영돼요. 건물 드레스코드의 유니폼 착용 필수는 화면·이벤트·과거 저장값에서 제거했고, 집 진입 때 이미 가구를 쓰는 캐릭터는 현재 위치에서 바로 사용 동작을 이어가 실제 장면이 바뀔 때만 걸어요. 384×854 실화면, 전용 24개·집 생활 70개 및 기존 회귀검사, Android debug APK·release AAB 빌드를 통과했어요. 새 기분 사유 한국어·영어·일본어 완료. 앱 dev, 작업판 main; 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-emotion-tastes-196",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.183(196) 정서 다양화·취향 기반 기분·선호 편집 흐름",summary:"캐릭터 설정 9쪽의 항목 간격과 글자 크기를 조정하고 평소 정서를 낙천적·다정함·유혹적·냉소적·까칠함·불안함·침울함·분노를 품음 등 19가지로 넓혔어요. 정서 민감도와 주변 감정 영향을 추가하고 성격·사건·동행인의 기분·좋아하거나 싫어하는 대상이 실제 기분 점수, 다음 행동과 생활 로그를 함께 바꿔요. 기분 표현도 들뜸·애정·호기심·유혹·까칠함·혐오·격분·외로움·실망·피로 등으로 세분화했어요. 11쪽에서는 좋아하는 일반 항목과 사전 항목을 한 창에 합치고 싫어하는 것 선택을 추가했으며, 하위 선택을 마치면 전체 창이 닫히지 않고 바로 이전 분류 창으로 돌아가요. 384×854 실화면, 전용 28개와 기존 정서·취향·성능·로그 회귀검사, Android debug APK·release AAB 빌드를 통과했어요. 새 UI·기분 사유·행동 로그 한국어·영어·일본어 완료. 앱 dev, 작업판 main; 운영 Play 배포 아님."});
window.SEORAP_DATA.tasks.push({id:"dv-couple-bed-buildings-197",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.184(197) 2인 침대 레이어·건물 원화와 조명",summary:"2인 침대의 바탕·이불·발판을 하나의 가구로 이동시키고, 사용 상태에 따라 캐릭터가 침대 위 또는 이불 안에 자연스럽게 들어가도록 레이어를 분리했어요. 좌우 선호와 베개 위치를 반영해 두 사람이 눕는 자리를 정해요. 제공된 건물 13종과 조명 6종을 도감에 반영하고 외곽 투명 배경과 윤곽선 안 흰 면을 구분해 원화의 흰색을 보존했어요. 신규 검사·브라우저 시각 검수·Android 빌드를 진행했고 새 문구 영어·일본어를 함께 반영했어요. 앱 dev, 작업판 main이며 운영 Play 배포가 아니에요."});
window.SEORAP_DATA.tasks.push({id:"dv-life-assets-198",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.185(198) 건물 재단·생활 애니메이션·기분 로그·액세서리 성향",summary:"카페와 병원을 각 건물 영역만 다시 잘라 아래쪽의 다른 그림, 외곽 흰 테두리를 제거하고 카페 컵 손잡이 안쪽을 투명하게 열었어요. 조명 레이어도 같은 캔버스에 맞췄고 2인 침대는 22% 키웠어요. 마을의 대기·쇼핑 캐릭터에 움직임을 추가하고 기분 사유를 실제 행동 로그의 시간·제목·내용과 연결했어요. 캐릭터 설정 7쪽에는 액세서리 착용 성향을 추가해 자동 코디와 생활 행동에 반영해요. 전용·생활·정서 회귀검사, 모바일 브라우저 시각 검수와 Android APK/AAB 빌드를 통과했어요. 정적 UI 영어·일본어 각 73.7%. 앱 dev, 작업판 main이며 운영 Play 배포가 아니에요."});
window.SEORAP_DATA.tasks.push({id:"dv-character-settings-statistics-199",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.186(199) 통계·외모 설정·캐릭터 책 정리",summary:"통계 화면에 다른 탭과 같은 원형 나무 뒤로가기 버튼을 적용하고 범위 선택과 보고서 다운로드가 내용을 가리지 않도록 흐름을 정리했어요. 캐릭터 설정 7쪽에서는 작업복·수영복·잠옷·파티복과 복잡한 액세서리 성향을 제거하고, 액세서리 착용 여부와 평소 외모 관리 정도를 넉넉한 간격으로 설정하도록 바꿨어요. 선택값은 자동 코디와 아침 준비 행동·로그에 반영돼요. 전체설정 책 왼쪽을 가리던 회색 나무 모양은 배경 원화에서 제거했어요. 전용·생활·정서·성능 회귀검사와 모바일 브라우저 시각 검수, Android APK/AAB 빌드를 통과했어요. 정적 UI 영어 74.3%, 일본어 74.2%. 앱 dev, 작업판 main이며 운영 Play 배포가 아니에요."});
window.SEORAP_DATA.tasks.push({id:"dv-bed-buildings-statistics-200",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.187(200) 침대·건물·통계 main 및 사이트 반영",summary:"2인 침대를 30% 확대하고 두 캐릭터의 좌우·베개 위치·크기·회전을 침대 배율에 맞췄어요. 카페·병원·피아노 공연장·오피스·공원·빨간 지붕 집의 사용자가 투명화한 원본 12장을 무가공으로 교체하고 조명은 가산 발광으로 합성해요. 통계는 중복 뒤로가기 버튼과 스크롤 충돌을 제거하고 나무 상단바를 고정했으며 그 아래 보고서만 스크롤하고 범위·다운로드 버튼은 3분할 그림으로 늘어나요. 전용 검사·조명 회귀검사·412×917 모바일 시각 검수와 Android APK/AAB 빌드를 통과했어요. 웹 캐시 표식을 코드 200으로 갱신하고 누락 모듈을 고친 뒤 전체 의존 모듈 27개를 검사해 Cloudflare 운영 사이트에서 정상 시작을 확인했어요. 정적 UI 영어 74.3%, 일본어 74.2%. 앱 dev/main과 작업판 main 반영 및 운영 사이트 배포 완료이며 Google Play에는 아직 배포하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-buttons-love-hotfix-201",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.187.1(201) 웹 버튼·애정 관계 감정 핫픽스",summary:"웹에서 앱과 화면 모듈이 서로 다른 상태 인스턴스를 읽어 메뉴 버튼을 눌러도 화면이 바뀌지 않던 캐시 키 불일치를 전체 27개 모듈에서 하나로 통일했어요. 감정 계산기는 실제 a/b 관계와 캐릭터별 상대 인식을 읽도록 고쳐 네리네처럼 크로를 깊이 사랑하는 캐릭터가 가벼운 갈등만으로 격분하지 않고 서운함과 지속되는 애정을 함께 드러내요. ‘불편하지 않도록’ 같은 배려·착용감 문장은 분노 사건에서 제외하고, 기분 사유에는 실제 행동 로그의 구체적인 내용을 연결해요. 한국어·영어·일본어 감정 문구를 적용하고 전용 검사·기존 정서·침대·통계·조명 회귀검사, 27개 웹 모듈 배포 검사와 Android debug APK·release AAB 빌드를 통과했어요. 정적 UI 영어·일본어 각 74.3%. 앱 main/dev와 작업판 main 반영 및 운영 사이트 배포 대상이며 Google Play에는 아직 배포하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-relationship-emotion-202",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.188(202) 공동 대화 동기화·방향별 복합 감정",summary:"한 캐릭터가 상대와 대화하는 동안 상대가 별개의 행동을 표시하던 현재 장면을 같은 사건 ID와 참여자로 동기화했어요. 감정은 양쪽에 복사하지 않고 각 인물이 상대를 보는 방향별 시선으로 계산해 애정·성가심·공격 충동·감정 오해가 섞인 복잡한 끌림, 애증, 우호적 동석의 편안함, 적대적 동석의 반감을 구분해요. 추상적인 취향 로그는 독서·음악·음식·취미의 실제 행동으로 바꾸고 수면 중에는 감정 계산 없이 수면 중으로 표시해요. 한국어·영어·일본어 검사, 브라우저 검수, APK/AAB 빌드 완료. 앱 dev이며 운영 main·사이트·Play 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-language-relationship-font-203",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.189(203) 언어 전환·관계창·마을 추가·글꼴 설정",summary:"일본어에서 한국어로 돌아온 뒤 기존 생활 로그가 일본어로 남던 문제를 저장된 의미 키 기준 재번역으로 고치고, 혼자 집중하는 장면과 동행 장면이 서로 엇갈리지 않도록 보호했어요. 관계창은 먼저 고른 캐릭터를 항상 왼쪽에 두고 화살표를 그 캐릭터 대표색으로 표시하며 불신 관계 문구까지 영어·일본어로 번역했어요. 긴 외국어 때문에 겹치던 캐릭터 설정 3·6쪽을 언어별 줄바꿈과 간격으로 정돈하고 신체·접근성 선택지도 번역했어요. 마을 전환창에서 새 마을을 바로 추가할 수 있고, 설정에는 무료 OFL 일본어·한자 글꼴 M PLUS Rounded 1c와 기존 글꼴 선택을 복구했어요. Google Play 홍보 이미지 문구의 한·영·일 원고도 정리했으며 모바일 시각 검수, 전용·기존 회귀검사와 Android APK/AAB 빌드를 통과했어요. 앱 dev이며 운영 main·사이트·Google Play 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-cognitive-traits-font-205",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.191(205) 생활 특성 선택·메인 글꼴 적용",summary:"자폐·ADHD 같은 진단명 선택을 없애고 집중·감각·소통·일상 방식의 구체적인 특성만 고르도록 신체·접근성 6쪽에 별도 항목을 만들었어요. 성격 쪽에는 이동 안내나 설명 문구를 남기지 않았고, 새 선택창도 제목과 선택지만 담담하게 보여줘요. 선택 결과는 내보내기에서도 성격과 분리해 표시하고 과거 진단명 값이 기분을 추정하는 데 쓰이지 않도록 했어요. 설정에서 고른 글꼴은 메인 화면을 포함한 공통 UI 전체에 적용해요. 한국어·영어·일본어 문구 완료, 모바일 시각 검수·회귀검사와 Android APK/AAB 빌드를 통과했어요. 앱 dev이며 운영 main·사이트·Google Play 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-sync-rules-hotfix-196",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.183(196) 대용량 계정 동기화 서버 핫픽스",summary:"분할 동기화 기능이 서버 권한에 막힌 뒤 전체 데이터를 문서 하나로 다시 올리면서 용량 제한 오류가 나던 원인을 수정했어요. 로그인한 사용자는 자신의 동기화 코어·캐릭터·날짜별 기록에만 접근할 수 있도록 경로를 정확히 제한한 Firestore 규칙을 운영 서버에 배포했어요. 사진이나 게임 데이터는 삭제하지 않았고 기존 v1.0.183(196) 앱에서 재설치 없이 바로 사용할 수 있어요. 규칙 구조 검사와 클라우드 병합·이미지 복구·v196 정서 회귀검사를 통과했으며 앱 main/dev와 작업판 main에 반영했어요. 서버 전용 수정이라 versionCode와 번역 진행률은 바뀌지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-sync-home-character-206",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.192(206) 증분 동기화·집 가구·캐릭터 설정 정돈",summary:"첫 동기화 뒤에는 바뀐 캐릭터와 날짜 기록만 읽고 쓰는 증분 동기화를 적용해 대용량 계정의 반복 동기화 시간과 서버 사용량을 줄였어요. 사진과 기존 데이터는 삭제하지 않습니다. 집 편집 가구를 검색 가능한 모바일 하단 목록으로 바꾸고 커플 침대는 이모지 대신 실제 침대 일러스트로 표시해요. 침대 점유 칸과 세로 격자를 키우되 잠든 캐릭터 크기는 침대와 분리하고, 두 사람의 몸이 이불 안에 들어가도록 배치했으며 이름표와 수면 표식을 숨겼어요. 연구·집중 중인 캐릭터가 다른 사람의 대화 상대로 잘못 표시되는 문제를 실제 실행 검사로 막았어요. 캐릭터 설정은 원본 책 비율을 복구하고 감정 상세 페이지를 합쳤으며 인지·감각·상호작용 특성을 아래로 옮겼어요. 다중 선택은 3열 서랍마을 색상으로 정돈하고 선택 요약에 실제 항목을 표시해요. 한국어·영어·일본어 변경 문구 100% 완료, 384×854 모바일 시각 검수·동기화/관계 회귀검사와 Android APK/AAB 빌드를 통과했어요. 앱 dev이며 운영 main·사이트·Google Play 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-food-image-hotfix-207",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.187.2(207) 음식 이미지 삽입 Android 핫픽스",summary:"Android에서 음식 추가 중 사진 선택기를 열기 전에 전체 사전을 저장하던 흐름을 제거하고 현재 음식 초안만 보존한 뒤 사진 선택기를 바로 열도록 수정했어요. 매 선택마다 새 파일 입력을 만들어 같은 사진을 다시 고르거나 앱으로 돌아온 경우에도 변경 이벤트가 빠지지 않게 했고, 이미 저장된 data URL을 복원된 로컬 미디어로 잘못 집계해 화면을 다시 그리던 원인도 고쳤어요. 기존 음식·사진 데이터는 삭제하지 않습니다. 음식 이미지 전용 검사와 사전·버튼·동기화 회귀검사, Android debug APK·release AAB 빌드를 통과했어요. main v1.0.187.2(207)과 dev v1.0.193(208)에 반영했으며 핫픽스 신규 오류 문구의 영어·일본어 번역을 완료했어요."});
window.SEORAP_DATA.tasks.push({id:"dv-food-image-dev-208",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.193(208) 음식 이미지 핫픽스 dev 반영",summary:"main의 Android 음식 사진 선택 수정만 dev의 기존 증분 동기화·집·캐릭터 작업을 건드리지 않고 동일하게 반영했어요. 전용 검사와 개발판 회귀검사, 전체 앱 패키징 검사를 통과했으며 GitHub dev에 올렸어요. 정적 UI 번역 진행률은 영어 74.8%, 일본어 74.8%예요."});
window.SEORAP_DATA.tasks.push({id:"dv-play-games-console-ids-193",project:"서랍마을",section:"release",subsection:"play-store",completed:false,title:"Google Play 게임즈 프로젝트·업적 ID 연결",summary:"Play Console에서 com.drawervillage.app용 Play 게임즈 서비스 프로젝트와 업적 8개를 만든 뒤 프로젝트 ID와 각 업적 ID를 Android 문자열 리소스에 넣고 설정을 켜야 해요. 테스터 계정으로 로그인·오프라인 달성 후 재동기화·Google 기본 업적 화면을 실제 Play 설치본에서 확인해요."});
window.SEORAP_DATA.tasks.push({id:"dv-home-real-save-185",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"집 진입 불가·기존 건물 복구 실계정 재확인",summary:"185 개발판의 가상 데이터에서는 집 관찰/편집 화면이 열리고 누락 건물 선택 복구도 통과했어요. 실제 계정에서의 재현과 복구 후보 유무는 확인되지 않았어요. 기존 앱 삭제나 데이터 초기화 없이 업데이트 후 확인이 필요해요."});
window.SEORAP_DATA.tasks.push({id:"dv-home-editor-209",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.194(209) 집 편집 1차 개편·반복 계산 절감",summary:"dev 전용. 집 정보·방 목록·구성원 진입점과 하단 로그/요약, 검색·분류·접기 가능한 가구창, 가구 1/4칸 세부 이동과 반전/방향 저장, 침대 선택 범위, 마을 인물 위치 순서, 옷장 페이지 넘김 간격을 반영했어요. 숨긴 로그 지연 생성과 편집 중 갱신 중지로 반복 계산을 줄였어요. 새 집 편집 문구 영어·일본어 각 100%, 전체 번역률은 미측정. 회귀검사와 Android APK/AAB 빌드 완료. 운영 main·사이트·Play 미배포."});
window.SEORAP_DATA.tasks.push({id:"dv-home-editor-209-followup",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"가구 옆모습 원화·실기기 성능 검증",summary:"210~211에서 집 화면과 구성원 통합 편집, 책 종이 확대를 반영했어요. 가구 옆모습 원화 연결은 남아 있어요. SM-G991N 장시간 사용 프레임·온도 측정 전이므로 발열 해결 완료로 표시하지 않아요."});
window.SEORAP_DATA.tasks.push({id:"dv-home-design-210",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.195(210) 집 SVG 재구성·구성원 통합 편집",summary:"dev 전용. 구성원·반려생물·차를 한 화면에서 추가/편집하고 뒤로가면 구성원 화면으로 돌아와요. 원본 SVG의 나무/마을 배경, 사진 프레임, 기울어진 표면 샘플, 방 편집 배치를 반영했어요. 하단 로그/요약 복구, 불필요한 방 제목 색·크기·층 선택 제거, 마을과 집 사진/정보 공유. 모바일 영문/일문 화면과 저장/복귀, 회귀검사, Android APK/AAB 빌드 확인. 이번 변경 문구 영어·일본어 각 100%; 전체 번역률 미측정. 운영 main·사이트·Play 미배포."});
window.SEORAP_DATA.tasks.push({id:"dv-home-polish-211",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.196(211) 책 확대·집 목록/편집/로그 가독성",summary:"dev 전용. 책의 중앙 종이를 확장해 하단 요소까지 받치고, 집 목록을 크림색 판과 둥근 사각 사진 프레임으로 정리했어요. 방 편집·로그·요약의 중첩과 글자 넘침을 수정하고, 가구창 높이 고정·3분할 버튼·드래그 중에만 그리드를 표시해요. 모바일 일본어 화면/메뉴 3개 언어/관련 회귀검사 및 APK/AAB 확인. 운영 main·사이트·Play 미배포."});
window.SEORAP_DATA.tasks.push({id:"dv-home-log-locale-followup-211",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"집 생활 로그의 기존 한국어 문장 번역 후속 확인",summary:"211 일본어 UI 점검에서 우편 도착 등 일부 저장된 생활 로그가 한국어로 남는 것을 확인했어요. 이번 집 UI 변경의 메뉴 키는 한국어·영어·일본어 검사 완료이나 전체 UI/로그 번역률은 미측정이에요."});
window.SEORAP_DATA.tasks.push({id:"dv-audio-room-mood-212",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.197(212) 발소리 패키징·방 편집·기분 내역",summary:"dev 전용. 누락된 발소리 파일을 앱에 포함하고 동시 재생을 최대 2명으로 제한했어요. 방 사진 채우기, 집 구성원 복수 주인·전체 선택, 출입 대상 설정/저장 UI와 명시적 저장 버튼을 반영했어요. 가구 이름 대비와 나무무늬 없는 하단창, 기본 테마만 표시, 버튼 잘림을 수정했어요. ‘변화가’를 분노로 오인하던 문제를 고치고 로그 인용 대신 기분 요인을 따로 표시해요. 관련 회귀검사·모바일 일본어 화면·APK/AAB 검증 완료. 실기기 청취/발열 및 새 출입 규칙의 이동 AI 적용은 별도 확인 대상. 이번 새 문구 영어·일본어 각 100%, 전체 로그 번역률 미측정."});
window.SEORAP_DATA.tasks.push({id:"dv-room-access-behavior-212-followup",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"방 출입 설정의 방문·이동 행동 적용 후속",summary:"212는 방 주인 및 방문자·배달원·수리기사·반려생물·개별 대상의 출입 설정과 저장 UI를 제공해요. 실제 이동 AI가 새 그룹별 정책을 따르도록 하는 작업과 방문 장면 회귀 검증은 아직 완료하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-project-197-build1",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.197 iOS build 1 프로젝트 준비",summary:"dev에 공식 Capacitor iOS 프로젝트, 필수 게임 파일 준비, 플랫폼별 버전/설정 검사, 업데이트 절차를 추가했어요. Android code 212 유지. Windows에서 프로젝트 준비와 실행 경로 분리 검사만 완료했고 IPA를 빌드한 것은 아니에요. 신규 준비 UI 영어·일본어 각 100%; iOS 시스템 권한 문구 현지화와 전체 로그 번역은 후속."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-store-launch-followup",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"iOS Mac 빌드·Apple 계정·로그인/결제·스토어 출시",summary:"Mac/Xcode 26+, Apple Developer Program 및 서명 Team 필요. Firebase iOS와 Apple 로그인, StoreKit/서버 구매 검증·복원, 계정 삭제, 개인정보 매니페스트, 최종 아이콘/시작 화면, 한·일 권한 문구, iPhone 실기기 검증 후 TestFlight와 심사 제출. 현재 iOS 준비판은 로컬 플레이용이며 로그인/구매 미연결."});
window.SEORAP_DATA.tasks.push({id:"dv-home-drawer-213",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.198(213) 집 메뉴 잘림·가구창 두 분류 정리",summary:"dev에서 집 메뉴 양끝 비율과 너비 충돌을 고쳤어요. 전체 테마 설정을 없애고 검색/방 종류/가구 종류/목록으로 구분했어요. 선택 가구 도구는 두 줄로 정리해 하단창과 겹치지 않아요. ko/en/ja 모바일 크기·관련 검사 10개·APK/AAB 최종 파일 검증 완료. 이번 변경 영어·일본어 각각 100%, 전체 로그 번역률 미측정. iOS 1.0.198/build 2에도 공통 코드 준비; IPA·실기기 테스트·스토어 업로드는 미완료."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-cloud-preview-198",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"v1.0.198 / iOS build 3 클라우드 빌드·시뮬레이터 실행 통과",summary:"맥 구매 없이 요청할 때만 iOS를 빌드하는 설정을 dev에 추가했어요. 30분 상한과 작은 진단 파일 3일 보관 적용. build 3에서 외부 로그인 SDK를 기다리지 않고 로컬 첫 캐릭터 화면을 열도록 수정했어요. 데이터 삭제/계정 변경/구매 권한 부여 없음. 최종 Actions 33866155299 전체 성공(10분 3초): Xcode 빌드, iPhone 17 Pro/iPad Pro 13-inch(M5) 설치·실행·프로세스 검사 통과. iPhone 시작 화면 육안 확인; iPad 이미지 육안 검수와 실제 게임 기능/실기기 검사는 별도. ko/en/ja 안내·첫 화면 진입·Android auth 동일성 검사 통과. Android 213 유지, 운영 main·사이트·스토어 미배포. Apple 서명/IPA/TestFlight 미연결. 해당 안내 영어·일본어 각 100%; 전체 번역률 재측정 없음."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-signing-packet",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"TestFlight용 Apple 서명 자료 Secrets 저장 완료",summary:"사용자의 명시적 승인 후 기존 암호화 P12·암호·배포 프로파일을 GitHub Actions Secrets에 저장했어요. 인증서/개인키/Team/앱 ID 일치 및 P12 검사 통과. 기존 API 키를 포함한 여섯 항목 이름 등록 확인; 비밀값은 Git/채팅/작업판에 넣지 않음. 실제 Apple API 인증·Mac 서명 빌드·TestFlight 업로드는 아직 별도 단계이며 기존 미리보기 workflow는 자동 업로드하지 않아요."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-csr-prepared-198",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"iOS build 3 배포 인증서 요청 파일 준비",summary:"Windows에서 RSA 2048/SHA-256 CSR 생성과 자체 서명·개인키 검사 완료. GitHub API secret 세 이름 등록 확인, 값과 API 인증은 미검사. 비밀 자료는 Git/작업판에 포함하지 않음. Apple 인증서(.cer)와 배포 프로파일(.mobileprovision) 발급 후 서명 자료 연결 필요. IPA/TestFlight 미완료. 앱 코드·버전 변경 없음, 번역 대상 추가 없음."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-signing-local-198",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Apple 인증서·프로파일 일치 및 로컬 P12 검사 완료",summary:"발급받은 배포 인증서와 로컬 개인키, 프로파일 인증서, Team/앱 ID, 배포 유형/유효기간 일치 검사 및 암호화 P12 생성·검증 통과. 만료 2027-09-04. 외부 전송은 보안 검토에서 차단되어 실행하지 않음. GitHub 서명 secret 저장에 대한 명시적 승인 대기. IPA/TestFlight는 미완료."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-testflight-198-build4",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"iOS 1.0.198 build 4 내부 TestFlight 업로드",summary:"dev에서 내부 테스트 전용 서명·업로드 경로 준비. Apple API 접근과 미사용 빌드 번호 확인 통과, Actions 33881610964에서 Mac 서명 빌드 진행 중. 정식 심사·외부 테스터 초대·공개 링크 생성은 하지 않음. Android 213 유지. 한국어·영어·일본어 첫 테스트 안내 제공, 전체 로그 번역률 미측정."});
window.SEORAP_DATA.updates=[
  {version:"1.0.198-ios-testflight",code:4,date:"2026-09-04",items:["iOS build 4 내부 TestFlight 빌드 시작; Android 1.0.198 / 213 유지","Apple API 접근·빌드 번호 중복 검사 통과. 서명·업로드 결과 확인 중","별도 요청 시에만 실행, 30분 제한·비밀값 없는 상태 파일 3일 보관. 정식 심사·공개 출시 없음","첫 테스트 안내 영어·일본어 각 100%, 전체 게임/로그 번역률 미측정"]},
  {version:"1.0.198-ios-signing-secrets",code:3,date:"2026-09-04",items:["승인받은 배포 서명 자료 세 항목을 GitHub Actions Secrets에 저장 완료","기존 P12 재사용·개인키 포함/인증서 일치 검사와 여섯 비밀 항목 이름 등록 확인, 기존 API 키 변경 없음","서명 빌드·TestFlight·심사 제출 미실행. 앱 1.0.198 / Android 213 / iOS build 3 유지; 신규 번역 대상 없음"]},
  {version:"1.0.198-ios-signing-local",code:3,date:"2026-09-04",items:["Apple 배포 인증서·프로파일 수령, 개인키/인증서/앱 ID 일치와 만료 검사 완료","로컬 암호화 P12 생성·검증 완료. CA 체인과 Xcode 서명 빌드는 별도 검사 필요","서명 자료의 GitHub 전송은 보안 검토 차단으로 미실행, 명시적 저장 승인 대기. 기존 API 키 변경 없음","앱 버전/번역 변경 없음; IPA/TestFlight 업로드 미실행"]},
  {version:"1.0.198-ios-signing-prep",code:3,date:"2026-09-04",items:["Apple 업로드 API 키 세 항목 이름 등록 확인(값/인증 미검사)","Windows 인증서 요청 파일 생성 및 서명·키 유효성 검사 완료; 개인키는 Git/OneDrive 밖에 암호화 보관","Apple 배포 인증서와 프로파일 발급 대기. IPA/TestFlight 미업로드, 앱 버전·Android 213·iOS build 3 유지"]},
  {version:"1.0.198-ios-cloud",code:3,date:"2026-09-04",items:[
    "맥 없이 iOS 앱을 빌드하는 클라우드 검사 추가; Android 213 유지",
    "필요할 때만 명시적으로 빌드 요청, 실행 상한 30분·진단 파일 보관 3일",
    "build 2·3 Xcode 컴파일 성공. iOS 준비판이 외부 로그인 SDK를 기다리지 않고 첫 캐릭터 화면으로 진입하도록 수정",
    "Apple 서명과 TestFlight 준비 자료를 한 묶음으로 문서화; 아직 IPA/스토어 업로드 아님",
    "첫 캐릭터 진입·ko/en/ja 안내·Android auth 동일성 검사 통과. 해당 안내 영어·일본어 각 100%, 전체 번역률 재측정 없음",
    "최종 클라우드 검사 성공: iPhone/iPad 설치·실행·프로세스 확인, iPhone 시작 화면 육안 검수. iPad 육안/실기기 기능 검증은 후속",
    "앱 dev와 작업판 main 반영. Apple 서명/IPA/TestFlight/스토어 업로드는 아직 미완료"
  ]},
  {version:"1.0.198-dev",code:213,date:"2026-09-04",items:[
    "집 정보·방 정보·구성원·편집 버튼 양끝이 잘리지 않도록 원화 비율과 버튼 폭 수정",
    "전체 테마 설정 제거, 검색과 방 종류/가구 종류 두 분류 줄 및 일정한 높이의 가구 목록",
    "검색칸·분류·가구 글자 겹침 수정, 선택 가구 편집 도구 두 줄 배치와 하단창 간격 확보",
    "ko/en/ja 모바일 화면과 관련 자동 검사 10개, Android APK/AAB 버전·파일 확인",
    "iOS 준비판 1.0.198/build 2에 공통 UI 반영. 신규 앱 등록 입력값 안내 작성; Apple 등록/서명/IPA/출시는 미완료",
    "이번 변경 영어·일본어 각각 100%. 앱 dev만 반영하며 운영 main·사이트·스토어 배포 변경 없음"
  ]},
  {version:"1.0.197-ios-preview",code:1,date:"2026-09-04",items:[
    "Android 1.0.197/code 212를 기준으로 iOS Xcode 프로젝트와 공통 게임 자산 준비; iOS build 1",
    "iOS 준비/검사 명령과 사이트·Google Play·App Store별 업데이트 절차 추가",
    "미설정 iOS 로그인·구매는 준비 중으로 구분하고 Google Play 호출 차단; Android 동작 유지 검사",
    "프로젝트/버전/필수 자산 검사 통과. Mac/Xcode 컴파일·서명·실기기 실행·IPA·TestFlight·스토어 제출은 미완료",
    "Apple 계정·로그인·결제·개인정보·최종 아이콘 연결은 후속 작업. 운영 main·사이트·Play 배포 변경 없음"
  ]},
  {version:"1.0.197-dev",code:212,date:"2026-09-04",items:[
    "Android 빌드에서 빠져 있던 발소리 파일 포함, 동시에 들리는 발소리를 최대 두 캐릭터로 제한",
    "방 사진을 프레임에 채우고 주인은 집 구성원 중 여러 명 또는 전체로 선택; 방 사이 중복 지정 가능",
    "출입 대상 전체/주인만/직접 지정 및 방문자·배달원·수리기사·반려생물 등의 설정·저장 UI 추가",
    "방·집·건물·구성원 편집에 명시적인 저장 버튼 보강, 사전/차 기존 저장 유지",
    "가구 이름 대비 개선, 나무무늬 없는 크림색 하단 가구창과 기본 테마 설정, 가로 버튼 잘림 개선",
    "‘변화가’를 ‘화가 남’으로 오인해 -28을 붙이던 오류 수정; 로그 인용 없이 기분 요인과 점수를 별도 표시",
    "새 문구 영어·일본어 각 100%. 전체 로그 번역은 후속 진행; 실기기 소리 청취·발열 및 새 출입 정책 이동 AI 적용 미검증",
    "dev APK/AAB 빌드와 관련 회귀검사 완료. 운영 main·사이트·Play 배포 변경 없음"
  ]},
  {version:"1.0.196-dev",code:211,date:"2026-09-04",items:[
    "캐릭터 전체설정 책의 종이 영역을 확장해 아래 아이콘·페이지 넘김까지 받치도록 수정",
    "구성원·방 목록을 건물정보 스타일의 크림색 판과 둥근 사각 사진 카드로 정리, 추가/선택 버튼 대비 개선",
    "방 편집의 입력 판·사진 샘플·체크박스 줄바꿈 및 사진 오류 대체 아이콘 개선",
    "가구창 높이 고정, 모든 테마 보기 3분할 에셋 버튼, 편집 글자 대비와 드래그 중 격자 표시",
    "집 생활 로그·요약을 한 스크롤 화면과 종이 카드로 정리하고 긴 문장 가로 넘침 수정",
    "한·영·일 메뉴 검사/모바일 화면/회귀검사/APK·AAB 확인. 기존 로그 일부 한국어 잔존은 후속 항목",
    "dev 전용. 결제 키·운영 사이트·Play 배포 변경 없음"
  ]},
  {version:"1.0.195-dev",code:210,date:"2026-09-04",items:[
    "구성원 메뉴에 구성원·반려생물·차를 한 번에 표시하고 각각 추가/편집 가능; 편집 뒤로가기는 구성원 화면으로 복귀",
    "제공 SVG의 원본 배경·사진 프레임·표면 샘플 각도·방 편집 배치 반영, 공통 스타일 충돌 정리",
    "집 하단 로그/요약 버튼 복구, 방 제목 색·크기·층 선택 제거(기존 값 보존)",
    "집 정보 사진과 마을 건물의 집 정보가 동일한 데이터를 사용하도록 연결",
    "영어·일본어 이번 변경 문구 각 100%; 기존 전체 UI/로그 번역률 미측정",
    "모바일 저장·복귀/언어별 화면·관련 회귀검사 통과, APK/AAB 생성 및 버전/서명 확인; dev 전용"
  ]},
  {version:"1.0.194-dev",code:209,date:"2026-09-04",items:[
    "집 정보·방 정보·구성원 정보·편집모드 메뉴와 하단 로그/요약으로 집 UI 1차 재구성",
    "방 검색·층 필터·방 편집 연결, 거주자·반려생물·자동차 편집 진입점 분리",
    "검색·분류·대상 방 선택 가능한 접이식 하단 가구창, 1/4칸 이동, 좌우반전·정면/좌/우 방향 저장",
    "커플 침대 일러스트 크기는 유지하고 선택 테두리를 이미지 비율에 맞춤; 옆모습 원화는 준비 대기",
    "마을 인물 위치 규칙과 옷장 하단 간격 반영; 마을 이벤트 캐시 재사용·숨김 로그 지연 생성·집 편집 중 갱신 중지",
    "책 원본 사용 형태 결정, SVG 추가 방 항목·세부 디자인, 실제 Android 발열/프레임 검증은 남아 있음",
    "새 집 편집 문구 영어·일본어 각 100%; 기존 전체 UI/로그 번역률은 이번에 다시 측정하지 않음",
    "회귀검사 및 APK/AAB 생성 완료; 앱 dev 전용이며 운영 main·사이트·Google Play는 변경하지 않음"
  ]},
  {version:"1.0.193-dev",code:208,date:"2026-09-03",items:[
    "2026-09-04: v1.0.193(code 208) debug APK·서명된 release AAB 생성 완료; 음식 이미지·개발판 회귀검사와 패키지 버전·208 자산 표식 확인 후 전달",
    "Android 음식 이미지 선택 흐름의 동일 사진 재선택·앱 복귀 누락 방지 수정 반영",
    "이미지 선택 전에 전체 사전을 저장하지 않고 현재 음식 초안만 안전하게 보존",
    "main 핫픽스만 dev 기존 작업과 충돌 없이 이식하고 전용·개발판 회귀검사와 전체 앱 패키징 검사 완료",
    "핫픽스 신규 오류 문구 영어·일본어 완료; 정적 UI 영어 74.8%, 일본어 74.8%",
    "앱 dev이며 운영 사이트·Google Play 배포는 변경하지 않음"
  ]},
  {version:"1.0.187.2-hotfix",code:207,date:"2026-09-03",items:[
    "Android에서 음식 추가 시 사진 선택기가 열리지 않거나 선택 결과가 사라지던 오류 수정",
    "사진 선택 요청마다 새 파일 입력을 사용해 같은 사진 재선택과 앱 복귀 뒤에도 정상 처리",
    "이미 저장된 data URL을 로컬 미디어 복원 완료로 잘못 집계해 편집 화면을 다시 그리던 문제 수정",
    "기존 음식·사진 데이터는 삭제하지 않고 유지",
    "음식 이미지·사전·버튼·동기화 회귀검사와 Android debug APK·release AAB 빌드 완료",
    "main 반영 완료; Play Console 업로드 전이며 핫픽스 신규 오류 문구 영어·일본어 완료"
  ]},
  {version:"1.0.192-dev",code:206,date:"2026-09-03",items:[
    "첫 동기화 뒤 변경된 캐릭터·날짜 기록만 전송하는 증분 동기화로 반복 동기화 시간과 서버 사용량 절감",
    "사진과 기존 게임 데이터를 삭제하지 않고 유지하며 구형 저장본도 첫 1회 변환 뒤 증분 방식 사용",
    "집 편집 가구 목록을 검색 가능한 모바일 하단창으로 변경하고 커플 침대를 실제 3겹 일러스트로 표시",
    "세로 배치 격자와 커플 침대 점유 크기를 키우되 잠든 캐릭터 크기는 고정하고 두 사람이 이불 안에 보이도록 배치",
    "커플 침대 수면 중 이름표·상태·ZZ를 숨기고 침대 크기 조절이 캐릭터 크기를 함께 키우지 않도록 분리",
    "연구·업무·독서처럼 혼자 집중하는 캐릭터가 같은 장소의 다른 인물 대화 상대로 잘못 표시되는 오류 수정",
    "캐릭터 전체 설정의 원본 책 비율·왼쪽 책등 복구, 감정 상세 페이지 통합과 인지·감각·상호작용 특성 위치 이동",
    "다중 선택을 3열 서랍마을 테마 버튼으로 정돈하고 취향 페이지 요약에 선택한 분류와 실제 항목 표시",
    "모호한 생활 리듬 기분 사유를 피로와 행동 속도를 설명하는 구체적인 문장으로 교체",
    "한국어·영어·일본어 변경 문구 100% 완료, 384×854 모바일 시각 검수·회귀검사와 Android APK/AAB 빌드 완료",
    "앱 dev이며 운영 main·사이트·Google Play 배포는 변경하지 않음"
  ]},
  {version:"1.0.183-server-hotfix",code:196,date:"2026-09-03",items:[
    "대용량 저장본이 분할 동기화 권한 오류 뒤 단일 문서 제한에 걸리던 서버 규칙 수정",
    "로그인한 사용자가 자기 계정의 동기화 코어·캐릭터·날짜별 기록에만 접근하도록 경로 제한",
    "사진과 기존 게임 데이터는 삭제하지 않고 v1.0.183(196) 앱에서 재설치 없이 즉시 적용",
    "규칙 컴파일·배포, 클라우드 병합·이미지 복구·v196 정서 회귀검사 완료",
    "서버 전용 핫픽스로 APK·AAB 및 versionCode 변경 없음; 신규 문구 없음, 영어·일본어 번역률 유지"
  ]},
  {version:"1.0.191-dev",code:205,date:"2026-09-02",items:[
    "캐릭터 설정에서 자폐·ADHD 같은 진단명 선택을 제거하고 집중·감각·소통·일상 방식의 구체적인 특성 선택으로 교체",
    "새 특성 선택을 성격과 분리해 신체·접근성 6쪽에 배치하고 제목과 선택지만 보이는 담담한 화면으로 구성",
    "성격 화면에는 이동 안내나 별도 설명 문구를 남기지 않고 기존 성격 설정만 표시",
    "선택한 생활 특성을 캐릭터 내보내기에서 별도 항목으로 표시하고 과거 진단명 값이 감정 기준을 추정하지 않도록 분리",
    "설정에서 고른 글꼴이 메인 화면의 이름·날짜·버튼·현재 행동을 포함한 공통 UI에 실제로 적용되도록 수정",
    "한국어·영어·일본어 변경 문구 100% 완료, 412×917 모바일 시각 검수와 관련 회귀검사 및 Android debug APK·release AAB 빌드 완료",
    "앱 dev이며 운영 main·사이트·Google Play 배포는 변경하지 않음"
  ]},
  {version:"1.0.189-dev",code:203,date:"2026-09-02",items:[
    "언어를 일본어에서 한국어로 되돌렸을 때 이미 생성된 생활 로그가 일본어로 남지 않도록 현재 언어로 다시 렌더링",
    "혼자 하는 일에 집중하는 장면과 다른 캐릭터와 함께 있는 장면이 동시에 표시되지 않도록 참여자와 행동 상태 정합성 보강",
    "잔잔한 공간을 이유 없이 지루해하던 기분 판정을 제거하고 실제 성향·행동·사건 근거가 있을 때만 지루함 표시",
    "관계창에서 먼저 고른 캐릭터를 항상 왼쪽에 고정하고 관계 화살표를 그 캐릭터의 대표색으로 표시",
    "‘서로 믿지 않고 거리를 두는 사이’와 신체·접근성 선택지를 영어·일본어로 번역",
    "영어·일본어의 긴 항목 때문에 캐릭터 전체설정 3쪽과 6쪽 제목·선택지·칩이 겹치거나 잘리던 배치 수정",
    "마을 전환창에 새 마을 추가 버튼을 연결해 모바일에서도 바로 마을 생성 가능",
    "무료 OFL 일본어·한자 글꼴 M PLUS Rounded 1c를 앱에 내장하고 설정에서 기존 글꼴과 함께 다시 선택·저장 가능",
    "Google Play 홍보 이미지용 한국어·영어·일본어 문구 정리",
    "모바일 폭 시각 검수, 언어·장면·정서·시각 회귀검사와 Android debug APK·release AAB 빌드 완료",
    "이번 요청 범위 영어·일본어 번역 100%. 앱 dev이며 운영 main·사이트·Google Play 배포는 변경하지 않음"
  ]},
  {version:"1.0.188-dev",code:202,date:"2026-09-02",items:[
    "두 캐릭터의 공동 대화를 같은 사건 ID·시각·참여자로 확정해 한쪽이 대화 중인데 상대는 다른 행동을 하던 표시 수정",
    "같은 사건에서도 각 인물의 방향별 관계 설정으로 감정을 따로 계산해 젠할린의 복잡한 끌림과 집소필라의 편안함처럼 서로 다른 감정 유지",
    "애정·성가심·거친 말 충동·감정 오해가 섞인 복잡한 끌림과 복잡한 애정, 애증, 애틋함, 강한 반감 등 관계 감정 세분화",
    "우호적인 사람과 같은 공간에 있으면 편안함이, 싫어하거나 불신하는 사람과 같은 공간에 있으면 경계·반감이 생기도록 동석 효과 추가",
    "기분 이유에 실제 상대와 행동 로그를 연결하고 화남·슬픔·성공·피로 같은 구체 사건은 관계의 평소 감정보다 우선 반영",
    "‘청춘을 골라 기분을 바꾸는 중’ 같은 추상 로그를 청춘 장르의 책을 읽고 인물·사건을 따라가며 책갈피를 끼우는 실제 행동으로 교체",
    "자는 동안은 성격·관계 감정을 계산하지 않고 ‘수면 중’으로만 표시",
    "영어·일본어 관계 감정·행동 로그 반영 및 공동 장면·감정 다양성·수면·Android 패키지 회귀검사 완료",
    "1.0.188 / 코드 202 개발판. 앱 dev이며 운영 main·사이트·Google Play 배포는 변경하지 않음"
  ]},
{version:"1.0.187.1",code:201,date:"2026-09-02",items:["웹의 앱·화면·상태 모듈이 서로 다른 저장 상태를 읽던 캐시 키 불일치를 제거해 메뉴와 통계 등 버튼이 누른 즉시 같은 화면 상태를 표시","전체 27개 자바스크립트 모듈의 캐시 키를 하나로 검사하고 이후 불일치가 생기면 배포 빌드를 중단하도록 방어 검사 추가","감정 계산기가 실제 a/b 관계와 캐릭터별 상대 인식을 읽어 연인·부부·깊은 사랑을 기분 완충과 행동 이유에 반영","사랑하는 상대와의 가벼운 다툼은 격분 대신 구체적인 사건에 대한 서운함으로 표시하고 사랑이 지속됨을 함께 기록하되, 폭력·배신 같은 중대한 사건의 실제 분노는 유지","‘불편하지 않도록’, 착용감, 공간 불편처럼 분노가 아닌 문장을 화남 사건으로 오인하지 않도록 판정 범위 수정","새 감정 이름과 사유를 한국어·영어·일본어로 적용; 정적 UI 영어·일본어 각 74.3%","전용·기존 정서·침대·통계·조명 회귀검사, 27개 웹 모듈 배포 검사와 Android debug APK·release AAB 빌드 완료","앱 main/dev와 작업판 main 반영 및 운영 사이트 배포 대상, Google Play 미배포"]},
{version:"1.0.187",code:200,date:"2026-09-02",items:["2인 침대를 30% 확대하고 두 사용자의 좌우 자리·베개 위치·회전·캐릭터 크기를 침대 배율에 맞춰 조정","빈 침대·이동은 바탕·이불·발판 3장이 한 묶음이고, 위에 눕기와 이불 안에서 상태별 앞뒤 레이어 순서 유지","카페·병원·피아노 공연장·오피스·공원·빨간 지붕 집의 제공받은 투명 PNG 원본과 조명 12장을 추가 가공 없이 그대로 교체","건물 조명 코어와 번짐을 가산 발광(plus-lighter, screen fallback)으로 합성","통계 본문 안의 중복 뒤로가기 버튼을 제거하고 공통 나무 상단바를 고정해 상단바 아래 보고서만 스크롤","통계 범위 선택과 보고서 다운로드를 원본 좌·중앙·우 그림 조각으로 늘어나는 3분할 버튼으로 적용하고 그래프·카드 비율 유지","전용 검사·조명 회귀검사, 412×917 시작·스크롤 모바일 시각 검수와 Android debug APK·release AAB 빌드 완료","웹 캐시 표식을 코드 200으로 갱신하고 배포 누락 모듈을 포함한 전체 의존 모듈 27개를 검사해 Cloudflare 운영 사이트 정상 시작 확인","새 문구 없음. 기존 통계 영어·일본어 번역 유지; 정적 UI 영어 74.3%, 일본어 74.2%. 앱 dev/main과 작업판 main 반영 및 운영 사이트 배포 완료, Google Play 미배포"]},
  {version:"1.0.186-dev",code:199,date:"2026-09-02",items:[
    "통계 화면에 다른 탭과 같은 원형 나무 뒤로가기 버튼을 적용하고 범위 탭이 가려지지 않도록 배치 교정",
    "보고서 다운로드 버튼을 문서 흐름에 넣어 통계 카드와 하단 내용을 덮지 않도록 수정",
    "캐릭터 설정 7쪽에서 작업복·수영복·잠옷·파티복과 복잡한 액세서리 착용 성향 제거",
    "액세서리 착용 여부와 평소 외모 관리 정도를 새로 추가하고 선택 행 사이 간격 확대",
    "액세서리 설정은 자동 코디에, 외모 관리 설정은 아침 준비 시간과 구체적인 행동 로그에 반영",
    "캐릭터 전체설정 책 왼쪽 페이지를 가리던 회색 나무 모양을 배경 원화에서 제거",
    "전용·생활·정서·성능 회귀검사, 430×932 모바일 브라우저 시각 검수와 Android APK/AAB 빌드 완료",
    "정적 UI 영어 74.3%, 일본어 74.2%. 1.0.186 / 코드 199 개발판이며 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.185-dev",code:198,date:"2026-09-02",items:[
    "카페·병원 원화를 해당 건물 영역만 다시 재단해 아래쪽의 다른 건물 조각과 외곽 흰 테두리 제거",
    "카페 컵 손잡이 안쪽을 투명하게 열고 카페·병원 조명 레이어를 새 재단 좌표와 정확히 정렬",
    "2인 침대를 기존보다 22% 확대하면서 바탕·이불·발판 3개 레이어의 이동과 사용 상태별 앞뒤 순서 유지",
    "마을에서 정지해 있던 대기·쇼핑 캐릭터에 작은 호흡과 동작 애니메이션 추가",
    "기분의 긍정·분노·슬픔 원인을 추상 문구 대신 실제 사건 제목과 설명으로 표시하고 연결된 행동 로그의 시간·제목·내용 제공",
    "캐릭터 설정 7쪽에 액세서리 착용 성향을 추가하고 자동 의상과 집 생활 행동의 액세서리 선택에 반영",
    "건물 투명 영역 자동 검사, 생활·정서 회귀검사, 모바일 브라우저 시각 검수와 Android APK/AAB 빌드 완료",
    "정적 UI 영어·일본어 각 73.7%. 1.0.185 / 코드 198 개발판이며 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.184-dev",code:197,date:"2026-09-02",items:[
    "2인 침대를 바탕·이불·발판 3개 정렬 레이어로 적용하고 가구 이동 시 한 덩어리로 이동",
    "일반 이동 중에는 캐릭터가 침대 전체 위에, 침대 사용 중에는 발판 뒤에, 잠들면 이불 안에 보이도록 상태별 레이어 분리",
    "두 캐릭터의 좌우 배치 선호를 지키고 선호가 같으면 안정적인 무작위로 자리를 나누며 머리는 베개 위치에 맞춤",
    "카페·병원·피아노 공연장·웨딩드레스 부티크·경기장·오피스·학교 2종·호텔·도서관·중립 건물·기본 주택·공원 원화 적용",
    "카페·병원·피아노 공연장·오피스·기본 주택·공원 조명을 원화와 같은 좌표로 적용",
    "바깥과 연결된 흰 배경만 투명하게 하고 윤곽선 안의 흰 건물 면은 불투명하게 보존",
    "신규 기능 검사와 브라우저 시각 검수 완료. 새 문구 영어·일본어 번역 반영",
    "1.0.184 / 코드 197 개발판. 앱 dev, 작업판 main이며 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.183-dev",code:196,date:"2026-09-02",items:[
    "캐릭터 설정 9쪽의 선택 항목 간격을 넓히고 라벨 글자를 키워 384×854 화면에서도 읽기 쉽게 정리",
    "평소 정서를 낙천적·쾌활함·열정적·다정함·유혹적·차분함·현실적·무덤덤함·냉소적·까칠함·예민함·불안함·침울함·비관적·분노를 품음 등 19가지로 확장",
    "정서 민감도와 주변 감정 영향을 9쪽에 추가하고 사건 점수와 동행인의 기분이 캐릭터별 반응 세기를 다르게 만들도록 연결",
    "좋아하는 것과 싫어하는 것이 현재 행동·장소·대화에 등장하면 실제 기분 점수와 이유에 반영",
    "들뜸·애정·호기심·유혹·까칠함·혐오·격분·상처·외로움·실망·침울·피곤·안도·만족 등 기분 라벨과 후속 행동을 세분화",
    "성격에 맞는 유혹·분노 조절·까칠함·호기심·선호 활동 장면과 한국어·영어·일본어 생활 로그 추가",
    "11쪽의 좋아하는 것과 좋아하는 것 사전을 한 선택창으로 합치고 기존 자리에 싫어하는 것 선택 추가",
    "좋아함·싫어함 하위 항목의 선택 완료 시 11쪽으로 닫히지 않고 바로 이전 분류 선택창으로 복귀",
    "전용 검사 28개와 기존 정서·취향·성능·로그 연속성 회귀검사, 384×854 실화면 검수 통과",
    "Android 웹 동기화와 debug APK·release AAB 빌드 완료",
    "새 UI·기분 사유·행동 로그 한국어·영어·일본어 완료",
    "1.0.183 / 코드 196 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.182-dev",code:195,date:"2026-09-02",items:[
    "캐릭터 설정 9쪽의 제목·설명·선택 항목을 하나의 흐름 레이아웃으로 묶어 384×854 화면의 글자 겹침 제거",
    "8쪽의 사회성·인지·판단·계획·활동 속도·부지런함·정리 습관·갈등·애정 표현·생활 리듬·유머를 상황별 기분 계산에 반영",
    "같은 성격값을 행동 주도권과 생활 로그의 행동 방식·묘사에도 연결",
    "건물 드레스코드에서 ‘유니폼 착용 필수’ 화면과 이벤트 제거, 이전 저장값도 건물에서는 무시",
    "집을 처음 열 때 이미 가구를 사용하는 캐릭터가 먼 위치로 순간이동한 뒤 다시 걸어오던 문제 수정",
    "집 화면을 계속 관찰하는 동안 실제 행동 장소가 바뀔 때만 걷기 재생",
    "전용 검사 24개·집 생활 검사 70개와 기존 취향·업적·정서 회귀검사 통과",
    "Android 웹 동기화와 debug APK·release AAB 빌드 완료",
    "새 기분 사유 한국어·영어·일본어 완료",
    "1.0.182 / 코드 195 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.181-dev",code:194,date:"2026-09-02",items:[
    "좋아하는 것·좋아하는 것 사전·소지품 팝업의 긴 목록을 내부 독립 스크롤로 변경해 마지막 항목까지 열람 가능",
    "팝업 하단 닫기 버튼은 목록 스크롤과 분리하고 Android 하단 안전 영역을 반영",
    "사전 항목 및 다중 선택 팝업에도 같은 높이·스크롤 제약을 적용",
    "팝업 제목과 × 버튼을 같은 줄에 배치하고 작은 화면에서 제목이 자연스럽게 줄바꿈되도록 교정",
    "전역 상단바 스타일이 기분과 정서 성향 설명을 네모 상자로 만들고 선택 항목을 가리던 구조 수정",
    "기분과 정서 성향의 불필요한 하단 안내 상자 제거",
    "384×854 실화면 검수, 신규·업적·정서·캐릭터 UI·내비게이션·성능 회귀검사와 Android debug APK·release AAB 빌드 통과",
    "새 번역 문구 없음. 기존 한국어·영어·일본어 유지. 전체 정적 UI 영어·일본어 각 73.5%",
    "1.0.181 / 코드 194 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.180-dev",code:193,date:"2026-09-02",items:[
    "첫 캐릭터·첫 건물/집·첫 공식 관계·첫 사용자 사전 항목을 표준 업적으로 추가",
    "캐릭터 5명·건물/집 10개·마을 3개를 단계형 업적으로 추가",
    "한 캐릭터의 모습·기본 생활·신체·성격·취향·옷장 6개 설정 장을 완성하는 단계형 업적 추가",
    "설정에 업적 메뉴를 추가하고 8개 업적의 달성 여부와 현재 진행도를 월드별로 저장",
    "Android Google Play 게임즈 v2 로그인, 표준 업적 해제, 단계 동기화와 기본 업적 화면 연결",
    "Play Console ID가 없는 개발 빌드는 외부 호출을 막고 로컬 달성 기록을 유지해 나중에 재동기화 가능",
    "계정별 월드 분리·성능·내비게이션·Android 자산·업적 전용 회귀검사와 Android debug APK·release AAB 빌드 통과",
    "새 업적 이름·설명·상태 화면 한국어·영어·일본어 완료. 전체 정적 UI 영어 73.7%, 일본어 73.7%",
    "1.0.180 / 코드 193 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.179-dev",code:192,date:"2026-09-01",items:[
    "음수 기분 점수가 낙천적 성향 때문에 ‘기분 좋음’으로 뒤집히던 오류 수정",
    "화남·슬픔·긴장·피곤·지루함에 따라 다음 자유 행동을 거리 두기·회복·확인·휴식·활동 전환으로 변경",
    "기분과 정서 성향 입력칸을 머리말 아래로 이동해 겹침 제거",
    "옷장 SD·LD를 직접 끌고 두 손가락으로 확대·축소·회전하는 배치 편집 추가",
    "옷의 ‘유니폼으로 등록’과 건물·일정의 ‘유니폼 착용 필수’ 의미를 구분해 안내",
    "짧은 말씨름은 12분, 일반 대화는 25분 뒤 끝나고 같은 상호작용의 즉시 반복 방지",
    "심야 아침 식사·식사 준비 차단 및 캐릭터별 야식 습관 선택 추가",
    "한국어·영어·일본어 반영, Android 개발 APK·AAB 생성"
  ]},
  {version:"1.0.178-dev",code:191,date:"2026-09-01",items:[
    "새 월드는 사전의 모든 분류와 기본 카페·음식점 판매 목록이 빈 상태로 시작하고, 기존 월드의 사용자 저장 항목은 보존",
    "기분·정서 성향 화면의 제목·선택 항목 겹침을 없애고 분노 반응과 유혹·호감 신호 반응을 추가해 실제 기분 계산에 반영",
    "옷장 SD·LD가 옷 레이어가 아닌 캐릭터 전체 그림 교체라는 안내를 추가하고 SD와 LD의 가로·세로·크기를 각각 저장",
    "캐릭터 1쪽에 서랍마을 기본 전체 테마와 고급 LD 옷장 바로가기를 추가하고 프로필 사진을 액자형으로 구분",
    "캐릭터 책의 잉크병도 저장 버튼으로 작동하고 양말 짝 맞추기·빨래 정리 같은 집안일을 마을 행동 애니메이션으로 표시",
    "통계 보고서를 전체·마을별 범위, 마을·건물·캐릭터 수, 연령대·성비 피라미드, 평균 생활·신체 수치, 성격 분포와 사회 지표 순서로 재구성",
    "월간 일정은 열 때 현실의 현재 달로 이동하고 오늘 날짜를 강조하며 언제든 오늘로 돌아가는 버튼 제공",
    "신규·캐릭터 정서·성능·사전 일정 회귀검사와 Android debug APK·release AAB 빌드 통과",
    "정적 UI 번역 영어 73.7%, 일본어 73.7%. 이번에 추가한 화면 문구는 영어·일본어 동시 반영",
    "1.0.178 / 코드 191 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.177-dev",code:190,date:"2026-09-01",items:[
    "캐릭터 성격 8쪽과 기존 상세 페이지 사이에 감정 성향 9쪽을 추가하고 뒤 페이지 번호를 순서대로 이동",
    "기본 정서·기분 변화 폭·지속 시간·좋은 일 반응·스트레스 반응·회복 방식을 캐릭터별로 저장",
    "낙천적인 캐릭터는 평범한 상황에서 무덤덤함으로 임의 변경되지 않고, 스트레스는 성격별 긴장·걱정·가라앉음 등으로 표현",
    "캐릭터 전체설정에서 보이지 않는 모바일 허브·데스크톱 편집기·비활성 대화상자를 동시에 만들지 않도록 렌더 구조 분리",
    "캐릭터 책의 입력·선택·추가 버튼을 3쪽과 같은 눌리는 입체 버튼 계열로 통일",
    "건물 드레스코드를 별도 선택창으로 바꾸고 색상·재질·분위기를 각각 3열로 선택",
    "영어·일본어 UI에서 한국어로 남아 있던 생성 생활 로그를 행동 의미에 맞춰 번역하는 폴백 적용",
    "신규·성능·기존 버그·Android 자산 회귀검사와 Android debug APK·release AAB 빌드 통과",
    "정적 UI 번역 영어 73.4%, 일본어 73.3%. 이번 감정 화면과 생성 로그는 영어·일본어 동시 반영",
    "1.0.177 / 코드 190 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.176-dev",code:189,date:"2026-09-01",items:[
    "좋은 마을·깨끗한 집·좋은 관계·어울리는 옷의 긍정 점수가 계속 쌓이지 않도록 생활 기반 완충 효과를 최대 +5로 제한",
    "평범한 장면은 날짜별 컨디션과 생활 리듬에 따라 차분함·무덤덤함·평온함·긴장함으로 나뉘고 좋은 환경만으로 자동으로 들뜨지 않도록 조정",
    "기상 습관이 느린 캐릭터의 기상 직후 몽롱함과 평소 취침 시각 직전 집중력 저하 반영",
    "좋은 사건·다툼·슬픈 사건·피로·업무 압박이 생활 환경보다 강하게 현재 기분을 결정하도록 우선순위 조정",
    "온화·다정·낙천·침착한 성격은 평범한 컨디션 저하를 완만하게, 예민·불안 성향은 긴장으로 더 크게 받아들이도록 성격 보정",
    "화남은 실제 다툼·분노 사건에만 표시하고 ‘불편한 점이 없었는지 확인함’ 같은 배려 문장을 화남으로 오인하지 않도록 수정",
    "평범한 장면 180개 표본에서 좋은 기분 9개(5%), 긴장·불편 계열 27개(15%)로 분포 검사 통과",
    "새 기분 사유 한국어·영어·일본어 동시 반영, 성능·일정·조명 회귀검사와 Android APK·AAB 빌드 통과",
    "1.0.176 / 코드 189 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.175-dev",code:188,date:"2026-09-01",items:[
    "캐릭터 11쪽 옷장을 사전과 같은 검색·필터·3열 아이콘 목록으로 재배치하고 휴대폰 화면 겹침 수정",
    "옷 분류 입력 제거, 유혹적임 기분 태그 추가, 색·재질·분위기를 별도 다중 선택창으로 편집",
    "SD 아이콘은 정사각형, LD는 세로 전신 비율로 표시해 등록 그림이 눌리지 않도록 수정",
    "건물과 주간·월간 일정에 격식·필수 유니폼·허용 색·권장 재질·분위기 드레스코드를 설정하고 자동 의상에 반영",
    "행동·마을과 건물 환경·집·관계·업무 스트레스·옷을 함께 계산해 기분 이유를 구체화하고 중립 기분을 다양화",
    "감정을 절제하는 캐릭터는 좋은 사건에서도 갑자기 들뜨지 않고 만족함이나 기분 좋음으로 표현",
    "마을과 건물 안 인물에게 식사·음악·공부·업무·운동·대화·쇼핑·진료·청소·휴식별 행동 표시와 움직임 적용",
    "행동 이모지의 검은 점, 건물 뒤 그림자, 임시 빨간 지붕 집 제거",
    "카페·병원·피아노 음악당·공원·빨간 지붕 집을 원본 경계대로 재추출하고 병원 흰색 건물 면 보존",
    "영어·일본어 신규 UI 번역, 384×854 시각 검사와 회귀검사 5종 및 Android APK·AAB 빌드 통과",
    "1.0.175 / 코드 188 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.174-dev",code:187,date:"2026-09-01",items:[
    "캐릭터 11쪽에 자유 옷장 추가. 사용자가 옷 이름·SD 아이콘·LD·상황·기분·보온·격식·편안함·필수 유니폼 조건을 등록",
    "현재 생활 상황과 조건에 가장 잘 맞는 옷을 홈 그림에 자동 적용하고 일치하는 옷이 없으면 기본 아이콘·LD 사용",
    "두 인물이 실제 같은 장소에 있을 때만 공동 장면 생성. 같은 사건·장소를 공유하면서 각 인물 시점에 맞는 제목과 설명을 따로 기록",
    "미뤄 둔 약속 갈등을 출발 시각·식사 예산·갑작스러운 취소 같은 구체적 쟁점과 타협 내용으로 교체",
    "행동·피로·장소·마을 분위기·성격·시간 변화를 함께 계산해 평온함에 치우치던 기분을 다양화",
    "마을과 건물의 인지도와 긍정·부정 평판을 서로 다른 설정으로 분리",
    "카페·병원·피아노 공연장·공원·빨간 지붕 집 원화의 이웃 스프라이트 선을 제거하고 건물·불빛 크기와 위치를 일치",
    "캐릭터 책 1·3·11쪽 버튼 배치와 옷장 편집창을 정돈하고 이번 신규 UI 영어·일본어 번역 완료",
    "신규 187 검사와 계정·선물·성능·마을·생활 로그 회귀검사 및 Android APK·AAB 빌드 통과",
    "1.0.174 / 코드 187 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.173-dev",code:186,date:"2026-09-01",items:[
    "로그인 계정 확인이 끝나기 전에 빈 새 월드 화면이 먼저 열리지 않도록 시작 흐름 수정",
    "동기화에서 실제 마을별 건물 목록을 우선하고 같은 건물 ID를 한 마을에만 귀속해 여러 마을의 건물이 합쳐지는 문제 수정",
    "사용자가 그린 피아노 공연장·공원·빨간 지붕 집과 각각의 불빛 레이어 추가. 위치·크기·좌우반전·점등 시간을 건물과 함께 유지",
    "수면·아침 준비·욕실·업무·외출·기쁨·슬픔·분노·피곤 상태별 SD 아이콘과 LD 이미지 설정. 미설정 상태는 기본 이미지 사용",
    "애니메이션 좌우 배치 설정을 관계창에서 캐릭터 전체설정 3쪽 상단으로 이동하고 5단계 선택 팝업 제공",
    "마을 건물 목록에 집 추가 분리. 집 설정은 이름·용도·층·소유·거주 같은 내부 정보, 마을 건물 설정은 외관·모양·지도 크기·평판·조명 담당",
    "신규 186 검사와 계정 분리·마을 조명·저장 복구·생활 로그·성능·캐릭터 UI 회귀검사 및 384×854 Android 화면 검증 통과",
    "1.0.173 / 코드 186 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.172-dev",code:185,date:"2026-08-31",items:[
    "같은 마을의 건물을 개별 ID로 동기화해 한쪽 저장본에서만 보이는 건물 보존. 직접 삭제한 건물과 다른 계정은 제외",
    "건물 목록에 건물 복구 추가. 현재 계정의 기기 복구본에서 찾은 건물을 선택해서 복구",
    "건물 목록을 사전형 종이 카드로 변경하고 검색·마을/유형 필터·마지막 추가 칸 제공. 상세 편집의 세로 스크롤 복구",
    "애니메이션 좌우 배치를 캐릭터 탭으로 이동. 반드시/되도록 왼쪽·무작위·되도록/반드시 오른쪽 지원",
    "캐릭터 10페이지 버튼의 클릭 차단 해제와 책 위 배치, 선택 때 전체 화면 재생성 제거",
    "상점 상품·탭을 목재와 차분한 금색으로 정돈하고 선택 버튼은 노란색으로 표시. 신규 번들 판매 없음",
    "인게임 사전 일러스트는 전체 비율, 사용자 사진은 둥근 정사각형. 마을 정보 배경은 선택한 마을 그림을 흐리게 표시",
    "현재 기분과 이유 표시. 마을/건물 평판·분위기·휴식·갈등을 반영하며 공동 대화에 장소의 분위기와 마을 평판 주제 추가",
    "앱 dev 개발판이며 운영 main·Google Play 배포와 구분. 집 진입 오류는 가상 데이터에서 재현되지 않아 실제 계정 확인 필요"
  ]},
  {version:"1.0.171-dev",code:184,date:"2026-08-31",items:[
    "사전을 제공된 원화의 나무·기울어진 책·잉크병·버튼 배치로 변경. 휴대폰 3열, 넓은 화면 6열",
    "검색·종류·이용 장소·정렬과 물품 추가. 사진은 인게임 일러스트·링크·기기 업로드에서 선택",
    "별점 0.5 단위 지원 및 물품의 빛·반짝임·떠오름·흔들림 효과",
    "서랍상점 목재 간판 정돈. 신규 번들 판매 상태는 변경하지 않음",
    "알림 예약 때 제목·본문·대상을 함께 저장해 우편에서도 같은 내용 표시",
    "건물·집 삭제 후 건물 목록 복귀 및 마을 제목 위치 조정",
    "게임 버튼·그림의 파란 터치 강조와 길게 누르기 메뉴 제거. 입력 선택과 키보드 포커스 유지",
    "사전 30개씩 표시·건물 상세창 지연 생성·원본 이미지 추출로 반복 렌더와 용량 절감",
    "회귀검사 29/32 통과(기존 기대값 실패 3종). 정적 UI 영어·일본어 각 73.6%",
    "1.0.171 / 코드 184 개발 APK·AAB 생성. 앱 dev, 작업판 main; 운영 main·Google Play 배포 아님"
  ]},
  {version:"1.0.170-dev",code:183,date:"2026-08-31",items:[
    "생활 장면의 이름·조사 반복 계산을 줄이고 사전을 6열 아이콘 + 선택한 물품만 편집하는 팝업으로 변경",
    "첫 마을의 식별자와 삭제 기록을 안정화해 재실행·동기화 때 마을과 건물이 되살아나는 경로 차단",
    "마을 정보에서 다른 마을 열람·삭제. 주민과 집은 남은 마을로 이동하며 마지막 마을은 삭제 불가",
    "건물 상세 편집에서 건물·집 삭제 지원. 집 사진 표기는 집 일러스트나 가족사진을 넣는 안내로 변경",
    "캐릭터 생성 시작 화면을 휴대폰·태블릿 높이에 맞춰 스크롤 없이 표시",
    "과묵한 직설체·냉정한 격식체 추가. 새 말투의 안부·고민·휴식 등은 끝 문장까지 적용하고 예약 알림 갱신",
    "진행 중인 일정에서 미래의 귀가 장면이 먼저 선택되던 오류 수정",
    "새 관리 회귀검사 통과, 기존 30종 중 27종 통과(이전 기대값 실패 3종 유지). 정적 UI 번역 영어·일본어 각 72.9%",
    "앱 dev 183 / 1.0.170, 작업판 main 반영. 운영 main·Google Play 배포는 별도"
  ]},
  {version:"1.0.169-dev",code:182,date:"2026-08-31",items:[
    "불러오기 중 backup-storage-full 오류가 날 때 기기 저장본을 무손실 압축해 재시도. 캐릭터·사진·계정별 복구본은 임의 삭제하지 않음",
    "사용자가 그린 숲·연못으로 첫 화면을 구성하고 ‘첫 캐릭터 만들기’와 ‘내 마을 불러오기’를 분리. 휴대폰·태블릿 폭에 맞는 배치 및 언어 선택",
    "계정·백업 메뉴에 Google 저장·불러오기를 함께 표시하고 복원 중에는 첫 생성 버튼을 잠금",
    "추천 선물에서 주는 사람과 받는 사람이 뒤바뀌거나 자기 자신에게 주던 장면 수정. 두 사람의 시간·장소와 실제 역할을 공유",
    "선물을 받는 인물의 좋아하는 물품·향조, 전달자에 대한 감정·신뢰에 따라 반응. 물품은 받는 사람에게 한 번만 지급",
    "새 화면과 선물 반응 영어·일본어 적용. 기존 정적 UI 번역 지표는 각각 72.6%이며 동적 로그 전체 번역률과 구분",
    "개발 브랜치 dev 182 / 1.0.169. 운영 main·Google Play 업로드는 별도"
  ]},
  {version:"1.0.168-dev",code:181,date:"2026-08-31",items:[
    "계정별 기기 저장·복구본·초기화를 분리해 새 계정에서 만든 캐릭터가 이전 계정에 섞이는 경로를 차단",
    "로그아웃 뒤 늦게 도착한 이전 계정의 저장·불러오기 응답을 차단하고, 이미 섞인 캐릭터는 임의 삭제하지 않음",
    "사용자가 그린 숲·연못 마을 배경 복구 및 완성된 카페·병원 원화 적용",
    "기기 현실 시간에 따라 새벽·낮·노을·밤 분위기를 바꾸고, 별도 불빛 레이어에 부드러운 빛 번짐 적용",
    "건물 정보에서 점등·소등 시각과 항상 켜기·끄기 설정. 기본 18:00~06:00, 불빛은 건물 이동·확대·반전에 맞춰 함께 배치",
    "태블릿 배치 도구가 상단 뒤로 숨어 다른 버튼이 눌리던 위치 문제 수정",
    "조명은 분 단위 갱신, 백그라운드에서는 중단. 새 문구 영어·일본어 번역과 휴대폰·태블릿 검수",
    "UI 문자열 정적 측정: 영어 1854/2552, 일본어 1853/2552(각 72.6%). 직접 번역 사전도 포함하도록 측정 방식 보완",
    "개발 브랜치 dev 변경이며 운영 main/Google Play 배포는 별도로 진행"
  ]},
  {version:"1.0.143-dev",code:155,date:"2026-08-26",items:[
    "캐릭터 전체설정 책을 제공된 SVG의 외곽 좌표와 콘텐츠 그룹 각도로 다시 맞춰 왼쪽 배경 노출과 개별 요소 기울기 불일치 제거",
    "프로필·LD·아이콘 사진이 없을 때 검은 점선 테두리와 가운데 사진 추가 안내를 표시하고 직업·출근 장소 입력 겹침 수정",
    "개요와 신체 모든 페이지의 번호·이전·다음 화살표 높이를 통일하고 신체 5쪽 조작부가 책 밖으로 나가지 않게 고정",
    "자연 모발 선택 시 현재 머리색과 본래 머리색을 자동 동기화",
    "생활습관과 행동 습관을 성격과 겹치지 않는 카테고리별 복수 선택창으로 정리하고 관련 생활 로그에 반영",
    "식습관이 일반 성격 로그에 섞이지 않고 아침·점심·저녁 식사 장면에서만 전용 행동 로그로 나타나도록 분리",
    "캐릭터마다 독립된 이동 시작 시각을 갖게 하고 여러 명이 이동할 때도 각 캐릭터별 시간차로 새 구두 발소리를 재생",
    "새 설정과 로그의 한국어·영어·일본어를 적용하고 384×854 실화면·캐릭터 UI·데이터·로그·집 생활 회귀검사 및 APK/AAB 빌드 완료"
  ]},
  {version:"1.0.142-dev",code:154,date:"2026-08-26",items:[
    "캐릭터 전체설정 책의 왼쪽 면이 화면 밖으로 잘리지 않도록 책 전체 좌표를 안쪽으로 조정",
    "주 색상·보조 색상·색상 코드 입력을 독립된 두 행과 고정 열로 나눠 가로·세로 겹침 제거",
    "하단 모양 책갈피를 제거하고 개요·신체 입력 및 복수 선택 필드의 간격과 터치 높이 정돈",
    "머리카락 형태를 뜻하는 곱슬기와 촉감·건조함·윤기 등 상태를 뜻하는 머릿결을 별도 설정으로 분리",
    "곱슬기 선택에 따라 직모·반곱슬·웨이브·곱슬·코일형 머리 선이 즉시 바뀌고 현재 머리색도 미리보기에 반영",
    "왼쪽·오른쪽 눈 색상 선택을 독립된 눈 색 목록과 연결하고 두 눈의 미리보기 색을 각각 즉시 반영",
    "기존 직모·곱슬 저장값을 새 곱슬기 선택지로 안전하게 변환하고 프로필 내보내기·통계에도 두 값을 각각 반영",
    "새 설정의 한국어·영어·일본어를 적용하고 384×854 실화면·캐릭터 UI·데이터 복구·Android 자산 회귀검사 및 APK/AAB 빌드 완료"
  ]},
  {version:"1.0.141-dev",code:152,date:"2026-08-26",items:[
    "캐릭터 전체설정 책 옆면이 화면 밖에서 잘리지 않도록 책 표면의 크기와 기준 위치를 조정",
    "주 색상·보조 색상·색상 코드 입력이 겹치지 않게 세 열로 분리하고 그라데이션 선택 줄의 높이와 간격 개선",
    "개요와 신체 페이지의 제목·입력 글자를 키우면서 원본 SVG 기준 정렬 유지",
    "눈 특징·헤어스타일·머리 장식·체모 위치 복수 선택 필드를 더 두껍게 만들고 각각 독립 선택창으로 연결",
    "신체 5쪽의 눈과 머리카락 설정을 위로 정돈하고 체모 정도 및 위치별 복수 선택 항목 추가",
    "기기 이미지 저장소가 정리되어 로컬 사진을 찾지 못할 때 동기화된 클라우드 사진을 다시 복원하도록 수정",
    "새 신체 항목의 한국어·영어·일본어를 적용하고 384×854 실화면·미디어 복구·집 생활·클라우드 병합·성능 회귀검사 및 Android APK/AAB 빌드 완료"
  ]},
  {version:"1.0.121.3-hotfix",code:153,date:"2026-08-26",items:[
    "앱이 종료된 사이 기기 이미지 저장소가 정리되면 오래된 로컬 이미지 참조가 동기화 사진을 다시 덮어쓰던 오류 수정",
    "로컬 원본을 찾지 못해도 유효한 클라우드 사진 주소가 있으면 이미지 복원 단계에서 우선 사용하도록 개선",
    "과거 Android 개발 빌드에서 사용했을 수 있는 코드 134 대신 Play Console에서 다시 사용할 수 없는 버전 코드 충돌을 피하도록 코드 153으로 재발급",
    "미디어 복구·집 생활·클라우드 병합·성능 회귀검사와 Android APK/AAB 빌드 완료"
  ]},
  {version:"1.0.140-dev",code:151,date:"2026-08-25",items:[
    "캐릭터 전체설정 신체 페이지의 눈 특징·헤어스타일·머리장식을 각각 별도의 다중선택 창으로 분리",
    "눈 특징 19종과 왕관·티아라·뿔·한 쌍의 뿔·후광 등을 포함한 머리장식 20종을 추가하고 항목별 선택값을 독립 저장·복원",
    "신체 페이지의 눈·머리카락 가이드와 페이지 화살표를 책 좌표계 안에 고정하고 회색 자리표시 배경 제거",
    "상단 메뉴와 저장 버튼의 조합형 가운데 조각이 삐져나오거나 틈이 생기지 않도록 캡·가운데·캡 구조를 근본 정리",
    "현재 관계 감정과 실제 동거 장소를 반영해 사이가 좋지 않거나 다른 집에 있는 인물의 공동 행동을 차단하고 자기 자신과의 상호작용을 전 경로에서 방지",
    "사전 항목 이름을 바꾸면 아직 실행되지 않은 선물 일정과 미래 로그가 현재 이름을 사용하도록 연결하고 분류 선택 중 카드가 흔들리지 않게 개선",
    "새 선택창과 안내 문구의 한국어·영어·일본어를 적용하고 캐릭터·관계·일정·집·성능·알림 회귀검사 및 Android APK/AAB 빌드 완료"
  ]},
  {version:"1.0.137-dev",code:148,date:"2026-08-25",items:[
    "캐릭터 전체설정 첫 장의 하단 모양 책갈피를 원본 SVG의 62×37 크기·위치·회전값으로 교정하고 사진·배치·LD·아이콘 안내 글자를 원본 비율에 맞게 정돈",
    "제공한 녹음에서 구두 발걸음 두 번이 또렷한 약 0.72초 구간만 추출해 캐릭터 이동 효과음으로 적용",
    "여러 캐릭터가 동시에 움직여도 구두소리가 중첩되지 않도록 하나의 공유 효과음 재생기로 제한",
    "설정에 모든 효과음 음소거, 0~100 효과음 크기, 구두소리 미리 듣기 추가",
    "화면과 시뮬레이션이 서로 다른 캐시의 상태 모듈을 읽던 충돌을 제거해 일정·생활 상태가 어긋날 가능성 차단",
    "새 소리 설정의 한국어·영어·일본어를 적용하고 412×917 실화면, 전체설정·생활·일정·알림·성능 회귀검사 및 Android APK/AAB 빌드 완료"
  ]},
  {version:"1.0.136-dev",code:147,date:"2026-08-25",items:[
    "캐릭터 전체설정의 첫 장·개요 2장·신체 첫 장을 412×917 원본 SVG 좌표계로 재구성하고 책·목재 배경·색인·사진·LD·아이콘·입력지·하단 조작부의 위치와 쌓임을 고정",
    "현재 목차만 책 앞쪽으로 올라오고 나머지 목차는 책 뒤에 머물도록 레이어 구조를 분리하고 전체 글씨와 저장 버튼에 KCC 글꼴 적용",
    "화장대는 단장, 옷장은 옷 고르기로 가구와 행동의 의미를 분리",
    "서로 다른 방에 있는 인물이 같은 대화를 나누지 않도록 실제 방 위치를 다시 확인하고 같은 방·같은 장소에 있는 인물만 상호작용하도록 수정",
    "집 캐릭터가 상단 메뉴 아래·휴대전화 최하단·우측 메뉴 영역을 피하도록 안전 이동 범위 적용",
    "마을과 집에서 신뢰·편안함·친밀도와 좌우 시야 상태를 계산해 상대를 인식하고 먼저 다가갈지 결정하도록 개선",
    "오른쪽 저시력처럼 방향별 시야가 낮을 때 해당 방향의 인식 가능성이 실제로 낮아지도록 신체 설정과 생활 시뮬레이션 연결",
    "새 설정·행동 문구의 한국어·영어·일본어를 적용하고 412×917 실제 브라우저 좌표·레이어·에셋 로드, 생활 시뮬레이션 67개, 일정 13개, 성능 10개, 캐릭터 UI 회귀검사 및 Android APK/AAB 빌드 완료"
  ]},
  {version:"1.0.135-dev",code:146,date:"2026-08-25",items:[
    "캐릭터 전체설정 첫 장의 책·목재 배경·다섯 색인·사진·LD·아이콘을 제공한 SVG 좌표와 쌓임에 맞게 정돈",
    "개요 옆의 중복 청록색 모양 색인을 제거하고 책 하단 모양 책갈피를 프로필 사진·LD·아이콘 설정 첫 장으로 연결",
    "개요의 기본·생활·이끌림 버튼을 없애고 좌우 페이지 화살표와 페이지 번호만으로 기본·생활 장을 이동하도록 단순화",
    "저장 버튼 글꼴을 KCC한빛으로 고정",
    "전역 테마 및 구형 모바일 전체설정 스타일이 새 책의 글자색·입력 표면·페이지 화살표 위치를 덮던 근본 충돌 수정",
    "한국어·영어·일본어 페이지 이동 문구를 반영하고 384×854 실제 화면·Android 패키지 자산·캐릭터 UI·일정·알림·성능 회귀검사 및 APK/AAB 빌드 완료"
  ]},
  {version:"1.0.134-dev",code:145,date:"2026-08-25",items:[
    "Android 패키지에서 캐릭터 전체설정 CSS 파일이 누락되어 원본 목재 이미지가 화면 전체를 덮던 직접 원인 수정",
    "전체설정 스타일을 필수 앱 자산으로 등록하고 항상 로드되는 기본 CSS에 빌드 단계에서 통합해 별도 파일 요청 실패 차단",
    "전체설정을 열기 전에는 HTML 자체를 숨기도록 이중 보호해 스타일 문제가 생겨도 일반 캐릭터 화면을 가리지 않도록 개선",
    "Android 준비 자산과 실제 APK 내부에 책 스타일·숨김 규칙이 포함됐는지 자동 검사 추가",
    "384×854 Android 준비 화면에서 주민등록증 캐릭터 허브와 나무 배경·책·책갈피가 있는 전체설정을 직접 확인하고 APK/AAB 빌드 완료",
    "문구 변경은 없어 기존 한국어·영어·일본어 번역을 그대로 유지"
  ]},
  {version:"1.0.133-dev",code:144,date:"2026-08-25",items:[
    "전체설정 열림 여부를 캐릭터 데이터와 분리해 일반 캐릭터 화면이 앱 재실행 후 목재 배경에 가려지던 문제 수정",
    "전체설정은 캐릭터 화면의 전체설정 버튼으로 들어간 현재 세션에서만 열리고 탭 이동·재실행 시 일반 화면으로 복귀",
    "기기 저장·프로필 내보내기·클라우드 동기화에서 일시적인 전체설정 화면 상태를 제외해 같은 증상의 재발 차단",
    "집의 방 크기와 관계없이 모든 방 벽면이 같은 화면 기준 높이를 사용하도록 통일",
    "기존 한국어·영어·일본어 번역을 그대로 유지하고 캐릭터·전체설정·집 표면·일정·알림·성능 회귀검사 및 Android APK/AAB 빌드 완료"
  ]},
  {version:"1.0.132-dev",code:143,date:"2026-08-25",items:[
    "캐릭터 전체설정의 기존 모바일 래퍼와 누적 호환 CSS를 제거하고 412×917 고정 좌표의 전용 책 화면으로 전면 재작성",
    "제공한 개요·기본 SVG 두 파일을 기준으로 나무 배경·펼친 책·상단 책갈피·뒤로가기·입력 항목의 위치·크기·각도·쌓임 순서 재현",
    "공통 테마의 main 배경 규칙이 전체설정 페이지를 불투명한 흰색으로 덮어 책과 나무 배경을 숨기던 근본 충돌 제거",
    "첫 이미지 장의 모양 포스트잇을 원본처럼 책 아래쪽에 부착하고 잉크병·저장 버튼·페이지 조작을 독립 최상위 레이어로 고정",
    "개요 기본·생활 필드의 글자색과 입력 표면을 테마에서 격리하고 Android WebView에서도 같은 412×917 비율 유지",
    "변경 화면의 영어·일본어 번역과 전체설정·캐릭터·알림·일정·성능 회귀검사 및 Android APK/AAB 빌드 완료"
  ]},
  {version:"1.0.131-dev",code:142,date:"2026-08-25",items:[
    "Android WebView가 투명 처리하던 중첩 SVG 이미지 참조를 제거하고 목재 배경과 책을 독립된 직접 이미지 레이어로 렌더링",
    "캐릭터 전체설정 첫 장·개요 기본·개요 생활·성격·취향에서 동일한 책과 목재 배경을 유지하도록 단일 레이어 구조 적용",
    "원본 SVG 기준으로 책·상단 책갈피·개요 입력 항목의 각도·위치·크기·쌓임 순서를 다시 배치",
    "개요 기본·생활의 실제 HTML 필드명과 CSS 좌표를 일치시켜 입력 항목이 화면 밖이나 상단으로 튀는 문제 수정",
    "모양 포스트잇을 원본처럼 책 아래쪽 페이지에 부착하고 잉크병·페이지 번호·저장 버튼 위치 정돈",
    "공통 테마 버튼 규칙이 개요 소탭과 모양 포스트잇의 색·형태를 덮지 않도록 스타일 적용 범위 수정",
    "개요 탭을 다시 누르면 첫 기본 장에서 시작하도록 페이지 상태 정리",
    "영어·일본어 기존 번역 유지와 책 구조·캐릭터 알림·일정·집 생활·성능 회귀검사 및 APK/AAB 빌드 완료"
  ]},
  {version:"1.0.130-dev",code:141,date:"2026-08-25",items:[
    "방을 선택하거나 방 안 요소에 초점을 맞춰도 방 컨테이너가 캐릭터·반려생물 위로 올라오지 않도록 레이어 구조 수정",
    "캐릭터 전체설정의 나무 배경과 책을 하나의 고정 SVG 셸로 묶어 Android에서도 각도·위치·크기·쌓임 순서 유지",
    "개요를 기본·생활 두 장으로 구성하고 기상·취침·식사·활동 속도·걸음걸이·관계 성향 등의 설정을 실제 데이터와 연결",
    "걸음걸이 설정에 따라 집과 마을의 이동 속도·보폭·상하 움직임이 달라지도록 애니메이션 반영",
    "직접 그린 반복 바닥 타일과 자르지 않는 방 전체 그림을 별도 선택지로 분리하고 방 전체 그림에서만 벽면 숨김",
    "사용자가 그린 캐릭터 5명 추가 아이콘을 상점 상품 카드에 투명 배경으로 적용",
    "변경 화면의 영어·일본어 번역과 전체설정·집 생활·동기화·Android 자산 회귀검사 및 APK/AAB 빌드 완료"
  ]},
  {version:"1.0.129-dev",code:140,date:"2026-08-24",items:[
    "직접 그린 바닥을 선택한 방에서는 기존 벽을 자동으로 숨기고 첨부 이미지를 방 전체 배경으로 표시",
    "캐릭터 전체설정의 나무 배경과 펼친 책을 실제 화면 요소와 CSS 예비 표면으로 이중화해 일부 Android 기기의 흰 화면 장식 누락 방지",
    "앱·서비스워커 캐시 키를 함께 갱신해 이전 전체설정 스타일이 새 설치본에 남지 않도록 개선",
    "새 바닥 동작 안내에 영어·일본어 번역을 적용하고 384×854 실화면·전체 자동검사·Android APK/AAB 빌드 완료"
  ]},
  {version:"1.0.128-dev",code:139,date:"2026-08-24",items:[
    "마을의 집 상세 화면에서 집 외형 이미지를 바로 변경하고 집 설정으로 이어서 이동 가능",
    "일반 건물 상세 화면에 해당 건물 편집 진입을 추가하고 건물·집을 0.56초 길게 눌러 바로 편집하는 조작 지원",
    "Android WebView에서 단독 장식 이미지가 누락되며 캐릭터 전체설정이 흰 화면처럼 보이던 충돌을 제거",
    "나무 배경과 책을 CSS 표면 레이어로 고정해 캐시·기기별 이미지 요소 렌더링 차이에도 책 UI가 유지되도록 개선",
    "새 마을 편집 안내와 버튼에 영어·일본어 번역을 적용하고 384×854 실화면·전체 회귀검사·Android 빌드 완료"
  ]},
  {version:"1.0.127-dev",code:138,date:"2026-08-24",items:[
    "Android 캐릭터 전체설정에서 사라지던 나무 배경·책·책갈피를 독립 이미지 레이어로 고정하고 입력 내용까지 올바른 순서로 표시",
    "마을 대화 말풍선 뒤에 생기던 큰 흰색 네모를 제거하고 화면 가장자리 인물의 말풍선이 잘리지 않도록 위치 자동 보정",
    "동기화·로그·방 크기·반려생물 방·가구 순서·일정·사전·집 외형 등 최근 사용자 제보 수정 상태를 회귀검사로 재확인",
    "Android WebView의 이전 스타일이 남지 않도록 앱 캐시를 갱신하고 384×854 실화면·전체 회귀검사·Android 빌드 완료"
  ]},
  {version:"1.0.126-dev",code:137,date:"2026-08-24",items:[
    "제공한 캐릭터 전체설정 개요·기본 SVG를 기준으로 책·색인·내부 메뉴·입력 항목의 크기·각도·위치·쌓임 순서를 재현",
    "개요의 기본·생활·이끌림 화면을 책 안에서 전환하고 이름·생일·직업·거주지·말투·면허·재산·소비·흡연·음주 정보를 바로 편집하도록 구성",
    "첫 이미지 장과 개요 장을 분리한 상태를 유지하면서 개요 색인 아이콘과 각 화면의 저장 상태를 안정화",
    "삭제한 캐릭터와 집이 동기화 후 되살아나는 현상, 오래된 로그가 현재 행동을 덮는 현상, 생활 로그의 시간·내용 불일치를 방지",
    "회백색 몰딩 벽을 기본 벽지로 지정하고 반려생물 이동·가구 위아래 순서·기존 집 외형 편집을 개선",
    "자동차 소유주와 출퇴근 교통수단, 사전의 식재료 분류를 추가하고 새 개요 문구에 영어·일본어 번역 적용"
  ]},
  {version:"1.0.125-dev",code:136,date:"2026-08-24",items:[
    "캐릭터 전체설정 첫 화면을 개요와 분리한 이미지 장으로 재구성하고 이미지 전용 책갈피를 개요 앞에 추가",
    "제공한 전체설정 SVG를 기준으로 책·색인·프로필·LD·아이콘 슬롯의 크기·각도·위치·쌓임 순서를 다시 맞춤",
    "캐릭터 배치 조정을 한 손 이동과 두 손 확대·축소·회전으로 직접 편집할 수 있게 바꾸고 행동 아이콘도 손가락으로 이동 가능하게 개선",
    "건물 크기 조절 중 편집창을 투명하게 만들어 실제 건물 크기를 바로 확인할 수 있도록 개선",
    "집 벽지를 가로로 늘이지 않고 세로 높이에 맞춘 원본 비율로 옆에 반복 배치하도록 수정",
    "새 이미지 장·직접 배치 안내에 영어·일본어를 적용하고 412×917 실화면 조작 검수·회귀검사·Android 490개 작업 빌드 완료"
  ]},
  {version:"1.0.124-dev",code:135,date:"2026-08-24",items:[
    "기존 임시 생성 벽지를 제거하고 사용자가 그린 몰딩·기본·타일 벽지 7종을 방별 선택지로 적용",
    "시작·종료 시각이 같은 일정을 30분 일정으로 처리하고 공동 일정 로그의 원래 시작 시각을 보존해 중복 기록 방지",
    "홈 현재 행동과 생활 로그가 같은 저장 장면을 사용하도록 수면·복귀 흐름을 통합하고 자기 자신과의 상호작용 로그 제거",
    "막연한 반복 행동 제지 문구를 실제로 세 차례 말을 끊은 상황을 따지는 구체적인 장면으로 교체",
    "사전의 게임 ‘기타’ 분류를 항상 유지하고 영화 장르에 드라마·미스터리·범죄·가족·모험 추가",
    "반려생물 이동을 부드러운 transform 애니메이션으로 바꾸고 캐릭터·반려생물 겹침 간격 확대",
    "태블릿 집 화면을 휴대전화와 같은 최대 480px 무대로 고정해 방과 UI가 넓게 늘어나 깨지는 현상 수정",
    "새 벽지·편집 문구와 생활 장면에 영어·일본어를 적용하고 384×854·800×1100 실화면·전체 회귀검사·Android 490개 작업 빌드 완료"
  ]},
  {version:"1.0.123-dev",code:134,date:"2026-08-24",items:[
    "캐릭터 전체설정을 나무 배경·큰 책·개요/신체/성격/취향/소지품 다섯 색인 구조로 전면 개편",
    "프로필·사진·색상·LD 배치·홈 배치·삭제 등 기존 모든 설정과 저장 동작을 새 책 화면에 그대로 유지",
    "현재 색인은 아이콘과 함께 길게 펼치고 전역 테마가 색인 고유 색과 책의 글자를 덮지 않도록 충돌 해결",
    "캐릭터 메인 화면의 체크무늬 띠와 이모지 노란 포스트잇 및 전용 이미지 제거",
    "AI 생성 건물 외형 11종과 자동 연결을 삭제하고 사용자 손그림·서랍·중세 건물 에셋만 유지",
    "새 전체설정 탭 한국어·영어·일본어 적용 및 412×917 다섯 탭 조작 검수·전체 회귀검사·Android 490개 작업 빌드 완료"
  ]},
  {version:"1.0.122-dev",code:133,date:"2026-08-24",items:[
    "집 벽을 크림색 손그림 벽지·호두나무 몰딩으로 교체하고 각 방에 2px 검은 윤곽 적용",
    "직접 덧그릴 수 있는 벽 PNG/SVG 틀과 6×4 투명 가구 격자 PNG/SVG 틀 제공",
    "방 크기·위치·바닥·벽 편집과 생활 시뮬레이션을 분리해 재실행 시 방 크기 누적 변화와 기존 로그 재생성 방지",
    "동기화된 로그 보존·중복 방지 경로를 재검증하고 반려생물의 주로 있는 방 설정을 실제 배치에 우선 적용",
    "최근 행동을 피하는 집 생활 활동 21종을 한국어·영어·일본어로 추가",
    "제공한 캐릭터 SVG를 기준으로 나무 배경·사선 체크 종이·주제색 천·책·메모·열쇠의 배치와 레이어 재구성",
    "캐릭터 전체 설정 상단 메뉴를 고정하고 현재 보고 있는 설정 항목을 진하게 강조",
    "412×917 캐릭터 화면 시각 검수·전체 회귀검사·Android 490개 작업 빌드 완료"
  ]},
  {version:"1.0.121-dev",code:132,date:"2026-08-24",items:[
    "임시 생성 가구 그림을 앱에서 제거하고 새 가구 원화가 준비될 때까지 배경 없는 이모지로 표시",
    "사용자가 그린 판재 재질 5종을 방별 바닥 선택지로 추가하고 기존 마루·타일 값을 자동 이관",
    "방마다 바닥과 별도로 벽 재질을 선택하고 상단 벽면·#5C4234 벽 경계로 입체적인 방 구획 표시",
    "집 편집 중 캐릭터와 반려생물을 숨겨 방·가구 배치가 가려지지 않도록 개선",
    "UI 숨김 시 뒤로가기 버튼도 함께 숨기고 UI 표시 버튼은 반투명하게 유지",
    "바닥·벽 문구 한국어·영어·일본어 적용 및 384×853 실제 화면·집/미디어 57개·생활 59개·성능 10개·Android 490개 작업 빌드 검증"
  ]},
  {version:"1.0.120-dev",code:131,date:"2026-08-24",items:[
    "80종 집 가구를 배경 없는 손그림 PNG 스프라이트로 제작해 기존 이모지 가구 교체",
    "소파 3×1·냉장고 1×2·커플 침대 3×2 등 가구별 점유 칸과 방 경계 스냅 적용",
    "직접 덧그릴 수 있는 투명 5×4 가구 원본 시트 4장과 자동 분리 도구 제공",
    "앱용 가구 이미지를 256px로 최적화하고 원본 시트는 패키지에서 제외해 런타임 이미지 약 17.6MB→5.7MB 절감",
    "집 캐릭터 로그 바깥 탭 닫기와 다른 화면 이동 시 자동 닫기 적용",
    "같은 대화 화면을 다시 열 때 상대에게 뛰어가는 접근 동작이 처음부터 반복되던 문제 수정",
    "가구 이름·로그 닫기 한국어·영어·일본어 적용 및 384×854 실제 화면·가구 91항목·생활 59개·알림 28개·Android 490개 작업 빌드 검증"
  ]},
  {version:"1.0.119-dev",code:130,date:"2026-08-24",items:[
    "방을 어둡게 만들던 반투명 오버레이·선택 그림자를 제거해 모든 방의 밝기를 동일하게 표시",
    "방 테두리와 방 사이 공간을 #5C4234로 통일하고 다크 모드에서도 같은 색 유지",
    "관계 설정의 왼쪽·오른쪽 표시 순서를 공동 장면과 집 안 실제 좌표까지 일관되게 적용",
    "‘함께 시간을 보내는 중’ 장면에 두 캐릭터의 몸동작과 반응 애니메이션 추가",
    "상호작용 근거가 없는 낯선 사람은 공동 장면으로 묶지 않고 각자의 생활 행동을 유지",
    "412×917 모바일 시각 검수·전체 회귀검사 19종·생활 시뮬레이션 59개·Android 490개 작업 빌드 완료"
  ]},
  {version:"1.0.118-dev",code:129,date:"2026-08-24",items:[
    "집 방 사진 대신 방별 바닥재를 표시하고 마루·크림 타일·직접 그린 바닥 선택 기능 추가",
    "거실·침실·서재·주방은 마루, 현관·욕실은 타일을 기본값으로 적용하고 덧그리기용 원본 PNG 제공",
    "아침 조깅 복귀를 현관 활동이 아닌 마을 이동으로 처리하고 도착 뒤 신발·겉옷 정리 장면으로 연결",
    "마을을 걷는 캐릭터와 마을 대화 장면에 이동 경로·말풍선·서로 마주 보는 몸동작 추가",
    "대화 상대에게 직접 걸어가며 운동·대화를 이어 하고 장면 전환 때 현재 이동 위치를 보존해 순간이동 방지",
    "사람·반려생물 충돌 회피와 표시 순서를 교정해 일반 이동 중 캐릭터가 서로 가려지지 않도록 개선",
    "한국어·영어·일본어 바닥·이동 문구 적용, 생활 시뮬레이션 53개·집/미디어 57개 및 전체 회귀검사·Android 490개 작업 빌드 완료"
  ]},
  {version:"1.0.114-dev",code:125,date:"2026-08-24",items:[
    "집 이름을 누르면 집 이동 메뉴가 열리고 기존 집 이동 자리에는 현재 층수 표시",
    "우측에 엘리베이터형 위·아래 층 이동 버튼을 추가하고 여러 층 사이 이동 연결",
    "UI 숨김 상태에서도 상단 바를 유지하고 집 이름 옆에 실제 집 외형 아이콘 표시",
    "편집 완료·UI 숨김 버튼 글자 잘림과 방 이름·층/격자 안내가 어둡게 보이던 테마 충돌 해결",
    "캐릭터와 반려생물을 GPU transform 기반 이동으로 바꾸고 대화 장면에 말풍선 효과 추가",
    "집 정보 글자 크기 축소 및 한국어·영어·일본어 층 이동 문구 적용",
    "384×854 모바일 조작 검수·전체 회귀검사 19종·집 UI 및 생활 검사 54개·Android 490개 작업 빌드 완료"
  ]},
  {version:"1.0.113-dev",code:124,date:"2026-08-24",items:[
    "집 이름과 집 정보를 상단 바의 같은 하단선에 정렬",
    "집 이동·편집 완료·구성원·반려생물·UI 숨김 버튼의 좌우 캡과 글자 잘림 해결",
    "편집 완료 버튼 뒤 갈색 사각형 제거 및 집 설정·방 구성·가구 배치·거주 설정 글자를 #FFF5DD로 통일",
    "커플 침대를 기존·신규 배치 모두 2×2 격자 크기로 표시",
    "커플 침대를 함께 쓰는 두 캐릭터를 서로 다른 침대 칸에 배치해 겹침 방지",
    "384×854 모바일 시각 검수·전체 회귀검사 19종·집 UI 및 생활 검사 45개·Android 490개 작업 빌드 완료"
  ]},
  {version:"1.0.112-dev",code:123,date:"2026-08-24",items:[
    "상단 장식과 나무 바 사이의 흰 틈·눌림·잘림을 없애고 뒤로가기 버튼을 최상위 레이어에 고정",
    "상단 캐릭터 이름을 집 아이콘과 실제 집 이름으로 교체하고 집 정보와 같은 하단선에 정렬",
    "집 이름·집 정보·방 이름은 흰색, 모든 집 메뉴는 #FFF5DD가 유지되도록 공통 테마 충돌 해결",
    "가구·캐릭터·반려생물 아이콘 뒤의 흰 배경을 제거하고 투명 에셋을 원본 그대로 표시",
    "집 편집 세부 도구를 우측 기본 메뉴에서 분리해 화면 하단의 독립 도구막대로 재배치",
    "구성원을 이름과 현재 행동이 함께 보이는 네모 카드로 복구",
    "두 구성원의 공동 행동을 하나의 카드로 묶고 뽀뽀·포옹·대화·식사·놀이별 애니메이션 추가",
    "공동 행동 문구의 한국어·영어·일본어 적용 및 384×854 모바일 시각 검수·전체 회귀검사 19종·Android 빌드 완료"
  ]},
  {version:"1.0.111-dev",code:122,date:"2026-08-24",items:[
    "제공한 412×917 SVG 기준으로 집 화면의 상단 나무 바·뒤로가기·현재 캐릭터·집 정보·집 이동·우측 기능 메뉴·UI 숨김을 전면 재배치",
    "상단 78px 아래부터 화면 최하단까지를 실제 집·방 렌더링 영역으로 고정해 메뉴 때문에 집 화면이 축소되던 구조 제거",
    "집 이동·집 편집·구성원·반려생물·UI 숨김과 편집 도구를 양끝 캡과 가운데 조각을 잇는 기존 버튼 조합으로 통일",
    "집 이동 팝업에서 다른 집 선택과 새 집 생성을 제공하고 집 정보 패널에서 유형·마을·층·방·구성원·청결도·생활 로그·자동차 확인 가능",
    "집 편집·완료, 구성원, 반려생물, UI 숨김·복원과 기존 방·가구 편집 동작 연결",
    "새 집 HUD와 편집 메뉴의 영어·일본어 번역 및 긴 영문 버튼 자동 폭 보정",
    "384×854 모바일 시각·클릭 확인, 전체 회귀검사 19종, Android 490개 작업 빌드 완료"
  ]},
  {version:"1.0.110-dev",code:121,date:"2026-08-24",items:[
    "집 안 캐릭터의 활동을 기존 생활 시뮬레이션·홈 화면·생활 로그와 하나의 현재 장면으로 통합",
    "TV 30~90분, 샤워 10~20분 등 활동 종류별 현실적인 지속 시간 적용",
    "일반 침대 1명·커플 침대 최대 2명의 사용 인원 규칙과 캐릭터별 침대 지정 기능 추가",
    "가구 배치를 방 설정에서 분리해 방 선택·가구 추가·편집을 한곳에서 하는 전용 창으로 개편",
    "집 안 캐릭터의 설명 문구를 숨기고 아이콘·애니메이션·이모지·이름만 표시",
    "캐릭터를 누르면 화면을 가리지 않는 하단 상태·최근 생활 로그 창 표시",
    "새 가구·지정·상태 문구의 한국어·영어·일본어 적용",
    "384×854 모바일 실조작 확인과 전체 회귀검사 19종 완료"
  ]},
  {version:"1.0.109-dev",code:120,date:"2026-08-24",items:[
    "기존 집 편집의 12×16 격자를 방 안 가구 배치에도 연결해 드래그한 가구를 실제 칸 중심에 맞춰 정렬",
    "집 편집 중 각 방 안에 가구 배치용 격자선을 표시하고 방 크기에 따라 사용할 칸 수를 자동 계산",
    "선반·책상·테이블·수납장류 위에 책·화분·향수·액자·컵·인형·수집품·조명을 최대 4개까지 올리는 소품 꾸미기 추가",
    "소품을 부모 가구 데이터에 연결해 가구 이동·회전·크기 변경과 동기화·재실행 뒤에도 함께 유지",
    "가구와 소품 이름·선택 팝업의 한국어·영어·일본어 적용",
    "384×854 모바일 실조작 확인, 전체 회귀검사 19종, Android 490개 작업 빌드와 APK/AAB 서명 검증 완료"
  ]},
  {version:"1.0.106.1-hotfix",code:119,date:"2026-08-24",items:[
    "동기화 불러오기·집 배치·캐릭터 설정 변경 뒤 이미 저장된 오늘의 생활 로그 행동과 시간이 다른 내용으로 교체되는 오류 수정",
    "현재 시각까지 기록된 로그는 원문·시각을 보존하고 변경된 설정은 미래 장면부터만 반영",
    "같은 동기화 데이터를 반복해 불러와도 로그가 중복되지 않는 병합 규칙 재검증",
    "main 핫픽스와 dev 양쪽에 동일 수정 반영, 전체 회귀검사 19종과 Android APK/AAB 빌드·서명 검증 완료"
  ]},
  {version:"1.0.108-dev",code:118,date:"2026-08-23",items:[
    "집에 있는 캐릭터가 방에 놓인 가구를 선택하고 실제 가구 위치까지 걸어가 사용하는 생활 시뮬레이션 추가",
    "샤워·휴식·수면·요리·식사·공부·창작·운동 등 가구 종류에 맞는 행동과 상태 문구 적용",
    "한 가구를 한 명만 사용할 수 있는 자리 선점 규칙과 다른 가구 선택·대기 처리 추가",
    "방 이동과 가구 사용 상태를 기기 저장·동기화 데이터에 포함하고 앱을 오래 닫아 둔 시간은 반복 재생하지 않도록 처리",
    "화면을 벗어나거나 앱이 숨겨지면 시뮬레이션 타이머를 멈추고 동작 전환 시점에만 저장해 발열·배터리 사용 억제",
    "생활 행동 문구의 한국어·영어·일본어 적용",
    "384×853 실제 화면 이동 확인, 전체 회귀검사 19종, 신규 시뮬레이션 검사 24개, Android APK/AAB 빌드와 서명 검증 완료"
  ]},
  {version:"1.0.107-dev",code:117,date:"2026-08-23",items:[
    "방 종류별 가구 목록에서 같은 가구를 여러 개 추가하고 실제 방 화면 안에 바로 표시",
    "가구를 직접 끌어 이동하고 하단 도구에서 크기·15도 회전·앞뒤 순서·삭제를 조절하는 편집 기능 추가",
    "가구의 좌표·크기·각도·순서를 기기 저장과 동기화 데이터에 포함해 앱 재실행 뒤에도 같은 배치 유지",
    "가구를 캐릭터·반려생물 아래의 정적 레이어로 분리해 기존 생활 애니메이션과 발열 최적화 유지",
    "가구 카탈로그와 편집 안내의 한국어·영어·일본어 문구 적용",
    "384×853 실제 화면에서 가구 추가·편집·재실행 복원 확인, 전체 회귀검사 18종, Android APK/AAB 빌드와 서명 검증 완료"
  ]},
  {version:"1.0.106-dev",code:116,date:"2026-08-23",items:[
    "집 편집의 최소 크기 규칙을 저장·복원·직접 조절 모두 동일한 12×16 격자 기준으로 통합",
    "방 저장 시 테두리·여백이 포함된 화면 픽셀을 다시 비율로 환산하지 않도록 바꿔 앱 재실행마다 방이 커지는 누적 오차 제거",
    "집 편집 메뉴의 검은 배경과 번진 검은 글자 그림자를 제거하고 반투명 종이색 배경·또렷한 글자·가벼운 테두리 적용",
    "새 문구 없이 기존 한국어·영어·일본어 번역 유지",
    "384×853 실제 화면에서 새로고침 전후 방 좌표 동일성 확인, 전체 회귀검사 18종, Android APK/AAB 빌드와 서명 검증 완료"
  ]},
  {version:"1.0.105-dev",code:115,date:"2026-08-23",items:[
    "캐릭터 선택 팝업을 관리 버튼보다 높은 전용 계층에 배치하고 열린 동안 뒤쪽 내보내기·저장·삭제 버튼 터치 차단",
    "팝업 캐릭터 이름의 외곽선을 제거하고 흰색 글자와 아래로 번지는 검은 그림자로 변경",
    "캐릭터 연락 알림의 제목과 본문 종결형에 선택한 말투를 함께 적용해 접두사와 해요체가 충돌하는 문장 수정",
    "마왕·군주·신탁·반말·격식체 등을 포함한 모든 직접 선택 말투를 한국어·영어·일본어 알림에서 변환하고 생활로그 관찰 문장은 기존처럼 말투 미적용",
    "v1.0.105(115)의 최신 사이트 파일을 dev와 동일한 상태로 main에 병합",
    "412×917 실제 터치·계산 스타일 확인, 전체 회귀검사 18종, Android APK/AAB 빌드와 서명 검증 완료"
  ]},
  {version:"1.0.104-dev",code:114,date:"2026-08-23",items:[
    "주민등록증의 흰 안쪽 종이를 실제 투명 이미지 레이어로 분리하고 사진을 그 아래에 배치해 원본 SVG의 사진 구멍 크기·각도·위치 재현",
    "프로필 내보내기·캐릭터 저장·캐릭터 삭제를 책과 테마색 천 바깥의 독립 최상위 레이어로 옮겨 장식에 가리지 않고 항상 터치 가능",
    "영어 주민등록증 제목과 작업 버튼을 한 줄 안에 온전히 표시하도록 언어별 폭과 글자 크기 보정",
    "홈 날짜를 시간보다 작은 10px로 표시하고 같은 오른쪽 기준선과 흰 글자·검은 외곽선 유지",
    "캐릭터 관리 접근성 문구를 영어·일본어에도 추가하고 412×917·412×883 시각·터치 레이어 확인, 회귀검사와 Android APK/AAB 빌드·서명 검증 완료"
  ]},
  {version:"1.0.103-dev",code:113,date:"2026-08-23",items:[
    "캐릭터 허브를 412×917 원본 비율의 전용 좌표 폭으로 고정해 넓은 휴대폰에서도 주민등록증 사진·정보·지갑·책 배치 비율 유지",
    "새 흰 종이 원화에 캐릭터 테마색을 곱해 원래의 검은 외곽선과 선명한 캐릭터색을 함께 표시",
    "캐릭터 선택 팝업 이름의 겹친 이중 스트로크를 제거하고 흰색 글자와 얇은 검은 외곽선을 한 번만 표시",
    "홈 날짜를 시간과 같은 오른쪽 기준선에 정렬하고 12px 흰 글자·검은 외곽선 유지",
    "캐릭터 윤곽에 붙는 그림자는 유지하고 캐릭터 아래에 따로 떠 있던 배경 그림자 제거",
    "새 문구 없이 기존 한국어·영어·일본어 번역을 유지하고 412×917·412×883 시각 확인, 캐릭터·홈·성능·Android 에셋 회귀검사 및 네이티브 파일 준비 완료"
  ]},
  {version:"1.0.102-dev",code:112,date:"2026-08-23",items:[
    "공통 화면 테마가 캐릭터 허브 전용 색상을 덮어쓰지 않도록 스타일 적용 범위를 분리",
    "프로필 내보내기·캐릭터 저장·캐릭터 삭제 글자를 #FFF5DD로 고정",
    "빠른설정·전체설정과 바로가기 글자를 흰색·검은 외곽선으로 표시",
    "주민등록증의 이름·나이·생일·성별·직업 종류 항목에 걸린 한 글자 폭 말줄임을 제거해 전체 문구 표시",
    "빠른 설정의 선택된 성격 키워드와 책 뒤 천에 실제 캐릭터 테마색 적용",
    "캐릭터 선택 팝업 이름을 흰색·검은 외곽선으로 고정하고 5글자 단위 줄바꿈 유지",
    "412×917 계산 스타일·시각 확인, 전체 회귀검사 18종, Android APK/AAB 빌드와 서명 검증 완료"
  ]},
  {version:"1.0.101-dev",code:111,date:"2026-08-23",items:[
    "이전 버전·동기화 데이터의 선호와 보유 항목 형식이 달라도 캐릭터 정보 화면을 정상 표시하도록 호환 처리 보강",
    "동기화된 정보 불러오기에서 클라우드에 실제 존재하는 캐릭터가 오래된 기기 삭제 기록에 가려지지 않도록 복구 우선순위 수정",
    "같은 생활 로그와 관계 기록을 기기·클라우드 병합 과정에서 한 번만 남겨 불러오기 뒤 기록 수가 두 배로 늘어나는 문제 수정",
    "일반 저장·동기화·앱 재시작을 생활 시간표 변경으로 오인하지 않도록 분리해 같은 행동의 시각과 내용 유지",
    "화면에 머무는 동안 다음 생활 변화 시점에 맞춰 장면과 로그를 갱신하고, 잠깐 앱을 벗어났다가 돌아온 경우 예정 시각을 기록",
    "동기화·로그 전용 검사를 포함한 전체 회귀검사 18종, 네이티브 준비, Android APK/AAB 빌드와 서명 검증 완료"
  ]},
  {version:"1.0.100-dev",code:110,date:"2026-08-23",items:[
    "전역 스타일에 가려지던 체크무늬 종이를 독립 전체 화면 레이어로 분리해 캐릭터 허브 배경을 항상 표시",
    "주민등록증 안쪽 종이·사진·제목·이름·나이·생일·성별·직업을 412×917 원본 SVG 좌표와 회전값에 맞게 재배치",
    "선택됨과 프로필 내보내기·저장·삭제를 조합형 버튼 에셋으로 통일하고 기능 문구와 빠른·전체 설정 바로가기를 밝은 글자로 수정",
    "빠른·전체 설정 문구 간격을 조정하고 빠른 설정 성격 키워드의 선택 상태를 캐릭터 테마색으로 표시하며 전체 설정과 동일 데이터로 연동",
    "책 뒤 천을 현재 캐릭터 테마색으로 표시",
    "성격·사회성 설정을 반영해 공동 장면의 대화 시작 인물을 정하고 내향적인 캐릭터가 부자연스럽게 먼저 말을 거는 경우를 감소",
    "한국어·영어·일본어 기존 문구를 유지하고 412×917 브라우저 확인, 전체 회귀검사 17종, Android APK/AAB 빌드와 서명 검증 완료"
  ]},
  {version:"1.0.99-dev",code:109,date:"2026-08-23",items:[
    "캐릭터 허브 주민등록증 카드·글자 위치를 원본 SVG 좌표에 맞추고 빠른설정 수첩을 흰색 SVG 에셋으로 교체",
    "선택됨·프로필 내보내기·저장·삭제 버튼 에셋과 글자색을 통일하고 캐릭터 선택창에 새 캐릭터 ＋칸과 5글자 단위 이름 줄바꿈 적용",
    "체크무늬 배경과 원본의 가장자리 필터를 복원하고 빠른설정·전체설정 바로가기의 글자 크기와 대비를 정리",
    "홈 이름·날짜·시간의 상단 위치와 하단 정렬을 보정하고 날짜를 12px 흰 글자·검은 외곽선·시간 우측 정렬로 표시",
    "음식점 생활 장면의 어색한 메뉴 선택 문구를 자연스럽게 수정하고 영어·일본어 번역을 함께 추가",
    "굵은 대각선 띠처럼 보이던 비 효과를 길이·속도·깊이가 다른 가는 빗방울 두 겹으로 교체하면서 블러·LD 둥둥 애니메이션은 유지",
    "412×917 브라우저 시각 확인, 전체 회귀검사, Android APK/AAB 빌드와 서명 검증 완료"
  ]},
  {version:"1.0.98-dev",code:108,date:"2026-08-23",items:[
    "캐릭터 허브를 새 412×917 SVG와 직접 대조해 체크 종이·지갑·주민등록증·3개 기능 버튼의 좌표와 각도를 동일하게 조정",
    "붉은 천 위의 펼친 책, 테이프, 선호 물품 3자리, 상단 클립과 하단 열쇠를 원본 에셋과 소수점 회전값 그대로 적용",
    "책 왼쪽 빠른설정 팝업과 오른쪽 전체설정 페이지 이동, 실제 캐릭터 정보·사진·선호 물품 표시와 기존 애니메이션을 유지",
    "한국어·영어·일본어 문구, 412×917 브라우저 좌표 대조, 전체 회귀검사, Android APK/AAB 빌드와 서명 검증 완료"
  ]},
  {version:"1.0.78.8",code:107,date:"2026-08-23",items:[
    "LD 위치 편집창을 실제 홈과 같은 412×917 전체 화면으로 바꾸고 상단바 아래부터 화면 최하단까지의 절대 좌표계를 그대로 적용",
    "편집창의 LD 원본 비율·크기·위치와 행동 아이콘 기준점을 실제 홈 렌더링과 일치시켜 저장 뒤 달라 보이던 문제 수정",
    "홈 좌우 메뉴·하단 도크 원화와 현재 행동 아이콘을 편집 미리보기에 적용",
    "한국어·영어·일본어 문구와 기존 LD 둥둥 애니메이션을 유지하고 전체 회귀검사·Android 빌드·APK/AAB 서명 검증 완료"
  ]},
  {version:"1.0.97-dev",code:106,date:"2026-08-23",items:[
    "LD 위치 편집 미리보기를 실제 홈과 동일한 412×917 전체 화면 비율로 바꾸고 상단바 아래부터 화면 최하단까지의 절대 좌표계를 그대로 표시",
    "편집창의 LD 전신 원본 비율·크기·위치와 행동 아이콘 기준점을 실제 홈 렌더링 공식에 맞춰 저장값과 결과 화면의 차이를 제거",
    "임시 선 문자 대신 홈의 좌우 메뉴 원화 6개·하단 도크 원화 5개와 현재 생활 장면의 행동 아이콘을 미리보기에 적용",
    "한국어·영어·일본어 문구, 412×917 브라우저 좌표 대조, 관찰 HUD·캐릭터·알림·성능 회귀검사와 APK/AAB 서명 검증 완료"
  ]},
  {version:"1.0.96-dev",code:105,date:"2026-08-23",items:[
    "main LD 배치 핫픽스를 캐릭터 화면 개편·애니메이션·블러 최적화를 유지한 dev 브랜치에도 동일 적용",
    "캐릭터별 LD 위치·크기와 화면 채우기 프리셋, 2인 장면의 동일 Y·크기 규칙을 영어·일본어와 함께 반영",
    "LD·생활 애니메이션과 139개 Android 자산을 유지한 채 관찰 화면·성능·설정·알림 회귀검사 통과"
  ]},
  {version:"1.0.78.7",code:104,date:"2026-08-23",items:[
    "LD가 작고 높은 곳에 떠 보이던 자동 레이아웃을 제거하고 상단바 아래부터 화면 최하단까지를 고정 배치 영역으로 사용",
    "캐릭터 설정에서 LD를 회색 실제 비율 영역 안에 직접 배치하고 크기를 조절하거나 ‘화면에 꽉 차게’ 프리셋을 선택할 수 있도록 추가",
    "2인 장면에서도 각 캐릭터의 1인 장면 Y 위치와 크기를 유지하고 X 위치만 좌우로 분리",
    "기존 LD 둥둥 애니메이션과 행동 소품을 보존하고 412×917 실제 화면·전체 회귀검사·APK/AAB 서명 검증 완료"
  ]},
  {version:"1.0.95-dev",code:103,date:"2026-08-23",items:[
    "제공된 캐릭터 SVG의 412×917 좌표를 기준으로 모자이크 종이·포스트잇·빠른 설정 노트·전체 설정 책·클립의 크기와 위치, 회전 각도를 원본과 일치시킴",
    "주민등록증 제목과 이름·나이·생일·성별·직업 정보를 사진 옆 중앙 영역으로 옮겨 카드 안의 균형을 조정",
    "프로필 내보내기·캐릭터 저장·삭제 버튼을 홈 화면과 같은 좌우 캡·가운데 조각 구조로 만들어 틈과 가운데 조각 돌출을 제거",
    "캐릭터 선택 팝업의 긴 이름을 말줄임표 대신 두 줄로 표시하고 글자색을 #FFF5DD로 통일",
    "빠른 설정과 전체 설정 바로가기 문구를 흰 글자·검은 외곽선으로 배치하고 영어·일본어 번역을 함께 적용",
    "캐릭터·집·LD의 둥둥 애니메이션과 블러 효과를 유지한 채 전체 회귀검사와 412×917 모바일 화면 검증을 통과하고 versionCode 103·versionName 1.0.95 개발 빌드 생성"
  ]},
  {version:"1.0.94-dev",code:102,date:"2026-08-23",items:[
    "캐릭터·집·LD 장면의 둥둥 움직임과 상황 애니메이션, 장면 블러를 다시 보존하면서 저장·캐시·백그라운드 처리 최적화는 유지",
    "홈 날짜를 흰색 12px로 시간 위에 놓고 이름과 시간의 하단선이 SVG 원본 좌표에서 정확히 일치하도록 보정",
    "캐릭터 선택 팝업을 원본처럼 흰색 90% 세로 패널로 맞추고 아이콘 뒤 개별 배경 제거, 펼치기·접기 애니메이션과 캐릭터 수별 높이 적용",
    "프로필 내보내기·캐릭터 저장·삭제 버튼에 제공 버튼 에셋을 적용하고 전체 설정의 선호 물품 스티커 크기와 각도를 원본에 맞춤",
    "생활 화면 애니메이션을 없애지 않는 방향으로 최적화 회귀 검사를 보강하고 versionCode 102·versionName 1.0.94 개발 빌드 생성"
  ]},
  {version:"1.0.93-dev",code:101,date:"2026-08-23",items:[
    "이미 사용된 versionCode 100을 피해 개발 빌드를 versionCode 101·versionName 1.0.93으로 상향",
    "대형 저장 데이터를 복제한 뒤 다시 문자열화하던 이중 순회를 단일 순회로 바꾸고 복구용 미러 저장 빈도를 조절",
    "같은 공동 장면의 중복 저장을 막고 장면·생활 로그·조사 캐시를 재사용해 화면 갱신 계산량 감소",
    "앱 복귀 시 중복 사진 스캔을 합치고 백그라운드에서는 생활 장면 타이머를 멈추도록 수명주기 정리",
    "Android에서 상시 애니메이션·블러를 줄이고 긴 목록의 화면 밖 항목은 보일 때만 그리도록 최적화",
    "캐릭터 종이 배경을 투명 WebP로 경량화하고 사용하지 않는 고해상도 원본을 앱 패키지에서 제외",
    "Android 준비 자산 139개와 저장·생활 로그·캐릭터 화면·날짜 일정·패키지 자산 회귀 검사 통과"
  ]},
  {version:"1.0.92-dev",code:100,date:"2026-08-23",items:[
    "캐릭터 화면을 카드지갑 허브와 빠른 설정·전체 설정 두 경로로 전면 개편",
    "빠른 설정은 아이콘·이름·성별·성지향·직업·직업명·성격 키워드·말투만 담은 수첩 팝업으로 구성",
    "전체 설정은 기존 모든 항목을 중요도 순서의 여섯 목차로 분류하고 고급 설정 접기 없이 독립 화면에서 제공",
    "캐릭터 선택 팝업을 90% 흰 배경과 아이콘·외곽선 이름, 아이콘형 추가·정렬·닫기 조작으로 정리",
    "선택한 세계관 선호 물품 이미지를 전체 설정 책 위에 투명 배경으로 미리 표시",
    "홈 날짜를 12px로 시간 위에 배치하고 ‘취향 사전’을 한국어 사전·영어 Dictionary·일본어 辞典으로 변경",
    "자기 자신을 동행자로 표시하는 공동 로그와 서로 다른 장소에서 한 인물과 함께 있다고 표시되는 로그 수정",
    "장면 파티클과 모바일 합성 애니메이션을 줄여 발열을 낮추고 Android 자산 141개 포함 여부 확인",
    "개발 브랜치 작업으로 versionCode 100과 versionName 1.0.92는 유지"
  ]},
  {version:"1.0.92",code:100,date:"2026-08-22",items:[
    "주민이 없는 사용자 생성 마을도 정상 홈과 같은 HUD v4 좌표계와 테마로 표시",
    "휴대폰·태블릿에서 메뉴 원화가 거대해지거나 흰 배경 띠가 나타나는 오류 수정",
    "새 버전 업데이트 알림 설정·예약·열기 경로 제거",
    "v1.0.91의 캐릭터 그룹·관계 화면과 최신 UI를 보존한 v1.0.92(100) AAB·APK 생성"
  ]},
  {version:"1.0.78.6",code:99,date:"2026-08-22",items:[
    "새로 만든 빈 마을을 들어갔다 나온 뒤 홈 화면 배치가 깨지던 오류 수정",
    "기존 데이터는 그대로 두고 업데이트 후 앱 재시작만으로 화면이 복구되도록 개선",
    "휴대폰 384×853과 태블릿 1205×753에서 화면 넘침과 흰 메뉴 배경이 없는지 확인",
    "Google Play용 v1.0.78.6(99) 서명 AAB와 설치 확인용 APK 생성"
  ]},
  {version:"1.0.91",code:98,date:"2026-08-22",items:[
    "캐릭터 그룹 아래 관계 설정 영역이 화면 밖으로 잘리고 스크롤되지 않던 오류 수정",
    "현재 화면과 맞지 않는 과거 관계 룰렛의 중복 고정 높이·overflow 스타일 제거",
    "관계 페이지와 관계 편집 팝업을 각각 끝까지 스크롤할 수 있도록 스크롤 소유권 정리",
    "v1.0.90의 캐릭터 그룹·일정·동기화 기능을 보존한 v1.0.91(98) AAB·APK 생성"
  ]},
  {version:"1.0.78.5",code:97,date:"2026-08-22",items:[
    "캐릭터 그룹 아래 관계 설정 영역이 잘려 버튼을 누를 수 없던 오류 수정",
    "휴대폰 관계 화면을 하나의 세로 스크롤 영역으로 정리하고 맨 아래 버튼까지 접근 가능하게 개선",
    "관계 설정 팝업이 화면 높이를 넘을 때 팝업 안에서 끝까지 스크롤되도록 수정",
    "Google Play용 v1.0.78.5(97) 서명 AAB와 설치 확인용 APK 생성"
  ]},
  {version:"1.0.90",code:96,date:"2026-08-22",items:[
    "모바일 캐릭터 그룹 카드의 아이콘·그룹명·구성원·동작 영역을 독립 구조로 재배치",
    "긴 그룹 이름이 한 글자 폭으로 찌그러지지 않고 편집·삭제 버튼은 아래 행에 표시",
    "그룹 목록과 관계 편집 화면 사이의 과도한 빈 공간 제거",
    "v1.0.89의 일정·동기화·데이터 복구 기능과 자산 143개를 보존한 v1.0.90(96) AAB·APK 생성"
  ]},
  {version:"1.0.78.4",code:95,date:"2026-08-22",items:[
    "휴대폰 관계 화면에서 캐릭터 그룹 이름과 버튼이 서로 밀어내며 깨지던 오류 수정",
    "그룹 목록 아래에 화면 한 장 높이의 빈 공간이 생기던 중복 높이 계산 제거",
    "Google Play용 v1.0.78.4(95) 서명 AAB와 설치 확인용 APK 생성"
  ]},
  {version:"1.0.89",code:94,date:"2026-08-22",items:[
    "이후 앱 버전에서 저장한 데이터도 캐릭터·집·마을을 지우지 않고 안전하게 읽도록 저장 형식 호환성 확대",
    "클라우드 불러오기 직전 상태와 마지막 정상 캐릭터 상태를 별도 복구본으로 유지",
    "빈 현재 상태보다 캐릭터가 있는 복구본을 우선해 자동 복원",
    "v1.0.88의 최신 UI·기능과 자산 143개를 보존한 v1.0.89(94) AAB·APK 생성"
  ]},
  {version:"1.0.78.3",code:93,date:"2026-08-22",items:[
    "Google Play 업데이트 뒤 클라우드를 불러와도 ‘아직 만든 캐릭터가 없어요’로 바뀌던 오류 수정",
    "최신 개발판 저장 형식의 캐릭터·집·마을 데이터를 v1.0.78 핫픽스 계보에서도 보존",
    "클라우드 불러오기 직전 데이터와 마지막 정상 캐릭터 상태를 별도 복구본으로 보관",
    "빈 상태가 표시된 기기에서도 남아 있는 로컬 복구본 또는 클라우드 원본을 다시 읽어 자동 복원",
    "Google Play용 v1.0.78.3(93) 서명 AAB와 설치 확인용 APK 생성"
  ]},
  {version:"1.0.88",code:92,date:"2026-08-22",items:[
    "홈 시간 아래에 현실 달력을 기준으로 한 게임 날짜와 요일 표시",
    "등록 일정의 시작·종료 시간에는 임의 생활 행동보다 해당 일정이 우선되도록 생활 로그 교정",
    "동행자가 지정되지 않은 일정에 예정에 없던 캐릭터 대화나 공동 행동이 끼어들지 않도록 수정",
    "관계 설정에 ‘함께 다니기’를 추가해 둘 다 별도 일정이 없을 때 같은 장소의 공동 행동과 생활 로그 생성",
    "서로 다른 일정이나 명시된 일정 동행자는 관계 동행보다 항상 우선하도록 충돌 방지",
    "v1.0.87의 최신 캐릭터 화면과 자산 143개를 보존한 v1.0.88(92) AAB·APK 생성"
  ]},
  {version:"1.0.78.2",code:91,date:"2026-08-22",items:[
    "현재 배포 계보인 v1.0.78.1(87)을 기준으로 홈에 게임 날짜와 요일 표시",
    "등록된 일정 시간에는 임의 행동 대신 해당 일정이 생활 로그에 유지되도록 수정",
    "동행자가 없는 일정 중 예정에 없던 캐릭터 대화가 생성되지 않도록 수정",
    "관계별 ‘함께 다니기’를 추가하고 두 캐릭터의 별도 일정이 없을 때만 공동 행동으로 연결",
    "Android 웹 자산 126개 전체가 APK·AAB에 포함되었는지 검증",
    "Google Play용 v1.0.78.2(91) 서명 AAB와 직접 설치 확인용 APK 생성"
  ]},
  {version:"1.0.87",code:90,date:"2026-08-22",items:[
    "v1.0.86에서 로고가 깨지고 ‘앱 화면을 열지 못했어요’가 표시되던 Android 시작 오류 수정",
    "준비된 웹 자산 143개 전체를 APK·AAB에 직접 포함하도록 Android 패키징 경로 복구",
    "앱 자산 수가 원본과 하나라도 다르면 빌드를 중단하는 누락 방지 검사 추가",
    "APK 내부에서 시작 화면 로고·실행 모듈·캐릭터 UI 원화·폰트 포함 여부 확인",
    "Google Play용 v1.0.87(90) 서명 AAB와 직접 설치 확인용 APK 생성"
  ]},
  {version:"1.0.86",code:89,date:"2026-08-22",items:[
    "뒤로가기 버튼을 원화 비율 그대로 조금 줄여 위로 옮기고 현재 캐릭터 아이콘·선택됨·목록 팝업도 함께 위쪽으로 정렬",
    "선택됨 글자판을 현재 캐릭터 아이콘 바로 아래에 여백 없이 연결",
    "캐릭터 수에 따라 선택 팝업 높이가 자동으로 늘어나 다른 캐릭터를 최대 여섯 명까지 한 번에 표시하고 그 이상은 내부 스크롤로 제공",
    "목록 아래의 +와 위치 바꾸기를 다시 선명하게 표시하고 위치 바꾸기 밑줄 제거",
    "선택 팝업의 부모 레이어를 바로잡아 프로필·신체 등 연필 메뉴가 팝업 위로 비치거나 조작을 가리는 문제 수정",
    "모자이크 종이를 화면에 찌그러뜨려 채우지 않고 원본 비율을 유지한 기울어진 배경 장식으로 배치",
    "Google Play용 v1.0.86(89) 서명 AAB와 직접 설치 확인용 APK 생성"
  ]},
  {version:"1.0.85",code:88,date:"2026-08-22",items:[
    "서랍마을 주민등록증에서 키·몸무게를 제거하고 직업 종류를 카드 아래쪽 전체 너비로 확장해 긴 직업 이름도 줄바꿈하여 모두 표시",
    "이름·나이·생일·성별·직업 정보 묶음을 주민등록증 제목에서 조금 내려 여백과 가독성 개선",
    "선택됨 글자판을 현재 캐릭터 아이콘과 겹치지 않는 아래 위치로 옮기고 앞 레이어에 고정",
    "프로필 내보내기·캐릭터 저장·캐릭터 삭제 버튼을 원화 양끝 비율은 유지하면서 세로로 확대",
    "캐릭터 선택창에 다른 캐릭터 세 명을 한 번에 표시하고 추가 인원은 내부 스크롤로 모두 선택할 수 있도록 확장",
    "위치 바꾸기의 밑줄을 제거하고 추가·정렬 조작부를 늘어난 목록 아래에 재배치",
    "Google Play용 v1.0.85(88) 서명 AAB와 직접 설치 확인용 APK 생성"
  ]},
  {version:"1.0.78.1",code:87,date:"2026-08-22",items:[
    "현재 배포 중인 v1.0.78을 기준으로 태블릿 가로 화면에서 좌우·하단 메뉴 원화가 화면 전체를 덮을 만큼 커지던 오류 수정",
    "휴대폰 HUD 좌표는 유지하면서 태블릿의 메뉴 아이콘과 글자판에 안전한 최대 크기를 적용",
    "동기화 데이터·캐릭터·마을 설정을 변경하지 않고 화면 배치만 복구",
    "Google Play용 v1.0.78.1(87) 서명 AAB와 직접 설치 확인용 APK 생성"
  ]},
  {version:"1.0.84",code:86,date:"2026-08-22",items:[
    "태블릿 가로 화면에서 홈 좌우·하단 메뉴 원화가 화면 너비를 따라 거대해지던 반응형 크기 계산을 제한해 동기화 뒤에도 정상 비율 유지",
    "홈 상단 목재 장식과 바가 비율을 유지한 채 틈 없이 겹치도록 배치하고 직업 글자를 흰색으로 교정",
    "캐릭터 선택 버튼을 아이콘 아래에 분리하고 선택창을 뒤쪽 레이어·아래로 짙어지는 그라데이션·스크롤 가능한 전체 캐릭터 목록으로 재구성",
    "캐릭터 추가는 단순 +, 위치 바꾸기는 일반 글자로 바꾸고 목록 아이콘과 이름의 겹침 제거",
    "주민등록증 제목에 푸라닭 젠틀고딕, 2열 항목명에 KoPub Light, 값에 KoPub Bold를 적용하고 영문·일문 제목 길이 보정",
    "프로필·신체·성격·취향 선택·세계관 설정·사진·색상·배치 연필 글자를 지정된 밝은 색과 검은 외곽선으로 표시하고 터치 동작 복구",
    "캐릭터 배경의 불필요한 경계선을 제거하고 종이 모자이크가 화면을 가득 채우도록 교정",
    "관계 편집창 하단까지 스크롤해 모든 선택지를 누를 수 있도록 모바일 대화상자 스크롤 복구",
    "Google Play용 v1.0.84(86) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.83",code:85,date:"2026-08-22",items:[
    "카드지갑이 주민등록증보다 위에 보이도록 레이어를 복원하면서 주민등록증 사진 선택 영역은 그대로 작동하도록 개선",
    "선택됨 아이콘 뒤의 미색 버튼 상자를 제거하고 선택됨·프로필 내보내기·캐릭터 저장·삭제에 KCC 한빛체와 손그림 알약 에셋 적용",
    "프로필·신체·성격·취향 선택·세계관 설정·사진·색상·배치 띠를 제공 SVG의 크기와 간격으로 재배치",
    "독립된 추가 버튼을 없애고 캐릭터 추가·정렬을 제공 시안의 세로 캐릭터 선택창 안으로 이동",
    "홈 상단 목재 원화 사이 투명 여백에서 보이던 갈색 사각형 제거",
    "홈 캐릭터 이름과 시간을 흰 글자·검은 외곽선으로 통일하고 두 글자의 하단선을 1px 이내로 정렬",
    "현재 순간 카드 제목을 약 1px 줄이고 본문 행간을 넓혀 가독성과 글자 잘림 개선",
    "Google Play용 v1.0.83(85) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.82",code:84,date:"2026-08-22",items:[
    "공통 모바일 여백과 테마 덮어쓰기를 분리해 제공 SVG 카드지갑 캐릭터 화면의 종이·지갑·주민등록증·연필 메뉴 비율과 배치 복구",
    "선택됨 칸은 SD 아이콘을 우선 표시하고 아이콘이 없으면 프로필 사진, 둘 다 없으면 기존 더미 프로필을 표시하도록 개선",
    "주민등록증의 사진 칸을 누르면 프로필 사진을 추가·변경할 수 있게 연결하고 빈 사진 안내에 KCC 한빛체 적용",
    "현재 순간을 접었을 때 설명을 최대 3줄로 표시하고 본문 크기·줄 간격·하단 여백을 조정해 글자 잘림과 가독성 개선",
    "캐릭터 화면과 프로필 편집에서 선택해도 팝업이 닫히거나 화면 위치가 초기화되지 않도록 모바일 상호작용 검증",
    "새 프로필 사진 추가·변경 문구의 영어·일본어 번역 반영",
    "Google Play용 v1.0.82(84) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.81",code:83,date:"2026-08-22",items:[
    "제공 캐릭터 SVG에서 종이·카드지갑·주민등록증·여섯 연필 메뉴·추가/뒤로가기 원화를 정확히 추출해 모바일 캐릭터 화면 재구성",
    "KoPubWorld 바탕체와 Puradak Gentle Gothic을 주민등록증 및 손그림 버튼에 적용",
    "선택됨 위 회색 칸을 현재 캐릭터의 투명 SD 아이콘 자리로 연결하고 눌러 캐릭터를 바꿀 수 있게 개선",
    "프로필 생일을 연도 없이 월·일로 선택하고 잘못된 날짜는 해당 월의 마지막 날로 보정해 저장",
    "Android 프로필 내보내기가 PNG는 사진 폴더, PDF는 다운로드 폴더의 DrawerVillage에 실제 파일로 저장되도록 수정",
    "홈 상단 목재 원화를 아래쪽 기준으로 맞추고 위쪽만 잘리게 변경하며 현재 순간 카드의 불필요한 ‘서랍 로그’ 제목과 여백 정리",
    "자기 자신과 함께 있는 것으로 표시되는 로그 및 서로 다른 장소의 인물과 대화하는 로그 차단",
    "동일한 공동 장면은 어느 캐릭터 시점에서도 같은 행동 문구를 사용해 소품이 다르게 보이지 않도록 수정",
    "새 주민등록증·생일·장면 오류 문구의 영어·일본어 번역 반영",
    "Google Play용 v1.0.81(83) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.80",code:82,date:"2026-08-22",items:[
    "기기 화면 비율이 달라도 상단 목재 원화가 찌그러지지 않고 필요한 부분만 잘리도록 표시하며 홈 HUD 스크롤 차단",
    "프로필 사진과 원형 테두리 사이의 틈 제거 및 이름·직업 정렬과 간격 교정",
    "홈 메뉴 라벨을 양끝 곡선은 보존하고 평평한 가운데만 늘어나는 3조각 프레임으로 변경해 이어 붙인 틈과 글자 잘림 제거",
    "좌우·하단 메뉴 글자색을 #FFF5DD로 통일",
    "기존 시각 테마를 정리해 현재 홈 UI 하나만 기본으로 남기고 전체·캐릭터별 홈 UI 테마팩을 연결할 데이터 구조 추가",
    "캐릭터가 없는 마을로 전환할 때 홈 HUD가 깨지거나 캐릭터 화면으로 돌아가던 오류 수정",
    "취향 사전의 물건 선호 선택이 즉시 저장되지 않던 오류 수정",
    "취향 사전은 받고 싶은 물건을 설정하는 곳으로 정리하고 실제 캐릭터 선물 보내기는 우편함으로 이동",
    "새 홈 테마·빈 마을·우편함 선물 안내의 영어·일본어 문구 반영",
    "Google Play용 v1.0.80(82) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.79",code:81,date:"2026-08-21",items:[
    "홈 좌우·하단 메뉴와 직업 라벨을 한 장짜리 손그림 배경으로 바꿔 미세한 갈라짐과 늘림 경계를 제거",
    "긴 메뉴 글자가 갈색 라벨 안에서 잘리지 않도록 모바일 너비와 글자 크기 조정",
    "현재 순간 펼치기·접기 빨간 테이프와 일정 되돌아가기 버튼 뒤에 보이던 흰 사각형 제거",
    "원화 가장자리에 연결된 밝은 바탕만 투명화해 아이콘 내부의 크림색은 보존하도록 에셋 추출 개선",
    "캐릭터 화면을 프로필 용지·내보내기/저장/삭제·색상별 설정 띠로 구성한 1차 러프 UI로 재배치",
    "새 캐릭터 프로필 화면 문구의 영어·일본어 번역 반영",
    "Google Play용 v1.0.79(81) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.78",code:80,date:"2026-08-21",items:[
    "홈 좌우·하단 메뉴와 직업 표시의 손그림 갈색 라벨을 늘려도 양끝이 깨지지 않는 원화 프레임으로 복구",
    "홈 최상단 목재 장식을 복구하고 현재 순간 펼치기·접기 버튼에 제공된 빨간 테이프 원화 적용",
    "기기 글꼴 선택 기능을 제거하고 모바일 홈과 일정 UI를 KCC 한빛체로 일관되게 표시",
    "주간·월간 일정과 기념일 편집을 화면 아래에서 부드럽게 올라오고 저장·취소·뒤로가기 시 내려가는 바텀시트로 변경",
    "기념일을 0913 텍스트 대신 월과 일을 각각 선택해 등록하도록 개선",
    "일정이 끝나는 시각에 선택한 캐릭터 이름과 이미지로 알려 주는 일정 종료 알림 옵션 추가",
    "관계 화면에서 캐릭터 그룹을 만들고 일정의 함께하는 인물을 그룹 단위로 빠르게 선택하는 기능 추가",
    "설정에서 캐릭터의 다른 마을 자동 이동을 완전히 막고 기존 일정은 보존하는 옵션 추가",
    "집 구성원·관계 편안함·마을 편집과 일정 선택 중 팝업·패널·스크롤이 유지되는 회귀 검사 보강",
    "새 홈·일정·알림·그룹·이동 설정 문구의 영어·일본어 번역 반영",
    "Google Play용 v1.0.78(80) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.77",code:79,date:"2026-08-21",items:[
    "제공한 완성 홈 UI SVG의 나무 상단·프로필 링·좌우 메뉴·하단 메뉴·현재 순간 카드 위치와 여백을 모바일 화면에 반영",
    "제공 투명 스프라이트에서 집·우편함·기록물·상점·마을·캐릭터·취향·관계·일정·통계·설정 아이콘을 분리해 실제 메뉴 원화로 교체",
    "KCC 한빛체를 새 홈 HUD와 일정 화면에 적용하고 글꼴 설정의 선택 항목으로 추가",
    "720px 이하 모바일 사이트가 Android 앱과 완전히 같은 홈 HUD와 메뉴 구조를 사용하도록 통일",
    "일정 첫 화면을 캐릭터 전환·일정 추가·주간/월간 탭·7열 달력 구조로 재디자인",
    "일정 추가를 열 때 목적지 선택지 생성 오류로 창이 열리지 않던 문제 수정",
    "요일·종류·장소 같은 선택지를 눌러도 팝업이 닫히거나 배경 페이지와 대화상자 스크롤이 초기화되지 않도록 저장 흐름 수정",
    "집으로 부르기를 일정에서 제거하고 우편함의 독립 기능으로 이동",
    "모바일 우편함의 집으로 부르기 카드가 화면 너비를 넘던 문제 수정",
    "새 홈·일정·우편함 문구의 영어·일본어 번역 반영",
    "Google Play용 v1.0.77(79) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.76",code:78,date:"2026-08-20",items:[
    "주간·월간 일정의 장소에서 각 캐릭터의 집을 골라 친구 집 방문처럼 등록 가능",
    "캐릭터 집 방문 일정을 실제 집 장면과 연결하고 일정 종료 뒤 자기 집으로 돌아오는 흐름 반영",
    "일정 화면에 선택 캐릭터·전체 즉시 귀환을 추가하고 다음 등록 일정이 시작되면 자동으로 일상 재개",
    "LD 두 인물 장면에서 선택 인물을 왼쪽 전경, 동행 인물을 오른쪽 후경에 배치하면서 상단·메뉴·현재 순간·하단 HUD 아래 레이어 유지",
    "‘지금 이 순간’을 배경 없는 큰 흰 글자와 1.5px 검은 외곽선으로 교정하고 크림색 내용 카드에는 검은 테두리 추가",
    "직업 표시를 프로필에서 떨어진 독립 갈색 캡슐로 바꾸고 긴 직업명도 화면 밖으로 나가지 않게 제한",
    "새 일정 목적지와 즉시 귀환 UI·생활 장면의 영어·일본어 문구 반영",
    "Google Play용 v1.0.76(78) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.75",code:77,date:"2026-08-20",items:[
    "‘지금 이 순간’ 제목·펼치기/접기 버튼·내용 카드 전체를 눌러 같은 방식으로 펼치고 접을 수 있도록 개선",
    "접힌 현재 순간 제목은 한 줄로 유지하고 작은 설명은 최대 4줄까지 표시",
    "현재 순간 카드가 내용 길이에 맞춰 자라도록 바꿔 접힘·펼침 상태의 과한 하단 빈 여백 제거",
    "펼치기/접기 버튼을 내용 카드 위에 더 겹쳐 배치하고 모든 조작부의 열린 상태 동기화",
    "상단 직업 배경과 머리글 사이의 틈을 없애고 직업 배경이 프로필 사진을 침범하지 않도록 수정",
    "알림을 게임플레이 설정에서 분리해 독립 알림 메뉴로 이동하고 영어·일본어 메뉴 번역 반영",
    "예전 관계 데이터가 새 ‘함께 있을 때의 편안함’ 선택값을 덮어쓰던 오류를 10개 선택지 전체에서 수정",
    "Google Play용 v1.0.75(77) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.74",code:76,date:"2026-08-20",items:[
    "‘지금 이 순간’을 배경 없는 흰 글씨와 검은 외곽선으로 변경해 장면 위에서도 선명하게 표시",
    "접힌 현재 순간 카드의 긴 제목·설명을 말줄임하고 건물 외관과 위치 정보는 카드 안에 유지",
    "펼친 상태에서도 현재 순간 제목과 접기 버튼을 카드 위에 유지하고 본문을 카드 안에서 확인 가능",
    "상단 이름·직업·시간과 현재 순간 문구가 사용자가 고른 글꼴을 그대로 사용하도록 수정",
    "그리운 심심체를 강제 적용하지 않고 설정에서 고를 수 있는 선택 글꼴로 추가",
    "SVG에 맞춰 시간 높이와 상단 갈색 영역을 조정하고 직업 글자 길이에 따라 영역이 늘어나도록 개선",
    "Google Play용 v1.0.74(76) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.73",code:75,date:"2026-08-20",items:[
    "412×917 SVG의 실제 여백을 기준으로 좌우 기능 메뉴와 하단 메뉴 위치·크기 재조정",
    "‘지금 이 순간’ 카드의 제목 탭과 펼치기·접기 기능 복구",
    "인물 이름의 검은 외곽선처럼 보이던 그림자를 제거하고 건물 외관 이미지는 카드 위치 정보에 유지",
    "주간 루틴 메뉴를 ‘일정’으로 변경하고 일본어 메뉴를 人物·好み·予定·郵便·記録 등 짧고 자연스러운 표기로 교정",
    "Google Play용 v1.0.73(75) 서명 AAB와 직접 설치용 APK 생성"
  ]},
  {version:"1.0.72",code:74,date:"2026-08-20",items:[
    "PC 사이트 관찰 화면에 Android 전용 HUD가 크게 표시되던 문제 수정",
    "PC 관찰 화면의 캐릭터 목록·큰 현재 장면·마을 지도·오늘의 기록 구성 복구",
    "Android 앱은 v1.0.71에서 적용한 전용 HUD와 설정 선택 안정화 유지",
    "앞선 수정과 사이트 복구를 포함한 서명된 Google Play용 AAB 생성"
  ]},
  {version:"1.0.71",code:73,date:"2026-08-20",items:[
    "집 구성원·주거 방식·방문 요일을 선택해도 열린 편집창과 현재 스크롤 위치가 유지되도록 수정",
    "관계 설정의 ‘함께 있을 때의 편안함’에서 고른 값이 다른 기본값으로 바뀌던 문제 수정",
    "마을 건물 추가·편집 선택 항목을 조작할 때 편집창이 닫히거나 위로 이동하지 않도록 수정",
    "인물 선택창을 좌우 메뉴보다 위에 표시하고 캐릭터 사진 뒤의 흰 사각형 제거",
    "제공된 SVG와 글꼴을 기준으로 이름·직업·시간·‘지금 이 순간’ 글자 크기와 카드 배치 조정",
    "현재 순간 카드의 위치 자리에 집 또는 건물 외관 이미지 표시",
    "새 위치 안내 문구의 영어·일본어 번역 추가"
  ]},
  {version:"1.0.70",code:72,date:"2026-08-20",items:[
    "집 구성원·방문 요일을 선택할 때 화면이 위로 이동하거나 선택값이 반영되지 않던 문제 수정",
    "관계 설정의 ‘함께 있을 때 편안함’ 선택값이 다른 항목으로 되돌아가던 문제 수정",
    "마을 편집에서 건물 선택 항목을 조작할 때 편집 화면의 위치가 초기화되던 문제 수정",
    "관찰 장면의 음식 소품이 여러 겹 또는 반투명 사각형으로 깨져 보이던 표시 정리",
    "두 인물 장면에서 상대 이름 대신 자기 이름이 반복되어 표시되던 문구 수정",
    "영어·일본어 화면 문구 번역 보강"
  ]},
  {version:"1.0.69",code:71,date:"2026-08-20",items:[
    "제공된 피그마·SVG의 412×917 좌표 비율을 기준으로 Android 관찰 홈 HUD 재배치",
    "디자인의 회색 상자와 회색 원은 자리표시로만 해석하고 실제 앱 배경에서는 완전히 제거",
    "프로필 자리에는 원형 프로필 사진을, 각 메뉴 자리에는 손그림 원본 아이콘을 잘리지 않게 표시",
    "좌우 메뉴와 하단 메뉴의 갈색 이름표가 아이콘 아래에 걸쳐 보이도록 정렬",
    "다른 화면에서 뒤로갈 때 프로필 선택 버튼까지 입력이 전달되지 않도록 터치 차단 유지",
    "영어·일본어 관찰 화면과 메뉴 관련 문구 번역 보강"
  ]},
  {version:"1.0.68",code:70,date:"2026-08-20",items:[
    "다른 메뉴의 뒤로가기 입력이 관찰 화면 프로필 버튼까지 전달되어 인물 선택 팝업이 열리던 문제 수정",
    "Android 관찰 화면을 앱 전용 HUD 구조로 다시 만들고 PC 사이트 화면과 렌더링 경로를 분리",
    "사용자가 그린 프로필 테두리·캐릭터 카드·취향 사전·우편함·마을 원화를 잘리지 않게 전체 표시",
    "좌우 기능 메뉴를 러프 배치에 맞춰 위로 올리고 아이콘 뒤의 흰색·남색·미색 상자 제거",
    "PC 사이트의 상단 메뉴와 마을 선택 기능 복구",
    "영어·일본어 관찰 화면과 메뉴 관련 문구 번역 보강"
  ]},
  {version:"1.0.67",code:69,date:"2026-08-20",items:[
    "관찰 화면을 러프의 위치 관계에 맞춰 상단 프로필·좌우 기능·현재 순간·하단 메뉴 구조로 정돈",
    "메뉴 뒤 별도 색상 상자 없이 배경 위에 아이콘과 이름만 표시",
    "화면 비율과 안전영역에 반응하고 작거나 짧은 기기에서는 자동으로 간격·크기가 줄어들도록 개선",
    "Android 홈 관찰 화면을 좌우로 밀어 이전·다음 캐릭터를 선택하는 조작 안정화",
    "세로 스크롤과 버튼 조작이 캐릭터 스와이프로 잘못 인식되지 않도록 터치 방향·거리 판정 보강",
    "영어·일본어 관찰 화면 관련 문구 번역 보강"
  ]},
  {version:"1.0.66",code:68,date:"2026-08-20",items:[
    "관찰 화면 상단 원형에 SD 아이콘 대신 둥글게 자른 프로필 사진 표시",
    "인물 선택 목록을 화면 안 고정 목록이 아닌 독립 팝업으로 변경",
    "다른 메뉴에서 돌아왔을 때 인물 선택 팝업이 열린 상태로 남는 문제 수정",
    "현재 순간 카드를 접히지 않고 항상 펼쳐진 상태로 표시",
    "우편함·마을 메뉴의 흰 사각 배경을 제거하고 손그림 마을 지도를 크게 표시",
    "집 구성원 설정 항목을 선택할 때 화면이 최상단으로 이동하던 문제 수정",
    "출퇴근 구성원은 숙박 방을 ‘기타·없음’으로 지정할 수 있도록 개선",
    "영어·일본어 메뉴 및 집 구성원 관련 문구 번역 보강"
  ]},
  {version:"1.0.65",code:67,date:"2026-08-20",items:[
    "다른 화면에서 돌아왔을 때 인물 변경 목록이 자동으로 열린 채 남던 오류 수정",
    "Android 관찰 화면을 좌우로 밀어 이전·다음 캐릭터를 선택하는 조작 추가",
    "캐릭터 연락을 캐릭터 설정 화면에서 분리해 독립 우편함 메뉴로 이동",
    "관찰 화면 좌우·하단 메뉴 뒤의 남색·미색 상자 제거",
    "사용자 원화에서 두루마리 지도만 정확히 잘라 마을 메뉴에 적용"
  ]},
  {version:"1.0.64",code:66,date:"2026-08-20",items:[
    "관찰 화면을 캐릭터 중심의 게임 HUD 레이아웃으로 전면 재구성",
    "캐릭터·취향 사전·관계는 왼쪽, 일정·통계·설정은 오른쪽 메뉴로 정리",
    "현재 순간 카드와 관찰·집·오늘의 기록·상점·마을 하단 메뉴 추가",
    "직접 그린 두루마리 지도 마을 아이콘을 사이트와 Android 앱에 적용",
    "영어·일본어 HUD 접근성 문구와 관련 항목 번역 보강"
  ]},
  {version:"1.0.63",code:65,date:"2026-08-20",items:[
    "받고 싶은 연락을 선택할 때 설정 화면이 옆으로 밀려 백지처럼 보이던 오류 수정",
    "연락 종류 선택을 화면 전체 갱신 없는 안정적인 버튼 방식으로 변경",
    "현재 앱 버전과 빌드 번호를 설정 첫 화면에서 바로 확인하도록 이동"
  ]},
  {version:"1.0.62",code:64,date:"2026-08-20",items:[
    "같은 캐릭터가 서로 다른 장소의 두 생활 장면에 동시에 등장하던 문제 수정",
    "선택한 여러 캐릭터가 날짜와 알림 순서에 따라 고르게 연락하도록 개선",
    "집 안 캐릭터에 잔잔한 둥둥 애니메이션 추가",
    "행동 아이콘이 캐릭터 이름표와 상태 문구를 가리지 않도록 배치 개선"
  ]},
  {version:"1.0.61",code:63,date:"2026-08-20",items:[
    "사이트에 먼저 반영된 설정·집·일정·마을 화면 수정분을 Android 앱에도 동기화",
    "집 안 행동 이모지의 크기를 줄이고 아이콘 뒤 흰 사각 배경 제거",
    "가로로 긴 방의 인물 가로 배치와 모바일 집 화면 겹침 개선",
    "설정 연락 선택, 월간 달력, 캐릭터 테마 색상 화면의 모바일 폭 안정화",
    "내부 테스트용 AAB와 직접 설치용 APK 빌드 완료"
  ]},
  {version:"1.0.60",code:62,date:"2026-08-20",items:[
    "설정을 게임플레이·알림, 화면·조작, 계정·데이터, 도움말·문의 메뉴로 정리",
    "받고 싶은 연락 선택 시 설정 화면이 사라지거나 백지로 이동하던 오류 수정",
    "월간 달력 이동 버튼, 캐릭터 테마 색상, 집 행동 소품의 모바일 배치 개선",
    "캐릭터를 선택하면 해당 캐릭터가 있는 마을을 관찰하고 선택 상태가 이동 뒤에도 유지되도록 개선",
    "마을 화면 배율을 넓히고 새 마을 추가는 편집 모드에서만 보이도록 변경",
    "손그림 음식점 일러스트를 사이트와 앱의 기본 음식점으로 통일",
    "중복 상태 모듈과 불필요한 화면 갱신을 제거해 메뉴 반응과 이미지 로딩 최적화",
    "가로로 긴 방에서는 캐릭터가 가로 방향으로 배치되도록 수정",
    "기기와 클라우드의 차량 순서가 달라도 차량 사진이 올바른 차량에 유지되도록 수정",
    "일정 추가 창에서 취소했는데도 일정이 생성되던 오류 수정",
    "월간 달력에 캐릭터 생일과 기념일 표시 및 당일 생활 이벤트·캐릭터 말투 알림 추가",
    "캐릭터 연락 알림을 하루 횟수 또는 몇 시간 간격으로 설정하는 기능 추가"
  ]},
  {version:"1.0.59",code:61,date:"2026-08-19",items:["Android 앱 시작 직후 반복 종료될 수 있던 문제 긴급 수정"]},
  {version:"1.0.58",code:60,date:"2026-08-19",items:["캐릭터 연락 메뉴와 테마 색상 화면 정리","주간·월간 일정 분리와 집 화면 사용성 개선","손그림 음식점 기본 일러스트 반영"]}
];
