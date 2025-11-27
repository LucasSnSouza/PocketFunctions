<template>

    <div class="sound-basic-wrapper w-full p-lg rounded-md bg-color-brand-four flex flex-column x-start gap-lg">

        <div class="flex gap-lg y-end">

            <div 
                class="w-full rounded-sm aspect-ratio"
                :style="{
                    width: '48px',
                    backgroundImage: `url('/images/${photo}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }"
            >
            </div>

            <div class="flex flex-column">
                <p class="font-md">{{ title }}</p>
                <p class="font-md o-half">{{ description }}</p>
            </div>

        </div>

        <div class="flex gap-md">
            <ButtonBasic
                class="rounded-md p-lg bg-none color-brand-two ghost"
                @click="$emit('pause'), paused = !paused"
            >
                <MiscIcon
                    v-if="paused"
                    class="bg-color-brand-two"
                    icon="play-fill"
                    :size="[16,16]"
                />
                <MiscIcon
                    v-else
                    class="bg-color-brand-two"
                    icon="pause-fill"
                    :size="[16,16]"
                />
            </ButtonBasic>
            <InputRange/>
        </div>

    </div>

</template>

<script>

import * as Misc from "@/components/Misc"
import * as Button from "@/components/Button"
import * as Input from "@/components/Input"

export default {
    data(){
        return{
            paused: false
        }
    },
    props:{
        title: {
            type: String
        },
        description: {
            type: String,
            default: null
        },
        photo: {
            type: String,
            default: null
        }
    },
    components: {
        ...Misc,
        ...Button,
        ...Input
    },
    methods: {
    },
    computed: {
    },
    created(){
    }
}


</script>

<style lang="scss">


</style>
