# React Template App
*A minimal React application to be used as a template for other React apps*

### Features

- Text input
- Button event handling
- Component-based structure
- State management with useState

### Installation
Clone the repo, then install the project dependencies:
```
git clone https://github.com/mkoelbel/react-template.git <new-app-name>
cd <new-app-name>
npm install
```
In 'package.json', update the 'name' to the name of the new repo

### Running the app locally
Run the app in development mode:
```
npm run dev
```
Vite will provide a local URL (typically `http://localhost:5173/`)

### Deploying
To deploy the app to GitHub Pages:

The GitHub Actions workflow will automatically build and deploy the app whenever changes are pushed to main.

The repository path is automatically used to configure the Vite base path, so no need to modify `vite.config.ts`

In GitHub repository, select Settings > Pages > Source > GitHub Actions

### Not Deploying
To prevent deploying to GitHub Pages:

Delete `.github/workflows/deploy.yml` file
    