# Product Page Setup Guide

This guide explains how to set up and use the Online Store 2.0 product page template for the Sloe Essence Shopify store.

## Files Created

### Templates
- **`templates/product.json`** - Product page template configuration

### Sections
- **`sections/main-product.liquid`** - Main product section with all product features
- **`sections/product-recommendations.liquid`** - Related products recommendations (optional)
- **`sections/product-extra-content.liquid`** - Product story and FAQs section

### Snippets
- **`snippets/price.liquid`** - Price display component with sale badges
- **`snippets/product-card.liquid`** - Product card for recommendations grid

### Assets
- **`assets/section-main-product.css`** - Product section styles
- **`assets/section-product-recommendations.css`** - Recommendations section styles
- **`assets/section-product-extra-content.css`** - Extra content section styles
- **`assets/product-form.js`** - Product form interactions (add to cart, variant selection)
- **`assets/product-recommendations.js`** - Product recommendations loader

## Features Included

### Main Product Section (`main-product.liquid`)

✅ **Product Information**
- Product title (H1)
- Vendor (optional, toggleable via schema)
- Price display with compare-at price support
- Tax and shipping text (toggleable)
- Product description (short preview or full)

✅ **Media Gallery**
- Image gallery with thumbnail navigation
- Support for multiple images
- Optional video support (with looping option)
- 3D model support
- Image zoom functionality (toggleable)
- Thumbnail position (left, bottom, right)
- Media size options (small, medium, large)
- Gallery layout (stacked, thumbnails)

✅ **Variant Selection**
- Dropdown variant selectors
- Dynamic variant switching
- Variant-specific images
- Option to show/hide variant labels

✅ **Quantity Selector**
- +/- buttons for quantity adjustment
- Toggleable via schema settings
- Validates minimum quantity of 1

✅ **Add to Cart / Buy Now**
- Add to cart button with loading state
- Buy now button (toggleable)
- Dynamic checkout buttons (Shop Pay, etc.) - toggleable
- Disabled state when product is sold out
- Cart count updates automatically

✅ **Benefits Block**
- Configurable bullet list of product benefits
- Up to 4 benefit items
- Customizable heading
- Styled with checkmark icons

✅ **Stock Indicator**
- Real-time stock status display
- In stock / Low stock / Out of stock states
- Configurable low stock threshold
- Toggleable via schema

✅ **Trust Badges**
- Customizable trust badge text
- Default: "Free Shipping on Orders $50+"
- Toggleable via schema

✅ **Additional Features**
- Sticky product info on desktop (toggleable)
- Responsive design (mobile-first)
- Accessibility compliant (WCAG 2.1 AA)
- SEO optimized (proper heading hierarchy)

### Product Recommendations Section

✅ **Related Products**
- Automatically loads related products
- Configurable number of products (2-10)
- Uses Shopify's recommendation engine
- Placeholder products when recommendations unavailable
- Responsive grid layout

### Product Extra Content Section

✅ **Product Story**
- Full product description display
- Rich text support
- Toggleable via schema

✅ **FAQs (Accordion)**
- Unlimited FAQ blocks
- Expandable/collapsible questions
- Rich text answers
- Smooth animations

## Setup Instructions

### Step 1: Upload Files to Shopify

1. **Upload all files** to your Shopify theme:
   - Templates: `templates/product.json`
   - Sections: `sections/main-product.liquid`, `sections/product-recommendations.liquid`, `sections/product-extra-content.liquid`
   - Snippets: `snippets/price.liquid`, `snippets/product-card.liquid`
   - Assets: All CSS and JS files in `assets/`

2. **Verify file structure** matches Shopify 2.0 requirements

### Step 2: Set Product Template as Default

**Method 1: Via Shopify Admin**
1. Go to **Online Store > Themes**
2. Click **Customize** on your active theme
3. Navigate to any product page
4. In the top bar, click the template dropdown
5. Select **product** (should appear automatically if `product.json` exists)
6. Click **Save**

**Method 2: Assign to Specific Products**
1. Go to **Products** in Shopify admin
2. Select a product to edit
3. Scroll to **Theme templates** section
4. Select **product** from the template dropdown
5. Click **Save**

**Method 3: Set as Default Template**
1. Go to **Online Store > Themes > Customize**
2. Navigate to a product page
3. Click the template selector (top of page)
4. If "product" template doesn't show, make sure `product.json` is uploaded
5. Once selected, it becomes the default for all products

### Step 3: Preview with a Real Product

1. **Go to a product page** in your store (or create a test product)
2. **Navigate to the product URL**:
   ```
   https://your-store.myshopify.com/products/your-product-handle
   ```
3. **Verify all sections load correctly**:
   - Main product section with images
   - Product information (title, price, etc.)
   - Add to cart functionality
   - Recommendations (if enabled)
   - Extra content (if enabled)

### Step 4: Customize Settings

#### In Theme Customizer:
1. Navigate to **Customize > Products > Default Product**
2. Adjust settings in each section:

**Main Product Section Settings:**
- Color scheme (Background, Accent, Primary)
- Media size (Small, Medium, Large)
- Thumbnail position (Left, Bottom, Right)
- Enable/disable image zoom
- Enable/disable video looping
- Show/hide vendor
- Show/hide quantity selector
- Enable/disable buy now button
- Enable/disable trust badges
- Customize trust badge text
- Enable/disable stock indicator
- Set low stock threshold (1-10)
- Show/hide product description
- Description style (Short or Full)

**Benefits Block Settings:**
- Benefits heading
- Benefit 1-4 text

**Product Recommendations Settings:**
- Heading text
- Number of products to show (2-10)
- Color scheme
- Show/hide vendor
- Padding (top and bottom)

**Product Extra Content Settings:**
- Heading text
- Show/hide product story
- Show/hide FAQs
- Color scheme
- Padding (top and bottom)

**FAQ Block Settings:**
- Question text
- Answer text (rich text)

## Testing Checklist

### Functional Testing
- [ ] Product images load and display correctly
- [ ] Thumbnail navigation works
- [ ] Variant selection updates product information
- [ ] Price updates when variant changes
- [ ] Stock indicator shows correct status
- [ ] Quantity selector increments/decrements correctly
- [ ] Add to cart button adds product to cart
- [ ] Cart count updates after adding product
- [ ] Sold out products disable add to cart button
- [ ] Product recommendations load (if enabled)
- [ ] FAQs expand/collapse correctly
- [ ] All schema toggles work as expected

### Visual Testing
- [ ] Layout responsive on mobile (320px+)
- [ ] Layout responsive on tablet (768px+)
- [ ] Layout responsive on desktop (1024px+)
- [ ] Images maintain aspect ratios
- [ ] Text is readable at all breakpoints
- [ ] Colors match brand guidelines
- [ ] Buttons are clearly visible and clickable

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Testing
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Screen reader announces content correctly
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA standards
- [ ] All images have alt text
- [ ] Form labels associated with inputs

## Troubleshooting

### Product Template Not Showing
**Issue**: `product.json` template doesn't appear in template selector
**Solution**: 
- Verify file is uploaded to `templates/` directory
- Check file name is exactly `product.json` (lowercase)
- Clear browser cache and refresh
- Ensure file is valid JSON

### Images Not Displaying
**Issue**: Product images don't show
**Solution**:
- Verify product has images uploaded in Shopify admin
- Check image URLs in browser console
- Ensure product has at least one published image
- Verify `product.featured_media` is available

### Add to Cart Not Working
**Issue**: Clicking "Add to cart" does nothing
**Solution**:
- Check browser console for JavaScript errors
- Verify `product-form.js` is loaded (check Network tab)
- Ensure product has at least one variant
- Check that product is not sold out
- Verify cart API endpoints are accessible

### Variant Selection Not Updating
**Issue**: Changing variants doesn't update price/images
**Solution**:
- Verify JavaScript console for errors
- Check that product has variants configured
- Ensure `product-form.js` includes variant update logic
- Verify product JSON data is available in page source

### Recommendations Not Loading
**Issue**: Related products section is empty
**Solution**:
- Verify `product-recommendations.js` is loaded
- Check that product has related products in Shopify
- Ensure product ID is correctly passed to recommendations
- Check browser console for API errors
- Recommendations may take a few moments to generate

### FAQs Not Expanding
**Issue**: FAQ accordion doesn't open/close
**Solution**:
- Verify `<details>` and `<summary>` elements are present
- Check CSS file `section-product-extra-content.css` is loaded
- Ensure JavaScript isn't blocking native behavior
- Test in different browsers (some may need polyfills)

## Advanced Customization

### Adding Custom Blocks to Main Product
1. Edit `sections/main-product.liquid`
2. Add a new block type in the `{% schema %}` section
3. Render the block in the template where desired
4. Add settings for the block in the schema

### Styling Customization
- Edit CSS files in `assets/` directory
- Use CSS custom properties (variables) for colors
- Follow existing BEM naming conventions
- Test responsive breakpoints (750px, 990px)

### JavaScript Customization
- Extend `ProductForm` class in `product-form.js`
- Add custom event listeners
- Integrate with third-party apps via custom hooks

## Support Resources

- [Shopify Theme Documentation](https://shopify.dev/themes)
- [Liquid Reference](https://shopify.dev/api/liquid)
- [Product Object Reference](https://shopify.dev/api/liquid/objects/product)
- [Shopify Community Forums](https://community.shopify.com/)

---

**Last Updated**: November 17, 2025  
**Theme Version**: 1.0.0  
**Shopify Version**: Online Store 2.0

