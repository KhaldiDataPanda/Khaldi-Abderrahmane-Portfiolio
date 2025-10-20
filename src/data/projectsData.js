export const projectsData = [
  // Projects with demos AND pics (highest priority)
  {
    id: 'music-generation',
    title: 'Music Generation Based on Emotion',
    category: 'Deep Learning',
    tags: ['Deep Learning', 'Emotion Recognition', 'Audio Generation', 'Transformers'],
    description: 'AI-powered music generation system that creates music based on detected emotions from voice, face, and text input.',
    demoLink: 'https://huggingface.co/spaces/KhaldiAbderrhmane/ABO_Tears',
    image: '/Projects Pics/music-generation.jpg',
    hasDemo: true,
    hasPic: true,
    priority: 1
  },
  {
    id: 'emotion-recognition',
    title: 'Emotion Recognition (Voice/Face/Text)',
    category: 'Deep Learning',
    tags: ['Computer Vision', 'NLP', 'Audio Processing', 'Multi-Modal AI'],
    description: 'Multi-modal emotion recognition system analyzing voice, facial expressions, and text to detect human emotions with high accuracy.',
    demoLink: 'https://huggingface.co/spaces/KhaldiAbderrhmane/Text-Emotion-Recognition',
    image: '/Projects Pics/emotion-recognition.jpg',
    hasDemo: true,
    hasPic: true,
    priority: 1
  },
  {
    id: 'churn-prediction',
    title: 'Churn Prediction for Telecom & Banking',
    category: 'Machine Learning',
    tags: ['Predictive Analytics', 'LSTM', 'Gradient Boosting', 'Business Intelligence'],
    description: 'Customer churn prediction system using ensemble boosters and custom LSTMs for telecom and banking domains.',
    demoLink: 'https://banking-and-telecom-churn-predection.streamlit.app/',
    image: '/Projects Pics/churn-prediction.jpg',
    hasDemo: true,
    hasPic: true,
    priority: 1
  },
  {
    id: 'metaheuristic-frequent-items',
    title: 'Metaheuristic Frequent Items Mining',
    category: 'Algorithms',
    tags: ['Optimization', 'Data Mining', 'Metaheuristics', 'Simulation'],
    description: 'Simulation platform for frequent items mining using metaheuristic algorithms with customizable parameters.',
    demoLink: 'https://frequent-items-mining.streamlit.app/',
    image: '/Projects Pics/metaheuristic.jpg',
    hasDemo: true,
    hasPic: true,
    priority: 1
  },
  {
    id: 'crack-detection',
    title: 'Concrete Crack Detection',
    category: 'Computer Vision',
    tags: ['Computer Vision', 'CNN', 'Structural Engineering', 'Docker'],
    description: 'Building crack detection system for concrete structures, dockerized and deployed with real-time inference capabilities.',
    demoLink: 'https://crack-detection-fastapi-production.up.railway.app/',
    image: '/Projects Pics/crack-detection.jpg',
    hasDemo: true,
    hasPic: true,
    priority: 1
  },
  
  // Projects with pics only (medium priority)
  {
    id: 'medical-report-generation',
    title: 'Automated Medical Report Generation',
    category: 'Healthcare AI',
    tags: ['Computer Vision', 'NLP', 'ViT', 'LLM', 'Healthcare'],
    description: 'Novel architecture combining LLM and Vision Transformers to generate medical reports from chest X-ray images. Reduced manual reporting time by 40%. Research paper to be published soon.',
    image: '/Projects Pics/medical-report.jpg',
    hasDemo: false,
    hasPic: true,
    priority: 2
  },
  {
    id: 'rent-forecasting',
    title: 'Rent & Property Value Forecasting',
    category: 'Machine Learning',
    tags: ['Regression', 'Tree Models', 'Real Estate', 'Streamlit'],
    description: 'Property value and rent prediction system using multiple tree-based models with interactive Streamlit interface for real-time forecasting.',
    image: '/Projects Pics/rent-forecasting.jpg',
    hasDemo: false,
    hasPic: true,
    priority: 2
  },
  {
    id: 'darija-sentiment',
    title: 'Darija Sentiment Analysis',
    category: 'NLP',
    tags: ['NLP', 'Transformers', 'Siamese Networks', 'Arabic NLP'],
    description: 'Fine-tuned transformer model with siamese network architecture for sentiment analysis in Darija (Moroccan Arabic dialect).',
    image: '/Projects Pics/darija-sentiment.jpg',
    hasDemo: false,
    hasPic: true,
    priority: 2
  },
  {
    id: 'arabic-fake-news',
    title: 'Arabic Fake News Detection',
    category: 'NLP',
    tags: ['LLM', 'Text Classification', 'Fact-Checking', 'Arabic NLP'],
    description: 'Large Language Model-based system for detecting fake news in Arabic text with advanced text cleaning and preprocessing.',
    image: '/Projects Pics/fake-news.jpg',
    hasDemo: false,
    hasPic: true,
    priority: 2
  },
  {
    id: 'bus-tracking',
    title: 'Bus Tracking, Routing & Optimization',
    category: 'Optimization',
    tags: ['Reinforcement Learning', 'A* Algorithm', 'FastAPI', 'SQLite', 'Real-time Systems'],
    description: 'Intelligent bus tracking and routing system implementing A* pathfinding and RL models. Features real-time map simulation using Streamlit & FastAPI with SQLite backend.',
    image: '/Projects Pics/bus-tracking.jpg',
    hasDemo: false,
    hasPic: true,
    priority: 2
  },
  {
    id: 'arabic-ocr',
    title: 'Arabic Maghrebi Outline OCR',
    category: 'Computer Vision',
    tags: ['OCR', 'Vision Transformers', 'Arabic Text', 'Document Analysis'],
    description: 'Vision Transformer-based OCR system specialized in recognizing Arabic Maghrebi script and outline text formats.',
    image: '/Projects Pics/arabic-ocr.jpg',
    hasDemo: false,
    hasPic: true,
    priority: 2
  },
  {
    id: 'urban-audio',
    title: 'Urban Audio Classification',
    category: 'Audio Processing',
    tags: ['Audio ML', 'CNN', 'Multi-class Classification', 'Urban Computing'],
    description: 'Multi-class classification system for urban audio events using convolutional neural networks and advanced audio feature extraction.',
    image: '/Projects Pics/urban-audio.jpg',
    hasDemo: false,
    hasPic: true,
    priority: 2
  },
  
  // Projects without pics (lowest priority)
  {
    id: 'poetry-recommender',
    title: 'Poetry & Movie Recommender Library',
    category: 'Recommender Systems',
    tags: ['Python Library', 'Recommendation', 'Emotion AI', 'Content-Based Filtering'],
    description: 'Python library that recommends poetry and movies based on detected user emotions, combining content-based filtering with emotion recognition.',
    hasDemo: false,
    hasPic: false,
    priority: 3
  }
]

// Filter and sort projects by priority
export const getOrganizedProjects = () => {
  return projectsData.sort((a, b) => a.priority - b.priority)
}

// Get projects by category
export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => project.category === category)
}

// Get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id)
}
