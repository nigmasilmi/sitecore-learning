## dev notes

### sitecore

[[...path]].tsx catches every path not included

- here a getStaticPaths is triggered to pre-render all pages

- in getStaticProps sitecorePagePropsFactory returns the data from layer service. Check the [specifics here](sitecorePagesPropsFactory.notes.md).

### nextjs

In Next.js, `getStaticPaths` is a function used in conjunction with `getStaticProps` for dynamic route generation in static site generation (SSG). Here's a synthesis of what `getStaticPaths` does:

1. **Dynamic Routes:** When you have dynamic routes in your Next.js application (e.g., pages that depend on dynamic parameters in the URL like `/posts/[id]`), you use `getStaticPaths` to define which paths Next.js should pre-render at build time.

2. **Return Values:** `getStaticPaths` must return an object with two keys:

   - `paths`: An array of objects representing the dynamic paths Next.js should pre-render. Each object should contain parameters required for the dynamic route.
   - `fallback`: A boolean or the string `'blocking'` indicating how Next.js handles requests to paths that are not pre-rendered at build time.

3. **Usage with `getStaticProps`:** `getStaticPaths` works hand-in-hand with `getStaticProps`. After Next.js pre-renders the paths specified by `getStaticPaths`, when a user visits one of these paths, Next.js uses `getStaticProps` to fetch the necessary data for that specific path.

4. **Dynamic Data:** If your dynamic routes depend on data from an external source (e.g., a CMS or database), you typically fetch this data inside `getStaticPaths` to determine the paths to pre-render.

5. **Fallback Behavior:** The `fallback` key in the object returned by `getStaticPaths` controls how Next.js handles requests to paths that are not pre-rendered:
   - `false`: Next.js returns a 404 page for paths not specified in `getStaticPaths`.
   - `true`: Next.js serves a "fallback" version of the page, and then statically generates the requested path in the background (Incremental Static Regeneration).
   - `'blocking'`: Similar to `true`, but it blocks the user's request until the new page has been generated.

In summary, `getStaticPaths` in Next.js is crucial for generating dynamic routes at build time and managing how Next.js handles requests to these routes, especially in the context of static site generation.

## Create a new component in your Sitecore JSS project:

**version 21**
[code-first]
(https://doc.sitecore.com/xp/en/developers/hd/21/sitecore-headless-development/create-a-new-component-in-a-jss-next-js-app-using-the-code-first-development-workflow.html)

## recommended folder structure

A recommended folder structure for developing components using SASS in Sitecore with JSS and a code-first approach typically includes separate directories for components, styles (SASS), and assets. Here's an example of such a folder structure:

```
project-root/
|-- sitecore/
|   |-- definitions/
|   |   |-- components/
|   |   |   |-- MyComponent1.sitecore.ts
|   |   |   |-- MyComponent2.sitecore.ts
|   |   |-- layouts/
|   |   |   |-- MainLayout.sitecore.ts
|   |-- data/
|   |   |-- content/
|   |   |   |-- en.yml
|-- src/
|   |-- components/
|   |   |-- MyComponent1/
|   |   |   |-- MyComponent1.tsx
|   |   |   |-- MyComponent1.scss
|   |   |-- MyComponent2/
|   |   |   |-- MyComponent2.tsx
|   |   |   |-- MyComponent2.scss
|   |-- styles/
|   |   |-- base/
|   |   |   |-- _variables.scss
|   |   |   |-- _mixins.scss
|   |   |-- components/
|   |   |   |-- _my-component1.scss
|   |   |   |-- _my-component2.scss
|   |   |-- main.scss
|-- public/
|   |-- assets/
|   |   |-- images/
|   |   |-- fonts/
```

In this structure:

- `sitecore/`: Contains Sitecore-specific files and configurations.
- `src/`: Contains source code for your Next.js app.
  - `components/`: Contains directories for each component, each with a TypeScript file (`*.tsx`) and a SASS file (`*.scss`).
  - `styles/`: Contains SASS stylesheets, including base styles (`base/`), component-specific styles (`components/`), and the main entry point (`main.scss`).
- `public/`: Contains static assets like images and fonts.

Here are some explanations for key directories and files:

- `sitecore/definitions/components/`: Contains JSON-like TypeScript files defining your components in a code-first approach.
- `src/components/`: Contains the actual React components (`.tsx` files) along with their associated SASS stylesheets (`.scss` files).
- `src/styles/`: Contains SASS stylesheets organized by purpose, such as base styles, component-specific styles, and a main entry point for importing styles.
- `public/assets/`: Contains static assets like images and fonts that your components may use.

This structure separates concerns by organizing components, styles, and assets in their respective directories, making it easier to manage and maintain a scalable and modular codebase for your Sitecore JSS project.
