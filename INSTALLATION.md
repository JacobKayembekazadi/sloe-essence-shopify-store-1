# Sloe Essence Theme - Installation Guide

## Quick Installation Steps

### Method 1: Upload via Shopify Admin (Recommended)

1. **Prepare the theme files**:
   - Ensure all theme files are in your workspace directory
   - The structure should match the Shopify 2.0 requirements

2. **Create a ZIP file**:
   - Select all theme files and folders
   - Create a ZIP archive (not a folder inside a ZIP)
   - The ZIP should contain folders like `assets`, `config`, `layout`, etc. at the root level

3. **Upload to Shopify**:
   ```
   - Log into your Shopify admin
   - Go to: Online Store > Themes
   - Click: "Add theme" button
   - Select: "Upload zip file"
   - Choose your theme ZIP file
   - Wait for upload to complete
   ```

4. **Customize the theme**:
   ```
   - Click "Customize" on your new theme
   - Configure your settings in the theme editor
   - Add your logo, colors, and content
   - Preview before publishing
   ```

5. **Publish**:
   ```
   - Click "Publish" to make it your live theme
   - Or keep it as an unpublished theme for testing
   ```

### Method 2: Shopify CLI (For Developers)

If you have Shopify CLI installed:

```bash
# Navigate to theme directory
cd /path/to/sloe-essence-theme

# Login to Shopify
shopify login --store your-store.myshopify.com

# Push theme to Shopify
shopify theme push

# Or serve for development
shopify theme dev
```

## Theme Structure Checklist

Make sure your theme ZIP includes these folders:

```
✓ assets/         - All CSS, JS, and image files
✓ config/         - settings_schema.json and settings_data.json
✓ layout/         - theme.liquid and password.liquid
✓ locales/        - en.default.json
✓ sections/       - All section files (.liquid)
✓ snippets/       - Reusable snippets (.liquid)
✓ templates/      - JSON templates for pages
```

## Post-Installation Configuration

### 1. Navigation Menus

Create your navigation structure:

```
Admin > Online Store > Navigation

Create/Edit these menus:
- Main menu (for header)
- Footer (for footer columns)
```

Sample Main Menu:
- Shop (→ /collections/all)
- The Sloe App (→ /pages/app)
- Our Story (→ /pages/about)

### 2. Theme Settings

Configure in Theme Customizer:

**Colors**:
- Text: #1D1D1F (dark gray)
- Background: #FFFFFF (white)
- Accent: #F5F5F7 (light gray)
- Primary: #4C7C9E (blue-gray)
- Border: #E5E5E7 (light border)

**Typography**:
- Heading font: Assistant or your choice
- Body font: Assistant or your choice
- Font scales: 100% (adjust as needed)

**Social Media**:
- Add your Instagram URL
- Add your TikTok URL
- Add your Facebook URL
- etc.

### 3. Homepage Content

**Hero Section**:
- Heading: "AI-Powered Skincare. Organically Sourced."
- Subheading: Your tagline
- Button text: "Discover Your Routine"
- Button link: /collections/all or /pages/quiz

**Featured Products**:
- Add 3 products from your catalog
- Add short descriptions for each
- Products will display with images and prices

**Brand Story**:
- Upload a high-quality image (1200x900px recommended)
- Write your brand story
- Link to your About page

**Newsletter**:
- Heading and subheading are pre-filled
- Form automatically creates Shopify customers
- No additional setup needed

### 4. Additional Pages

Create these pages in Admin > Online Store > Pages:

- **About Us** (The Sloe App, Our Story)
- **FAQ**
- **Contact**
- **Shipping & Returns**
- **Terms of Service**
- **Privacy Policy**

Assign them to the `page.json` template.

## Testing Checklist

Before going live:

- [ ] Test on mobile devices
- [ ] Check all navigation links work
- [ ] Test add to cart functionality
- [ ] Verify newsletter signup works
- [ ] Test search functionality
- [ ] Check footer links
- [ ] Verify social media icons link correctly
- [ ] Test 404 page
- [ ] Check page load speed
- [ ] Verify colors match brand
- [ ] Test with screen reader for accessibility

## Troubleshooting

### Theme won't upload
- Ensure ZIP file has correct structure (folders at root, not nested)
- Check file size (must be under 50MB)
- Verify all required folders exist

### Sections not appearing
- Go to Customize theme
- Click "Add section" to add missing sections
- Drag and drop to reorder

### Products not showing
- Ensure products are published
- Check product availability
- Select products in section settings

### Colors look wrong
- Go to Theme settings > Colors
- Adjust color values
- Save and refresh

### Menu not showing
- Create navigation menu in Admin
- Assign menu in Header section settings
- Save changes

## Support Resources

- [Shopify Theme Documentation](https://shopify.dev/themes)
- [Liquid Reference](https://shopify.dev/api/liquid)
- [Shopify Community Forums](https://community.shopify.com/)

## Need Help?

If you encounter issues:

1. Check this guide first
2. Review the README.md file
3. Check Shopify's documentation
4. Contact Sloe Essence support

---

**Note**: This theme is built for Shopify 2.0 and requires a Shopify store. It will not work on other platforms.

