import { defineStore } from 'pinia'

export const useThingsStore = defineStore('things', {
    state: () => ({
        tab: 'home' as string,
        animatedName: null as string | null,
        animatedName2: null as string | null
    }),

    actions: {
        setTab(tab: string) {
            this.tab = tab
        },
        setAnimatedName(name: string | null) {
            this.animatedName = name
        },
        setAnimatedName2(name: string | null) {
            this.animatedName2 = name
        }
    }
})
