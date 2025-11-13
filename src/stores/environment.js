import { defineStore } from "pinia";
import { Howl } from "howler"

export const useEnvironmentStore = defineStore('environment', {
    state: () => ({
        environment_sounds: [],
    }),
    getters: {
        getEnvironmentSounds: (state) => state.environment_sounds
    },
    actions: {
        addEnvironment(sound_data){
            console.log("teste")
            const sound = new Howl({
                src: [`/sounds/${sound_data.sound}.mp3`],
                loop: true,
                volume: 0.5, 
            })
            sound.play()
        }
    }
})