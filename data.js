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
window.SEORAP_DATA.tasks.push({id:"dv-ios-testflight-198-build4",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"iOS 1.0.198 build 4 내부 TestFlight 업로드 수락",summary:"Actions 33881610964 success(6분 40초). Apple API 접근, Mac 서명 identity, Release Archive/codesign 검사, 내부 전용 IPA export, Apple validate/upload 통과. 추가 읽기 전용 상태 조회 33882470681에서는 build=null이므로 Apple 처리 완료/설치 가능은 아직 미확인. 정식 심사·외부 초대·공개 링크 생성 없음. Android 213 유지, 첫 테스트 안내 영어·일본어 각 100%, 전체 로그 번역률 미측정."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-build4-device-access",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"TestFlight 처리 완료·본인 테스트 접근·아이패드 실기기 확인",summary:"Apple에서 1.0.198 (4) 처리 완료 후 수출 규정 준수 항목과 내부 테스트 그룹/본인 계정/빌드 연결 확인 필요. 사용자는 아이패드에 TestFlight 설치 완료. 초대·설치·저장 복원·사진·음원·화면/성능 실기기 검증은 아직 수행하지 않음. 로그인/클라우드 동기화/구매 및 정식 출시 준비는 별도."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-tablet-build5",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"iOS 1.0.198 build 5 태블릿 UI 수정 준비 (미배포)",summary:"dev에서 큰 화면의 닫힌 집 편집 패널 노출, 검색창·집 사진 과대 확대, 세로 방 영역 빈칸을 수정했어요. 가로 관찰 지도·장면·메뉴와 집 정보 패널을 정리하고 관계 빈 화면에 뒤로가기·추가 안내를 넣었어요. Chrome 다섯 화면 크기 검사와 iOS 자산 준비 완료. 실제 iPad 새 빌드 검증과 TestFlight 업로드는 아직 하지 않았어요. 새 안내 영어·일본어 각 100%, 전체 로그 번역률 미측정. Android code 213, 운영 main 유지."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-build5-device-qa",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"iOS build 5 TestFlight 및 iPad 재검증",summary:"사용자가 요청한 시점에 별도 업로드. 현재 iPad에 설치된 것은 build 4이며 새 UI가 자동 반영되지는 않아요. build 5 업로드 후 가로/세로 화면, 편집·저장·복원·소리·발열 확인 필요."});
const deviceAccessTask=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-ios-build4-device-access");
if(deviceAccessTask){deviceAccessTask.title="iPad build 4 실행 확인 · 저장/소리/성능 후속";deviceAccessTask.summary="사용자 제공 화면과 응답으로 TestFlight build 4 설치·실행·사진 표시 확인. 태블릿 화면 배치 오류는 build 5 코드에서 수정 준비했으나 아직 미배포. 저장 복원·음원·발열 및 새 화면의 실기기 재검증은 남아 있어요. 로그인/클라우드/구매/정식 출시는 별도.";}
window.SEORAP_DATA.tasks.push({id:"dv-ios-tablet-rotation-build5",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"iOS build 5 세로 마을·회전 재검증 (업로드 전)",summary:"가로 화면에만 적용되던 태블릿 마을 스타일을 세로에도 적용해 거대한 버튼과 좁아진 지도 문제를 수정했어요. 같은 화면에서 가로/세로 전환, 방 편집 입력 유지 및 뒤로가기, 1명 관계 뒤로가기, 구성원 닫힘과 집 사진 비율 검사 통과. Chrome 기반이며 새 iPad 실기기 검사는 미완료. Android 213 유지. 새 문구 없음; build 5 신규 영어/일본어 각 100% 검사 유지. 설치된 build 4에는 미반영, TestFlight 업로드 승인은 별도."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-testflight-build5-upload",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"iOS 1.0.198 (5) 내부 TestFlight 업로드 수락 완료",summary:"Actions 33888877404 success (7분 29초), Mac Archive/codesign/내부 IPA export/Apple 검증·업로드 통과. uploadAccepted=true, submittedForReview=false. 종료 시 Apple 조회 build=null이라 처리 완료·설치 가능은 미확인. 빌드 4 이후 태블릿 집/관계/마을·세로 회전 수정 포함. Android 213 유지. 테스트 노트 한국어·영어·일본어 및 Discord 공지 작성."});
const build5DeviceQa=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-ios-build5-device-qa");
if(build5DeviceQa){build5DeviceQa.title="iOS build 5 Apple 처리·iPad 업데이트 후 재검증";build5DeviceQa.summary="2026-09-05 내부 TestFlight 업로드 수락 완료. Apple 처리 완료·테스터 설치 가능은 종료 보고서에서 미확인. TestFlight에 1.0.198 (5)가 표시되면 기존 앱을 삭제하지 않고 업데이트한 뒤 가로/세로·뒤로가기·저장/복원·소리·발열 확인 필요.";}
window.SEORAP_DATA.tasks.push({id:"dv-ios-build6-furniture-photo-shop",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"iOS 1.0.198 build 6 가구 방 이동·원형 프로필·상점 준비",summary:"방 종류 무관 가구 설치, 다른 방 드래그 및 다른 층으로 보내기, 소품/침대 지정/크기/방향 유지. 프로필 사진만 원형, SD/LD 원화 보존. iOS 상점 둘러보기 개방, 구매/복원은 잠금. Chrome 다섯 화면 크기·저장 재실행·취소·상점 3언어 검사와 iOS/Android 자산 준비 통과. dev 준비분으로 TestFlight 미업로드, Android 213 유지. 새 문구 영어·일본어 각 100%, 전체 번역률 미측정."});
window.SEORAP_DATA.tasks.push({id:"dv-ios-google-login-config",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"iOS 구글 로그인 연동 — Firebase 설정 파일 대기",summary:"프로젝트와 Downloads에서 GoogleService-Info.plist를 찾지 못했어요. 기존 Firebase 프로젝트 설정에서 com.drawervillage.app iOS 앱을 선택/등록해 파일을 받는 방법을 사용자에게 안내했어요. 실제 로그인/클라우드 동기화는 아직 미연결이며 로컬 데이터와 권한 유지. 수신 후 플러그인·URL scheme·토큰 교환·계정 격리·저장 복원 검증 필요. 실제 StoreKit 결제/복원은 별도 미완료."});
window.SEORAP_DATA.tasks.push({id:"dv-android-tablet-furniture-214",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.199 / 214 태블릿·가구 자유 배치 AAB 준비",summary:"iOS 태블릿 수정분을 Android 자산에 포함하고 세로 강제 잠금을 해제했어요. 2인 침대 얼굴·집 제목 아이콘·책 페이지 영역, 공식 관계 카드·첫 캐릭터 입력창·상점 글자 겹침 수정. 가구창 방 분류를 없애고 원하는 방으로 드래그하면 방과 위치 자동 지정. Android 준비 자산으로 다섯 화면 크기·방/층 이동·취소·저장 복원 검사 통과, 서명 AAB/bundletool/213개 자산 해시 검증 완료. 실제 Android 태블릿·Play 업로드·심사는 미실행. dev 반영, 운영 main/웹/iOS 배포 유지. 전체 UI 정적 번역: 영어 75.2%, 일본어 75.2%."});
window.SEORAP_DATA.tasks.push({id:"dv-android-214-device-play",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"Android 214 실기기·Play 업로드 확인",summary:"drawer-village-v1.0.199-code214-dev-release.aab 준비 완료. 현재 Play 최고 versionCode가 214 미만인지 확인하고 테스트 트랙에 업로드. 기존 앱을 삭제하지 않고 업데이트해 태블릿 가로/세로·가구 터치 드래그·2인 침대·저장 복원·소리/성능 확인 후 프로덕션 출시. 로그인·실결제 검증은 이번 UI 자동 검사에 포함되지 않아요."});
window.SEORAP_DATA.tasks.push({id:"dv-sleep-215",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.200 / 215 수면 유지·잠 습관 애니메이션",summary:"자는 아이콘을 약 18% 키우고 침대 그림 기준 6% 아래로 내려 이불을 조금 더 덮음. 침대와 이불 확대/회전 기준 일치. 자정 수면 시작 0 처리와 수면 장면 식별을 수정해 재실행/분 경과 때 걷기 재시작 방지, 유효한 침대 유지. 실제 기상 이동 보존. 취침 습관 10종에 따른 아이콘 애니메이션과 움직임 줄이기 지원. 118회 복원·시간 검사/집 생활 70개/5개 화면 크기/알파 가림·애니메이션 검사, 서명 AAB·bundletool·213개 자산 해시 검증 통과. dev 준비만 완료, Play/iOS/웹 배포 미실행. 전체 UI 정적 번역 영어·일본어 각 75.2%."});
const android215Followup=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-android-214-device-play");
if(android215Followup){android215Followup.title="Android 215 실기기·Play 업로드 확인";android215Followup.summary="최신 파일 drawer-village-v1.0.200-code215-dev-release.aab. 214의 태블릿/가구 수정과 215 수면 수정 포함. Play 최고 코드가 215 미만인지 확인 후 테스트 업로드. 기존 앱을 삭제하지 않고 재실행 수면 유지·잠 습관별 움직임·태블릿 회전·저장/성능 확인 후 프로덕션 출시. 아직 업로드/실기기 검사하지 않았어요.";}
window.SEORAP_DATA.tasks.push({id:"dv-feedback-mail-spouse-216",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.201 / 216 소지품 이름·부부 등록 상태·우편 삭제",summary:"캐릭터 설정의 소지품 선택 첫 화면에 내부 UUID 대신 사전 이름을 바로 표시해 다시 누르지 않아도 알아볼 수 있게 했어요. 부부 관계는 실제 관계와 별도로 법적 등록/미등록을 선택하고 저장할 수 있어요. 우편함에는 편지 한 건 삭제와 전체 삭제를 추가했으며, 삭제한 자동 편지가 다시 생기지 않도록 계정별 삭제 기록을 보존해요. 384×854 화면, 우편 삭제/관계 저장/기존 회귀검사와 Android APK·서명 AAB·213개 자산 검증 통과. dev 준비판이며 Play/iOS/웹 배포는 하지 않았어요. 전체 정적 UI 번역 영어 75.2%, 일본어 75.2%."});
window.SEORAP_DATA.tasks.push({id:"dv-production-access-granted-216",project:"서랍마을",section:"release",subsection:"play-store",completed:true,title:"Google Play 프로덕션 액세스 승인",summary:"사용자 확인으로 Play Console 프로덕션 액세스가 열렸어요. 이제 프로덕션 출시를 제출할 수 있지만 자동 공개된 것은 아니며, 출시 국가·스토어 등록정보·앱 콘텐츠·데이터 보안·최종 AAB와 출시 노트를 점검한 뒤 심사와 출시 절차가 남아 있어요."});
window.SEORAP_DATA.tasks.push({id:"dv-relationship-town-walk-218",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.203 / 218 관계 편집·마을 산책 동선 개선",summary:"관계 편집을 겹치지 않는 세로 스크롤 카드 구조로 바꾸고 선택한 모든 캐릭터를 위·아래 버튼으로 정렬할 수 있게 했어요. 부부의 법적 등록 여부는 외부 공개 방식과 분리된 별도 체크 항목으로 저장하며 기존 데이터도 이전해요. 분수 등 한 장식에 모인 캐릭터는 둘레의 다른 자리에서 멈춰 구경하고, 산책 장면은 집 근처의 작은 원 대신 마을 전체를 잇는 여러 동선을 캐릭터별 시차·속도로 걸어요. 384×854 관계 화면과 분수 7명·산책 4명 배치, 관계/산책 자동 검사, Android APK·서명 AAB·213개 자산 해시 검증 통과. dev 준비판이며 Play/iOS/웹 배포는 하지 않았어요. 전체 정적 UI 번역 영어 75.2%, 일본어 75.2%."});
window.SEORAP_DATA.tasks.push({id:"dv-gait-family-tablet-219",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.204 / 219 걸음걸이·가족 등록·태블릿 캐릭터 동기화",summary:"마을 전체 산책을 현실적인 속도로 늦추고 캐릭터의 걸음걸이에 따라 이동 시간·보폭 애니메이션·발소리 간격이 함께 달라지게 했어요. 가장 빠른 ‘그림자처럼 매우 민첩하게’ 걸음도 추가했어요. 법적 등록 여부는 부부뿐 아니라 부모·자녀와 형제·자매에도 별도 항목으로 저장해요. 태블릿 가로 캐릭터 화면은 기존 목록과 2열 디자인을 유지하면서 오른쪽 내용이 스마트폰과 같은 7개 탭 및 저장 상태를 공유하고, 회전 중에도 보고 있던 탭이 이어져요. 전용·관계·산책·발소리·캐릭터·신고 오류·홈 생활 회귀검사와 Android APK·서명 AAB·214개 자산 해시 검증, iOS 로컬 준비 검사를 통과했어요. dev 준비판이며 Play/웹/TestFlight 배포는 하지 않았어요. 전체 정적 UI 번역 영어 75.2%, 일본어 75.1%."});
window.SEORAP_DATA.tasks.push({id:"dv-production-hotfix-220",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.204.1 / 220 캐릭터 이동·폰트·심각한 렉 긴급 수정",summary:"프로덕션 219 기준 긴급 핫픽스예요. 캐릭터 메뉴와 새 캐릭터 생성은 항상 전체설정으로 바로 이동하고, 스마트폰·태블릿의 뒤로가기를 공통 관찰 화면 이동 경로에 연결했어요. 전체설정에서 숨은 허브·구형·중복 편집기를 함께 만들지 않아 캐릭터 수에 따라 커지던 화면 생성량을 줄였고, 전체설정 메뉴에서 빠른설정도 열 수 있어요. 빠른설정은 사용자가 고른 UI 글꼴을 따릅니다. 마을 산책은 합성 이동 경로를 사용하고 발소리 재생 중 반복 레이아웃 측정을 없애 끊김과 발열을 줄였어요. 메뉴 9종·성능 10종·걸음/태블릿 회귀검사, Android APK/AAB 빌드·서명·214개 자산 해시 검증 통과. 전체 정적 UI 번역 영어 75.2%, 일본어 75.1%. Play Console 업로드와 Galaxy 실기기 최종 확인은 남아 있어요."});
const superseded220=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-production-hotfix-220");
if(superseded220){superseded220.title="Android 1.0.204.1 / 220 폐기된 핫픽스 빌드";superseded220.summary="프로덕션 219용으로 만든 내부 핫픽스였으나 캐릭터 탭과 새 캐릭터 생성 뒤 전체설정으로 바로 보내는 요구 해석이 잘못되어 Play Console 업로드 전에 폐기했어요. 성능 개선은 221에 유지하고, 캐릭터 진입·빠른설정 구조는 221에서 바로잡았습니다.";}
window.SEORAP_DATA.tasks.push({id:"dv-character-hub-quick-hotfix-221",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.204.2 / 221 캐릭터 메인·빠른설정 긴급 수정",summary:"프로덕션 219용 220 대체 핫픽스예요. 첫 캐릭터 생성과 캐릭터 탭 진입은 첨부 원화에 맞춘 캐릭터 메인 화면을 먼저 열어요. 빠른설정과 전체설정을 서로 독립된 선택으로 분리하고, 빠른설정 상단에 항상 보이는 뒤로가기·저장 버튼을 두며 선택한 앱 UI 글꼴을 일관되게 적용했어요. 전체설정과 Android 시스템 뒤로가기는 캐릭터 메인으로 돌아와요. 메인 화면에서는 무거운 전체설정 DOM을 만들지 않아 캐릭터가 많을 때의 탭 부하를 줄이고 220의 마을 산책·발소리 성능 개선은 유지했어요. 전용·메뉴·성능·걸음/태블릿 회귀검사, 웹/Android 준비, APK/AAB 빌드·서명·214개 자산 해시 검증 통과. 한국어·영어·일본어 출시노트 작성, 전체 정적 UI 번역 영어 75.2%, 일본어 75.1%. main과 dev 반영 완료; Play 업로드·Galaxy 실기기 최종 확인은 남아 있어요."});
window.SEORAP_DATA.tasks.push({id:"dv-prop-selection-sync-222",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.205 / 222 소품 애니메이션·설정 선택 요약 수정",summary:"관찰 장면의 문구가 일반적인 집중·휴식이어도 연결된 찻잔·음료·음식 사진의 종류를 함께 판별해 차 마시기·커피 마시기·먹기 애니메이션이 재생되도록 고쳤어요. 옷 설정을 포함한 다중 선택 메뉴는 항목을 고르거나 창을 닫는 즉시 현재 캐릭터 상태를 다시 읽어 ‘N개 선택됨’ 요약을 갱신하므로 다른 페이지를 다녀올 필요가 없어요. 전용 검사·캐릭터 UI·취향 팝업·신고 오류·선택 연속성 회귀검사, 웹/Android 준비, APK/AAB 빌드·서명·214개 자산 해시 검증을 통과했어요. 새 동적 요약은 한국어·영어·일본어를 지원하며 전체 정적 UI 번역은 영어 75.2%, 일본어 75.1%예요. 앱 dev 준비판이며 운영 main·사이트·Play 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-first-login-preserve-223",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.206 / 223 첫 캐릭터 로그인 보존",summary:"로그인 전에 만든 첫 캐릭터가 Google 계정 저장 영역으로 전환되는 순간 화면에서 사라지던 원인을 고쳤어요. 사용자가 직접 첫 로그인을 시작했고 새 계정에 기기 저장본이 없을 때만 게스트 저장을 계정으로 안전하게 복사하며, 기존 클라우드 데이터가 있으면 캐릭터·집·마을을 병합한 뒤 동기화해요. 원래 게스트 복구본은 삭제하지 않고 일반 계정 전환·자동 로그인에서는 다른 계정 데이터가 섞이지 않아요. 로그인/클라우드 모의 검사와 223 전용·캐릭터 UI·취향·선택 연속성·기존 제보 회귀검사, 웹/Android 준비, APK/AAB 빌드·서명·214개 자산 해시 검증을 통과했어요. 한국어·영어·일본어 출시노트 완료, 전체 정적 UI 번역 영어 75.2%, 일본어 75.1%. 앱 dev 준비판이며 운영 main·사이트·Play 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-android-223-device-play",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"Android 224 태블릿 세로·휴대폰 UI와 기존 수정 실기기 확인",summary:"최신 파일은 drawer-village-v1.0.207-code224-dev-debug.apk와 drawer-village-v1.0.207-code224-dev-release.aab이며 223 이하 파일 대신 224를 사용하세요. Galaxy SM-X700(Android 16)에서 앱이 세로로 고정되고 홈·캐릭터·마을·설정 등 모든 화면이 휴대폰과 같은 단일 열 UI로 보이는지, 캐릭터 창이 휴대폰과 같은 주민등록증·빠른설정·전체설정 흐름인지 확인하세요. 관찰·마을 상단 흰색 제목 크기와 위치, 안테 찻잔 애니메이션, 다중 선택 요약 즉시 갱신, 첫 캐릭터 로그인 보존도 함께 확인해야 해요. Play 테스트 트랙에 올릴 때는 Console의 최고 versionCode가 224보다 낮은지 먼저 확인하세요. 아직 Play 업로드나 Galaxy 실기기 확인은 하지 않았습니다."});
window.SEORAP_DATA.tasks.push({id:"dv-tablet-phone-layout-224",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.207 / 224 태블릿 세로·휴대폰 UI 통일",summary:"Android 태블릿을 세로 방향으로 고정하고 큰 화면에서도 480px 휴대폰 레이아웃을 사용하도록 통일했어요. 캐릭터 화면은 태블릿 전용 2열 목록을 제거하고 휴대폰과 같은 주민등록증·빠른설정·전체설정 흐름을 사용하므로 오른쪽 내용이 비던 오류가 함께 사라져요. 관찰 화면 캐릭터 이름과 마을 화면 집 이름의 흰색 글씨 크기·위치를 홈 화면 기준으로 맞췄어요. 224 전용·캐릭터 UI·태블릿·기존 제보·선택 연속성·로그인 계정 격리 검사, 웹/Android 준비, APK/AAB 빌드·서명·214개 자산 해시 검증을 통과했어요. 한국어·영어·일본어 출시노트 완료, 전체 정적 UI 번역 영어 75.2%, 일본어 75.1%. 앱 dev 준비판이며 운영 main·사이트·Play 배포는 변경하지 않았고 Galaxy 실기기 확인은 남아 있어요."});
const superseded224=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-tablet-phone-layout-224");
if(superseded224){superseded224.title="Android 1.0.207 / 224 폐기된 태블릿 휴대폰 강제 빌드";superseded224.summary="Android 태블릿을 세로·480px 휴대폰 화면으로 강제했지만 실제 Galaxy 태블릿에서 관찰 HUD·캐릭터 배치·마을·캐릭터 편집 화면을 깨뜨려 사용하지 않기로 했어요. Play 업로드 전에 폐기했으며, code 225에서 방향 고정과 강제 뷰포트를 제거하고 원래 태블릿 화면을 복원했습니다.";}
window.SEORAP_DATA.tasks.push({id:"dv-tablet-layout-spread-225",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.208 / 225 태블릿 화면·양면 설정책 복구",summary:"code 224의 세로·480px 휴대폰 강제를 제거하고 Android 태블릿의 가로·세로 회전 및 기존 iPad형 화면을 복원했어요. 캐릭터 목록 오른쪽에는 선택한 인물 정보와 빠른/전체설정 바로가기를 표시하고, 가로 전체설정은 펼친 책 양쪽을 두 페이지씩 보여 줘요. 태블릿 마을 장식의 큰 흰 테두리를 제거하고 세로 관찰 캐릭터를 스마트폰 비율로 키워 상태 카드 위에 고정했으며 HUD 글자·메뉴가 화면을 벗어나지 않게 했어요. SM-X700 크기 가로/세로 시각 검사, 장식 계산 스타일, 첫 로그인 보존과 캐릭터·선택·보행 회귀검사, Android APK/AAB 빌드·214개 자산 해시·서명을 검증했어요. 영어 2090/2778(75.2%), 일본어 2089/2778(75.2%)이며 새 문구는 양쪽 모두 번역했습니다. 앱 dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-bed-header-226",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.209 / 226 메인 기준 제목·침대 동작 수정",summary:"관찰 메인 화면의 제목 위치와 크기를 원래 값으로 복원하고 집·마을 제목만 그 기준에 맞췄어요. 두 캐릭터가 침대에서 시간을 보낼 때 얼굴을 더 크게 해 베개 쪽에 배치하고 이불 아래에서 천천히 움직이게 했으며, 두 이름과 행동 요약을 하나의 전경 카드로 합쳐 이불·하단 프레임에 가리지 않게 했어요. 휴대폰·태블릿 제목 좌표 및 침대 레이어 시각검사, 첫 로그인 보존·캐릭터·선택·제보·생활 시작·보행 회귀검사, Android APK/AAB 빌드·버전·회전 가능 매니페스트·서명을 검증했어요. 영어 2090/2778(75.2%), 일본어 2089/2778(75.2%)이며 새 미번역 UI 문구는 없습니다. 앱 dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-startup-sync-backup-bed-229",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.212 / 229 시작 동기화·백업·침대 최종 수정",summary:"앱을 시작하거나 Google 계정을 전환하면 클라우드 저장본 다운로드와 안전한 병합을 먼저 끝낸 뒤 게임을 열도록 바꿨어요. 로그인 전에 만든 첫 캐릭터는 새 계정으로 인계하면서 게스트 복구본도 유지합니다. Android 백업 내보내기는 다운로드 링크 대신 MediaStore로 연결해 다운로드/DrawerVillage에 JSON 파일을 실제 저장해요. 침대의 두 얼굴 크기·베개 위치·이불 레이어를 다시 조정하고 중복 말풍선·개별 상태를 없애 공유 이름/행동 카드 하나만 앞에 표시했으며, 로그 프로필 사진도 잘리지 않는 원형으로 수정했어요. 태블릿·양면 설정책·마을 장식·관찰 배치·메인 기준 제목, 찻잔 애니메이션과 선택 수 즉시 갱신 수정도 포함합니다. 첫 로그인/계정 격리, 백업/클라우드 병합, 침대·제목 렌더, 캐릭터·태블릿·선택·생활 회귀검사와 Android APK/AAB 빌드·버전·회전 가능 매니페스트·AAB 서명을 검증했어요. 영어 2090/2778(75.2%), 일본어 2089/2778(75.2%). dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-wake-relationship-tablet-230",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.213 / 230 깨우기·관계 자동 발전·태블릿 UI 수정",summary:"잠든 캐릭터를 깨운 뒤 씻기·식사·독서·휴식·운동을 바로 지시할 수 있고, 함께 활동한 캐릭터들의 관계가 실제 상호작용을 바탕으로 자동 생성·발전해요. 직접 편집한 관계 단계와 적대·라이벌 관계는 자동으로 덮어쓰지 않습니다. 태블릿 가로 전체설정은 화면을 채우는 양면 책, 세로 전체설정은 캐릭터 목록 없이 큰 단면 책으로 정돈했고 버튼 잘림을 막았어요. 가로 사전·공식 관계 목록의 과한 여백을 줄이고, 마을 캐릭터 아이콘의 흰 네모와 장식 외곽선을 제거했으며 Android 내비게이션 바 안전 영역을 실제 WebView에 적용했어요. 활동·관계 동적 검사, 1205×753/753×1205 시각 검사, 첫 로그인·클라우드·집 생활·관계·사전 회귀검사와 Android APK/AAB 빌드·버전·회전 가능 매니페스트·AAB 서명을 검증했어요. 영어 2090/2780(75.2%), 일본어 2089/2780(75.1%). dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-google-login-android17-hotfix-231",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.204.3 / 231 Google 로그인 무반응 긴급 수정",summary:"일부 Android 17 Galaxy 기기에서 Google 로그인 버튼을 눌러도 계정 선택창이 열리지 않고 동기화·불러오기·캐릭터 슬롯 구매를 진행할 수 없던 문제를 수정했어요. 응답이 멈출 수 있는 Credential Manager 경로 대신 검증된 Android 계정 선택창을 직접 열고, 버튼을 누르면 진행 상태를 즉시 표시하며 로그인 중 중복 입력과 취소를 처리합니다. 로그인 전에 만든 첫 캐릭터를 새 계정으로 인계하고 업로드하는 기존 보호 흐름도 유지했어요. Android 17 로그인 모의 검사, 첫 로그인·계정 격리·클라우드 병합·상점 결제 회귀검사, 앱 동기화, APK/AAB 빌드와 패키지 버전·Firebase Authentication 포함 여부를 검증했어요. 운영 main 1.0.204.3(code 231)과 dev 1.0.214(code 232)에 반영 완료. 영어 2083/2771(75.2%), 일본어 2082/2771(75.1%). Play Console 업로드와 Galaxy 실기기 최종 확인은 남아 있어요."});
window.SEORAP_DATA.tasks.push({id:"dv-tablet-backup-rootfix-233",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.215 / 233 태블릿 전체화면·캐릭터 패널·백업 저장 수정",summary:"태블릿 캐릭터 목록의 오른쪽 정보가 실제 화면 상태와 맞지 않는 선택자 때문에 숨겨지던 원인을 고쳐 선택한 캐릭터 정보와 설정 버튼을 다시 표시했어요. 가로 전체설정의 큰 양면 책과 두 페이지 이동은 유지하면서 관찰·마을 지도를 화면 전체로 채우고 오른쪽 남색 여백과 상단바 빈 여백을 제거했으며, 이름·직업은 프로필 옆에 정렬했어요. 캐릭터 아이콘과 마을 장식 뒤 흰 사각형·테두리·그림자를 실제 DOM 구조 기준으로 제거했습니다. 백업은 시스템 파일 저장창에서 위치와 이름을 고르고 UTF-8 JSON을 실제 쓰도록 네이티브 흐름을 교체했어요. 1205×753/753×1205 시각 검사, 첫 로그인·계정 격리·클라우드·Google 로그인·상점 회귀검사, Android 자산 준비, APK/AAB 빌드·버전·서명을 검증했어요. 영어 2090/2780(75.2%), 일본어 2089/2780(75.1%). dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않았어요."});
window.SEORAP_DATA.tasks.push({id:"dv-group-multiplayer-mvp",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.217 / 235 그룹 멀티 1차 구현",summary:"일반적인 용어인 그룹·멤버·관리자·운영자를 사용해 비공개 공동생활 멀티의 첫 단계를 구현했어요. 그룹 생성과 초대 코드 가입, 여러 마을 추가·이동, 보유 캐릭터의 그룹 주민 등록, 다른 멤버 집 공개·방문, 멤버 역할과 역할별 캐릭터 상한·집 방문 규칙 관리가 가능해요. 관리자가 그룹 주민을 내보내도 사용자의 원본 캐릭터와 집은 삭제되지 않도록 개인 저장소와 그룹 공유 문서를 분리하고 Firestore 권한 규칙을 추가했어요. 그룹 화면과 오류·안전 안내는 한국어·영어·일본어로 제공하며 계정 격리·235 전용·시각 회귀검사를 통과했어요. 공동 생활 로그와 그룹 안 관계 자동 발전은 다음 단계예요."});
window.SEORAP_DATA.tasks.push({id:"dv-tablet-portrait-phone-rootfix-235",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.217 / 235 태블릿 세로 휴대폰형 화면 근본 수정",summary:"SM-X700 세로 화면의 CSS 폭이 1205px로 보고되어 기존 900px 이하 조건을 벗어나면서 데스크톱·태블릿 가로 UI가 섞이던 원인을 수정했어요. 캐릭터 화면은 휴대폰과 같은 주민등록증·책·빠른설정·전체설정 흐름을 표시하고, 집과 관찰 홈도 휴대폰 구조를 사용해 상단 이름·시간과 메뉴 글자가 목재 상단바 및 화면 안에 유지됩니다. 가로 태블릿은 기존 iPad식 캐릭터 목록과 양면 책·2페이지 이동을 그대로 유지해요. 753×1205 세로와 1205×753 가로에서 캐릭터·집·관찰·마을·책 구성, 글자 무잘림, 투명 아이콘·장식을 시각 검증했어요."});
window.SEORAP_DATA.tasks.push({id:"dv-relationship-scroll-hotfix-236",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.204.4 / 236 관계 시선 설정 스크롤 긴급 수정",summary:"현재 Google Play 프로덕션 1.0.215(code 233)을 운영 main 기준으로 복구한 뒤 핫픽스를 만들었어요. 관계의 시선 설정 폼을 고정 좌표 문서에서 실제 세로 스크롤 문서로 바꾸고 Android WebView의 손가락 세로 이동을 허용해 384×832 화면에서도 마지막 항목까지 편집할 수 있어요. code 233에 포함된 로그인 전 캐릭터의 계정 인계·클라우드 업로드·게스트 복구본 보호도 유지하며 계정 격리 검사를 통과했어요. 384×832 터치 스크롤 QA, 관계·첫 로그인·기존 제보 회귀검사, 앱 동기화, APK/AAB 빌드·버전·서명을 검증했어요. 운영 main code 236과 dev code 237에 반영 완료. Play Console 업로드와 Galaxy 실기기 확인은 남아 있어요. 새 문구 없음; 영어 2090/2780(75.2%), 일본어 2089/2780(75.1%)."});
const android225Followup=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-android-223-device-play");
if(android225Followup){android225Followup.title="Android 235 그룹 멀티·태블릿 세로 실기기 확인";android225Followup.summary="최신 개발 파일은 drawer-village-v1.0.217-code235-dev-debug.apk와 drawer-village-v1.0.217-code235-dev-release.aab입니다. code 224~234 개발 파일 대신 235를 사용하세요. SM-X700(Android 16) 세로에서는 캐릭터 주민등록증·책·빠른설정·전체설정, 집, 관찰 홈이 휴대폰과 같은 구조로 보이고 이름·시간·모든 메뉴 글자가 잘리지 않는지 확인하세요. 가로에서는 iPad식 캐릭터 목록과 양면 책의 두 페이지 이동, 마을 아이콘·장식의 투명 배경을 확인하세요. 로그인 뒤 그룹 생성·코드 가입·마을 이동·캐릭터 등록·집 방문·역할별 제한과 관리자 주민 내보내기를 시험하되 원본 캐릭터와 집이 유지되는지 확인해야 해요. Play 테스트 트랙에 올릴 때는 Console의 최고 versionCode가 235보다 낮은지 먼저 확인하세요. Firestore 규칙 배포와 Play 업로드·Galaxy 실기기 확인은 아직 하지 않았습니다.";}
const android219Followup=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-android-214-device-play");
if(android219Followup){android219Followup.title="Android 236 관계 스크롤 핫픽스 Play 업로드·실기기 확인";android219Followup.summary="현재 Google Play 프로덕션은 1.0.215(code 233)이고, 업로드할 최신 운영 파일은 drawer-village-v1.0.204.4-code236-hotfix-release.aab입니다. 기존 앱을 삭제하거나 저장공간 데이터를 지우지 말고 Play 업데이트로 설치하세요. SM-A346N Android 16의 384×832 화면에서 관계→시선 설정을 마지막 항목까지 손가락으로 스크롤·저장할 수 있는지, 로그인 전 만든 캐릭터가 Google 로그인 뒤 유지·동기화되는지 확인하세요. Google 로그인·동기화·상점도 함께 확인하고 문제가 남으면 업데이트 뒤 생성된 자동 진단 정보를 받아야 해요. Play 업로드와 Galaxy 실기기 최종 확인은 아직 하지 않았습니다.";}
window.SEORAP_DATA.updates=[
  {version:"1.0.204.4-production-hotfix",code:236,date:"2026-09-06",items:["Google Play 프로덕션 1.0.215(code 233)을 운영 main 기준으로 맞춘 뒤 관계 시선 설정 스크롤 핫픽스 적용","관계 시선 설정을 고정 높이·절대 배치에서 실제 100dvh 세로 스크롤 문서로 변경하고 Android WebView 손가락 pan-y 허용","384×832 화면에서 마지막 항목 노출과 최대 스크롤 도달을 자동·시각 검증","code 233의 로그인 전 캐릭터 계정 인계·클라우드 업로드·게스트 복구본 보호 유지 및 계정 격리 회귀검사 통과","Android 앱 동기화, APK/AAB 빌드·versionCode 236·패키지·서명 검증 통과","새 사용자 문구 없음. 영어 2090/2780(75.2%), 일본어 2089/2780(75.1%). 운영 main 반영 완료; Play 업로드·Galaxy 실기기 확인은 남음"]},
  {version:"1.0.218-dev",code:237,date:"2026-09-06",items:["운영 code 236의 관계 시선 설정 Android 세로 스크롤 수정 동일 반영","그룹 멀티 1차와 태블릿 세로 휴대폰형 화면 등 기존 dev 기능 유지","dev 237·dev 235·관계·첫 로그인·계정 격리·기존 제보 회귀검사 통과","새 사용자 문구 없음. 영어 2090/2780(75.2%), 일본어 2089/2780(75.1%). dev 브랜치 반영 완료; Play 운영 업로드에는 code 236 AAB 사용"]},
  {version:"1.0.217-dev",code:235,date:"2026-09-06",items:["그룹 생성·초대 코드 가입과 관리자·운영자·멤버 역할을 갖춘 비공개 그룹 멀티 1차 구현","그룹 안 여러 마을 이동, 보유 캐릭터 주민 등록·관리자 내보내기, 다른 멤버 집 공개·방문 지원","역할별 캐릭터 허용 수와 집 방문 규칙을 그룹 관리자가 설정; 그룹에서 내보내도 개인 원본 캐릭터·집을 삭제하지 않는 저장소·권한 분리","SM-X700 세로 CSS 폭 1205px가 데스크톱 분기로 새던 근본 원인을 여러 로드 스타일시트에서 통일해 캐릭터·집·관찰을 휴대폰형 화면으로 복구","가로 태블릿의 iPad식 캐릭터 목록·양면 책·2페이지 이동과 마을 투명 아이콘·장식 유지","235 전용·계정 격리·기존 제보·캐릭터 UI 검사와 753×1205/1205×753 캐릭터·집·관찰·마을 시각 검사 통과","전체 정적 UI 번역 영어 2090/2780(75.2%), 일본어 2089/2780(75.1%). 그룹 화면 신규 문구는 양 언어 100%. dev 준비판이며 Firestore 규칙·Play·운영 main·사이트 배포는 변경하지 않음"]},
  {version:"1.0.216-dev",code:234,date:"2026-09-06",items:["세로 태블릿이 데스크톱형 분기로 넘어가지 않고 캐릭터·집·마을·기타 하위 화면에서 휴대폰 UI 구조를 그대로 사용하도록 반응형 기준 수정","세로 홈의 이름·직업을 프로필 사진 옆에 정렬하고 좌우·하단 메뉴 글자가 한 글자만 보이거나 잘리던 높이 계산 수정","가로 태블릿 캐릭터 화면을 iPad식 왼쪽 목록 + 휴대폰형 주민등록증·책·빠른설정·전체설정·관리 버튼으로 재구성","가로 전체설정의 양면 책과 두 페이지 이동 유지; 가로 관찰 홈은 전체 화면 마을 덮개를 제거하고 왼쪽 지도 + 오른쪽 캐릭터 장면으로 복구","실제 마을 탭의 가로 전체 화면과 아이콘·장식 투명 배경 유지, 세로 마을은 휴대폰 구조 적용","1205×753/753×1205 캐릭터·책·관찰·집·마을 시각 검사, 메뉴 글자 무잘림·배경 투명성·Android 자산·APK/AAB 빌드·버전·서명 검증 통과","영어 2090/2780(75.2%), 일본어 2089/2780(75.1%). 새 사용자 문구 없음. dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않음"]},
  {version:"1.0.215-dev",code:233,date:"2026-09-06",items:["태블릿 캐릭터 목록에서 선택한 캐릭터의 오른쪽 정보 패널이 비어 있던 상태 선택 조건 수정","가로 전체설정의 큰 양면 책·두 페이지 이동과 세로 큰 단면 책 유지","태블릿 가로 관찰·마을 지도를 화면 전체로 확장하고 오른쪽 남색 여백·분리 배경·상단바 빈 여백 제거","홈 이름·직업을 프로필 사진 오른쪽에 정렬하고 캐릭터 아이콘·마을 장식의 흰 배경·테두리·그림자 제거","Android 백업 내보내기를 시스템 파일 저장창에 연결해 선택한 위치에 UTF-8 JSON 저장; 취소·실패 안내 추가","1205×753/753×1205 시각 검사, 첫 로그인·계정 격리·클라우드·Google 로그인·상점 회귀검사, Android 자산 준비와 APK/AAB 빌드·버전·서명 검증 통과","영어 2090/2780(75.2%), 일본어 2089/2780(75.1%). 새 백업 안내 양 언어 반영. dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않음"]},
  {version:"1.0.204.3-production-hotfix",code:231,date:"2026-09-06",items:["일부 Android 17 Galaxy에서 Google 로그인 버튼을 눌러도 계정 선택창이 열리지 않던 문제 수정","응답이 멈출 수 있는 Credential Manager 대신 Android 계정 선택창을 직접 사용","로그인 시작 상태 즉시 표시, 진행 중 중복 탭 차단, 취소 상태 안내","첫 로그인 전 만든 캐릭터를 새 계정으로 인계·업로드하는 보호 흐름 유지","Android 17 로그인 모의 검사, 첫 로그인·계정 격리·클라우드 병합·상점 결제 회귀검사와 Android APK/AAB 빌드·패키지 검증 통과","한국어·영어·일본어 로그인 안내 반영. 운영 main 반영 완료; Play 업로드·Galaxy 실기기 확인은 남음. 영어 2083/2771(75.2%), 일본어 2082/2771(75.1%)"]},
  {version:"1.0.214-dev",code:232,date:"2026-09-06",items:["운영 code 231의 Android Google 로그인 복구를 현재 개발판에 동일 반영","로그인 전 첫 캐릭터 보존·업로드와 개발 중인 code 230 기능을 함께 유지","Android 17 로그인·계정 격리·클라우드·상점 회귀검사, APK/AAB 빌드·버전·플러그인 패키지 검증 통과","dev 브랜치 반영 완료. Play·운영 배포는 code 231 핫픽스 AAB를 사용"]},
  {version:"1.0.213-dev",code:230,date:"2026-09-06",items:["잠든 캐릭터를 깨운 뒤 씻기·식사·독서·휴식·운동 중 원하는 활동을 바로 지시","함께 활동한 캐릭터의 관계를 실제 상호작용에 따라 자동 생성·발전; 직접 편집한 단계와 적대·라이벌 관계 보호","태블릿 가로 전체설정을 화면을 채우는 양면 책으로 확대하고 세로 화면은 캐릭터 목록 없이 큰 단면 책으로 정돈해 버튼 잘림 방지","가로 태블릿 사전·공식 관계 목록을 화면 폭에 맞게 확장하고 카드 열과 여백 정돈","태블릿 마을의 캐릭터 아이콘 흰 사각형과 장식 배치 외곽선 제거, Android 시스템 내비게이션 바 안전 영역 적용","활동·관계 동적 검사, 1205×753/753×1205 시각 검사, 로그인·클라우드·생활·관계·사전 회귀검사와 Android APK/AAB 빌드·버전·AAB 서명 검증 통과","영어 2090/2780(75.2%), 일본어 2089/2780(75.1%). 새 활동 문구 양 언어 반영. dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않음"]},
  {version:"1.0.212-dev",code:229,date:"2026-09-06",items:["앱 시작·Google 계정 전환 시 클라우드 다운로드와 병합을 먼저 마친 뒤 게임 화면을 여는 시작 동기화 적용","첫 로그인 전 만든 캐릭터를 새 계정으로 안전하게 인계하고 게스트 복구본 유지; 계정 간 데이터 혼합 방지","Android 백업 파일 내보내기를 MediaStore에 연결해 다운로드/DrawerVillage에 UTF-8 JSON으로 저장","침대의 두 캐릭터를 베개 위 적정 크기로 한 번만 표시하고 이불 아래 전용 움직임·공유 이름/행동 카드 적용","로그 요약 프로필 사진을 잘리지 않는 원형으로 수정; 태블릿·양면 설정책·마을 장식·관찰 배치·메인 기준 제목 수정 포함","첫 로그인/계정 격리·백업/클라우드 병합·침대/제목 렌더·캐릭터/태블릿/선택/생활 회귀검사와 Android APK/AAB 빌드·버전·AAB 서명 검증 통과","영어 2090/2778(75.2%), 일본어 2089/2778(75.2%). dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않음"]},
  {version:"1.0.209-dev",code:226,date:"2026-09-06",items:["관찰 메인 화면의 원래 제목 위치·크기를 복원하고 집·마을 제목만 그 기준에 픽셀 단위로 정렬","침대에서 함께 시간을 보내는 두 캐릭터 얼굴을 키우고 베개 쪽에 배치해 이불 아래에서 천천히 움직이도록 개선","두 사람의 이름과 행동 요약을 하나의 공유 카드로 합치고 이불·침대 하단 프레임보다 앞에 표시","225의 Android 태블릿 가로·세로 복원, 캐릭터 상세 패널, 가로 전체설정 양면 책, 장식 테두리·관찰 배치 수정 포함","휴대폰·태블릿 제목 및 침대 시각검사, 첫 로그인 보존·캐릭터·선택·제보·생활 시작·보행 회귀검사와 Android APK/AAB·서명·버전 검증 통과","영어 2090/2778(75.2%), 일본어 2089/2778(75.2%). 새 미번역 UI 문구 없음. dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않음"]},
  {version:"1.0.208-dev",code:225,date:"2026-09-06",items:["code 224의 태블릿 세로·480px 휴대폰 강제 적용을 폐기하고 Android 가로·세로 회전 및 기존 iPad형 태블릿 화면 복원","캐릭터 목록 오른쪽 빈 화면에 선택한 캐릭터 정보와 빠른설정·전체설정 바로가기 표시","가로 태블릿 전체설정을 펼친 양면 책으로 표시하고 한 번에 두 페이지씩 이동; 휴대폰·세로 태블릿은 단일 페이지 유지","태블릿 마을 장식의 큰 흰색 테두리 제거, 세로 관찰 캐릭터를 스마트폰 화면 비율로 키워 상태 카드 위에 고정","SM-X700 크기 가로/세로 시각 검사, 첫 로그인 보존·캐릭터·선택·제보·보행 회귀검사, Android APK/AAB·214개 자산 해시·서명 검증 통과","영어 2090/2778(75.2%), 일본어 2089/2778(75.2%). 새 문구 양 언어 번역 완료. dev 준비판이며 Play·운영 main·사이트 배포는 변경하지 않음"]},
  {version:"1.0.207-dev-discarded",code:224,date:"2026-09-05",items:["실기기에서 화면 파손이 확인되어 Play 업로드 전에 폐기한 빌드","Android 태블릿을 세로로 고정하고 모든 화면을 480px 휴대폰 레이아웃으로 통일","캐릭터 화면도 휴대폰과 같은 주민등록증·빠른설정·전체설정 흐름을 사용해 태블릿 오른쪽 내용이 비던 오류 제거","관찰 화면 캐릭터 이름과 마을 화면 집 이름의 흰색 글씨 크기·위치를 홈 화면 기준으로 정렬","223까지의 찻잔·음식 애니메이션, 다중 선택 요약 즉시 갱신, 첫 캐릭터 로그인 보존 수정 포함","224 전용·캐릭터 UI·태블릿·기존 제보·선택 연속성·로그인 계정 격리 검사와 웹/Android 준비, APK/AAB 서명·214개 자산 해시 검증 통과","code 225로 대체됨. 운영 main·사이트·Play 배포에는 반영하지 않음"]},
  {version:"1.0.206-dev",code:223,date:"2026-09-05",items:["첫 캐릭터 생성 후 직접 Google 로그인할 때 게스트 기기 저장을 새 계정으로 안전하게 복사하고 클라우드 기존 데이터와 병합","원래 게스트 복구본 유지, 일반 계정 전환·자동 로그인에서는 계정 간 데이터 혼합 차단","222의 찻잔·음료·음식 애니메이션과 옷 설정 등 다중 선택 요약 즉시 갱신 포함","로그인/클라우드 모의 검사, 전용·캐릭터 UI·취향·선택 연속성·기존 제보 회귀검사와 웹/Android 준비, APK/AAB 서명·214개 자산 해시 검증 통과","한국어·영어·일본어 출시노트 완료. dev 준비판이며 운영 main·사이트·Play 배포는 변경하지 않음. Galaxy 실기기 확인은 남음. 전체 UI 정적 번역 영어 75.2%, 일본어 75.1%"]},
  {version:"1.0.205-dev",code:222,date:"2026-09-05",items:["관찰 문구와 별개로 연결된 찻잔·음료·음식 사진 종류를 판별해 차/커피 마시기·먹기 애니메이션 재생","옷 설정 등 다중 선택 메뉴에서 선택 직후와 닫기 직후 ‘N개 선택됨’ 요약 즉시 동기화","동적 선택 요약 한국어·영어·일본어 지원, code 222 캐시로 이전 자산 혼합 방지","전용·캐릭터 UI·취향 팝업·신고 오류·선택 연속성 회귀검사와 웹/Android 준비, APK/AAB 서명·214개 자산 해시 검증 통과","dev 준비판이며 운영 main·사이트·Play 배포는 변경하지 않음. Galaxy 실기기 확인은 남음. 전체 UI 정적 번역 영어 75.2%, 일본어 75.1%"]},
  {version:"1.0.204.2-production-hotfix",code:221,date:"2026-09-05",items:["첫 캐릭터 생성과 캐릭터 탭 진입 시 첨부 원화와 같은 캐릭터 메인 화면을 먼저 표시","빠른설정과 전체설정을 독립 메뉴로 분리하고 전체설정 내부의 빠른설정 항목 제거","빠른설정 상단에 항상 보이는 뒤로가기·저장 버튼 추가, 사용자가 고른 앱 UI 글꼴로 통일","전체설정 및 Android 시스템 뒤로가기는 관찰 화면이 아니라 캐릭터 메인으로 복귀","캐릭터 메인에서는 사용하지 않는 무거운 전체설정을 생성하지 않아 캐릭터 수 증가 시 탭 렌더링 부담 완화","220의 마을 산책 합성 이동·발소리 레이아웃 계산 제거 유지, code 221 캐시로 이전 모듈 혼합 방지","전용·메뉴·성능·걸음/태블릿 회귀검사와 웹/Android 준비, APK/AAB 서명·214개 자산 해시 검증 통과","한국어·영어·일본어 출시노트 작성. main·dev 반영 완료, Play 업로드·Galaxy 실기기 확인은 남음. 전체 UI 정적 번역 영어 75.2%, 일본어 75.1%"]},
  {version:"1.0.204.1-production-hotfix",code:220,date:"2026-09-05",items:["캐릭터 메뉴와 새 캐릭터 생성 뒤 중간 선택 화면 없이 전체설정으로 바로 이동","스마트폰·태블릿 전체설정 뒤로가기를 공통 관찰 화면 이동 경로에 연결하고 태블릿 버튼 복구","전체설정에서 숨은 허브·구형·중복 편집기를 만들지 않아 캐릭터 수에 따라 커지던 렌더링·탭 전환 부하 감소","전체설정 메뉴에서 빠른설정 접근 유지, 빠른설정 글꼴을 사용자가 고른 앱 UI 글꼴과 통일","마을 전체 산책을 합성 이동 경로로 전환하고 발소리 재생 중 반복 레이아웃 측정을 제거해 끊김·발열 완화","code 220 전용 캐시로 이전 모듈 혼합 방지, 메뉴·성능·걸음/태블릿 회귀검사와 Android APK/AAB 서명·214개 자산 해시 검증 통과","프로덕션 219 기준 main 핫픽스이며 dev에도 동일 반영. Play 업로드·Galaxy 실기기 최종 확인은 남음. 전체 UI 정적 번역 영어 75.2%, 일본어 75.1%"]},
  {version:"1.0.204-android-prepared",code:219,date:"2026-09-05",items:["마을 전체 산책의 기본 이동 시간을 늘리고 걸음걸이별 이동 속도·보폭 애니메이션·발소리 간격 연동","신규 ‘그림자처럼 매우 민첩하게’ 걸음걸이와 달리기 계열 발소리 추가","법적 등록 여부를 부부·부모자녀·형제자매에 제공하고 기존 부부 데이터 공통 필드 이전","태블릿 가로 캐릭터 목록·2열 디자인을 유지하면서 스마트폰과 같은 7개 설정 탭·저장 상태 공유, 회전 시 현재 탭 유지","전용·관계·산책·발소리·캐릭터·신고 오류·홈 생활 회귀검사, Android APK/AAB 빌드·서명·214개 자산 해시 검증 및 iOS 로컬 준비 검사 통과","dev 준비판이며 Play/웹/TestFlight 배포는 미실행. 전체 UI 정적 번역 영어 75.2%, 일본어 75.1%"]},
  {version:"1.0.203-android-prepared",code:218,date:"2026-09-05",items:["관계 편집을 겹침 없는 세로 스크롤 카드 구조로 재배치하고 많은 캐릭터 선택 목록을 독립 스크롤로 표시","관계에 선택한 모든 캐릭터의 표시 순서를 각 행의 위·아래 버튼으로 조정","부부의 법적 등록 여부를 외부 공개 방식에서 분리한 별도 체크 항목으로 저장하고 기존 데이터 이전","분수 등 장식 방문자를 둘레의 다른 자리로 분산하고 장식 방문 중 좁은 원 보행 제거","산책 장면을 마을 전체의 길·시설·집 주변을 잇는 여러 동선으로 확대하고 캐릭터별 시작·속도·시차 분산","384×854 관계 편집 및 분수 7명·산책 4명 시각 검사, 자동 회귀검사, Android APK/AAB 빌드·서명·213개 자산 해시 검증 통과","dev 준비판이며 Play/iOS/웹 배포는 미실행. 전체 UI 정적 번역 영어 75.2%, 일본어 75.2%"]},
  {version:"1.0.201-android-prepared",code:216,date:"2026-09-05",items:["캐릭터 설정의 소지품 선택 화면에서 내부 UUID 대신 사전 이름을 첫 진입부터 표시","부부 관계에 법적 등록·미등록 선택을 추가하고 저장·복원","우편함 편지 개별 삭제와 전체 삭제 추가, 삭제한 자동 편지의 재생성 방지 및 계정별 분리","384×854 모바일 화면, 우편 삭제·관계 저장·기존 회귀검사, Android APK/AAB 213개 자산과 서명·manifest 검증","dev 준비판이며 Play/iOS/웹 배포는 미실행. 전체 UI 정적 번역 영어 75.2%, 일본어 75.2%"]},
  {version:"1.0.200-android-prepared",code:215,date:"2026-09-05",items:["수면 아이콘 약 18% 확대·약간 아래로 이동해 이불을 조금 더 덮고 침대/이불 변환 기준 정렬","자정 시작 시각 0과 지속 수면 식별 수정: 재실행·시간 경과 때 침대 밖으로 걷기 재시작 방지. 실제 기상 이동 유지","취침 습관 10종별 수면 아이콘 애니메이션, 움직임 줄이기 지원. 소리 추가 없음","118회 복원/시간 경과·집 생활 70개·5개 화면 크기·실제 이불 알파 가림·애니메이션 검사 통과","서명 AAB/bundletool/215 manifest/213개 자산 해시 검증. dev 준비판이며 Play 업로드·실기기 검증·웹/iOS 배포 미실행. 전체 UI 정적 번역 영어·일본어 각 75.2%"]},
  {version:"1.0.199-android-prepared",code:214,date:"2026-09-05",items:["iOS 태블릿 수정분 Android 포함: 마을 세로/가로·집/방 정보·관계 뒤로가기·숨겨진 패널, 태블릿 세로 강제 잠금 해제","2인 침대 얼굴 위치·집 이름 옆 외형 아이콘·전체설정 책 페이지 영역 수정; 태블릿 빠른/전체설정 진입 버튼","공식 관계 카드와 첫 캐릭터 입력창 정돈, 상점 분류 글자의 겹쳐 보임 제거","가구창 방 선택/방별 분류 제거. 원하는 방으로 끌어놓으면 해당 방과 좌표 자동 계산; 기존 가구 방/층 이동·저장 보존","서명 AAB 생성·bundletool 구조/버전·웹 자산 213개 해시 검증, Android 준비 자산 5개 화면 크기 검사 통과","Play 업로드/심사·실제 Android 태블릿 검증은 남음. dev만 반영, 운영 main/사이트/iOS 업로드 없음. 전체 UI 정적 번역 영어·일본어 각 75.2%"]},
  {version:"1.0.198-ios-prepared",code:6,date:"2026-09-05",items:["가구를 방 종류와 관계없이 설치·다른 방으로 드래그하고, 선택 메뉴로 다른 층에도 이동","가구 ID·소품·침대 지정·크기·방향·반전과 재실행 후 저장 유지 검증; 취소 시 위치 보존","SD 대신 표시하는 프로필 사진만 원형 표시. SD/LD 원화와 원본 사진은 유지","iOS 상점 상품/분류 열기. 실제 구매·복원 미연결, Play/웹 결제 경로 없음","구글 로그인 요청: Firebase iOS 설정 파일 대기. 로그인 완료 아님","Chrome 다섯 화면 크기와 플랫폼 분리 검사. 새 안내 영어·일본어 각 100%; 전체 번역률 미측정. build 6 준비만 완료, 미업로드. Android 213/운영 main 유지"]},
  {version:"1.0.198-ios-testflight",code:5,date:"2026-09-05",items:["iOS build 5 Mac 서명·Apple 검증·내부 TestFlight 업로드 수락 완료 (33888877404, 7분 29초)","이전 빌드 4 이후 태블릿 집·방 정보 크기, 닫힌 패널 노출, 사진 비율, 관계 뒤로가기, 세로 마을 회전 수정 통합","Apple 처리 완료/설치 가능은 종료 조회에서 미확인. 정식 심사·외부 공개 없음; 실제 iPad 업데이트 후 확인 필요","신규 안내 및 테스트 노트 영어·일본어 각 100%; 전체 게임 번역률 미측정. Android code 213 유지. Discord 복사용 누적 패치노트 작성"]},
  {version:"1.0.198-ios-rotation-prepared",code:5,date:"2026-09-05",items:["세로 회전 시 태블릿 마을에 일반 웹 화면이 섞이던 스타일 조건 수정","같은 화면에서 회전·방 편집 내용 유지·뒤로가기·구성원 숨김·집 사진 비율 검사 통과","iOS/Android 자산 및 플랫폼 분리 검사 통과. Chrome 검사로 실제 iPad 검증을 대체하지 않음","설치된 build 4는 그대로. build 5 TestFlight 업로드 전이며 Android 213/운영 main 유지. 새 번역 문구 없음"]},
  {version:"1.0.198-ios-tablet-prepared",code:5,date:"2026-09-04",items:["iPad build 4 설치·실행·사진 표시 사용자 확인; 태블릿 배치 문제 확인","build 5 준비: 집 편집창 노출·거대한 검색창/사진·세로 빈칸 수정, 지도와 메뉴 공간 분리","관계 빈 화면의 뒤로가기/캐릭터 추가 안내, 영어·일본어 신규 안내 각 100%","Chrome 다섯 화면 크기 및 iOS 자산 준비 검사. 새 IPA/TestFlight 업로드·iPad 재검증 미실행; Android 213 유지"]},
  {version:"1.0.198-ios-testflight",code:4,date:"2026-09-04",items:["iOS build 4 Mac 서명·Apple 검증·내부 TestFlight 업로드 수락; Android 1.0.198 / 213 유지","실행 33881610964 success(6분 40초). 추가 상태 조회에서는 빌드 미표시로 Apple 처리 완료/설치 가능은 아직 미확인","별도 요청 시에만 실행, 30분 제한·비밀값 없는 상태 파일 3일 보관. IPA/비밀키 공개 artifact 없음. 정식 심사·외부 초대·공개 출시 없음","첫 테스트 안내 영어·일본어 각 100%, 전체 게임/로그 번역률 미측정. 내부 테스터 연결과 실기기 QA는 후속"]},
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

const relationshipScroll236=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-relationship-scroll-hotfix-236");
if(relationshipScroll236){relationshipScroll236.title="Android 1.0.215.1 / 236 관계 시선 설정 스크롤 긴급 수정";}
if(android219Followup){android219Followup.summary=android219Followup.summary.replace("drawer-village-v1.0.204.4-code236-hotfix-release.aab","drawer-village-v1.0.215.1-code236-hotfix-release.aab");}
const release236=window.SEORAP_DATA.updates.find(item=>item.code===236);
if(release236){release236.version="1.0.215.1-production-hotfix";}

window.SEORAP_DATA.tasks.push({id:"dv-character-placement-hotfix-238",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.215.2 / 238 캐릭터 홈 배치 저장·적용 수정",summary:"캐릭터 설정에서 저장한 홈 SD·LD 배치가 의상별 기본 배치에 다시 덮여 실제 관찰 화면에 반영되지 않던 원인을 수정했어요. 비기본 좌표로 저장된 기존 배치는 캐릭터 전용 배치로 자동 인식해 복구하고, 384×784 화면의 안전 영역 위에 항상 보이는 명시적 ‘배치 저장’ 버튼과 저장 완료 안내를 추가했어요. 운영 main code 238과 dev code 239에 반영하고 배치·관계·첫 로그인·계정 격리·백업 회귀검사, 화면 QA, Android APK/AAB 빌드·버전·서명을 검증했어요. Play 업로드·Galaxy 실기기 확인은 남아 있어요. 새 문구 영어·일본어 반영 완료; 전체 영어 2091/2781(75.2%), 일본어 2090/2781(75.2%)."});
window.SEORAP_DATA.tasks.push({id:"dv-phone-home-town-audio-hotfix-240",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.215.3 / 240 휴대폰 홈의 숨은 마을·이동음 긴급 수정",summary:"휴대폰 홈 관찰 화면 뒤에 태블릿 가로용 마을 시뮬레이션과 이동 주민이 실제 DOM으로 함께 생성되고, CSS로 숨겨진 주민도 이동음 대상으로 잡히던 원인을 수정했어요. 마을은 실제 Android 태블릿 가로 화면에서만 생성하고, 화면에 그려지지 않은 요소는 소리 채널에서 제외하는 이중 안전장치를 적용했어요. 태블릿 회전 시 관찰 DOM도 현재 방향에 맞게 재구성합니다. 384×784 휴대폰에서 마을 미생성·숨은 주민 무음, 1205×753 태블릿에서 기존 지도 유지, 배치·관계·계정·백업 회귀검사와 Android APK/AAB 빌드·버전·서명을 검증했어요. 운영 main code 240과 dev code 241 반영 완료; Play 업로드·실기기 청취는 남아 있어요. 새 문구 없음; 전체 영어 2091/2781(75.2%), 일본어 2090/2781(75.2%)."});
window.SEORAP_DATA.tasks.push({id:"dv-groups-body-shared-scenes-242",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.221 / 242 그룹·전체설정·3인 대화 안정화",summary:"캐릭터 전체설정의 총평·분위기·피부 특징 등 여러 항목 선택값을 즉시 저장하고 책의 요약 버튼에도 바로 반영하도록 수정했어요. Android/Web 준비 과정에서 빠졌던 그룹 기능 모듈·스타일·반응형 모듈을 패키지에 포함하고, 그룹 생성 Firestore 권한 규칙을 실제 운영 프로젝트에 배포했어요. 그룹 화면은 사전처럼 나무 배경과 종이 장부 카드 구성으로 다시 정돈하고 권한 오류를 한국어·영어·일본어 안내로 바꿨어요. 3인 대화는 공유 장면의 원래 참가자 순서를 모두에게 동일하게 적용하되 실제로 다른 장소에서 근무 중인 캐릭터는 제외하도록 수정했어요. 자동 회귀검사, 휴대폰·가로 태블릿 그룹 화면 QA, 웹/Android 자산 준비, Android release AAB 빌드를 통과했어요. dev 브랜치 반영 완료; Play/TestFlight 배포와 실기기 검증은 아직 하지 않았어요. 영어 2091/2781(75.2%), 일본어 2090/2781(75.2%)."});
window.SEORAP_DATA.tasks.push({id:"dv-animal-dictionary-hotfix-243",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.215.4 / 243 동물 사전 누락 긴급 수정",summary:"캐릭터 호불호에는 ‘동물 · 사전’ 선택이 있지만 사전 데이터 종류에는 동물이 없던 설정 불일치를 수정했어요. 기존 저장본을 열 때 빈 동물 사전을 안전하게 생성하고, 동물 탭·발바닥 아이콘·13개 분류·항목 추가·기본 그림을 지원해 좋아함·싫어함·소지품 선택과 같은 사전 흐름으로 연결했어요. 운영 main code 243과 dev code 244에 동일 반영했고 사전·기존 신고 버그 회귀검사, 웹/Android 자산 준비, 서명 release AAB 빌드를 통과했어요. Play 업로드와 실기기 확인은 남아 있어요. 새 동물 분류 영어·일본어 번역 완료; 전체 영어 2099/2786(75.3%), 일본어 2098/2786(75.3%)."});

window.SEORAP_DATA.updates.unshift(
  {version:"1.0.215.4-production-hotfix",code:243,date:"2026-09-06",items:["캐릭터 호불호의 ‘동물 · 사전’ 선택과 실제 사전 사이에 동물 항목이 없던 문제 수정","사전에 동물 탭·발바닥 아이콘과 개·고양이·새·토끼·말·소형 포유류·파충류/양서류·어류·곤충/절지동물·가축·야생동물·판타지 생물·기타 분류 추가","기존 저장 데이터에도 동물 사전을 안전하게 생성하고 동물 항목 추가·편집·기본 그림·좋아함/싫어함 선택을 연결","웹/Android 패키지 모듈 검증, 사전·기존 신고 버그 회귀검사, Android 서명 release AAB 빌드 통과","동물 분류 영어·일본어 번역 완료. 영어 2099/2786(75.3%), 일본어 2098/2786(75.3%). 운영 main 반영 완료; Play 업로드·실기기 확인은 남음"]},
  {version:"1.0.222-dev",code:244,date:"2026-09-06",items:["운영 code 243의 동물 사전 데이터·분류·아이콘·기본 그림·호불호 연결을 dev에 동일 반영","기존 그룹 멀티와 3인 공유 장면 수정 유지","사전·그룹·공유 장면 회귀검사, 웹/Android 자산 준비, Android 서명 release AAB 빌드 통과","동물 분류 영어·일본어 번역 완료. 영어 2099/2786(75.3%), 일본어 2098/2786(75.3%). dev 브랜치 반영 완료; Play 운영 업로드에는 code 243 AAB 사용"]},
  {version:"1.0.221-dev",code:242,date:"2026-09-06",items:["캐릭터 전체설정의 총평·분위기·피부 특징 등 여러 항목을 고르면 즉시 저장하고 현재 선택 요약을 바로 갱신","Android/Web 패키지에서 누락됐던 그룹 기능·스타일·반응형 모듈을 포함하고 Firebase 그룹 생성 권한 규칙 배포","그룹 화면을 사전과 어울리는 나무 배경·종이 장부 카드 디자인으로 개편하고 권한 오류를 사용자 언어로 안내","3인 공유 대화의 참가자 명단·순서를 모든 캐릭터에 동일하게 유지하고 실제 다른 장소에서 일하는 캐릭터는 장면에서 제외","자동 회귀검사, 휴대폰·가로 태블릿 그룹 UI QA, 웹/Android 자산 준비, Android release AAB 빌드 통과","새 그룹 권한 안내 영어·일본어 반영. 영어 2091/2781(75.2%), 일본어 2090/2781(75.2%). dev 반영 완료; Play/TestFlight 미배포"]},
  {version:"1.0.215.3-production-hotfix",code:240,date:"2026-09-06",items:["휴대폰 홈 관찰 화면 뒤에서 태블릿 가로용 마을 시뮬레이션과 이동 주민이 함께 생성되던 문제 수정","태블릿 가로용 마을은 실제 Android 태블릿 가로에서만 생성하고 휴대폰·태블릿 세로에서는 DOM 자체를 만들지 않도록 분리","CSS로 숨겨진 캐릭터는 이동음 채널을 만들거나 유지하지 않도록 보조 안전장치 추가","태블릿 회전 시 관찰 화면의 태블릿 전용 DOM을 현재 방향에 맞게 재구성","code 238의 캐릭터 홈 배치 적용·기존 배치 복구·명시적 배치 저장 버튼 유지","384×784 휴대폰과 1205×753 태블릿 런타임 QA, 배치·관계·첫 로그인·계정 격리·백업 회귀검사, Android APK/AAB 빌드·versionCode 240·서명 검증 통과","새 사용자 문구 없음. 영어 2091/2781(75.2%), 일본어 2090/2781(75.2%). 운영 main 반영 완료; Play 업로드·실기기 청취는 남음"]},
  {version:"1.0.220-dev",code:241,date:"2026-09-06",items:["운영 code 240의 휴대폰 홈 숨은 마을·이동음 차단을 dev에 동일 반영","code 239의 캐릭터 배치 저장 수정과 그룹 멀티·태블릿 개발 내용 유지","휴대폰·태블릿 런타임 QA와 관계·첫 로그인·계정 격리·백업 회귀검사, Android release AAB 빌드·서명 검증 통과","새 사용자 문구 없음. 영어 2091/2781(75.2%), 일본어 2090/2781(75.2%). dev 브랜치 반영 완료; Play 운영 업로드에는 code 240 AAB 사용"]},
  {version:"1.0.215.2-production-hotfix",code:238,date:"2026-09-06",items:["캐릭터 홈 배치가 의상별 기본 배치에 덮여 실제 관찰 화면에 반영되지 않던 문제 수정","기존 비기본 배치를 캐릭터 전용 사용자 배치로 자동 인식해 복구","384×784 화면의 안전 영역 위에 항상 보이는 ‘배치 저장’ 버튼과 저장 완료 안내 추가","배치·관계·첫 로그인·계정 격리·백업 회귀검사, 화면 QA, Android APK/AAB 빌드·versionCode 238·서명 검증 통과","새 저장 문구 영어·일본어 반영 완료. 영어 2091/2781(75.2%), 일본어 2090/2781(75.2%). 운영 main 반영 완료; code 240으로 대체"]},
  {version:"1.0.219-dev",code:239,date:"2026-09-06",items:["운영 code 238의 캐릭터별 홈 배치 우선 적용·기존 배치 복구·명시적 저장 버튼을 dev에 동일 반영","관계 시선 설정 스크롤, 그룹 멀티 1차, 태블릿 개발 내용 유지","관련 회귀검사와 Android release AAB 빌드·서명 검증 통과","영어 2091/2781(75.2%), 일본어 2090/2781(75.2%). dev 브랜치 반영 완료; code 241로 대체"]}
);

if(android219Followup){
  android219Followup.title="Android 243 최신 운영 핫픽스 Play 업로드·실기기 확인";
  android219Followup.summary="현재 Google Play 프로덕션은 1.0.215(code 233)이고, 업로드할 최신 운영 파일은 drawer-village-v1.0.215.4-code243-hotfix-release.aab입니다. 기존 앱을 삭제하거나 저장공간 데이터를 지우지 말고 Play 업데이트로 설치하세요. SM-A346N 등 휴대폰에서 캐릭터 호불호의 ‘동물 · 사전’을 열어 사전의 동물 탭에서 항목을 추가·선택할 수 있는지 확인하세요. 홈의 마을 이동음 차단, 캐릭터 배치 저장·적용, 관계 시선 설정 스크롤, 로그인 전 만든 캐릭터 유지·동기화, 백업 내보내기도 함께 확인하고 문제가 남으면 code 243 설치 뒤 생성된 자동 진단 정보를 받아야 해요. Play 업로드와 Galaxy 실기기 최종 확인은 아직 하지 않았습니다.";
}

window.SEORAP_DATA.tasks.push({id:"dv-android-system-bars-hotfix-245",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.215.5 / 245 시스템 내비게이션 겹침 수정",summary:"삼성 3버튼 내비게이션과 게임 부스터 표시가 하단 메뉴를 덮던 문제를 줄이기 위해 상태바와 내비게이션바를 함께 숨기는 몰입 모드를 적용했어요. 앱 복귀·창 포커스 복귀 때 전체화면을 다시 적용하고, 사용자가 스와이프로 시스템바를 잠시 불러온 동안에는 기존 하단 안전 여백이 버튼을 보호합니다. 운영 main code 245와 dev code 246에 반영하고 전용 검사·기존 신고 버그 회귀검사·Android 서명 AAB 빌드를 통과했어요. 최종 운영 묶음은 code 247, 최종 dev 묶음은 code 248로 대체됐어요. 새 사용자 문구 없음; 영어 2099/2786(75.3%), 일본어 2098/2786(75.3%)."});
window.SEORAP_DATA.tasks.push({id:"dv-room-access-floor-hotfix-247",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.215.6 / 247 방 출입·다층 수면 위치 수정",summary:"침실·욕실 장면이 같은 종류의 첫 방만 사용하던 원인을 수정했어요. 생활 장면이 방 주인, ‘방주인만’·직접 지정·구성원 출입 규칙, 캐릭터별 자는 방을 확인해 실제로 들어갈 수 있는 방을 고르며, 2층 침실을 자는 방으로 지정하면 수면 장면도 해당 2층 방에 연결됩니다. 운영 main code 247과 dev code 248에 동일 반영하고 다중 방·방주인·출입 제한·2층 수면 회귀검사, 기존 신고 버그 13종, 웹/Android 자산 준비와 서명 AAB 빌드를 통과했어요. Play 업로드와 Galaxy 실기기 확인은 남아 있어요. 새 사용자 문구 없음; 영어 2099/2786(75.3%), 일본어 2098/2786(75.3%)."});

window.SEORAP_DATA.updates.unshift(
  {version:"1.0.215.6-production-hotfix",code:247,date:"2026-09-06",items:["삼성 3버튼 내비게이션·게임 부스터가 하단 메뉴를 덮지 않도록 시스템바 전체화면 처리와 복귀 시 재적용 추가","시스템바가 스와이프로 잠시 나타날 때 기존 하단 안전 여백으로 버튼 조작 영역 보호","침실·욕실 생활 장면이 같은 종류의 첫 방만 고르던 문제 수정","‘방주인만’·직접 지정·집 구성원 출입 규칙과 방 주인을 실제 생활 장소 선택에 반영","캐릭터별 자는 방이 2층이면 수면 장면도 해당 2층 침실로 연결","전용 회귀검사, 기존 신고 버그 13종, 웹/Android 자산 준비, Android 서명 release AAB 빌드 통과","새 사용자 문구 없음. 영어 2099/2786(75.3%), 일본어 2098/2786(75.3%). 운영 main 반영 완료; Play 업로드·실기기 확인은 남음"]},
  {version:"1.0.224-dev",code:248,date:"2026-09-06",items:["운영 code 247의 시스템바 전체화면·하단 안전 여백·방 출입·다층 수면 위치 수정을 dev에 동일 반영","그룹 멀티 등 기존 dev 기능 유지","전용 회귀검사, 기존 신고 버그 13종, 웹/Android 자산 준비, Android 서명 release AAB 빌드 통과","새 사용자 문구 없음. 영어 2099/2786(75.3%), 일본어 2098/2786(75.3%). dev 브랜치 반영 완료; Play 운영 업로드에는 code 247 AAB 사용"]}
);

if(android219Followup){
  android219Followup.title="Android 247 최신 운영 핫픽스 Play 업로드·실기기 확인";
  android219Followup.summary="현재 알려진 Google Play 프로덕션은 1.0.215(code 233)이고, 업로드할 최신 운영 파일은 drawer-village-v1.0.215.6-code247-hotfix-release.aab입니다. 기존 앱을 삭제하거나 저장공간 데이터를 지우지 말고 Play 업데이트로 설치하세요. 삼성 3버튼 내비게이션·게임 부스터가 하단 메뉴를 덮지 않는지, 앱을 내렸다 돌아온 뒤에도 전체화면이 복원되는지 확인하세요. 여러 침실·욕실이 있는 집에서는 ‘방주인만’ 출입 제한이 지켜지는지, 집 정보의 구성원 설정에서 2층 침실을 자는 방으로 지정했을 때 실제 수면 위치가 2층 방인지도 확인하세요. 기존 동물 사전, 홈 이동음, 캐릭터 배치, 관계 스크롤, 로그인 전 데이터 동기화, 백업 내보내기 회귀 확인도 필요합니다. Play 업로드와 Galaxy 실기기 최종 확인은 아직 하지 않았습니다.";
}

window.SEORAP_DATA.tasks.push({id:"dv-multiplayer-town-link-249",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.225 / 249 멀티·보유 마을 연결·마을 상단 선택 구조",summary:"‘그룹’을 사용자 화면에서 ‘멀티’로 바꾸고, 방장이 별도 빈 마을을 만드는 대신 자신이 보유한 마을 슬롯 하나를 골라 멀티 마을로 연결하도록 데이터 구조를 교체했어요. 같은 방장의 한 마을 슬롯을 여러 멀티에 중복 연결하지 못하게 막고 이전 버전 멀티는 방장만 보유 마을로 다시 연결할 수 있어요. 멀티 화면은 건물 정보처럼 목록 카드부터 보여주고 선택한 멀티의 주민·집·멤버·규칙 상세로 들어가도록 개편했어요. 마을 화면 상단은 멀티 이름과 3분할 마을 이름 버튼을 분리해 각각 전환창을 열고, 마을 정보의 중복 ‘열람할 마을’ 문구는 마을 아이콘 드롭다운으로 바꿨어요. 방장은 연결된 자기 마을 지도로 이동하고 초대 멤버는 존재하지 않는 개인 지도를 대신 띄우지 않고 멀티 주민·집 상세로 정확히 이동해요. 한국어·영어·일본어 신규 문구 완료, 휴대폰 384×784와 태블릿 세로 753×1205 비교 화면 검수, 전용·내비게이션 검사, 웹/Android 자산 준비와 서명 release AAB 빌드를 통과했어요. 영어 2100/2788(75.3%), 일본어 2099/2788(75.3%). 앱 dev 반영이며 Play 운영 배포는 하지 않았어요."});

window.SEORAP_DATA.updates.unshift({version:"1.0.225-dev",code:249,date:"2026-09-06",items:["사용자 화면의 ‘그룹’ 명칭을 ‘멀티’로 변경하고 한국어·영어·일본어 문구 반영","멀티 생성 시 별도 빈 마을 대신 방장이 보유한 마을 슬롯 하나를 연결하도록 변경","한 마을 슬롯의 멀티 중복 연결 방지 및 이전 버전 멀티의 방장 전용 마을 재연결 지원","멀티 화면을 건물 정보처럼 목록 카드와 선택 후 상세 화면 구조로 개편","마을 상단에 멀티 이름과 3분할 마을 이름 버튼을 따로 배치해 각각 전환 가능","멀티 선택 시 방장은 연결된 로컬 마을 지도로, 초대 멤버는 멀티 주민·집 상세로 이동해 엉뚱한 개인 마을 지도가 보이지 않도록 분기","마을 정보의 ‘열람할 마을’ 중복 문구를 없애고 마을 아이콘 드롭다운으로 정돈","멀티 목록·마을 화면에서는 기본 정보만 유지하고 주민·집·멤버 실시간 구독은 상세 화면을 열었을 때만 사용하도록 서버 읽기 절감","휴대폰·태블릿 세로 비교 검수, 전용·내비게이션 검사, 웹/Android 자산 준비, Android 서명 release AAB 빌드 통과","영어 2100/2788(75.3%), 일본어 2099/2788(75.3%). dev 반영; Play 운영 미배포"]});

window.SEORAP_DATA.tasks.push({id:"dv-shop-multiplayer-polish-250",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.226 / 250 서랍상점·멀티 전환·마을 상단·로그 아이콘 정리",summary:"사용자가 제공한 배경 투명 네리네 원본 PNG를 픽셀 수정 없이 서랍상점에 그대로 적용하고 친절한 안내 말풍선을 한국어·영어·일본어로 추가했어요. 멀티 목록의 마을 미리보기가 거대한 배경으로 화면을 덮던 fallback과 크기 제한 누락을 고치고 카드 안에서만 보이도록 정리했어요. 개인 마을 묶음은 기본 ‘내 마을’로 표시하며 설정에서 이름을 바꿀 수 있고, 마을 화면의 오른쪽 메뉴는 ‘그룹·멀티’로 명확히 표시해 전환 화면으로 연결했어요. 마을 상단의 묶음 이름과 3분할 마을 버튼은 휴대폰 홈의 이름·직업 축을 기준으로 휴대폰·태블릿 세로·가로에서 정렬했어요. 홈 로그의 ‘장소 · 마을’ 옆 건물 아이콘이 잘리던 cover 표시도 contain으로 수정했어요. 휴대폰 384×784, 태블릿 세로·가로 시각 QA, 전용 검사, 내비게이션·신고 버그·상점 결제 회귀검사, 웹/Android 자산 준비와 release AAB 빌드를 통과했어요. 영어 2103/2791(75.3%), 일본어 2102/2791(75.3%). 앱 dev 반영이며 Play 운영 배포는 하지 않았어요."});

window.SEORAP_DATA.updates.unshift({version:"1.0.226-dev",code:250,date:"2026-09-06",items:["사용자가 제공한 배경 투명 네리네 원본 PNG를 변형 없이 서랍상점 일러스트로 적용","서랍상점에 네리네의 친절한 안내 말풍선을 한국어·영어·일본어로 추가","멀티 마을 미리보기가 거대한 배경으로 화면을 덮던 fallback과 크기 제한 오류 수정","개인 마을 묶음을 기본 ‘내 마을’로 표시하고 설정에서 이름을 바꿀 수 있도록 추가","마을 오른쪽 메뉴를 ‘그룹·멀티’로 정리하고 묶음·마을 전환 흐름을 명확히 분리","마을 상단의 묶음 이름과 3분할 마을 버튼을 홈 화면 이름·직업 축 기준으로 휴대폰·태블릿 세로·가로 정렬","홈 활동 로그의 ‘장소 · 마을’ 옆 건물 아이콘이 잘리지 않도록 전체 그림 표시 방식으로 수정","휴대폰·태블릿 시각 QA, 전용·내비게이션·신고 버그·상점 결제 회귀검사, 웹/Android 자산 준비, Android release AAB 빌드 통과","영어 2103/2791(75.3%), 일본어 2102/2791(75.3%). dev 반영; Play 운영 미배포"]});

window.SEORAP_DATA.tasks.push({id:"dv-furniture-mail-shared-schedule-hotfix-252",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.215.7 / 252 가구·우편·공동 일정 초긴급 수정",summary:"가구를 옮기거나 크기·회전을 바꾼 뒤 재시작하면 되돌아가던 문제와 편집할 때마다 가구가 위로 밀리던 좌표 오류를 수정했어요. Android 터치 취소로 끝난 드래그도 마지막 유효 위치를 저장하고, 편집 도구를 접어 하단 방을 확인할 수 있게 했으며, 회전은 실제 90도씩 누적 회전하도록 바꾸었어요. 답변한 우편이 앱 재시작 뒤 다시 답변 가능 상태로 나오지 않도록 계정별 완료 표식을 저장했어요. 삭제한 일정이 다른 참여자의 정상 공동 일정까지 삭제된 것으로 오판하던 이관 로직을 고쳤고, 2~4인 일정의 참여자·장소·감정·로그 ID를 모두에게 하나로 고정했어요. 이미 저장된 로그는 재시작 후에도 문구나 참여자가 다시 추첨되지 않아요. 운영 main 1.0.215.7(code 252)와 dev 1.0.227(code 253)에 동일 반영했고 전용 회귀검사·삭제 일정·로그 연속성·Android 자산 검사와 서명 release AAB 빌드를 통과했어요. 새 화면 문구는 기존 접기/펼치기/방향 번역을 재사용해 한국어·영어·일본어 모두 반영됐어요. Play 업로드와 Galaxy 실기기 확인은 남아 있어요."});

window.SEORAP_DATA.updates.unshift(
  {version:"1.0.215.7-production-hotfix",code:252,date:"2026-09-07",items:["가구 위치·크기·회전이 재시작 후 되돌아가거나 편집할 때마다 위로 밀리던 문제 수정","Android 터치가 취소·캡처 상실로 끝나도 마지막 유효 위치를 저장하고 하단 편집 도구 접기 추가","가구 회전을 실제 90도 단위 회전으로 복구","우편 답변 완료 상태를 계정별로 보존해 재시작 후 다시 선택지가 활성화되지 않도록 수정","정상적인 공동 일정을 다른 참여자의 삭제된 일정으로 오판하던 저장본 이관 오류 수정","2~4인 공동 일정의 참여자·장소·감정·로그를 모든 참여자에게 동일하게 고정","이미 쓴 생활 로그의 문구·참여자가 재시작 후 변하지 않도록 역사 기록 고정","전용 검사·삭제 일정·로그 연속성·Android 자산 검사·서명 release AAB 빌드 통과","새 화면 문구는 기존 번역 재사용으로 한국어·영어·일본어 모두 반영. 운영 main 반영 완료; Play 업로드·실기기 확인은 남음"]},
  {version:"1.0.227-dev",code:253,date:"2026-09-07",items:["운영 code 252의 가구 저장·하단 도구 접기·실제 회전·우편 답변 보존·공동 일정·로그 고정을 dev에 동일 반영","기존 태블릿·멀티·서랍상점 개발 중 변경은 보존","전용 회귀검사, 삭제 일정, 로그 연속성, 웹/Android 자산 준비 검사 통과","새 화면 문구는 기존 번역을 재사용해 한국어·영어·일본어 모두 반영. dev 브랜치 반영 완료"]}
);

if(android219Followup){
  android219Followup.title="Android 252 최신 운영 핋픽스 Play 업로드·실기기 확인";
  android219Followup.summary="Play Console에 drawer-village-v1.0.215.7-code252-hotfix-release.aab를 업로드한 뒤 기존 앱을 삭제하거나 저장공간 데이터를 지우지 말고 Play 업데이트로 설치하세요. Galaxy 실기기에서 침대·가구 위치·크기·회전을 저장하고 재시작해도 유지되는지, 하단 편집 도구를 접어 맨 아래 가구를 조작할 수 있는지 확인하세요. 답변한 우편이 재시작 후 다시 선택 가능하지 않은지, 삭제한 일정이 로그에 재생성되지 않는지, 3~4인 공동 일정의 참여자·장소·로그가 모두에게 같은지도 확인하세요. Play 업로드와 Galaxy 실기기 최종 확인은 아직 하지 않았습니다.";
}

window.SEORAP_DATA.tasks.push({id:"dv-character-choice-shared-scene-direct-action-254",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.228 / 254 캐릭터 총평 저장·공유 대화·직접 행동·주거 UI 수정",summary:"캐릭터 전체설정의 인상 총평·분위기 등 다중 선택을 전용 상태 함수에서 원자적으로 저장해 설정을 나갔다 돌아오거나 앱을 다시 열어도 ‘정하지 않음’으로 되돌아가지 않게 했어요. 3인 대화는 모든 참가자가 같은 시각·장소의 동일 장면에 실제 참여할 때만 유지되며, 직장 일정 중이거나 다른 장소에 있는 캐릭터는 오래된 공유 장면 캐시에서도 제외돼 동시에 일하고 대화하는 모순을 막았어요. 잠든 캐릭터를 깨운 뒤 욕구·사교·취미·업무로 행동을 고르고 사교 상대·행동·대화 주제를 지정하는 화면을 추가했어요. 주거 방문 요일 넘침, 구성원 사진 우선 표시, 명절·기념일 날짜의 일정 메뉴 이동, 상점주인 최신 일러스트와 안내, 멀티 마을 전환 표시도 함께 정리했어요. 전용 상태·시뮬레이션·기존 가구/우편/로그/일정 회귀검사, 384×784 실제 화면 재진입 QA, 웹/Android 자산 준비와 서명 release AAB 빌드를 통과했어요. 직접 행동과 주거 안내의 한국어·영어·일본어를 함께 반영했고, 전체 영어 2100/2788(75.3%), 일본어 2099/2788(75.3%). dev 브랜치 반영 완료; Play 운영 미배포."});

window.SEORAP_DATA.updates.unshift({version:"1.0.228-dev",code:254,date:"2026-09-07",items:["캐릭터 전체설정의 인상 총평·분위기 등 다중 선택을 즉시 영구 저장해 화면 이탈·앱 재실행 뒤에도 유지","3인 대화는 모든 참가자가 같은 시각·장소의 동일 장면에 참여할 때만 성립하고 직장·다른 장소 캐릭터는 오래된 장면에서도 제외","잠든 캐릭터를 깨운 뒤 욕구·사교·취미·업무 유형으로 행동을 선택하고 사교 상대·행동·대화 주제를 지정하는 사용자 지정 메뉴 추가","주거 구성원 사진 표시, 방문 요일 모바일 넘침, 명절·기념일 날짜의 일정 메뉴 이동을 포함한 주거 설정 정리","서랍상점의 상점주인 최신 원본 이미지·안내 말풍선과 멀티 마을 전환 표시 개선","전용 상태·시뮬레이션 및 기존 가구·우편·로그·일정 회귀검사, 384×784 재진입 화면 QA, 웹/Android 자산 준비, Android 서명 release AAB 빌드 통과","직접 행동·주거 안내 한국어·영어·일본어 반영. 전체 영어 2100/2788(75.3%), 일본어 2099/2788(75.3%). dev 반영; Play 운영 미배포"]});

window.SEORAP_DATA.tasks.push({id:"dv-play-paid-offer-hotfix-255",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.215.8 / 255 Google Play 결제 오퍼 안전 보강",summary:"Play Console에서 고객 결제액 0원·정가 1,200원·예상 순수익 840원 주문이 함께 확인되어 결제 경로를 긴급 점검했어요. 해당 표시는 취소나 앱 장바구니 한도가 아니라 Google 부담 쿠폰·Play 프로모션과 일치하며 개발자 정산은 유지되는 형태예요. 앱은 이제 Google Play가 반환한 첫 오퍼를 쓰지 않고 오퍼 ID가 없는 기본 구매 옵션 중 정상 양수 가격·즉시 소유 옵션만 결제창에 전달해 앱이 무료·할인·대여·사전주문 옵션을 능동 선택하지 않게 했어요. 결제 완료 상태·앱 패키지·요청 상품 일치도 네이티브와 기존 서버 검증 앞에서 추가 확인해요. 운영 main code 255 AAB 빌드·Java 컴파일·결제 회귀검사·서명 검증을 통과했고, 새 오류 안내는 한국어·영어·일본어로 반영했어요. Play 업로드와 실제 결제창 대조는 남아 있어요."});
window.SEORAP_DATA.updates.unshift({version:"1.0.215.8-production-hotfix",code:255,date:"2026-09-07",items:["Google Play 상품의 첫 오퍼를 무조건 고르지 않고 오퍼 ID가 없는 기본 유료 구매 옵션만 선택","0원·할인·대여·사전주문 옵션을 앱이 직접 결제창에 전달하지 않도록 차단","정상 유료 옵션이 확인된 상품만 상점 구매 버튼 활성화","구매 완료 상태·앱 패키지·요청 상품 일치를 확인한 뒤 기존 서버 영수증 검증과 중복 방지 지급 진행","고객 결제액 0원·예상 순수익 840원 주문은 취소나 장바구니 한도가 아니라 Google 부담 쿠폰·프로모션 형태로 분석","결제 회귀검사, Android Java 컴파일·release AAB 빌드·서명 검증 통과","새 결제 오류 안내 한국어·영어·일본어 반영. 운영 main 반영 완료; Play 업로드·실결제 대조는 남음"]});

if(android219Followup){
  android219Followup.title="Android 255 최신 운영 핫픽스 Play 업로드·실기기 확인";
  android219Followup.summary="Play Console에 drawer-village-v1.0.215.8-code255-hotfix-release.aab를 업로드한 뒤 기존 앱을 삭제하거나 저장공간 데이터를 지우지 말고 Play 업데이트로 설치하세요. 실제 구매 전에 상점의 표시 가격과 Google Play 결제창 최종 가격이 같은지 확인하세요. Play 쿠폰이 적용되어 고객 결제액이 0원이어도 주문 상세의 예상 순수익이 840원으로 잡히는 주문은 Google 부담 할인으로 볼 수 있으므로 임의 환불하지 말고 정산 보고서에서 최종 확인하세요. 앱은 기본 유료 구매 옵션만 선택하고 완료 상태·패키지·상품 일치 및 서버 영수증을 확인한 뒤 지급합니다. Play 업로드와 Galaxy 실기기 결제창 확인은 아직 하지 않았습니다.";
}

window.SEORAP_DATA.tasks.push({id:"dv-multiplayer-home-tablet-256",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"Android 1.0.229 / 256 멀티 홈 연결·태블릿 가로 홈 SVG 반영",summary:"멀티 상세에 들어간 뒤 다른 메뉴까지 영어 멀티 화면으로 고정되던 라우팅을 분리하고, 멀티 정보·주민·방문 가능한 집·규칙 버튼이 각각 자기 구역으로 이동하도록 수정했어요. 선택한 멀티·마을·주민을 계정별로 기억하고 홈 관찰 화면에 실제 적용해, 개인 마을과 멀티 마을을 전환하면 해당 마을 주민만 표시됩니다. 원격 주민은 내 캐릭터 ID와 우연히 같아도 내 사진을 잘못 가져오지 않도록 소유 계정을 확인해요. 태블릿 가로 홈은 사용자가 제공한 SVG의 왼쪽 60% 마을·오른쪽 40% 캐릭터 장면, 상단 정보·현재 순간 카드·좌우 메뉴 위치를 기준으로 다시 배치했어요. 1280×800 시각 QA, 멀티 상태·내비게이션·홈 HUD·결제·Android 자산 회귀검사와 서명 release AAB 빌드를 통과했어요. 새 멀티 메뉴 문구의 한국어·영어·일본어를 함께 반영했고 전체 영어 2100/2794(75.2%), 일본어 2099/2794(75.1%). dev 브랜치 반영 완료; Play 운영 미배포."});
window.SEORAP_DATA.updates.unshift({version:"1.0.229-dev",code:256,date:"2026-09-07",items:["멀티 상세를 나간 뒤에도 다른 메뉴가 멀티 화면으로 고정되던 화면 상태·이벤트 경계 수정","멀티 정보·주민·방문 가능한 집·규칙 버튼을 서로 다른 상세 구역에 연결","선택한 멀티·마을·주민을 계정별로 기억하고 홈 관찰 화면에 적용","홈에서 선택한 멀티 마을의 주민만 표시하며 개인 마을과 명확하게 분리","원격 주민과 내 캐릭터의 ID가 같을 때 내 사진이 잘못 표시되지 않도록 소유 계정 확인","제공된 태블릿 홈 SVG 기준으로 가로 화면을 왼쪽 60% 마을·오른쪽 40% 장면 및 동일한 상단·카드·메뉴 위치로 조정","1280×800 시각 QA, 멀티·내비게이션·홈 HUD·결제·Android 자산 회귀검사와 Android 서명 release AAB 빌드 통과","새 멀티 메뉴 한국어·영어·일본어 반영. 전체 영어 2100/2794(75.2%), 일본어 2099/2794(75.1%). dev 반영; Play 운영 미배포"]});

window.SEORAP_DATA.tasks.push({"id":"dv-population-257","project":"서랍마을","section":"release","subsection":"testing","completed":true,"title":"개발판 1.0.230 / 257 · 200명 마을 계산 성능 개선","summary":"한 마을 200명 및 친구 관계 400개 합성 테스트. 반복 생활·관계 검색과 자동 저장 부담을 줄이고 인원 증가 시 계산 캐시가 계속 사라지는 문제를 수정했습니다. Chrome에서 200명 저장·재실행·집 화면 및 메뉴 전환 검증. 실제 휴대폰 성능과 Play 배포는 미확인입니다. 영어 75.3%, 일본어 75.2%."});
window.SEORAP_DATA.updates.unshift({"version":"1.0.230-dev","code":257,"date":"2026-09-07","items":["캐릭터가 많은 마을의 생활·관계 반복 계산 및 대화 시 연속 자동 저장 부담 감소","200명 및 친구 관계 400개 합성 계산, 200명 집 화면·메뉴 전환·저장 후 재실행 검증","개발 PC 관계 400개 조건: 최초 약 3.55초, 안정화 후 약 0.53~0.56초. 휴대폰 실측 아님","기존 공동 행동 결과와 시간·언어·직접 행동 변경 회귀 검사 통과","영어 2103/2794(75.3%), 일본어 2102/2794(75.2%). dev 개발판, Play 운영 미배포"]});

window.SEORAP_DATA.updates[0].items.push("Android 1.0.230 / 257 debug APK·서명 AAB 빌드 완료. AAB 안 웹 자산 217개가 최종 수정본과 바이트 단위 일치. iOS 실기기·TestFlight 및 Play 업로드 미실행");

window.SEORAP_DATA.tasks.push({"id":"dv-hotfix-259-storage-schedule-population","project":"서랍마을","section":"release","subsection":"testing","completed":true,"title":"Android 1.0.215.9 / 259 · 사전 저장 실패·일정 종료·다인원 부담 수정","summary":"사전 저장 실패 시 사진 보관 후 재시도하고 입력을 임시 유지한 채 목록으로 돌아갈 수 있게 했습니다. 저장 공간 부족 시 기존 계정·복구 자료를 삭제하지 않고 무손실 압축을 강화합니다. 종료된 일정이 현재 행동으로 남는 경우와 귀가 장면의 공동 일정 취급을 수정하고, dev 257 다인원 계산·저장 부담 개선을 운영판에 반영했습니다. APK·서명 APK·AAB 빌드 완료, release APK 버전/서명 및 AAB 웹 자산 215개 일치 검증. 사전 실패·뒤로가기·재시도·재실행, 01~03시 일정 종료, 2층 침실/출입 권한, 200명 저장·재실행 검사 통과. main 2093b21 및 dev 260 d88b7e6 반영. Play 업로드와 실기기 발열 검증 미완료. 영어 75.4%, 일본어 75.3%."});
window.SEORAP_DATA.tasks.push({"id":"dv-full-multiplayer-creative-feedback-pending","project":"서랍마을","section":"release","subsection":"testing","completed":false,"title":"개발 중 · 멀티 전체 생활 기능·관계 제의·설정 공유와 추가 제보","summary":"261에서 신발·음료·꽃/기타·80개 제한·캐릭터 및 사전 JSON 교환·침실 소유/자는 방 연결·유형 글자·멀티 SVG 목록을 완료했습니다. 남은 범위는 멀티의 전체 기분/로그/대화/공동 식사, 그룹별 관계와 타인 시선, 관계 제의/푸시/수락·거절·사유/선언 장면, 서버 참조형 캐릭터·인테리어·마을 공유 사전, 전통 의상·무술·선택형 정신건강·복합 가족관계입니다. 공유 사전은 개인 원본과 마을 공유본을 나누고 직접 보내기/가져오기하는 방향을 제안했습니다. 서버 기능은 미구현입니다. BGM은 사용자가 제작합니다. Galaxy 장시간 발열 검증은 남아 있습니다."});
window.SEORAP_DATA.updates.unshift({"version":"1.0.215.9-hotfix","code":259,"date":"2026-09-07","items":["사전 저장 실패 후 뒤로 가기가 막히지 않도록 임시 입력 유지·목록 복귀·사진 보관 후 저장 재시도","용량 부족 시 기존 계정·복구 사본을 삭제하지 않는 무손실 재압축","종료 일정의 현재 행동 잔류 및 귀가 장면의 공동 일정 취급 수정","다인원 생활·관계 반복 계산과 연속 자동 저장 부담 개선을 운영판에 반영","직접 설치 APK·시험용 debug APK·Play 업로드용 서명 AAB 준비, 웹 자산 215개 일치 검사 통과","main 2093b21 반영, 같은 수정 dev 1.0.231 / 260 d88b7e6 반영. Play 업로드 미실행","영어 2104/2791(75.4%), 일본어 2103/2791(75.3%). 신규 문구 모두 번역","200명 Chrome 저장·재실행·메뉴 전환 통과. 실제 휴대폰 장시간 발열은 미검증"]});

window.SEORAP_DATA.tasks.push({"id":"dv-dev261-settings-directory","project":"서랍마을","section":"release","subsection":"testing","completed":true,"title":"개발판 1.0.232 / 261 · 설정 파일·음료/신발·침실 연결·멀티 목록","summary":"총평 즉시 반영 dev 수정 포함, 신발 종류 및 음료 선택 추가, 음료 전용 6개 항목, 꽃·기타 사전과 종류별 80개 제한, 캐릭터 설정 JSON 다운로드/불러오기·전체 백업·사전 수동 파일 교환, 침실 주인↔자는 방 연결, 유형 글자 축소, 제공 SVG 기반 멀티 3열 목록·검색/필터·남은 슬롯 표시 추가 창, 제공 사이트 썸네일을 구현했습니다. 서명 APK/AAB와 세 언어 안내문 제공. 웹 자산 223개 일치 및 기능 브라우저 QA 통과. 기존 집/가구 검사 실패 10개는 수정 전과 동일함을 확인. dev f0b119d 반영, 운영 main은 259 유지. Play 업로드·운영 사이트 공개 배포·실기기 발열 검증은 미실행. EN 2158/2846(75.8%), JA 2157/2846(75.8%)."});
window.SEORAP_DATA.updates.unshift({"version":"1.0.232-dev","code":261,"date":"2026-09-07","items":["캐릭터 총평 즉시 반영·재실행 유지 dev 수정 포함","신발 종류와 소다·모히토·에이드·스무디 선택 추가","음료 사전의 맵기를 없애고 단맛·산미·탄산·카페인·알코올·온도로 구성","침실 주인과 구성원 자는 방 양방향 연결","꽃·기타 사전, 종류별 80개 제한, 사전 수동 JSON 교환","캐릭터 설정 JSON 다운로드·새 캐릭터로 불러오기 및 전체 설정 백업","제공 SVG 기반 멀티 목록·그룹 검색/필터/정렬·추가 창 남은 마을 슬롯","유형 키워드 크기 축소 및 제공 썸네일 웹 빌드 반영","개발판 APK/AAB 제공·dev f0b119d 반영, 운영 main은 259 유지. Play 업로드는 하지 않음","마을 공유 사전 서버 기능·멀티 전체 생활/관계 제의는 미완료로 별도 관리","영어 2158/2846(75.8%), 일본어 2157/2846(75.8%). 신규 문구 번역 포함"]});

window.SEORAP_DATA.tasks.push({"id":"dv-dev262-drink-logs","project":"서랍마을","section":"release","subsection":"testing","completed":true,"title":"개발판 1.0.233 / 262 · 음료 설정을 생활 로그에 반영","summary":"261 변경 전체를 포함하고 음료의 단맛·산미·탄산·카페인·알코올·온도를 해당 음료를 고른 카페 로그에 최대 두 특징씩 반영합니다. 캐릭터 단맛 취향 비교, 미지정 속성 추측 금지, 사전 수정 후 기존 관찰 유지, 혼합 재고에서 음료만 선택을 검증했습니다. 한국어·영어·일본어 및 실제 카페 타임라인 검사, 261 기능·259 저장/일정 회귀검사 통과. Android APK/AAB 생성·서명·웹 자산 224개 일치. dev bdf17e1 반영, main 259 유지. Play 업로드는 미실행. 기존 UI 번역 EN/JA 각각 75.8%, 새 음료 로그 3개 언어 제공."});
window.SEORAP_DATA.updates.unshift({"version":"1.0.233-dev","code":262,"date":"2026-09-07","items":["261의 설정 다운로드·사전·침실·멀티 목록 변경 전부 포함","실제 선택한 음료의 단맛·산미·탄산·온도·카페인·알코올이 카페 생활 로그에 반영","한 로그에는 최대 두 특징, 단맛은 캐릭터 취향과 비교. 미지정 속성은 추측하지 않음","이미 저장된 음료 관찰은 이후 사전 수정으로 바뀌지 않음","음식과 음료가 섞인 재고에서 음료만 선택","3개 언어 및 실제 일정 생성 검사, 기존 기능/저장/일정 검사 통과. 서명 APK/AAB 및 자산224개 일치","dev bdf17e1 반영. 운영 main 259 유지. Play 업로드 미실행"]});

window.SEORAP_DATA.tasks.push({"id":"dv-ios-build11-billing","project":"서랍마을","section":"release","subsection":"testing","completed":false,"title":"iOS 1.0.233 (11) · Apple 결제와 계정 연결 — 검증 진행 중","summary":"사용자가 등록한 com.drawervillage.app.character_slots_5 / town_slot_1 / green_tea 세 소모성 상품을 연결하고 스토리지는 iOS에서 제외합니다. StoreKit 구매/가격/복원·서버 검증·중복 지급 방지·Sandbox 운영 권한 분리·환불 통지 코드를 dev 6042a40까지 반영했습니다. 기존 Firebase iOS 설정을 찾아 Google 로그인 플러그인과 연결했습니다. 로컬 결제 계약 검사·iOS 준비·Android/웹 분리 검사 통과, StoreKit Mac 컴파일 통과. Google 로그인 포함 Mac 검사는 진행 중입니다. Apple Sandbox 키·서버 연결 완료. 남은 범위는 실제 Apple 테스트 결제 및 실기기 로그인·Apple 로그인/계정 삭제·환불 취소 재지급·심사는 미완료입니다. 실제 과금/심사/TestFlight 업로드는 실행하지 않았습니다. Android code 262 및 운영 main 유지. 새 문구 3개 언어, 전체 UI EN/JA 각75.8%."});
window.SEORAP_DATA.updates.unshift({"version":"iOS 1.0.233 (11)-development","code":262,"date":"2026-09-07","items":["iOS에서 캐릭터 5명·마을 1개·응원 선물의 Apple 구매·복원 연결 개발. 스토리지는 제외","등록된 Firebase iOS 앱의 Google 로그인 설정 연결","구매 검증/중복 지급/취소/환불 재전송/무료 테스트 권한 분리 검사 통과","출시 미완료: 구매 검증 키와 서버 배포·Apple 테스트 결제·실기기 계정 확인·정식 출시 로그인/삭제 요건 남음","dev 447ec1c 반영, 운영 main 및 Android 262 유지. 심사/실제 과금/TestFlight 업로드 미실행","신규 결제 안내 ko/en/ja 포함, 전체 UI 영어75.8%·일본어75.8%"]});

window.SEORAP_DATA.tasks.push({"id":"dv-ios-apple-sandbox-connected","project":"서랍마을","section":"release","subsection":"testing","completed":true,"title":"iOS 구매 검증 키·Sandbox 서버 연결 완료","summary":"다운로드된 Apple 구매 키 형식과 제공된 발급자 ID를 확인하고 Apple Sandbox API에서 인증된 거래 조회 응답을 확인했습니다. 키는 Secret Manager에 보관하고 별도 appleBillingApi 함수만 배포했습니다. 로그인 없는 구매 요청 401·지급 false, 위조 알림 거부 검사 통과. Sandbox 구매 기록은 서버 전용 별도 컬렉션에 보관합니다. 운영 실제 결제·계정 지급/복원·실기기 TestFlight 검증은 미완료. dev 6042a40 반영, Android262/운영main 유지. 새로운 사용자 문구 없음, EN/JA 각75.8% 유지."});
window.SEORAP_DATA.updates.unshift({"version":"iOS 1.0.233 (11)-Sandbox","code":262,"date":"2026-09-07","items":["Apple 구매 검증용 키를 서버 비밀 저장소에 연결","Apple 전용 Sandbox 구매 검증 서버 배포 완료","로그인 없는 구매 요청과 위조된 알림 거부 확인","테스트 권한과 운영 유료 권한 분리","실제 상품 구매·계정 지급/복원·TestFlight 검증 및 정식 출시는 아직 미완료","dev 6042a40 반영. Android262 및 운영main 유지. 신규 번역 문구 없음"]});
window.SEORAP_DATA.tasks.push({id:"dv-hotfix-264-scene-recovery",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"운영 핫픽스 1.0.215.10 / 264 · 장면 오류 뒤 이동 복구",summary:"캐릭터 장면 계산 오류를 개별 격리해 다른 캐릭터·마을 이동과 설정 접근을 유지합니다. 일부 이전 목록 형식 읽기를 보완하며 설정·기존 로그를 삭제하지 않습니다. 오류 주입 브라우저 이동, 기존 로그 보존, 설정 수정 후 재계산, 공동 일정 회귀 검사 통과. 서명 APK/AAB 생성, main 841787a 반영, dev에도 같은 코드 반영. 실제 제보 데이터의 최초 원인·Play 업로드·실기기 검증은 미확인. 신규 안내 ko/en/ja 완료, 전체 UI 영어75.4% 일본어75.3%."});
window.SEORAP_DATA.tasks.push({id:"dv-development-265-multiplayer",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"개발판 265 준비 · 멀티 생활·그룹 메뉴·공유 설정",summary:"기존 작업을 보존한 채 264 긴급 수정을 먼저 배포 파일로 제공했습니다. dev에서는 멀티 실제 생활·기분·로그, 그룹별 집·관계 탭, 건물 편집 권한, 상대 사진, 관계 제안·응답·Android 알림, 수동 그룹 사전, 선택적 건강·돌봄/전통복·가족 관계를 통합 검증 중입니다. 아직 개발판 새 설치 파일·최종 서버 배포는 완료하지 않았습니다. iOS 실제 구매·출시 검증도 별도 미완료로 유지합니다."});
window.SEORAP_DATA.updates.unshift({version:"1.0.215.10-hotfix",code:264,date:"2026-09-07",items:["장면 계산 오류가 다른 캐릭터·마을의 이동까지 막지 않도록 격리","이전 설정 목록 형식 읽기 보완, 캐릭터 설정·기존 로그 유지","서명 APK 및 Play 업로드용 AAB 준비, main 841787a 반영","dev 동일 수정 반영 중. Play Console 업로드·제보자 저장 데이터 확인은 미완료","신규 오류 안내 한국어·영어·일본어, 전체 UI 영어75.4%·일본어75.3%"]});
{
 const task=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-development-265-multiplayer");
 if(task)Object.assign(task,{completed:true,title:"개발판 1.0.234 / 265 · 멀티 생활·관계·수동 사전 통합",summary:"dev 0e439ab 반영. 멀티 실제 생활 장면·기분·로그·함께 식사, 그룹별 캐릭터/집/관계, 건물 정보·구성원 정보 및 권한 편집, 공유 사진 갱신, 겹치지 않는 선택지, 공식 관계 제안·수락/거절/사유·선언 기록, Android 푸시 경로, 수동 그룹 사전, 선택형 건강·치료 일정/전통복·무술·가족 역할을 추가했습니다. 운영264 장면 오류 격리 포함. 서명 APK/AAB 및 자산227개 일치, 합성200명 계산/동행 식사/일정 경계, 권한·수락 재전송·80개 사전, 384px ko/en/ja UI 검사 통과. 공유 생활 API/관계 알림 서버/보안 규칙 배포 및 미인증 요청401 확인. 실기기 멀티·푸시·발열은 미확인. 완전한 메뉴 동등성/공동 인테리어 편집/iOS 출시 검증은 별도 미완료 항목 유지. 영어75.8% 일본어75.8%."});
}
window.SEORAP_DATA.tasks.push({id:"dv-multiplayer-parity-device-followup",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"후속 유지 · 멀티 전체 메뉴 동등성·공동 인테리어·실기기 검증",summary:"265에서 구현한 기능과 구분합니다. 다른 사용자 집 인테리어의 직접 공동 편집 및 개인 마을 전체 메뉴의 완전한 동등성, 실제 두 계정 Android 멀티·관계 푸시 수신, 200명 휴대폰 발열/프레임 검증, iOS APNs는 완료하지 않았습니다. 기존 iOS 구매·로그인·계정 삭제·환불·TestFlight/App Store 작업도 별도 미완료로 유지합니다. 제보자의 장면 오류 최초 설정 조합은 답변/실제 데이터 확인이 필요합니다."});
window.SEORAP_DATA.updates.unshift({version:"1.0.234-dev",code:265,date:"2026-09-07",items:["멀티 홈 실제 생활·기분·로그와 함께 식사, 그룹별 집/캐릭터/관계 이동","마을 정보·건물 정보·구성원 정보 및 권한 있는 건물 편집, 사진 갱신·선택지 겹침 수정","공식 관계 제안·수락/거절 사유·선언 로그, Android 관계 알림 서버 배포","그룹 사전 수동 공유/가져오기와 종류별80개 제한, 설정·의상·무술·가족 역할 추가","운영264 장면 오류 격리 포함, 서명 APK/AAB 및 자산227개 일치 확인","dev 0e439ab 반영. 운영 main은264 유지. 실기기 멀티/푸시/발열과 iOS 정식 출시 미완료","전체 UI 영어2196/2896(75.8%), 일본어2195/2896(75.8%)"]});
window.SEORAP_DATA.tasks.push({id:"dv-development-266-startup-hospital",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"개발판 1.0.235 / 266 · 실행 복구·병원 복수 설정",summary:"dev a6c47e1 반영. 265 APK에서 group-push.js 및 groups.css 누락을 확인해 패키지 생성/의존성 검사를 수정했습니다. 실제 265 APK 자산에서 오류 재현, 266 최종 APK 자산으로 오프라인 첫 화면/저장/재실행 통과. 서명 APK/AAB 229개 자산 해시 일치. 병원 방문 평일 전부, 목적 복수 선택(상담·경과/입원/통원/정신건강), 진료 분야 정신과와 병원 하위 유형, 치료 일정 제목 반영. 기존 목적 보존/저장/평일 일정, 총평/침실/설정 전송/사전 제한/음료 로그/멀티 UI 회귀 통과. 공유 생활 서버 배포 완료. 운영 main264 유지. 실제 Android 기기 검증 및 iOS TestFlight/결제 검증 미완료. iOS 프로젝트1.0.235(13) 준비. 영어2204/2904(75.9%), 일본어2203/2904(75.9%)."});
window.SEORAP_DATA.tasks.push({id:"dv-appstore-copy-266",project:"서랍마을",section:"release",subsection:"testing",completed:true,title:"App Store 등록 문구 · 프로모션/설명/키워드·URL 안내",summary:"APP-STORE-COPY-KO.md에 복사용 문구와 입력 항목별 안내 작성. 공개 홈페이지/문의 연락처 페이지 HTTP200 확인. 키워드 UTF-8 77바이트. 제출할 iOS 빌드 버전과 일치 필요, 현재 준비본1.0.235(13), 아직 업로드 안 함. 사용자 제작 스크린샷은 실제 iOS 화면 기반 편집 가능; ZIP의1440×2880 RGBA12개는 크기/투명도 및 최대10개 조건 조정 필요. 제출/심사 완료로 표시하지 않습니다."});
window.SEORAP_DATA.updates.unshift({version:"1.0.235-dev",code:266,date:"2026-09-07",items:["개발판265 앱 화면 열기 실패 수정 및 멀티 스타일 누락 보완","병원 방문 평일 전부, 목적 여러 개 선택, 정신과 진료 분야/병원 유형 추가","방문 목적과 진료 분야를 치료 일정 장면 제목에 반영, 기존 설정 보존","최종 서명 APK/AAB 준비, APK 자산 오프라인 실행·저장/재시작 및229개 자산 일치 검사","기존 총평/침실 연동/내보내기/사전80개/음료 로그/멀티 UI 재검사","dev a6c47e1 반영·공유 생활 서버 배포. 운영main264 유지","한국어 App Store 등록 문구 제공. 영어75.9%, 일본어75.9%"]});
window.SEORAP_DATA.tasks.push({id:"dv-ios-production264-release",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"최우선 · 운영264 기반 iOS1.0.215(14) 출시",summary:"dev 신기능 제외, 운영main841787a 기준 codex/ios-production264 브랜치에 Google 로그인/StoreKit3상품 및 심사 선택 가능한 업로드 경로 포팅. 운영게임 핵심6파일 정규화 해시 일치, iOS 준비33모듈/오프라인 실행·저장·재시작 검사 통과. Mac 서명/Apple 업로드 진행 중. 사용자 유료 앱 계약 ‘사용자 정보 대기 중’, 실제Apple구매API401/Sandbox4040010 확인. 상품3개 MISSING_METADATA, 일부만 입력됨. 계약/상품정보/Apple로그인·계정삭제/실기기구매 검증이 남아 심사준비완료로 표시하지 않습니다. Android264/main 유지. 출시 서버의Production 전환은 인증해결 후 진행."});
window.SEORAP_DATA.tasks.push({id:"dv-multiplayer-header-design-followup",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"dev 디자인 · 멀티 참여/초대코드/필터/검색·관계 그룹탭 개선",summary:"2026-09-07 17:23/17:19 사용자 스크린샷 기준. 멀티 상단의 초대코드·참여하기·전체·내가 만든 그룹·검색 버튼과 관계탭 그룹 버튼이 그림체/레이아웃에 어울리지 않는다는 피드백. 단순선택지겹침수정과 다른 요구로 구분해 기록. 운영판iOS출시 우선 요청으로 후속유지, 미구현."});
window.SEORAP_DATA.updates.unshift({version:"iOS1.0.215-candidate",code:264,date:"2026-09-07",items:["운영264 기반 iOS출시용 별도브랜치·빌드14 준비, dev신기능 제외","Google계정/StoreKit3상품 연결 포팅, 내부전용제한 없는 업로드 경로","유료앱계약 사용자정보대기 및 상품메타데이터미완료 확인; 심사준비완료 아님","실제결제API401 확인, 정상거래 과금·지급 미검증","멀티 목록상단/관계그룹탭 디자인 요구 후속등록"]});
{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios-production264-release');if(task)task.summary+=' 최종: Mac 실행34101377745 성공, Apple에서1.0.215(14) VALID/APP_STORE_ELIGIBLE 확인. 등록초안1.0.215로수정 및빌드14선택완료. en-US 빈등록문구작성, 한국어보존. 업로드만완료; 계약정보/상품메타데이터/Apple로그인·계정삭제/구매실기기/암호화응답미완료로출시작업은계속미완료. 영어75.4%,일본어75.3%.';}
window.SEORAP_DATA.updates.unshift({version:'iOS1.0.215-build14-uploaded',code:264,date:'2026-09-07',items:['운영264 기반iOS 빌드14 서명·Apple검증·업로드성공','Apple VALID/APP_STORE_ELIGIBLE 확인 및App Store초안1.0.215에선택완료','영어등록설명/프로모션/키워드/URL작성, 사용자한국어보존','유료계약 사용자정보대기/상품정보미완료/로그인·삭제·실기기검증남음, 심사제출안함','운영Android/main264유지, UI영어75.4%·일본어75.3%']});

window.SEORAP_DATA.tasks.push({"id":"dv-shared-ui267","project":"서랍마을","section":"release","subsection":"testing","completed":true,"title":"Android 1.0.236 (267) · 기존 관계창 및 공유 마을 배치 편집","summary":"마을 이름을 홈 직업 높이에 정렬. 멀티 관계창을 기존 UI로 통일, 공식 관계만 제안/응답 창. 건물/집/장식 공유 배치·되돌리기, 권한 및 충돌 검증. 초대/참여/필터/검색 구분. 개인 데이터 보존 및 이전 기능 검사 통과. dev 반영, 운영 main264 유지. EN76.1%/JA76.0%."});
window.SEORAP_DATA.tasks.push({"id":"dv-shared-editor-remaining267","project":"서랍마을","section":"release","subsection":"testing","completed":false,"title":"멀티 편집 전체 동일화 · 이미지/새 집/복구 후속","summary":"267에서 건물·공유 집·장식 배치와 기본 설정은 연결. 공유 내부 사진 업로드/새 집 생성·집 삭제/건물 복구는 미연결로 남음. 개인 데이터 변경을 막고 완료 항목과 구분. iOS 출시 요청과 과거 미완료 요구는 별도 작업 유지."});
window.SEORAP_DATA.updates.unshift({"version":"1.0.236-dev267","code":267,"date":"2026-09-07","items":["마을 이름 버튼을 홈 직업 높이에 맞춤","멀티 관계창 기존 UI 통일 및 공식 관계 제안창","공유 건물·집·장식 배치/되돌리기와 서버 권한·충돌 처리","멀티 초대/참여/필터/검색 구분","운영 main264와 iOS14 유지, 미완료 공유 편집 항목 별도 기록"]});
window.SEORAP_DATA.tasks.push({id:'dv-context-shared-bed268',project:'서랍마을',section:'release',subsection:'testing',completed:true,title:'Android 1.0.237 (268) · 상황별 로그·멀티 설정·2인 침대 옆면',summary:'싸우지 않는 평화로운 로그의 빨간 효과 수정. 관계 로그의 극적인 문구를 줄이고 장소·성격·공통 관심사·시선·보호자 역할 반영. 사전 물품 개별 선택 다운로드/선택 가져오기, 유저 이름·사진 설정, 멀티 실제 집 내부·층 이동·새 집 추가·구성원 카드. 공식 관계와 캐릭터 그룹을 기존 설정창에서 제안하고 모든 관련 소유자의 수락 후 적용. 첨부된 2인 침대 옆면·이불 사용, 회전 즉시 그림 전환, 좌우 배정과 베개·머리 방향·깊이 순서 적용. APK/AAB 236개 웹 에셋 해시 일치·서명·오프라인 시작·재실행 보존 검사 통과. dev268, 운영 main264 및 iOS14 유지. EN 76.0% / JA 76.0%. Play Console 업로드 안 함.'});
window.SEORAP_DATA.tasks.push({id:'dv-multiplayer-design268',project:'서랍마을',section:'release',subsection:'testing',completed:true,title:'멀티 생성 화면 · 디자인용 메뉴 명세',summary:'새 그룹 이름, 프로필, 남은 마을 슬롯, 첫 마을, 권한·집 방문, 생성 완료 초대코드 및 생성 후 관리 메뉴 명세를 docs/multiplayer-creation-design268.md에 작성. 역할별 편집 권한 세분화 등은 디자인 제안이며 아직 전부 구현된 설정으로 취급하지 않음.'});
{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-shared-editor-remaining267');if(task){task.title='멀티 편집 전체 동일화 · 내부 편집/사진/집 삭제·복구 후속';task.summary='268에서 실제 집 내부 표시·층 이동·새 집 생성·공식 관계/캐릭터 그룹 전체 설정 제안을 추가. 공유 집 내부의 방·가구 전체 편집, 내부 이미지 업로드, 집 삭제·건물 복구는 아직 미연결. 실제 기기 두 계정의 프로필 사진 업로드와 푸시 도착 확인도 후속 유지. 과거 미완료 요구와 iOS 출시 작업을 새 요청으로 대체하거나 완료 처리하지 않음.';}}
window.SEORAP_DATA.updates.unshift({version:'1.0.237-dev268',code:268,date:'2026-09-07',items:['2인 침대 옆면·이불 추가, 회전·반전과 좌우 자리·앞뒤 순서·머리 방향 연동','평화로운 로그의 빨간 효과 수정, 설정과 장소에 맞는 일상 로그 보강','사전 물품을 개별 선택해서 저장·추가','유저 이름·프로필 사진 설정과 멀티 구성원 카드','멀티 실제 집 내부·층 이동·캐릭터 입주 시 집 공유·새 집 추가','기존 설정창에서 관계/그룹 생성·수정 제안, 모든 소유자의 수락 후 적용','APK/AAB 서명·236개 에셋·오프라인 실행 및 저장 재시작 검사, 영어·일본어 각76.0%','공유 내부 편집·사진 업로드·삭제/복구는 미완료로 별도 유지']});
window.SEORAP_DATA.tasks.push({"id": "dv-residency-tablet269", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "Android 1.0.238 (269) · 지도 위치·프로필·구성원·입주/동거·태블릿", "summary": "지도 지연 복원 제거 및 개인/멀티·편집 상태 위치 유지. 프로필 updateDoc 누락 수정. 구성원 전체 화면 카드와 상세 관리, 그룹장 입주 수락·집 주인 동거 수락 연결. 관계/구성원 제안함 버튼, 시선/관계/그룹/입주/동거 편집 갱신 유지. Android 첫 실행 권한 요청·로그인 후 토큰 등록, 알림 서버 배포. 태블릿 장식 전체 폭 및 나무 상단바 크기 보정. APK/AAB 빌드, 실행 자산234개 해시 일치, 서명 v1/v2, 오프라인 시작/저장 재실행 통과. 실제 두 기기 푸시와 실계정 사진 업로드 확인은 남음. dev 반영, 운영 main264와 iOS14 유지. EN76.0%/JA76.0%."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.238-dev269", "code": 269, "date": "2026-09-07", "items": ["지도 갱신 시 왼쪽으로 튀는 회귀 수정", "프로필 사진 저장 updateDoc 오류 수정", "구성원 전체 화면과 카드 상세 관리", "입주 신청·동거 제안 및 상대 수락 후 거주지 반영", "관계/구성원 제안함 노출 및 편집 중 화면 유지", "Android 첫 알림 권한 요청과 푸시 서버 업데이트", "태블릿 상단 장식·프로필·이름·시간 배치 보정", "APK/AAB 검증 완료, Play 미업로드. 실기기 푸시 확인은 남음"]});

window.SEORAP_DATA.tasks.push({"id": "dv-mail-shared-home270", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "Android 1.0.239 (270) · 우편·선물·캐릭터 코드·공유 가구·침대 로그", "summary": "받은/보낸/쓰기 우편함과 읽기 쉬운 제안·거절 창, 선물 보유 물품 지급. 공유 주간/날짜 일정 제안·전원 수락 및 수정/취소 제안. 관계/일정/동거/우편/선물 허용 설정. 캐릭터 사진 포함 서버 코드 발행·불러오기·공유 중단. 공유 집 가구 추가/이동/회전/반전/크기/삭제/침대 배정, 방 이름/층·집 층수. 알림 재실행으로 편집 중 관계창 이동 수정. 태블릿 장식 한 장 확대·펼치기/직업, 내부 헤더 스크롤 수정. 침실 대화와 집 행동 제목 일치. dev b09aefb 및 멀티 서버 배포. APK/AAB 실행 자산236개 일치, 오프라인 저장 재실행, 권한/충돌/제안/선물/코드 검사와 브라우저 UI 통과. 운영 main264/iOS14 유지. EN76.0%/JA76.0%. Play 업로드 미실행."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.239-dev270", "code": 270, "date": "2026-09-07", "items": ["우편함 받은/보낸/쓰기 및 편지·선물 보내기", "관계·그룹·입주·동거·일정 제안은 우편함에서 확인, 읽기 쉬운 내용과 거절 사유", "멀티 주간/날짜 일정 제안과 그룹 전체 공유, 규칙 5개 추가", "사진 포함 캐릭터 공유 코드 발행·불러오기·중단", "공유 집 가구·침대 사용자 및 방 이름/층 편집", "편집 중 지난 알림이 관계 화면을 다시 열던 문제 수정", "태블릿 상단 장식·펼치기·직업 및 우편/멀티 스크롤 보정", "침실 물건 배치 말다툼 문구와 집 행동/로그 불일치 수정", "dev b09aefb, APK/AAB 및 세 언어 노트 준비, 서버 반영, 운영 main 유지"]});
{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-shared-editor-remaining267');if(task){task.summary='270에서 공유 가구 배치/회전/반전/크기/삭제/침대 배정과 방 이름/층·집 층수 편집 완료. 공유 내부 사진 업로드, 집 삭제·복구는 후속 유지. 실계정 두 기기의 사진 포함 코드 불러오기·푸시 도착과 장시간 발열 확인도 남음. 공유 반복 기념일 전용 편집은 미완료. 운영 iOS 출시 미완료 사항과 이전 요구를 완료 처리하지 않음.';}}

window.SEORAP_DATA.tasks.push({"id": "dv-server-cost271", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "Android 1.0.240 (271) · 기능을 유지하는 서버비 최적화", "summary": "동일한 lifeJson 주민 저장 생략, 행동 지시 commandAt 제한 유지. 동일 그룹 상세/새로고침 시 13개 구독 재사용, 그룹·계정·오류 시 재연결. 이미 갱신된 마을 중복 API 요청 및 동일 알림 기기 재등록 제거, 활성 그룹 알림의 전체 재조회 생략. 기존 엔진 200명/1시간 fixture에서 쓰기12060→8742(27.5% 감소), 매분 모든 저장 장면·로그가 기존 엔진 결과와 일치. 서버 읽기12480회 등 비용은 남으며 청구액 절감률 아님. 관계/일정/선물/가구·권한·충돌/알림 검사, APK/AAB236자산일치·서명·오프라인저장 재실행 통과. dev c603d33, sharedTownApi 배포 완료. main264/iOS14 유지, Play 미업로드. EN76.0%/JA76.0%."});

window.SEORAP_DATA.updates.unshift({"version": "1.0.240-dev271", "code": 271, "date": "2026-09-08", "items": ["멀티의 변하지 않은 상태 저장을 생략하면서 생활·기분·로그 유지", "같은 그룹 상세 이동/새로고침 시 실시간 연결 재사용", "다른 접속자가 갱신한 마을의 중복 요청과 알림 기기 반복 등록 감소", "200명/1시간 테스트 문서쓰기27.5% 감소, 기존 장면·로그 정확히 일치", "서명 APK/AAB 및 KO/EN/JA 노트, dev c603d33와 멀티 서버 반영", "운영 main264/iOS14 유지, 실제 청구액·실기기 발열 미측정"]});

window.SEORAP_DATA.tasks.push({"id": "dv-server-cost-followup271", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "서버비 후속 · 실제 사용량 및 생활/설정/과거 로그 전송 분리", "summary": "271은 중복 저장/요청/구독 재생성을 줄임. 매분 생활 계산에 필요한 서버 읽기, 사진과 변경된 주민 전체 문서 전송은 남아 있음. 실제 청구 지표에서 읽기/쓰기/전송/Functions를 구분해 측정하고, 구버전 호환을 유지하는 생활 상태·설정·과거 로그 분리 설계 필요. 27.5%는 fixture 문서쓰기 감소이며 전체 월 청구액 절감률로 표시하지 않음. 무단 자동 삭제/기능 제거/새 유료 인프라 도입 없이 진행."});

window.SEORAP_DATA.tasks.push({"id": "dv-sharing-journey-shared272", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "Android 1.0.241 (272) · 빠른 코드 공유·직접 이동·멀티 편집/우편", "summary": "캐릭터 코드 발행 시 계정 전체 대신 선택 캐릭터와 새 사진만 처리하고, 초기 자동 동기화는 같은 서버 개정이면 본문 재다운로드 생략. 공유 집 그리드 크기·위치 및 방 사이 가구 이동, 반전 저장 수정. 편집 권한 없는 마을 버튼 흐림 표시. 시키기·캐릭터가 보낸 선물은 상대의 현재 장소까지 이동하고 상대가 기다리며 프레임별 서버 위치 쓰기 없음. 일반 구성원의 타인 시선/관계/일정 편집 제한, 본인만 참여하는 일정 직접 설정, 방장/스태프 직접 관계·일정 설정. 알림을 눌러 우편 상세 연결. 멀티 중복 건물 메뉴 제거, 그룹 대표 사진·전체 공지·그룹 사용자 간 우편 추가. dev 81a7b21 및 sharedTownApi 배포 완료. 서명 APK/AAB, 237개 실행 자산 일치, 오프라인 실행·저장 재실행, 서버 권한/선물/일정·브라우저 이동/그리드/우편 검사 통과. EN2183/2871(76.0%), JA2182/2871(76.0%). 실제 두 기기 푸시와 체감 로딩·청구액 측정은 남음. 운영 main264와 iOS 유지, Play 미업로드."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.241-dev272", "code": 272, "date": "2026-09-08", "items": ["사진 포함 캐릭터 공유에서 전체 계정 처리 제거, 같은 저장본의 초기 재다운로드 생략", "멀티 집 그리드·방 사이 가구 이동·반전 저장 수정, 마을 편집 권한 흐림 표시", "시키기·캐릭터 선물 전달 시 상대에게 걸어가는 장면, 이동 프레임별 서버 쓰기 없음", "일반 구성원 타인 설정 제한, 본인 일정 및 방장/스태프 관계·일정 직접 설정", "알림에서 우편 상세 열기, 그룹 대표 사진·전체 공지·사용자 간 우편", "멀티 상세 중복 건물 메뉴 제거", "서명 APK/AAB·237개 자산·오프라인 저장 재실행·멀티 UI 검사 통과", "dev 81a7b21 및 멀티 서버 반영, 운영 main264/iOS 유지. EN/JA 각76.0%"]});
{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-shared-editor-remaining267');if(task){task.summary='272에서 공유 집 그리드 편집·방 사이 가구 이동·반전 저장 추가 수정. 공유 내부 사진 업로드, 집 삭제·복구, 공유 반복 기념일 전용 편집은 후속 유지. 실계정 두 기기의 사진 포함 코드 불러오기·푸시 도착과 장시간 발열 확인도 남음. 운영 iOS 출시 및 과거 미완료 요구를 완료 처리하지 않음.';}}

window.SEORAP_DATA.tasks.push({"id": "dv-production-recovery273", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "운영 핫픽스 1.0.215.11 (273) · 생활 장면 복구·음료·지식 항목", "summary": "252 이용자의 생활 장면 재계산 고착 제보에 대응해 운영264의 캐릭터별 계산 오류 격리·이전 취향 형식 처리·설정/로그 보존·이동 복구와 기존 사전 저장/일정/가구/우편 수정을 포함한 273 제작. 음료 5종, 음료 전용 단맛·산미·탄산·카페인·알코올·온도, 정신건강 관심사·심리학/정신건강 지식 기술 및 운동 맥락 무술 항목 포함. 일반 멀티 개발 UI 전체 병합 없음. 오류 주입 후 캐릭터·마을·설정 이동, 기존 회귀, 음료 저장 재실행, 서명 APK/AAB210자산 일치·오프라인 실행·저장 재실행 통과. main039939f, 항목 순서 dev d504323. 운영 EN2116/2803(75.5%), JA2115/2803(75.5%); dev 각76.0%. Play 미업로드, iOS 미빌드. 실제 제보 저장본 미제공으로 원인 특정과 273 실사용 복구 확인은 남음."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.215.11-production-hotfix", "code": 273, "date": "2026-09-08", "items": ["생활 장면 계산 오류가 캐릭터·마을 이동을 막지 않도록 한 복구 수정 포함", "기존 설정·생활 기록 보존 및 이전 취향 형식 지원", "사전 저장·일정 시간 범위·가구 저장·우편 관련 운영 수정 포함", "소다·모히토·무알코올 모히토·에이드·스무디 추가", "음료의 맵기 제거, 단맛·산미·탄산·카페인·알코올·온도 설정", "심리학·정신건강 지식은 의학/의료 옆, 무술은 운동 항목 옆 배치", "서명 APK/AAB·210개 실행 자산·오프라인 실행 및 저장 재실행 확인", "main039939f 및 정렬 수정 dev d504323, Play 업로드와 제보자 복구 확인은 남음"]});
window.SEORAP_DATA.tasks.push({"id": "dv-production-recovery273-confirm", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "핫픽스273 Play 업로드·제보자 복구 확인", "summary": "운영 1.0.215.11/code273 AAB 준비 완료. Play Console 업로드 미실행. 252 제보자의 실제 수정 항목과 저장본이 없어 정확한 원인은 미확정. 273 업데이트 후 캐릭터·집·마을 전환 및 오류 문구 해소 여부 확인 필요. 데이터 삭제/초기화 없이 진행. 기존 미완료 멀티·서버비·iOS 작업 유지."});

window.SEORAP_DATA.tasks.push({"id": "dv-production-photo-code274", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "운영 핫픽스 1.0.215.12 (274) · 사진 코드·옷장30·접촉반응·사제 관계", "summary": "사용된273 대신274 제작. 사진 포함 캐릭터 코드 발행/미리보기/불러오기/중단을 운영판에 연결하고 dev importer의 LD·상황별 사진 유지 및 계정 변경 차단 보완. 설정 계정·백업에도 코드 불러오기 추가. 인물별 옷장30개 등록 제한과 기존 초과분/수정/삭제 보존, dev 전체 사전80개 제한과 개인 옷장 구분. 긴 인지·감각·상호작용 선택지와 완료 버튼 잘림 수정. 전체설정 정서 페이지에 신체접촉 반응 및 촉각둔감·간지럼·깜짝놀람·낯선 기척 경계 추가. 이인관/그룹관 사제 관계와 단계 추가. Android 증분 빌드 외부 파일 캐시 무효화 누락 수정. main ad741e1, dev649e009. 서명APK/AAB211자산 일치·오프라인 저장 재실행, 384px UI·선물 아닌 코드사진/LD·옷장·슬롯복구·관계 검사 통과. 운영 EN2130/2817(75.6%), JA2129/2817(75.6%), dev EN76.2%/JA76.1%. Play 미업로드, 두 실계정 사진 공유 미확인, iOS 미빌드. dev는 소스 반영이며 신규 dev APK 미제작."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.215.12-production-hotfix", "code": 274, "date": "2026-09-08", "items": ["버전코드를274로 올린 운영 핫픽스 APK/AAB", "사진 포함 캐릭터 코드 발행·미리보기·불러오기·사용 중지", "설정 계정·백업에서 받은 코드 입력, LD·상황별 이미지 유지", "캐릭터별 옷장30개 등록 제한, 기존 초과 옷 및 수정·삭제 보존", "긴 특성 선택지·완료 버튼 잘림 수정", "전체설정 신체접촉 반응과 이인관/그룹관 사제 관계 추가", "이전 파일이 남는 Android 증분 빌드 문제 수정 및211자산 검증", "main ad741e1 / dev649e009. Play 업로드·실계정 공유 확인은 남음"]});
{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-production-recovery273-confirm');if(task){task.title='핫픽스274 Play 업로드·제보자 복구·사진 코드 실계정 확인';task.summary='273은 이미 사용되었다는 제보로 1.0.215.12/code274 APK/AAB 준비. Play 업로드 미실행. 기존252 제보자의 계산 고착 복구 여부 및 두 실계정의 사진 코드 발행/수신 확인 필요. 데이터 삭제 없이 업데이트. dev는 소스 반영이며 이번 설치 파일은 운영 핫픽스. 기존 멀티·서버비·iOS 미완료 요구 유지.';}}

window.SEORAP_DATA.tasks.push({"id": "dv-multiplayer-polish275", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판 1.0.242 (275) · 멀티 표시·집 그리드·행동 선택 개선", "summary": "dev779afa8. 멀티 대표사진, 유저/캐릭터/마을 수 분리(목록 조회 집계+활성 그룹 기존 구독), 마을 이동 번역, 캐릭터 배경 제거, 멀티 건물 크기 축소, 가구 드래그 미리보기 스냅·방 이동, 관계 그룹 선택 헤더 배치, 사전 사진3열, 내 마을 단계별 행동 선택, 성인 손잡기/기대기/조심스러운·화해 키스와 홈 애니메이션. sharedTownApi 배포 완료. 사진 코드·옷장30·신체접촉·사제 관계 이전 수정 포함. UI 회귀와 새 화면 테스트, 서버/200캐릭터/이동 무저장/계정 복구 검사, APK/AAB237파일 일치·서명·오프라인 실행/저장/재실행 통과. EN76.2%, JA76.1%. 운영main274 유지. Play 미업로드, iOS 미빌드."});

window.SEORAP_DATA.tasks.push({"id": "dv-device-validation275", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "275 실기기 멀티 인원 집계·가구·접촉 장면 확인", "summary": "실계정 두 기기의 목록 집계 권한/대표사진 갱신, Android 터치로 방 이동, 애니메이션 체감과 발열, Play 배포 확인 필요. 기존 서버비 실측·iOS 출시·멀티 미완료 항목을 대체하지 않음."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.242-dev", "code": 275, "date": "2026-09-08", "items": ["멀티 목록 대표사진과 유저·캐릭터·마을 수 표시", "멀티 아이콘 배경·건물 크기·마을 이동 번역 개선", "멀티 집 가구 드래그 격자 미리보기 및 다른 방 이동", "관계 그룹 이동을 뒤로가기 옆으로, 물품 선택은 사진3열", "단계별 행동 선택과 성인 손잡기·기대기·키스 효과", "사진 코드·옷장30·신체접촉·사제 관계 이전 수정 포함", "dev779afa8 및 멀티 서버 반영; APK/AAB237자산과 오프라인 실행 확인", "운영main274 유지, Play 미업로드, iOS 미빌드"]});

window.SEORAP_DATA.tasks.push({"id": "dv-mail-watermark276", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "276 준비 · 캐릭터 편지 배경 아이콘과 우편함 디자인 소스", "summary": "dev03c7c8c. 캐릭터가 보낸 일반 편지·질문 편지·캐릭터 명의 우편에 아이콘을 8.5% 불투명도, -12도 기울기, 약한 흐림으로 본문 뒤에 표시. 본문과 버튼은 선명하며 장식이 터치를 가로채지 않음. 유저 우편에는 적용하지 않음. 우편함 SVG 기반 종이·나무 배경, 사진 선물 선택 및 해제 포함. 브라우저 회귀·KO/EN/JA 레이아웃·우편 배경/닫기 검사 통과. EN76.2%, JA76.1%. 소스만 반영, 새 APK/AAB와 서버 배포는 아직 하지 않음. 현재 Android 버전은275/1.0.242, 다음 빌드276 예정. 운영main274 유지."});

window.SEORAP_DATA.tasks.push({"id": "dv-mail-movement276-remaining", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "276 준비 · 이동·집 상호작용·기기별 UI 최종 확인 및 빌드", "summary": "이전 요청을 유지. 시키기 이동의 흰 버튼 배경 원인 제거와 집의 이름·행동 표시, 현관 경유 경로, 직업/마을 버튼 간격은 소스 수정 및 기본 회귀 통과. 모든 일반 생활 출입의 현관 경유, 집 안 두 캐릭터 키스 겹침/효과, 기기별 간격과 투명 아이콘을 추가 검증해야 함. 이후 캐시/버전276 갱신, APK/AAB 패키징·검증 및 필요한 서버 배포. 이전 서버비 실측·실계정·iOS 미완료 항목 유지."});
window.SEORAP_DATA.updates.unshift({"version": "276-dev-preparation (source only)", "code": 275, "date": "2026-09-08", "items": ["캐릭터 편지 본문 뒤에 옅게 기울어진 발신 캐릭터 아이콘", "SVG 기반 우편함 종이 디자인 및 사진 선물 선택·해제", "dev03c7c8c 소스 반영, KO/EN/JA 및 우편함 회귀 검증", "Android 현재275 유지. 276 빌드·서버 배포·일반 현관 이동/집 키스 최종 검증 대기"]});

window.SEORAP_DATA.tasks.push({"id": "dv-mail-watermark-size276", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "276 준비 · 편지 배경 캐릭터 확대 및 편지지 안쪽 제한", "summary": "dev73a8d48. 참고 PNG처럼 캐릭터 배경을 편지 안쪽 전체 크기에 맞춰 확대. 기울어진 모서리는 둥근 안쪽 영역에서 잘려 편지 밖으로 나오지 않음. 일반/질문/캐릭터 명의 편지에 동일 적용. 본문 선명도·8.5% 투명도 유지. 320/412/768px 브라우저 경계·닫기·유저 우편 제외 및 멀티 회귀 통과. EN76.2%, JA76.1%. Android275/1.0.242 유지, 다음276용 소스만 반영. 새 APK/AAB·서버·iOS 배포 없음. 기존276 이동/실기기 미완료 항목 유지."});
window.SEORAP_DATA.updates.unshift({"version": "276-dev-preparation (source only)", "code": 275, "date": "2026-09-08", "items": ["캐릭터 편지 배경 아이콘을 크게 확대", "기울어진 아이콘도 편지지 안쪽 둥근 영역에서 잘라 표시", "320·412·768px 화면 검증, dev73a8d48 반영", "설치 파일은 기존275 유지, 다음276용 소스 준비"]});

{const t=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-mail-movement276-remaining');if(t){t.completed=true;t.summary='dev494902a에서 소스·검증·276 APK/AAB 제작 및 멀티 서버 반영 완료. 실제 기기/두 계정 검증은 dv-device-validation276에 유지.'}}
window.SEORAP_DATA.tasks.push({"id": "dv-release276", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판 1.0.243 (276) APK/AAB 완료 · 우편함·집 이동·상호작용", "summary": "dev494902a. 275 이후 우편함 SVG 디자인과 편지 배경 확대/클리핑, 사진 선물 선택·해제, 직업/마을 버튼 간격, 캐릭터 흰 배경의 공통 테마 규칙 수정, 집 안 두 캐릭터 이름·행동과 키스 하트 표시 통합. 시키기/선물 현관 경유 및 관찰 중 일반 집 출입의 화면용 경로 추가(위치 연속 저장 없음, 첫 로딩/계정 전환 재생 안함). sharedTownApi 배포 완료. 브라우저 UI 회귀·집 키스 투명배경·320/412/768편지·사진 코드·옷장30·집생활70·200명생활540ms·리스너재사용·경로 무저장 검사 통과. APK/AAB 각각239실행파일/에셋 일치, 서명·276/1.0.243·오프라인 실행/저장/재실행 통과. APK61,647,569B, AAB60,871,037B. 한국어/영어/일본어 출시노트 제공. EN76.2%, JA76.1%. 운영main ad741e1(code274) 유지. Play 미업로드, iOS 미빌드. 실제 두 기기 동기화/발열은 별도 확인 유지."});
window.SEORAP_DATA.tasks.push({"id": "dv-device-validation276", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "276 실제 두 기기 멀티·집 출입·발열 확인", "summary": "제공 APK/AAB 및 브라우저 패키지 검증 완료. 실제 Android 기기 설치, 서로 다른 두 계정의 이동 표시/메일/집 키스 및 발열, Play 업로드는 미실행. 기존 서버비 실측과 iOS 계약/출시 요건은 유지."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.243-dev", "code": 276, "date": "2026-09-08", "items": ["나무 배경·종이 편지지의 우편함 디자인, 받은/보낸/쓰기 화면", "큰 캐릭터 편지 배경을 편지 안쪽에서 잘라 표시", "사전 사진 카드 선물 선택·해제", "직업/마을 이름 간격과 이동 캐릭터의 흰 배경 수정", "집 안 두 캐릭터 이름·행동 표시와 키스 하트", "현관을 거치는 이동, 좌표를 계속 저장하지 않는 화면용 경로", "APK/AAB239파일·서명·오프라인 실행 검증 및 멀티 서버 반영", "dev494902a, 운영main274 유지. Play/iOS 미배포"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release277", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판 1.0.244 (277) · 우편함과 상호작용 교체 수정", "summary": "dev5908650 반영 및 APK/AAB 제공. 우편함 중복 헤더/바깥 틀 제거, 전체 화면 나무 배경과 작성/보내기 개선, 발신/수신 분리, 캐릭터 알림·질문 받은 우편 통합 및 30일 이후 목록 제외(서버 TTL 삭제 아님). 집 이름·행동 배경 복원, 좌우 순서와 선물 전달 효과, 새 상호작용의 이전 상대 해제 및 이미 받은 선물 보존. 성인 접촉 설정에 따른 비노골적 둘만의 시간, 할 일 선택 단계 개선, 사전 사진 정사각형 표시. sharedTownApi 배포 완료. 로컬/서버 행동교체·성인조건·30일 보관·리스너/이동 무저장·브라우저 UI·APK/AAB239파일·서명·버전·패키지 오프라인 실행/저장/재시작 검증 통과. APK61,648,993B/AAB60,872,448B. EN76.2%, JA76.1%. 운영main274 유지, Play/iOS 미배포. 실제 두 기기 동기화·발열·청구금액 실측은 기존 미완료 항목 유지."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.244-dev", "code": 277, "date": "2026-09-08", "items": ["화면을 채우는 우편함, 발신/수신 표시와 작성/보내기 개선", "받은/보낸 우편 분리, 캐릭터 알림 통합, 받은 우편30일 이후 목록 제외", "집 이름·행동 이름표, 좌우 설정과 선물 전달 효과", "새 행동 지시 시 이전 상대가 남는 모순 수정", "성인 캐릭터의 둘만의 시간 및 할 일 선택 단계 개선", "사전 선택 사진 정사각형 표시", "관련 인물만 확인하는 선물 교체, 이동 좌표 연속 저장 없음", "dev5908650, APK/AAB277 검증 및 멀티 서버 반영. 운영main274 유지"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release278", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판 1.0.245 (278) · 우편 서버 삭제·집 이동·멀티 관리", "summary": "dev385c735. APK61,651,700B/AAB60,875,171B 제작,239개 실행파일/에셋 일치·서명·278/1.0.245·패키지 오프라인 시작/저장/재실행 검증 통과. sharedTownApi 및 expireVillageMail 배포 완료. 매일03시 KST 만료30일 우편/제안/발송기록/알림 정리, 관계·일정·선물 보존. 편지지와 목록(제목·날짜·본문), 삭제안내·뒤로가기 개선. 집 유형/층수를 홈 시계 위치와 브라우저 좌표 비교 통과. 혼자 하는 지시 이동경로·발소리 선택자, 관계 좌우순서 보존, 집 가구에서 성인 비노골적 애정효과와 두 사람 도착 동기화. 멀티 정보와2열4관리화면, 편집중 내용/스크롤 유지, 선택 사전공유·중복제외·80개 표시, 집 방문 제한 제거·방장 입주 문구. 본문/설명/일반텍스트500자(짧은기존제한유지). 배치삭제405건·서버권한·중복/80개·이동/가구·좌우·UI 회귀 통과. EN76.2%,JA76.1%. 운영main274 유지,Play/iOS 미배포. 실기기 발소리·두계정·발열·실청구금액은 미검증 유지."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.245-dev", "code": 278, "date": "2026-09-08", "items": ["30일 지난 우편 서버 자동정리(매일 한국시간03시), 수락된 설정과 선물 유지", "제목·날짜·본문 중심 우편 목록과 담백한 편지지, 삭제안내", "집 유형/층수 위치 및 혼자 하는 지시 이동·발소리·좌우순서 수정", "집의 침대·욕조·샤워기·의자에서 둘만의 시간과 따뜻한 애정효과", "멀티 정보 및 멤버·마을·사전·규칙 관리4화면, 입력/스크롤 유지", "선택 사전공유·중복제외·종류별80개 표시, 방장 입주하기", "본문/설명·일반 텍스트500자와 기존짧은제한 유지", "dev385c735 및 APK/AAB278 검증·서버배포. 운영main274 유지"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release279", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "개발판279 · 서버 조회 절감/동석 일치/계정 우편함", "summary": "진행 중. 장면 전환 시각 기반 서버 계산, 우편 구독 제거·계정 통합, 접촉 허용 단계·침대 레이어, 제안 문구/표, 멀티 마을 추가. 브라우저/서버/패키지 검증 후 완료 기록. 운영main274 유지."});

{const t=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-release279');if(t){t.completed=true;t.summary="dev4ae242b. 1.0.246/code279 APK/AAB239파일 일치·서명·오프라인 시작/저장/재실행 통과. sharedTownApi 및 계정우편 인덱스 배포 완료. 설정화면 호출 제외·13→9리스너·다음장면까지 최대5분 대기. 모의200주민1시간 쓰기2326회(매분전부저장12060대비80.7%감소,실청구비교아님). 개인/멀티 계정우편·사진·받는이 종류·제안표·응답우편, 동석장소/원격연락 표시, 양방향접촉설정·걸어가거절·커플침대이불·애정효과·사생활퇴실/다인예외, 멀티새마을추가 반영. 서버권한/중복/격리·브라우저UI·집생활70 검증통과. EN76.2%,JA76.1%. 운영main274유지. Play/iOS미배포,실기기푸시/발소리/발열·실제45원청구원인 미확인.";}}
window.SEORAP_DATA.updates.unshift({"version": "1.0.246-dev", "code": 279, "date": "2026-09-08", "items": ["서버 계산을 다음 생활 전환 시각까지 대기, 설정화면 반복 호출·우편 실시간 구독 감소", "개인/멀티 마을 계정 우편 통합, 발신사진과 받는이 종류, 제안 내용/답변/관계표 정리", "우편함 하단여백과 화면높이별 페이지", "다른 장소·문자 상대 동석표시와 상대 화면 대화 불일치 수정", "양쪽접촉설정에 따라 걸어가거절, 성인연인 자발적 둘만의시간·강한애정효과", "커플침대 이불 안 배치와 좌우, 사생활 방 퇴실·다인연인예외", "멀티 마을관리 새마을 추가", "dev4ae242b 및 Android279 패키지/서버배포 검증. 운영main274 유지"]});

window.SEORAP_DATA.tasks.push({id:"dv-release280",project:"서랍마을",section:"release",subsection:"testing",completed:false,title:"개발판 280 · 멀티 편집 일괄 저장과 계정 슬롯",summary:"편집 완료 시 일괄 저장, 우편 그룹·직급 대상 및 페이지 수, 사전 총 80개, 건물 이름 간격, 멀티 기분, 독립 캐릭터·마을 슬롯 적용과 검증"});

{const task=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-release280");if(task){task.completed=true;task.summary="dev f854611 · 1.0.247/code280. 편집 중 드래그·크기 조절 저장 제거, 완료 시 트랜잭션 일괄 저장·실패 초안 보존·충돌/취소·계정 격리. 우편 그룹명/직급/멤버 그룹 선택 및 현재/전체 페이지. 사전 총80개, 건물명 간격, 개인과 같은 기분 점수/이유. 독립 멀티 캐릭터 생성·사진 코드 복사·개인/멀티 슬롯 합산과 새 마을 슬롯 검사. 서버 배포 완료. APK/AAB241파일·서명·오프라인 재시작, 브라우저 UI 및 슬롯 동시성/권한/용량검증 통과. EN76.2%, JA76.1%. 운영 main274 유지. Play/iOS 미업로드, 실기기 및 실제 비용 감소율 미측정.";}}
window.SEORAP_DATA.updates.unshift({"version": "1.0.247-dev", "code": 280, "date": "2026-09-08", "items": ["멀티 건물·장식 편집은 완료 시 일괄 저장, 실패 초안 보존·충돌 방지·편집 취소", "우편 받는 이: 캐릭터/유저/그룹명 → 전체/직급/직접 만든 멤버 그룹", "우편 이전·현재/전체 페이지·다음 표시와 버튼 줄바꿈 수정", "개인/공유 사전 합계 80개, 기존 물품 보존", "멀티 건물 이름 간격 및 개인과 동일한 기분 점수·이유", "새 독립 멀티 캐릭터 생성과 사진 포함 코드 복사, 캐릭터·마을 슬롯 합산", "dev f854611, Android280 서명/패키지/오프라인 검증, 서버 배포 완료. 운영 main274 유지"]});
window.SEORAP_DATA.tasks.push({id:'dv-release281',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'개발판281 예정 · 두 계정 동기화·태블릿·효과강도',summary:'명령/접근/상대 표시 두 계정 불일치, 태블릿 비율·좌우·옆 지도 선택·캐릭터/집 팝업 잘림, 방장 그룹 삭제, 애니메이션 강도 설정 요청. 아직 코드 수정/281 패키지 검증 완료 아님. 서버 좌표 반복 저장 금지 유지.'});
window.SEORAP_DATA.tasks.push({id:'dv-ios-readiness-20260908',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'iOS 출시 준비 · 상품 3종 한영일 문구 등록, 로그인/결제 차단 해소 필요',summary:'사용자 유료 계약 활성화 알림 후 Apple API 확인. 1.0.215/build14 VALID·심사 선택 가능 및 출시 버전 연결. 3상품 × KO/EN/JA 이름/설명 등록 완료. 심사 스크린샷 누락, Firebase Apple 제공자 없음, 앱 내 계정삭제 미구현, 심사 계정/메모 없음, 암호화 응답 미입력. Production 거래 및 알림조회401·Sandbox4040010. 실제 구매 미검증·Sandbox 서버 유지. iOS 후보264는 운영274/개발280 개선 미포함. e185b2e 출시 감사 기록. 제출/출시/빌드15 업로드 미실행.'});
window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.215 준비 상태',code:14,date:'2026-09-08',items:['App Store용 빌드14 처리 완료 및 출시 버전 연결 확인','마을1개/캐릭터5명/응원선물 상품 한국어·영어·일본어 표시 이름과 설명 등록 완료','출시 전 Apple 로그인·계정 삭제·심사 정보·상품 스크린샷·실제 결제 서버 인증 해결 필요. 아직 심사 제출 가능 상태 아님','Android 운영274·개발280 유지, 개발판281 요청 미완료']});
{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios-readiness-20260908');if(task)task.summary+=' 2026-09-08 후속: Apple Developer 로그인 확인. App ID의 Sign In with Apple 활성화 저장 완료. 서랍마을 단일 앱용 Drawer Village Apple Login 키는 등록 직전까지 준비, 새 인증 키 생성 확인 대기. 기존 서명 프로파일 재생성 필요. Firebase 연결/앱 구현은 아직 미완료.';}
{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios-readiness-20260908');if(task)task.summary+=' 키 파일 저장 실패 후 사용자 재발급 요청: 2026-09-08 대체 키 Drawer Village Apple Login Replacement(895DH37Y2U), 서랍마을 Sign in with Apple 단일 권한으로 등록 완료. 다운로드는 누르지 않고 사용자 직접 저장 대기. 기존 DP73N3TJ7H는 새 파일 확보 전 폐기하지 않음. Firebase/서버 연결 아직 미완료.';}
{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios-readiness-20260908');if(task){task.summary+=' 최종 키 BXUJ9VYS35 다운로드파일 확보/P256 검증 및 제한폴더 백업 완료. Firebase Apple 제공자 enabled=true, iOS bundle/client ID와 코드흐름 키 등록 후 재조회 확인. 네이티브 로그인/탈퇴 앱 코드·서명프로파일·실기기 검증과 결제401은 미완료, 제출 전 전체요건 해결 필요.';}}
window.SEORAP_DATA.updates.unshift({version:'iOS Apple 로그인 설정 준비',code:14,date:'2026-09-08',items:['Apple 로그인 키 파일 확보와 Firebase 제공자 연결 확인','키 비밀 보관 및 백업 검증 완료','현재 배포 앱 변경 없음. 로그인/계정삭제 앱 반영·새 서명 빌드·실제 기기 검증은 아직 필요']});
{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios-readiness-20260908');if(task){task.completed=true;task.title='iOS 1.0.215(16) · 앱과 결제 3상품 심사 제출 완료';task.summary='2026-09-08 22:21 KST Apple 심사 제출. 앱 빌드16 + 캐릭터5명/마을1개/응원선물 3상품, 총4항목 WAITING_FOR_REVIEW 확인. 승인 후 자동 출시, 한국·일본·미국 무료 다운로드 설정. 운영274 기반 iOS 전용 브랜치 c982c09, 개발 멀티 제외. iPhone/iPad 네이티브 실행·StoreKit 상품가격 및 iPad 심사 이미지 검증. Apple 로그인/앱내 계정삭제/서명 갱신 포함. 결제 서버 b2a9662 배포 및 Apple Sandbox TEST 알림 SUCCESS 확인. 개인정보 main6593281 반영, 현재 웹264 유지한 정책전용 Cloudflare 배포6d20a22 완료. 실제 청구되는 구매·실기기 Apple 로그인/탈퇴 미검증, Production 알림 테스트API401 남음. 승인·출시 완료 아님. Android 운영274·개발280 유지. EN75.6%, JA75.5%.';}}
window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.215 심사 제출',code:16,date:'2026-09-08',items:['앱과 결제 상품 3개를 Apple 심사에 함께 제출, 현재 심사 대기 중','Apple 로그인·앱 안의 계정 삭제 및 첫 실행 로딩 수정 포함','iPhone·iPad 실행과 상품 가격 표시 확인, 심사 스크린샷 등록','개인정보 공개 페이지 갱신과 Apple 테스트 서버 알림 수신 검증 완료','승인 후 한국·일본·미국 자동 출시 설정. 실제 금액 청구 구매 및 실기기 로그인/탈퇴는 아직 미검증','Android 운영274·개발280 버전 유지, UI 영어75.6%·일본어75.5%']});

{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-release281');if(task){task.completed=true;task.title='개발판281 / 1.0.248 · Google Play AAB 전달';task.summary='멀티 지도·집의 캐릭터 선택/행동 명령을 그룹 데이터로 연결. 두 계정 테스트 환경에서 이동·기다림·도착 후 대화, 좌우 배치와 지도 선택 확인. 이동 추가 저장 0회, 마을 편집 완료 1회 저장 유지. 태블릿 장식 비율·캐릭터 선택창·버튼 양끝·주민등록증·집 선택창 수정. 효과 강도 기본/낮음/끄기, 방장 그룹 삭제 추가. dev 06873ba 반영. Firebase sharedTownApi·expireVillageMail·규칙 배포 완료. 281/1.0.248 서명 AAB·APK, 246개 파일 일치 및 실제 APK 오프라인 시작/저장 복원 통과. 실제 휴대폰 2대 통신·발열 측정·새 버전 실결제 미검증. Apple 제출 빌드16에는 이번 개발판 변경 미포함; 공개웹/운영 게임 main 미배포. 영어76.1%, 일본어76.0%.';}}
window.SEORAP_DATA.updates.unshift({version:'개발판 1.0.248',code:281,date:'2026-09-08',items:['멀티에서 캐릭터 선택·행동 명령·접근과 도착 후 장면 표시 개선','태블릿 옆 지도에서 캐릭터 선택, 2인 좌우 배치와 겹침 수정','태블릿 상단 장식 비율·캐릭터 선택 목록·저장 버튼·주민등록증·집 선택창 개선','설정 → 게임플레이에 애니메이션 효과 강도 기본/낮음/끄기 추가','방장만 확인 후 멀티 그룹 삭제 가능','마을 편집 완료 시 저장, 이동 중 반복 좌표 저장 없음','Google Play 업로드용 281 AAB와 설치 확인용 APK 생성·서명 검증 완료','Apple 심사 빌드16에는 개발판281 변경 미포함. 공개 웹과 운영 게임 main 유지','dev 커밋 06873ba · UI 영어76.1% / 일본어76.0%']});

window.SEORAP_DATA.tasks.push({"id": "dv-release282", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판282 / 1.0.249 · 멀티 집 구성원 편집·대화 관점·중복 계산 개선", "summary": "dev e6b2448 반영. 방장/운영진/집 소유자 서버 권한과 반려생물·차량·거주 설정 저장 연결. 입력 쓰기0회/완료1회, 취소·갱신중 입력유지, 개인 집 구성 보존 확인. 대화의 상대 관점과 개별 감정, 차갑게 대하는 행동, 이름 중복·자기 대답 기다림·뜬금없는 마을 잡담 수정. 한 렌더의 캐릭터 표시 계산 캐시, 시각 메타데이터만 바뀔 때 불필요 갱신 제외. 테스트 집 호출2→1회, 실제 휴대폰 체감 지연·발열 개선율은 미측정. 서버 sharedTownApi 배포 완료. Android282/1.0.249 APK·AAB 서명,247개 패키지 파일 일치, 오프라인 시작/저장복원 통과. 운영main과 Apple16/공개웹 유지. UI 영어76.1%, 일본어76.0%."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.249", "code": 282, "date": "2026-09-08", "items": ["방장·운영진의 멀티 집 구성원/반려생물/차량 편집 및 저장 연결", "거주 설정·반려생물 사진과 성향·차량 소유주를 편집 완료 때 저장, 입력 중 갱신으로 초기화되지 않음", "대화 제목·본문을 각 캐릭터 시점으로 표시: 이름 중복·자기 답변 기다림·뜬금없는 마을 잡담 수정", "차가운 관계 장면의 실제 행동 표현 개선", "동일 캐릭터의 표시 계산 반복과 서버 계산 시각만 바뀌는 재렌더 감소. 실제 휴대폰 지연·발열은 아직 미측정", "Android282 AAB/APK와 한·영·일 출시노트 전달, 이전281 변경 포함", "dev e6b2448, 멀티 서버 반영. Apple 심사16에는 미포함, 운영main/공개웹 유지", "영어76.1%·일본어76.0%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release283", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판283 / 1.0.250 · 메인테마·우편함·행동 전환", "summary": "dev 33b1bfd (검증 문서 e41918c). 자작 메인테마 앱 내 포함, 효과음과 별도 음악 볼륨·음소거. 차가운 말투 속 애정 표현 조정. 우편 읽음·제안 상태와 홈 미확인 수, 무관한 멀티 갱신 제외·열린 팝업 유지. 내 마을과 동일한 멀티 행동 선택, 혼자 독서로 바꾼 후 이전 상대 대기 해제. 두 계정 브라우저 출발·경로·도착 1명령/이동 추가저장0회, 서버 엔진·관점·로그 연속성 통과. Android283 서명 AAB/APK,250파일 일치·음악 원본 일치·오프라인 시작/저장복원. sharedTownApi 배포 완료. 레거시 알림 정적 검사3건 미해결 기록, 실기기 발열/음악 미검증. 읽음표시는 기기 계정별. EN76.0%,JA75.9%. 운영main/웹/Apple심사16 유지."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.250", "code": 283, "date": "2026-09-09", "items": ["서랍마을 메인 테마 추가, 설정 → 소리에서 음악 볼륨·음소거", "차가운 말투 속에서도 상대를 신경 쓰는 애정 표현 개선", "우편 읽음·안 읽음·수락·거절·답변 대기 및 홈 우편 수 표시", "우편함 불필요 갱신 감소, 열린 편지 버튼과 팝업 유지", "멀티 할 일 정하기를 내 마을과 같은 선택 화면으로 통일", "혼자 하는 행동 전환 후 이전 대화 상대가 계속 기다리는 문제 수정", "Android283 AAB/APK·한영일 출시노트 제공, 멀티 서버 반영", "dev33b1bfd/e41918c. Apple 제출16과 운영main 유지. UI 영어76.0%,일본어75.9%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release284", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판284 / 1.0.251 · 음량·행동 반응·일정 단계·캐릭터 설정", "summary": "dev c147a29. 음악 페이드·피크 압축, 멀티 명령 응답 즉시 반영, 행동 스크롤/정렬, 집 씻기 효과, 계정 최초 프로필 설정. 운동/병원 등 시간별 로컬 일정 단계. 관계 스크롤 레이아웃 계산 분리·이탈 타이머 해제, 전체설정 페이지 지연 생성. 접촉 반응·액세서리 복수선택, 전통의상 분위기 선택. 두 계정 이동 추가저장0, 휴대폰/태블릿 브라우저·서버권한·일정·프로필 테스트 통과. 실제 기기 음량·발열·월요금 미측정. sharedTownApi 배포. Android284 APK/AAB, 운영main/Apple16 유지. EN76.1%,JA76.1%."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.251", "code": 284, "date": "2026-09-09", "items": ["음악 시작·복귀 음량 페이드 및 큰 피크 완화", "할 일 명령 반영·작은 화면 스크롤·정렬 개선, 집 씻기 애니메이션", "프로필 최초 설정을 계정 기준으로 처리", "운동·병원 등의 시간별 진행 장면 추가, 이동·세부장면 추가 서버저장 없음", "관계 선택 및 캐릭터 전체설정 반복 작업 감소", "신체 접촉 반응과 상세 액세서리 복수 선택, 전통의상을 패션 분위기로 이동", "dev c147a29 및 멀티 서버 반영. Android284 배포 파일 준비, Apple 제출16 미포함", "영어76.1%·일본어76.1%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release285", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판285 / 1.0.252 · 터치 스크롤·사제 관계·멀티 캐릭터 편집", "summary": "dev2086e2a. 행동 버튼 위 터치 스크롤, 백그라운드 명령/우편/프로필 저장 및 실패 재시도, 사제 스승 지정·로그, 유저사진1:1크롭, 기록물 아이콘·시간 줄바꿈·지연생성, 멀티 건물 드래그 스냅, 만남 아이콘 크기·선택·홍조·감정과 분홍 가장자리 효과. 멀티 캐릭터 생성 진행 표시와 동일ID사진 재시도, 생성 시 개인사진 업로드 분리. 캐릭터탭 멀티 인물 조회·소유자 프로필 편집. 브라우저·서버권한 검사와 Android254개웹파일 일치·오프라인부팅 통과. sharedTownApi 배포. Android285 AAB/APK 제공, 운영main/Apple 제출 미변경. 실기기지연·발열·실제요금 미측정. EN76.1%,JA76.1%."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.252", "code": 285, "date": "2026-09-09", "items": ["행동 버튼 위에서도 터치 스크롤, 명령·메일·프로필 진행 상태와 실패 재시도", "사제 관계 스승 선택과 스승·제자 관점 로그", "유저사진 정사각형 자르기, 우편 사진 채우기", "기록물 상대 아이콘·시간 줄바꿈 수정, 상세목록 지연생성", "멀티 건물 드래그 그리드 적용, 편집 완료 저장 유지", "만남 아이콘 크기·선택, 애정 접촉 감정·홍조, 분홍 가장자리 그라데이션", "멀티 캐릭터 생성 상태 및 같은 캐릭터 사진 재시도, 캐릭터탭 소유자 프로필 편집", "dev2086e2a·sharedTownApi 반영. Android285 준비, 운영main/Apple 제출 변경 없음", "영어76.1%·일본어76.1%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release286", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판286 / 1.0.253 · 멀티 주민등록증·이사·복귀·관리자 제안 선택", "summary": "dev e9a0f2c. 멀티 캐릭터 기존 주민등록증/빠른설정/전체설정 통합, 카드 위 그룹 선택. 캐릭터탭 생성·구성원 기존캐 이사, 승인 후 개인목록 제거·추방 복귀/메일 보존·그룹삭제 경고. 관리자 제안/권한 적용 선택. 설정 프로필·우편 정사각형·전송 알림 닫기·Android 구독 오류 개선. 사진 Storage 교차 서비스 권한 수정, sharedTownApi/relationshipNotification 배포. 286 AAB/APK 서명, 256개자산 일치 및 APK 오프라인 시작/복원·서버/브라우저 검사 통과. 실제 Android 두 계정/사진 업로드/발열 미검증. iOS 검사 버전 불일치; Apple 제출과 운영main 유지. EN76.1%, JA76.1%."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.253", "code": 286, "date": "2026-09-09", "items": ["멀티 캐릭터 주민등록증·빠른설정·전체설정 통합, 카드 위 그룹 선택", "캐릭터탭 생성, 구성원에서 기존 캐릭터 이사·추방 시 복귀와 안내 우편", "추방 시 기존 우편 유지, 그룹 삭제 시 기록 영구 삭제 안내", "관리자의 관계·일정 제안/권한 적용 선택", "설정 프로필 편집, 우편 사진 정사각형과 닫을 수 있는 전송 상태 알림", "Android286 서명 AAB/APK 전달, dev e9a0f2c와 필요한 멀티 서버 반영", "실제 기기 동기화·사진 업로드 재현 검증은 남음. Apple 제출/운영main 유지", "UI 정적 번역 영어76.1%·일본어76.1%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release287", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판287 / 1.0.254 · 그룹 선택 터치·관리자 통합·캐릭터 전환", "summary": "dev f11ea77. 장식영역 pointer-events 상속으로 그룹선택 불가 수정, 폰/태블릿 hit target·내마을/멀티 왕복 검증. 운영자/관리자 UI·규칙·우편 관리자 통합, legacy operator 권한 유지·관리자 공지 수신 검사. 캐릭터 전환 즉시 전체저장 지연·단순선택 동기화이벤트 제거·현재사진 eager. 실제 Android 심한 지연은 PC에서 재현되지 않아 기기 성능 개선률 미확정. 287 AAB/APK 빌드·서명·256자산 일치·최종APK 오프라인/저장복원 통과. sharedTownApi 배포, 운영main/Apple 제출/공개웹 유지. EN76.1%,JA76.1%."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.254", "code": 287, "date": "2026-09-09", "items": ["캐릭터 그룹 선택 터치 복구 및 내 마을/멀티 전환 수정", "운영자·관리자를 관리자 하나로 통일, 기존 운영자 권한과 관리자 공지 수신 유지", "캐릭터 전환 저장 부담·불필요한 동기화 요청 감소, 현재 인물 그림 우선 로딩", "287 AAB/APK 제공, dev f11ea77·멀티 서버 반영", "실제 Android 캐릭터 전환 체감 지연 추가 확인 필요. Apple 제출과 운영main 유지", "영어76.1%·일본어76.1%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release288", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판288 / 1.0.255 · 멀티 사진 자르기·카드·대화·우편", "summary": "dev f00037f. 전송 알림 상태 카드, 멀티 대표사진 정사각형 자르기/취소, 그룹 2열 카드와 통계·추가 정렬. 집 대화 애니메이션, 사람·사전 대화 주제, 같은 장소 뒷담화 성격 반응. 답변 우편 응답자 사진·발신 방향과 원본 제안 분리. UI/격리 두 계정/권한/오프라인 재실행 통과, Android288 AAB/APK 서명·257자산 일치. sharedTownApi 배포. 운영main/Apple 제출 변경 없음. 실제 두 기기 네트워크·발열·요금 미측정. EN76.1%,JA76.1%."});

window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.255", "code": 288, "date": "2026-09-09", "items": ["전송 중·완료·실패 알림 카드와 닫기·재시도", "멀티 대표 사진 정사각형 자르기, 그룹 목록 2열 사진 카드·통계·추가 버튼 정렬", "집 안 시킨 대화 애니메이션, 사람·사전 물품 대화 주제", "같은 장소에서 자신의 뒷담화를 들었을 때 성격별 반응", "제안 답변 우편의 응답자 사진·보내는 이/받는 이 수정", "Android288 AAB/APK 제공, dev f00037f·sharedTownApi 반영. 운영main·Apple 제출 유지", "영어76.1%·일본어76.1%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release289", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판289 / 1.0.256 · 이사 후보·다중 선택·다른 멀티 이동", "summary": "dev68c81fb. 격리 렌더가 목적지 주민을 후보로 읽던 문제 수정. 개인마을 전체와 다른멀티 소유 캐릭터·소속 표기, 기존입주자 제외. 사진70px 3열 카드 다중선택, 다른멀티 추가확인/취소, 부분실패시 완료인물 제외 재시도. 서버 승인전 원소속 유지·승인시 최신프로필 원자적이전. 권한/거절/동기화 회귀 검사, AAB/APK서명·257자산 일치·APK오프라인저장복원 통과. sharedTownApi 배포. 운영main/Apple제출 유지. 실제두기기 이사 미검증. EN76.1%,JA76.1%."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.256", "code": 289, "date": "2026-09-09", "items": ["이사 목록에 개인마을/다른멀티의 내 캐릭터와 현재 소속 표시", "작은 사진 3열 카드 다중 선택, 목적지 기존입주자 제외", "다른멀티 이사 추가확인, 승인전 원소속 유지·거절시 이동없음", "승인시 최신설정 이전, 일부 실패시 완료인물 제외 재시도", "289 AAB/APK 및 dev68c81fb·멀티서버 반영. 운영main/Apple제출 유지", "영어76.1%·일본어76.1%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-mailcopy-post289", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "289 이후 개발 수정 · 입주/제안 우편 문구와 관리자 권한", "summary": "dev ac14489. 입주·동거·일정·관계·캐릭터그룹 문구 분리. 답변에 캐릭터 이름, 거절 사유 본문 통합. 관리자/기존 운영자 본인 캐릭터 입주 즉시 처리, 방장 승인 요청 없음. 일반 구성원 승인 절차 유지. 서버 회귀/KO EN JA 문구/브라우저 우편 검증 통과. Android versionCode289 유지·새 빌드 미생성, 운영main·Apple 유지. EN76.1% JA76.1%."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.256 이후 개발 수정", "date": "2026-09-09", "items": ["입주 신청을 관계 제안으로 표시하던 문구 수정", "답변에 캐릭터 이름과 거절 사유를 한 문장으로 표시", "관리자 입주 권한 수정; 일반 구성원 승인 유지", "dev ac14489. 새 Android 파일 아직 미생성. 영어/일본어 76.1%."]});

window.SEORAP_DATA.tasks.push({"id": "dv-release290", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판290 / 1.0.257 · 제안 우편·관리자 입주 수정 패키지", "summary": "dev09a0db1. 입주/동거/일정/관계/캐릭터그룹 문구 분리, 답변 캐릭터 이름·거절 사유 본문 통합, 관리자 입주 권한 수정 포함. AAB/APK 서명·258자산 일치·최종APK자산 오프라인 실행/저장복원 통과. Android 실제설치/Play 업로드 미실행. 운영main/Apple 유지. EN76.1%,JA76.1%."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.257", "code": 290, "date": "2026-09-09", "items": ["입주 신청을 관계 제안처럼 표시하던 문구 수정", "답변의 캐릭터 이름과 거절 사유를 본문에 함께 표시", "관리자 본인 캐릭터 입주 권한 수정, 일반 구성원 승인 유지", "289의 이사 기능 포함, 서명 AAB/APK290 전달", "dev09a0db1, 운영main·Apple 제출 유지. 영어/일본어76.1%."]});

window.SEORAP_DATA.tasks.push({"id": "dv-release291", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판291 / 1.0.258 · 마지막 캐릭터 이사 화면 복구·집/관계/마을 공유", "summary": "dev25d077d. 개인캐릭터0명+멀티활성 상태를 첫실행으로 오판하던 레이아웃 수정 및 빈캐릭터 목록 복구. 360x840/1280x800 검사. 집정보/방/인테리어 코드, 관계 명시적 인물 연결, 마을전체 복제, 방장소유 빈멀티마을로 원자적이전. 개인빈지도 귀환용 유지·외부인물관계 제외 안내. 캐릭터공유 네메뉴 정리. 권한/슬롯/중복요청/매핑/우편격리 테스트 및 Android291 서명/260자산일치/최종APK오프라인저장복원 통과. sharedTownApi 배포. 실제두계정네트워크/Android실기기 미검증. 운영main/Apple제출 유지. EN76.1%,JA76.0%."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.258", "code": 291, "date": "2026-09-09", "items": ["마지막 캐릭터가 이사한 후 홈아이콘·일정·사전 레이아웃이 깨지던 오류 수정", "개인캐릭터가 없어도 캐릭터탭 마을/그룹 선택 가능", "집·방·인테리어 공유 코드, 관계 대상 직접 연결, 마을전체 새사본 불러오기", "방장인 그룹의 기존 빈멀티마을로 함께 이사, 원래 빈개인지도는 귀환용 유지", "캐릭터 공유코드 만들기/불러오기·PNG/PDF증명서 네메뉴 정리", "291 AAB/APK 및 dev25d077d·서버 반영. 운영main·Apple 제출 유지", "영어76.1%·일본어76.0%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-sharing-post291", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "291 이후 · 공유 메뉴 위치 정리·시선 복사 붙여넣기", "summary": "dev df9b22d. 집정보 카드 안 집/방/인테리어 공유만 허용, 마을전체 공유/이전은 마을정보로 이동, 설정과 관계의 공용 공유 진입 제거. 시선 편집창 2열 복사/붙여넣기, 기존 유효 선택지 및 나이별 접촉 제한 적용. 폰/태블릿 팝업, 집코드 생성과 다른종류 진입차단, 시선 복사-변경-붙여넣기 브라우저 검증 통과. versionCode291 유지, 새 APK/AAB 미빌드. 이번 문구 KO/EN/JA 제공. 마지막 전체 번역측정 EN76.1%,JA76.0%."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.258 이후 개발 수정", "date": "2026-09-09", "items": ["집 공유는 집정보 안에 정렬·집/방/인테리어만 처리", "마을 공유와 이전은 마을정보에서 실행", "관계 공유 메뉴 제거, 시선 편집창에 복사/붙여넣기", "dev df9b22d; 새 Android 설치파일은 아직 미생성"]});

window.SEORAP_DATA.tasks.push({"id": "dv-humor-post291", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "291 이후 · 개별 성격에 맞는 장난 반응", "summary": "dev81374bf. 장난을 거의 하지 않음의 부정문을 장난선호로 오인하던 분류 수정. 양쪽 장난성향이 있어야 상호농담 허용. 한쪽만 장난을 즐길 때 무시/갈등대응별 짜증, 느긋한 상대는 여유롭게 넘기는 비대칭 장면. 부정반응 장난애니메이션 분류 제외. 성격/역방향시점/KO EN JA 및 멀티생활 회귀 통과. versionCode291 유지, 새빌드/서버배포 미실행. 번역 마지막 전체측정 EN76.1%,JA76.0%."});
window.SEORAP_DATA.updates.unshift({"version": "1.0.258 이후 개발 수정", "date": "2026-09-09", "items": ["장난을 거의 하지 않는 성격이 농담을 즐기는 것으로 처리되던 오류 수정", "장난을 받은 인물과 장난친 인물의 반응을 각자 성격에 맞게 분리", "무시하거나 짜증낸 반응을 여유롭게 넘기는 장면 추가", "dev81374bf, 새설치파일·서버배포 전"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release292", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판292 / 1.0.259 · 공유위치·시선복사·성격 반응", "summary": "dev197ec96. 집공유 범위/정렬, 마을정보로 전체공유/이전, 시선복사붙여넣기, 개별장난성격 반응 포함. APK/AAB서명·260자산일치·최종APK오프라인/복원·UI/성격 회귀 통과. sharedTownApi 배포. 실제Android/Play업로드 미실행. 사용자 확인: Play Store 일반 공개 운영중이며 소수테스트로 가정하지 않음. 실제이용자수·비용절감률 미측정. EN/JA76.0%."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.259", "code": 292, "date": "2026-09-09", "items": ["집공유 정렬과 범위 제한, 마을전체공유/이전은 마을정보", "시선 편집창 복사/붙여넣기", "개별 성격에 맞는 장난 반응과 무시/짜증·느긋한 대응", "서명 APK/AAB292 제공, dev197ec96 및 서버 반영", "영어·일본어76.0%, Apple 제출본 변경 없음"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release293", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판293 / 1.0.260 · 사교·후원 크레딧·설정 개선", "summary": "dev747de94. 사교4분류와 명령전용팝업, 계산요청 관점·성격 분기·갈등/요리 애니메이션, 정적명단 크레딧/이름편집과 로컬초안, 설정첫화면 계산지연 제거, 방경계/편집복귀, 계정초기화 위배치·본인계정삭제 연결. APK/AAB293 서명·265자산일치·최종APK오프라인시작/저장복원 통과. Play업로드는 사용자수동. main미변경. EN75.9%,JA75.8%. iOS별도후속작업."});
window.SEORAP_DATA.tasks.push({"id": "dv-ios17", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "iOS 1.0.260 (17) · Android293 반영·재심사 준비", "summary": "iOS15641be에 Android293 병합, Apple로그인/재인증삭제/StoreKit 유지. 공통파일hash·플랫폼검사·계정불일치삭제방지·사교UI 통과. macOS Actions34313516893 진행중. 실제기기영상과 UGC신고/차단이 미완료여서 재심사제출/출시미완료."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.260", "code": 293, "date": "2026-09-09", "items": ["사교활동4분류, 명령전용창과 계산방법 선택·성격반응", "설정 크레딧/후원자이름편집·애니메이션과 로컬초안", "설정첫화면 생성 최적화, 방경계와 편집복귀 개선", "계정초기화를 계정삭제 위 배치·Google본인계정삭제", "APK/AAB293 검증·다운로드파일 준비, dev747de94", "iOS빌드17 별도업로드 진행. 실제기기녹화·UGC신고차단 검증 후 재심사 필요", "EN75.9%,JA75.8%; 운영main미변경"]});

{const task=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios17');if(task){task.title='iOS 1.0.260 (17) · TestFlight 업로드 완료·재심사 준비';task.summary='iOS15641be에 Android293 반영. Mac서명·검증·업로드 Actions34313516893 성공. ASC빌드17 처리완료 및 암호화응답 저장. 기존 나만테스트 그룹에 빌드17 연결, ASC에 iPad설치됨 표시 확인(직접기능검증 아님). 기존심사1.0.215(16) 미해결 유지. 실제기기영상 및 UGC신고/차단 보완 미완료로 재심사제출/출시는 아직 안함.';}}
window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.260 (17)',date:'2026-09-09',items:['Android293 변경 iOS공통코드 반영·Apple로그인/삭제/결제 연결','서명·업로드 성공, Apple처리완료, 나만테스트 그룹 반영','실제기기녹화 및 신고/차단 보완 후 재심사 필요; 아직 재제출 아님']});

window.SEORAP_DATA.tasks.push({"id": "dv-release294", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판294 / 1.0.261 · 우편·멀티 스와이프·활동과 후원 자격", "summary": "dev f347140 (구현 f3f25f6/48a3fbf). 이사한 발신자 편지 읽기, 질문답변 보관, 멀티 스와이프와 일정선택 격리. 사교3분류·직접선택·욕구/취미 하위제목·직업별업무. 확인된 teaSupportCount 기준 후원편집과 금액별잠금, 금액입력 제거, 독립크레딧화면. Android294 APK/AAB서명·265자산일치·최종APK오프라인/복원 통과. sharedTownApi 배포완료. Play업로드 사용자수동. EN75.9%,JA75.8%. 운영main미변경."});

window.SEORAP_DATA.tasks.push({"id": "dv-ios18", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "iOS 1.0.261 (18) · Android294 반영·TestFlight 빌드", "summary": "f8a25a0에 Android294 병합. Apple어댑터유지, 공통기능/버전/hash검증과 우편/스와이프/사교/질문/업무 브라우저QA통과. Actions34316029777 업로드성공. 실제기기영상 및 UGC신고차단 보완 미완료: 재심사제출하지않음."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.261", "code": 294, "date": "2026-09-09", "items": ["이사한 캐릭터의 편지 열기·읽음 및 답변한 질문 우편 보관", "멀티 홈 좌우 스와이프 및 일정선택 덮어쓰기 수정", "사교3분류·바로선택·욕구/취미 세분화·직업별업무", "후원 구매누적액 기준 편집잠금·금액입력 제거·크레딧 별도화면", "Android294 서명 APK/AAB 제공·서버배포, dev f347140", "iOS18 코드반영·빌드진행; 실제기기자료와 신고/차단 보완 후 심사 필요", "EN75.9%·JA75.8%"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release295", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판295 / 1.0.262 · 신고·계정 차단", "summary": "Android8600fcc, dev4082ee5. 구성원/우편 신고, 계정UID양방향 차단·다른그룹/새캐릭터숨김·설정해제. 서버우편/제안/직접명령 검사·푸시발송차단 확인, 비공개신고접수와중복/권한검증. APK/AAB서명·266자산일치·오프라인실행/저장복원·모바일신고차단QA통과. 서버배포완료, 차단표시이름 보정 배포완료. 운영자신고처리문서포함. EN75.8%,JA75.8%. Play사용자업로드, 운영main유지."});

window.SEORAP_DATA.tasks.push({"id": "dv-ios19", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "iOS 1.0.262 (19) · 신고·계정 차단", "summary": "78b7cee에Android295반영. 플랫폼/hash검증·동일신고차단화면QA통과. Actions34319538014 서명업로드성공, 후속21로대체예정. 실제기기촬영과AppReview자료확인후재심사; 아직제출안함."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.262", "code": 295, "date": "2026-09-09", "items": ["멀티구성원·받은우편 신고 및 계정전체차단", "다른그룹·새캐릭터에도차단유지, 설정에서해제", "서버가양방향우편·제안·직접상호작용및푸시검사", "Android295서명APK/AAB제공·서버반영·신고운영안내", "iOS19동일코드반영/서명업로드중; 실기기영상필요", "EN75.8%,JA75.8%; dev4082ee5, 게임운영main유지"]});

window.SEORAP_DATA.tasks.push({"id": "dv-release297", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "개발판297 / 1.0.264 · 멀티 방 편집과 활동 선택 통일", "summary": "dev c1a6e36. 멤버 신고/계정차단 분리, 우편괄호제거. 방편집뒤로가기 편집종료, 멀티방정보 편집연결. 동일시키기창과멀티컨텍스트사용, 애정표현표시, 주제종류/검색/6개페이지. Android APK/AAB서명과266자산동일, 브라우저회귀검증. EN75.8%,JA75.8%. 게임main유지."});

window.SEORAP_DATA.tasks.push({"id": "dv-ios21", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "iOS 1.0.264 (21) · Android297 반영", "summary": "dd6f642. 플랫폼어댑터유지·소스해시·동일방편집/시키기QA통과. Apple업로드빌드진행중. 실제기기촬영·심사자료확인필요, 재심사미제출."});
window.SEORAP_DATA.updates.unshift({"version": "개발판 1.0.264", "code": 297, "date": "2026-09-09", "items": ["멀티 구성원에서 멤버 신고 / 계정 차단 별도 선택", "방 편집 뒤로가기에서 편집 종료, 멀티 방 편집 연결", "개인·멀티 활동 선택 창 통일, 애정 표현 표시 복구", "대화 주제 종류·검색·6개씩 페이지 선택", "Android297 APK/AAB 제공, iOS21 반영 및 업로드 빌드", "EN75.8% / JA75.8%"]});

window.SEORAP_DATA.tasks.push({id:'dv-release298',project:'서랍마을',section:'release',subsection:'testing',completed:true,title:'개발판298 / 1.0.265 · 시키기 메뉴·나답게·자동 취미',summary:'dev820ba4f. SVG참고 계층형 시키기, 생활57종, 성격/흡연/관계 기반 나답게, 설정취미 자동선택, 사전/인물/관계 기반 자동대화. 개인/멀티57종 및 UI회귀검증, 서명APK/AAB268자산일치·오프라인시작/저장복원 통과. sharedTownApi 최종배포완료. 새읽기/폴링추가없음. EN/JA75.8%. 실기기검증/Play업로드 미실행, 운영main유지.'});
window.SEORAP_DATA.tasks.push({id:'dv-ios22',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'iOS 1.0.265 (22) · Android298 반영',summary:'cb69081에 Android820ba4f 반영. 공통파일해시·플랫폼·동일활동UI검증통과. Actions34326170323 빌드진행중. 실제기기촬영/검증 및 심사자료 필요, 재심사미제출.'});
{const t=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios21');if(t)t.summary='dd6f642. 공통소스/방편집/시키기QA통과. Actions34321319258 서명업로드성공. 최신22로대체예정. 실제기기촬영·심사자료 필요, 재심사미제출.';}
window.SEORAP_DATA.updates.unshift({version:'개발판 1.0.265',code:298,date:'2026-09-09',items:['시키기 화면을 생활·이동·교류·취미활동·일/학업·나답게로 정리','위생·식사/요리·집안일·휴식·몸단장·수면 57개 행동','나답게는 성격·흡연 여부·관계·취미 반영, 취미활동은 설정취미 자동선택','대화주제 자동선택 및 관계·관심정도에 따른 뒷담화 반응','Android298 서명APK/AAB 및 멀티서버 반영; iOS22 코드반영/빌드중','EN75.8% / JA75.8%; 게임 dev820ba4f, 운영main유지']});
window.SEORAP_DATA.tasks.push({id:'dv-transfer-reappearance',project:'서랍마을',section:'release',subsection:'testing',completed:true,title:'298 이후 소스 수정 · 이사 캐릭터 재등장 방지',summary:'dev978e1d5 / iOSca43ce7. 이사위치·리비전이 클라우드/백업병합보다 우선, 오래된 이사기록 무시·개인복귀보존, 진행중우편조회와 이사완료갱신경합보완. 병합/복귀/동명이인/빈마을모바일회귀 통과. 새APK/AAB/iOS빌드는 미생성: 기존298/22에는 미포함. 신규UI문구없음 EN/JA75.8%. 실제네리네계정원인은 미확인.'});
{const t=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios22');if(t)t.summary='cb69081의 Actions34326170323 서명업로드성공. 이사재등장 수정ca43ce7은 후속소스에만 반영되어22미포함. 실기기촬영·심사자료 및 재심사 미완료.';}
window.SEORAP_DATA.updates.unshift({version:'298 이후 개발 소스',date:'2026-09-09',items:['이사한 캐릭터가 오래된 저장본 병합으로 내 마을에 되살아나는 경로 수정','멀티퇴거 후 개인마을 복귀와 동명이인 보존 검증','iOS공통코드에도반영, 기존설치파일에는미포함','Apple실기기영상 촬영순서 문서 추가']});
window.SEORAP_DATA.tasks.push({id:'dv-release299',project:'서랍마을',section:'release',subsection:'testing',completed:true,title:'개발판299 / 1.0.266 · 이사 재등장 수정 앱',summary:'devd151edc. 이사기록 우선·클라우드/백업 재등장 방지·퇴거복귀보존 및 우편갱신경합 수정 포함. 서명APK/AAB299 생성, 268자산일치·최종APK오프라인실행/저장복원·빈마을모바일/태블릿·활동메뉴 회귀통과. Downloads/서랍마을-299-1.0.266 제공. Play업로드 사용자진행. 신규UI문구없음 EN/JA75.8%. 게임main유지.'});
window.SEORAP_DATA.tasks.push({id:'dv-ios23',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'iOS 1.0.266 (23) · 이사 재등장 수정',summary:'Android299공통코드 및 이사수정 포함. 소스해시/플랫폼검사·iOS동기화통과. Mac서명업로드 빌드요청. Apple처리/TestFlight배포확인/실기기촬영/재심사미완료.'});
window.SEORAP_DATA.updates.unshift({version:'개발판 1.0.266',code:299,date:'2026-09-09',items:['이사한 캐릭터가 내 마을에 재등장하는 저장본 병합 오류 수정','멀티에서 돌아온 캐릭터의 정상 복귀 보존','이사 직후 우편·이사 기록 갱신 보완','서명APK/AAB299 제공, iOS23 동일수정 빌드요청','EN75.8% / JA75.8%; 운영main유지']});
{const t=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios23');if(t){t.title='iOS 1.0.266 (23) · 서명 업로드 완료';t.summary='224de50 / Actions34328230457 성공. uploadAccepted:true, 종료시점 Apple build:null로 처리완료 미확인. App Store Connect 로그인만료로 테스트그룹연결미확인. Android299 이사수정포함. 실제기기촬영·심사자료·재심사미완료.';}}
window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.266 (23)',date:'2026-09-09',items:['이사재등장수정 포함 빌드·서명·Apple업로드 성공','Apple처리완료 및 TestFlight그룹연결 확인 대기','심사용 영상은 App Review 답변에첨부, 일반스토어공개영상과별도','실기기영상촬영·재심사미완료']});
window.SEORAP_DATA.tasks.push({id:'dv-release300',project:'서랍마을',section:'release',subsection:'testing',completed:true,title:'개발판300 / 1.0.267 · 태블릿 상점',summary:'앱소스10f75bf, dev e2afa1f. SVG참고 가로태블릿 좌측상점주인/우측3열카드, 상점그림에 공통header가 적용되던 구조수정. 휴대폰/세로태블릿·Android4상품2행·iOS3상품·탭/뒤로·결제정적회귀 통과. 서명APK/AAB268자산일치·최종APK오프라인시작/저장복원통과. Downloads/서랍마을-300-1.0.267 제공. 서버조회추가없음. EN/JA75.8%; 운영main유지.'});
window.SEORAP_DATA.tasks.push({id:'dv-ios24',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'iOS 1.0.267 (24) · 태블릿 상점 TestFlight',summary:'28a1d9c. 공통소스해시·플랫폼·동일상점화면검증통과. Actions34330322006 빌드중. Apple로그인확인, 처리후 테스트그룹연결필요. 실기기촬영 및 재심사미완료. 마지막확인된그룹빌드17이후 누적Discord패치노트준비.'});
window.SEORAP_DATA.updates.unshift({version:'개발판 1.0.267',code:300,date:'2026-09-09',items:['태블릿 가로 상점을 왼쪽 상점주인·말풍선과 오른쪽3열상품으로 배치','상품목록 독립스크롤과 탭·구매복원 유지','휴대폰·세로태블릿 배열 및 공통상단바스타일간섭 수정','Android300 서명APK/AAB 제공, iOS24 빌드중','EN75.8% / JA75.8%']});
{const t=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios24');if(t){t.completed=true;t.title='iOS 1.0.267 (24) · TestFlight 테스트 중';t.summary='28a1d9c / Actions34330322006 성공. Apple 처리완료·수출규정답변 저장·나만 테스트 내부그룹 빌드24 테스트 중 확인. Android300과 동일 태블릿 상점 포함. 실기기 설치·촬영 및 App Review 재심사는 아직 미완료. 직전 그룹빌드17부터24까지 누적 Discord 패치노트 제공.';}}
window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.267 (24)',date:'2026-09-09',items:['태블릿 상점 포함 빌드24 Apple 처리완료','나만 테스트 내부그룹에서 테스트 중 확인','Android300 AAB/APK 및 빌드17 이후 누적 Discord 패치노트 제공','실제 iPad 업데이트·촬영 후 App Review 재심사 진행 필요']});
window.SEORAP_DATA.tasks.push({id:'dv-release301',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'301 / iOS25 · 태블릿 캐릭터·Apple 구매 복원',summary:'dev 수정 중. 전체설정 뒤로가기 CSS 우선순위·그룹 선택창 겹침 수정. 로그인 자동 복원이 구매 잠금과 전체 저장 다운로드를 묶던 구조 분리·시간 제한·구매 대기 연결 검증. 식사 지시 불일치는 현재 미재현으로 추가 확인 필요. App Review 재심사 보류.'});
{const t=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-release301');if(t){t.title='302 / iOS26 · 앱 아이콘·태블릿·구매 복원';t.summary='dev637c5b4, iOS24e3574. 제공된 무지개 서랍 아이콘 적용. 태블릿 전체설정 뒤로가기 CSS 크기 우선순위·그룹선택 겹침 수정. Apple 자동 복원 구매 대기 분리, 빈 구매내역 서버·전체저장조회 생략. 4화면 전환·구매동시성·멈춘복원회복·57생활행동 검사통과. Android302 서명APK/AAB269자산일치 제공. iOS26 Actions34334549048 대기. 식사몸단장제보 현재 미재현, 실제결제창·실기기 확인미완료.';}}
window.SEORAP_DATA.updates.unshift({version:'개발판 1.0.269',code:302,date:'2026-09-09',items:['제공된 무지개 서랍 그림으로 앱 아이콘 교체','태블릿 전체설정 뒤로가기 크기 및 캐릭터 그룹 선택창 겹침 수정','Apple 로그인 자동 구매 확인이 새 구매를 막는 대기 처리 개선','Android302 AAB/APK 제공·iOS26 서명업로드 대기','EN75.8% / JA75.8%; 실제 구매창·식사 오류 확인 및 App Review 재심사 미완료']});
{const t=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-release301');if(t){t.completed=true;t.title='302 / iOS26 · Android 제공·TestFlight 테스트 중';t.summary='게임 dev637c5b4, iOS24e3574. Android302/1.0.269 서명APK/AAB269자산검증 완료. Actions34334549048 성공·Apple 처리완료·수출규정답변 저장·나만 테스트 그룹1.0.269(26) 테스트 중 확인. 새아이콘·태블릿뒤로가기/그룹선택겹침·Apple자동복원구매대기 개선. 직전배포24 이후 누적Discord노트 제공. 세 상품 기준국가 대한민국(KRW) 확인. 실제iPad결제/식사제보 추가확인 및 App Review 재심사는 미완료. EN/JA75.8%, 운영게임main유지.';}}
window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.269 (26)',date:'2026-09-09',items:['새 앱 아이콘·태블릿 선택창/뒤로가기·Apple 구매 대기 개선 포함','Apple 업로드·처리 완료, 나만 테스트 내부그룹 테스트 중 확인','Android302 APK/AAB 및 직전TestFlight24 이후 누적패치노트 제공','캐릭터·마을·응원선물 기준국가 대한민국(KRW) 확인','실제iPad 구매 확인·식사제보 확인·App Review 재심사 미완료; EN/JA75.8%']});
window.SEORAP_DATA.tasks.push({id:'dv-ios27',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'iOS 1.0.269(27) · Apple 구매창 재점검',summary:'dev5b55860, iOS0abb562. Apple 결제창 현재 UIViewController 지정·MainActor 실행, 상품조회 사전시간제한 및 네이티브 중복구매방지. 가격조회/상점재렌더 구매버튼잠금유지, 단계표시 KO/EN/JA. 구매동시성/멈춘조회/늦은가격응답 회귀검사통과. iOS27 서명빌드요청, Android302 유지·새APK/AAB없음. 실제iPad구매 검증 미완료.'});
{const t=window.SEORAP_DATA.tasks.find(t=>t.id==='dv-ios27');if(t){t.completed=true;t.summary+=' Actions34336965234 성공·Apple처리완료·수출규정답변저장·나만테스트 그룹27 테스트중 확인. 사용자26완전재시작후첫구매에서도BUSY발생 확인; 27실기기재검증필요. EN/JA75.8%, 게임main유지.';}}
window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.269 (27)',date:'2026-09-09',items:['Apple 결제창 표시 화면 지정 및 상품조회 대기 보완','가격 갱신·상점 재진입에도 구매 진행 상태 유지','계정·상품·결제창·지급 확인 단계 표시 KO/EN/JA','TestFlight 나만 테스트 그룹27 테스트 중 확인','실제iPad 구매 재확인 필요·App Review 미제출; Android302 유지·EN/JA75.8%']});
window.SEORAP_DATA.tasks.push({id:'dv-ios28',project:'서랍마을',section:'release',subsection:'testing',completed:true,title:'iOS 1.0.269(28) · 결제 응답 대기 보완',summary:'27에서도 Apple 결제창 응답대기 제보. dev8788817/iOS0a79906. UIKit SceneDelegate·단일창 manifest·Google/앱 URL 전달 유지, 활성windowScene 결제호출. 이전구매검증실패시 새결제차단·복원안내, 장기대기 상태확인(민감정보없음). 구매대기·영수증실패·복원회복 회귀통과. Mac iPad시뮬레이터 scene실행검사를 업로드전에 추가. Actions34338658465 성공. iPadOS26.2 창/루트/활성scene 검증 및 실행화면 확인. TestFlight28 나만테스트 그룹 배포완료. 실제기기28 구매대기 지속: hasScene/hasWindow/sceneActive=true, purchaseActive=true, waitingSeconds69, errorCode none. 이후 사용자 확인: Apple 계정 인증창 표시→구매 성공→앱 내 상품 지급 반영 완료. 실기기 구매·지급 1회 흐름 검증 완료. 대기 재발 여부·모든 상품·구매복원은 별도 검증 필요. Android302유지.'});

window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.269 (28)',date:'2026-09-09',items:['iPad 결제창 연결 구조 및 이전 구매 검증 보완','장기 구매 대기 중 결제 상태 확인 추가','TestFlight 내부 배포 완료·iPadOS26.2 실행 검증 통과','사용자 iPad에서 Apple 인증·구매 성공·상품 지급 반영 확인','Android302 유지·영어/일본어75.8%']});
window.SEORAP_DATA.tasks.push({id:'dv-command-menu303',project:'서랍마을',section:'development',subsection:'ui',completed:true,title:'활동 선택 · 취미 접근 및 메뉴 위계 개선',summary:'dev fb39474. 큰 분류 그림/설명·작은 활동 버튼·경로와 캐릭터명 구분. 취미 목록 진입 복원·등록 취미 표시·자동 취미 실행·빈 설정 안내와 직접 선택. 대화상자 열린 동안 배경 재렌더 지연·닫은 뒤 반영. 360x840/1180x820 실행 및 잘림 검사 통과·실제 자동 취미 명령 생성 확인. 신규 문구 KO/EN/JA 완료. 개발 코드 및 TestFlight29에 반영·내부 그룹 테스트 중 확인. Android versionCode302 유지.'});

window.SEORAP_DATA.tasks.push({id:'dv-ios29',project:'서랍마을',section:'release',subsection:'testing',completed:true,title:'iOS 1.0.269 (29) · Apple 계정 삭제·활동 메뉴',summary:'dev8de744d/iOS8a349dd. 삭제시 native signIn과 web reauthenticate가 같은 Apple 자격을 두번 소비하던 원인 수정. skipNativeAuth true·현재 웹 계정 토큰으로 Apple 코드 해제. 새 인증 1회·잘못된 계정·최종취소·연결해제실패 삭제차단 테스트 및 서버삭제 범위 검사 통과. 취미목록/자동실행·분류별 그림과 위계·선택중 배경갱신 지연 포함. Actions34342351677 성공·iPadOS26.2 실행 검사 통과·Apple 처리와 수출규정 완료·나만 테스트 그룹29 테스트 중 확인. 실제 기기 계정 삭제는 사용자 확인 대기·App Review 미제출. Android302 유지·게임main 미변경·EN/JA75.8%.'});

window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.269 (29)',date:'2026-09-09',items:['Apple 계정 삭제 중 중복 인증 오류 수정 및 현재 계정으로 연결 해제','취미 목록·자동 활동·빈 취미 직접 선택 복원','활동 메뉴 분류/세부 선택 위계 정리와 선택 중 배경 갱신 지연','TestFlight29 나만 테스트 그룹 배포 완료·실제 계정 삭제 확인 대기','Android302 유지·게임main 유지·영어/일본어75.8%']});
window.SEORAP_DATA.tasks.push({id:'dv-ios30',project:'서랍마을',section:'release',subsection:'testing',completed:true,title:'iOS 1.0.269 (30) · 구매 복구·멀티 전환',summary:'dev a82e61a / iOS18b2ebc. 미처리 구매 복구 후 새 결제 시작 금지, 결제 상태 확인은 비대화형 구매 복구·진행중 중복구매 잠금 유지. 방장/관리자 우편 허용(전체공지 권한 유지), 그룹 초기 데이터 수신 전 화면 유지, 탈퇴 단일요청·완료 후 갱신 실패 분리. 회귀검사 및 휴대폰/태블릿 전환 검사 통과. Actions34346487611 성공·iPadOS26.2 실행 검사 통과·Apple 처리/수출규정 완료·나만 테스트 그룹30 테스트 중 확인. 실제iPad 반복결제 및 멀티 제보 재검증 필요. Android303/1.0.270 APK·AAB 전달 완료·EN/JA75.8%·게임main 유지.'});
window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.269 (30)',date:'2026-09-09',items:['미처리 구매 복구 시 추가 결제창 방지·확인 버튼에서 구매 복구','방장/관리자에게 일반 멤버 우편 발송 서버 적용','캐릭터 그룹 전환 로딩 유지·탈퇴 중복 처리 보완','TestFlight30 나만 테스트 그룹 배포 완료·Android303 APK/AAB 전달·실기기 제보 재검증 필요·App Review 미제출']});
window.SEORAP_DATA.tasks.push({id:'dv-android303',project:'서랍마을',section:'release',subsection:'android',completed:true,title:'Android 1.0.270 (303) · 멀티 편지·그룹 전환',summary:'사용자 Play Console 최신302 확인 후303 빌드. dev101fe49. 방장/관리자 편지 서버 적용·탈퇴 반복 요청 서버 적용. 캐릭터 그룹 초기 데이터 로딩중 화면유지, 탈퇴 단일요청 및 후속갱신 오류분리. 취미 진입/자동활동 및 메뉴위계 개선 포함. assembleRelease/bundleRelease 성공·APK버전303/1.0.270·서명검증·AAB jar검증·수정파일 패키지 동일성 검사 통과. Downloads/서랍마을-1.0.270-303 APK/AAB 전달. 실제갤럭시 제보흐름 재검증 필요·Play Console 미업로드·게임main 유지·KO/EN/JA 출시노트·EN/JA75.8%.'});
window.SEORAP_DATA.updates.unshift({version:'Android 1.0.270 (303)',date:'2026-09-09',items:['방장·관리자에게 일반 멤버 편지 발송 허용','캐릭터 그룹 전환 로딩 유지·탈퇴 중복 요청 보완','취미 목록·자동/직접 활동 선택·활동 메뉴 위계 개선','서명된 APK/AAB 전달·Play Console 업로드는 사용자 진행·EN/JA75.8%']});
window.SEORAP_DATA.tasks.push({id:'dv-mail-group31',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'우편 열기·Apple 수신·캐릭터 그룹 빈 화면 재점검',summary:'dev1344dd4. 캐릭터 로딩 잠금이 우편함 버튼까지 비활성화하던 범위를 캐릭터 탭으로 한정. 우편함 진입시 새 목록 확인·계정별 우편 변경 신호 구독(Apple 포함)·서버 sharedTownApi 배포 완료. 구매 대기 안내 KO/EN/JA 수정·네이티브 구매 잠금 유지. 휴대폰/태블릿 그룹 로딩 중 우편 터치·읽기 검사, 신호 병합/로그아웃 격리, 구매 회귀 통과. 캐릭터 빈 화면은 해당 계정 소유 주민 존재 여부 사용자 확인 대기, 완전 해결 미확인. 새 APK/AAB·TestFlight 미배포, 기존 Android303/iOS30 유지. EN/JA75.8%. 신고는 moderationReports에 저장되며 제작자 알림/전용신고함 아직 없음 안내.'});
window.SEORAP_DATA.updates.unshift({version:'Android303 / iOS30 이후 수정 중',date:'2026-09-09',items:['우편함 버튼 잠금 범위 및 Apple 앱 내 우편 갱신 수정','결제 지연 안내 문구 정리·진행 중 중복구매 차단 유지','서버 변경 배포 완료·새 앱 빌드 미배포','멀티 캐릭터 빈 화면 추가 확인 중·게임 main 유지']});window.SEORAP_DATA.tasks.push({id:'dv-report-email',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'신고 접수 메일 자동 알림 연결',summary:'실제 lifelog-98fff Firestore moderationReports 조회: 문서 없음 확인. dev d91c5b3. kkyaareuk@gmail.com 고정 수신·신고 생성 트리거·Resend 중복방지·23시간 재시도 범위·원본보존 코드 및 모의검사 완료. Resend 발송 계정/발신주소/API 인증 미연결, 함수 미배포·실제 메일 미발송. 로그인 페이지 열기 요청. 앱 빌드 변경 없음.'});
window.SEORAP_DATA.tasks.push({id:'dv-empty-character31',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'캐릭터 없음 화면과 새 캐릭터 만들기 복구',summary:'dev8452be6. 빈 멀티 캐릭터 화면을 주민등록 안내·뒤로가기·그룹 선택·생성 버튼으로 구성. 생성시 개인 마을 컨텍스트와 hub로 전환. 360x840/1180x820 브라우저에서 빈 상태→내 마을 캐릭터 생성→정상 민증 화면 확인, 우편 터치 검사 통과. 사용자 갤탭끼리는 정상 추가 제보: 멀티 전용 원인 단정하지 않음. 실제iPad·그 외 경로 미검증·새 APK/TestFlight 미배포. 신규 KO/EN/JA 문구 포함, 전체 EN/JA75.8%.'});
window.SEORAP_DATA.updates.unshift({version:'Android303 / iOS30 이후 개발 중',date:'2026-09-09',items:['신고 자동 이메일 코드·검사 완료, 발송 서비스 연결 대기','캐릭터 없음 화면 안내와 새 캐릭터 생성 경로 개선','새 앱 미배포·iPad 제보 재검증 필요·게임 main 유지']});
Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-report-email')||{},{completed:true,summary:'2026-09-09 moderationReportEmail 배포·Firebase Secret 연결 완료. kkyaareuk@gmail.com으로 명시적 연결 테스트: Resend 발송 접수 및 Firestore emailNotification.sent 확인. 실제 받은편지함 도착은 미확인. 서버 고정 수신·원본 신고 보존·중복 방지 검사 통과. dev48ac238.'});
window.SEORAP_DATA.tasks.push({id:'dv-remote-gossip31',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'조작 지연·비대면 연락·시선 기반 대화 개선',summary:'dev48ac238. 연락을 문자/안부문자/전화걸기로 분리·발신자만 행동·수신자 수면 보존·2인 장면 없음·휴대폰 모션. 뒷담화는 방향별 시선의 불신/성가심/불편함과 대상 성격을 사용, 이름·직업 조합 주제 제거. 명시적 호의는 혐관 기본값보다 우선. 행동 즉시 전체 저장을 지연 저장으로 변경·닫기 후 중복 렌더 병합/첫 화면 표시 기회 확보. 상호 성인 접촉 허용 키스 3종 검사. sharedTownApi 서버 배포 완료. 360x840/1180x820 메뉴/취미/우편/빈 캐릭터 경로 검사 통과. 실제 기기 전체 지연 측정, 광범위 대화/애니메이션 확대 및 새 앱 배포는 미완료. Android303/iOS30 유지. EN/JA 기존 집계75.8%, 신규 문구3개언어 작성.'});
window.SEORAP_DATA.updates.unshift({version:'Android303 / iOS30 이후 개발 · 48ac238',date:'2026-09-09',items:['신고 자동 메일 서버 연결·테스트 발송 접수 확인','비대면 연락과 시선 기반 뒷담화 수정·성인 상호 허용 키스 제한 수정','활동 저장과 닫기 후 화면 갱신 처리 개선','새 APK/AAB·TestFlight 미배포, 실제 기기 전체 렉 검증 필요']});

window.SEORAP_DATA.tasks.push({id:'dv-release304-ios31',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'Android304 · TestFlight31 배포',summary:'Android304/1.0.271 서명 APK/AAB 생성·269개 패키지 자산 동일성·오프라인 시작/저장 복원·휴대폰/태블릿 명령 메뉴 검사 통과. Downloads/서랍마을-304-1.0.271 전달 파일 준비. iOS1.0.269(31) 0712795 CI34354192713 빌드 중. 직전 TestFlight30 이후 누적 패치노트 작성. 추가 버그/제안/사진 접수 기능은 사용자 취소 범위 확인 중이므로 이번 배포에서 제외. 기존 멤버 신고 자동 메일 서버 유지. 영어75.8%, 일본어75.8%. 게임main 유지·dev18f0a19.'});
window.SEORAP_DATA.updates.unshift({version:'Android 304 / 1.0.271 · iOS 31 준비',date:'2026-09-09',items:['Android APK/AAB 빌드·서명·패키지검사 완료','우편·빈 캐릭터 화면·비대면 연락·시선 기반 뒷담화·키스 제한 수정 포함','TestFlight31 iPad 실행 검사 진행 중','새 버그/제안/사진 접수는 배포 제외']});

window.SEORAP_DATA.tasks.push({id:'dv-catalog-photo305',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'공유 사전 사진 복원 · Android305/TestFlight32',summary:'292 제보 반영. 개인 전체 클라우드 재조회 대신 선택한 물품만 로컬 사진 복원→압축/해시 중복확인 업로드→공유. 실패/그룹변경 시 게시 차단. 서버 기기전용 이미지주소 거부·같은ID 재공유 시 빈/로컬 사진만 복구·중복항목 방지. 원본 보유자가 물품 재공유 필요. sharedTownApi 배포 완료. 단위·선택 업로드 검사 통과. Android305/1.0.272 APK/AAB 서명·269자산·버전 검사 완료. TestFlight31 CI 취소,32 CI34356137603 진행중. iOS0fb43d4/dev53a5d87. 실제 두 기기 사용자 사진 재공유 재검증은 미실시.'});
window.SEORAP_DATA.updates.unshift({version:'Android 305 / 1.0.272 · TestFlight32',date:'2026-09-09',items:['공유 사전 사진이 다른 기기에서 깨지는 전송 경로 수정','기존 깨진 사진은 원본 보유자가 같은 물품 재공유로 복구 가능','305 APK/AAB 검증 완료·304 대신305 사용','TestFlight31 중단·32 새 빌드 진행 중']});
Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-release304-ios31')||{},{completed:true,summary:'305/32로 대체 완료. Android304는 이전 전달본. iOS31 CI 취소 요청 전 Apple 업로드가 접수되어 목록에 남았으나 테스트 그룹 미배포. 최종 사용 버전은 Android305/1.0.272 및 TestFlight1.0.269(32).'});
Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-catalog-photo305')||{},{completed:true,summary:'공유 사전 사진 업로드/재공유 복구 수정 및 sharedTownApi 배포 완료. 선택 항목만 업로드·실패시 게시 차단·중복 없이 빈/기기전용 사진 복구. 실제 IndexedDB 사진 복원·누락 차단 및 단위 검사 통과. Android305/1.0.272 APK/AAB 서명·269자산·오프라인 시작/저장 복원 검사 통과. iOS32 Actions34356137603 성공·iPad 시뮬레이터 실행 통과·수출 규정 설정 완료·나만 테스트 그룹 테스트 중 UI 확인. 원본 보유자가 새 버전에서 같은 물품 재공유 필요. 실제 두 물리 기기 재공유 검증은 미실시. dev a4e1e3d/iOS0fb43d4, 게임main 유지. 신규 피드백/사진 접수 제외. EN/JA75.8%. Play Console 업로드와 App Review 제출은 미진행.'});
window.SEORAP_DATA.updates.unshift({version:'Android 1.0.272 (305) · TestFlight 1.0.269 (32) 배포 완료',date:'2026-09-09',items:['공유 사전 사진 전송 수정·원본 보유자 재공유로 기존 기기전용 사진 복구','우편 열기/Apple 갱신·빈 캐릭터·비대면 연락·시선 기반 뒷담화·키스 제한 수정 포함','305 서명 APK/AAB 전달·TestFlight32 나만 테스트 그룹 테스트 중 확인','직전 Android303/TestFlight30 이후 누적 패치노트 제공·게임main 유지·영어/일본어75.8%']});
Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-report-email')||{},{completed:true,summary:'2026-09-09 실제 iPad32 신고 흐름 확인. 22:48 신고 접수→moderationReportEmail HTTP204→Resend Sent/Delivered 확인. Gmail 받은편지함 분류는 미확인. 이전 연결 테스트도 Delivered. 녹화 후 계정 삭제 완료로 관련 신고 문서는 계정 삭제 로직에 따라 현재 남아있지 않음. 메일 발송 오류 재현 없음·서버/앱 변경 없음.'});
window.SEORAP_DATA.tasks.push({id:'dv-review-video32',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'iPad32 심사 영상·스크린샷 확인',summary:'실제 iPad 녹화 8분26초,2732x2048. TestFlight32 실행·캐릭터/마을/멀티·구매 완료(약5:58)·신고 접수(7:00)·계정 삭제 완료(8:10) 장면 확인. 차단 완료와 최초 가입 흐름은 명확히 확인되지 않아 보충 확인 필요. 스크린샷5장 원본2732x2048, 마을 후보·빈 사전/사진 미설정 캐릭터는 소개용 후보 제외. 심사 제출/스토어 업로드 미진행. 원본 수정 없음.'});

window.SEORAP_DATA.tasks.push({id:'dv-block-remove-member',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'멤버 차단·퇴장 선택',summary:'305/32 이후 dev 코드 추가: 방장·관리자는 차단 또는 차단하고 퇴장 선택, 일반 멤버는 차단만. 서버 원자 처리·권한 검증·캐릭터 개인마을 복귀·타 그룹 보존. 서버 테스트와 모바일 UI 검사 통과, iOS 공통 소스 반영. 새 앱 빌드/서버 배포는 미진행. 신규 EN/JA 문구 완료.'});
window.SEORAP_DATA.updates.unshift({version:'305/32 이후 개발 · 차단 및 퇴장 선택',date:'2026-09-09',items:['방장·관리자의 멤버 차단 시 퇴장 여부 선택 추가','퇴장한 멤버의 캐릭터 개인 마을 복귀·계정 차단 함께 처리','권한/복귀/모바일 UI 검사 통과·새 빌드와 운영 배포 대기']});

Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-block-remove-member'),{summary:'dev1bf5d66 및 iOS77ecc88: 방장·관리자 차단/차단하고 퇴장 선택. 권한·원자 처리·개인마을 복귀·기존 우편 보존 검증, 모바일 UI와 공유 서비스 회귀 검사 통과. sharedTownApi 운영 서버 배포 성공. 앱 신규 빌드 대기: 현재305/32에는 새 UI 미포함. EN/JA 신규 문구 완료, 전체75.8%.'});
Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-review-video32'),{summary:'본편 구매/신고/삭제 및 보충 영상 Apple 로그인·첫 프로필·1:53 차단 계정 목록 확인. App Store 심사 빌드32 연결,7개 메모와 본편 첨부·iPad 마을/집 스크린샷 업로드 완료. 보충 영상 회신 준비·최종 재제출 미완료.'});

Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-review-video32'),{completed:true,summary:'2026-09-09 23:27 KST 재심사 완료: iOS1.0.269(32)+인앱구입3개 모두 심사 대기 중 UI 확인. Apple7개 요청 Notes/회신에 작성, 본편/보충 영상2개 심사팀 첨부, 실제iPad 마을/집 스크린샷 추가. 승인 후 자동 출시. 32 이후 차단·퇴장 선택 UI는 이번 제출 미포함.'});
window.SEORAP_DATA.updates.unshift({version:'iOS 1.0.269 (32) · Apple 재심사 접수',date:'2026-09-09',items:['23:27 앱과 인앱구입3개 모두 심사 대기 중 확인','실제iPad 본편/로그인·차단 보충 영상과 7개 요청 답변 전송','iPad 마을·집 스크린샷 및 비공개 심사 연락처 저장','승인 후 자동 출시 설정 유지·현재 승인 대기']});

window.SEORAP_DATA.tasks.push({"id": "dv-log-settings-audit305", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "dev305-log1 · 시키기 설정 연결·관계 반응·스와이프 개선", "summary": "개발 코드 f38884a / c2b1926 반영. 시선 16항목 방향별 해석, 성가시지 않음 오해석 및 공식 부부가 명시적 무관심을 덮는 문제 수정. 생활 시키기의 성격·머리 길이 연결, 설정 변경 후 미래 장면 갱신. 갈등 없는 관계의 싸움 후보 제외·최근 갈등 180분 간격·라이벌 이름만으로 싸움 반복 방지. 홈 스와이프 중복 계산·불필요한 갱신 절감. 20/80명 터치·관계/로그·3개 언어 검사 및 웹/Android/iOS 자산 준비 확인. 실제 휴대폰 사용자 저장 데이터 QA와 APK/AAB/IPA 배포는 미실시. Android code305/1.0.272 유지, Apple 심사 빌드32 미변경. 신규 EN/JA 문구 포함, 전체 UI 각75.8%. 모든 외형/취향별 새 장면 집필 완료를 뜻하지 않는 1차 개선."});

window.SEORAP_DATA.updates.unshift({"version": "dev305-log1 · 설정·관계 로그 개선 (미배포)", "code": 305, "date": "2026-09-10", "items": ["시키기에 캐릭터 설정이 전달되지 않던 생활 행동 경로 연결", "공식 관계와 각자의 시선을 구분하고, 성가시지 않다는 선택을 성가심으로 오해하지 않도록 수정", "갈등 성향만으로 매번 싸우는 장면이 선택되지 않도록 빈도·최근 갈등 간격 적용", "시키기 상세 문구를 한국어·영어·일본어로 보관해 언어 전환 시에도 반응 유지", "홈 캐릭터 스와이프 중복 계산과 불필요한 갱신 절감·20/80명 터치검사 통과", "dev c2b1926 반영. 운영 앱 main·Play·Apple 심사32 미변경. code305/1.0.272 유지"]});

window.SEORAP_DATA.copyTemplates.unshift({"id": "dev305-log-audit", "emoji": "📝", "title": "시키기·관계 로그 개선 안내 (배포 전)", "question": "로그가 캐릭터 설정과 다르거나 싸움이 반복돼요.", "replies": [{"label": "한국어", "code": "ko", "content": "시키기와 관계 로그의 설정 반영을 개선하고 있습니다. 공식 관계와 각자의 시선을 구분하고, 성가시지 않다는 설정이 반대로 해석되거나 같은 상대와 싸움 장면이 반복되는 원인을 수정했습니다. 홈 캐릭터 스와이프의 중복 계산도 줄였습니다.\n\n현재는 개발 코드에 반영된 상태이며, 사용 중인 앱에는 아직 배포되지 않았습니다. 배포 버전과 적용 시점이 정해지면 별도로 안내드리겠습니다."}]});

window.SEORAP_DATA.tasks.push({"id": "dv-character-single-slot305", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "dev305-slot1 · 캐릭터 1칸 1,000원 상품·사과 공지", "summary": "dev 0d2c6a7 반영. 신규 character_slot_1 1칸/1,000원, 기존 5개 팩 지급·복원·환불 유지. 개인/공유 합산 한도 연결, 옛 장바구니 자동 전환 없음. 양쪽 SKU 중복 지급·환불 및 웹/Android/iOS 자산 준비 검사 통과. 신규 스토어 상품 등록·실결제 검증·서버/앱 배포 대기. code305/1.0.272 유지, Apple 심사32 미변경. EN/JA 상품 문구 완료, 전체 각75.8%. 사과문 복붙 메뉴 저장·미게시."});
window.SEORAP_DATA.updates.unshift({"version": "dev305-slot1 · 캐릭터 슬롯 단품 판매 준비 (미배포)", "code": 305, "date": "2026-09-10", "items": ["신규 상품을 캐릭터 슬롯 1개 1,000원으로 변경", "기존 5개 상품 구매분 보존 및 새 단품과 합산", "가격 인상 사과문을 복붙 메뉴에 저장·적용일 미정", "dev 0d2c6a7, 실제 스토어 등록·배포 대기, EN/JA 신규 문구 완료"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "character-slot-price-apology305", "emoji": "📢", "title": "캐릭터 슬롯 가격 인상 사과문 (적용일 미정)", "question": "캐릭터 슬롯 가격이 변경되나요?", "replies": [{"label": "한국어", "code": "ko", "content": "서랍마을 캐릭터 슬롯 가격 변경 안내 및 사과 말씀\n\n안녕하세요. 서랍마을 개발자입니다.\n\n캐릭터 슬롯의 판매 구성과 가격을 변경할 예정입니다.\n\n• 기존: 캐릭터 슬롯 5개에 1,200원\n• 변경 예정: 캐릭터 슬롯 1개에 1,000원\n\n슬롯 1개 기준으로는 240원에서 1,000원으로 오르는 가격 인상입니다. 기존 가격을 보고 이용을 계획하셨던 분들께 부담과 혼란을 드리게 되어 죄송합니다. 처음 상품 구성과 가격을 정할 때 더 신중하게 검토했어야 했습니다.\n\n기존에 구매하신 슬롯은 그대로 유지됩니다. 5개 상품으로 구매하신 슬롯을 1개로 줄이거나, 가격 변경을 이유로 추가 금액을 요구하지 않습니다.\n\n변경 적용일은 아직 확정되지 않았으며, 실제 적용 전에 별도 공지로 안내드리겠습니다.\n\n서랍마을을 이용해 주시는 분들께 가격 변경 소식을 전하게 되어 다시 한번 죄송합니다. 변경 내용을 정확히 안내하고, 이용에 혼란이 없도록 준비하겠습니다."}]});

Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-character-single-slot305'),{summary:'dev 0d2c6a7에 1개/1,000원 직접 구매 코드까지 반영했으나, 이후 사용자 요청으로 다이아 결제 방식 검토 중. 직접 구매안은 미배포. 기존 5개 구매분 보존. 9월14일 적용 사과문은 발송 보류. 등록 계정489개 읽기 확인만 완료, 게임 우편0건·푸시0건. 운영 공지를 발송할 경우 푸시 없이 우편함에만 저장하도록 준비.'});
window.SEORAP_DATA.tasks.push({id:'dv-diamond-shop-design',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'다이아 충전·상품 구매 방식 설계',summary:'현금 충전→계정 다이아 잔액→슬롯/스킨 구매 방식 요청. 기존 코드에 재화 잔액 없음. 충전 전용 또는 플레이 보상 병행 여부와 충전량·상품별 다이아 가격 결정 필요. 기존 슬롯 보존, 유료 잔액 만료 없음, 서버 잔액·거래 기록 필요. dev 작업, 출시일 미정. 기존 가격 공지 발송 보류.'});
window.SEORAP_DATA.updates.unshift({version:'dev305 · 다이아 결제 검토·가격 공지 보류',code:305,date:'2026-09-10',items:['캐릭터 슬롯 직접 결제에서 다이아 충전·구매 방식으로 변경 검토','전체 계정489개 확인만 완료·가격 공지 우편 및 푸시 미발송','운영 공지는 푸시 없이 발송하도록 준비·현재 발송 차단','기존 구매 슬롯 유지·충전/상품 가격 및 일정 결정 대기']});
Object.assign(window.SEORAP_DATA.copyTemplates.find(t=>t.id==='character-slot-price-apology305'),{"title": "가격 인상 사과문 — 다이아 검토로 발송 보류", "question": "현재 가격 공지를 보내도 되나요? (보류 중)", "replies": [{"label": "한국어", "code": "ko", "content": "[발송 보류 / ON HOLD / 送信保留]\n[9월 14일 적용] 캐릭터 슬롯 가격 변경 안내 및 사과 말씀\n\n안녕하세요. 서랍마을 개발자입니다.\n\n다음 주 월요일인 2026년 9월 14일부터 캐릭터 슬롯의 판매 구성과 가격이 변경됩니다.\n\n• 기존: 캐릭터 슬롯 5개에 1,200원\n• 변경: 캐릭터 슬롯 1개에 1,000원\n\n슬롯 1개 기준으로는 240원에서 1,000원으로 오르는 가격 인상입니다.\n\n운영을 이어가는 과정에서 예상보다 많은 서버 비용이 발생하고 있습니다. 서랍마을을 장기적으로 운영하기 위해 고민한 끝에 가격을 변경하기로 결정했습니다.\n\n처음 상품 구성과 가격을 정할 때 운영 비용을 더 신중하게 검토했어야 했습니다. 기존 가격을 보고 이용을 계획하셨던 분들께 부담과 혼란을 드리게 되어 죄송합니다.\n\n기존에 구매하신 슬롯은 그대로 유지됩니다. 5개 상품으로 구매하신 슬롯을 1개로 줄이거나, 가격 변경을 이유로 추가 금액을 요구하지 않습니다.\n\n서랍마을을 이용해 주시는 분들께 가격 인상 소식을 전하게 되어 다시 한번 죄송합니다. 오래 함께할 수 있는 게임으로 운영해 나가겠습니다."}, {"label": "English", "code": "en", "content": "[발송 보류 / ON HOLD / 送信保留]\n[September 14] Character slot price change and apology\n\nHello, this is the developer of Drawer Village.\n\nStarting next Monday, September 14, 2026, the character slot package and its price will change.\n\n• Previously: 5 character slots for KRW 1,200\n• New offer: 1 character slot for KRW 1,000\n\nThis is a price increase from KRW 240 to KRW 1,000 per slot. These are the Korean prices; other regions display their local store prices.\n\nServer costs have been higher than expected. After careful consideration, I decided to change the price to support the long-term operation of Drawer Village.\n\nI should have evaluated operating costs more carefully when setting the original package and price. I am sorry for the added burden and confusion this causes, especially for those who planned their purchases around the previous price.\n\nSlots you have already purchased will remain yours. A previously purchased five-slot package will not be reduced to one slot, and you will not be charged an additional amount because of this price change.\n\nI am sorry to bring you news of a price increase. I will keep working to make Drawer Village a game we can enjoy together for a long time."}, {"label": "日本語", "code": "ja", "content": "[발송 보류 / ON HOLD / 送信保留]\n【9月14日適用】キャラクタースロット価格変更のお知らせとお詫び\n\nこんにちは。ひきだし村の開発者です。\n\n来週月曜日の2026年9月14日より、キャラクタースロットの販売内容と価格を変更します。\n\n• 変更前：キャラクタースロット5枠で1,200ウォン\n• 変更後：キャラクタースロット1枠で1,000ウォン\n\n1枠あたり240ウォンから1,000ウォンへの値上げとなります。上記は韓国での価格です。他の地域では各ストアの現地価格が表示されます。\n\n運営を続ける中で、想定を上回るサーバー費用が発生しています。ひきだし村を長期的に運営していくため、検討を重ねた末に価格変更を決めました。\n\n最初に商品内容と価格を決める際、運営費用をもっと慎重に検討すべきでした。これまでの価格をもとにご利用を計画されていた皆さまに、ご負担と混乱をおかけして申し訳ありません。\n\nすでに購入されたスロットはそのまま維持されます。購入済みの5枠を1枠に減らしたり、今回の価格変更を理由に追加料金を請求したりすることはありません。\n\nひきだし村をご利用くださる皆さまに値上げをお知らせすることになり、重ねてお詫び申し上げます。長く一緒に楽しめるゲームを目指して運営を続けてまいります。"}]});

Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-diamond-shop-design'),{completed:true,title:'dev305-diamonds1 · 다이아 상점·보상 광고·상점 배너 개발',summary:'dev 7548010 반영. 100다이아/1,000원, 캐릭터1칸100·마을1칸190·사진50MB290. 유료/보너스 분리·보너스 우선 차감·기존 슬롯 보존. 방문1/일, 선택형 광고3/회·3회/일, 기간/대상 이벤트. 서버 서명 검증·중복/동시 구매·환불·조기 광고 종료 처리. 배너는 상점 하단만 표시하고 이탈 시 제거. Android SDK 컴파일, KO/EN/JA 360/1180 UI, 웹/Android/iOS 자산 검사 통과. 실제 결제·광고 활성화/배포 및 iOS 네이티브 실기기 QA는 별도 대기. EN76.1%, JA76.0%.'});
window.SEORAP_DATA.tasks.push({id:'dv-diamond-ads-activation',project:'서랍마을',section:'release',subsection:'testing',completed:false,title:'다이아·광고 운영 연결과 실제 기기 검증',summary:'AdMob 계정 아직 없음. Android/iOS 앱 및 배너/보상형 광고 단위 등록, 개인정보 메시지·정책/스토어 광고 표시 준비. diamonds_100 소모성 상품 등록. Wallet/결제/환불 서버와 Webhook 연결 후 운영 설정 활성화, 실제 테스트 구매·광고·환불 검증 및 새 빌드 배포 필요. 현재 새로운 광고/다이아 결제 미활성화, code305/1.0.272 유지. 가격 공지·전체 계정 우편·푸시 모두 보류(발송0건).'});
window.SEORAP_DATA.updates.unshift({version:'dev305-diamonds1 · 다이아 상점·선택형 광고 (미배포)',code:305,date:'2026-09-10',items:['현금 충전과 방문·이벤트·광고 보상을 함께 사용하는 다이아 상점 준비','기존 구매 슬롯 보존·다이아 구매 차감과 지급을 함께 처리','선택형 보상 광고·상점 하단 작은 배너·홈에서는 제거','중복 지급·동시 구매·환불·광고 조기 종료 검사 및 Android 네이티브 컴파일 통과','dev 7548010 반영. AdMob 계정/광고 단위 및 새 스토어 상품 등록·실기기 검증·배포 대기','신규 KO/EN/JA 문구 포함, 전체 UI EN76.1%·JA76.0%. 기존 가격 우편/푸시0건·보류 유지']});
window.SEORAP_DATA.copyTemplates.unshift({"id": "diamond-shop-ads-preview305", "emoji": "💎", "title": "다이아 상점·광고 도입 안내 (미배포)", "question": "다이아와 광고가 추가되나요?", "replies": [{"label": "한국어", "code": "ko", "content": "다이아를 충전하거나 방문·이벤트·선택형 광고 보상으로 모아 슬롯을 구매하는 상점을 준비하고 있습니다. 기존에 구매하신 슬롯은 그대로 유지됩니다.\n\n보상 광고는 원할 때 직접 눌러 시청하는 방식이며, 작은 배너는 상점에만 표시할 예정입니다. 아직 사용 중인 앱에는 적용되지 않았습니다. 가격과 보상 기준, 적용 일정은 실제 배포 전에 다시 안내드리겠습니다."}, {"label": "English", "code": "en", "content": "We are preparing a diamond shop where you can buy diamonds or earn them through visits, events and optional rewarded ads, then spend them on slots. Previously purchased slots will be preserved.\n\nRewarded ads will open only when you choose. A small banner is planned for the shop only. These changes are not live yet. We will announce prices, rewards and the rollout schedule before release."}, {"label": "日本語", "code": "ja", "content": "ダイヤをチャージしたり、訪問・イベント・任意の広告視聴で集めたりして、スロットを購入できるショップを準備しています。購入済みのスロットはそのまま維持されます。\n\n報酬広告は自分で選んだ場合だけ表示され、小さなバナーはショップ内だけに表示する予定です。現在のアプリにはまだ適用されていません。価格・報酬・適用日はリリース前に改めてお知らせします。"}]});

window.SEORAP_DATA.tasks.push({"id": "dv-home-wallet306", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "dev306 · 홈 재화 표시·작은 우측 메뉴·APK 전달", "summary": "dev 7a2402e. 시간 아래 직업과 같은 3슬라이스 골드·다이아 표시. 우측 일정·통계·설정 28px 아이콘/58×56px 터치 영역. 다이아 클릭 상점 이동, 홈 재렌더 추가 조회 없음, 로그아웃 잔액 제거. 골드는 잔액 기능 미구현으로 — 표시. Android306/1.0.273 서명 APK 생성·v1/v2 서명 및 패키지/내장 자산 확인. 휴대폰360/태블릿1180 모의 UI·3언어 검사 통과. 실제 기기·과금 테스트 미완료, Play/서버 배포 없음. EN76.1%·JA76.0%."});

window.SEORAP_DATA.updates.unshift({"version": "dev306 · 홈 재화·메뉴 축소 (APK 전달)", "code": 306, "date": "2026-09-10", "items": ["시간 아래 골드·다이아를 직업과 같은 3슬라이스로 표시, 다이아는 상점 연결", "우측 일정·통계·설정 아이콘 축소, 누르는 영역 유지", "골드 기능 준비 중·다이아 미확인 잔액은 — 표시", "1.0.273/code306 서명 APK 생성 및 휴대폰·태블릿 UI 검사 완료", "dev 7a2402e 반영. 새 상품/서버 연결 및 실제 과금 검증 대기. Play/서버 배포·공지 우편·푸시 없음", "EN76.1%, JA76.0%; 이번 신규 문구 모두 번역"]});

window.SEORAP_DATA.copyTemplates.unshift({"id": "home-wallet-dev306", "emoji": "📱", "title": "dev306 설치 확인용 안내", "question": "이번 앱에서는 무엇을 확인하나요?", "replies": [{"label": "한국어", "code": "ko", "content": "홈 시간 아래 골드·다이아 표시와 작아진 일정·통계·설정 메뉴를 확인할 수 있습니다. 다이아 표시를 누르면 상점으로 이동합니다. 골드 기능은 준비 중이며, 다이아 상품·서버 연결 전이라 실제 충전 테스트는 아직 지원하지 않습니다. 이번 파일은 1.0.273(306) 설치 확인용 APK입니다."}, {"label": "English", "code": "en", "content": "This APK previews the gold and diamond display below the home clock and smaller Schedule, Stats and Settings icons. Tap diamonds to open the shop. Gold is coming soon; actual diamond top-ups await store and server setup. Preview version: 1.0.273 (306)."}, {"label": "日本語", "code": "ja", "content": "ホームの時計下にゴールド・ダイヤを表示し、予定・統計・設定のアイコンを小さくしました。ダイヤを押すとショップが開きます。ゴールドは準備中で、実際のダイヤ購入は商品・サーバーの設定待ちです。確認用APKは1.0.273（306）です。"}]});

Object.assign(window.SEORAP_DATA.tasks.find(t=>t.id==='dv-diamond-ads-activation'),{completed:true,title:'다이아·보상 광고 도입 취소 (직접 구매로 변경)',summary:'2026-09-10 사용자 결정으로 다이아 방식 취소. 미활성화 상태 유지. 캐릭터 슬롯1개/1,000원 직접 구매로 복원. 광고 보상·배너 실서비스 연결은 진행하지 않음.'});
window.SEORAP_DATA.tasks.push({"id": "dv-direct-slot307", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "dev307 · 캐릭터 슬롯 1개/1,000원 직접 구매 복원", "summary": "dev a8f295a 반영. 다이아 상점·홈 재화 표시·잔액 조회 연결 제거. 기존 5슬롯 구매분 보존·작은 우측 메뉴 유지. 새 다이아 웹 주문 차단. Android307/1.0.274 서명 APK 전달, 360/1180 KO/EN/JA UI 및 슬롯/Apple/네이티브 결제 검사 통과. 실제 스토어 구매·서버 배포 미검증/미실행. EN76.1%, JA76.0%. 공지 우편·푸시0건."});
window.SEORAP_DATA.updates.unshift({"version": "dev307 · 1슬롯/1,000원 직접 구매 (APK 전달)", "code": 307, "date": "2026-09-10", "items": ["다이아 도입 취소, 캐릭터 슬롯1개를1,000원에 직접 구매", "다이아 상점·홈 골드/다이아 표시 제거, 작은 우측 메뉴 유지", "기존에 구매한 5슬롯 상품 슬롯 보존", "1.0.274(307) APK 빌드·서명 및 3개 언어 화면/지급 검사 통과", "dev a8f295a. 앱 main·Play·서버 배포 없음. 실제 구매 성공은 별도 검증 필요", "영어76.1%·일본어76.0%, 공지·우편·푸시 발송 없음"]});
for(const id of ['diamond-shop-ads-preview305','home-wallet-dev306']){const t=window.SEORAP_DATA.copyTemplates.find(t=>t.id===id);if(t)t.title='[사용 중단 · 직접 구매로 변경] '+t.title;}
window.SEORAP_DATA.copyTemplates.unshift({"id": "direct-slot307", "emoji": "🛒", "title": "캐릭터 슬롯 직접 구매 안내 (배포 전)", "question": "다이아를 충전해야 하나요?", "replies": [{"label": "한국어", "code": "ko", "content": "다이아 충전 방식은 도입하지 않고 캐릭터 슬롯 1개를 1,000원에 직접 구매하는 방식으로 준비하고 있습니다. 기존에 구매한 슬롯은 유지됩니다. 실제 적용 일정은 확정 후 안내하겠습니다."}, {"label": "English", "code": "en", "content": "We are preparing direct purchases of one character slot for KRW 1,000 instead of introducing diamonds. Existing purchased slots will be preserved. We will announce the rollout date once confirmed."}, {"label": "日本語", "code": "ja", "content": "ダイヤは導入せず、キャラクター枠1人分を1,000ウォンで直接購入する方式を準備しています。購入済みの枠は維持されます。適用日は確定後にお知らせします。"}]});

window.SEORAP_DATA.tasks.push({"id": "dv-release308-feedback", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "308/1.0.275 · 시선 제보·집 삭제·구성원 빼기·가격 전환 AAB", "summary": "dev 601e8be. 9/14 0시KST 전 5슬롯1200/이후1슬롯1000, 서버 신규주문 시각 검증. 공통 긴장 문장이 상대 감정으로 복제되던 시선 경로 수정(640장면3언어), 집 정보 삭제·구성원 카드 이 집에서 빼기, 다른 집/캐릭터 보존·침대배정 해제. 휴대폰360/태블릿1180 클릭·취소/확인 검사. AAB 빌드/서명/내장소스 확인. 결제api·sharedTownApi 운영 배포 완료. 앱 main 유지, Play 업로드 미실행. EN76.1%, JA76.0%."});

window.SEORAP_DATA.tasks.push({"id": "dv-price-notice-sent491", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "9/14 가격 변경 사과·공지 우편 491계정 발송 완료", "summary": "2026-09-10 사용자 재승인으로 전체491계정 인게임 우편 발송·읽기 검증. KO486/EN2/JA3. 예상 초과 서버비·장기 운영 이유, 9/14 0시KST 1슬롯1000원, 기존 슬롯 보존 명시. 푸시 대기열0건. dispatch slot-price-20260914-v1, 동일내용 중복발송 방지."});

window.SEORAP_DATA.tasks.push({"id": "dv-play308-publish", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "Play 308 AAB 업로드·새 슬롯 상품·9/14 구상품 판매 종료", "summary": "사용자 확인 현재Play305/1.0.272. 앱 전달/dev308/drawer-village-1.0.275-308.aab 준비. Play 상품 API권한403: character_slot_1 소모성/한국1000원 등록활성화 확인 필요. character_slots_5는9/14 0시KST에 신규판매 중단 필요(기존구매 보존). 앱 게시와 상품변경 별개, 관리형게시도 인앱상품/가격을 보류하지 않음. 스토어 예약/업로드 완료 아님. 9/14 00:05KST 1회 상태확인 자동화9-14 생성."});
window.SEORAP_DATA.updates.unshift({"version": "308 / 1.0.275 · 가격 공지 발송·집 관리·시선 수정", "code": 308, "date": "2026-09-10", "items": ["사과·가격 공지491계정 인게임 우편 발송/조회 검증 완료, 푸시0건", "9/14 0시KST 1슬롯1000원 전환 조건, 기존5슬롯 구매 보존", "한쪽의 성가심·불편함을 다른 캐릭터에게 붙이던 로그 경로 수정", "집 정보에서 집 삭제, 구성원 카드에 이 집에서 빼기 추가", "640장면/3언어 및 휴대폰·태블릿 동작 검사, AAB 빌드/서명/최신소스 일치 확인", "dev601e8be. 결제api·공유시뮬레이션 서버 반영. 앱main유지·Play업로드 및 상품설정은 사용자 작업 대기", "영어76.1%·일본어76.0%, 305이후 누적 Discord 패치노트 KO/EN/JA 준비"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "slot-price-notice-sent308", "emoji": "✉️", "title": "발송 완료 · 9/14 캐릭터 슬롯 가격 변경 사과문", "question": "캐릭터 슬롯 가격은 왜 바뀌나요?", "replies": [{"label": "한국어", "code": "ko", "content": "안녕하세요. 서랍마을 개발자입니다.\n\n다음 주 월요일인 2026년 9월 14일 0시(한국 시간)부터 캐릭터 슬롯의 판매 구성과 가격이 변경됩니다.\n\n• 기존: 캐릭터 슬롯 5개에 1,200원\n• 변경: 캐릭터 슬롯 1개에 1,000원\n\n슬롯 1개 기준으로는 240원에서 1,000원으로 오르는 가격 인상입니다.\n\n운영을 이어가는 과정에서 예상보다 많은 서버 비용이 발생하고 있습니다. 서랍마을을 장기적으로 운영하기 위해 고민한 끝에 가격을 변경하기로 결정했습니다.\n\n처음 상품 구성과 가격을 정할 때 운영 비용을 더 신중하게 검토했어야 했습니다. 기존 가격을 보고 이용을 계획하셨던 분들께 부담과 혼란을 드리게 되어 죄송합니다.\n\n기존에 구매하신 슬롯은 그대로 유지됩니다. 5개 상품으로 구매하신 슬롯을 1개로 줄이거나, 가격 변경을 이유로 추가 금액을 요구하지 않습니다.\n\n서랍마을을 이용해 주시는 분들께 가격 인상 소식을 전하게 되어 다시 한번 죄송합니다. 오래 함께할 수 있는 게임으로 운영해 나가겠습니다."}, {"label": "English", "code": "en", "content": "Hello, this is the developer of Drawer Village.\n\nStarting next Monday, September 14, 2026 at 00:00 (Korea Standard Time), the character slot package and its price will change.\n\n• Previously: 5 character slots for KRW 1,200\n• New offer: 1 character slot for KRW 1,000\n\nThis is a price increase from KRW 240 to KRW 1,000 per slot. These are the Korean prices; other regions display their local store prices.\n\nServer costs have been higher than expected. After careful consideration, I decided to change the price to support the long-term operation of Drawer Village.\n\nI should have evaluated operating costs more carefully when setting the original package and price. I am sorry for the added burden and confusion this causes, especially for those who planned their purchases around the previous price.\n\nSlots you have already purchased will remain yours. A previously purchased five-slot package will not be reduced to one slot, and you will not be charged an additional amount because of this price change.\n\nI am sorry to bring you news of a price increase. I will keep working to make Drawer Village a game we can enjoy together for a long time."}, {"label": "日本語", "code": "ja", "content": "こんにちは。ひきだし村の開発者です。\n\n来週月曜日の2026年9月14日0時（韓国時間）より、キャラクタースロットの販売内容と価格を変更します。\n\n• 変更前：キャラクタースロット5枠で1,200ウォン\n• 変更後：キャラクタースロット1枠で1,000ウォン\n\n1枠あたり240ウォンから1,000ウォンへの値上げとなります。上記は韓国での価格です。他の地域では各ストアの現地価格が表示されます。\n\n運営を続ける中で、想定を上回るサーバー費用が発生しています。ひきだし村を長期的に運営していくため、検討を重ねた末に価格変更を決めました。\n\n最初に商品内容と価格を決める際、運営費用をもっと慎重に検討すべきでした。これまでの価格をもとにご利用を計画されていた皆さまに、ご負担と混乱をおかけして申し訳ありません。\n\nすでに購入されたスロットはそのまま維持されます。購入済みの5枠を1枠に減らしたり、今回の価格変更を理由に追加料金を請求したりすることはありません。\n\nひきだし村をご利用くださる皆さまに値上げをお知らせすることになり、重ねてお詫び申し上げます。長く一緒に楽しめるゲームを目指して運営を続けてまいります。"}]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release308-discord", "emoji": "📋", "title": "308 Discord 패치노트 · 305 이후 누적", "question": "이번 업데이트에서 무엇이 바뀌나요?", "replies": [{"label": "한국어", "code": "ko", "content": "서랍마을 1.0.275 (308) 업데이트\n\n이번 업데이트에서 변경된 주요 내용을 안내드립니다.\n\n🔧 개선 사항\n• 캐릭터의 성격·감정과 상대를 바라보는 시선이 생활 장면과 시키기에 더 세밀하게 반영되도록 개선했습니다.\n• 반복적인 갈등 장면을 줄이고, 홈에서 캐릭터를 넘길 때의 지연을 개선했습니다.\n• 집의 구성원 카드에 ‘이 집에서 빼기’를 추가했습니다. 캐릭터와 다른 집 연결은 유지됩니다.\n• 집 정보 화면에서도 집을 삭제할 수 있습니다. 삭제 전 함께 지워지는 내용을 안내합니다.\n• 멀티 관리자가 구성원을 차단하면서 내보낼 수 있도록 개선했습니다.\n\n🎨 UI/UX\n• 홈 오른쪽의 일정·통계·설정 아이콘을 작게 정리했습니다.\n\n🐛 오류 수정\n• 한쪽 캐릭터의 불편함·성가심을 다른 캐릭터의 감정으로 표현하던 일부 장면을 수정했습니다.\n• 성가심·질투가 없도록 설정했는데 상대를 성가셔하며 붙잡는 문장이 나오던 경로를 수정했습니다.\n• 집을 삭제할 때 관계없는 캐릭터의 생활 상태까지 초기화하던 문제를 수정했습니다.\n\n🛒 상품 변경 안내\n• 9월 14일 0시(한국 시간)부터 캐릭터 슬롯을 1개·1,000원에 직접 구매하는 방식으로 변경합니다.\n• 그전까지는 기존 5개·1,200원 구성을 유지합니다. 기존에 구매한 슬롯은 그대로 유지됩니다.\n• 운영 비용을 충분히 예상하지 못해 가격 변경으로 부담을 드리게 되어 죄송합니다. 자세한 안내는 인게임 우편에서 확인해 주세요.\n"}, {"label": "English", "code": "en", "content": "Drawer Village 1.0.275 (308)\n\nImprovements\n• More detailed character settings and directional feelings in life scenes and commands, with fewer repetitive conflicts and smoother home swiping.\n• Remove a resident from the home directly in Members, preserving the character and other homes.\n• Delete a home from Home info, with confirmation of what will be removed.\n• Group managers can block and remove members together.\n• Smaller Schedule, Stats and Settings icons on the home screen.\n\nFixes\n• Prevented one character’s discomfort or annoyance from being assigned to the other character.\n• Fixed a scene that implied annoyance and possessiveness despite contrary settings.\n• Deleting a home no longer resets unrelated characters’ life state.\n\nPurchases\n• From September 14 at 00:00 KST, one character slot costs KRW 1,000. Until then, the five-slot offer remains KRW 1,200.\n• Previously purchased slots are preserved. We apologize for the price increase caused by underestimated operating costs. Please read the in-game mail for details.\n"}, {"label": "日本語", "code": "ja", "content": "ひきだし村 1.0.275（308）アップデート\n\n改善\n• 性格や相手への感情を生活シーン・指示により細かく反映し、同じような衝突の繰り返しとホームのスワイプ時の遅延を改善しました。\n• メンバー画面から「この家から外す」を追加しました。人物とほかの家への接続は維持されます。\n• 家情報から家を削除でき、削除される内容を事前に確認できます。\n• マルチの管理者がメンバーをブロックして退出させられるようにしました。\n• ホームの予定・統計・設定アイコンを小さくしました。\n\n不具合修正\n• 片方の不快感や煩わしさが、もう片方の感情として描写される問題を修正しました。\n• 煩わしさや嫉妬がない設定でも、相手を煩わしがりながら引き留めるシーンを修正しました。\n• 家の削除で無関係な人物の生活状態まで初期化される問題を修正しました。\n\n商品変更\n• 9月14日0時（韓国時間）から、キャラクター枠1人分を1,000ウォンで直接購入する方式に変更します。それまでは5枠1,200ウォンを維持します。\n• 購入済みの枠は維持されます。運営費用の見積もり不足による値上げをお詫び申し上げます。詳細はゲーム内郵便をご覧ください。\n"}]});

// 309: settings scroll regression, interaction work and silent supporter notice.
window.SEORAP_DATA.tasks.push({"id": "dv-release309-scroll", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "309 / 1.0.276 · 설정 스크롤 회귀·화면 반응 개선", "summary": "308 코드 사용됨 확인 후309 AAB 준비. 설정 패널 스크롤 복원, 화면 모드/애니메이션 DOM 유지, 드롭다운 중복 저장 절감, 홈 스와이프 공통 작업 절감, 마을 재진입 좌표 유지. 308에서350→0 재현/309에서350 유지. 브라우저 CPU4배 지연·3언어·집 관리/시선640장면 회귀 검사. 실기기 전체 렉 해소는 미확인. dev 3e37542 반영, 앱 main 유지. EN76.1%, JA76.0%."});
window.SEORAP_DATA.tasks.push({"id": "dv-supporter-mail495", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "후원자 이름 등록 안내 · 495계정 무푸시 우편 완료", "summary": "응원 선물 구매 후 설정→후원자 이름 편집→신청 복사/파일→제작자 전달→확인 후 반영 안내. 자동 공개 아님/익명·비공개 선택/기존 구매자 포함. KO490/EN2/JA3,495건 발송 및 우편함 조회 검증, 푸시0."});
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{"title": "Play309 AAB 업로드·9/14 구상품 판매 종료", "summary": "308은 이미 사용된 코드라는 사용자 확인에 따라309/1.0.276 전달. 신규 SKU character_slot_1 구매 옵션 standard로 사용자 입력. 한국1000원/활성화 실제 확인은 Play Console 필요. 앱 전달/dev309 AAB 업로드·게시 대기. 기존5슬롯상품9/14 00KST 신규판매중단은 별도 확인. 기존9-14 자동화는 후속 점검이며 Play 작업 완료 아님."});
window.SEORAP_DATA.updates.unshift({"version": "309 / 1.0.276 · 설정 스크롤·화면 반응·후원자 안내", "code": 309, "date": "2026-09-10", "items": ["설정 선택 후 맨 위로 올라가는 회귀 수정", "화면 모드·애니메이션 전체 재렌더 제거, 선택 시 중복 저장과 홈 스와이프 작업 절감", "마을 재진입 시 지도 위치 유지·첫 진입 긴 이동 생략", "후원자 이름 등록 안내495계정 발송/조회 확인, 푸시0", "AAB 빌드·서명·포함 소스 검증, 관계/집 관리/네비게이션 회귀 검사", "dev 3e37542 반영·운영 main 유지, Play업로드 대기·실기기 렉 추가 확인 필요", "영어76.1%·일본어76.0%, 누적 출시노트3언어 준비"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release309-discord", "project": "서랍마을", "title": "309 Discord 업데이트 공지 · 누적", "languages": [{"label": "한국어", "code": "ko", "content": "서랍마을 1.0.276 (309) 업데이트\n\n이번 업데이트에서 변경된 주요 내용을 안내드립니다.\n\n🔧 개선 사항\n• 캐릭터의 성격·감정과 상대를 바라보는 시선이 생활 장면과 시키기에 더 세밀하게 반영되도록 개선했습니다.\n• 반복적인 갈등 장면을 줄이고, 홈에서 캐릭터를 넘길 때의 지연을 개선했습니다.\n• 집의 구성원 카드에 ‘이 집에서 빼기’를 추가했습니다. 캐릭터와 다른 집 연결은 유지됩니다.\n• 집 정보 화면에서도 집을 삭제할 수 있습니다. 삭제 전 함께 지워지는 내용을 안내합니다.\n• 멀티 관리자가 구성원을 차단하면서 내보낼 수 있도록 개선했습니다.\n\n🎨 UI/UX\n• 홈 오른쪽의 일정·통계·설정 아이콘을 작게 정리했습니다.\n\n🐛 오류 수정\n• 한쪽 캐릭터의 불편함·성가심을 다른 캐릭터의 감정으로 표현하던 일부 장면을 수정했습니다.\n• 성가심·질투가 없도록 설정했는데 상대를 성가셔하며 붙잡는 문장이 나오던 경로를 수정했습니다.\n• 집을 삭제할 때 관계없는 캐릭터의 생활 상태까지 초기화하던 문제를 수정했습니다.\n\n🛒 상품 변경 안내\n• 9월 14일 0시(한국 시간)부터 캐릭터 슬롯을 1개·1,000원에 직접 구매하는 방식으로 변경합니다.\n• 그전까지는 기존 5개·1,200원 구성을 유지합니다. 기존에 구매한 슬롯은 그대로 유지됩니다.\n• 운영 비용을 충분히 예상하지 못해 가격 변경으로 부담을 드리게 되어 죄송합니다. 자세한 안내는 인게임 우편에서 확인해 주세요.\n\n🔧 이번 빌드의 추가 개선\n• 설정을 선택할 때 화면이 맨 위로 올라가던 문제를 수정했습니다.\n• 화면 모드와 애니메이션을 바꿀 때 화면 전체를 새로 불러오지 않도록 개선했습니다.\n• 캐릭터 설정 선택과 홈 스와이프 중 반복 작업을 줄였습니다.\n• 마을에 다시 들어왔을 때 보고 있던 지도 위치를 유지합니다.\n• 응원 선물 구매 후 후원자 이름을 신청하는 방법을 인게임 우편으로 안내했습니다.\n"}, {"label": "English", "code": "en", "content": "Drawer Village 1.0.276 (309)\n\nImprovements\n• More detailed character settings and directional feelings in life scenes and commands, with fewer repetitive conflicts and smoother home swiping.\n• Remove a resident from the home directly in Members, preserving the character and other homes.\n• Delete a home from Home info, with confirmation of what will be removed.\n• Group managers can block and remove members together.\n• Smaller Schedule, Stats and Settings icons on the home screen.\n\nFixes\n• Prevented one character’s discomfort or annoyance from being assigned to the other character.\n• Fixed a scene that implied annoyance and possessiveness despite contrary settings.\n• Deleting a home no longer resets unrelated characters’ life state.\n\nPurchases\n• From September 14 at 00:00 KST, one character slot costs KRW 1,000. Until then, the five-slot offer remains KRW 1,200.\n• Previously purchased slots are preserved. We apologize for the price increase caused by underestimated operating costs. Please read the in-game mail for details.\n\nAdditional improvements in this build\n• Fixed settings jumping to the top after a selection.\n• Display mode and animation settings now apply without rebuilding the whole screen.\n• Reduced repeated work during character setting changes and home swipes.\n• The town map keeps your viewing position when you return.\n• Sent an in-game guide to requesting a supporter name after purchasing a Support Gift.\n"}, {"label": "日本語", "code": "ja", "content": "ひきだし村 1.0.276（309）アップデート\n\n改善\n• 性格や相手への感情を生活シーン・指示により細かく反映し、同じような衝突の繰り返しとホームのスワイプ時の遅延を改善しました。\n• メンバー画面から「この家から外す」を追加しました。人物とほかの家への接続は維持されます。\n• 家情報から家を削除でき、削除される内容を事前に確認できます。\n• マルチの管理者がメンバーをブロックして退出させられるようにしました。\n• ホームの予定・統計・設定アイコンを小さくしました。\n\n不具合修正\n• 片方の不快感や煩わしさが、もう片方の感情として描写される問題を修正しました。\n• 煩わしさや嫉妬がない設定でも、相手を煩わしがりながら引き留めるシーンを修正しました。\n• 家の削除で無関係な人物の生活状態まで初期化される問題を修正しました。\n\n商品変更\n• 9月14日0時（韓国時間）から、キャラクター枠1人分を1,000ウォンで直接購入する方式に変更します。それまでは5枠1,200ウォンを維持します。\n• 購入済みの枠は維持されます。運営費用の見積もり不足による値上げをお詫び申し上げます。詳細はゲーム内郵便をご覧ください。\n\n今回のビルドでの追加改善\n• 設定を選ぶと画面の一番上に戻る不具合を修正しました。\n• 画面モードやアニメーション設定の変更時に画面全体を再表示しないよう改善しました。\n• キャラクター設定の選択やホームのスワイプで繰り返していた処理を減らしました。\n• 村に戻ったとき、地図の表示位置を維持します。\n• 応援ギフト購入後のお名前掲載の申請方法をゲーム内郵便でご案内しました。\n"}]});

// 310 user feedback and icon-only right menu.
window.SEORAP_DATA.tasks.push({"id": "dv-feedback310", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "310 / 1.0.277 · 후원자·우편·사진·첫 진입·우측바", "summary": "후원 횟수 정규화 누락 복원(기존 구매/환불0 보존), 저장 용량 부족에도 우편 먼저 표시, 집 정보 사진 버튼 및 건물 내부/집 사진 안내 영역 첨부 연결, 다크모드 선택 제거, 우측 이미지3개만 표시/위치 정리, 첫 계정 문서 중복 조회·멀티 대기 절감. 휴대폰/태블릿 파일선택·우편·후원자 UI 및 실제 계정전환 회귀 검사 통과. AAB310 준비, Play업로드 필요. EN76.1%/JA76.0%."});
window.SEORAP_DATA.tasks.push({"id": "dv-custom-furniture-exterior-hold", "project": "서랍마을", "section": "development", "completed": false, "title": "[보류] 가구 이미지·새 건물 외관 커스텀 확장", "summary": "사용자 지시로 판매/무료 제공 방향 결정 전 보류. 기존 집 일러스트·가족사진·방·건물 내부 이미지 기능만 접근성 개선. 새 커스텀 가구/외관 기능은 추가하지 않음."});
window.SEORAP_DATA.tasks.push({"id": "dv-image-delete-guidance310", "project": "서랍마을", "section": "release", "completed": true, "title": "이미지 전체 삭제 문의 처리 방법·답변 정리", "summary": "실제 파일 삭제 없음. 진단만으로 UID 식별 불가. 본인확인/이미지 범위/서버 manifest·파일·동기화 참조/로컬 재업로드까지 별도 처리 필요. 캐릭터·우편·구매 보존. 슬롯6개월 비소멸·후원자 답변 docs/release310-handoff.md 제공."});
window.SEORAP_DATA.updates.unshift({"version": "310 / 1.0.277 · 후원자 이름·우편·사진·우측바 개선", "code": 310, "date": "2026-09-10", "items": ["후원 구매 후 이름 편집 메뉴 누락 수정", "저장 용량 부족에도 우편 본문 먼저 열기", "집 사진 버튼 복원·집/건물 사진 안내 네모에서 첨부", "다크모드 정리·우측바 아이콘만 표시 및 위치 조정", "첫 계정 문서 중복 조회 제거·개인 마을 준비 후 멀티 이어서 조회", "슬롯6개월 뒤 소멸 아님 설명·가구/외관 새 커스텀 보류", "앱 dev16fd0d7 반영·운영 main 유지·310 AAB Play업로드 대기·실기기 첫 진입 시간 확인 필요", "EN76.1% JA76.0%, 누적 출시노트3언어"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release310-discord", "project": "서랍마을", "title": "310 Discord 누적 패치노트", "languages": [{"label": "한국어", "code": "ko", "content": "서랍마을 1.0.277 (310) 업데이트\n\n이번 업데이트에서 변경된 주요 내용을 안내드립니다.\n\n🔧 개선 사항\n• 캐릭터의 성격·감정과 상대를 바라보는 시선이 생활 장면과 시키기에 더 세밀하게 반영되도록 개선했습니다.\n• 반복적인 갈등 장면을 줄이고, 홈에서 캐릭터를 넘길 때의 지연을 개선했습니다.\n• 집의 구성원 카드에 ‘이 집에서 빼기’를 추가했습니다. 캐릭터와 다른 집 연결은 유지됩니다.\n• 집 정보 화면에서도 집을 삭제할 수 있습니다. 삭제 전 함께 지워지는 내용을 안내합니다.\n• 멀티 관리자가 구성원을 차단하면서 내보낼 수 있도록 개선했습니다.\n\n🎨 UI/UX\n• 홈 오른쪽의 일정·통계·설정 아이콘을 작게 정리했습니다.\n\n🐛 오류 수정\n• 한쪽 캐릭터의 불편함·성가심을 다른 캐릭터의 감정으로 표현하던 일부 장면을 수정했습니다.\n• 성가심·질투가 없도록 설정했는데 상대를 성가셔하며 붙잡는 문장이 나오던 경로를 수정했습니다.\n• 집을 삭제할 때 관계없는 캐릭터의 생활 상태까지 초기화하던 문제를 수정했습니다.\n\n🛒 상품 변경 안내\n• 9월 14일 0시(한국 시간)부터 캐릭터 슬롯을 1개·1,000원에 직접 구매하는 방식으로 변경합니다.\n• 그전까지는 기존 5개·1,200원 구성을 유지합니다. 기존에 구매한 슬롯은 그대로 유지됩니다.\n• 운영 비용을 충분히 예상하지 못해 가격 변경으로 부담을 드리게 되어 죄송합니다. 자세한 안내는 인게임 우편에서 확인해 주세요.\n\n🔧 이번 빌드의 추가 개선\n• 설정을 선택할 때 화면이 맨 위로 올라가던 문제를 수정했습니다.\n• 애니메이션을 바꿀 때 화면 전체를 새로 불러오지 않도록 개선했습니다.\n• 캐릭터 설정 선택과 홈 스와이프 중 반복 작업을 줄였습니다.\n• 마을에 다시 들어왔을 때 보고 있던 지도 위치를 유지합니다.\n• 응원 선물 구매 후 후원자 이름을 신청하는 방법을 인게임 우편으로 안내했습니다.\n\n🔧 310 추가 개선\n• 응원 선물 구매 후 후원자 이름 편집이 나타나지 않는 문제를 수정했습니다.\n• 기기 저장 공간이 부족해 읽음 표시를 저장하지 못해도 우편 본문을 열 수 있도록 수정했습니다.\n• 집 일러스트·가족사진과 건물 내부 사진 안내 영역을 눌러 사진을 첨부할 수 있습니다. 집 정보에도 사진 변경 버튼을 추가했습니다.\n• 가독성 문제가 있던 다크모드 선택을 제거하고 밝은 화면으로 통일했습니다.\n• 우측 메뉴를 이미지 아이콘만 표시하도록 정리하고 위치를 조정했습니다.\n• 첫 진입 때 중복 계정 조회를 줄이고 개인 마을 준비 후 멀티 목록을 이어서 불러오도록 개선했습니다.\n• 캐릭터·마을 슬롯이 6개월 후 소멸하는 상품이 아님을 더 명확히 안내합니다.\n"}, {"label": "English", "code": "en", "content": "Drawer Village 1.0.277 (310)\n\nImprovements\n• More detailed character settings and directional feelings in life scenes and commands, with fewer repetitive conflicts and smoother home swiping.\n• Remove a resident from the home directly in Members, preserving the character and other homes.\n• Delete a home from Home info, with confirmation of what will be removed.\n• Group managers can block and remove members together.\n• Smaller Schedule, Stats and Settings icons on the home screen.\n\nFixes\n• Prevented one character’s discomfort or annoyance from being assigned to the other character.\n• Fixed a scene that implied annoyance and possessiveness despite contrary settings.\n• Deleting a home no longer resets unrelated characters’ life state.\n\nPurchases\n• From September 14 at 00:00 KST, one character slot costs KRW 1,000. Until then, the five-slot offer remains KRW 1,200.\n• Previously purchased slots are preserved. We apologize for the price increase caused by underestimated operating costs. Please read the in-game mail for details.\n\nAdditional improvements in this build\n• Fixed settings jumping to the top after a selection.\n• Animation settings now apply without rebuilding the whole screen.\n• Reduced repeated work during character setting changes and home swipes.\n• The town map keeps your viewing position when you return.\n• Sent an in-game guide to requesting a supporter name after purchasing a Support Gift.\n\nAdditional improvements in 310\n• Fixed the missing supporter name editor after purchasing a Support Gift.\n• Mail opens even when the device cannot save read receipts due to full storage.\n• Tap home/family-photo and building-interior placeholders to attach an image. Home info also offers a photo button.\n• Removed dark mode selection and standardized on the light display for readability.\n• The right menu now uses image icons only, with adjusted positioning.\n• Reduced duplicate account reads during startup; multiplayer lists load after the personal village is ready.\n• Clarified that character and town slots do not expire after six months.\n"}, {"label": "日本語", "code": "ja", "content": "ひきだし村 1.0.277（310）アップデート\n\n改善\n• 性格や相手への感情を生活シーン・指示により細かく反映し、同じような衝突の繰り返しとホームのスワイプ時の遅延を改善しました。\n• メンバー画面から「この家から外す」を追加しました。人物とほかの家への接続は維持されます。\n• 家情報から家を削除でき、削除される内容を事前に確認できます。\n• マルチの管理者がメンバーをブロックして退出させられるようにしました。\n• ホームの予定・統計・設定アイコンを小さくしました。\n\n不具合修正\n• 片方の不快感や煩わしさが、もう片方の感情として描写される問題を修正しました。\n• 煩わしさや嫉妬がない設定でも、相手を煩わしがりながら引き留めるシーンを修正しました。\n• 家の削除で無関係な人物の生活状態まで初期化される問題を修正しました。\n\n商品変更\n• 9月14日0時（韓国時間）から、キャラクター枠1人分を1,000ウォンで直接購入する方式に変更します。それまでは5枠1,200ウォンを維持します。\n• 購入済みの枠は維持されます。運営費用の見積もり不足による値上げをお詫び申し上げます。詳細はゲーム内郵便をご覧ください。\n\n今回のビルドでの追加改善\n• 設定を選ぶと画面の一番上に戻る不具合を修正しました。\n• アニメーション設定の変更時に画面全体を再表示しないよう改善しました。\n• キャラクター設定の選択やホームのスワイプで繰り返していた処理を減らしました。\n• 村に戻ったとき、地図の表示位置を維持します。\n• 応援ギフト購入後のお名前掲載の申請方法をゲーム内郵便でご案内しました。\n\n310での追加改善\n• 応援ギフト購入後に名前編集が表示されない問題を修正しました。\n• 容量不足で既読を保存できなくても、手紙の本文を開けるようにしました。\n• 家・家族写真や建物内観の案内枠を押して画像を追加できます。家情報にも写真変更ボタンを追加しました。\n• 読みづらさのあったダークモードの選択を廃止し、明るい表示に統一しました。\n• 右メニューを画像アイコンだけにし、位置を調整しました。\n• 起動時の重複したアカウント取得を減らし、個人の村の準備後にマルチ一覧を読み込みます。\n• キャラクター枠・村枠は6か月で失効する商品ではないことを明記しました。\n"}]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "support-replies310", "project": "서랍마을", "title": "310 문의 답변 · 후원자·슬롯기간·이미지 삭제", "languages": [{"label": "한국어", "code": "ko", "content": "\n응원해 주셔서 감사합니다! 구매는 지급되었지만 앱이 후원 구매 정보를 읽어 표시하는 과정에 누락이 있어 이름 편집 메뉴가 보이지 않았습니다. 해당 문제를 310 버전에서 수정했습니다. 스토어에 업데이트가 배포된 뒤 최신 버전으로 업데이트하시고, 구매하신 Google 계정으로 로그인한 상태에서 설정 첫 화면의 ‘후원자 이름 편집’을 확인해 주세요. 다시 구매하실 필요는 없습니다. 신청 내용을 복사하거나 파일로 내보내 전달해 주시면 확인 후 크레딧에 반영하겠습니다.\n\n## 슬롯 기간 문의 답변\n6개월 후 슬롯이 사라지는 상품은 아닙니다. 캐릭터 슬롯과 마을 슬롯은 일회성 구매로 추가되며, 서랍마을 서비스가 운영되는 동안 기간 제한 없이 유지됩니다. ‘최소 6개월 보장’은 최소 제공 기간에 대한 안내이며, 6개월 이용권이나 구독이라는 뜻이 아닙니다. 혼동을 드려 죄송하며 상품 설명을 더 명확히 정리했습니다.\n\n## 이미지 전체 삭제 요청을 처리하는 방법\n현재 계정 이미지 전체를 안전하게 지우는 전용 사용자 버튼은 없습니다. 제출된 진단 정보에는 로그인 이메일/UID와 실제 서버 이미지 목록이 없어 계정을 특정할 수 없습니다. Media restore found0은 해당 기기의 로컬 복원 대상이 없다는 뜻이며 서버에 이미지가 없거나 이미지가 우편 오류의 원인이라는 증거가 아닙니다.\n\n1. 요청자에게 게임에서 사용 중인 로그인 이메일 또는 확인 가능한 UID를 비공개로 받습니다. 비밀번호나 인증번호는 받지 않습니다.\n2. ‘서버에 올린 이미지 전부’인지, 프로필/캐릭터/집/방/사전/멀티 공유 이미지까지 포함할지 범위를 확인합니다. 캐릭터·관계·일정·우편·구매 내역은 삭제 대상에서 제외합니다.\n3. 해당 UID의 mediaManifest와 Storage users/{UID}/media/ 목록 및 동기화된 상태의 이미지 참조를 읽어 삭제 예정 목록을 만듭니다. 프로필 이미지는 별도 users/{UID}/profile/avatar 경로입니다. 운영자가 다른 계정 파일까지 일괄 삭제하면 안 됩니다.\n4. 요청한 범위의 서버 이미지와 메타데이터/참조를 함께 정리해야 합니다. Storage 파일만 삭제하면 깨진 링크·용량 표시 불일치가 남고, 기기 이미지가 다시 업로드될 수 있습니다. 기기 캐시와 동기화 재업로드까지 처리하는 별도 삭제 작업이 필요합니다.\n5. 처리 전 원본 이미지를 요청자가 보관했는지 확인하고, 삭제 후 이미지 용량과 새 업로드를 확인합니다. 이 대화에서는 실제 이미지 삭제를 실행하지 않았습니다.\n\n우선 요청자에게는 다음처럼 답하면 됩니다:\n“불편을 드려 죄송합니다. 이미지 전체 삭제는 가능 여부와 대상을 먼저 확인해야 해서, 게임에 로그인하신 이메일을 비공개로 보내 주세요. 프로필·캐릭터·집·방·사전 이미지 중 어디까지 삭제를 원하시는지도 알려 주세요. 캐릭터와 구매 내역은 유지하는 방향으로 확인하겠습니다. 우편 열림 문제는 이미지 전체 삭제 없이 고칠 수 있는 경로도 확인하여 수정 중입니다. 이미지 원본은 별도로 보관해 주세요.”\n\nAAB SHA256: 30eec0a5fadd80ce60887d9424313af4836222d39238c467e9d5c5a6ee0d8711\n"}]});
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{"title": "Play310 AAB 업로드·9/14 구상품 판매 종료", "summary": "310/1.0.277 AAB는 앱 전달/dev310에 준비. 기존309 수정과 후원자/우편/사진/우측바 개선 포함. Play업로드 및 실제 배포 버전 확인 필요. character_slot_1/standard/한국1000원과9/14 구5슬롯 상품 신규판매중단 별도 확인."});

window.SEORAP_DATA.tasks.push({"id": "dv-release311", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "311 / 1.0.278 · 읽음·저장 오류 점검, 이미지 삭제·후원자 접수", "summary": "dev283ef0d. 저장 실패 시 완료 오안내 방지·손상 읽음 상태 보강. 성가심/질투 없음640장면·설정16필드·3언어·계정전환/복원 회귀 통과. 내 이미지 전체 삭제(서버/Firestore/기기), 타 계정 보존·재업로드 차단·실패 재시도. 실제 사용자 이미지 삭제 없음. 후원자 신청 보내기/상태·Firestore supporterRequests·승인 명단 연결. 제공 나무배경+미색 상자, 우측 흰외곽선/간격/상향. 서버api/accountDeletionApi와 규칙 배포, 실제 공개200·미인증401 확인. 311 AAB 서명·276자산 일치, Play 업로드 대기. EN76.0%,JA76.0%; 이번 안내3언어 완료. 운영 앱main 유지."});
window.SEORAP_DATA.updates.unshift({"version": "311 / 1.0.278 · 이미지 정리·후원자 접수·저장 안정성", "code": 311, "date": "2026-09-10", "items": ["후원자 신청 보내기와 접수·승인·반려 상태 확인, Firestore supporterRequests에서 검토", "선정적 표현·욕설·사칭·개인정보 포함 이름 반려 안내", "내 이미지 전체 삭제, 다른 계정/캐릭터/관계/구매/우편 본문 보존", "크레딧 나무 원화·미색 상자와 신청 버튼 개선", "우측 아이콘 흰 외곽선·간격 확대·상향 배치", "저장 실패 완료 안내 방지, 손상 읽음 데이터 처리", "성격/시선 로그640장면·계정 전환·저장복원 검사 통과", "dev283ef0d와 서버·규칙 반영, 운영 앱main 유지,311 AAB Play 업로드 대기", "영어76.0%·일본어76.0%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release311-play-combined", "project": "서랍마을", "title": "311 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n후원자 이름을 앱에서 신청하고 접수 상태를 확인할 수 있어요.\n크레딧 화면을 나무 배경과 미색 상자로 꾸몄어요.\n설정에 내 이미지 전체 삭제를 추가했어요.\n우측 메뉴에 흰 외곽선을 넣고 위치와 간격을 조정했어요.\n저장 실패 안내와 우편 읽음 처리를 보강했어요.\n</ko-KR>\n<en-US>\nSubmit supporter names in the app and check their status.\nCredits now have a wooden background and cream panels.\nAdded Delete all my images in Settings.\nImproved right-side icons, spacing and placement.\nImproved save-failure messages and mail read tracking.\n</en-US>\n<ja-JP>\nアプリから応援者の名前を申請し、受付状況を確認できるようになりました。\nクレジットを木目背景とクリーム色のパネルに変更しました。\n設定に自分の画像をすべて削除する機能を追加しました。\n右側アイコンに白い縁取りを追加し、位置と間隔を調整しました。\n保存失敗の案内とメールの既読処理を改善しました。\n</ja-JP>\n"}]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release311-supporter-review", "project": "서랍마을", "title": "후원자 신청 접수 확인·검토 방법 (311)", "replies": [{"label": "한국어", "code": "ko", "content": "Firebase Console → lifelog-98fff → Firestore Database → 데이터 → supporterRequests → UID 문서. 기존 파일 만들기/복사는 Firestore에 접수되지 않습니다.311에서 신청 보내기를 눌러야 접수됩니다. style.name/visibility 검토 후 status=approved 승인, status=rejected와 reason으로 반려합니다. pending은 대기입니다. 승인된 명단은 크레딧을 다시 열면 표시됩니다(최대60초 캐시). 신청 금액은 서버 검증값이며 직접 변경하지 마세요. 선정적 표현·혐오·욕설·사칭·개인정보 포함 이름은 반려될 수 있습니다."}]});
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{"title": "Play311 AAB 업로드·9/14 구상품 판매 종료", "summary": "311/1.0.278 AAB는 앱 전달/dev311에 준비. 서버기능과 규칙은 반영됨. Play 업로드/게시·실제 배포 버전은 별도 확인 필요. character_slot_1/standard/한국1000원 및9/14 구5슬롯 상품 신규판매중단 별도 확인."});

window.SEORAP_DATA.tasks.push({"id": "dv-release312", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "312 / 1.0.279 · 시키기 다양화·캐릭터 탭 성능", "summary": "dev7810b15. 구체적 생활24개·교류18개, 나답게→평소 생활 장면 고르기. 자동 생활과 설정 장면 공유, 시선 반응 적용. 숨겨진 설정/순서창 지연 생성, 우측 아이콘 흰 테두리 제거·위치/간격 유지. 새 기능/공유 마을/3언어/모바일·태블릿 QA 통과. 기존 검사3개는311에서도 동일 실패. sharedTownApi 배포 완료.312 AAB 서명·277자산 일치, Play 업로드 대기. EN76.0%·JA76.0%, 신규 문구3언어 완료. 운영 앱main 유지."});
window.SEORAP_DATA.updates.unshift({"version": "312 / 1.0.279 · 생활·교류 다양화와 캐릭터 탭 개선", "code": 312, "date": "2026-09-10", "items": ["시키기 생활 행동24개·교류18개 추가", "나답게에서 캐릭터 설정이 반영된 평소 생활 장면 선택", "알려진 취미의 자동 행동도 구체적인 장면 사용", "캐릭터 탭의 숨겨진 설정창 미리 생성 제거", "우측 아이콘 흰 테두리 제거, 위치·간격 유지", "공유 마을 서버 반영, dev7810b15,312 AAB 업로드 대기", "영어76.0%·일본어76.0%; 신규 문구3언어 완료"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release312-play-combined", "project": "서랍마을", "title": "312 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n시키기에 구체적인 생활 행동 24개와 교류 18개를 추가했어요.\n나답게 메뉴에서 캐릭터 설정이 반영된 평소 생활 장면도 고를 수 있어요.\n취미 로그를 더 세세하게 만들고, 캐릭터 탭의 불필요한 로딩을 줄였어요.\n우측 아이콘은 위치와 간격을 유지하고 흰 테두리를 제거했어요.\n</ko-KR>\n<en-US>\nAdded 24 detailed daily activities and 18 social interactions.\nChoose everyday scenes based on character settings in the personal activity menu.\nAdded more hobby details and reduced unnecessary loading in the character tab.\nRemoved white outlines from right-side icons, keeping their position and spacing.\n</en-US>\n<ja-JP>\n指示メニューに具体的な日常行動24種類と交流18種類を追加しました。\nキャラクター設定を反映した普段の生活シーンも選べます。\n趣味のログを細かくし、キャラクタータブの不要な読み込みを減らしました。\n右側アイコンの位置と間隔はそのままに、白い縁取りを削除しました。\n</ja-JP>\n"}]});
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{"title": "Play312 AAB 업로드·9/14 구상품 판매 종료", "summary": "312/1.0.279 AAB는 앱 전달/dev312에 준비. 공유 마을 서버 반영 완료. Play 업로드/게시와 현재 배포 버전 별도 확인 필요. character_slot_1/standard/한국1000원 및9/14 구5슬롯 상품 신규판매중단 별도 확인."});

window.SEORAP_DATA.tasks.push({"id": "dv-release313", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "313 / 1.0.280 · 광고 ID 권한 명시·AAB 재빌드", "summary": "앱 매니페스트에 AD_ID 직접 선언.312/313 전달 AAB 모두 권한 존재·SDK 제한 없음 확인. Console312 오류 원인 확정 아님.313 서명·277자산 일치, 업로드 대기.312 기능 유지. dev 반영, 운영main 유지. EN76.0%·JA76.0%."});
window.SEORAP_DATA.updates.unshift({"version": "313 / 1.0.280 · 광고 ID 선언 확인·재빌드", "code": 313, "date": "2026-09-10", "items": ["312의 생활·교류 다양화와 캐릭터 탭 개선 유지", "광고 ID 권한을 앱 매니페스트에 명시", "313 AAB 준비·Play 오류 재확인 대기; 해결 확정 아님"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release313-play-combined", "project": "서랍마을", "title": "313 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n시키기에 구체적인 생활 행동 24개와 교류 18개를 추가했어요.\n나답게 메뉴에서 캐릭터 설정이 반영된 평소 생활 장면도 고를 수 있어요.\n취미 로그를 더 세세하게 만들고, 캐릭터 탭의 불필요한 로딩을 줄였어요.\n우측 아이콘은 위치와 간격을 유지하고 흰 테두리를 제거했어요.\n</ko-KR>\n<en-US>\nAdded 24 detailed daily activities and 18 social interactions.\nChoose everyday scenes based on character settings in the personal activity menu.\nAdded more hobby details and reduced unnecessary loading in the character tab.\nRemoved white outlines from right-side icons, keeping their position and spacing.\n</en-US>\n<ja-JP>\n指示メニューに具体的な日常行動24種類と交流18種類を追加しました。\nキャラクター設定を反映した普段の生活シーンも選べます。\n趣味のログを細かくし、キャラクタータブの不要な読み込みを減らしました。\n右側アイコンの位置と間隔はそのままに、白い縁取りを削除しました。\n</ja-JP>\n"}]});
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{title:"Play313 AAB 업로드·광고 ID 오류 재확인·9/14 구상품 판매 종료",summary:"앱 전달/dev313의313/1.0.280 파일로 교체 후 광고 ID 오류 확인.312와313 로컬 AAB 모두 AD_ID 권한 있음. Console 오류 해결 미확정. 9/14 구5슬롯 상품 신규판매중단 별도 확인."});

window.SEORAP_DATA.tasks.push({"id": "dv-release314", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "314 / 1.0.281 · 광고 ID 미사용", "summary": "사용자 요청으로 Android AdMob 제외·AD_ID 권한 병합 차단·분석 광고 ID 수집 중지. 최종 AAB 권한/플러그인 없음·서명·277자산 검사 통과. Play 광고 ID 아니요 저장 및314 업로드 필요. 운영main 유지, EN76.0%·JA76.0%."});
window.SEORAP_DATA.updates.unshift({"version": "314 / 1.0.281 · 광고 ID 미사용", "code": 314, "date": "2026-09-10", "items": ["Android 광고 ID 미사용으로 변경·광고 SDK 제외", "312 생활·교류·캐릭터 탭 개선 유지", "314 AAB 준비, Play 광고 ID 아니요 및 업로드 대기"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release314-play-combined", "project": "서랍마을", "title": "314 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\nAndroid에서 광고 ID를 사용하지 않도록 변경했어요.\n시키기에 구체적인 생활 행동 24개와 교류 18개를 추가했어요.\n나답게 메뉴에서 캐릭터 설정이 반영된 평소 생활 장면도 고를 수 있어요.\n취미 로그를 더 세세하게 만들고, 캐릭터 탭의 불필요한 로딩을 줄였어요.\n우측 아이콘은 위치와 간격을 유지하고 흰 테두리를 제거했어요.\n</ko-KR>\n<en-US>\nDisabled advertising ID use on Android.\nAdded 24 detailed daily activities and 18 social interactions.\nChoose everyday scenes based on character settings in the personal activity menu.\nAdded more hobby details and reduced unnecessary loading in the character tab.\nRemoved white outlines from right-side icons, keeping their position and spacing.\n</en-US>\n<ja-JP>\nAndroidで広告IDを使用しないように変更しました。\n指示メニューに具体的な日常行動24種類と交流18種類を追加しました。\nキャラクター設定を反映した普段の生活シーンも選べます。\n趣味のログを細かくし、キャラクタータブの不要な読み込みを減らしました。\n右側アイコンの位置と間隔はそのままに、白い縁取りを削除しました。\n</ja-JP>\n"}]});
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{title:"Play314 업로드·광고 ID 아니요·9/14 구상품 판매 종료",summary:"앱 전달/dev314의314/1.0.281로 교체. 광고 ID 선언 아니요 저장 필요. 최종 AAB 광고 ID 권한 없음 확인. Play 설정변경/업로드 미실행.9/14 구5슬롯 상품 신규판매중단 별도 확인."});

window.SEORAP_DATA.tasks.push({"id": "dv-release315", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "315 / 1.0.282 · 침실·방 출입·다른 방 대면·태블릿 메뉴", "summary": "dev927da87. 방 주인/자는 방 연결 유지, 권한 캐시·낮잠 판별 보강. 다른 곳에서 자기 기본off/5·15·35%, 허용 거실·휴식 공간 사용·기온연동 없음. 1인 침대 점유 충돌 수정. 자동 대면은 다른 방 이동 후 시작, 접근불가/수면은 휴식 대체. 태블릿 가로 기존 글자 메뉴 복원. 신규 로직/모바일·태블릿/기존생활 회귀 통과. sharedTownApi 배포완료.315 AAB 서명·278자산·광고 ID 없음. Play 업로드 대기. EN76.0%·JA76.0%, 신규문구3언어 완료. 운영main 유지."});
window.SEORAP_DATA.tasks.push({"id": "dv-career-dlc-hospitalization", "project": "서랍마을", "section": "planning", "completed": false, "title": "직업팩 DLC · 입원·병원 숙박 보류", "summary": "사용자 요청으로 지금 구현하지 않음. 입원 상태와 병원에서 자는 기능은 직업팩DLC 기획 시 검토."});
window.SEORAP_DATA.updates.unshift({"version": "315 / 1.0.282 · 수면 장소·방 출입·태블릿 메뉴", "code": 315, "date": "2026-09-10", "items": ["지정 침실·출입 권한을 낮잠과 수면에 반영하도록 보강", "구성원 설정에 다른 곳에서 자기 체크박스와 빈도 선택", "1인 침대 중복 점유 수정", "다른 방의 상대와 대면하는 자동 장면은 이동 후 이어짐", "태블릿 가로 메뉴를 기존 글자 버튼으로 복구", "입원 기능은 직업팩DLC로 보류", "dev927da87·공유 서버 반영완료·315 AAB 업로드 대기", "영어76.0%·일본어76.0%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release315-play-combined", "project": "서랍마을", "title": "315 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n방 출입 권한과 지정한 자는 방이 낮잠·수면에 반영되도록 보강했어요.\n구성원 설정에 가끔 다른 곳에서 자기와 빈도 선택을 추가했어요.\n1인 침대의 중복 점유를 수정했어요.\n다른 방의 상대와 대면하는 장면은 이동 후 이어지도록 개선했어요.\n태블릿 가로 메뉴를 아이콘과 글자가 있는 기존 배치로 복원했어요.\n</ko-KR>\n<en-US>\nImproved room access and assigned bedrooms for sleep and naps.\nAdded optional sleeping elsewhere with frequency settings.\nFixed overlapping use of single beds.\nFace-to-face scenes in another room now follow movement to that room.\nRestored labeled menu buttons in tablet landscape mode.\n</en-US>\n<ja-JP>\n入室制限と指定の寝室が睡眠・昼寝に反映されるよう改善しました。\n時々ほかの場所で寝る設定と頻度選択を追加しました。\n1人用ベッドの重複使用を修正しました。\n別の部屋にいる相手との対面シーンは移動後に続くよう改善しました。\nタブレット横画面のメニューを文字付きの従来の配置に戻しました。\n</ja-JP>\n"}]});
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{title:"Play315 업로드·광고 ID 아니요·9/14 구상품 판매 종료",summary:"앱 전달/dev315의315/1.0.282로 교체. 공유 서버 반영완료. 광고 ID 선언 아니요 유지. Play 업로드/검토 미실행.9/14 구5슬롯 상품 신규판매중단 별도 확인."});

window.SEORAP_DATA.tasks.push({"id": "dv-release316", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "316 / 1.0.283 · 접촉 허용·사용자 건물 외형", "summary": "dev5a9630c. 상위 접촉허용에 하위모두 포함·특정상대허용 우선·양방향 확인. 손잡기/기대기 성인조건 제거, 입맞춤/친밀행동 성인·노인조건 유지. 가구없어도 허용방에서 스킨십 가능. 실패 원인 구체 안내. 외형변경에 이미지 선택, 비율/투명도 유지. 구 빌딩 프리셋 제외·옥상정원 원화로 기존참조 교체. 로직/실제 이미지선택384·1180/빌드·278자산·서명 검사 통과.316 AAB 준비. 공유 서버배포 완료. Play 업로드 대기. EN76.0%·JA76.0%, 신규문구3언어 완료. 운영main 유지."});
window.SEORAP_DATA.updates.unshift({"version": "316 / 1.0.283 · 접촉 오류·건물 사진", "code": 316, "date": "2026-09-10", "items": ["성인 간 친밀한 접촉까지 설정에 하위 접촉 모두 포함", "손잡기/기대기 불필요한 나이조건과 스킨십 필수가구 제거", "실행 불가 시 방향별 접촉 설정 안내", "외형변경에서 사용자 건물 사진 선택", "예전 빌딩 대신 새 옥상정원 원화 사용", "dev5a9630c·316 AAB 업로드 대기·공유 서버배포 완료", "영어76.0%·일본어76.0%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release316-play-combined", "project": "서랍마을", "title": "316 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n신체 접촉 허용 범위를 단계별 누적으로 적용하도록 정리했어요.\n손잡기·기대기의 불필요한 나이 제한과 스킨십의 필수 가구 조건을 없앴어요.\n접촉을 실행할 수 없을 때 확인할 설정을 구체적으로 안내해요.\n건물 외형변경에서 내 사진을 선택할 수 있어요.\n예전 빌딩 그림을 새 옥상 정원 건물 그림으로 교체했어요.\n</ko-KR>\n<en-US>\nContact limits now consistently include all lower levels.\nRemoved unnecessary age checks for handholding and leaning, and furniture requirements for private time.\nAdded clearer guidance when contact is unavailable.\nChoose your own building exterior image.\nReplaced the old building artwork with the rooftop garden building.\n</en-US>\n<ja-JP>\n接触の許可範囲に、それ以下の段階も含まれるよう整理しました。\n手つなぎ・寄り添いの不要な年齢制限と、二人の時間の必須家具条件をなくしました。\n実行できない場合は確認すべき設定を具体的に案内します。\n建物の外観に自分の画像を選べます。\n古いビルの絵を屋上庭園の建物に差し替えました。\n</ja-JP>\n"}]});
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{title:"Play316 업로드·광고 ID 아니요·9/14 구상품 판매 종료",summary:"앱 전달/dev316의316/1.0.283로 교체. 광고 ID 선언 아니요 유지. Play 업로드/검토 미실행.9/14 구5슬롯 상품 신규판매중단 별도 확인."});

window.SEORAP_DATA.tasks.push({"id": "dv-release317", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "317 / 1.0.284 · 관계 배경·서사 비중·서술형 로그", "summary": "앱 dev 5f08e8f. 약혼 포함 23종, 전용 배경·일상 46항목/138선택. 배경 회상 69개+일상 회상 69개를 단계·시선과 조합. 관계 비중은 호감과 분리, 기본 비중 없음. 비중 없음/무관심에 계약 후회 제외. 인물·취향 대화의 양측 반응, 12개 여가 분야+기타 서술 개선. 각 항목 ⓘ 설명. 청년·중년·장년·노년 성인 판정 수정. 414개 다국어 선택 검증, 공유 23종 저장, 3언어 휴대폰·태블릿 화면 검사 통과. AAB 서명/286자산 검증. Play 업로드 대기. EN76.1%·JA76.1%. 운영 main 유지."});
window.SEORAP_DATA.updates.unshift({"version": "317 / 1.0.284 · 관계의 배경과 이야기", "code": 317, "date": "2026-09-10", "items": ["약혼 포함 공식 관계 23종의 전용 배경과 일상 설정", "단계·각자의 시선에 따라 달라지는 회상과 후회", "관계 비중: 매우 높음~비중 없음, 기본 비중 없음; 호감도와 분리", "화제 속 인물에 대한 양측 시선과 성격을 반영한 대화", "독서·영상·음악·취미 묘사 개선, 각 설정의 ⓘ 설명", "청년·중년·장년·노년 성인 접촉 판정 수정", "dev5f08e8f · 317 AAB 준비 · Play 업로드 대기", "영어76.1% · 일본어76.1%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release317-play-combined", "project": "서랍마을", "title": "317 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n약혼과 관계별 배경·일상 설정을 추가했어요.\n관계 단계와 각자의 시선에 따라 회상의 내용이 달라져요.\n관계 비중은 호감도와 별개로 이야기의 비중을 조절해요.\n인물·취향 대화와 취미 로그를 더 구체적으로 다듬었어요.\n설정 옆 ⓘ에서 짧은 설명을 볼 수 있어요.\n청년·중년·장년·노년의 성인 접촉 판정 오류를 수정했어요.\n</ko-KR>\n<en-US>\nAdded engagement and relationship-specific history and routines.\nMemories now reflect relationship stages and individual perspectives.\nNarrative weight controls story emphasis, separately from affection.\nRefined conversations and leisure scenes.\nTap the info icon for short setting explanations.\nFixed adult age-group checks for physical contact.\n</en-US>\n<ja-JP>\n婚約と、関係ごとの背景・日常設定を追加しました。\n関係段階と各自の視線に応じて回想が変わります。\n関係の比重は好感度とは別に、物語での扱いを調整します。\n人物・好みの会話と趣味の描写を具体的にしました。\n設定のⓘから短い説明を確認できます。\n成人に当たる年齢区分の接触判定を修正しました。\n</ja-JP>\n"}]});
if(!window.SEORAP_DATA.completedTaskIds.includes("dv-release317"))window.SEORAP_DATA.completedTaskIds.push("dv-release317");
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{title:"Play317 업로드·광고 ID 아니요·9/14 구상품 판매 종료",summary:"앱 전달/dev317의 317/1.0.284로 교체. 광고 ID 선언 아니요 유지. Play 업로드/검토 미실행. 9/14 구5슬롯 상품 신규판매 중단 별도 확인."});

window.SEORAP_DATA.tasks.push({"id": "dv-release318", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "318 / 1.0.285 · 성향 관찰·멀티 직접 생성", "summary": "dev 2887336. 성향 8축의 양측 비교와 시선 반영, 통제욕 명칭 정리. 멀티 구성원 새 캐릭터 카드/데려오기/직접 생성, 대기 안내와 같은 ID 재시도. 이전 구독 오류 차단과 강제 재연결. 성향96·명시설정100·기존모순640·3언어384/1180·슬롯/중복/구독 검사 통과. AAB 288자산·서명 확인. EN76.1% JA76.1%. Play/웹/공유서버 배포 대기, iOS 서명 미실행. 멀티 전체 접속불가 제보는 상세 증상 확인 필요."});
window.SEORAP_DATA.updates.unshift({"version": "318 / 1.0.285 · 성향과 멀티 캐릭터", "code": 318, "date": "2026-09-10", "items": ["양측 성향을 구체적 행동으로 묘사하고 시선에 맞춰 반응", "남에게 관여하는 정도 → 통제욕", "멀티 구성원에서 새 캐릭터 생성 또는 데려오기", "이사/생성 로딩과 안전한 재시도", "이전 연결 오류 차단 및 강제 재연결", "dev 2887336 · AAB 준비 · 운영 배포 대기", "EN76.1% · JA76.1%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release318-play-combined", "project": "서랍마을", "title": "318 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n두 캐릭터의 성향 차이와 시선을 반영해 교류 로그를 더 구체적으로 다듬었어요.\n성향 항목 이름을 ‘통제욕’으로 정리했어요.\n멀티 구성원 목록의 ＋새 캐릭터에서 데려오기와 새로 만들기를 선택할 수 있어요.\n캐릭터 생성·이사 중 대기 안내와 재시도 처리를 개선했어요.\n멀티 재연결과 이전 연결의 오류 표시를 수정했어요.\n</ko-KR>\n<en-US>\nInteractions now describe specific behavior based on both characters’ traits and perspectives.\nRenamed the control-related trait.\nUse + New character in multiplayer to create or bring a character.\nAdded loading guidance and safer retries.\nImproved reconnection and handling of outdated connection errors.\n</en-US>\n<ja-JP>\n双方の性格と視線をもとに、交流の行動描写を具体的にしました。\n性格項目の名称を「支配欲」に整理しました。\nマルチの「＋新しいキャラクター」から作成・引っ越しを選べます。\n作成・引っ越し中の案内と再試行を改善しました。\n再接続と古い接続エラーの表示を修正しました。\n</ja-JP>\n"}]});
if(!window.SEORAP_DATA.completedTaskIds.includes("dv-release318"))window.SEORAP_DATA.completedTaskIds.push("dv-release318");
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{title:"Play318 업로드·공유 서버 반영 대기",summary:"앱 전달/dev318의318/1.0.285 준비. Play 업로드 미실행. 공유 runtime 반영 배포도 대기. 광고 ID 아니요 유지. 9/14 구상품 신규판매 중단 별도 확인."});

window.SEORAP_DATA.tasks.push({"id": "dv-release319", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "319 / 1.0.286 · 관계 역할·공지 우편함", "summary": "dev 183a225. 가족 배경·역할·기준 왕관·혈연/역방향 표시. 함께 살 집 선택과 승인 완료 후 빈 일반 주거 정리. 공지사항/받은우편/보낸우편/쓰기, 본문14px. 전체 앱 새 캐릭터 경로 검증. 3언어384/1180 관계·우편 QA, 공유 승인 모의검사, APK/AAB 각291자산·서명 확인. EN76.1% JA76.1%. Play/웹/sharedTownApi 배포 대기, iOS 서명 미실행. 공지 발송 안 함. Firebase 동적 링크 배너는 현재 Google credential 로그인 경로와 무관하며 운영 로그인 실검증은 별도."});
window.SEORAP_DATA.updates.unshift({"version": "319 / 1.0.286 · 관계 역할과 공지사항", "code": 319, "date": "2026-09-10", "items": ["관계 배경 단순화, 가족·사제 역할과 기준 왕관", "본인 캐릭터 기준 가족 호칭·혈연 표시", "함께 살 집 선택, 승인 후 이사와 빈 일반 주거 정리", "공지사항/받은우편/보낸우편/쓰기 및 본문 크기 조정", "dev183a225 · APK/AAB 준비 · 운영 배포 대기", "EN76.1% · JA76.1%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release319-play-combined", "project": "서랍마을", "title": "319 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n관계 설정 순서를 정리하고 관계 배경을 간결하게 바꿨어요.\n가족·사제 관계에 구성원별 역할과 기준 캐릭터 표시를 추가했어요.\n함께 살 집을 선택하고, 이사 후 비는 일반 주거지를 정리할 수 있어요.\n우편함을 공지사항·받은우편·보낸우편·쓰기로 나누고 본문 글자 크기를 조정했어요.\n</ko-KR>\n<en-US>\nSimplified relationship settings and backgrounds.\nAdded member roles and a reference character for family and mentor relationships.\nChoose a shared home and remove empty regular homes after moving.\nMail now has Notices, Inbox, Sent, and Write tabs with smaller body text.\n</en-US>\n<ja-JP>\n関係設定の順序と背景の項目を整理しました。\n家族・師弟関係にメンバーの役割と基準キャラクター表示を追加しました。\n一緒に住む家を選び、引っ越し後に空いた通常の家を整理できます。\n郵便箱を「お知らせ・受信・送信済み・書く」に分け、本文の文字サイズを調整しました。\n</ja-JP>\n"}]});
if(!window.SEORAP_DATA.completedTaskIds.includes("dv-release319"))window.SEORAP_DATA.completedTaskIds.push("dv-release319");
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{title:"Play319 업로드·공유 서버 반영 대기",summary:"앱 전달/dev319의319/1.0.286 APK/AAB 준비. Play 업로드와 웹/sharedTownApi 배포 미실행. 멀티 신규 역할/동거 기능은 서버 반영 필요. 광고 ID 아니요 유지. 공지 발송은 요청 시 승격 버전 누적으로, 푸시 없이 진행."});

window.SEORAP_DATA.tasks.push({"id": "dv-release320", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "320 / 1.0.287 · 생성 승인·화면 오류·상황 로그", "summary": "dev14a5980. 미완성 기본 건물을 회사 그림으로 교체. 캐릭터/관계 그룹 표시 오류와 삭제 후 참조 정리, 마지막 거주자 빈집 삭제. 슬롯 사용/잔여와 멀티 생성 승인, 여러 관리자 처리 결과 동기화. 중복 저장/20초 대기 제거 및 생성 중 닫기. 배려·이해 선택 제거, 키스 통합 및 상황 판단. 머리 설정 기반 손질 로그. 승인 동시처리·실제 삭제/슬롯/닫기 화면·머리/키스·기존 회귀검사 통과. APK/AAB 각294자산·서명 확인. EN76.1% JA76.1%. Play/웹/공유 서버 배포 미실행, iOS 서명 미실행. 운영 응답속도 측정은 배포 후 필요."});
window.SEORAP_DATA.updates.unshift({"version": "320 / 1.0.287 · 캐릭터 생성과 상황 묘사", "code": 320, "date": "2026-09-10", "items": ["회사 건물 그림 교체, 캐릭터 삭제·관계 탭 오류 수정", "슬롯 사용/잔여 및 일반 회원 생성 승인·처리자 표시", "멀티 중복 저장과 구독 대기 제거, 생성 중 닫기", "마지막 거주자 삭제 시 빈 주거지 정리", "배려·이해 선택 제거와 키스 통합, 머리 설정을 참고하는 손질 로그", "dev14a5980 · APK/AAB 준비 · Play/웹/서버 배포 대기", "EN76.1% · JA76.1%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release320-play-combined", "project": "서랍마을", "title": "320 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n미완성 기본 건물을 완성된 회사 건물 그림으로 교체했어요.\n캐릭터 생성 시 사용·남은 슬롯을 표시해요. 멀티 일반 회원은 관리자 승인을 받고, 처리한 사람을 확인할 수 있어요.\n멀티 생성의 중복 처리와 대기를 줄이고 생성 중 닫기를 고쳤어요.\n캐릭터 삭제·관계 화면 오류를 수정하고 마지막 거주자 삭제 시 빈집을 정리해요.\n배려·이해와 키스 세부 선택을 정리하고 상황에 따른 반응을 사용해요. 머리 손질에 머리 설정을 반영했어요.\n</ko-KR>\n<en-US>\nReplaced the unfinished default building with the office artwork.\nCreation shows used and remaining slots. Multiplayer members need manager approval, with the responder shown.\nRemoved duplicate creation work and allowed closing while waiting.\nFixed deletion and relationship screens; empty homes are removed with their last resident.\nSimplified care and kiss choices. Hair grooming now reflects hair settings.\n</en-US>\n<ja-JP>\n未完成の標準建物を会社の完成イラストに変更しました。\n作成時に使用済み・残り枠を表示します。マルチの一般メンバーは管理者の承認が必要で、対応者も確認できます。\n作成の重複処理と待機を減らし、処理中も閉じられるようにしました。\n削除・関係画面の不具合を修正し、最後の住人の削除時に空き家を整理します。\n気遣い・理解とキスの選択を整理しました。髪の手入れに髪の設定を反映します。\n</ja-JP>\n"}]});
if(!window.SEORAP_DATA.completedTaskIds.includes("dv-release320"))window.SEORAP_DATA.completedTaskIds.push("dv-release320");
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-play308-publish")Object.assign(task,{title:"Play320 업로드·공유 서버 반영 대기",summary:"앱 전달/dev320의320/1.0.287 APK/AAB 준비. Play/웹/sharedTownApi 배포 미실행. 생성 승인·서버 응답 개선은 서버 코드 동시 반영 필요. 공지 발송 안 함. 광고 ID 아니요 유지."});

window.SEORAP_DATA.tasks.push({"id": "dv-release321", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "321 / 1.0.288 · 가족 미리보기·설정 접기·멀티 슬롯", "summary": "dev dbad5d9. 기본 가족 혈연/순서 정리, 부부 배경9개, 그룹 이동 드롭다운. 가문과 유산 가족/역사/유산·계승자 기록·이름 구성·복붙 개발 미리보기. 긴 전체설정 접기. 공유/백업 범위 안내 및 BGM 중복 갱신 감소. 각 참여 서버 마을1칸+본인 추가 마을, 캐릭터는 본인 소유만 계산. 새 참여 API 슬롯검사/중복참여 유지. 다국어384/1180 QA, 서버 슬롯/승인·패키지 테스트, APK/AAB 각298자산·서명 검증. EN76.0%/JA76.0%. 운영main 유지. Play/웹/서버 배포·공지 발송 미실행. 서버 변경 후 사용 필요."});

window.SEORAP_DATA.tasks.push({"id": "dv-family-legacy-dlc", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "가문과 유산 DLC · 개발 미리보기 이후 정식 상품 준비", "summary": "321 가족 설정/가계 관계 목록/가문명·가훈·역사/물건·재산·전통과 계승자/기록 기반 로그/성·미들네임·순서/복붙 구현. 개발중 표시·가격미정. 7900원은 검토 의견이며 확정 아님. 구매 상품 등록·영수증·구매자 잠금·정식 가계도 UX 고도화 미완료."});

window.SEORAP_DATA.tasks.push({"id": "dv-twitter-sync-audio-diagnosis", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "트위터 BGM 노이즈·동기화 오류 진단 정보 대기", "summary": "제보 앱버전/기기/오류문구 없음. 321 BGM 중복 페이드 억제 및 백업/슬롯 경로 점검. 실제 제보 증상 재현·원인 확정 안 됨. 수정완료로 공지하지 않음."});
window.SEORAP_DATA.updates.unshift({"version": "321 / 1.0.288 · 가족 미리보기·접기·슬롯", "code": 321, "date": "2026-09-10", "items": ["가문과 유산 개발 미리보기: 가족·역사·유산·계승자·이름·복붙", "기본 가족 간소화, 결혼 배경 확대, 그룹 이동 드롭다운", "전체설정 긴 항목 접기·펼치기, 공유·백업 범위 안내", "BGM 중복 갱신 감소, 제보 실기기 오류는 진단 미확정", "멀티 참여자마다 기본 마을1칸, 추가마을 생성자 부담, 각자 캐릭터만 차감", "dev dbad5d9 · APK/AAB 준비 · 신규서버 API 배포 필요 · 운영main 유지", "EN76.0%·JA76.0%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release321-play-combined", "project": "서랍마을", "title": "321 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n기본 가족 설정을 혈연 여부와 표시 순서로 간단히 정리했어요.\n결혼 배경을 더 구체적으로 선택할 수 있어요.\n‘가문과 유산’ 개발 미리보기에 가족 편집·유산과 계승자 기록·이름 구성·설정 복사를 추가했어요.\n전체설정의 긴 항목을 접고 펼칠 수 있어요.\n공유·백업 안내를 보완하고 BGM의 불필요한 재생 갱신을 줄였어요.\n멀티 참여는 각자 마을 1칸, 추가 마을은 만든 사람만 차감해요. 캐릭터는 본인 소유만 계산해요.\n</ko-KR>\n<en-US>\nSimplified basic family settings and expanded marriage backgrounds.\nAdded a development preview of Lineage and Legacy: family editing, heritage and successors, name components, and settings copy.\nLong settings sections can now collapse.\nClarified sharing and backup, and reduced redundant BGM updates.\nEach joined server uses one town slot per member; extra towns use their creator’s slots. Characters count only toward their owner’s slots.\n</en-US>\n<ja-JP>\n基本の家族設定を血縁と表示順に整理し、結婚の背景を増やしました。\n「家門と遺産」の開発プレビューに家族編集、遺産と継承者の記録、名前の構成、設定コピーを追加しました。\n全設定の長い項目を折りたためます。\n共有・バックアップの説明を補い、BGMの不要な更新を減らしました。\nマルチ参加は各自の村枠を1つ、追加の村は作成者の枠を使います。キャラクター枠は本人の所有分だけを数えます。\n</ja-JP>\n"}]});

window.SEORAP_DATA.tasks.push({"id": "dv-release322", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "322 / 1.0.289 · 무료 가족 복원·상점 말풍선·이름 편집", "summary": "앱dev bda93fa. 기본 가족 친척/부모자녀/형제자매 등 복원. 기준캐릭터 및 나머지 순서화살표 옆 역할dropdown/혈연, 기본가족↔팩가족 설정 연결. 휴대폰 상점 말풍선 왼쪽/폭축소, 태블릿유지. 가족팩 보유 시 캐릭터 이름 클릭→이름·성dropdown·성추가·미들네임·배치. 실제 상품등록/영수증지급 미연결, 모의보유 UI검증. 3언어×384/1180 실제화면, 친족추론/저장 검사, APK/AAB299자산/서명 확인. EN76.0% JA76.0%, 신규3언어. Play/웹/서버/공지 미배포, 운영main 유지."});
window.SEORAP_DATA.updates.unshift({"version": "322 / 1.0.289 · 가족 복원·이름·말풍선", "code": 322, "date": "2026-09-10", "items": ["휴대폰 상점 말풍선 왼쪽으로 이동·폭 축소", "무료 기본 가족: 세부 타입·기준 캐릭터·역할 및 혈연 복원", "순서 화살표 옆 역할 드롭다운, 기본 가족과 가족팩 편집 연결", "가족팩 보유 캐릭터 이름→성 선택·성 추가·미들네임·배치, 실결제 미연결", "dev bda93fa·APK/AAB322 준비·운영배포 미실행", "영어76.0%·일본어76.0%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release322-play-combined", "project": "서랍마을", "title": "322 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n휴대폰 상점의 말풍선을 왼쪽으로 옮겨 상점주인 그림을 덜 가리도록 했어요.\n부모·자녀, 형제·자매, 친척 등 가족 설정을 기본 기능으로 복원했어요.\n기준 캐릭터를 선택하고 다른 구성원의 순서 화살표 옆에서 역할과 혈연 여부를 설정할 수 있어요.\n기본 가족 설정과 가족팩의 가족 편집 내용이 이어지도록 개선했어요.\n</ko-KR>\n<en-US>\nMoved the mobile shop speech bubble left to reveal more of the shopkeeper.\nRestored parents, children, siblings and relatives as basic family settings.\nChoose a reference character, then set each other member’s role and blood relation beside the order arrows.\nBasic family settings now stay connected with family expansion editing.\n</en-US>\n<ja-JP>\nスマートフォンのショップの吹き出しを左へ移し、店主の絵が見えやすくなりました。\n親子・きょうだい・親戚などの家族設定を基本機能に戻しました。\n基準キャラクターを選び、他のメンバーの並べ替え矢印の横で続柄と血縁を設定できます。\n基本の家族設定と家族パックの編集内容がつながるよう改善しました。\n</ja-JP>\n"}]});
for(const task of window.SEORAP_DATA.tasks)if(task.id==="dv-family-legacy-dlc")Object.assign(task,{summary:"322: 세부 가족 역할·기준캐릭터는 무료로 복원. 가족팩은 기존 가족을 바탕으로 가계도·역사·유산·계승자를 확장. 캐릭터탭 보유자 이름/성선택·성추가·배치 구현, 실상품등록/영수증검증 연결 미완료. 가격미정."});

window.SEORAP_DATA.tasks.push({"id": "dv-discovery323", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "323 / 1.0.290 · 누적 성향과 설정 자물쇠", "summary": "앱 dev daea8c4. 개인 관찰/집 7가지 성향 질문, 답변마다 수치 조금씩 변화 및 실제 설정/이후 로그 연결. 항목/묶음 자물쇠, 잠긴 질문 제외 및 답변시 재검사, 해제시 값 보존. 기존 캐릭터 기본보호, 신규 중간성향. 질문 대기열 없음. 캐릭터 프로필 이름 및 메뉴별 설명. 3언어×384/1180 실제 UI, 누적값/잠금/건너뛰기/로그연속성 검사. APK/AAB323 서명 및301자산 확인. 기존 character-ui 정적검사 옛 설정홈 문자열 조건 실패(322에도 동일조건불충족). 멀티질문/전성향 확장 및 실기기밸런스 미완료. EN76.0% JA75.9%, 새문구3언어. 운영main/Play/웹/서버/공지 미배포."});
window.SEORAP_DATA.updates.unshift({"version": "323 / 1.0.290 · 플레이로 성향 쌓기", "code": 323, "date": "2026-09-10", "items": ["캐릭터 프로필/전체설정 설명 추가", "개인 플레이 질문 응답으로 7가지 성향이 조금씩 변화하고 로그 반영", "설정 자물쇠로 변화와 관련 질문 차단, 해제시 현재값 유지", "미접속 질문 누적 없음·넘기면 값 유지", "dev daea8c4·APK/AAB323·운영배포 없음", "신규문구3언어 완료, 전체 EN76.0% JA75.9%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release323-play-combined", "project": "서랍마을", "title": "323 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n캐릭터 프로필과 전체설정 메뉴에 설명을 추가했어요.\n개인 플레이 중 상황 질문에 답하면 성향이 조금씩 달라지고 이후 로그에 반영돼요.\n전체설정의 자물쇠로 성향을 고정하면 관련 질문이 나오지 않아요.\n질문을 넘기면 설정이 바뀌지 않으며, 접속하지 않은 동안 질문이 쌓이지 않아요.\n</ko-KR>\n<en-US>\nAdded descriptions to Character profile and Full settings.\nDuring solo play, situational choices gradually shape traits and future logs.\nLock traits in Full settings to prevent changes and related questions.\nSkipping changes nothing. Questions do not pile up while you are away.\n</en-US>\n<ja-JP>\nキャラクタープロフィールと全設定に説明を追加しました。\nソロプレイ中の質問に答えると傾向が少しずつ変わり、以後のログに反映されます。\n全設定の鍵で傾向を固定すると、関連する質問も止まります。\n見送ると設定は変わらず、未接続中に質問がたまることもありません。\n</ja-JP>\n"}]});

window.SEORAP_DATA.tasks.push({"id": "dv-tablet324", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "324 / 1.0.291 · 태블릿 책 확대·프로필 두 페이지", "summary": "dev f0a17da. 태블릿 가로 책 화면폭확대, 개요/성격/정서/의상 입력 grid·scroll 및 간격 정리. 사진색상배치 기존좌표보존. 첫페이지 상단 성향전체 잠금 및 SVG자물쇠, 개별잠금유지. 캐릭터프로필=전체설정 visual/basic 동일2페이지, swipe경계포함. KO/EN/JA×1765/1180/384 실제click·잠금·비중첩·하단scroll·두페이지끝 검증. APK/AAB301자산·서명, 앱 전달 루트에 직접파일. EN76.0% JA75.9%. 운영main/Play/웹/서버/공지 미배포, iOS실기기 미검증."});
window.SEORAP_DATA.updates.unshift({"version": "324 / 1.0.291 · 태블릿 설정 책·프로필", "code": 324, "date": "2026-09-10", "items": ["태블릿 가로 설정 책 크게 확대", "개요·성격 입력칸 크기와 간격 정리, 종이 안쪽 스크롤", "책 상단 전체 성향 잠금, 선명한 자물쇠 아이콘", "캐릭터 프로필을 사진·색상·배치/기본정보 두 페이지로 구성", "dev f0a17da·APK/AAB324 직접 파일 전달, 운영 미배포", "EN76.0% JA75.9%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release324-play-combined", "project": "서랍마을", "title": "324 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n태블릿 가로 화면에서 설정 책을 크게 펼치고 입력칸 간격과 크기를 개선했어요.\n책 상단에 성향 전체 잠금을 추가하고 자물쇠 아이콘을 선명하게 바꿨어요.\n캐릭터 프로필은 사진·색상·배치와 기본 정보를 담은 두 페이지로 구성했어요.\n</ko-KR>\n<en-US>\nEnlarged the settings book on landscape tablets and improved field sizes and spacing.\nAdded a book-top trait lock and clearer lock icons.\nCharacter profile now has two pages: images, colors and layout, followed by basic information.\n</en-US>\n<ja-JP>\nタブレット横画面の設定ブックを大きくし、入力欄の大きさと間隔を改善しました。\n本の上部に傾向の一括ロックを追加し、鍵アイコンを見やすくしました。\nキャラクタープロフィールを、写真・色・配置と基本情報の2ページ構成にしました。\n</ja-JP>\n"}]});

window.SEORAP_DATA.tasks.push({"id": "dv-discovery325", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "325 / 1.0.292 · 간단 프로필·제목옆 잠금·돌발상황", "summary": "dev 6ee4877. 간단프로필 복원+프로필/LD사진/배치. 제목옆 잠김·풀림 라벨/색/아이콘, 전체잠금제거. 가족팩 관계메뉴/상점카드숨김, 기본가족보존. 돌발24상황·각5선택=120문장, 25성격정서항목에 비공개다중가중치. 서열없는 반응은 범주별증거누적. 기존v1의 새18항목은 기본잠금보호, 신규v2전체가능. 멀티본인캐질문·기존saveResident연결; 로컬서버transaction owner/member검사, 모의snapshot 계정/그룹변경/실패 검증. 실제2계정서버왕복 미실시. 3언어x384/1180 UI·순수검사·로그연속성·APK/AAB303자산/서명. 루트 앱 전달 직접파일. 신규질문3언어100%, 전체정적 EN/JA75.9%. 운영main/Play/웹/서버/공지미배포."});
window.SEORAP_DATA.updates.unshift({"version": "325 / 1.0.292 · 돌발상황과 다중 성향", "code": 325, "date": "2026-09-10", "items": ["간단 프로필 복원, 프로필·LD사진 추가 및 배치조정", "제목 옆 작은 자물쇠: 잠김/풀림 글자·색상 구분", "돌발24상황·5개씩120선택, 성격정서25항목에 숨은 가중치", "멀티본인 캐릭터 질문 및 기존 저장 연결, 실제2계정미검증", "가족팩메뉴숨김·기본가족데이터유지", "dev6ee4877·APK/AAB325 직접파일·운영미배포", "새질문문구3언어100%, 전체정적 EN/JA75.9%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release325-play-combined", "project": "서랍마을", "title": "325 Play 출시노트 · 한/영/일 한 번에 복사", "replies": [{"label": "3개 언어 한 번에", "code": "ko", "content": "<ko-KR>\n간단한 캐릭터 프로필을 복원하고 프로필 사진·LD 사진 추가와 배치 조정을 넣었어요.\n각 성향 제목 옆에서 잠김·풀림 상태를 확인할 수 있어요.\n돌발 상황 24개와 행동 선택지 120개를 추가했어요. 선택이 쌓이면 여러 성향과 이후 로그에 조금씩 반영돼요.\n멀티에서도 본인 캐릭터의 질문에 답할 수 있도록 연결했어요.\n</ko-KR>\n<en-US>\nRestored the simple character profile with profile/LD image uploads and placement controls.\nLocks now sit beside trait titles with clear status labels.\nAdded 24 situations and 120 actions that gradually shape traits and future logs.\nConnected questions for your own multiplayer characters.\n</en-US>\n<ja-JP>\n簡単なキャラクタープロフィールを復元し、プロフィール・LD画像の追加と配置調整を加えました。\n各傾向の見出し横で固定・解除を確認できます。\n24の突発状況と120の行動選択肢を追加。選択の積み重ねが傾向と以後のログに少しずつ反映されます。\nマルチでも自分のキャラクターの質問に答えられるよう接続しました。\n</ja-JP>\n"}]});

window.SEORAP_DATA.copyTemplates.unshift({"id": "release325-discovery-weights", "project": "서랍마을", "title": "325 돌발 상황 · 24개 상황 / 120개 선택지 / 실제 가중치", "replies": [{"label": "개발자 검토용 전체 목록", "code": "ko", "content": "# 서랍마을 325 · 돌발 상황·선택지·가중치 전체 목록\n\n기준: dev325 / 1.0.292 · 실제 질문 데이터(discovery-events.js), 앱 코드 커밋 6ee4877. 총 24개 상황, 120개 선택지. 모든 상황 문장과 선택지는 현재 앱에 들어간 한국어 원문입니다.\n\n## 읽는 방법\n\n- 플레이어 화면에는 상황과 행동 선택지만 표시됩니다. 아래 가중치는 개발자 검토용입니다.\n- 숫자형 성향은 내부 0~100 값에 +1 또는 -1을 더합니다. 0 미만·100 초과로는 움직이지 않습니다. 글자로 표시되는 성향 구간을 넘을 때 실제 설정 표현이 바뀝니다.\n- **+는 좋은 성격, -는 나쁜 성격이라는 뜻이 아닙니다.** 아래 방향표의 방향으로 변화한다는 뜻입니다.\n- **충동성 +1은 충동을 덜 참는 쪽**, -1은 더 잘 참는 쪽입니다. 전체설정 제목은 ‘충동을 참는 정도’지만, 저장된 선택지 순서가 반대이므로 이 목록에서는 혼동을 막기 위해 ‘충동성’으로 표기했습니다.\n- 회복 방식·분노 반응 등 순서를 매길 수 없는 항목은 **해당 반응 점수 +1**, 같은 항목의 다른 반응 점수 각각 -0.15입니다(점수 범위 0~20). 처음에는 현재 설정에 5점, 나머지에 0점으로 시작하고, 다른 반응의 점수가 현재 반응을 넘어야 바뀝니다. 현재 설정이 없는 경우에는 선택한 반응에서 시작합니다. 아래 표에는 +1을 받는 반응을 적었습니다.\n- 잠긴 항목은 수치나 반응 점수를 바꾸지 않습니다. 같은 선택지가 여러 성향을 건드려도 잠긴 성향만 제외합니다. 선택지의 영향이 전부 잠겨 있으면 그 답으로 설정은 바뀌지 않습니다.\n- 아래에서 언급하지 않은 성향에는 가중치가 없습니다. 효과를 추측해서 추가하지 않았습니다.\n\n## 숫자형 가중치 방향\n\n| 이 목록의 이름 | - 방향 | + 방향 |\n|---|---|---|\n| 외향성 | 혼자가 편함 | 무리의 중심 |\n| 정리·정돈 | 어질러도 편함 | 흐트러짐을 못 참음 |\n| 활동 에너지 | 집에서 충전 | 가만히 못 있음 |\n| 직관·상상 | 눈앞의 현실 중시 | 직관과 상상 중시 |\n| 계획성 | 즉흥적 | 계획적 |\n| 감정·공감 중심 판단 | 논리 우선 | 공감 우선 |\n| 통제·관여 | 방관자 | 통제광 |\n| 행동 전환 속도 | 한 가지씩 차분히 | 여러 일을 오감 |\n| 근면함 | 매우 느긋함 | 쉴 새 없이 움직임 |\n| 유머·장난 | 장난을 거의 하지 않음 | 유머로 분위기를 이끎 |\n| 기분 변화 폭 | 거의 흔들리지 않음 | 변화 폭이 큼 |\n| 감정 지속 시간 | 금방 지나감 | 매우 오래 남음 |\n| 감정 자극 민감도 | 매우 둔감함 | 매우 예민함 |\n| 주변 감정에 물드는 정도 | 거의 물들지 않음 | 매우 쉽게 물듦 |\n| 감정 표현 크기 | 표정 변화가 거의 없음 | 감정이 바로 드러남 |\n| 충동성 | 매우 잘 참음 | 거의 참지 않음 |\n\n## 상황별 전체 목록\n\n### 1. 약속보다 일찍 도착했어요. 상대는 아직 오는 중이에요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 조용한 구석에 앉아 가방 속을 정리한다 | 외향성 **-1** / 정리·정돈 **+1** |\n| 2 | 자리와 주문을 먼저 정해 두고 메시지를 보낸다 | 계획성 **+1** / 통제·관여 **+1** |\n| 3 | 근처 골목을 둘러보다 시간이 맞으면 돌아온다 | 활동 에너지 **+1** / 계획성 **-1** / 직관·상상 **+1** |\n| 4 | 직원에게 추천 메뉴를 물으며 이야기를 나눈다 | 외향성 **+1** / 유머·장난 **+1** |\n| 5 | 상대가 도착하면 함께 정하려고 잠시 쉰다 | 통제·관여 **-1** / 활동 에너지 **-1** / 충동성 **-1** |\n\n### 2. 갑자기 비가 내려 사람들이 처마 아래로 모였어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 가장 안쪽에서 조용히 비가 그치길 기다린다 | 외향성 **-1** / 기분을 회복하는 방식 → **혼자 정리하며 회복 +1** |\n| 2 | 젖은 사람에게 자리를 내주고 옆으로 비켜선다 | 감정·공감 중심 판단 **+1** / 통제·관여 **-1** |\n| 3 | 함께 우산을 살 곳을 찾아보자고 말을 건다 | 외향성 **+1** / 근면함 **+1** / 힘들 때 보이는 반응 → **도움을 요청함 +1** |\n| 4 | 물웅덩이가 생기는 모양을 한참 바라본다 | 직관·상상 **+1** / 행동 전환 속도 **-1** / 감정 지속 시간 **+1** |\n| 5 | 가방으로 머리를 가리고 가까운 가게까지 달린다 | 활동 에너지 **+1** / 계획성 **-1** / 충동성 **+1** |\n\n### 3. 이름이 지워진 작은 상자가 공용 공간에 놓여 있어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 찾는 사람이 보도록 잘 보이는 곳에 가지런히 둔다 | 정리·정돈 **+1** / 통제·관여 **-1** |\n| 2 | 주변 사람들에게 누구 물건인지 물어본다 | 외향성 **+1** / 근면함 **+1** |\n| 3 | 포장 흔적을 살펴 어디서 왔을지 추측한다 | 직관·상상 **+1** / 행동 전환 속도 **-1** |\n| 4 | 담당자에게 맡기고 발견한 시간과 장소를 적는다 | 계획성 **+1** / 감정·공감 중심 판단 **-1** |\n| 5 | 다른 사람 물건이라 건드리지 않고 지나간다 | 통제·관여 **-1** / 근면함 **-1** |\n\n### 4. 옆자리 사람이 실수로 음료를 엎질렀어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 놀란 사람에게 괜찮다고 말하며 휴지를 건넨다 | 감정·공감 중심 판단 **+1** / 주변 감정에 물드는 정도 **+1** / 애정 표현 → **행동으로 표현 +1** |\n| 2 | 젖으면 안 되는 물건부터 빠르게 옮긴다 | 감정·공감 중심 판단 **-1** / 행동 전환 속도 **+1** |\n| 3 | 닦는 순서를 정하고 함께 정리하자고 한다 | 통제·관여 **+1** / 정리·정돈 **+1** |\n| 4 | 잠시 굳었다가 손을 떨며 자기 물건을 확인한다 | 감정 자극 민감도 **+1** / 기분 변화 폭 **+1** / 힘들 때 보이는 반응 → **걱정이 많아짐 +1** |\n| 5 | 가벼운 농담으로 분위기를 풀며 젖은 자리를 닦는다 | 유머·장난 **+1** / 평소 정서의 방향 → **매우 낙천적임 +1** / 감정 지속 시간 **-1** |\n\n### 5. 처음 온 곳에서 안내판과 실제 길이 달라 보여요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 왔던 길을 되짚으며 표지 하나씩 다시 확인한다 | 직관·상상 **-1** / 계획성 **+1** |\n| 2 | 지나가는 사람을 붙잡고 길을 물어본다 | 외향성 **+1** / 힘들 때 보이는 반응 → **도움을 요청함 +1** |\n| 3 | 눈에 들어오는 골목으로 조금 더 가 본다 | 직관·상상 **+1** / 계획성 **-1** / 충동성 **+1** |\n| 4 | 한쪽에 멈춰 숨을 고르고 다시 생각한다 | 행동 전환 속도 **-1** / 충동성 **-1** / 기분을 회복하는 방식 → **혼자 정리하며 회복 +1** |\n| 5 | 함께 온 사람에게 지도를 맡기고 뒤를 따른다 | 통제·관여 **-1** / 감정·공감 중심 판단 **+1** |\n\n### 6. 함께 세운 일정이 갑자기 취소됐어요. 잠깐 빈 시간이 생겼네요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 미뤄 둔 일을 꺼내 순서대로 처리한다 | 계획성 **+1** / 근면함 **+1** |\n| 2 | 생각나는 곳으로 가 보자고 바로 제안한다 | 계획성 **-1** / 행동 전환 속도 **+1** |\n| 3 | 아쉬운 마음을 말하고 잠시 조용히 머문다 | 감정 표현 크기 **+1** / 감정 지속 시간 **+1** / 평소 정서의 방향 → **침울한 편 +1** |\n| 4 | 뜻밖의 휴식이라며 편한 자리를 찾는다 | 활동 에너지 **-1** / 근면함 **-1** / 좋은 일이 있을 때 → **조용히 만족함 +1** |\n| 5 | 다른 사람도 괜찮은지 먼저 묻는다 | 감정·공감 중심 판단 **+1** / 주변 감정에 물드는 정도 **+1** / 애정 표현 → **말로 표현 +1** |\n\n### 7. 누군가 뜻밖의 작은 선물을 건넸어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 말 대신 조심히 받아 들고 오래 바라본다 | 감정 표현 크기 **-1** / 감정 지속 시간 **+1** / 애정 표현 → **조용히 곁에 있음 +1** |\n| 2 | 환하게 웃으며 주변에도 보여 준다 | 감정 표현 크기 **+1** / 좋은 일이 있을 때 → **기쁨이 크게 드러남 +1** / 외향성 **+1** |\n| 3 | 왜 골랐는지 궁금해하며 이야기를 듣는다 | 감정·공감 중심 판단 **+1** / 직관·상상 **+1** |\n| 4 | 혹시 부담을 준 건 아닌지 먼저 살핀다 | 평소 정서의 방향 → **걱정이 많은 편 +1** / 좋은 일이 있을 때 → **좋은 일도 먼저 의심함 +1** / 감정 자극 민감도 **+1** |\n| 5 | 고마움을 전하고 다음엔 자신이 챙기겠다고 한다 | 애정 표현 → **적극적으로 챙김 +1** / 근면함 **+1** |\n\n### 8. 조용하던 공간에서 갑자기 큰 소리가 났어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 소리가 난 쪽을 확인하고 하던 일을 이어 간다 | 감정 자극 민감도 **-1** / 감정 지속 시간 **-1** |\n| 2 | 몸이 움찔해 잠시 말도 멈춘다 | 감정 자극 민감도 **+1** / 기분 변화 폭 **+1** |\n| 3 | 놀란 사람에게 다가가 괜찮은지 묻는다 | 주변 감정에 물드는 정도 **+1** / 감정·공감 중심 판단 **+1** |\n| 4 | 불편한 표정을 숨기지 않고 조용히 해 달라고 한다 | 감정 표현 크기 **+1** / 분노할 때 보이는 반응 → **해결책을 분명히 요구함 +1** / 갈등 대응 → **바로 따짐 +1** |\n| 5 | 조용한 곳으로 자리를 옮겨 마음을 가라앉힌다 | 외향성 **-1** / 기분을 회복하는 방식 → **혼자 정리하며 회복 +1** / 분노할 때 보이는 반응 → **자리를 피해 식힘 +1** |\n\n### 9. 줄을 서 있는데 앞사람이 순서를 잘못 안 것 같아요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 잠시 기다렸다가 조용히 순서를 설명한다 | 충동성 **-1** / 갈등 대응 → **대화로 해결 +1** |\n| 2 | 바로 말을 걸어 원래 자리를 알려 준다 | 행동 전환 속도 **+1** / 통제·관여 **+1** / 분노할 때 보이는 반응 → **즉시 잘못을 따짐 +1** |\n| 3 | 작은 일이라 생각하고 그냥 기다린다 | 통제·관여 **-1** / 감정 지속 시간 **-1** |\n| 4 | 말은 하지 않지만 표정이 굳고 한동안 신경이 쓰인다 | 감정 지속 시간 **+1** / 힘들 때 보이는 반응 → **말수가 줄어듦 +1** / 평소 정서의 방향 → **까칠한 편 +1** |\n| 5 | 주변에 순서가 어떻게 됐는지 함께 확인한다 | 외향성 **+1** / 감정·공감 중심 판단 **-1** / 갈등 대응 → **대화로 해결 +1** |\n\n### 10. 작은 동물이 발치에 다가와 가만히 앉았어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 움직이지 않고 동물이 먼저 다가오길 기다린다 | 충동성 **-1** / 통제·관여 **-1** |\n| 2 | 낮은 목소리로 말을 걸며 천천히 손을 내민다 | 외향성 **+1** / 애정 표현 → **행동으로 표현 +1** |\n| 3 | 작은 움직임에도 놀라 한 걸음 물러난다 | 감정 자극 민감도 **+1** / 신체 접촉 반응 → **갑작스러운 접촉에 쉽게 놀람 +1** |\n| 4 | 옷에 털이 묻지 않도록 자세를 고쳐 앉는다 | 정리·정돈 **+1** / 신체 접촉 반응 → **허락 없는 접촉은 불편함 +1** |\n| 5 | 함께 있는 사람에게 웃으며 손짓해 보여 준다 | 좋은 일이 있을 때 → **주변과 기쁨을 나눔 +1** / 감정 표현 크기 **+1** |\n\n### 11. 누군가 평소와 달라 보인다며 눈을 맞추고 웃었어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 무슨 뜻인지 모르고 옷을 내려다본다 | 유혹·호감 신호를 받을 때 → **눈치채지 못함 +1** / 직관·상상 **-1** |\n| 2 | 짧게 고맙다고 하고 다른 이야기로 돌린다 | 유혹·호감 신호를 받을 때 → **알아도 모른 척함 +1** / 감정 표현 크기 **-1** |\n| 3 | 조금 당황해 시선을 피하고 거리를 둔다 | 유혹·호감 신호를 받을 때 → **당황해 거리를 둠 +1** / 외향성 **-1** |\n| 4 | 상대의 달라진 점도 찾아 웃으며 말해 준다 | 유혹·호감 신호를 받을 때 → **장난스럽게 맞받음 +1** / 유머·장난 **+1** |\n| 5 | 미소를 돌려주며 조금 더 이야기를 이어 간다 | 유혹·호감 신호를 받을 때 → **은근히 받아줌 +1** / 외향성 **+1** / 애정 표현 → **말로 표현 +1** |\n\n### 12. 좁은 통로에서 사람들이 가까이 지나가고 있어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 몸을 옆으로 돌려 사람들이 지나가게 한다 | 통제·관여 **-1** / 신체 접촉 반응 → **상황에 따라 자연스럽게 받아들임 +1** |\n| 2 | 닿을까 봐 가방을 앞에 안고 빈틈을 찾는다 | 신체 접촉 반응 → **허락 없는 접촉은 불편함 +1** / 감정 자극 민감도 **+1** |\n| 3 | 먼저 지나가겠다고 분명히 말한다 | 외향성 **+1** / 통제·관여 **+1** |\n| 4 | 가까운 사람 옆에 붙어 함께 천천히 움직인다 | 신체 접촉 반응 → **가까운 사람에게만 허용함 +1** / 애정 표현 → **조용히 곁에 있음 +1** / 행동 전환 속도 **-1** |\n| 5 | 사람이 줄어들 때까지 한쪽에서 기다린다 | 충동성 **-1** / 활동 에너지 **-1** |\n\n### 13. 탁자 위에 누군가 풀다 만 작은 퍼즐이 있어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 모서리 조각부터 모아 맞춰 본다 | 계획성 **+1** / 정리·정돈 **+1** |\n| 2 | 완성된 그림을 상상하며 눈에 띄는 조각을 고른다 | 직관·상상 **+1** / 계획성 **-1** |\n| 3 | 주변 사람에게 같이 해 보자고 권한다 | 외향성 **+1** / 평소 정서의 방향 → **호기심 많은 편 +1** |\n| 4 | 끝이 보일 때까지 자리를 떠나지 않는다 | 근면함 **+1** / 감정 지속 시간 **+1** |\n| 5 | 잠깐 살펴보다 다른 것이 눈에 들어와 이동한다 | 행동 전환 속도 **+1** / 근면함 **-1** |\n\n### 14. 함께 정리한 기록에서 작은 실수를 발견했어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 틀린 부분과 근거를 표시해 함께 확인한다 | 감정·공감 중심 판단 **-1** / 갈등 대응 → **대화로 해결 +1** |\n| 2 | 상대가 무안하지 않게 따로 조용히 알려 준다 | 감정·공감 중심 판단 **+1** / 주변 감정에 물드는 정도 **+1** |\n| 3 | 바로 고치고 다음에는 확인을 맡겠다고 한다 | 통제·관여 **+1** / 근면함 **+1** |\n| 4 | 왜 또 이런 일이 생겼는지 한숨부터 나온다 | 평소 정서의 방향 → **냉소적인 편 +1** / 분노할 때 보이는 반응 → **말수가 차갑게 줄어듦 +1** / 기분 변화 폭 **+1** |\n| 5 | 급하지 않으면 잠시 쉬고 다시 보자고 한다 | 충동성 **-1** / 기분을 회복하는 방식 → **쉬거나 자면서 회복 +1** |\n\n### 15. 해야 할 일을 마쳤는데 아직 잠들기엔 이른 시간이네요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 물건을 제자리에 놓고 다음 날 준비를 해 둔다 | 정리·정돈 **+1** / 계획성 **+1** |\n| 2 | 누군가에게 연락해 오늘 있었던 일을 나눈다 | 외향성 **+1** / 기분을 회복하는 방식 → **가까운 사람과 이야기하며 회복 +1** |\n| 3 | 좋아하는 것에 몰두하다 시간이 흐르는 줄 모른다 | 기분을 회복하는 방식 → **취미에 몰두하며 회복 +1** / 계획성 **-1** |\n| 4 | 불을 낮추고 아무것도 하지 않으며 쉰다 | 활동 에너지 **-1** / 행동 전환 속도 **-1** |\n| 5 | 밖에 잠깐 나가 새로운 구경거리를 찾는다 | 활동 에너지 **+1** / 직관·상상 **+1** |\n\n### 16. 여럿이 이야기하다 잠깐 대화가 끊겼어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 편안하게 침묵을 두고 차를 한 모금 마신다 | 외향성 **-1** / 감정 자극 민감도 **-1** |\n| 2 | 방금 떠오른 우스운 일을 꺼내 분위기를 푼다 | 유머·장난 **+1** / 외향성 **+1** |\n| 3 | 표정이 어두워진 사람이 있는지 살핀다 | 주변 감정에 물드는 정도 **+1** / 감정·공감 중심 판단 **+1** |\n| 4 | 아직 결론이 나지 않은 이야기로 돌아간다 | 계획성 **+1** / 갈등 대응 → **끝까지 결론을 냄 +1** / 통제·관여 **+1** |\n| 5 | 자신이 실수했나 되짚으며 말을 고른다 | 평소 정서의 방향 → **걱정이 많은 편 +1** / 감정 자극 민감도 **+1** / 힘들 때 보이는 반응 → **아무렇지 않은 척함 +1** |\n\n### 17. 앉으려던 자리에 누군가 물건을 두고 자리를 비웠어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 다른 빈자리를 찾아 옮긴다 | 통제·관여 **-1** / 갈등 대응 → **피하는 편 +1** |\n| 2 | 주변에 자리 주인이 있는지 물어본다 | 외향성 **+1** / 감정·공감 중심 판단 **-1** |\n| 3 | 돌아올 때까지 잠시 서서 기다린다 | 충동성 **-1** / 행동 전환 속도 **-1** |\n| 4 | 담당자에게 자리를 사용할 수 있는지 확인한다 | 계획성 **+1** / 통제·관여 **+1** |\n| 5 | 계획이 틀어진 것이 신경 쓰여 주변을 서성인다 | 감정 지속 시간 **+1** / 기분 변화 폭 **+1** |\n\n### 18. 오래된 책 사이에서 짧은 메모 한 장이 떨어졌어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 원래 있던 페이지에 곱게 끼워 넣는다 | 정리·정돈 **+1** / 직관·상상 **-1** |\n| 2 | 어떤 사람이 썼을지 잠시 상상한다 | 직관·상상 **+1** / 감정 지속 시간 **+1** |\n| 3 | 주인이 알아볼 수 있도록 책 옆에 놓는다 | 통제·관여 **-1** / 계획성 **+1** |\n| 4 | 함께 있는 사람에게 발견한 것을 이야기한다 | 외향성 **+1** / 감정 표현 크기 **+1** |\n| 5 | 별일 아니라 생각하고 하던 일로 돌아간다 | 감정 지속 시간 **-1** / 행동 전환 속도 **+1** |\n\n### 19. 어디선가 익숙한 향기가 잠깐 스쳐 갔어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 향기가 나는 곳을 찾아 천천히 걸어간다 | 직관·상상 **+1** / 활동 에너지 **+1** |\n| 2 | 떠오른 기억을 조용히 되짚는다 | 외향성 **-1** / 감정 지속 시간 **+1** |\n| 3 | 곁에 있는 사람에게 무엇인지 물어본다 | 외향성 **+1** / 직관·상상 **-1** |\n| 4 | 잠깐 미소 짓고 다시 하던 일을 한다 | 감정 지속 시간 **-1** / 좋은 일이 있을 때 → **미소와 말로 표현함 +1** |\n| 5 | 기억이 선명하게 올라와 한동안 움직임을 멈춘다 | 감정 자극 민감도 **+1** / 감정 표현 크기 **-1** |\n\n### 20. 뜻밖의 안내 방송 때문에 주변 사람들이 웅성거리기 시작했어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 방송의 마지막 문장까지 듣고 내용을 정리한다 | 감정·공감 중심 판단 **-1** / 계획성 **+1** |\n| 2 | 옆 사람에게 무슨 일인지 조심히 물어본다 | 외향성 **+1** / 힘들 때 보이는 반응 → **도움을 요청함 +1** |\n| 3 | 다른 사람들의 표정을 보며 함께 걱정한다 | 주변 감정에 물드는 정도 **+1** / 평소 정서의 방향 → **걱정이 많은 편 +1** |\n| 4 | 직접 관련된 내용이 아니면 하던 일을 계속한다 | 주변 감정에 물드는 정도 **-1** / 근면함 **+1** |\n| 5 | 복잡해지기 전에 조용한 곳으로 이동한다 | 외향성 **-1** / 계획성 **+1** |\n\n### 21. 사용하려던 조명이 깜빡거리며 켜지지 않아요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 스위치와 연결 상태를 차례대로 살핀다 | 계획성 **+1** / 직관·상상 **-1** |\n| 2 | 다른 조명이 있는 곳으로 옮긴다 | 계획성 **-1** / 행동 전환 속도 **+1** |\n| 3 | 고칠 수 있는 사람에게 도움을 청한다 | 외향성 **+1** / 힘들 때 보이는 반응 → **도움을 요청함 +1** |\n| 4 | 한숨을 쉬고 잠깐 손을 놓는다 | 힘들 때 보이는 반응 → **말수가 줄어듦 +1** / 기분을 회복하는 방식 → **시간이 지나야 회복 +1** |\n| 5 | 해결될 때까지 방법을 바꿔 가며 시도한다 | 근면함 **+1** / 기분을 회복하는 방식 → **문제를 해결해야 회복 +1** |\n\n### 22. 옷깃에 작은 실밥이 보이는데 약속 시간이 다가와요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 가위를 찾아 깔끔하게 정리하고 나간다 | 정리·정돈 **+1** / 계획성 **+1** |\n| 2 | 눈에 띄지 않게 접어 두고 시간을 맞춘다 | 감정·공감 중심 판단 **-1** / 충동성 **-1** |\n| 3 | 크게 신경 쓰지 않고 그대로 나간다 | 정리·정돈 **-1** / 감정 지속 시간 **-1** |\n| 4 | 곁에 있는 사람에게 잠깐 봐 달라고 부탁한다 | 외향성 **+1** / 신체 접촉 반응 → **가까운 사람에게만 허용함 +1** |\n| 5 | 다른 옷으로 갈아입느라 서두른다 | 행동 전환 속도 **+1** / 감정 자극 민감도 **+1** |\n\n### 23. 걸어가다가 누군가 떨어뜨린 동전 소리를 들었어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 바로 뒤돌아 떨어뜨린 사람을 부른다 | 외향성 **+1** / 행동 전환 속도 **+1** |\n| 2 | 굴러간 방향을 살펴 손으로 가리켜 준다 | 직관·상상 **-1** / 애정 표현 → **행동으로 표현 +1** |\n| 3 | 상대가 찾을 때까지 옆에서 조용히 기다린다 | 행동 전환 속도 **-1** / 통제·관여 **-1** |\n| 4 | 주변에 밟히지 않도록 잠깐 길을 비켜 달라고 한다 | 통제·관여 **+1** / 외향성 **+1** |\n| 5 | 이미 찾는 것을 보고 안심하며 걸음을 이어 간다 | 감정 지속 시간 **-1** / 주변 감정에 물드는 정도 **+1** |\n\n### 24. 공용 탁자의 물건 배치가 어제와 달라졌어요.\n\n| 선택 | 플레이어에게 표시되는 행동 | 적용 가중치 |\n|---|---|---|\n| 1 | 새 배치에 맞춰 필요한 물건부터 찾는다 | 계획성 **-1** / 직관·상상 **-1** |\n| 2 | 누가 바꿨는지 물으며 이유를 들어 본다 | 외향성 **+1** / 감정·공감 중심 판단 **+1** |\n| 3 | 사용하기 편하도록 다시 정리해도 될지 묻는다 | 정리·정돈 **+1** / 통제·관여 **+1** |\n| 4 | 흥미로운 변화라 생각하고 다른 쓰임새를 떠올린다 | 직관·상상 **+1** / 평소 정서의 방향 → **호기심 많은 편 +1** |\n| 5 | 익숙한 물건이 안 보여 한동안 마음이 불편하다 | 감정 지속 시간 **+1** / 감정 자극 민감도 **+1** |\n\n## 적용 범위와 현재 수치\n\n- 전체설정의 성격·정서 25개 항목을 대상으로 합니다. 나이, 성별, 신체 정보나 관계 상대를 자동으로 바꾸는 기능은 아닙니다.\n- 문맥을 가정하는 돌발 상황형 질문입니다. 질문이 나왔다고 실제 장소 이동이나 다른 캐릭터의 행동을 강제로 발생시키지는 않습니다.\n- 최근 답한 6개 상황은 다음 질문 후보에서 제외됩니다. 질문 간격은 세션 기준 3~8분, 캐릭터 기준 최소 3분이고, 새 장면에서 35%의 확률 조건을 거칩니다. 장면 변화·열린 창·잠금 상태 등에 따라 실제 질문 간격은 더 길어질 수 있습니다.\n- 미접속 중 질문을 누적하지 않고, 돌아온 첫 장면도 질문 후보로 사용하지 않습니다.\n- 멀티에서는 본인 소유 캐릭터에만 적용합니다.\n"}]});
window.SEORAP_DATA.tasks.find(t=>t.id==="dv-discovery325").summary += " 실제 코드에서 추출한 24상황·120선택지·가중치 전체 검토표를 복사 메뉴와 직접 전달 MD 파일로 추가. 플레이어 화면에서는 가중치 비공개 유지.";

window.SEORAP_DATA.tasks.push({"id": "dv-discovery326", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "326 / 1.0.293 · 돌발 선택 확장·정보 해금 질문", "summary": "dev 9775165. 원래120행동/가중치 보존, 새72행동으로 상황별8후보 중5무작위. 정보질문13(나이/성별/키/몸무게/머리/타투). 타투있음 답변→위치→문양 조건부 랜덤 해금. 답변ID영구보존, 기존recent6이관(이전유실답변복구불가). 직접수정/잠금보존. 질문/로그7종반응동작. 가족확장진입숨김/연결제거, 데이터보존·다음프로젝트보류. 3언어x휴대폰/태블릿UI·저장·멀티모의권한·순수검사·로그연속성 통과. APK/AAB326 서명/306자산일치, 앱 전달 루트 파일. 실제2계정/Android기기/iOS미검증, iOS설정파일부재. EN/JA신규100%, 전체정적75.9%. 운영main/Play/웹/서버/공지미배포."});
window.SEORAP_DATA.updates.unshift({"version": "326 / 1.0.293 · 돌발 선택과 정보 해금", "code": 326, "date": "2026-09-10", "items": ["기존120행동 보존 + 새72행동, 각 상황8후보 중5무작위", "나이·성별·신체정보 질문13개, 직접 선택한 값을 저장", "타투있음 확인 후 위치, 위치답변 후 문양질문 랜덤해금", "답한 질문재등장방지, 질문/생활장면 반응애니메이션", "가족 전용 메뉴 다음프로젝트로 보류·기존데이터보존", "APK/AAB326 직접파일, dev9775165, 운영미배포", "신규문구영어/일본어100%, 전체정적각75.9%"]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release326-play-combined", "project": "서랍마을", "title": "326 Play 출시노트 · 한/영/일 한 번에", "replies": [{"label": "3개 언어", "code": "ko", "content": "<ko-KR>\n기존 돌발 상황에 새 행동 72개를 더해, 상황마다 8개 후보 중 5개가 무작위로 나와요.\n나이·성별·신체정보를 고르는 질문과 타투 정보에 따라 열리는 후속 질문을 추가했어요.\n답한 질문은 다시 나오지 않도록 개선했어요.\n질문과 생활 장면에 어울리는 반응 애니메이션을 추가했어요.\n</ko-KR>\n<en-US>\nAdded 72 actions to existing situations, with 5 randomly drawn from 8 candidates.\nAdded age, gender and appearance questions, plus tattoo follow-ups unlocked by earlier answers.\nAnswered questions no longer return.\nAdded reaction animations for questions and life scenes.\n</en-US>\n<ja-JP>\n既存の突発状況に72の行動を追加。8候補から5つがランダムに表示されます。\n年齢・性別・身体情報の質問と、タトゥー情報で解放される追加質問を加えました。\n回答済みの質問は再び出ないよう改善しました。\n質問と生活場面に合うリアクションの動きを追加しました。\n</ja-JP>\n"}]});
window.SEORAP_DATA.copyTemplates.unshift({"id": "release326-discovery-weights", "project": "서랍마을", "title": "326 돌발 상황·선택지·가중치·해금조건 전체 목록", "replies": [{"label": "개발자 검토용", "code": "ko", "content": "# 서랍마을 326 · 돌발 상황 / 선택지 / 가중치 전체 목록\n\n37개 상황: 기존 행동 상황 24개(각 8개 후보 중 무작위 5개) + 정보 질문 13개. 기존 120개 행동 보존, 새 행동 72개 추가. 타투 첫 질문 5개 행동, 나머지 정보 질문 12개는 드롭다운과 확인 버튼.\n\n## 읽는 방법\n\n- 플레이어 화면에는 상황과 행동 선택지만 표시됩니다. 아래 가중치는 개발자 검토용입니다.\n- 숫자형 성향은 내부 0~100 값에 +1 또는 -1을 더합니다. 0 미만·100 초과로는 움직이지 않습니다. 글자로 표시되는 성향 구간을 넘을 때 실제 설정 표현이 바뀝니다.\n- **+는 좋은 성격, -는 나쁜 성격이라는 뜻이 아닙니다.** 아래 방향표의 방향으로 변화한다는 뜻입니다.\n- **충동성 +1은 충동을 덜 참는 쪽**, -1은 더 잘 참는 쪽입니다. 전체설정 제목은 ‘충동을 참는 정도’지만, 저장된 선택지 순서가 반대이므로 이 목록에서는 혼동을 막기 위해 ‘충동성’으로 표기했습니다.\n- 회복 방식·분노 반응 등 순서를 매길 수 없는 항목은 **해당 반응 점수 +1**, 같은 항목의 다른 반응 점수 각각 -0.15입니다(점수 범위 0~20). 처음에는 현재 설정에 5점, 나머지에 0점으로 시작하고, 다른 반응의 점수가 현재 반응을 넘어야 바뀝니다. 현재 설정이 없는 경우에는 선택한 반응에서 시작합니다. 아래 표에는 +1을 받는 반응을 적었습니다.\n- 잠긴 항목은 수치나 반응 점수를 바꾸지 않습니다. 같은 선택지가 여러 성향을 건드려도 잠긴 성향만 제외합니다. 선택지의 영향이 전부 잠겨 있으면 그 답으로 설정은 바뀌지 않습니다.\n- 아래에서 언급하지 않은 성향에는 가중치가 없습니다. 효과를 추측해서 추가하지 않았습니다.\n\n## 숫자형 가중치 방향\n\n| 이 목록의 이름 | - 방향 | + 방향 |\n|---|---|---|\n| 외향성 | 혼자가 편함 | 무리의 중심 |\n| 정리·정돈 | 어질러도 편함 | 흐트러짐을 못 참음 |\n| 활동 에너지 | 집에서 충전 | 가만히 못 있음 |\n| 직관·상상 | 눈앞의 현실 중시 | 직관과 상상 중시 |\n| 계획성 | 즉흥적 | 계획적 |\n| 감정·공감 중심 판단 | 논리 우선 | 공감 우선 |\n| 통제·관여 | 방관자 | 통제광 |\n| 행동 전환 속도 | 한 가지씩 차분히 | 여러 일을 오감 |\n| 근면함 | 매우 느긋함 | 쉴 새 없이 움직임 |\n| 유머·장난 | 장난을 거의 하지 않음 | 유머로 분위기를 이끎 |\n| 기분 변화 폭 | 거의 흔들리지 않음 | 변화 폭이 큼 |\n| 감정 지속 시간 | 금방 지나감 | 매우 오래 남음 |\n| 감정 자극 민감도 | 매우 둔감함 | 매우 예민함 |\n| 주변 감정에 물드는 정도 | 거의 물들지 않음 | 매우 쉽게 물듦 |\n| 감정 표현 크기 | 표정 변화가 거의 없음 | 감정이 바로 드러남 |\n| 충동성 | 매우 잘 참음 | 거의 참지 않음 |\n\n## 진행 방식\n\n- 답한 질문 ID는 캐릭터별로 계속 저장합니다. 다음 접속과 내보내기에도 캐릭터 데이터에 포함됩니다. 이전 버전의 최근 6개 이력도 가져오지만, 이미 사라진 과거 답변은 복원할 수 없습니다.\n- 넘기기는 답변이 아니므로 나중에 다시 나올 수 있습니다. 미접속 질문은 쌓이지 않습니다.\n- 나이·성별·신체정보는 가중치로 추정하지 않습니다. 드롭다운에서 선택한 실제 값이 설정에 저장됩니다. 같은 정보의 다른 질문 변형도 답변 후 제외합니다.\n- 타투 질문의 첫 두 행동만 타투 존재와 태도를 설정합니다. 나머지 행동은 타투를 생성하지 않습니다. 타투가 있어야 위치 질문, 위치 답변 후 문양 질문이 무작위 후보에 추가됩니다. 즉시 연달아 강제로 띄우지 않습니다. 타투가 여러 개면 이 흐름은 첫 번째 타투를 다룹니다.\n- 직접 수정하거나 잠근 항목은 질문으로 덮어쓰지 않습니다. 기존 v1/구형 캐릭터의 새 정보 항목은 잠금 상태를 확인한 후 풀어 주세요.\n- 각 질문의 애니메이션은 로그 장면과 같은 움직임을 사용합니다. 움직임 줄이기/끄기 설정을 따릅니다.\n\n## 1. 약속보다 일찍 도착했어요. 상대는 아직 오는 중이에요.\n\nID: early · 애니메이션: ponder\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 조용한 구석에 앉아 가방 속을 정리한다 | 외향과 내향 -1 / 깔끔한 정도 +1 |\n| 자리와 주문을 먼저 정해 두고 메시지를 보낸다 | 인식과 판단 +1 / 통제욕 +1 |\n| 근처 골목을 둘러보다 시간이 맞으면 돌아온다 | 생활 에너지 +1 / 인식과 판단 -1 / 감각과 직관 +1 |\n| 직원에게 추천 메뉴를 물으며 이야기를 나눈다 | 외향과 내향 +1 / 유머·장난 성향 +1 |\n| 상대가 도착하면 함께 정하려고 잠시 쉰다 | 통제욕 -1 / 생활 에너지 -1 / 충동성 -1 |\n| 빈 의자에게 먼저 와 줘서 고맙다고 인사한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 아직 오지도 않은 상대의 지각 변론을 혼자 연기한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 상대보다 늦게 등장하려고 도착한 사실을 숨긴다 | 통제욕 +1 / 인식과 판단 +1 / 사고와 감정 -1 |\n\n## 2. 갑자기 비가 내려 사람들이 처마 아래로 모였어요.\n\nID: rain · 애니메이션: surprise\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 가장 안쪽에서 조용히 비가 그치길 기다린다 | 외향과 내향 -1 / 기분을 회복하는 방식 → 혼자 정리하며 회복 +1 |\n| 젖은 사람에게 자리를 내주고 옆으로 비켜선다 | 사고와 감정 +1 / 통제욕 -1 |\n| 함께 우산을 살 곳을 찾아보자고 말을 건다 | 외향과 내향 +1 / 게으름·근면함 +1 / 힘들 때 보이는 반응 → 도움을 요청함 +1 |\n| 물웅덩이가 생기는 모양을 한참 바라본다 | 감각과 직관 +1 / 행동을 전환하는 방식 -1 / 감정이 남는 시간 +1 |\n| 가방으로 머리를 가리고 가까운 가게까지 달린다 | 생활 에너지 +1 / 인식과 판단 -1 / 충동성 +1 |\n| 비에게 협상을 제안한다. 딱 집 앞까지만 참아 달라고 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 처마에서 떨어지는 물에 비장하게 손을 내밀어 결투를 신청한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 양말부터 벗고 빗속으로 걸어 나가 버린다 | 충동성 +1 / 인식과 판단 -1 / 생활 에너지 +1 |\n\n## 3. 이름이 지워진 작은 상자가 공용 공간에 놓여 있어요.\n\nID: parcel · 애니메이션: ponder\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 찾는 사람이 보도록 잘 보이는 곳에 가지런히 둔다 | 깔끔한 정도 +1 / 통제욕 -1 |\n| 주변 사람들에게 누구 물건인지 물어본다 | 외향과 내향 +1 / 게으름·근면함 +1 |\n| 포장 흔적을 살펴 어디서 왔을지 추측한다 | 감각과 직관 +1 / 행동을 전환하는 방식 -1 |\n| 담당자에게 맡기고 발견한 시간과 장소를 적는다 | 인식과 판단 +1 / 사고와 감정 -1 |\n| 다른 사람 물건이라 건드리지 않고 지나간다 | 통제욕 -1 / 게으름·근면함 -1 |\n| 상자에게 이름을 붙이고 임시 주민증을 만들어 준다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 주인 찾기 공고를 왕실의 칙령처럼 낭독한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 상자 주변에 의자를 둘러놓고 주인 귀환 환영식을 준비한다 | 통제욕 +1 / 외향과 내향 +1 / 유머·장난 성향 +1 |\n\n## 4. 옆자리 사람이 실수로 음료를 엎질렀어요.\n\nID: spill · 애니메이션: surprise\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 놀란 사람에게 괜찮다고 말하며 휴지를 건넨다 | 사고와 감정 +1 / 주변 감정에 물드는 정도 +1 / 애정 표현 → 행동으로 표현 +1 |\n| 젖으면 안 되는 물건부터 빠르게 옮긴다 | 사고와 감정 -1 / 행동을 전환하는 방식 +1 |\n| 닦는 순서를 정하고 함께 정리하자고 한다 | 통제욕 +1 / 깔끔한 정도 +1 |\n| 잠시 굳었다가 손을 떨며 자기 물건을 확인한다 | 감정 자극 민감도 +1 / 기분 변화 폭 +1 / 힘들 때 보이는 반응 → 걱정이 많아짐 +1 |\n| 가벼운 농담으로 분위기를 풀며 젖은 자리를 닦는다 | 유머·장난 성향 +1 / 평소 정서의 방향 → 매우 낙천적임 +1 / 감정이 남는 시간 -1 |\n| 살아남은 과자에게 생존을 축하한다고 속삭인다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 휴지를 망토처럼 펼치고 구조대 출동을 선언한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 자기 음료도 쏟을 뻔하다가 간신히 멈추고 아무 일 없던 척한다 | 충동성 +1 / 감정 표현의 크기 -1 / 깔끔한 정도 -1 |\n\n## 5. 처음 온 곳에서 안내판과 실제 길이 달라 보여요.\n\nID: lost · 애니메이션: ponder\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 왔던 길을 되짚으며 표지 하나씩 다시 확인한다 | 감각과 직관 -1 / 인식과 판단 +1 |\n| 지나가는 사람을 붙잡고 길을 물어본다 | 외향과 내향 +1 / 힘들 때 보이는 반응 → 도움을 요청함 +1 |\n| 눈에 들어오는 골목으로 조금 더 가 본다 | 감각과 직관 +1 / 인식과 판단 -1 / 충동성 +1 |\n| 한쪽에 멈춰 숨을 고르고 다시 생각한다 | 행동을 전환하는 방식 -1 / 충동성 -1 / 기분을 회복하는 방식 → 혼자 정리하며 회복 +1 |\n| 함께 온 사람에게 지도를 맡기고 뒤를 따른다 | 통제욕 -1 / 사고와 감정 +1 |\n| 길을 잃은 게 아니라 지도 밖을 개척 중이라고 우긴다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 지도를 거꾸로 들고 길과 눈싸움을 한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 길 찾기는 포기하고 이 동네에서 가장 맛있는 빵집부터 묻는다 | 인식과 판단 -1 / 외향과 내향 +1 / 감정이 남는 시간 -1 |\n\n## 6. 함께 세운 일정이 갑자기 취소됐어요. 잠깐 빈 시간이 생겼네요.\n\nID: change · 애니메이션: surprise\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 미뤄 둔 일을 꺼내 순서대로 처리한다 | 인식과 판단 +1 / 게으름·근면함 +1 |\n| 생각나는 곳으로 가 보자고 바로 제안한다 | 인식과 판단 -1 / 행동을 전환하는 방식 +1 |\n| 아쉬운 마음을 말하고 잠시 조용히 머문다 | 감정 표현의 크기 +1 / 감정이 남는 시간 +1 / 평소 정서의 방향 → 침울한 편 +1 |\n| 뜻밖의 휴식이라며 편한 자리를 찾는다 | 생활 에너지 -1 / 게으름·근면함 -1 / 좋은 일이 있을 때 → 조용히 만족함 +1 |\n| 다른 사람도 괜찮은지 먼저 묻는다 | 사고와 감정 +1 / 주변 감정에 물드는 정도 +1 / 애정 표현 → 말로 표현 +1 |\n| 취소된 계획을 위해 짧고 장엄한 추도사를 읊는다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 새 계획의 이름부터 정한다. 작전명은 거창해야 한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 일정을 전부 지우고 오늘은 아무도 자신을 찾지 못하게 한다 | 외향과 내향 -1 / 인식과 판단 -1 / 감정이 남는 시간 +1 |\n\n## 7. 누군가 뜻밖의 작은 선물을 건넸어요.\n\nID: gift · 애니메이션: bounce\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 말 대신 조심히 받아 들고 오래 바라본다 | 감정 표현의 크기 -1 / 감정이 남는 시간 +1 / 애정 표현 → 조용히 곁에 있음 +1 |\n| 환하게 웃으며 주변에도 보여 준다 | 감정 표현의 크기 +1 / 좋은 일이 있을 때 → 기쁨이 크게 드러남 +1 / 외향과 내향 +1 |\n| 왜 골랐는지 궁금해하며 이야기를 듣는다 | 사고와 감정 +1 / 감각과 직관 +1 |\n| 혹시 부담을 준 건 아닌지 먼저 살핀다 | 평소 정서의 방향 → 걱정이 많은 편 +1 / 좋은 일이 있을 때 → 좋은 일도 먼저 의심함 +1 / 감정 자극 민감도 +1 |\n| 고마움을 전하고 다음엔 자신이 챙기겠다고 한다 | 애정 표현 → 적극적으로 챙김 +1 / 게으름·근면함 +1 |\n| 포장지까지 가보로 지정하고 엄숙하게 보관한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 선물에게 앞으로 잘 부탁한다고 악수를 청한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 기뻐서 선물 준 사람의 손을 붙잡고 제자리에서 펄쩍 뛴다 | 감정 표현의 크기 +1 / 생활 에너지 +1 / 충동성 +1 |\n\n## 8. 조용하던 공간에서 갑자기 큰 소리가 났어요.\n\nID: noise · 애니메이션: surprise\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 소리가 난 쪽을 확인하고 하던 일을 이어 간다 | 감정 자극 민감도 -1 / 감정이 남는 시간 -1 |\n| 몸이 움찔해 잠시 말도 멈춘다 | 감정 자극 민감도 +1 / 기분 변화 폭 +1 |\n| 놀란 사람에게 다가가 괜찮은지 묻는다 | 주변 감정에 물드는 정도 +1 / 사고와 감정 +1 |\n| 불편한 표정을 숨기지 않고 조용히 해 달라고 한다 | 감정 표현의 크기 +1 / 분노할 때 보이는 반응 → 해결책을 분명히 요구함 +1 / 갈등 대응 → 바로 따짐 +1 |\n| 조용한 곳으로 자리를 옮겨 마음을 가라앉힌다 | 외향과 내향 -1 / 기분을 회복하는 방식 → 혼자 정리하며 회복 +1 / 분노할 때 보이는 반응 → 자리를 피해 식힘 +1 |\n| 소음에 맞춰 지휘하다 마지막 박자에 창문을 닫는다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 벽에게 지금 들었냐며 증인 출석을 요구한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 항의문을 썼다가 너무 잘 써서 문장부터 흐뭇하게 감상한다 | 통제욕 +1 / 인식과 판단 +1 / 감정이 남는 시간 +1 |\n\n## 9. 줄을 서 있는데 앞사람이 순서를 잘못 안 것 같아요.\n\nID: queue · 애니메이션: stretch\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 잠시 기다렸다가 조용히 순서를 설명한다 | 충동성 -1 / 갈등 대응 → 대화로 해결 +1 |\n| 바로 말을 걸어 원래 자리를 알려 준다 | 행동을 전환하는 방식 +1 / 통제욕 +1 / 분노할 때 보이는 반응 → 즉시 잘못을 따짐 +1 |\n| 작은 일이라 생각하고 그냥 기다린다 | 통제욕 -1 / 감정이 남는 시간 -1 |\n| 말은 하지 않지만 표정이 굳고 한동안 신경이 쓰인다 | 감정이 남는 시간 +1 / 힘들 때 보이는 반응 → 말수가 줄어듦 +1 / 평소 정서의 방향 → 까칠한 편 +1 |\n| 주변에 순서가 어떻게 됐는지 함께 확인한다 | 외향과 내향 +1 / 사고와 감정 -1 / 갈등 대응 → 대화로 해결 +1 |\n| 머릿속에서 앞사람 전원에게 결승 진출 번호를 붙인다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 한 칸 전진할 때마다 아주 작게 승리의 포즈를 취한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 줄이 줄어드는 속도를 재며 속으로 운영 체계를 통째로 뜯어고친다 | 통제욕 +1 / 사고와 감정 -1 / 인식과 판단 +1 |\n\n## 10. 작은 동물이 발치에 다가와 가만히 앉았어요.\n\nID: cat · 애니메이션: wave\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 움직이지 않고 동물이 먼저 다가오길 기다린다 | 충동성 -1 / 통제욕 -1 |\n| 낮은 목소리로 말을 걸며 천천히 손을 내민다 | 외향과 내향 +1 / 애정 표현 → 행동으로 표현 +1 |\n| 작은 움직임에도 놀라 한 걸음 물러난다 | 감정 자극 민감도 +1 / 신체 접촉 반응 → 갑작스러운 접촉에 쉽게 놀람 +1 |\n| 옷에 털이 묻지 않도록 자세를 고쳐 앉는다 | 깔끔한 정도 +1 / 신체 접촉 반응 → 허락 없는 접촉은 불편함 +1 |\n| 함께 있는 사람에게 웃으며 손짓해 보여 준다 | 좋은 일이 있을 때 → 주변과 기쁨을 나눔 +1 / 감정 표현의 크기 +1 |\n| 고양이에게 집세는 누가 내느냐고 진지하게 묻는다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 고양이와 눈이 마주치자 먼저 고개를 숙여 충성을 맹세한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 할 일을 전부 미루고 고양이가 먼저 떠날 때까지 버틴다 | 게으름·근면함 -1 / 감정이 남는 시간 +1 / 인식과 판단 -1 |\n\n## 11. 누군가 평소와 달라 보인다며 눈을 맞추고 웃었어요.\n\nID: compliment · 애니메이션: blush\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 무슨 뜻인지 모르고 옷을 내려다본다 | 유혹·호감 신호를 받을 때 → 눈치채지 못함 +1 / 감각과 직관 -1 |\n| 짧게 고맙다고 하고 다른 이야기로 돌린다 | 유혹·호감 신호를 받을 때 → 알아도 모른 척함 +1 / 감정 표현의 크기 -1 |\n| 조금 당황해 시선을 피하고 거리를 둔다 | 유혹·호감 신호를 받을 때 → 당황해 거리를 둠 +1 / 외향과 내향 -1 |\n| 상대의 달라진 점도 찾아 웃으며 말해 준다 | 유혹·호감 신호를 받을 때 → 장난스럽게 맞받음 +1 / 유머·장난 성향 +1 |\n| 미소를 돌려주며 조금 더 이야기를 이어 간다 | 유혹·호감 신호를 받을 때 → 은근히 받아줌 +1 / 외향과 내향 +1 / 애정 표현 → 말로 표현 +1 |\n| 앵콜을 요청했다가 자기가 더 민망해져 헛기침한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 그 칭찬의 보존 기간을 물으며 가슴에 손을 얹는다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 아직 장점이 더 남았다며 손가락을 하나씩 접어 설명한다 | 외향과 내향 +1 / 감정 표현의 크기 +1 / 통제욕 +1 |\n\n## 12. 좁은 통로에서 사람들이 가까이 지나가고 있어요.\n\nID: crowd · 애니메이션: wave\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 몸을 옆으로 돌려 사람들이 지나가게 한다 | 통제욕 -1 / 신체 접촉 반응 → 상황에 따라 자연스럽게 받아들임 +1 |\n| 닿을까 봐 가방을 앞에 안고 빈틈을 찾는다 | 신체 접촉 반응 → 허락 없는 접촉은 불편함 +1 / 감정 자극 민감도 +1 |\n| 먼저 지나가겠다고 분명히 말한다 | 외향과 내향 +1 / 통제욕 +1 |\n| 가까운 사람 옆에 붙어 함께 천천히 움직인다 | 신체 접촉 반응 → 가까운 사람에게만 허용함 +1 / 애정 표현 → 조용히 곁에 있음 +1 / 행동을 전환하는 방식 -1 |\n| 사람이 줄어들 때까지 한쪽에서 기다린다 | 충동성 -1 / 생활 에너지 -1 |\n| 군중 사이를 대단한 잠입 작전처럼 빠져나간다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 혼자 속으로 입장 음악을 깔고 당당하게 걸어간다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 친구가 놓치지 못하게 두 팔을 번쩍 들고 자기 이름을 외친다 | 외향과 내향 +1 / 감정 표현의 크기 +1 / 충동성 +1 |\n\n## 13. 탁자 위에 누군가 풀다 만 작은 퍼즐이 있어요.\n\nID: puzzle · 애니메이션: ponder\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 모서리 조각부터 모아 맞춰 본다 | 인식과 판단 +1 / 깔끔한 정도 +1 |\n| 완성된 그림을 상상하며 눈에 띄는 조각을 고른다 | 감각과 직관 +1 / 인식과 판단 -1 |\n| 주변 사람에게 같이 해 보자고 권한다 | 외향과 내향 +1 / 평소 정서의 방향 → 호기심 많은 편 +1 |\n| 끝이 보일 때까지 자리를 떠나지 않는다 | 게으름·근면함 +1 / 감정이 남는 시간 +1 |\n| 잠깐 살펴보다 다른 것이 눈에 들어와 이동한다 | 행동을 전환하는 방식 +1 / 게으름·근면함 -1 |\n| 문제에게 자백하면 선처하겠다고 속삭인다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 풀기도 전에 성공 소감을 써 두고 스스로를 압박한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 이 문제를 만든 사람과 반드시 대화해야겠다며 이를 악문다 | 통제욕 +1 / 감정이 남는 시간 +1 / 감정 자극 민감도 +1 |\n\n## 14. 함께 정리한 기록에서 작은 실수를 발견했어요.\n\nID: mistake · 애니메이션: surprise\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 틀린 부분과 근거를 표시해 함께 확인한다 | 사고와 감정 -1 / 갈등 대응 → 대화로 해결 +1 |\n| 상대가 무안하지 않게 따로 조용히 알려 준다 | 사고와 감정 +1 / 주변 감정에 물드는 정도 +1 |\n| 바로 고치고 다음에는 확인을 맡겠다고 한다 | 통제욕 +1 / 게으름·근면함 +1 |\n| 왜 또 이런 일이 생겼는지 한숨부터 나온다 | 평소 정서의 방향 → 냉소적인 편 +1 / 분노할 때 보이는 반응 → 말수가 차갑게 줄어듦 +1 / 기분 변화 폭 +1 |\n| 급하지 않으면 잠시 쉬고 다시 보자고 한다 | 충동성 -1 / 기분을 회복하는 방식 → 쉬거나 자면서 회복 +1 |\n| 실수에 작전명을 붙이고 증거 수습을 시작한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 천장을 보며 방금 장면 편집 가능하냐고 묻는다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 남이 알아차리기 전에 스스로 너무 크게 자백해 모두를 돌아보게 한다 | 감정 표현의 크기 +1 / 충동성 +1 / 외향과 내향 +1 |\n\n## 15. 해야 할 일을 마쳤는데 아직 잠들기엔 이른 시간이네요.\n\nID: evening · 애니메이션: sway\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 물건을 제자리에 놓고 다음 날 준비를 해 둔다 | 깔끔한 정도 +1 / 인식과 판단 +1 |\n| 누군가에게 연락해 오늘 있었던 일을 나눈다 | 외향과 내향 +1 / 기분을 회복하는 방식 → 가까운 사람과 이야기하며 회복 +1 |\n| 좋아하는 것에 몰두하다 시간이 흐르는 줄 모른다 | 기분을 회복하는 방식 → 취미에 몰두하며 회복 +1 / 인식과 판단 -1 |\n| 불을 낮추고 아무것도 하지 않으며 쉰다 | 생활 에너지 -1 / 행동을 전환하는 방식 -1 |\n| 밖에 잠깐 나가 새로운 구경거리를 찾는다 | 생활 에너지 +1 / 감각과 직관 +1 |\n| 오늘 하루를 심사하며 별점을 후하게 줬다가 깎는다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 그림자를 동행인 삼아 오늘 고생했다고 말한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 갑자기 내일의 자신에게 장문의 지시서를 써 내려간다 | 인식과 판단 +1 / 통제욕 +1 / 게으름·근면함 +1 |\n\n## 16. 여럿이 이야기하다 잠깐 대화가 끊겼어요.\n\nID: silence · 애니메이션: ponder\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 편안하게 침묵을 두고 차를 한 모금 마신다 | 외향과 내향 -1 / 감정 자극 민감도 -1 |\n| 방금 떠오른 우스운 일을 꺼내 분위기를 푼다 | 유머·장난 성향 +1 / 외향과 내향 +1 |\n| 표정이 어두워진 사람이 있는지 살핀다 | 주변 감정에 물드는 정도 +1 / 사고와 감정 +1 |\n| 아직 결론이 나지 않은 이야기로 돌아간다 | 인식과 판단 +1 / 갈등 대응 → 끝까지 결론을 냄 +1 / 통제욕 +1 |\n| 자신이 실수했나 되짚으며 말을 고른다 | 평소 정서의 방향 → 걱정이 많은 편 +1 / 감정 자극 민감도 +1 / 힘들 때 보이는 반응 → 아무렇지 않은 척함 +1 |\n| 침묵이 길어졌으니 이제 이름을 붙여 줘야겠다고 한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 머릿속으로만 장황하게 말하고 겉으로는 고개만 끄덕인다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 정적을 못 견디고 방금 떠오른 최악의 농담을 꺼낸다 | 유머·장난 성향 +1 / 충동성 +1 / 외향과 내향 +1 |\n\n## 17. 앉으려던 자리에 누군가 물건을 두고 자리를 비웠어요.\n\nID: seat · 애니메이션: stretch\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 다른 빈자리를 찾아 옮긴다 | 통제욕 -1 / 갈등 대응 → 피하는 편 +1 |\n| 주변에 자리 주인이 있는지 물어본다 | 외향과 내향 +1 / 사고와 감정 -1 |\n| 돌아올 때까지 잠시 서서 기다린다 | 충동성 -1 / 행동을 전환하는 방식 -1 |\n| 담당자에게 자리를 사용할 수 있는지 확인한다 | 인식과 판단 +1 / 통제욕 +1 |\n| 계획이 틀어진 것이 신경 쓰여 주변을 서성인다 | 감정이 남는 시간 +1 / 기분 변화 폭 +1 |\n| 앉기 전에 의자의 근무 경력을 묻는다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 빈자리를 왕좌처럼 바라보다 최대한 근엄하게 앉는다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 앉았다 일어났다 하며 방 안에서 가장 완벽한 각도를 찾는다 | 깔끔한 정도 +1 / 통제욕 +1 / 행동을 전환하는 방식 +1 |\n\n## 18. 오래된 책 사이에서 짧은 메모 한 장이 떨어졌어요.\n\nID: postcard · 애니메이션: sway\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 원래 있던 페이지에 곱게 끼워 넣는다 | 깔끔한 정도 +1 / 감각과 직관 -1 |\n| 어떤 사람이 썼을지 잠시 상상한다 | 감각과 직관 +1 / 감정이 남는 시간 +1 |\n| 주인이 알아볼 수 있도록 책 옆에 놓는다 | 통제욕 -1 / 인식과 판단 +1 |\n| 함께 있는 사람에게 발견한 것을 이야기한다 | 외향과 내향 +1 / 감정 표현의 크기 +1 |\n| 별일 아니라 생각하고 하던 일로 돌아간다 | 감정이 남는 시간 -1 / 행동을 전환하는 방식 +1 |\n| 답장 첫 문장을 유언장처럼 비장하게 썼다가 지운다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 우편의 긴 여정을 상상하며 종이에게 수고했다고 한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 딱 한 줄의 안부에 세 장짜리 답장을 쓰기 시작한다 | 감정 표현의 크기 +1 / 감정이 남는 시간 +1 / 외향과 내향 +1 |\n\n## 19. 어디선가 익숙한 향기가 잠깐 스쳐 갔어요.\n\nID: scent · 애니메이션: sway\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 향기가 나는 곳을 찾아 천천히 걸어간다 | 감각과 직관 +1 / 생활 에너지 +1 |\n| 떠오른 기억을 조용히 되짚는다 | 외향과 내향 -1 / 감정이 남는 시간 +1 |\n| 곁에 있는 사람에게 무엇인지 물어본다 | 외향과 내향 +1 / 감각과 직관 -1 |\n| 잠깐 미소 짓고 다시 하던 일을 한다 | 감정이 남는 시간 -1 / 좋은 일이 있을 때 → 미소와 말로 표현함 +1 |\n| 기억이 선명하게 올라와 한동안 움직임을 멈춘다 | 감정 자극 민감도 +1 / 감정 표현의 크기 -1 |\n| 코를 탐정처럼 세우고 냄새의 용의자를 추적한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 갑자기 떠오른 기억에 억울하다며 허공을 째려본다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 향을 놓치기 싫어 하던 말을 끊고 몇 걸음 되돌아간다 | 감정 자극 민감도 +1 / 충동성 +1 / 행동을 전환하는 방식 +1 |\n\n## 20. 뜻밖의 안내 방송 때문에 주변 사람들이 웅성거리기 시작했어요.\n\nID: announcement · 애니메이션: surprise\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 방송의 마지막 문장까지 듣고 내용을 정리한다 | 사고와 감정 -1 / 인식과 판단 +1 |\n| 옆 사람에게 무슨 일인지 조심히 물어본다 | 외향과 내향 +1 / 힘들 때 보이는 반응 → 도움을 요청함 +1 |\n| 다른 사람들의 표정을 보며 함께 걱정한다 | 주변 감정에 물드는 정도 +1 / 평소 정서의 방향 → 걱정이 많은 편 +1 |\n| 직접 관련된 내용이 아니면 하던 일을 계속한다 | 주변 감정에 물드는 정도 -1 / 게으름·근면함 +1 |\n| 복잡해지기 전에 조용한 곳으로 이동한다 | 외향과 내향 -1 / 인식과 판단 +1 |\n| 안내 방송보다 한 박자 늦게 혼자 복창한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 안내를 듣고도 자기 인생의 예고편처럼 받아들인다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 자기와 상관없는 안내인데도 괜히 찔려 자세를 바로잡는다 | 감정 자극 민감도 +1 / 기분 변화 폭 +1 / 깔끔한 정도 +1 |\n\n## 21. 사용하려던 조명이 깜빡거리며 켜지지 않아요.\n\nID: lamp · 애니메이션: bounce\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 스위치와 연결 상태를 차례대로 살핀다 | 인식과 판단 +1 / 감각과 직관 -1 |\n| 다른 조명이 있는 곳으로 옮긴다 | 인식과 판단 -1 / 행동을 전환하는 방식 +1 |\n| 고칠 수 있는 사람에게 도움을 청한다 | 외향과 내향 +1 / 힘들 때 보이는 반응 → 도움을 요청함 +1 |\n| 한숨을 쉬고 잠깐 손을 놓는다 | 힘들 때 보이는 반응 → 말수가 줄어듦 +1 / 기분을 회복하는 방식 → 시간이 지나야 회복 +1 |\n| 해결될 때까지 방법을 바꿔 가며 시도한다 | 게으름·근면함 +1 / 기분을 회복하는 방식 → 문제를 해결해야 회복 +1 |\n| 불빛에게 야근 수당을 챙기라고 충고한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 켜지는 순간 작은 태양 탄생이라며 손뼉을 친다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 불을 켰다 껐다 하며 혼자 극적인 등장 타이밍을 연습한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 인식과 판단 +1 |\n\n## 22. 옷깃에 작은 실밥이 보이는데 약속 시간이 다가와요.\n\nID: tag · 애니메이션: ponder\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 가위를 찾아 깔끔하게 정리하고 나간다 | 깔끔한 정도 +1 / 인식과 판단 +1 |\n| 눈에 띄지 않게 접어 두고 시간을 맞춘다 | 사고와 감정 -1 / 충동성 -1 |\n| 크게 신경 쓰지 않고 그대로 나간다 | 깔끔한 정도 -1 / 감정이 남는 시간 -1 |\n| 곁에 있는 사람에게 잠깐 봐 달라고 부탁한다 | 외향과 내향 +1 / 신체 접촉 반응 → 가까운 사람에게만 허용함 +1 |\n| 다른 옷으로 갈아입느라 서두른다 | 행동을 전환하는 방식 +1 / 감정 자극 민감도 +1 |\n| 이름표의 글씨를 범인의 필적처럼 분석한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 이름표에게 오늘은 네가 대신 사회생활 하라고 부탁한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 이름 아래 스스로 임명한 거창한 직함을 덧붙이고 싶어진다 | 통제욕 +1 / 감각과 직관 +1 / 유머·장난 성향 +1 |\n\n## 23. 걸어가다가 누군가 떨어뜨린 동전 소리를 들었어요.\n\nID: coin · 애니메이션: ponder\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 바로 뒤돌아 떨어뜨린 사람을 부른다 | 외향과 내향 +1 / 행동을 전환하는 방식 +1 |\n| 굴러간 방향을 살펴 손으로 가리켜 준다 | 감각과 직관 -1 / 애정 표현 → 행동으로 표현 +1 |\n| 상대가 찾을 때까지 옆에서 조용히 기다린다 | 행동을 전환하는 방식 -1 / 통제욕 -1 |\n| 주변에 밟히지 않도록 잠깐 길을 비켜 달라고 한다 | 통제욕 +1 / 외향과 내향 +1 |\n| 이미 찾는 것을 보고 안심하며 걸음을 이어 간다 | 감정이 남는 시간 -1 / 주변 감정에 물드는 정도 +1 |\n| 동전에게 어느 주머니 출신인지 정중히 묻는다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 주인을 찾아주는 일을 국가 기밀 작전처럼 수행한다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 동전 하나의 주인을 찾는 일에 이상할 정도로 집착한다 | 감정이 남는 시간 +1 / 게으름·근면함 +1 / 통제욕 +1 |\n\n## 24. 공용 탁자의 물건 배치가 어제와 달라졌어요.\n\nID: newtable · 애니메이션: wave\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 새 배치에 맞춰 필요한 물건부터 찾는다 | 인식과 판단 -1 / 감각과 직관 -1 |\n| 누가 바꿨는지 물으며 이유를 들어 본다 | 외향과 내향 +1 / 사고와 감정 +1 |\n| 사용하기 편하도록 다시 정리해도 될지 묻는다 | 깔끔한 정도 +1 / 통제욕 +1 |\n| 흥미로운 변화라 생각하고 다른 쓰임새를 떠올린다 | 감각과 직관 +1 / 평소 정서의 방향 → 호기심 많은 편 +1 |\n| 익숙한 물건이 안 보여 한동안 마음이 불편하다 | 감정이 남는 시간 +1 / 감정 자극 민감도 +1 |\n| 탁자와 영역 협상을 하고 팔꿈치 자리를 확보한다 | 유머·장난 성향 +1 / 감각과 직관 +1 / 감정 표현의 크기 +1 |\n| 탁자 위의 빈 공간에 보이지 않는 왕국을 세운다 | 유머·장난 성향 +1 / 충동성 +1 / 통제욕 +1 |\n| 자기 자리가 정해지기도 전에 모두의 배치를 지휘하려 든다 | 통제욕 +1 / 외향과 내향 +1 / 인식과 판단 +1 |\n\n## 25. 길에서 동년배를 만났어요. 둘은 [선택]이에요.\n\nID: profile-age-peer · 애니메이션: wave\n\n저장 필드: `ageGroup`\n\n드롭다운: 어린이 / 청소년 / 청년 / 성인 / 중년 / 장년 / 노년 / 나이 불명\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 26. 케이크 위 초를 세다가 포기했어요. 지금 나이대는 [선택]이에요.\n\nID: profile-age-cake · 애니메이션: bounce\n\n저장 필드: `ageGroup`\n\n드롭다운: 어린이 / 청소년 / 청년 / 성인 / 중년 / 장년 / 노년 / 나이 불명\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 27. 소개 카드가 이름 다음 칸에서 멈췄어요. 내 성별은 [선택]이라고 적어요.\n\nID: profile-gender-card · 애니메이션: ponder\n\n저장 필드: `gender`\n\n드롭다운: 남성 / 여성 / 그외 / 설정하지 않음\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 28. 마이크를 넘겨받았어요. 자기소개에서 성별은 [선택]으로 소개해요.\n\nID: profile-gender-intro · 애니메이션: wave\n\n저장 필드: `gender`\n\n드롭다운: 남성 / 여성 / 그외 / 설정하지 않음\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 29. 줄자가 괜히 긴장한 것 같아요. 내 키는 [선택]cm예요.\n\nID: profile-height · 애니메이션: stretch\n\n저장 필드: `bodyProfile.heightCm`\n\n드롭다운: 20 ~ 300 (1 단위)\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 30. 체중계가 숫자를 내밀었어요. 내 몸무게는 [선택]kg예요.\n\nID: profile-weight · 애니메이션: surprise\n\n저장 필드: `bodyProfile.weightKg`\n\n드롭다운: 1 ~ 300 (1 단위)\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 31. 미용사가 얼마나 남길지 물어요. 평소 머리 길이는 [선택]이에요.\n\nID: profile-hair-length · 애니메이션: sway\n\n저장 필드: `bodyProfile.appearance.hairLength`\n\n드롭다운: 숏컷 / 단발 / 어깨 길이 / 가슴 길이\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 32. 빗과 머리카락 사이에 협상이 필요해요. 머릿결은 [선택]이에요.\n\nID: profile-hair-texture · 애니메이션: sway\n\n저장 필드: `bodyProfile.appearance.hairTexture`\n\n드롭다운: 완전한 직모 / 약한 반곱슬 / 굵은 곱슬\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 33. 초상화 화가가 붓을 멈췄어요. 지금 머리색은 [선택]이에요.\n\nID: profile-hair-color · 애니메이션: ponder\n\n저장 필드: `bodyProfile.appearance.hairColor`\n\n드롭다운: 검은색 / 갈색 / 금발 / 백발·은발 / 빨간색\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 34. 누군가 머리색의 비결을 물었어요. 사실 [선택]이에요.\n\nID: profile-hair-origin · 애니메이션: ponder\n\n해금 조건: 다음 정보가 있음: bodyProfile.appearance.hairColor\n\n저장 필드: `bodyProfile.appearance.hairColorOrigin`\n\n드롭다운: 자연모 / 전체 염색\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 35. 길에서 타투한 사람을 만났어요. 문양이 잠깐 눈에 들어왔어요.\n\nID: profile-tattoo-encounter · 애니메이션: blush\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 내 몸의 타투처럼 정말 멋지다고 생각한다 | 타투 있음 · 태도: 아끼며 드러내고 싶어함 |\n| 결국 나처럼 후회할 것이라고 생각한다 | 타투 있음 · 태도: 없애고 싶어함 |\n| 내 타입은 아니라고 생각하고 지나간다 | 통제욕 -1 |\n| 아무 생각 없이 지나간다 | 감정 자극 민감도 -1 |\n| 수줍게 볼을 붉힌다 | 감정 표현의 크기 +1 |\n\n## 36. 거울 앞에서 내 타투가 눈에 들어왔어요. [선택]에 있어요.\n\nID: profile-tattoo-location · 애니메이션: ponder\n\n해금 조건: 타투가 실제로 있음\n\n저장 필드: `bodyProfile.tattoos`\n\n드롭다운: 왼팔 / 오른팔 / 왼손 / 오른손 / 왼쪽 어깨 / 오른쪽 어깨 / 등 전체 / 배·옆구리 / 왼쪽 허벅지 / 오른쪽 종아리\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n## 37. 타투에 담긴 무늬를 천천히 살펴봐요. [선택]이에요.\n\nID: profile-tattoo-design · 애니메이션: ponder\n\n해금 조건: 다음 질문에 답변함: profile-tattoo-location\n\n저장 필드: `bodyProfile.tattoos`\n\n드롭다운: 문자·문구 / 기하학 무늬 / 꽃·식물 / 동물 / 상징·문장 / 추상 무늬\n\n| 선택 후보 | 적용 내용 |\n|---|---|\n| 이렇게 기억해 두기 | 선택한 정보를 직접 저장 |\n\n"}]});

window.SEORAP_DATA.tasks.push({"id": "dv-discovery327", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "327 / 1.0.294 · 돌발 선택·건강 기록·낯선 사이 교류", "summary": "dev 78c7e0b. 기존120선택 보존, 추가72반응 재작성·양/음 가중치. 건강검진·키/체중 숫자입력·타투/약/통원 복수입력, 잠금·오래된폼 보호. 시작후 질문1개, 이후랜덤·답변제외·큐없음. 공식관계>시선>낯선상대, 중립교류4장면. 렌더배치 이름캐시. 3언어x휴대폰/태블릿 폼저장·순수회귀·로그연속성·정적성능 검사통과. APK/AAB327 서명·309자산일치. 실제80명멀티·실기기 미검증. EN 신규100%/전체76.0%, JA 신규100%/전체75.9%. 운영main/Play/웹/서버/우편미배포."});

window.SEORAP_DATA.tasks.push({"id": "dv-discovery328", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "328 / 1.0.295 · 질문받기·성향 점수·통계", "summary": "dev 9098424. 프로필 성격키워드 최대4개 안내(KO/EN/JA)·실제4개제한 확인. 민증 아이콘 질문받기, 현재 캐릭터 대상10분 기기저장 대기(누적/만료없음·기기간공유없음), 자동질문대체. 목표쪽20%보간으로 무한증감방지, 범주선호감쇠. 질문변경가능46항목4분류잠금. 전체설정접기제거·책내스크롤, 점수/반응비중, 통계26성향과캐릭터선택. KO/EN/JA x휴대폰/태블릿 폼·대기·잠금·점수·통계검증. APK/AAB328서명·310자산일치, 앱 전달 루트. 전체정적번역EN76.0%/JA76.0%. 실기기/실멀티·청구액미검증. 운영main/Play/웹/서버/우편미배포."});

window.SEORAP_DATA.tasks.push({"id": "dv-discovery329", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "329 / 1.0.296 · 취향 질문·개입하기·질문 UI", "summary": "dev a9ea81d. 관심사·취미·기술·좋아하는/싫어하는 음료 질문 추가, 기존 목록 병합·반대 취향 충돌 방지. 총44상황, 26성향 목표값과 무변화 처리, 과격한 선택지3개 추가 및 불평의 폭력성 하향. 7종 자발적 활동 제한(명령·일정·수면 제외). 질문 우측바 이동·대기 반투명·숫자 유지·+제거, 잠금 공식관계 이동, 구버전 질문 차단·인지/접촉 항목 겹침 수정. KO/EN/JA×휴대폰/태블릿6화면검증, 규칙/로그연속성 통과. 기존 생활검사는 이전부터 다른 CSS값 기대하여 실패. APK/AAB서명·311자산일치. 전체정적번역EN76.0% JA75.9%, 새문구3언어. 실제기기/실멀티 미검증. 운영앱main·Play·웹·서버·우편 미배포."});

window.SEORAP_DATA.tasks.push({"id": "dv-wardrobe330", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "330 / 1.0.297 · 공유마을 옷장 유지·선물 안내", "summary": "dev586f914. 입주/갱신 프로필에 옷 상세정보 포함, 옷장·코디 참조와 소유자 재연결·주민별 충돌방지. 이전 입주자는 이 기기의 원본 개인데이터가 남아있으면 재표시. 원본 없는 데이터 복구보장 없음. 유저우편 글만/캐릭터선물 보유물품 추가 안내, 빈 선물 목록 지원분류 안내. 실제 제보 빈목록 원인은 데이터 없어 확정불가. 단위검사·문법·웹/네이티브빌드·서명·312자산일치 확인, 실멀티/실기기 미검증. KO/EN/JA 새안내 번역, 전체EN76.0% JA75.9%. APK/AAB 루트전달. Play/서버/운영main 미배포."});

window.SEORAP_DATA.tasks.push({"id": "dv-supporter-review-20260911", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "후원자 3건 반영 · 매주 일요일 검토", "summary": "2026-09-11 pending3건 구매권한/공개이름 검토 후 승인, 공개API 확인. 매주 일요일09시 KST 정기 검토 설정, 기존9월14일00:05 슬롯확인 RDATE유지. 신청/접수안내 KO/EN/JA 일요일 반영 문구 dev b4f1a58 커밋. 앱버전330유지, 문구는 다음빌드포함(330파일에는 미포함). 우편/푸시 미발송. 전체번역 EN76.0% JA75.9% 기존측정."});

window.SEORAP_DATA.tasks.push({"id": "dv-release334", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "334 / 1.0.301 · 질문·옷장·공유사전·웹 오류 수정", "summary": "dev30b20f8. 331 후원자3명/일요일 안내 포함. 현재 표시 캐릭터 질문, 고정된 신체/기본정보 재질문 방지·성격 잠금해제. JSON/공유코드 옷장·코디 소유참조 보존, 늦게 도착한 공유사전 갱신·그룹 사전 표시. 웹 계정별 장바구니·테스트 결제 차단·BGM 재시도·안내창 겹침 수정. 재현검사/웹/Android 빌드·서명·312자산일치 통과. APK/AAB 루트 전달. 실기기/실2계정 미검증. 신규문구3언어 완료, 전체 최근측정EN76.0% JA75.9%. Play/운영웹/Apple 재심사 미배포."});

window.SEORAP_DATA.tasks.push({"id": "dv-ios-review33", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": false, "title": "iOS 재심사 · 화면 배치와 1슬롯 상품 전환", "summary": "Apple 1.0.269(32) Guideline4 화면 배치 및2.1 구매경로 확인 요청. 로그인/기존iPad영상 첨부 확인. 재촬영 요구 없음. 별도 iOS 배포 소스에 UI 수정·1슬롯1000원 상품/서버지급 연동·검증·재심사 제출 필요. 아직 수정 빌드 및 제출하지 않음."});

window.SEORAP_DATA.tasks.push({"id": "dv-web-live-20260911", "project": "서랍마을", "section": "release", "subsection": "testing", "completed": true, "title": "운영 웹 · 라이브 결제 전환", "summary": "현재 공개본6d20a22 기준으로 라이브 클라이언트키·계정별 장바구니 전달만 반영. 배포d2e27d2/Cloudflare214ab73f. 공개도메인live/accountCart확인. 서버api 기존라이브시크릿버전3으로전환ACTIVE확인(기존테스트4). 실카드결제/카드사승인 미검증. main에는동일수정9328c9c 체리픽, 개발기능 미배포. 신규사용자문구없음."});

{const t=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-ios-review33");if(t){t.title="iOS 1.0.269 (33) · UI/IAP 경로만 재심사 준비";t.summary="사용자범위축소: 가격/신규기능제외. 2f6b301 iOS브랜치 반영. 안내모달 상위표시/폭/스크롤/닫기44px, 기본상점탭 우선. 로컬iPhone/iPad KO/EN/JA 구매3상품/가로넘침검사통과. Actions34499784023 Mac빌드중. Apple심사메모에구매경로저장, 빌드교체/최종제출대기. 기존영상유지.";}}

{const t=window.SEORAP_DATA.tasks.find(t=>t.id==="dv-ios-review33");if(t){t.completed=true;t.title="iOS 1.0.269 (33) · 재심사 대기 중";t.summary="2026-09-11 01:28 KST Apple앱+기존인앱3상품 모두심사대기확인. 2f6b301/Actions34499784023성공. 안내모달겹침/폭/스크롤/닫기44px·기본상점우선배치만수정. 가격/지급/신규기능변경없음. 구매경로심사메모+회신접수·기존영상유지. iPhone/iPad크기KO/EN/JA화면검사와Mac iPad기동확인. 실카드결제추가검증없음. UI새문구없음, 3언어대응완료. 별도iOS브랜치유지.";}}

window.SEORAP_DATA.tasks.push({"id": "dv-web335-notice334", "project": "서랍마을", "type": "검수", "section": "release", "subsection": "testing", "completed": true, "title": "웹335 · PC 홈페이지 개편 / 334 누적 공지 발송", "summary": "Android334(1.0.301) 유지. 314→334 누적 공지576계정(KO569/EN3/JA4), 푸시0·우편함 조회 검증. 발송ID update-314-334-20260911-v1. 미공개 DLC 제외. 웹335: 나무 사이드메뉴·미색 PC화면, 내정보/로그인/멀티 진입, 질문/개입/할일, 앱그림 웹상점+계정장바구니. 모바일 Android HUD 유지. 설정 이동 의도 오류 수정. Chrome KO/EN/JA·모바일·계정·멀티진입·장바구니, 네이티브결제회귀, 웹모듈106 검사 통과. 실제 두계정멀티/실카드 결제 미검증. 앱dev54d8f81/0028f34, 웹공개6e459b13(drawervillage.com). 앱main은 핫픽스용 유지. 새UI/공지 번역 EN100% JA100%, 전체기존번역 재측정안함."});

window.SEORAP_DATA.tasks.push({"id": "dv-lifecycle336", "project": "서랍마을", "type": "검수", "section": "release", "subsection": "testing", "completed": true, "title": "1-1 누수 수정 · dev5bde39e / 배포 전", "summary": "영구 이메일 링크 리스너가 매렌더 누적되어 이전 편집DOM을 유지하는 경로를 Heap snapshot에서 확인. 단일 위임 리스너·화면후속프레임 정리·크레딧observer 이탈정리 수정. 20회 전:DOM90248/리스너4752 →후:398/76, 30회도 일정. 80명 이미지없는 fixture도 일정. 크레딧10회 정리·이메일1클릭1실행·메뉴9검사·3언어웹QA·빌드106 통과. 전체위치 event360/snapshot2/timeout68/interval3/frame50 및 컬렉션변경708 목록. 실계정멀티/대량이미지/실기기전체성능 미검증. Android334 유지, 공개배포안함. 문구변경없음 EN/JA 추가번역대상0."});

window.SEORAP_DATA.tasks.push({"id": "dv-cost-guard-next", "project": "서랍마을", "type": "검수", "section": "release", "subsection": "testing", "completed": false, "title": "1-2 다음 · 예산 알림과 실제 사용량 확인", "summary": "사용자 지정 순서대로 앞 단계 완료 후 진행. 제공 요금/무료할당/캐시 관련 수치는 실제 서비스 구성과 최신 공식 자료 확인 후 판단. 운영 변경·예산 설정 아직 미실행."});

window.SEORAP_DATA.tasks.push({"id": "dv-image-cost-next", "project": "서랍마을", "type": "검수", "section": "release", "subsection": "testing", "completed": false, "title": "2-1 대기 · 이미지 경로·캐시/R2 비교", "summary": "사용자 지정 순서대로 앞 단계 완료 후 진행. 제공 요금/무료할당/캐시 관련 수치는 실제 서비스 구성과 최신 공식 자료 확인 후 판단. 운영 변경·예산 설정 아직 미실행."});

window.SEORAP_DATA.tasks.push({"id": "dv-log-archive-next", "project": "서랍마을", "type": "검수", "section": "release", "subsection": "testing", "completed": false, "title": "2-2 대기 · 로그 보관 설계·이행", "summary": "사용자 지정 순서대로 앞 단계 완료 후 진행. 제공 요금/무료할당/캐시 관련 수치는 실제 서비스 구성과 최신 공식 자료 확인 후 판단. 운영 변경·예산 설정 아직 미실행."});

window.SEORAP_DATA.tasks.push({"id": "dv-multi-scale-next", "project": "서랍마을", "type": "검수", "section": "release", "subsection": "testing", "completed": false, "title": "3-2 대기 · 멀티 구독·복제·우편 비용 점검", "summary": "사용자 지정 순서대로 앞 단계 완료 후 진행. 제공 요금/무료할당/캐시 관련 수치는 실제 서비스 구성과 최신 공식 자료 확인 후 판단. 운영 변경·예산 설정 아직 미실행."});

window.SEORAP_DATA.tasks.push({"id": "dv-dictionary337", "project": "서랍마을", "type": "검수", "section": "release", "subsection": "testing", "completed": true, "title": "멀티 사전 카드·편집 복구 · dev964dc88 / 배포 전", "summary": "공유 텍스트 목록으로 우회하던 사전 진입을 공통 카드/검색/편집기로 통일. 위: 내 사전·참여 멀티그룹, 아래: 사전 분류. 장소필터 제거. 관리자 추가/수정/복제/삭제/사진, 일반회원 열람. 개인사전과 저장 분리·서버 권한/80개/동시수정 충돌 확인. 로컬360px QA와 서버테스트·기존사진공유검사·빌드106 통과. 실제계정 업로드/실기기 미검증. sharedTownApi 새 엔드포인트+앱 동시배포 필요; 현재 배포하지 않음. Android334 유지, main 변경안함. 새문구 EN100% JA100%. 이미지: 기존 Firebase Storage 유지 권장·R2 검토안 문서화, 이전/삭제 안함."});
