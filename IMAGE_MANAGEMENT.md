# 🖼️ Image Management Guide

## Centralized Image Configuration

All images are now managed through **one single file**: `lib/config/images.ts`

## How to Change Images

### Step 1: Upload Your Image
Upload your image to any image hosting service:
- **Imgur** (recommended, free): https://imgur.com/upload
- **Cloudinary**: https://cloudinary.com
- **ImgBB**: https://imgbb.com
- Or any other image hosting service

### Step 2: Get the Direct Image URL
After uploading, copy the **direct image URL**. It should end with `.jpg`, `.png`, or `.webp`

Example: `https://i.imgur.com/abc123.jpg`

### Step 3: Update the Config File
Open `lib/config/images.ts` and replace the URL:

```typescript
export const imageConfig = {
  founder: {
    portrait: 'https://i.imgur.com/YOUR_IMAGE_URL.jpg', // Paste your URL here
  },
}
```

### Step 4: Save and Refresh
Save the file and refresh your browser. The image will update automatically!

## Available Images to Configure

### Hero Section
```typescript
hero: {
  background: 'YOUR_URL_HERE', // Full-screen background image
}
```
**Recommended size:** 1920x1080px or larger

### Founder Image
```typescript
founder: {
  portrait: 'YOUR_URL_HERE', // Alex's portrait on home page
}
```
**Recommended size:** 800x1000px (portrait orientation)

### Program Cards (Home Page)
```typescript
programs: {
  selectionPrep: 'YOUR_URL_HERE',
  tacticalHypertrophy: 'YOUR_URL_HERE',
  dadBod: 'YOUR_URL_HERE',
}
```
**Recommended size:** 800x1000px each

### Program Detail Pages
```typescript
programPages: {
  selectionPrep: 'YOUR_URL_HERE',
  tacticalHypertrophy: 'YOUR_URL_HERE',
  dadBod: 'YOUR_URL_HERE',
}
```
**Recommended size:** 1200x800px each

### About Page
```typescript
about: {
  fullStory: 'YOUR_URL_HERE',
}
```
**Recommended size:** 1200x800px

## Example: Changing the Founder Image

1. Upload your founder image to Imgur
2. Copy the direct link: `https://i.imgur.com/abc123.jpg`
3. Open `lib/config/images.ts`
4. Find the `founder.portrait` line
5. Replace the URL:
```typescript
founder: {
  portrait: 'https://i.imgur.com/abc123.jpg',
}
```
6. Save and refresh!

## Tips

- Use high-quality images (at least 800px wide)
- Compress images before uploading (use tinypng.com)
- Use HTTPS URLs (not HTTP)
- Test the URL in your browser first to make sure it loads
- Keep aspect ratios in mind:
  - Hero: 16:9 (landscape)
  - Founder: 4:5 (portrait)
  - Programs: 4:5 (portrait)

## Troubleshooting

**Image not showing?**
- Make sure the URL is a direct link to the image file
- Check that the URL starts with `https://`
- Verify the image loads when you paste the URL in your browser
- Some hosting services block external embedding - use Imgur instead

**Image looks stretched?**
- Check the aspect ratio matches the recommended size
- Use `object-cover` in the component (already configured)

---

**Now you can change any image by just updating one file!** 🎨
