// TODO: replace repoUrl / demoUrl placeholders ('#') with your real GitHub / live links.
export const projects = [
  {
    id: '01',
    module: 'Data Analytics',
    title: 'Retail Price Trend & Inflation Analysis',
    summary:
      'An interactive Dash dashboard analyzing ~22,000 weekly retail price records (2020\u20132024) across 8 product categories to study inflation dynamics through Sri Lanka\u2019s 2022 economic crisis.',
    highlights: [
      'Conducted formal hypothesis testing (Shapiro-Wilk, Mann-Whitney U, Kruskal-Wallis H, Dunn\u2019s post-hoc) to statistically confirm significant price shifts across categories and time periods',
      'Built cascading filters (year/month/category/item), KPI tracking, and a custom \u201cInflation Leaderboard\u201d ranking items by percentage price increase',
      'Cleaned and structured ~22,000 raw weekly price records into an analysis-ready dataset',
    ],
    tech: ['Python', 'Pandas', 'SciPy', 'Dash', 'Plotly'],
    metric:'22,000 rows · 8 categories · 5 years of weekly data' ,
    repoUrl: 'https://github.com/Rushani-Sivakumar/Retail_Price_Trend_Analysis',
    demoUrl: '',
  },
  {
    id: '02',
    module: 'Machine Learning',
    title: 'Global AI Job Market & Salary Trends 2025',
    summary:
      'A machine learning pipeline that predicts AI/ML job salaries from job postings, comparing multiple models via cross-validation ',
    highlights: [
      'Compared Linear Regression, Ridge, and Random Forest pipelines on 15,000 job postings using 5-fold cross-validation for model selection',
      'Built one shared preprocessing pipeline handling categorical encoding, multi-hot skill features, and date-derived features across all candidate models',
      'Selected Random Forest as the best model, achieving R\u00b2 = 0.88 on held-out test data',
    ],
    tech: ['Python', 'Pandas', 'Statsmodels', 'Matplotlib'],
    metric: '27,900 rows · 3 models compared',
    repoUrl: 'https://github.com/Rushani-Sivakumar/AI_Job_Salary_Prediction',
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
