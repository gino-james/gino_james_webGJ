import React from 'react';

import ProjectCategoryCard from './ProjectCategoryCard.jsx'; 

const ProjectCategories = ({ onSelectDomain }) => {
    const domains = [
        "Data Science",
        "Web Development",
        "Flutter Development",
        "AI/ML Development"
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="projects-title">My Projects by Domain</h2>
                <p className="projects-description">Click on a domain to see related projects.</p>
                <div className="project-categories-grid md-grid-cols-2 lg-grid-cols-4">
                    {domains.map((domain, index) => (
                      
                        <ProjectCategoryCard
                            key={index}
                            domain={domain}
                            index={index}
                            onSelectDomain={onSelectDomain}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCategories;
