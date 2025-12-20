export const projects = [
  
  {
    id: 1,
    title: "Projet data Warehouse",
    category: "BI",
    description: " Ecommerce Data Warehouse ETL Pipeline",
    fullDescription: "Pipeline ETL complet pour un entrepôt de données e-commerce, intégrant l'extraction, la transformation et le chargement des données.",
    technologies: ["Microsoft", "Power Bi", "SQL server"],
    features: [
      "ETL pipeline automation with SSIS",
      "Data warehouse design and implementation",
      "Power BI dashboards for analytics",
      "SQL Server database optimization"
    ],
    image: `${process.env.PUBLIC_URL}/images/datawarehouse.jpg`,
    link: "https://github.com/iyed-BenCheikhAhmed/SSIS-ETL-Pipeline-for-Ecommerce-Analytics"
  },
  {
    id: 2,
    title: "Product Management System",
    category: "Web",
    description: "  Système de gestion de produits en JavaScript",
    fullDescription: "A comprehensive product management system built with vanilla JavaScript, HTML, and CSS. It features dynamic product addition, editing, deletion, and searching capabilities, all while utilizing localStorage for data persistence.",
    technologies: ["Node.js" ,"CSS", "HTML", "JavaScript"],
    features: [
      "CRUD operations for products",
      "Search and filter functionality",
      "LocalStorage data persistence",
      "Responsive user interface"
    ],
    image: `${process.env.PUBLIC_URL}/images/Product-Management-system.jpg`,
    link: "https://github.com/iyed-BenCheikhAhmed/Product-Management-System"
  },
  {
    id: 3,
    title: "House Price Scraper",
    category: "Web",
    description: " Scraper de données immobilières au Royaume-Uni",
    fullDescription: "Un scraper de données immobilières développé en Python utilisant les bibliothèques BeautifulSoup et Requests. Il extrait des informations détaillées sur les propriétés à partir du site Rightmove.co.uk et stocke les données dans une base de données Prisma pour une analyse ultérieure.",
    technologies: ["Python", "BeautifulSoup"],
    features: [
      "Automated web scraping from Rightmove.co.uk",
      "Property data extraction and parsing",
      "Database storage with Prisma",
      "Data cleaning and validation"
    ],
    image: `${process.env.PUBLIC_URL}/images/house price web scraping.jpeg`,
    link: "https://github.com/iyed-BenCheikhAhmed/Rightmove-Property-Data-Scraper-using-Python"
  },
  {
    id: 4,
    title: "Data-Analysis",
    category: "Data Analysis",
    description: " Analyse des données Adidas",
    fullDescription: "Analyse approfondie des données de vente et de performance d'Adidas pour identifier les tendances du marché et optimiser les stratégies commerciales.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    features: [
      "Sales performance analysis",
      "Market trends identification",
      "Data visualization with Matplotlib",
      "Statistical insights and reporting"
    ],
    image: `${process.env.PUBLIC_URL}/images/data analysis.png`,
    link: "https://github.com/iyed-BenCheikhAhmed/Adidas-Data-Analysis"
  },
  {
    id: 5,
    title: "NYC Taxi Fare Prediction",
    category: "machine learning",
    description: "ML project analyzing NYC taxi data with clustering and predictions",
    fullDescription: "Machine learning project analyzing New York City taxi data using clustering, regression, and classification models with cross-validation.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    features: [
      "Hierarchical clustering analysis",
      "Regression models for fare prediction",
      "Classification algorithms implementation",
      "Cross-validation for model evaluation"
    ],
    image: `${process.env.PUBLIC_URL}/images/nyc taxi.jpg`,
    link: "https://github.com/iyed-BenCheikhAhmed/nyc-taxi-fare-prediction-ml.git"
  },
  {
    id: 6,
    title: "Paris Remarkable Trees BI Project",
    category: "BI project",
    description: "BI analysis of remarkable trees in Paris with data visualization",
    fullDescription: "Business Intelligence project analyzing Paris remarkable trees dataset with interactive dashboards, data cleaning, and visualization to explore tree species, locations, and characteristics.",
    technologies: ["Power BI", "SQL", "Python"],
    features: [
      "Interactive Power BI dashboards",
      "Tree species and location analysis",
      "Data cleaning and transformation",
      "Geographic visualization mapping"
    ],
    image: `${process.env.PUBLIC_URL}/images/paris remarkable trees.jpg`,
    link: "https://github.com/iyed-BenCheikhAhmed/projet-BI-arbres-remarquable-de-paris.git"
  },
  {
    id: 7,
    title: "Site web Weather ",
    category: "Web",
    description: "Fronted web pour consulter la météo",
    fullDescription: "Une application web qui permet aux utilisateurs de consulter les prévisions météorologiques en temps réel pour n'importe quelle ville en tunisie. .",
    technologies: ["React Native"],
    features: [
      "Real-time weather forecasts",
      "City search functionality",
      "Weather API integration",
      "Responsive design"
    ],
    image: `${process.env.PUBLIC_URL}/images/weather.png`,
    link: "https://github.com/iyed-BenCheikhAhmed/react-weather-app"
  },
  {
    id: 8,
    title: "Site E-commerce",
    category: "Web",
    description: "Plateforme de vente en ligne complète avec panier et paiement",
    fullDescription: "Un site e-commerce moderne développé avec React et Node.js. Inclut un système de panier, gestion des commandes, paiement sécurisé avec Stripe, et un panneau d'administration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Shopping cart system",
      "Secure payment with Stripe",
      "Order management",
      "Admin dashboard"
    ],
    image: `${process.env.PUBLIC_URL}/images/e-commerce.jpg`,
    link: "https://github.com/iyed-BenCheikhAhmed/Clothing-Brand-E-Commerce-Website"
  },
  {
    id: 9,
    title: "Power BI Project with GIMSI",
    category: "BI project",
    description: "BI dashboard using GIMSI methodology for performance indicators",
    fullDescription: "Business Intelligence project implementing GIMSI framework (IT Management and Information Systems) with Power BI dashboards for KPI tracking, performance analysis, and strategic decision-making.",
    technologies: ["Power BI", "GIMSI", "DAX"],
    features: [
      "GIMSI framework implementation",
      "KPI tracking dashboards",
      "Performance metrics analysis",
      "Strategic decision support tools"
    ],
    image: `${process.env.PUBLIC_URL}/images/powerbi.png`,
    link: "https://github.com/iyed-BenCheikhAhmed/powerBIproject-with-GIMSI.git"
  }
];