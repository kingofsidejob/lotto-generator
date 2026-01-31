import { getPersonalityByLabel } from './animal-data.js';

const MODEL_URL = 'https://teachablemachine.withgoogle.com/models/eN-GPfBEv/';

class AnimalTestController {
  constructor() {
    this.model = null;
    this.maxPredictions = 0;
    this.initElements();
    this.initEventListeners();
    this.loadModel();
  }

  initElements() {
    this.uploadArea = document.getElementById('upload-area');
    this.uploadTrigger = document.getElementById('upload-trigger');
    this.imageUpload = document.getElementById('image-upload');
    this.previewArea = document.getElementById('preview-area');
    this.previewImage = document.getElementById('preview-image');
    this.analyzeBtn = document.getElementById('analyze-btn');
    this.resetBtn = document.getElementById('reset-btn');
    this.loadingArea = document.getElementById('loading-area');
    this.resultArea = document.getElementById('result-area');
    this.resultIcon = document.getElementById('result-icon');
    this.animalType = document.getElementById('animal-type');
    this.resultDescription = document.getElementById('result-description');
    this.confidenceFill = document.getElementById('confidence-fill');
    this.confidenceText = document.getElementById('confidence-text');
    this.shareBtn = document.getElementById('share-btn');
    this.retryBtn = document.getElementById('retry-btn');
  }

  initEventListeners() {
    this.uploadTrigger.addEventListener('click', () => {
      this.imageUpload.click();
    });

    this.uploadArea.addEventListener('click', () => {
      this.imageUpload.click();
    });

    this.imageUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        this.handleImageUpload(file);
      }
    });

    this.analyzeBtn.addEventListener('click', () => {
      this.analyzeImage();
    });

    this.resetBtn.addEventListener('click', () => {
      this.reset();
    });

    this.retryBtn.addEventListener('click', () => {
      this.reset();
    });

    this.shareBtn.addEventListener('click', () => {
      this.shareResult();
    });
  }

  async loadModel() {
    try {
      const modelURL = MODEL_URL + 'model.json';
      const metadataURL = MODEL_URL + 'metadata.json';
      this.model = await tmImage.load(modelURL, metadataURL);
      this.maxPredictions = this.model.getTotalClasses();
      console.log('Model loaded successfully');
    } catch (error) {
      console.error('Error loading model:', error);
      alert('AI 모델을 불러오는데 실패했습니다. 페이지를 새로고침해주세요.');
    }
  }

  handleImageUpload(file) {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      alert('JPEG 또는 PNG 이미지만 업로드할 수 있습니다.');
      return;
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('파일 크기는 10MB를 초과할 수 없습니다.');
      return;
    }

    // Read and display preview
    const reader = new FileReader();
    reader.onload = (e) => {
      this.previewImage.src = e.target.result;
      this.uploadArea.classList.add('hidden');
      this.previewArea.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }

  async analyzeImage() {
    if (!this.model) {
      alert('AI 모델이 아직 로딩 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    // Show loading
    this.previewArea.classList.add('hidden');
    this.loadingArea.classList.remove('hidden');

    try {
      // Wait a bit for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Run prediction
      const predictions = await this.model.predict(this.previewImage);

      // Find highest prediction
      let topPrediction = predictions[0];
      for (let i = 1; i < predictions.length; i++) {
        if (predictions[i].probability > topPrediction.probability) {
          topPrediction = predictions[i];
        }
      }

      // Display result
      this.displayResult(topPrediction);
    } catch (error) {
      console.error('Error analyzing image:', error);
      alert('이미지 분석 중 오류가 발생했습니다. 다시 시도해주세요.');
      this.reset();
    }
  }

  displayResult(prediction) {
    const personality = getPersonalityByLabel(prediction.className);
    const confidence = Math.round(prediction.probability * 100);

    // Hide loading
    this.loadingArea.classList.add('hidden');

    // Update result content
    this.resultIcon.textContent = personality.icon;
    this.animalType.textContent = personality.name;

    // Build traits HTML
    const traitsHTML = personality.traits.map(trait => `
      <div class="personality-trait">
        <span class="trait-icon">${trait.icon}</span>
        <div class="trait-content">
          <h3 class="trait-title">${trait.title}</h3>
          <p class="trait-description">${trait.description}</p>
        </div>
      </div>
    `).join('');

    this.resultDescription.innerHTML = `
      <div class="personality-traits">
        ${traitsHTML}
      </div>
      <p class="personality-summary">${personality.summary}</p>
    `;

    // Animate confidence bar
    this.confidenceText.textContent = `${confidence}% 일치`;
    setTimeout(() => {
      this.confidenceFill.style.width = `${confidence}%`;
    }, 100);

    // Show result
    this.resultArea.classList.remove('hidden');

    // Store for sharing
    this.lastResult = {
      animal: personality.name,
      confidence: confidence
    };
  }

  shareResult() {
    if (!this.lastResult) return;

    const text = `나는 ${this.lastResult.animal}상! (${this.lastResult.confidence}% 일치)\n동물상 테스트 해보기: ${window.location.href}`;

    // Try Web Share API (mobile)
    if (navigator.share) {
      navigator.share({
        title: '동물상 테스트 결과',
        text: text
      }).catch(err => {
        console.log('Share cancelled or failed:', err);
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(text).then(() => {
        alert('결과가 클립보드에 복사되었습니다!');
      }).catch(() => {
        alert('공유 링크 복사에 실패했습니다.');
      });
    }
  }

  reset() {
    this.previewArea.classList.add('hidden');
    this.loadingArea.classList.add('hidden');
    this.resultArea.classList.add('hidden');
    this.uploadArea.classList.remove('hidden');
    this.imageUpload.value = '';
    this.previewImage.src = '';
    this.confidenceFill.style.width = '0%';
    this.lastResult = null;
  }
}

export const initAnimalTest = () => {
  // Only initialize on animal test page
  if (!document.getElementById('upload-area')) {
    return; // Not on animal test page, silently return
  }

  // Check if required TensorFlow.js libraries are loaded
  if (typeof tmImage === 'undefined') {
    console.error('Teachable Machine library not loaded');
    return;
  }

  new AnimalTestController();
};
