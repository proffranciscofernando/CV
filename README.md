# Modern Minimalist CV Webpage

A clean, professional CV webpage designed to make a great first impression on tech recruiters.

## 🎯 Features

- **Modern & Minimalist Design** - Clean layout with professional styling
- **Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Easy to Update** - All content is in `data.js` for easy editing
- **Print Friendly** - Optimized for printing/PDF export
- **Fast Loading** - Lightweight with no heavy dependencies

## 📝 How to Update Your CV

### 1. Update Personal Information

Open `data.js` and edit the `personal` section:

```javascript
personal: {
    name: "Your Name",
    title: "Your Job Title",
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
    location: "Your City, Country",
    summary: "Your professional summary here..."
}
```

### 2. Update Work Experience

Edit the `experience` array in `data.js`:

```javascript
experience: [
    {
        position: "Job Title",
        company: "Company Name",
        period: "2022 - Present",
        description: "Brief job description",
        highlights: [
            "Achievement 1",
            "Achievement 2"
        ]
    }
]
```

### 3. Update Skills

Edit the `skills` array:

```javascript
skills: [
    {
        category: "Category Name",
        icon: "💻",
        items: ["Skill 1", "Skill 2", "Skill 3"]
    }
]
```

### 4. Update Education

Edit the `education` array:

```javascript
education: [
    {
        degree: "Degree Name",
        institution: "University/Institution",
        period: "2014 - 2018",
        description: "Additional details"
    }
]
```

### 5. Update Projects

Edit the `projects` array:

```javascript
projects: [
    {
        name: "Project Name",
        description: "Project description",
        tech: ["Tech 1", "Tech 2"],
        link: "https://github.com/yourprofile/project"
    }
]
```

## 🚀 How to Use

1. **View Locally**: Simply open `index.html` in your web browser
2. **Host Online**: Upload all files to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)
3. **Export to PDF**: Open in Chrome/Edge, press Ctrl+P (Cmd+P on Mac), and save as PDF

## 📁 File Structure

```
CV/
├── index.html      # Main HTML structure
├── style.css       # All styling
├── data.js         # YOUR CV DATA (edit this!)
├── script.js       # JavaScript to populate the page
├── Foto.png        # Your profile photo
└── README.md       # This file
```

## 🎨 Customization

### Change Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main accent color */
    --text-primary: #1f2937;     /* Main text color */
    --text-secondary: #6b7280;   /* Secondary text color */
    /* ... other colors */
}
```

### Change Header Gradient

Edit the `.header` background in `style.css`:

```css
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 💡 Tips for Tech Recruiters

- Keep your summary concise (2-3 lines)
- Use action verbs in your experience highlights
- Quantify achievements when possible
- List skills most relevant to your target role first
- Include links to your best projects
- Keep the design clean and easy to scan

## 🌐 Deployment Suggestions

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch as source
5. Your CV will be live at `yourusername.github.io/repository-name`

### Netlify (Free)
1. Drag and drop the CV folder to netlify.com/drop
2. Get instant hosting with a custom URL

### Vercel (Free)
1. Import your GitHub repository to Vercel
2. Deploy with one click

## 📄 License

Feel free to use this template for your personal CV!

---

**Good luck with your job search! 🚀**

