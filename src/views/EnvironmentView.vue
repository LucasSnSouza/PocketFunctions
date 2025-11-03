<template>

    <div class="wrapper-homeview h-full font-sm">

        <ButtonBasic
            class="rounded-md p-lg w-full bg-color-brand-three"
        >
            <p class="color-brand-two">Adicionar novo Som</p>
        </ButtonBasic>


    </div>

</template>

<script>

import * as Misc from "@/components/Misc"
import * as Button from "@/components/Button"

export default {
    data(){
        return{
        }
    },
    components: {
        ...Misc,
        ...Button
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

.panel-information{

    height: calc( 100% - 48px );

}

</style>
