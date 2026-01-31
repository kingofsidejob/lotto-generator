// Shared Footer Component
// Provides consistent footer with legal links and disclaimer across all pages

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="footer-container">
        <!-- Prominent Gambling Disclaimer -->
        <div class="footer-disclaimer">
          <p class="disclaimer-text">
            ⚠️ 본 사이트는 순수 엔터테인먼트 목적으로만 제공됩니다. 
            로또 번호 생성기는 무작위 번호 생성 도구이며, 당첨을 보장하거나 예측하지 않습니다.
          </p>
          <p class="gambling-help">
            도박 문제로 어려움을 겪고 계신가요? 
            <a href="https://www.kcgp.or.kr" target="_blank" rel="noopener noreferrer">한국도박문제관리센터</a> (상담전화: 1336)
          </p>
        </div>

        <div class="footer-content">
          <!-- Tools Column -->
          <div class="footer-column">
            <h3 class="footer-heading">도구</h3>
            <ul class="footer-links">
              <li><a href="/lotto.html">로또 번호 생성기</a></li>
              <li><a href="/animal-test.html">동물상 테스트</a></li>
            </ul>
          </div>

          <!-- Info Column -->
          <div class="footer-column">
            <h3 class="footer-heading">정보</h3>
            <ul class="footer-links">
              <li><a href="/about.html">소개</a></li>
              <li><a href="/blog/index.html">블로그</a></li>
              <li><a href="/contact.html">문의</a></li>
            </ul>
          </div>

          <!-- Legal Column -->
          <div class="footer-column">
            <h3 class="footer-heading">법적 고지</h3>
            <ul class="footer-links">
              <li><a href="/privacy.html">개인정보 처리방침</a></li>
              <li><a href="/terms.html">이용약관</a></li>
              <li><a href="/disclaimer.html">면책조항</a></li>
            </ul>
          </div>

          <!-- Contact Column -->
          <div class="footer-column">
            <h3 class="footer-heading">문의</h3>
            <ul class="footer-links">
              <li><a href="/contact.html">문의하기</a></li>
              <li><a href="https://www.dhlottery.co.kr" target="_blank" rel="noopener noreferrer">나눔로또 공식 사이트</a></li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
          <p class="copyright">
            &copy; ${currentYear} 로또 & 동물상. All rights reserved. | 
            <span class="entertainment-notice">Entertainment purposes only</span>
          </p>
          <p class="tech-info">
            Powered by TensorFlow.js | Hosted on Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  `;
}

// Auto-initialize when script loads
if (document.getElementById('footer-placeholder')) {
  document.getElementById('footer-placeholder').innerHTML = renderFooter();
}
