# Multi-Stage Deployment Example with Next.JS and Github Pages

## Quick Start

To quickly replicate this project and deploy it to as a new repo and static site, follow these steps:
- Clone repository from upstream `git clone <upstream> <new-project-name>`
- Create new repo on GitHub
- Remove remote `git remote rm origin`
- Add new repo's remote as the origin `git remote add origin <new_repo>`
- Push changes to new repo `git push -u origin main'
- Validate that the site is live by viewing the Actions tab on your new repo's page and following the result to the published site.

## Overview

This repository contains an example of deploying a Next.JS application to multiple stages or environments using GitHub Pages and GitHub Actions. It consists of two repositories:

### multi-stage-deployment-example-nextjs-github-pages-staging

This repository contains the code for the Next.JS application that is deployed to the staging environment via GitHub Pages. It includes a configuration file that specifies the URL of the staging environment and any other necessary details.

To deploy the application to the staging environment, you can push your code changes to the `main` branch of this repository. The application will be automatically deployed to the staging environment by GitHub Pages.

### multi-stage-deployment-example-nextjs-github-pages-production

This repository contains the code and configuration for the GitHub Actions workflow that deploys the Next.JS application to the production environment. It includes a configuration file that specifies the URL of the production environment and any other necessary details.

To deploy the application to the production environment, you can create a new release of the application in the staging repo and tag it with the desired version number. The GitHub Actions workflow will automatically deploy the application to the production environment.

To use this example in your own project, you can fork these repositories and customize them to fit your specific needs.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started with Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
