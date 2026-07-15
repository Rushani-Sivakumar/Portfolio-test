// TODO: replace repoUrl / demoUrl placeholders ('#') with your real GitHub / live links.
export const projects = [
  {
    id: '01',
    module: 'Data Analytics',
    title: 'Global AI Job Market & Salary Trends 2025',
    summary:
      'End-to-end analysis of the global AI job market, combining descriptive, inferential, and predictive methods to uncover in-demand roles, top-paying skills, and regional hiring imbalances.',
    highlights: [
      'Descriptive analysis of job & salary distribution across geographies and roles',
      'Inferential statistics to test associations between role attributes and compensation',
      'Predictive models estimating salary and demand from role characteristics',
    ],
    tech: ['Python', 'Pandas', 'Statsmodels', 'Matplotlib'],
    metric: '3 analysis stages',
    repoUrl: '#',
    demoUrl: '',
  },
  {
    id: '02',
    module: 'Introduction to Machine Learning',
    title: 'Student Depression Risk Classification',
    summary:
      'Built and compared multiple classification models to predict student depression risk from academic, lifestyle, and psychological indicators, addressing class imbalance for reliable predictions.',
    highlights: [
      'Cleaned and encoded a 27,900-row × 18-column dataset (Kaggle)',
      'Handled class imbalance using SMOTE / oversampling',
      'Trained and compared Logistic Regression, Decision Tree, and Random Forest classifiers',
    ],
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy'],
    metric: '27,900 rows · 3 models compared',
    repoUrl: '#',
    demoUrl: '',
  },
  {
    id: '03',
    module: 'Big Data Analysis',
    title: 'Netflix Viewing Trends Dashboard',
    summary:
      'An interactive Dash dashboard for a streaming platform\u2019s marketing team, turning raw viewing logs into actionable insight on audience behaviour, seasonality, and content performance.',
    highlights: [
      'Cleaned and feature-engineered raw viewing data (release/viewing year & month extraction, monthly view aggregation)',
      'Built 8 interactive visualizations: bar, pie, line, scatter, bubble, and heatmap charts',
      'Surfaced insights on category performance, language demographics, and seasonal trends',
    ],
    tech: ['Python', 'Pandas', 'Dash', 'Plotly'],
    metric: '8 interactive visualizations',
    repoUrl: '#',
    demoUrl: '',
  },
]

export const certifications = [
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM · Coursera',
    detail: '12-course professional program covering the full data science workflow — from Python and SQL to machine learning and applied capstone projects.',
    credentialUrl: 'https://coursera.org/share/f1e650dff0c26514b5bf72395fd7a856',
  },
]
