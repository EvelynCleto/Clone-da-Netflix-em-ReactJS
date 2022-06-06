<br />
<p align="center">
    <a href="https://mcosta21.github.io/netflix-clone-reactjs/"><img src="https://github.com/mcosta21/netflix-clone-reactjs/blob/master/docs/logo-netflix-clone.png?raw=true" alt="Logo" width="210"></a>
</p>
<p align="center">

<a href="https://user-images.githubusercontent.com/67518341/138405005-db137128-1237-4d4c-98e9-83d6fa59ac61.mp4" alt="Banner" width="700"></a>
</p>
   <p align="center">
    Clone of Netflix homepage using React JS
    <br />
    <br />
<a href="https://mcosta21.github.io/netflix-clone-reactjs/" target="_blank"><img src="https://github.com/mcosta21/netflix-clone-reactjs/blob/master/docs/icon-gitpages.png?raw=true" alt="React JS" width="140"></a>  
</p>

## Technologies
Basically, this project was developed based on the following technologies:

<p align="center">
 <a href="https://pt-br.reactjs.org/" target="_blank"><img src="https://github.com/mcosta21/netflix-clone-reactjs/blob/master/docs/icon-reactjs.png?raw=true" alt="React JS" width="60"></a>
  &nbsp&nbsp
<a href="https://www.themoviedb.org/" target="_blank"><img src="https://github.com/mcosta21/netflix-clone-reactjs/blob/master/docs/icon-tmdb.png?raw=true" alt="TMDB" width="60"></a>
  &nbsp&nbsp
</p>

## 💻 About the project

Recreate the [Netflix](https://www.netflix.com/) interface as a way of learning and training skills using TypeScript, React and CSS. During the construction of this project this [video](https://www.youtube.com/watch?v=tBweoUiMsDg&ab_channel=BoniekyLacerda) was used as support material.

All catalog data such as title, description, cover, background photo and rating were extracted using the [TMDb API](https://www.themoviedb.org/documentation/api).

### Functionalities

- [x] **Spinning Loading**: Effect when bringing data from API.

- [x] **Featured Catalog**: Select a catalog at random and display it on the home page.

- [x] **Sessions Listing**: When consuming the API, separate the catalogs into sessions.

- [x] **Menu Effect**: Create an effect in the menu background according to the user's screen scroll.

- [x] **Catalog Card**: Display a card with the catalog details when hovering over the cover.

- [x] **Carousel Listing**: Present control buttons to manipulate the visualization of session items.

- [ ] **Infinite Listing**: When reaching the end of the list of catalogs, the same items from the beginning must be presented.

## Start project

With the terminal available, follow the instructions below:

```bash
# Clone the repository
$ git clone https://github.com/mcosta21/netflix-clone-reactjs

# Access netflix-clone-reactjs folder
$ cd netflix-clone-reactjs

# Install dependencies
$ npm install

# Start the application
$ npm start

# Application running on port 3000
```
###Observation

To use themoviedb.org API, you must register and obtain an access key, which is necessarily used in the application.

> **src** folder > **Tmdbb.js** > **API_KEY**

## How to contribute

Contributions are what makes the open source community an amazing place to learn, inspire, and create. Any contributions you make will be **very much appreciated**.

1. Fork the project.
2. Create a new branch with your changes: (`git checkout -b my-feature`)
3. Save the changes and create a commit message telling what you did: (`git commit -m 'Add a new amazing feature'`)
4. Push your changes: (`git push origin my-feature`)
