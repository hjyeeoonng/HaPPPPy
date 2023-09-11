<style>
div#PageDiv {
  display: flex;
}
img#PageImg {
    width : 50%;
}
div#PageText {
  padding : 10px;
}
</style>

# 프로젝트에서 나의 역할
    물류비 견적 플랫폼 Forwarding Now 개발 프로젝트에서 프론트엔드 개발을 담당하였습니다. Figma를 이용하여 초기 서비스의 UX/UI를 디자인하였습니다. 이후 기업의 지원을 받아 플랫폼의 디자인을 개선하였습니다. back-end의 Rest API와 연결하여 물품 견적 리스트를 제공하는 Display페이지를 개발하였습니다. 또, 물품의 견적을 자세히 확인할 수 있는 DisplayDetail 페이지를 개발하였으며, 세부 견적 상담 완료를 알리는 DisplayComplete 페이지를 개발하였습니다. 추가적으로 페이지 라우팅 작업및 로고 제작 작업을 진행하였습니다.
### * 초기 Figma Design
<img src="frontend\src\img\figma1.JPG">
위 그림은 초기에 개발한 figma의 이미지이다. UI가 깔끔하긴 하지만, 무채색 계열의 색상을 이용하여 이미지가 단조로우며 눈에 잘 들어오지 않는다. 또한 요소별로 통일성이 부족하고, 정돈된 느낌을 주지 않는다. 디자인 멘토링을 통해 UI를 더욱 깔끔하고 보기 좋게 변경하였다. 

<br>

### * 수정된 Figma Design
<img src="frontend\src\img\figma2.JPG">
위 그림은 디자인 멘토링 후의 figma 이미지이다. 강조색을 파란색으로 정하고 디자인하여 중요한 버튼이 더욱 눈에 잘 들어오고, 선택한 버튼이 무엇인지 더욱 잘 알 수 있도록 디자인이 변경되었다. 비슷한 기능을 하는 요소끼리 통일성을 주어 더욱 정돈되고 깔끔한 느낌을 주는 것을 확인할 수 있다.  디자인 멘토링을 통하여 유저에게 친숙한 UI에 대해 고민하고, 개선해보는 시간을 가질 수 있었다. 

<br>

### * Display Page
<div id="PageDiv">
<img src="frontend\src\img\display1.JPG" id="PageImg">
<div id="PageText">업체 가상 데이터를 통해 업체별 견적을 연동하여 입력한 값을 기반으로 견적 확인이 가능한 페이지이다. 개발한 RestAPI를 통해 이용자가 입력한 물품의 정보를 받아오고, 해당 물품에 대한 정보와 견적을 나타낸다. 상단의 회색 박스에는 입력한 물품의 물품명, 견적 요청의 마감일, 업체별 견적의 평균 가액을 표시하여 나타낸다. 업체별 견적의 평균가도 물품 정보와 마찬가지로 개발한 RestAPI를 통해 받아올 수 있다. 스크롤하여 각 업체의 견적 가격을 확인할 수 있고, 세부정보 버튼을 통해 업체별 견적을 세부적으로 확인할 수 있는 페이지로 이동할 수 있도록 하였다. 하단의 물품 변경하기를 누르면 다시 물품 정보 입력페이지의 첫 화면으로 이동하여 견적을 확인하고 싶은 물품의 정보를 변경하여 변경된 물품에 대한 정보를 받아볼 수 있도록 개발하였다.
</div>
</div>

<br>

### * DisplayDetail Page
<div id="PageDiv">
<img src="frontend\src\img\display2.JPG" id="PageImg">
<div id="PageText"> 이전 견적 확인 페이지에서 세부정보 버튼을 누르면 이동할 수 있는 페이지이다. 선택한 업체에서 제공하는 견적의 세부정보를 회색 박스에 나타내었다. 회색 박스에는 이용자가 입력한 물품명과 견적 요청 마감일, 업체에서 제공하는 예상 운임과 소요 시간을 나타낼 수 있도록 하였다. 해당 정보도 개발한 RestAPI를 통해 받아볼 수 있도록 개발하였다. 뒤로 버튼을 이용해 이전의 견적 확인 페이지로 이동할 수 있고, 견적이 마음에 든다면 하단 우측의 세부상담 신청 버튼을 이용하여 견적 상담을 확정 지을 수 있다. 세부상담 신청 버튼을 누르면 세부상담 신청 완료 페이지로 이동한다.
</div>
</div>

<br>

### * DisplayComplete Page
<div id="PageDiv">
<img src="frontend\src\img\display3.JPG" id="PageImg">
<div id="PageText"> DisplayComplete 페이지는 세부상담 신청 완료 페이지를 통해 이용자에게 세부상담 신청이 정상적으로 이루어졌음을 알려주는 페이지이다. 이용자는 하단의 처음 화면으로 페이지를 통해 처음의 물품 입력 페이지로 돌아가 다음 물품의 상세 정보를 입력하여 다시 견적을 받아볼 수 있다.
</div>
</div>

<br>

### * 개발한 로고
<img src="frontend\src\img\logo1.JPG" id="PageImg">

<br>

# 프로젝트 개요

## 2023-S-VSA-HaPPPPy-4
## 물류비 견적 비교 플랫폼 Forwarding Now

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">



![badges](https://img.shields.io/badge/IDE-VSCode-informational)
![badges](https://img.shields.io/badge/axios-1.4.0-red)
![badges](https://img.shields.io/badge/npm-18.16.0-green)

### 팀원 소개
* **팀장 : 동국대학교 정보통신공학과** [**윤영서**](https://github.com/sdfjkj) dbsys1120@naver.com
* **팀원 : 동국대학교 정보통신공학과** [**김태연**](https://github.com/taeyeon0319) rlaxodus319@gmail.com
* **팀원 : 동국대학교 정보통신공학과** [**안정민**](https://github.com/102sae) 102chimee@gmail.com
* **팀원 : 동국대학교 정보통신공학과** [**전현정**](https://github.com/hjyeeoonng) j10123@naver.com

### 프로젝트 개요
화주는 LCL화물 수출입 시 물류비 견적에 대한 정보의 비대칭성으로 인해 운송주선업자 선택에 있어 한계가 있고, 운송 주선업자가 필드 영업 시 영업 사원이 직접 발로 뛰어야한다는 점에서 다양한 고객을 영입하는 데 한계가 있다는 문제점을 해결하기 위해 화주입장에서 <strong>정보의 비대칭성과 시간적 기회비용을 줄이고 운송주선업자의 화주 영업을 좀 더 원활히 하고자 화주와 운송주선업자 사이의 물류비 견적에 대한 비교 플랫폼</strong>을 설계하고자 함.


<br>

<br>

## 실행 방법
1. 필요한 패키지 설치
```
cd frontend
npm install

cd backend
npm install
```

2. 프로젝트 빌드 후 실행
```
/backend
node index.mjs

/frontend
npm start
```

## How To Use

### 1. 물품 정보 등록

<img width="293" alt="1" src="https://github.com/taeyeon0319/HaPPPPy/assets/95170874/8b2ebdb6-1707-4d15-b4b0-1ae1d6cc47c4"> &nbsp; 
<img width="299" alt="22" src="https://github.com/taeyeon0319/HaPPPPy/assets/95170874/6385a32d-9d79-47b9-9334-7b3ac759e56c"> &nbsp; 
<img width="291" alt="3" src="https://github.com/taeyeon0319/HaPPPPy/assets/95170874/c01e9cba-a93f-40e2-941d-950a28bebaa0">

- 물류 정보를 입력하는 페이지. 
<br>

### 2. 견적 확인 페이지
<img width="302" alt="3333" src="https://github.com/taeyeon0319/HaPPPPy/assets/95170874/020b9385-5b16-47a4-9341-400b3ace7a53">

- 업체 가상 데이터를 통해 업체별 견적을 연동하여 입력한 값을 기반으로 견적 확인이 가능하다. 
<br>

### 3. 견적 상세 페이지
<img width="295" alt="44" src="https://github.com/taeyeon0319/HaPPPPy/assets/95170874/43d24b4c-3f68-4350-8cf5-8ddc652b5760">

- 하단 상담 신청 버튼을 통해 해당 업체에 상담 신청이 가능하다.

