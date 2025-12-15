export interface ProjectMeta {
  image?: string;
  description?: string;
}

export const PROJECT_META: Record<string, ProjectMeta> = {
  "apex": {
    image: "/projects/img.png",
    description:
      "Apex is a full-stack, AI-powered career assistance platform designed to streamline and enhance the entire job-search lifecycle. Built with a modular Flask-based backend, Apex integrates intelligent agents and automation tools to support users in resume optimization, job discovery, application tracking, interview preparation, and long-term career planning.",

  },

  "ai-career-coach": {
    image: "/projects/img_1.png",
    description:
      "AI Career Coach is a web application that leverages advanced AI models to analyze resumes and provide career coaching. Users can upload their resumes in PDF format and receive a comprehensive summary highlighting their skills, experience, educational background, and achievements. The app also allows users to ask specific career-related questions based on their uploaded resume.",
  },

  "sentinel": {
    image: "/projects/img_2.png",
    description:
      "Sentinel is an AI-driven performance and psychological safety monitoring platform built for teams and corporate organizations. It analyzes team chat interactions, visualizes performance trends, and provides actionable insights to boost collaboration, engagement, and productivity.",
  },

  "graphrag": {
    image: "/projects/img_3.png",
    description:
      "GraphRAG is a Flask-based API that bridges natural language queries with Neo4j graph databases by automatically translating plain English into Cypher queries. It leverages Google Gemini for natural language understanding and provides a developer-friendly REST API with CORS support for frontend integration.",
  },

  "breast-cancer-prediction": {
    image: "/projects/img_4.png",
    description:
      "A comprehensive, cross-platform web application utilizing state-of-the-art machine learning techniques to predict breast cancer malignancy based on diagnostic input data. This project features a Python-based backend for model inference and a modern JavaScript frontend for user interaction, packaged together for a seamless predictive experience.",
  },

  "text-to-sql": {
    image: "/projects/img_5.png",
    description:
      "A web application that translates natural language questions into SQL queries using a Large Language Model (LLM) and executes them on a MySQL database. Built with Flask, LangChain, and Gemini LLM.",
  },

  "eventra": {
    image: "/projects/img_6.png",
    description:
      "Eventra is an event management platform built with Flask and MySQL, providing a RESTful API for managing university events, student profiles, registrations, and organizers. It supports authentication via Supabase and includes robust endpoints for interacting with the event database.",
  },
  "odyssey": {
    image: "/projects/img_7.png",
    description:
      "Odyssey is an intelligent platform that unifies oceanographic data exploration, scientific research analysis, and AI-powered reasoning. Built using Flask, MongoDB, FAISS, and LLMs, it enables researchers to interact with ARGO float data and research papers through natural language queries, dynamic visual dashboards, and scientific chain simulations.",
  },
  "fincoachai": {
    image: "/projects/img_8.png",
    description:
      "FinCoachAI is a next-generation AI-powered financial coaching system that helps users analyze, track, and improve their financial well-being. It combines machine learning, explainable AI, and Gemini-powered financial insights to deliver personalized financial recommendations and growth strategies.",
  },
  "x-ray-image-classification": {
    image: "/projects/img_9.png",
    description:
      "A full-stack web application that allows users to upload X-ray images and receive real-time AI-powered diagnostic predictions (e.g., detecting pneumonia from chest X-rays). The backend uses a trained deep learning model (e.g., VGG16), while the frontend provides a clean, responsive interface.",
  },
  "web-scrapping": {
    image: "/projects/img_10.png",
    description:
      "This project demonstrates a complete pipeline from web scraping HTML pages, saving them as static files, then using those scraped pages in a semantic search and question-answering web application.",
  },
  "sustainability-chatbot": {
    image: "/projects/img_11.png",
    description:
      "A chatbot project focused on sustainability, built using HTML and Python. This project leverages Retrieval-Augmented Generation (RAG) techniques to handle and answer queries from multiple PDF documents.",
  },
  "map-charting-student-math-misunderstandings": {
    image: "",
    description:
      "This repository contains the final notebook submission for the MAP (Misconception Annotation Project) Kaggle competition. The objective of the competition is to develop a robust NLP-based ML model that accurately predicts student misconceptions from open-ended math explanations.",
  },
  "insurance-claim-automation": {
    image: "/projects/img_12.png",
    description:
      "This project automates the verification and approval process for health insurance claims using AI and Natural Language Processing (NLP). It provides a web interface for users to submit their claims, automatically extracts and analyzes claim data from uploaded medical bills, checks for exclusion criteria, and generates a detailed acceptance or rejection report.",
  },
  "educhat-ai": {
    image: "/projects/img_13.png",
    description:
      "EDUChat-AI is a web-based application that leverages AI and document processing to help users interact with PDF documents, chat about their contents, and grade essays using advanced language models.",
  },
  "demand-forecasting": {
    image: "",
    description:
      "This project applies Time Series Forecasting Techniques to predict weekly demand (units_sold) for various SKUs across multiple stores. The focus is on understanding historical demand patterns, identifying seasonality, and using classical forecasting models to generate accurate short-term predictions.",
  },
  "stock-market-forecasting": {
    image: "",
    description:
      "This mini project demonstrates time series forecasting of Tesla's stock prices using the Facebook Prophet library. It serves as a practical example of applying predictive analytics and time series modeling on real-world financial data.",
  },
  "energyforecastarima": {
    image: "",
    description:
      "Forecasting energy demand is crucial for grid stability, planning, and the integration of renewable energy sources. This project demonstrates how to use the ARIMA (AutoRegressive Integrated Moving Average) model for univariate time series forecasting, specifically targeting Italy’s hourly energy load data. The approach leverages modern Python data science tools and showcases a practical workflow from exploratory analysis to final forecasting.",
  },
  "medical-assistant-ai-tool": {
    image: "/projects/img_14.png",
    description:
      "A full-stack web application that uses AI to analyze blood test reports, identify abnormal parameters, explain medical insights in simple language, and provide personalized health recommendations. Built with a React frontend and a Flask backend, the tool combines Google Gemini, LangChain, and HuggingFace embeddings to deliver a seamless and intelligent medical assistant experience.",
  },
  "flask-mini-project": {
    image: "",
    description:
      "A lightweight full-stack web application built using Flask, designed to manage hotel listings. The app provides a responsive UI for browsing, adding, editing, and deleting hotel records, complete with user authentication and review functionality.",
  },
  "dashboard": {
    image: "/projects/img_15.png",
    description:
      "A responsive, single‑page dashboard built with HTML, CSS, JavaScript, and Chart.js. Originally created as part of the GDSC‑NSUT recruitment process, the project demonstrates skills in data visualization, DOM manipulation, and front‑end design.",
  },
};
