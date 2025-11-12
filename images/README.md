# Images Directory Guide

## Directory Structure

```
images/
├── logo.svg (or logo.png, logo.jpg)    # Restaurant logo
├── menu-items/                          # Menu item images
│   ├── placeholder.jpg                  # Default placeholder
│   └── [your-menu-items].jpg           # Your actual menu images
└── README.md                            # This file
```

## Image Requirements

### Restaurant Logo
- **Location**: `images/logo.svg` (or .png, .jpg)
- **Recommended size**: 200x200px minimum
- **Format**: SVG (preferred), PNG, or JPG
- **File size**: Under 50KB
- **Background**: Transparent (for PNG/SVG)

### Menu Item Images
- **Location**: `images/menu-items/`
- **Recommended size**: 400x400px (square)
- **Format**: JPG or PNG
- **File size**: Under 100KB each
- **Aspect ratio**: 1:1 (square) for best results
- **Quality**: High quality, well-lit food photography

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: 70-80% quality for JPG

2. **Use descriptive filenames**:
   - Good: `adana-kebap.jpg`, `mercimek-corbasi.jpg`
   - Bad: `IMG_1234.jpg`, `photo.jpg`

3. **Consistent styling**:
   - Use similar lighting and backgrounds
   - Maintain consistent color temperature
   - Consider using the same plate/presentation style

## How to Add Images

1. Save your optimized image in `images/menu-items/`
2. Open `index.html`
3. Find the menu item you want to update
4. Replace `placeholder.jpg` with your filename:
   ```html
   <img src="images/menu-items/your-image.jpg" alt="Item Name" class="item-image">
   ```
5. Update the alt text to match your item name

## Placeholder Image

The `placeholder.jpg` file is provided as a default image. You can:
- Replace it with your own default image
- Use it temporarily while preparing actual photos
- Keep it as a fallback for items without photos

## Need Help?

If you need assistance with image optimization or have questions about image requirements, contact Mercury Software at https://erdinc-yilmaz.vercel.app/
