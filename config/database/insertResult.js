const database = require('nedb');

const resultDB = new database({
    filename: './config/database/databaseFile/resultDB.db',
    autoload: true
});

/*
    result {
        "name" : "", 
        "short": "", 
        "content" : "", 
        "success" : ["", "", ""], 
        "language":["", ""] 
    }
*/

resultDB.insert({ "name": "Front-End", "image": "front-end", "short": "화려한 조명이 감싸는", "content" : "프론트엔드 개발자는 고객이 가장 먼저 보고, 상호작용 하는 화면을 만듭니다. 어떻게 하면 직관적이고 편리한 UI를 만들 수 있을지 고민해야 하고 멋진 디자인 감각도 필요합니다. 픽셀 단위와 디자인이 어긋나는 것에 굉장히 민감하며 성능도 물론 굉장히 신경써야 하는 화면의 예술가! 개발을 처음 시작할 때 다른 분야들에 비해 상대적으로 진입장벽이 낮기 때문에 누구나 한번쯤은 접해본 분야이지만, 그만큼 전문적인 인력을 찾기도 어렵습니다.", "success" : ["naver", "google", "facebook"], "language" : ["javascript"] }, function(err, newDoc) {});

resultDB.insert({ "name": "Back-End", "image": "back-end", "short": "밤마다 고개를 드는 노진구", "content" : "프론트엔드가 눈에 보이는 부분을 담당한다면, 백엔드는 눈에 보이지 않는 모든 부분을 다룹니다. 서버와 데이터베이스를 주로 다룹니다. 모든 서비스들이 공통적으로 필요로 하는 분야이기에 가장 흔하면서 동시에 없으면 안되는 단팥빵의 단팥과 같은 존재죠! 모두가 잠든 밤 서버와 데이터베이스는 터지기 시작합니다. 백엔드 개발자는 즉시 회사로 출근해야 합니다.", "success" : ["naver", "google", "facebook"], "language":["java", "javascript"] }, function(err, newDoc) {});

resultDB.insert({ "name": "iOS", "image": "ios", "short": "빛이 나는 솔로", "content" : " iOS 앱 개발자는 굉장히 귀합니다. 맥과 아이폰을 모두 갖고있어야 한다는 진입장벽으로 인해 같은 모바일 진영인 Android에 비해 개발자 수가 현저히 적습니다. 협업이 적기 때문에 스트레스 받을 일이 적지만, 내가 잘하고 있는지 봐줄 사람도 없어 고독하고 외롭습니다. 하지만 잘 구축된 애플의 생태계는 개발에 있어 많은 편의성을 제공해주고, 들인 노력에 비해 결과물이 이쁘고 깔끔하다는 장점이 있습니다.", "success" : ["kakaotalk", "instagram", "carrotmarket"], "language":["swift", "objectivec"] }, function(err, newDoc) {});

resultDB.insert({ "name": "Android", "image": "android", "short": "김과장 내폰에서는 안되는데?", "content" : "안드로이드 플랫폼이 모바일 기기 운영체제로서 무료공개 된 이후 세계 모바일 시장에서 가장 많이 사용되는 OS가 되었습니다. 안드로이드 개발자는 이를 이용한 어플리케이션을 개발하는 사람을 말합니다. 여러 제조사에서 수많은 화면비율과 스펙으로 개발이 이루어지고, 이 모든 환경을 고려해 개발해야 하기 때문에 번거롭고 정교한 작업이 필요합니다. 여러분 주변에 안드로이드 개발자가 있다면 가방에서 기기가 수도 없이 나와도 놀라지 마세요!", "success" : ["kakaotalk", "instagram", "carrotmarket"], "language":["kotlin", "java"] }, function(err, newDoc) {});

resultDB.insert({ "name": "빅데이터", "image": "bigdata", "short" : "알렉산드리아 도서관의 사서", "content" : "빅데이터는 4차 산업혁명이 진행되면서 더욱 중요해지고 있는 분야 중 하나입니다. 빅데이터 개발자는 빅데이터 기술을 이용하기 위해 웹 사이트나 서버, 데이터베이스 단에 환경을 구축하는 일을 합니다. 데이터 분석목적에 맞게 데이터를 명확하고 신속한 처리를 할 수 있도록 프로그램이나 플랫폼을 설계하고, 데이터를 수집하고, 데이터를 정제하는 일을 하는 겁니다.", "success" : ["amazon", "netflix", "youtube"], "language":["python", "r"] }, function(err, newDoc) {});

resultDB.insert({ "name": "AI", "image": "ai", "short" : "이분 출근은 하셨나요?", "content" : "요즘 가장 떠오르는 인공지능 개발자입니다. 복잡한 수학과 직관, 운, 그리고 높은 논문 해석 능력을 요구합니다. 하지만 이런 높은 허들에도 불구하고, 인공지능 모델 하나를 학습시키는데 드는 엄청난 시간과, 그 시간동안 딱히 할일이 없다는 것, 그리고 모델의 학습에 필요한 데이터가 준비되기 전까지는 섣불리 일을 할 수 없다는 점으로 인해 숨은 꿀보직으로 불립니다.", "success" : ["alphago", "bixby", "siri"], "language":["python"] }, function(err, newDoc) {});

resultDB.insert({ "name": "IoT", "image": "iot", "short": "생활의 관리자", "content" : "IoT는 Internet of Things의 약어로 사물인터넷을 뜻합니다. 사물 인터넷은 각종 사물에 센서와 통신 기능을 내장하여 인터넷에 연결하는 기술로 사물과 사물을 연결하는 기술을 의미합니다. 대표적으로 웨어러블 디바이스, 스마트 TV 등이 있습니다. 사물이 바이러스와 해킹의 대상이 될 수 있어 IoT 개발자는 보안 지식도 풍부해야합니다.", "success" : ["smarttv", "homekit", "gigagenie"], "language":["c"] }, function(err, newDoc) {});

resultDB.insert({ "name": "임베디드", "image": "embedded", "short": "기계에 생명을 불어넣는", "content" : "임베디드 시스템은 기계나 기타 제어가 필요한 시스템이나, 특정 기능을 수행하는 것입니다. 대표적으로 냉장고의 온도 조절 혹은 리모컨으로 TV를 조작할 수 있습니다. 또한, 실시간 계산을 필요로 하는 항공이나 자율주행 자동차 개발에 있어 제한을 많이 받기 때문에 높은 기술력을 필요로 합니다.", "success" : ["elevator", "car", "refrigerator"], "language":["c"] }, function(err, newDoc) {});

resultDB.insert({ "name": "게임", "image": "game", "short": "한 세계의 창조자", "content" : "게임 내의 등장인물과 환경과 같은 모든 것을 구현합니다. 게임에 대한 애정은 디폴트로 가지고 있어야 하죠. 멋있고 ‘말이 되는’ 세계를 만들기 위해서는 수학적 능력도 꽤 요구된답니다! 게임을 만드는 툴을 사용해 맵, 캐릭터, 사운드 등을 모두 합치고, 개연성과 아름다움을 부연하는 모든 섬세한 설정들도 게임 개발자의 손에 이루어집니다.", "success" : ["leagueoflegends", "starcraft", "maplestory"], "language":["c++", "c#"] }, function(err, newDoc) {});

resultDB.insert({ "name": "네이버 커넥트", "image": "booduck", "short": "부스트캠프 운영 마스터", "content" : "부스트캠프를 위해 이 한 몸 다바침", "success" : ["", "", ""], "language":["", ""] }, function(err, newDoc) {});

resultDB.insert({ "name": "크롱", "image": "krong", "short": "프론트엔드 ‘갓’", "content" : "프론트엔드 신입니다.", "success" : ["", "", ""], "language":["", ""] }, function(err, newDoc) {});

resultDB.insert({ "name": "호눅스", "image": "honux", "short": "백엔드 & 깃 그 자체", "content" : "백엔드와 깃을 마스터 하시면 될 수 있습니다.", "success" : ["", "", ""], "language":["", ""] }, function(err, newDoc) {});