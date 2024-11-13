import React, { useState } from "react";
import design from "../assets/images/design.png";
import work from "../assets/images/work.png";
import stack from "../assets/images/stack.png";
import designer from '../assets/images/avatar.jpeg';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';

function NewsCategoryNav({ activeCategory, handleCategoryClick }) {
  return (
    <div className="d-flex flex-wrap align-items-center category-nav my-3">
      <a
        href="#"
        onClick={() => handleCategoryClick('all')}
        className={`me-3 px-0 ${activeCategory === 'all' ? 'text-primary border-bottom border-primary' : 'text-secondary'}`}
        style={{ textDecoration: 'none', fontWeight: activeCategory === 'all' ? 'bold' : 'normal', fontSize: '0.9rem' }}
      >
        View all
      </a>
      <a
        href="#"
        onClick={() => handleCategoryClick('design')}
        className={`me-3 px-0 ${activeCategory === 'design' ? 'text-primary border-bottom border-primary' : 'text-secondary'}`}
        style={{ textDecoration: 'none', fontWeight: activeCategory === 'design' ? 'bold' : 'normal', fontSize: '0.9rem' }}
      >
        Design
      </a>
      <a
        href="#"
        onClick={() => handleCategoryClick('finance')}
        className={`me-3 px-0 ${activeCategory === 'finance' ? 'text-primary border-bottom border-primary' : 'text-secondary'}`}
        style={{ textDecoration: 'none', fontWeight: activeCategory === 'finance' ? 'bold' : 'normal', fontSize: '0.9rem' }}
      >
        Finance
      </a>
      <a
        href="#"
        onClick={() => handleCategoryClick('technology')}
        className={`me-3 px-0 ${activeCategory === 'technology' ? 'text-primary border-bottom border-primary' : 'text-secondary'}`}
        style={{ textDecoration: 'none', fontWeight: activeCategory === 'technology' ? 'bold' : 'normal', fontSize: '0.9rem' }}
      >
        Technology
      </a>
      <a
        href="#"
        onClick={() => handleCategoryClick('market-trends')}
        className={`me-3 px-0 ${activeCategory === 'market-trends' ? 'text-primary border-bottom border-primary' : 'text-secondary'}`}
        style={{ textDecoration: 'none', fontWeight: activeCategory === 'market-trends' ? 'bold' : 'normal', fontSize: '0.9rem' }}
      >
        Market trends
      </a>
      <a
        href="#"
        onClick={() => handleCategoryClick('etc')}
        className={`px-0 ${activeCategory === 'etc' ? 'text-primary border-bottom border-primary' : 'text-secondary'}`}
        style={{ textDecoration: 'none', fontWeight: activeCategory === 'etc' ? 'bold' : 'normal', fontSize: '0.9rem' }}
      >
        etc
      </a>
    </div>
  );
}

function ArticleGrid({ activeCategory }) {
  const articles = [
    {
      title: "UX review presentations",
      text: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      imageUrl: design,
      sourceImage: linkedin,
      author: "LinkedIn",
      date: "20 Jan 2024",
      category: "design",
    },
    {
      title: "Migrating to Linear 101",
      text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      imageUrl: work,
      sourceImage: designer,
      author: "Makenna Gouse",
      date: "19 Jan 2024",
      category: "technology",
    },
    {
      title: "Building your API stack",
      text: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      imageUrl: stack,
      sourceImage: facebook,
      author: "Facebook",
      date: "18 Jan 2024",
      category: "technology",
    },
    {
      title: "UX review presentations",
      text: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      imageUrl: design,
      sourceImage: linkedin,
      author: "LinkedIn",
      date: "20 Jan 2024",
      category: "design",
    },
    {
      title: "UX review presentations",
      text: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      imageUrl: design,
      sourceImage: linkedin,
      author: "LinkedIn",
      date: "20 Jan 2024",
      category: "design",
    },
    {
      title: "Building your API stack",
      text: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      imageUrl: stack,
      sourceImage: facebook,
      author: "Facebook",
      date: "18 Jan 2024",
      category: "technology",
    },
  ];

  // Filter articles based on the active category
  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter((article) => article.category === activeCategory);

  return (
    <div className="row">
      {filteredArticles.map((article, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100" style={{ border: "0px" }}>
            <img
              src={article.imageUrl}
              className="card-img-top"
              alt={article.title}
              style={{
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <div
              className="card-body text-start mt-3"
              style={{ width: "100%", padding: "0px" }}
            >
              <h5
                className="card-title"
                style={{
                  fontSize: "15px",
                  fontFamily: "interBold",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{article.title}</span>
                <i
                  className="bi bi-arrow-up-right"
                  style={{ fontSize: "12px" }}
                ></i>
              </h5>
              <p
                className="card-text"
                style={{ fontSize: "12px", color: "#475467" }}
              >
                {article.text}
              </p>
            </div>
            <div
              className="card-footer bg-white text-start mt-3"
              style={{ border: "none", padding: "0px" }}
            >
              <div className="d-flex align-items-center">
                <img
                  src={article.sourceImage}
                  className="rounded-circle me-2"
                  alt="Author"
                  style={{ width: '30px', height: '30px' }}
                />
                <div className="d-flex flex-column">
                  <span style={{ fontSize: '11px', color: "black", fontFamily: "interBold" }}>{article.author}</span>
                  <small style={{ fontSize: '11px', color: "grey" }}>{article.date}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
         <div className="d-flex justify-content-center mt-2">
              
              {/* Centering pagination */}
              <nav aria-label="Page navigation example">
                <ul className="pagination align-items-center text-dark">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      7
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
    </div>
  );
}

function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <NewsCategoryNav activeCategory={activeCategory} handleCategoryClick={handleCategoryClick} />
      <ArticleGrid activeCategory={activeCategory} />
    </div>
  );
}

export default ArticlesPage;
