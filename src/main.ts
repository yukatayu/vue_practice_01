import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import './style.scss'
import { createVuetify } from 'vuetify'
import * as vuetify_components from 'vuetify/components'
import * as vuetify_directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
	components: vuetify_components,
	directives: vuetify_directives,
	icons: { defaultSet: 'mdi' },
})

createApp(App).use(vuetify).mount('#app')
