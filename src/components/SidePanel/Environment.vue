<template>
    <div class="sidepanel-environment-wrapper absolute w-full h-full flex x-end">
        <div class="flex flex-column gap-lg w-3-4 bg-color-brand-one p-xlg">

            <div class="flex gap-md">
                <div>
                    <ButtonBasic
                        class="bg-color-brand-three p-lg rounded-md"
                        @click="toggleEnvironmentInterface()"
                    >
                        <MiscIcon
                            icon="return"
                            class="bg-color-brand-one"
                            :size="[18,18]"
                        />
                    </ButtonBasic>
                </div>
                <div class="flex flex-column">
                    <h1 class="font-md">Sons Ambientes</h1>
                    <p class="font-sm o-3-4">Uma lista confortavel de sons ambientes para você relaxar a qualquer momento.</p>
                </div>
            </div>

            <div 
                class="grid gap-md"
                style="
                    grid-auto-flow: column;
                    grid-auto-rows: auto;
                    grid-template-rows: repeat(3, 1fr);
                "
            >
                <ButtonBasic
                    v-for="(item, index) in environment_sounds"
                    class="sidepanel-environment-button w-full aspect-ratio rounded-md bg-none flex gap-sm relative y-center bg-color-brand-three"
                    :index="index"
                    @click="addEnvironmentSound(item)"
                >
                    <div 
                        class="sidepanel-environment-title p-sm absolute color-brand-two bg-color-brand-one rounded-sm"
                        style="bottom: var(--scale-brand-md); left: var(--scale-brand-md);"
                    >
                        <p class="font-sm text-start">{{ item?.title }}</p>
                    </div>
                </ButtonBasic>
            </div>

            <MiscDivision/>

            <ButtonBasic
                v-for="(item, index) in favorite_sounds_list"
                class="sidepanel-environment-button w-full rounded-md bg-none flex gap-sm p-lg y-center bg-color-brand-three"
                :index="index"
            >
                <div class="sidepanel-environment-title w-full h-full color-brand-one">
                    <p class="font-md">{{ item?.name }}</p>
                </div>
            </ButtonBasic>
            
        </div>
    </div>
</template>

<script>

import { useEnvironmentStore } from '@/stores/environment.js'

import { Storage } from "@/utils/storage.js"

import * as Button from '@/components/Button'
import * as Misc from '@/components/Misc'

export default{
    data(){
        return{
            environment_sounds: [
                {
                    title: "Chuva Fraca",
                    icon: "drop",
                    sound: "calm-rain"
                },
                {
                    title: "Trovões Distantes",
                    icon: "thunder",
                    sound: "distant-thunder"
                },
                {
                    title: "Fogueira",
                    icon: "fire",
                    sound: "campfire"
                },
                {
                    title: "Queda D'Agua",
                    icon: "drop",
                    sound: "waterfall"
                },
                {
                    title: "Piano",
                    icon: "piano",
                    sound: "piano"
                },
            ],
            favorite_sounds_list: []
        }
    },
    components:{
        ...Button,
        ...Misc
    },
    computed: {
    },
    methods:{
        addEnvironmentSound(sound_data){
            useEnvironmentStore().addEnvironment(sound_data);
        },
        toggleEnvironmentInterface(){
            useEnvironmentStore().toggleEnvironmentInterface()
        }
    },
    created(){
        this.favorite_sounds_list = Storage.get("app-favorites").data.items
    }
}

</script>

<style lang="scss">

.sidepanel-environment-wrapper{
    background: rgba(0, 0, 0, 0.150);

    .sidepanel-environment-button{

        .sidepanel-environment-icon{
            border-top-left-radius: var(--scale-brand-md);
            border-bottom-left-radius: var(--scale-brand-md);
        }

        .sidepanel-environment-title{
            border-top-right-radius: var(--scale-brand-md);
            border-bottom-right-radius: var(--scale-brand-md);
        }

    }

}

</style>