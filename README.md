# Mini-Google

## Portfolio mini-google using react, try to the best to clone google.com

### by : Edwin Satya Yudistira

### How to Access

- git clone : https://github.com/edwinsatya/mini-google.git
- npm install or if any error message try npm install --legacy-peer-deps
- create new env file ex: .env.development, for example env you can check file with name .env.development_example.txt
- npm run start

### Api

Iam using (https://rapidapi.com/apigeek/api/google-search3/) api for develop this project :

- baseUrl: https://google-search3.p.rapidapi.com/api/v1

  #### List Params Api

  - /search :
    ` Get data by keyword, display all specific result equal your keyword`
  - /image :
    ` Get data by keyword, display some image result equal your keyword`
  - /news :
    ` Get data by keyword, display some news result equal your keyword`

  #### Query Api

  - ?q= :
    ` Example query: /search?q=elon+musk, display all data according to keyword`

### Page

- Title : Google

  #### path : `/`

  #### desc : `This page is the first lading page, i try implement UI similar like google.com, in the header any navigation for choose filter : search, image, news and any toggle button for setting dark/light mode`

- Title : [keyword] | Google Search

  #### path : `/search`

  #### desc : `This page is display your result according to keyword, in header have input for keyword and toggle darkmode, have sub navigation for change filter (search, image, news, readinglist) `

- Title : [keyword] | Google Search

  #### path : `/image`

  #### desc : `This page is display image result according to keyword, for the UI same like in /search page, but have little different in content`

- Title : [keyword] | Google Search

  #### path : `/news`

  #### desc : `This page is display news result according to keyword, for the UI same like in /search page, but have little different in content. for each news have button add and remove. add for adding to /reading-list page, remove for removing from /reading-list page`

- Title : List Reading News Google Search

  #### path : `/reading-list`

  #### desc : `This page is display all news after you added from /news page, you can remove that news with click (remove), this page is persist`

- Title : 404 | Page Notfound
  #### path : `/*`
  #### desc : `This page for handle routes not match`

### Additional Features

- Dark or Light mode : `Iam implement with 2 modes, first mode in first time landing automatic read your device system, if your device using setting dark mode, this website auto selected dark. and second mode is manual toggle in the navigation menu on header`

- Performance checked: `Using lighthouse for checking performance`

- Add and Remove news: `Explanation: in news page you can add some news. After you added in the reading-list page display all news already added. You can't add the same news. For handle this feature i play some logic in the footer card, have two button (add and remove). Ex: any news A with id 'a' and news B with id 'b', for the first time each news just display button [add], after you added some one news, example you add news A, the footer card now just display [remove]. Not just in reading-list page, in the news page you can still remove the news from your list. in the reading-list page you just can remove that news`

- Persist page : `using (local storage)`

- State management : `using useContext + useReducer`

- Web responsive : `suport mobile and desktop screen`

- Loading component : `handle process if fetching data api not finished, iam using react-spinners`

- Design pattern : `for develop this project iam using concept 'Atomic Design (atoms, molecules, organism)' for easy to maintenance the project`

### Integration Test

- npm run test -> press 'a' (for all test)

  #### Using : `react testing library and jest`

  #### have example testing in folder helpers (function test) and atoms component (react test)

### Styling

- Tailwind css : https://tailwindcss.com/

### Deployment

- Deploy in vercel : https://mini-google.edwinsatya.com/
