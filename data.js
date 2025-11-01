// CV Data - Easy to Update!
// Simply edit the information below to update your CV

const cvData = {
    // Personal Information
    personal: {
        name: "Francisco Fernando Roberto Pereira",
        title: "AI Researcher & Data Scientist",
        email: "francisco.fernando@ufpe.br",
        linkedin: "https://www.linkedin.com/in/engfranciscofernando/",
        github: "https://github.com/proffranciscofernando",
        location: "João Pessoa, Brazil",
        summary: "Passionate AI researcher and data scientist with expertise in machine learning, data analysis, and AI applications. PhD in Materials Science and Metallurgy from University of Cambridge. Committed to advancing AI technology and delivering innovative solutions for real-world problems."
    },

    // Work Experience
    experience: [
        {
            position: "AI Researcher",
            company: "Progress Rail, a Caterpillar Company",
            period: "June 2025 - Present",
            description: "Design and develop context-aware AI chatbots leveraging frameworks such as LangChain, LangGraph, and others.",
            highlights: [
                "Design and develop context-aware AI chatbots leveraging frameworks such as LangChain, LangGraph, and others",
                "Integrate LLMs and agentic frameworks into scalable products to improve functionality and user experience",
                "Implement RAG pipelines and manage vector databases for knowledge retrieval",
                "Prototype and deliver proofs of concept (PoC) to demonstrate AI-driven solutions for product innovation",
                "Design and facilitate AI workshops to train and upskill teams on cutting-edge technologies",
                "Collaborate with teams of scientists and quality analysts on cross-functional projects"
            ]
        },
        {
            position: "AI Researcher, Data Scientist and Lecturer",
            company: "Federal University of Pernambuco (UFPE)",
            period: "November 2020 - May 2025",
            description: "Design and conduct research in AI Applications targeting industry problems.",
            highlights: [
                "Design and conduct research in AI Applications targeting industry problems",
                "Design and structure course content for Data Science and Engineering, integrating foundational topics such as differential calculus, linear algebra and machine learning",
                "Conduct lectures, practical sessions, and workshops emphasizing hands-on applications and industry-relevant skills on topics such as classical machine learning and deep learning",
                "Develop interactive learning materials, including lecture notes, project guides, coding exercises, and case studies to connect theory with practice",
                "Write technical documents to communicate project findings to academic, industrial, and general audiences",
                "Supervise undergraduate projects, guiding students from problem definition and data collection to analysis, modeling, and implementation"
            ]
        },
        {
            position: "Postdoctoral Fellow",
            company: "Pontifical Catholic University of Rio de Janeiro (PUC-Rio)",
            period: "August 2023 - May 2024",
            description: "Clean and preprocess over 30GB of raw data from open-source government database.",
            highlights: [
                "Clean and preprocess over 30GB of raw data from open-source government database",
                "Develop and refine socio-economic indicators, attendance rates, and subject-specific scores (Mathematics, English, and Writing) along with other critical variables to enhance data analysis",
                "Implement LLM API integration to allow users to explore insights through natural language queries",
                "Fine-tune API temperature settings and apply prompt filtering to enhance accuracy, relevance, and reliability of responses",
                "Build a user-friendly, interactive web platform, freely accessible to the public",
                "Skills: Data Preprocessing and Cleaning, LLM APIs, Web Development, Backend Processing, and Cloud Deployment"
            ]
        },
        {
            position: "Junior Data Scientist",
            company: "Pontifical Catholic University of Rio de Janeiro (PUC-Rio)",
            period: "August 2023 - May 2024",
            description: "Clean and prepare data to identify patterns and generate insights.",
            highlights: [
                "Clean and prepare data to identify patterns and generate insights",
                "Create interactive visualizations to communicate results, following best practices in design and perception",
                "Develop predictive machine learning models for classification and regression, ensuring model optimization and performance evaluation",
                "Perform hyperparameter tuning and implement ensemble methods to enhance model performance",
                "Implement and manage data pipelines, build data lakes and data warehouses, and use SQL for querying and analyzing large datasets",
                "Conduct multiple projects on real-world datasets from a wind farm"
            ]
        },
        {
            position: "Postdoctoral Fellow",
            company: "University of São Paulo (USP)",
            period: "January 2020 - July 2020",
            description: "Plan and conduct controlled experiments to validate hypotheses and develop technical solutions.",
            highlights: [
                "Plan and conduct controlled experiments to validate hypotheses and develop technical solutions",
                "Utilize specialized computational simulation software to predict outcomes and optimize project performance",
                "Collect, process, and analyze data, ensuring precision and reliability in result interpretation",
                "Create detailed technical drawings using CAD tools, adhering to technical standards to support projects and experiments",
                "Evaluate input and output variables to optimize processes and enhance project outcomes",
                "Prepare technical and scientific reports covering all project stages, from planning to final presentation"
            ]
        },
        {
            position: "Exchange and Internship Program",
            company: "University of Kentucky",
            period: "July 2011 - November 2011",
            description: "Participate in an intensive English language program at the Language Centre, focusing on technical and academic communication skills.",
            highlights: [
                "Participate in an intensive English language program at the Language Centre, focusing on technical and academic communication skills",
                "Engage in classes and academic activities with graduate students",
                "Conduct an internship on the application of cameras for the automation of agricultural equipment"
            ]
        }
    ],

    // Skills (organized by category)
    skills: [
        {
            category: "Programming Languages",
            icon: "💻",
            items: ["Python", "SQL", "R", "MATLAB", "JavaScript"]
        },
        {
            category: "AI & Machine Learning",
            icon: "🤖",
            items: ["LangChain", "LangGraph", "LLM APIs", "RAG Pipelines", "Vector Databases", "Machine Learning", "Deep Learning", "Ensemble Methods"]
        },
        {
            category: "Data Science",
            icon: "📊",
            items: ["Data Preprocessing", "Data Cleaning", "Exploratory Data Analysis", "Statistical Analysis", "Data Visualization", "Predictive Modeling"]
        },
        {
            category: "Data Engineering",
            icon: "⚙️",
            items: ["Data Pipelines", "Data Lakes", "Data Warehouses", "Databricks", "ETL Processes", "Big Data Processing"]
        },
        {
            category: "Web Development",
            icon: "🌐",
            items: ["Web Development", "Backend Processing", "Cloud Deployment", "API Integration", "Interactive Dashboards"]
        },
        {
            category: "Tools & Platforms",
            icon: "🛠️",
            items: ["PyCharm", "GitHub", "Jupyter Notebooks", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch"]
        }
    ],

    // Education
    education: [
        {
            degree: "Postgraduate Diploma in Data Science and Analytics",
            institution: "Pontifical Catholic University of Rio de Janeiro",
            period: "August 2023 - May 2024",
            description: "Coursework: Python, PyCharm, Databricks, SQL, LLM APIs, GitHub"
        },
        {
            degree: "PhD in Materials Science and Metallurgy",
            institution: "University of Cambridge",
            period: "January 2015 - May 2019",
            description: "Main activities: Research and Design of Experiments, Data Processing, Computational Modelling, and Implementation of Optimization Algorithms",
            thesis: {
                title: "Extraction of Superelastic Parameter Values from Instrumented Indentation Data",
                link: "https://doi.org/10.17863/CAM.37445"
            },
            "main publication": [
                {
                    title: "Extraction of Superelastic Parameter Values from Instrumented Indentation via Iterative FEM Modelling",
                    journal: "Journal of the Mechanics and Physics of Solids",
                    link: "https://doi.org/10.1016/j.jmps.2019.04.007"
                }
            ]
        },
        {
            degree: "Master of Science in Mechanical Engineering",
            institution: "Federal University of Campina Grande",
            period: "January 2013 - March 2014",
            description: "Main activities: Research, Design of Experiments, Data Processing, and Advanced Statistical Analysis"
        },
        {
            degree: "Bachelor of Science in Mechanical Engineering",
            institution: "Federal University of Campina Grande",
            period: "April 2007 - November 2012",
            description: "Coursework: Differential Calculus, Physics, Statistics, and Principles of Design"
        }
    ],

    // Languages
    languages: [
        {
            name: "English",
            level: "Native",
            proficiency: 5
        },
        {
            name: "Spanish", 
            level: "Advanced",
            proficiency: 3
        },
        {
            name: "Portuguese",
            level: "Native",
            proficiency: 5
        }
    ],

    // Projects
    projects: [
        {
            name: "AI-Powered Web Platform for High School National Exam Data",
            description: "This project uses open data from the Brazilian High School National Exam to build a free AI-powered platform for exploring educational trends, regional disparities, and socio-economic factors through natural language queries.",
            tech: ["Python", "LLM APIs", "Web Development", "Data Preprocessing", "Cloud Deployment"],
            link: "https://github.com/proffranciscofernando/DataScience-PUCRio-MVP3"
        },
        {
            name: "Wind Energy Data Management",
            description: "Optimized turbine positioning based on peak production (noon), lowest output (10 PM), and wind directions (170-220 degrees). Found 0.94 correlation between wind speed and energy output, improving forecast accuracy.",
            tech: ["Python", "Data Pipeline Development", "Metadata Management", "SQL"],
            link: "https://github.com/proffranciscofernando/DataScience-PUCRio-MVP3"
        },
        {
            name: "Wind Farm Power Prediction",
            description: "Conducted representative train-test splits for diverse data coverage. Standardized features to enhance model performance. Optimized power output predictions using XGBoost Regressor, achieving top R² and RMSE metrics.",
            tech: ["Machine Learning", "Regression Modeling", "Ensemble Methods", "Hyperparameter Tuning"],
            link: "https://github.com/proffranciscofernando/DataScience-PUCRio-MVP2"
        },
        {
            name: "Wind Farm Data Preparation and Exploration",
            description: "Managed outliers from failures and low-performance periods in the wind turbine. Planned and conducted cleaning, data preprocessing, and EDA to identify patterns, trends, and anomalies in wind farm operations.",
            tech: ["Exploratory Data Analysis", "Data Preprocessing", "Cleaning", "Visualization"],
            link: "https://github.com/proffranciscofernando/DataScience-PUCRio-MVP1"
        }
    ]
};

// Make data globally available
window.cvData = cvData;

