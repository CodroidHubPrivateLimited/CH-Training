# Copilot Instructions for CodroidHub Training Repository

## Repository Overview
**CodroidHub Training Repository** is a centralized hub for training program materials, student projects, and learning exercises across multiple domains (Data Science, MERN, Flutter, LLM, Figma, etc.).

### Key Architecture Principles
- **Branch-based organization**: Main branch contains structure/guidelines only; each training batch uses its own branch (e.g., `July-September,2025`)
- **Domain-first structure**: `/[Domain]/[StudentName]/` for all training materials
- **Notebook-driven learning**: Jupyter notebooks (`.ipynb`) are primary deliverables for data science/AI domains
- **Mixed media**: Python scripts (`.py`), CSVs, JSON, databases (`.db`), and documentation coexist

## Typical Student Submission Structure
Each student folder contains:
- **Daily/Weekly notebooks**: `Day4FDP.ipynb`, `Day5_Data_Augmentation.ipynb` (naming pattern: `Day[N]_[Topic].ipynb`)
- **Assignment notebooks**: `Assignment 1.ipynb`, `Assignment 2.ipynb`
- **Data files**: `.csv`, `.json`, `.db` files for practice/projects
- **Python scripts**: Standalone `.py` files for simple exercises
- **Supporting docs**: HTML exports, Word docs for problem statements

## Common Project Domains & Patterns
- **NLP/Text Processing**: Notebooks include NLTK library usage (stemming, lemmatization, tokenization, stopword removal)
  - Example: [LEM VS STEMMING.IPYNB](sourabh_16-12-2025/LEM%20VS%20STEMMING.IPYNB) demonstrates lemmatization vs. stemming comparison
- **Data Visualization**: Pandas, Plotly exercises with sample datasets
- **Web Scraping**: BeautifulSoup/Scrapy notebooks targeting platforms like Amazon
- **Data Augmentation**: Synthetic data generation and data cleaning workflows
- **API Integration**: JSON parsing and REST API concepts
- **Computer Vision**: Image processing with OpenCV basics

## Development Workflows
### For Adding Notebooks
1. Create notebook with clear naming: `Day[N]_[Topic].ipynb` or `Assignment [N].ipynb`
2. Include markdown cells explaining concepts before code cells
3. Use consistent cell structure: imports → data setup → processing → output
4. Include `nltk.download()` calls for NLP notebooks to handle dependency setup

### For Student Submissions
1. Work in personal student folder only (no cross-student modifications)
2. Use meaningful commit messages: `Added Week1 exercises`, `Completed Day4 assignment`
3. Include data files (`.csv`, `.json`) alongside notebooks for reproducibility
4. Document any assumptions or project scope in markdown cells

## Critical Conventions This Codebase Follows
- **Notebook cell ordering**: Code cells should run sequentially from top to bottom
- **NLTK-specific**: Always call `nltk.download()` at notebook start for:
  - `wordnet` (lemmatization dictionary)
  - `omw-1.4` (multilingual wordnet support)
  - `averaged_perceptron_tagger_eng` (POS tagging)
  - `stopwords` (text filtering)
- **Data cleaning pattern**: Filter tokens → remove punctuation → apply stemming/lemmatization
- **Variable naming**: Use descriptive names (`filtered_tokens`, `lemmatized_words`, `stemmed_words`)

## When AI Agents Add/Edit Content
- **Preserve student work**: Never modify existing notebooks without explicit student consent
- **Comment thoroughly**: Add markdown explanations before complex code blocks
- **Track assignments**: Use consistent naming to distinguish practice (`Day[N]`) from assignments
- **Handle dependencies**: Always include download/setup cells for external libraries (NLTK, Scrapy, etc.)
- **Test locally**: Verify notebooks run without errors before suggesting changes

## Key Directories
- `[StudentName]/` - Personal submission folder (e.g., `Abhishek/`, `Ashna/`, `sourabh_16-12-2025/`)
- `[StudentName]/data_visualization/` - Specialized subdirectories for multi-file projects
- `.github/` - Repository conventions and CI/CD configs (if applicable)
- Root `.ipynb` files - Shared training materials or templates

## Notes for AI Agents
- This is a **training/learning repository**, not a production codebase
- Students are learning Python, data science, and ML concepts; code may not follow strict production standards
- Prioritize **clarity and education** over performance optimization
- When suggesting improvements, include explanations of *why* the change matters for learning
- Be aware of repeated patterns across students (same assignments/FDP materials reused across batches)
