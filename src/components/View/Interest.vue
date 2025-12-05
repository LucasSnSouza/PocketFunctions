<template>

    <div class="subview-theme flex flex-column h-full gap-lg">

        <div class="flex gap-md y-center">
            <div class="p-lg bg-color-brand-four rounded">
                <MiscIcon
                    class="bg-color-brand-two"
                    icon="like"
                    :size="[20,20]"
                />
            </div>
            <h1 class="font-md">Escolha seus interesses</h1>
        </div>

        <div class="">
            <p class="font-md o-half">Escolha quais funções o aplicativo deve ter visiveis para você, essas escolhas podem ser modificadas futuramente.</p>
        </div>

    </div>

</template>

<script>

import * as Misc from "@/components/Misc"

export default{
    name: "sub-view-theme",
    data(){
        return{

        }
    },
    components:{
        ...Misc
    }
}

</script>

<style lang="scss">

</style>