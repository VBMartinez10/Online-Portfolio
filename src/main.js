import './assets/main.css'
import '@fortawesome/free-brands-svg-icons'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import icons from library
import { faHtml5, faCss3, faSquareJs, faLaravel, faVuejs, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret, faEnvelope} from "@fortawesome/free-solid-svg-icons";

/* Add the icon to the library */
library.add(faUserSecret, faHtml5, faCss3, faSquareJs, faLaravel, faVuejs, faEnvelope, faGithub, faLinkedin);


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
