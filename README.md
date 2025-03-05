## Run

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Add Google Fonts using [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts)

Add images as [static assets](https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets) using [`next/image`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts). Put images in the `/public` folder.

## CSS

1. Each page like `sponsors/page.jsx` has a .module.css file like `sponsors/sponsors.module.css` (you can name it anything you want)

2. then in `sponsors/page.jsx`, import it like this:
```jsx
import styles from "./sponsors.module.css";
```

3. then, if there's a class like `.my-element {}` in the CSS, then add `className={styles.my-element}` to the element in the jsx.

4. See: https://nextjs.org/docs/13/pages/building-your-application/styling/css-modules

## Created with:

1. `npx create-next-app@latest rocket`

Options:

- Typescript: No
- ESLint: Yes
- Tailwind CSS: No
- use src/ dir: No
- App Router: Yes
- Turbopack: Yes
- customize import alias: No

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.
