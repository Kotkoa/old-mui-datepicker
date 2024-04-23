# MUI Calendar App

This application utilizes Material-UI version 0.17.2 to implement a dual DatePicker component, where the selection of a date in the first picker determines the month and year shown in the second picker, but without pre-setting the specific date.

## Features

- Two interconnected DatePickers.
- Second DatePicker opens based on the year and month of the date selected in the first DatePicker.
- Uses React version 15.7.0 and Material-UI version 0.17.2.
- Simple, user-friendly interface.

## Project Structure

```
old-mui-datepicker/
├── node_modules/
├── src/
│ ├── app.js # Main application file with React component
│ ├── index.js # Entry point that renders the React app
│ └── styles.css # Stylesheet for the application
├── .babelrc # Babel configuration
├── .gitignore # Specifies intentionally untracked files to ignore
├── package.json # NPM package specifications
├── package-lock.json # NPM locked down version of dependencies
├── webpack.config.js # Configuration for webpack
```

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/Kotkoa/old-mui-datepicker.git
cd old-mui-datepicker
npm install
```

## Running the Application

To start the application, run:

```bash
npm start
```
