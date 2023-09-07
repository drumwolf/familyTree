# Family Tree

A web application built with ReactJS and Vite, which displays a family tree of your direct ancestors based on data stored in a Google Spreadsheet document.

## How to use this web app

You'll need the following:
- A Google Sheets document, which will contain the data for your family tree
- A copy of this repository, cloned to your local hard drive and accessible in your terminal
- Your own `.env` configuration file, placed in the root of the repository directory, which will point the web app to your Google Sheets document

## Part 1: Google Sheets document

This web app will require a Google Sheets spreadsheet document and knowledge of the Google Sheets API.  If you are not already familiar with this API,
it is recommended that [https://developers.google.com/sheets/api/guides/concepts](you read here first).  

Here are the basic high-level steps, although you will find more detailed documentation on the links:

- Create the document, with the following labels in the first row:
  - A1: `name`
  - B1: `born`
  - C1: `notes`
  - D1: `color` (value should be hex color, i.e. `#FFFFFF`)
    
- Click the "Share" button in the top right corner to change the "General Access" setting to make it viewable to "Anyone with the link"

## Part 2: Download local web app repository

- In the terminal, type: `git clone git@github.com:drumwolf/familytree.git`
- Install all packages:  `yarn install`

## Part 3: Set up environmental variables

- In the root directory, create a new file called `.env`

## Part 4: Run web app on local workstation

- In the project directory, you can run: `yarn dev`
- Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
- The page will reload if you make edits.  You will also see any lint errors in the console.
