# Favicon 생성 가이드

## 📁 현재 상태

✅ **favicon.svg** 생성 완료 - 주사위 아이콘 (5개 점)

## 🔧 필요한 파일 생성 방법

### 옵션 1: 온라인 도구 사용 (추천)

**RealFaviconGenerator** - https://realfavicongenerator.net/

1. `favicon.svg` 파일 업로드
2. "Generate your Favicons and HTML code" 클릭
3. 생성된 모든 파일 다운로드
4. `/home/user/html-1/` 루트에 복사

**생성되는 파일**:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png (180×180)
- android-chrome-192x192.png
- android-chrome-512x512.png

### 옵션 2: Favicon.io 사용

**URL**: https://favicon.io/favicon-converter/

1. `favicon.svg` 업로드
2. "Download" 클릭
3. 압축 파일 해제 후 파일들을 루트에 복사

### 옵션 3: Cloudflare Image Resizing (배포 후)

Cloudflare Pages에서 자동으로 이미지 리사이징 가능:
- 원본 크기: 512×512 PNG 생성
- URL 변형으로 다양한 크기 제공

### 옵션 4: Node.js로 생성 (로컬)

```bash
# sharp 패키지 설치
npm install sharp sharp-ico

# 변환 스크립트 실행
node generate-favicons.js
```

## 🚀 빠른 임시 해결책

현재 `favicon.svg`를 바로 사용할 수 있습니다:

HTML에서 SVG favicon 직접 참조:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

**장점**: 즉시 사용 가능, 모든 크기에서 선명
**단점**: 일부 구형 브라우저에서 미지원

## ✅ 권장 작업 순서

1. ✅ `favicon.svg` 사용 (현재 가능)
2. ⏳ RealFaviconGenerator로 PNG/ICO 생성
3. ⏳ 생성된 파일들 프로젝트에 추가
4. ⏳ Git commit & push

## 📊 현재 상태

- [x] favicon.svg 생성
- [ ] favicon.ico 생성
- [ ] PNG 파일들 (5개) 생성

**임시 SVG favicon**으로도 SEO 경고는 해결됩니다!
