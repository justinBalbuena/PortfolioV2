import impossibleDashImg from '../assets/images/project_imgs/impossibleDash.png'
import pokemonQuizImg from '../assets/images/project_imgs/pokemonTypeEffectivenessQuiz.png'
import chatroomImg from '../assets/images/project_imgs/chatroomWebsite.png'
import numericalCompImg from '../assets/images/project_imgs/numericalCompGUI.png'

import htmlIcon from '../assets/images/icons/languages/html_transparent_icon.png'
import cssIcon from '../assets/images/icons/languages/css_transparent_icon.png'
import nodejsIcon from '../assets/images/icons/languages/nodejs_transparent_icon.png'
import mongodbIcon from '../assets/images/icons/languages/mongodb_transparent.png'
import sqlIcon from '../assets/images/icons/languages/sql_transparent_logo.png'
import phpIcon from '../assets/images/icons/languages/php_transparent_icon.png'

export const favoriteProjects = [
  {
    title: 'Impossible Dash',
    url: 'https://blockchain-project-rwj6.onrender.com',
    image: impossibleDashImg,
    description: `In my "Blockchain and Cryptocurrencies" class, I was tasked with creating a decentralized blockchain application.
      That idea evolved into Impossible Dash — a competitive web game where players try to achieve the highest score across a network of nodes.
      Inspired by Geometry Dash, I used the KAPLAY.js library to build a fast-paced and frustrating (but addictive) platformer.
      My goal was to make it just annoying enough that people would want to try again — and after watching classmates playtest it,
      I think I found the right balance. The game is mostly decentralized thanks to the GUN.js library, which syncs scores across all
      connected nodes. The only centralized component is account creation, which uses Mongoose.js and stores a username, password, and email
      in a MongoDB Atlas cluster. Every minute, the system selects the highest score recorded across all nodes and stores it as a new block
      in the game's blockchain. After that, the score leaderboard is cleared and players start fresh.`,
  },
  {
    title: 'Pokemon Type Effectiveness Quiz',
    url: 'https://pkmntypeeffectivenessquiz.streamlit.app',
    image: pokemonQuizImg,
    description: `A combination between my love for Pokemon and a quickly developed love of Python.
      I started working on this project after I completed a sizable chunk of a Python Udemy course I've been learning from.
      I used the StreamLit package as a basis for the front-end and started with a json file that I filled with type advantage values.
      From there I created functions to read and write from the json file to keep track of data. In the future I plan on
      adding implementation to be able to reset the values and guess a new type pairing wihtout having to restart the page,
      creating a few different formats for inputing values, and a new section to be able to guess a pokemon's type.`,
  },
  {
    title: 'Chat Room Website',
    url: 'https://chat-room-website-fc84.onrender.com',
    image: chatroomImg,
    description: `I recently completed a nodejs course on udemy and this was the final project for the course.
      Learning nodejs has been a nice jump back to web development for me as its what started my journey into
      computer science. I plan to make a bigger chat room website in the future for my University with a friend and
      this project is a great starting point for it.`,
  },
  {
    title: 'Numerical Computation Methods GUI',
    url: 'https://github.com/justinBalbuena/Numerical-Computation-Methods-GUI',
    image: numericalCompImg,
    description: `For my Numerical Computation class in my junior year's fall semester, my final project was to to work in a group
      and create a GUI where the user could use input data to use various functions like Gaussian directed elimination,
      Langrange Interpolation, Nonlinear Optimization, and much more. My group of five chose to implement every single
      numerical method we had been tasked to create as individual projects over the semester and we created it using Python's
      Streamlit library.`,
  },
]

export const moreProjects = [
  {
    title: 'MealsToGo Website',
    url: 'https://github.com/justinBalbuena/MealsToGo',
    description: "MealsToGo website created by following Jonas Schmedtmann's HTML Udemy Course",
    icons: [
      { src: htmlIcon, alt: 'HTML', className: 'smaller_language_icon' },
      { src: cssIcon, alt: 'CSS', className: 'smaller_language_icon' },
    ],
  },
  {
    title: 'Task-Manager-API',
    url: 'https://github.com/justinBalbuena/task-manager-api',
    description: "Task-Manager-API created by following Andrew Mead's Node.js Developer Course",
    icons: [
      { src: nodejsIcon, alt: 'Node.js', className: 'language_icon' },
      { src: mongodbIcon, alt: 'MongoDB', className: 'language_icon' },
    ],
  },
  {
    title: 'Pokemon Database',
    url: 'https://github.com/justinBalbuena/pokemon_database',
    description: `A group final project done for my databases class. It serves as a Pokemon database where users could
      save the pokemon they've caught to it and find some basic information on pokemon.`,
    icons: [
      { src: htmlIcon, alt: 'HTML', className: 'smaller_language_icon' },
      { src: cssIcon, alt: 'CSS', className: 'smaller_language_icon' },
      { src: sqlIcon, alt: 'SQL', className: 'smaller_language_icon' },
      { src: phpIcon, alt: 'PHP', className: 'wide_language_icon' },
    ],
  },
]
