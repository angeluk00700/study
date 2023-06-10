const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.fotmob.com/');

  // 검색 입력창 선택자
//   const searchInputSelector = 'input[placeholder="Search"]';
  // 검색 입력창을 찾고 검색어 입력
  const searchInput = await page.$('.react-autosuggest__input');
  await searchInput.type('Min-Jae Kim');
  // 엔터 키 입력하여 검색 실행
  await searchInput.press('Enter');
  // 페이지 로딩이 완료될 때까지 대기
  await page.waitForNavigation();
  // 스크린샷
  await page.screenshot({path: 'screenshot.png'})

  await browser.close();
})();