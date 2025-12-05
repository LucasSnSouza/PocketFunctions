<template>

    <div 
        class="app bg-color-brand-one color-brand-two w-full h-full flex flex-column relative hidden"
        :class="getTheme"
    >
        <div 
            v-if="$route.meta?.header"
            class="app-title p-xlg"
        >
            <div class="flex y-end gap-md">
                <img
                    style="height: 40px;" 
                    src="/public/images/lotus_icon.png"
                />
                <h1 class="font-lg">{{ $tr($route.meta?.title || "") }}</h1>
            </div>
        </div>
        <div class="app-information p-xlg h-full hidden" style="padding-bottom: 0px;">
            <RouterView/>
        </div>
        <div
            v-if="$route.meta?.navigation"
            class="app-navigation absolute w-full flex flex-column gap-lg"
            style="bottom: 0px; left: 0px; backdrop-filter: blur(var(--scale-brand-lg));"
        >
            <div 
                v-if="helper"
                class="flex gap-lg"
            >
                <InputBasic
                    class="bg-color-brand-four color-brand-two w-full ghost p-lg rounded flex"
                    style="padding-left: 24px;padding-right: 24px;"
                    placeholder="Me diga oque vocês está procurando ..."
                >
                    <MiscIcon
                        icon="star"
                        class="bg-color-brand-two"
                        :size="[20,20]"
                    />
                </InputBasic>
            </div>
            <div class="w-full flex x-center y-center gap-lg">
                <ButtonBasic
                    class="flex bg-none x-center y-center flex-column p-lg rounded-md"
                    @click="$router.push({ path: '/home' })"
                >
                    <div>
                        <MiscIcon
                            icon="home"
                            class="bg-color-brand-two"
                            :size="[20,20]"
                        />
                    </div>
                </ButtonBasic>
                <ButtonBasic
                    class="flex bg-none x-center y-center flex-column p-lg rounded-md"
                    @click="$router.push({ path: '/home' })"
                >
                    <div>
                        <MiscIcon
                            icon="applications"
                            class="bg-color-brand-two"
                            :size="[20,20]"
                        />
                    </div>
                </ButtonBasic>
                <ButtonBasic
                    class="flex bg-color-grandit-brand-one x-center y-center flex-column p-lg rounded"
                    @click="helper = !helper"
                >
                    <div>
                        <MiscIcon
                            icon="star"
                            class="bg-color-brand-one"
                            :size="[20,20]"
                        />
                    </div>
                </ButtonBasic>
                <ButtonBasic
                    class="flex bg-none x-center y-center flex-column p-lg rounded-md"
                    @click="$router.push({ path: '/home' })"
                >
                    <div>
                        <MiscIcon
                            icon="crown"
                            class="bg-color-brand-two"
                            :size="[20,20]"
                        />
                    </div>
                </ButtonBasic>
                <ButtonBasic
                    class="flex bg-none x-center y-center flex-column p-lg rounded-md"
                    @click="$router.push({ path: '/home' })"
                >
                    <div>
                        <MiscIcon
                            icon="person"
                            class="bg-color-brand-two"
                            :size="[20,20]"
                        />
                    </div>
                </ButtonBasic>
            </div>
        </div>

    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { useSystemStore } from '@/stores/system.js'
import { useEnvironmentStore } from '@/stores/environment.js'

import { Storage } from "@/utils/storage.js"

import * as Misc from "@/components/Misc"
import * as SidePanel from "@/components/Sidebar"
import * as Button from "@/components/Button"
import * as Modal from "@/components/Modal"
import * as Input from "@/components/Input"

export default {
    data(){
        return{
            helper: false,
        }
    },
    components: {
        ...Misc,
        ...Button,
        ...SidePanel,
        ...Modal,
        ...Input
    },
    methods: {
        toggleTheme(){
            useSystemStore().toggleTheme()
        },
    },
    computed: {
        getTheme(){
            return useSystemStore().getTheme
        }
    },
    created(){
        if(!Storage.exists("app-favorites")){
            Storage.create("app-favorites").set("items", []).save()
        }
        if(!Storage.exists("app-notes")){
            Storage.create("app-notes").set("items", []).save()
        }
        if(!Storage.exists("app-market")){
            Storage.create("app-market").set("items", []).save()
        }
    }
}

</script>

<style lang="scss">

body{
    #app{
        background: var(--color-brand-four);
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media screen and (min-width: 500px) {
    .app{
        width: 500px;
        height: 90%;
        border-radius: var(--scale-brand-xlg);
        box-shadow: 2px 2px 8px #00000011;
    }    
}

.app-title{
    padding-bottom: 0px;
}

.app-information{
    height: 100%;
}

.app-navigation{
    padding: 0px var(--scale-brand-xlg) var(--scale-brand-lg) var(--scale-brand-xlg);
}

</style>
