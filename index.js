/* -------------Getting Elements from html and css------------------- */
const menu = document.getElementById('mobile-menu')
const menubtn = document.getElementById('menu-bar')
const closebar = document.getElementsByClassName('close-btn')[0]
const main = document.querySelector('.bg')
/* --------------------------------Modal work section------------------------------- */

// Working with dynamic data to update the cards with js.
const workInfo = [
  {
    key: 0,
    workImg: './assets/SnapshootDesktop.png',
    Title: 'Tonic',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    techs: ['html', 'css', 'javascript'],
    techStack: ['github', 'ruby', 'bootstrap'],
    projectDetails: { company: 'CANOPY', position: 'Back END Dev', year: 2015 },
    seeLive: 'https://muhammadusmanaslam.github.io/Portfolio/',
    seeSource: 'https://github.com/MuhammadUsmanAslam/Portfolio'
  },
  {
    key: 1,
    workImg: './assets/Snapshoot Portfoliodesktop2.png',
    Title: 'Multi-Post Stories',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    techs: ['html', 'css', 'javascript'],
    techStack: ['github', 'ruby', 'bootstrap'],
    projectDetails: { company: 'Facebook', position: 'Full-Stack Dev', year: 2017 },
    seeLive: 'https://muhammadusmanaslam.github.io/Portfolio/',
    seeSource: 'https://github.com/MuhammadUsmanAslam/Portfolio'
  },
  {
    key: 2,
    workImg: './assets/Snapshoot Portfoliodesktop3.png',
    Title: 'Facebook 360',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    techs: ['html', 'css', 'javascript'],
    techStack: ['github', 'ruby', 'bootstrap'],
    projectDetails: { company: 'Facebook', position: 'Full-Stack Dev', year: 2017 },
    seeLive: 'https://muhammadusmanaslam.github.io/Portfolio/',
    seeSource: 'https://github.com/MuhammadUsmanAslam/Portfolio'
  },
  {
    key: 3,
    workImg: './assets/Snapshoot Portfoliodesktop4.png',
    Title: 'Uber Navigations',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    techs: ['html', 'css', 'javascript'],
    techStack: ['github', 'ruby', 'bootstrap'],
    projectDetails: { company: 'Uber', position: 'Lead Developer', year: 2017 },
    seeLive: 'https://muhammadusmanaslam.github.io/Portfolio/',
    seeSource: 'https://github.com/MuhammadUsmanAslam/Portfolio'
  }
]
workInfo.forEach((work, index) => {
  const list = document.getElementById('work-modal-info')
  const listItem = document.createElement('li')
  listItem.classList.add('works-card')
  listItem.id = `works-card-${index + 1}`
  const languages = work.techs.map((tech) => `<li class='works-card-tag'>${tech}</li>`).join('')
  listItem.innerHTML = `
  <div class = "grid-work">
  <div class ="work-img">
  <img src='${work.workImg}' alt='Recent Work'>
  </div>
    <div class='works-card-main'>
        <h3 class='works-card-heading-large'>${work.Title}</h3>
        <div class='d-flex works-card-client'>
            <p class='paragraph'>${work.projectDetails.company}</p>
            <i class=" fa fa-solid fa-circle works-card-client-counter"></i>
            <p class='works-card-client-role role'>${work.projectDetails.position}</p>
            <i class=" fa fa-solid fa-circle works-card-client-counter"></i>
            <p class='works-card-client-year year'>${work.projectDetails.year}</p>
        </div>
        <p class='paragraph works-card-paragraph'>${work.Description}</p>
        <ul class='d-flex works-card-tags'>
          ${languages}
        </ul>
        <button class="button" id='open-project-details-${index + 1}'>See Project</button>
    </div>
  </div>`
  list.appendChild(listItem)
})

// Working on the modal pop up dynamically.

const body = document.body

workInfo.forEach((work, index) => {
  const languages = work.techs.map((tech) => `<li class='detail-card-body-tag'>${tech}</li>`).join('')
  const secondStack = work.techStack.map((tech) => `<li class='detail-card-body-tag'>${tech}</li>`).join('')
  const modal = document.createElement('div')
  modal.classList.add('detail-card')
  modal.id = `detail-card-${index + 1}`
  modal.innerHTML = `<div class='detail-card-inner'>
    <div class='d-flex detail-card-header'>
        <div>
            <h3 class='detail-card-heading'>${work.Title}</h3>
            <div class='d-flex works-card-client'>
                <p class='paragraph'>${work.projectDetails.company}</p>
                <i class='fa fa-duotone fa-circle works-card-client-counter'></i>
                <p class='works-card-client-role role'>${work.projectDetails.position}</p>
                <i class='fa fa-duotone fa-circle works-card-client-counter'></i>
                <p class='works-card-client-year year'>${work.projectDetails.year}</p>
            </div>
        </div>
        <i id='detail-card-close-${index + 1}' class='fa-solid fa-xmark detail-card-cross-icon'>&times;</i>
    </div>
    <div class='detail-card-display-img-container'>
        <img class='' src='${work.workImg}' alt='Recent Work'>
    </div>
    <div class='detail-card-body'>
        <p class='paragraph'>${work.longDescription}</p>
        <div class='detail-card-body-right'>
            <ul class='d-flex detail-card-body-tags'>
              <div class = "first-stack">${languages}</div>   
              <div class = "second-stack">${secondStack}</div>  
            </ul>
            <div class='detail-card-body-right-button-container'>
                <button class='detail-card-button button' src='${work.seeLive}'>See Live <img src = "./assets/Icon.svg"></button>
                <button class='detail-card-button button'  src='${work.seeSource}'>See Source <i class=' fa fa-brands fa-github git'></i></button>
            </div>
        </div>
    </div>
  </div>`
  body.append(modal)
})
// Creating separate modal pop up
const openProjectDetails1 = document.getElementById('open-project-details-1')
const openProjectDetails2 = document.getElementById('open-project-details-2')
const openProjectDetails3 = document.getElementById('open-project-details-3')
const openProjectDetails4 = document.getElementById('open-project-details-4')

const detailCardClose1 = document.getElementById('detail-card-close-1')
const detailCardClose2 = document.getElementById('detail-card-close-2')
const detailCardClose3 = document.getElementById('detail-card-close-3')
const detailCardClose4 = document.getElementById('detail-card-close-4')

const detailCard1 = document.getElementById('detail-card-1')
const detailCard2 = document.getElementById('detail-card-2')
const detailCard3 = document.getElementById('detail-card-3')
const detailCard4 = document.getElementById('detail-card-4')

// Card 1 popup opening closing starts Here
openProjectDetails1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show')
})
detailCardClose1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show')
})
// Card 1 popup opening closing ends Here

// Card 2 popup opening closing starts Here
openProjectDetails2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show')
})
detailCardClose2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show')
})
// Card 2 popup opening closing ends Here

// Card 3 popup opening closing starts Here
openProjectDetails3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show')
})
detailCardClose3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show')
})
// Card 3 popup opening closing ends Here

// Card 4 popup opening closing starts Here
openProjectDetails4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show')
})
detailCardClose4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show')
})
/* -------------------------------Making Navbar----------------------------- */
menubtn.onclick = function display () {
  menu.style.display = 'block'
  main.style.filter = 'blur(8px)'
  menubtn.style.display = 'none'
  menu.style.position = 'fixed'
}

closebar.onclick = function close () {
  menu.style.display = 'none'
  menubtn.style.display = 'block'
}

window.onclick = function exit (event) {
  if (event.target === menu) {
    menu.style.display = 'none'
  }
}

menu.onclick = function close () {
  menu.style.display = 'none'
  main.style.filter = 'blur(0)'
  menubtn.style.display = 'block'
}
/* -----------------Validation contact form ------------------- */
const contactForm = document.getElementById('form')
const error = document.getElementById('error')
const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/

contactForm.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!emailRegex.test(contactForm.elements.email.value.trim())) {
    error.innerText = 'Form not Sent !! \n Please enter your email in lower case.'
    error.classList.add('contact-me-form-error-msg-display')
  } else {
    error.innerText = ''
    error.className = 'error-msg-hidden'
    contactForm.submit()
  }
})
