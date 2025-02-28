# React + Vite Portfoliyo

# Deploying Process 
1. npm install gh-pages --save-dev
2. Add script on package.json 
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
3. Change viteconfig file
    base: "/YOUR_REPOSITORY_NAME",
4. then 
  npm run deploy
