# Goldendome website upgrade

This package refreshes the Goldendome property portal with a premium, responsive layout while keeping the existing property data and listing/modal logic.

## Files to update in your GitHub Pages repository

1. Replace `index.html` with the new `index.html` from this package.
2. Replace `styles.css` with the new `styles.css` from this package.
3. Keep your existing `properties.js` file unchanged. It contains your property listings, photos, floor plans, location coordinates, and the property details modal.
4. Keep all existing `.webp` images in the repository root, including `Goldendomelogo.webp` and `hero.webp`.

## Important checks

- The page expects `properties.js` to remain in the repository root, alongside `index.html` and `styles.css`.
- Image references use root-relative filenames (for example `hero.webp`, not `images/hero.webp`).
- The WhatsApp number in the page is currently `+673 821 1222`, matching the existing site. Update both WhatsApp links if the contact number changes.
- The location tiles use the existing `locationFilter` and filter value options. The existing dataset uses broad locations such as `Brunei-Muara` and `Tutong`, so those tiles filter by district rather than by individual town.
- Test the site after publishing on GitHub Pages. If the browser still shows the old design, hard-refresh the page (Ctrl+F5).
