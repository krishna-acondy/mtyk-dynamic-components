# mtyk-dynamic-components

A React TypeScript app demonstrating dynamic component configuration from schemas and templates
With this app, I'd like to demonstrate a proof of concept for dynamically generating components
using a combination of pre-defined schemas, runtime configuration and transforms.

<img width="1221" alt="image" src="https://github.com/krishna-acondy/mtyk-dynamic-components/assets/2980428/a485dee5-52ae-49ef-898d-7c7ab23e8146">



## Running the app locally

This app uses `pnpm` for dependency management.
To run the app, first install dependencies with `pnpm install`.
Then, run `pnpm run dev` to get a local dev server running.

## Deployments
The app is deployed to GitHub Pages at https://krishna-acondy.io/mtyk-dynamic-components/.
Deployments are configured via a GitHub Actions workflow that runs on pushes to `main`.
A deployment can also be manually triggered from the 'Actions' page.

## Routing

### `/components`
This is the page that the user first sees when the app is opened. It lists all the components the user has previously created.
Component definitions are saved to and retrieved from the browser's local storage.
You can click on a component to see it rendered in a modal dialog.

### `/gallery`
This is a gallery of templates you can choose from to create a component. Clicking a template will take you to the create page.

### `/templates/:templateId/create`
This page allows the user to configure an instance of a given component, see a preview, and save the definition with a name.

## Available Components

### Quote
A piece of quoted text with an optional author
<img width="890" alt="image" src="https://github.com/krishna-acondy/mtyk-dynamic-components/assets/2980428/13c4bd75-1e80-4c6f-9b47-6a65972442b2">

### Button
A button with the specified text, with different options for colour and styling.
<img width="897" alt="image" src="https://github.com/krishna-acondy/mtyk-dynamic-components/assets/2980428/bbc821ac-8eb1-4e15-b760-de9aae2bc2f0">

### Checklist
A list of items to check off.
<img width="891" alt="image" src="https://github.com/krishna-acondy/mtyk-dynamic-components/assets/2980428/37bafff6-eb3b-4eba-b283-af9eb1e1ff29">

### Data Table
A table of rows with the specified columns.
<img width="893" alt="image" src="https://github.com/krishna-acondy/mtyk-dynamic-components/assets/2980428/037011a4-601a-409e-be6f-82fd2841d5bc">
