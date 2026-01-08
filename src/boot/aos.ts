import { boot } from 'quasar/wrappers'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AddressbarColor } from 'quasar'

export default boot(() => {
    // Initialize AOS animation library
    AOS.init()

    // Set address bar color
    AddressbarColor.set('#aa96da')
})
