export const animalPersonalities = {
  lion: {
    name: '사자',
    icon: '🦁',
    traits: [
      { icon: '👑', title: '천부적인 리더십', description: '주변 사람들을 자연스럽게 이끄는 카리스마' },
      { icon: '💪', title: '당당하고 자신감 넘치는', description: '흔들리지 않는 강한 자신감' },
      { icon: '🎯', title: '목표 지향적', description: '정한 목표를 향해 거침없이 나아가는 추진력' },
      { icon: '🔥', title: '열정적이고 활동적', description: '에너지가 넘치고 항상 활기찬' },
      { icon: '🤝', title: '보호본능이 강한', description: '소중한 사람들을 지키려는 마음' }
    ],
    summary: '당신은 타고난 리더의 기질을 가진 사자상이에요! 강한 카리스마와 자신감으로 주변 사람들에게 긍정적인 영향을 미치는 당신, 앞으로도 그 멋진 모습 그대로 빛나세요!'
  },
  tiger: {
    name: '호랑이',
    icon: '🐯',
    traits: [
      { icon: '⚡', title: '강인한 정신력', description: '어떤 역경도 이겨내는 강한 정신력' },
      { icon: '🎨', title: '독립적이고 개성있는', description: '자신만의 독특한 스타일과 생각' },
      { icon: '🌟', title: '열정적이고 진취적', description: '새로운 도전을 두려워하지 않는 진취성' },
      { icon: '🎭', title: '카리스마 있는 매력', description: '독특한 아우라로 사람들의 시선을 사로잡는' },
      { icon: '💎', title: '자존감이 높은', description: '자신의 가치를 잘 알고 당당하게 표현' }
    ],
    summary: '당신은 강인함과 독립성을 겸비한 호랑이상이에요! 자신만의 길을 개척해 나가는 당신의 모습이 정말 멋져요. 계속 그 열정으로 당당하게 나아가세요!'
  }
};

export const getPersonalityByLabel = (label) => {
  const normalized = label.toLowerCase();
  if (normalized.includes('lion') || normalized.includes('사자')) {
    return animalPersonalities.lion;
  }
  if (normalized.includes('tiger') || normalized.includes('호랑이')) {
    return animalPersonalities.tiger;
  }
  return animalPersonalities.lion;
};
