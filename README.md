# Sloe Essence - Shopify 2.0 Theme

A modern, customizable Shopify 2.0 theme built for the Sloe Essence skincare brand. Features AI-powered skincare messaging, clean design, and full theme customization through the Shopify theme editor.

## Features

- **Shopify 2.0 Architecture**: Built with sections, blocks, and JSON templates for maximum flexibility
- **Modern Design**: Clean, minimalist aesthetic inspired by premium skincare brands
- **Fully Customizable**: All sections include schema settings for easy customization without code
- **Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Minimal JavaScript, efficient CSS, and optimized asset loading
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Theme Structure

```
sloe-essence-theme/
├── assets/               # CSS, JavaScript, and other assets
│   ├── base.css         # Core styles and utilities
│   ├── sloe-essence.css # Theme-specific styles
│   ├── global.js        # Global JavaScript functionality
│   └── component-*.css  # Component-specific styles
├── config/              # Theme configuration
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/              # Theme layouts
│   ├── theme.liquid     # Main theme layout
│   └── password.liquid  # Password page layout
├── locales/             # Translation files
│   └── en.default.json
├── sections/            # Reusable sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero.liquid
│   ├── featured-products.liquid
│   ├── brand-story.liquid
│   └── newsletter.liquid
├── snippets/            # Reusable code snippets
│   ├── icon-*.liquid    # SVG icons
│   └── social-icons.liquid
└── templates/           # Page templates
    ├── index.json       # Homepage
    ├── page.json        # Standard page
    └── 404.json         # 404 error page
```

## Installation

1. **Download or Clone** this theme to your local machine

2. **Zip the Theme Files**: Create a ZIP file of the entire theme directory

3. **Upload to Shopify**:
   - Go to your Shopify admin
   - Navigate to **Online Store > Themes**
   - Click **Add theme** > **Upload zip file**
   - Select your theme ZIP file
   - Click **Publish** to make it live

## Customization

### Theme Settings

Access theme settings through **Online Store > Themes > Customize**:

- **Colors**: Customize all color schemes (text, background, accent, primary)
- **Typography**: Choose from Shopify's font library or upload custom fonts
- **Layout**: Adjust page width and spacing
- **Social Media**: Add links to your social media profiles
- **Logo**: Upload your brand logo

### Homepage Sections

The homepage includes these customizable sections:

1. **Announcement Bar**: Display important messages or promotions
2. **Header**: Navigation, logo, search, cart, and account links
3. **Hero**: Large headline section with CTA button
4. **Featured Products**: Showcase up to 6 products
5. **Brand Story**: Image + text section for telling your story
6. **Newsletter**: Email signup form with Shopify customer integration
7. **Footer**: Multi-column footer with links and social icons

### Adding Products

To display products in the Featured Products section:

1. Go to **Customize theme**
2. Click on the **Featured Products** section
3. For each product block, select a product from your catalog
4. Add a short description if desired
5. Save your changes

### Navigation Menus

Create custom menus:

1. Go to **Online Store > Navigation**
2. Create or edit menus (e.g., "Main menu", "Footer")
3. In the theme customizer, assign menus to header and footer sections

## Development

### CSS Architecture

The theme uses a modular CSS architecture:

- `base.css`: Core styles, reset, typography, utilities
- `sloe-essence.css`: Theme-specific styles and customizations
- Component files: Individual CSS for each section/component

### Color Scheme

Colors are defined as CSS custom properties:

```css
--color-base-text: RGB values from theme settings
--color-base-background: RGB values from theme settings
--color-base-accent: RGB values from theme settings
--color-primary: RGB values from theme settings
--color-border: RGB values from theme settings
```

### JavaScript

Minimal JavaScript for:

- Mobile menu toggle
- Modal/details elements (search, etc.)
- Sticky header behavior
- Accessibility features (focus trapping, keyboard navigation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

This theme follows WCAG 2.1 Level AA guidelines:

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for icons and interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## Support

For questions or issues:

1. Check Shopify's theme documentation
2. Review the Liquid documentation
3. Contact Sloe Essence support

## Credits

- Built for Sloe Essence
- Shopify 2.0 theme architecture
- SVG icons inspired by Heroicons

## License

© 2025 Sloe Essence. All rights reserved.

---

## Quick Start Checklist

After installing the theme:

- [ ] Upload your logo
- [ ] Set your brand colors
- [ ] Create navigation menus
- [ ] Add products to featured section
- [ ] Configure social media links
- [ ] Test on mobile devices
- [ ] Set up newsletter integration
- [ ] Add favicon
- [ ] Configure SEO settings
- [ ] Test checkout process

