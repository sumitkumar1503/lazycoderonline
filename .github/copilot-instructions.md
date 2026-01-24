# LazyCoder Online - AI Coding Assistant Instructions

## Project Overview
LazyCoder is a static web portal showcasing programming project source code (Java Spring Boot, Python Django, PHP, Android, AI/ML) for students. The site uses Bootstrap 5 for responsive design with dynamically loaded component templates.

## Architecture Pattern: Component-Based Static Site

### Key Structure
- **Entry Point**: [index.html](../index.html) - Home page with hero section, 10 category cards, and featured projects
- **Reusable Components** (loaded dynamically):
  - [components/navbar.html](../components/navbar.html) - Navigation with category dropdown
  - [components/footer.html](../components/footer.html) - Social links and legal pages
- **Page Template**: All `.html` files follow consistent structure with navbar/footer placeholders
- **JavaScript Integration**: [js/main.js](../js/main.js) - Single file handling component injection via `fetch()` API

### Why This Pattern
Component loading via `fetch()` avoids HTML duplication across pages (index, about, contact, privacy, etc.) while maintaining static deployability on GitHub Pages.

## Developer Workflows

### Adding a New Page
1. Create new `.html` file with navbar/footer placeholders:
   ```html
   <div id="navbar-placeholder"></div>
   <!-- Page content -->
   <div id="footer-placeholder"></div>
   <script src="js/main.js"></script>
   ```
2. No build step required; pages are immediately deployable
3. Add navigation link to [navbar.html](../components/navbar.html) dropdown or menu

### Styling Conventions
- **Framework**: Bootstrap 5.3.0 (via CDN)
- **Icons**: Font Awesome 6.4.0 (via CDN)
- **Custom Styles**: Inline in `<style>` tags in page `<head>`
- **Key Classes Used**: `cat-card` (hover transform), `section-title` (green underline), `.float-wa` (fixed WhatsApp button)

### Color Scheme
- Primary Green: `#28a745` (accent, button hover)
- Dark: `#2c3e50` (hero overlay, navbar)
- Light Gray: `#f8f9fa` (body background)

## Critical Patterns

### Component Injection Pattern
```javascript
// In js/main.js - repeating pattern for navbar/footer
fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
    });
```
- Every `.html` page must include both navbar and footer placeholders
- Placeholders use specific IDs: `navbar-placeholder` and `footer-placeholder`
- Script must load after DOM content is parsed

### Navigation & Routing
- **Categories Dropdown** (navbar.html): Links use hash anchors (`#java`, `#python`, etc.) pointing to section IDs on index.html
- **Page Links**: Use relative paths (`href="about.html"`, `href="index.html"`)
- **Social Links**: Currently placeholder hrefs (`href="#"`); update when social profiles exist

### Multi-Technology Showcase
Project cards highlight 6+ technology stacks (Java, Python, PHP, Android, AI/ML, Data Science). When adding project sections:
- Match card styling in index.html `.cat-card` with hover transform
- Use Font Awesome icons matching the tech (`.fab fa-java`, `.fab fa-python`)
- Maintain consistent grid layout (`col-6 col-md-3`)

## Common Modifications

### Update Project Categories
Edit [index.html](../index.html) in the "10 CATEGORIES SECTION" (lines ~50-120). Each category is a Bootstrap grid column with `.cat-card` class.

### Add New Static Page
1. Copy structure from [about.html](../about.html) or [contact.html](../contact.html)
2. Ensure navbar/footer placeholders are present
3. Include `<script src="js/main.js"></script>` before closing body
4. Add link to [navbar.html](../components/navbar.html)

### Styling Custom Elements
Inline styles in page `<head>` follow this pattern:
- Hover states use `transform: translateY(-5px)` for subtle lift
- Borders and shadows use `rgba(0,0,0,0.1)` for depth
- Responsive breakpoints: `col-6 col-md-3` means 2-column mobile, 4-column desktop

## Deployment & Testing
- **Hosting**: GitHub Pages (indicated by CNAME file)
- **No Build Required**: Push `.html` changes directly; static files serve immediately
- **Testing**: Open `.html` files in browser locally or check live at domain in CNAME

## Files to Reference
- [README.md](../README.md) - Minimal; review workspace structure instead
- [CNAME](../CNAME) - GitHub Pages domain configuration
- [.git/](../.git/) - Git history; check for commit messages describing design decisions
