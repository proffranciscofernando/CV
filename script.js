// CV Page Script - Populates the page with data from data.js

document.addEventListener('DOMContentLoaded', function() {
    const data = window.cvData;

    // Populate Personal Information
    populatePersonalInfo(data.personal);

    // Populate Sections
    populateExperience(data.experience);
    populateSkills(data.skills);
    populateEducation(data.education);
    populateLanguages(data.languages);
    populateProjects(data.projects);
});

function populatePersonalInfo(personal) {
    // Update name and title
    document.getElementById('name').textContent = personal.name;
    document.getElementById('title').textContent = personal.title;
    document.getElementById('summary').textContent = personal.summary;

    // Update contact links
    const contactLinks = document.getElementById('contact-links');
    contactLinks.innerHTML = `
        <a href="mailto:${personal.email}" class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Email
        </a>
        <a href="${personal.linkedin}" target="_blank" class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
        </a>
        <a href="${personal.github}" target="_blank" class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
        </a>
        <span class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${personal.location}
        </span>
    `;
}

function populateExperience(experiences) {
    const container = document.getElementById('experience-container');
    container.innerHTML = '';

    experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'timeline-item';

        const highlightsHTML = exp.highlights 
            ? `<ul>${exp.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
            : '';

        expItem.innerHTML = `
            <h3>${exp.position}</h3>
            <div class="company">${exp.company}</div>
            <div class="period">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                ${exp.period}
            </div>
            <p class="description">${exp.description}</p>
            ${highlightsHTML}
        `;

        container.appendChild(expItem);
    });
}

function populateSkills(skills) {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';

    skills.forEach(skillGroup => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category';

        const tagsHTML = skillGroup.items
            .map(skill => `<span class="skill-tag">${skill}</span>`)
            .join('');

        skillCard.innerHTML = `
            <h3><span>${skillGroup.icon}</span> ${skillGroup.category}</h3>
            <div class="skill-tags">
                ${tagsHTML}
            </div>
        `;

        container.appendChild(skillCard);
    });
}

function populateEducation(educationList) {
    const container = document.getElementById('education-container');
    container.innerHTML = '';

    educationList.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'timeline-item';

        let thesisHTML = '';
        if (edu.thesis) {
            thesisHTML = `
                <div class="thesis-section">
                    <h4>Thesis:</h4>
                    <a href="${edu.thesis.link}" target="_blank" class="thesis-link">
                        ${edu.thesis.title} →
                    </a>
                </div>
            `;
        }

        let publicationsHTML = '';
        if (edu["main publication"] && edu["main publication"].length > 0) {
            publicationsHTML = `
                <div class="publications-section">
                    <h4>Publication:</h4>
                    <ul class="publications-list">
                        ${edu["main publication"].map(pub => `
                            <li>
                                <a href="${pub.link}" target="_blank" class="publication-link">
                                    ${pub.title}
                                </a>
                                <span class="publication-journal"> - ${pub.journal}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

        eduItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <div class="company">${edu.institution}</div>
            <div class="period">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                ${edu.period}
            </div>
            <p class="description">${edu.description}</p>
            ${thesisHTML}
            ${publicationsHTML}
        `;

        container.appendChild(eduItem);
    });
}

function populateLanguages(languages) {
    const container = document.getElementById('languages-container');
    container.innerHTML = '';

    languages.forEach(lang => {
        const langItem = document.createElement('div');
        langItem.className = 'language-item';

        const proficiencyDots = Array.from({length: 5}, (_, i) => 
            `<span class="proficiency-dot ${i < lang.proficiency ? 'active' : ''}"></span>`
        ).join('');

        langItem.innerHTML = `
            <div class="language-name">${lang.name}</div>
            <div class="language-level">${lang.level}</div>
            <div class="language-proficiency">
                ${proficiencyDots}
            </div>
        `;

        container.appendChild(langItem);
    });
}

function populateProjects(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'timeline-item';

        const techStackHTML = project.tech
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');

        let highlightsHTML = '';
        if (project.highlights && project.highlights.length > 0) {
            highlightsHTML = `
                <ul>
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            `;
        }

        const linkHTML = project.link 
            ? `<a href="${project.link}" target="_blank" class="project-link">View Project →</a>`
            : '';

        projectItem.innerHTML = `
            <h3>${project.name}</h3>
            <p class="description">${project.description}</p>
            ${highlightsHTML}
            <div class="tech-stack">
                ${techStackHTML}
            </div>
            ${linkHTML}
        `;

        container.appendChild(projectItem);
    });
}

