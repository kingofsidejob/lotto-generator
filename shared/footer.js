// Shared Footer Component with Legal Links
export const renderFooter = () => {
    return `
        <footer class="site-footer">
            <!-- Gambling Disclaimer Banner -->
            <div class="disclaimer-banner">
                <div class="disclaimer-container">
                    <div class="disclaimer-icon">⚠️</div>
                    <div class="disclaimer-content">
                        <strong>중요 안내:</strong> 본 사이트는 순수 엔터테인먼트 목적으로만 제공됩니다.
                        로또 번호 생성기는 무작위 번호를 생성할 뿐이며, 당첨을 보장하거나 예측하지 않습니다.
                        도박 문제로 어려움을 겪고 계시다면 <a href="https://www.kcgp.or.kr" target="_blank" rel="noopener" class="help-link">한국도박문제관리센터 (☎ 1336)</a>에 상담하세요.
                    </div>
                </div>
            </div>

            <div class="footer-content">
                <div class="footer-grid">
                    <!-- Tools Section -->
                    <div class="footer-column">
                        <h3 class="footer-heading">도구</h3>
                        <ul class="footer-links">
                            <li><a href="/lotto.html">로또 번호 생성기</a></li>
                            <li><a href="/animal-test.html">동물상 테스트</a></li>
                            <li><a href="/blog/index.html">블로그</a></li>
                        </ul>
                    </div>

                    <!-- Info Section -->
                    <div class="footer-column">
                        <h3 class="footer-heading">정보</h3>
                        <ul class="footer-links">
                            <li><a href="/about.html">사이트 소개</a></li>
                            <li><a href="/contact.html">문의하기</a></li>
                            <li><a href="https://www.dhlottery.co.kr" target="_blank" rel="noopener">나눔로또 공식 사이트 ↗</a></li>
                        </ul>
                    </div>

                    <!-- Legal Section -->
                    <div class="footer-column">
                        <h3 class="footer-heading">법적 고지</h3>
                        <ul class="footer-links">
                            <li><a href="/privacy.html">개인정보처리방침</a></li>
                            <li><a href="/terms.html">이용약관</a></li>
                            <li><a href="/disclaimer.html">면책조항</a></li>
                        </ul>
                    </div>

                    <!-- Help Section -->
                    <div class="footer-column">
                        <h3 class="footer-heading">도움</h3>
                        <ul class="footer-links">
                            <li><a href="https://www.kcgp.or.kr" target="_blank" rel="noopener">한국도박문제관리센터 ↗</a></li>
                            <li><a href="tel:1336">도박 상담 전화: 1336</a></li>
                            <li><a href="/contact.html">기술 지원</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Copyright Section -->
                <div class="footer-bottom">
                    <p class="copyright">
                        © ${new Date().getFullYear()} 로또 & 동물상. All rights reserved.
                    </p>
                    <p class="footer-note">
                        본 사이트는 Google AdSense를 사용하여 광고를 게재합니다.
                        <a href="/privacy.html">개인정보처리방침</a>에서 쿠키 사용에 대해 자세히 알아보세요.
                    </p>
                </div>
            </div>
        </footer>
    `;
};

// Auto-initialize when loaded
if (document.getElementById('footer-placeholder')) {
    document.getElementById('footer-placeholder').innerHTML = renderFooter();
}
