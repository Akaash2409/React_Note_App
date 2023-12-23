# React_Note_App
Manage your work, home, personal tasks with notes app. Add ability to add, edit, delete, and mark them as completed. Additional features include searching, filtering and visualizing completion progress.

## Technologies & Tools ddddddddddd

- React
- Redux ([Redux Toolkit](https://redux-toolkit.js.org/))
- Material UI
- Material UI Icons
- LocalStorage
- Web worker

## Features

- Users can search and filter notes.
- Users can add new notes.
- When adding a new note, users can fill title, description, and category. The date is created under the hood using the current time.
- Users can see created, colored notes sorted by date as well as an empty UI with illustration when there are no notes or couldn't be found.
- Users can see how many notes are completed including the visual progression indicator.
- Users can mark notes as completed, edit, and delete them.
- Completed notes have strikethrough text and gray background. Also, they are moved into the end.
- When editing notes, the date of note also updates all together with other fields.
- Confirmation pops up when deleting notes.

## Additional Features

- Notes data stored in localStorage
- Installable (PWA)
- Optimized for mobile
- Ability to mock notes if notes list is empty

## :wrench: Project setup

```bash
# In the project directory run:
npm install react-scripts@latest 

npm i && npm start
```
