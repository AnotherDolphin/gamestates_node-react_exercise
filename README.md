# Game Stats Tables Task
### by Abdullah Nayer for Think-it

## Project Design
The project utilizes the data provided for the task to serve reformatted data through backend server endpoints to the frontend SPA. Data is ordered by either play time or player number, and filtered according to request queries, then sent to render on two specialized tables on the webapp.

## Backend 
[/*backend*]

**Node** Server written in **Typescript** with **Express**
- **Data**: `games.json` file, customly processed at each request.
- **Functions**: `functions.ts` contains the two requested data processing functions:
  - `select_top_by_playtime(data, {options})`
  - `select_top_by_players(data, {options})`
- **Interfaces**: appropraite data object types and interfaces are defined in `interfaces.ts`
- **Server**: Express server runs from `index.ts` and delivers an endpoint for each of the functions with cors enabled

## FrontEnd
[/*react-frontend*]

**React** SPA in **Typescript** and communicates with the server through **Fetch**
- Component Tree:
    >- App.tsx
    >    - Table.tsx
    >        - TableHead.tsx
    >            - TableFilterBox.tsx
    >        - TableBody.tsx
- Styling made with **TailwindCSS**
- Utlilty functions and variables in `utils.tsx`
- Data types and interfaces in `interfaces.tsx`

## Usage
>! node_module folders were removed before archiving for conveneint zipping - npm needed to down
- navigate to the `/backend` directory and run 
    - `npm install` to install dependencies
    - `npm run start` to run the server
- navigate to the `/react-frontend` directory and run 
    - `npm install` to install dependencies
    - `npm run start` to start the SPA
- That's it - have fun trying!