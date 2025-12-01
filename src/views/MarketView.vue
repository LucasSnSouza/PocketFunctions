<template>

    <div class="wrapper-market color-brand-two h-full font-sm flex flex-column gap-md">

        <h1 class="font-md">{{ $tr("market_view.market_title") }}</h1>
        <p class="w-3-4">
            {{ $tr("market_view.market_description") }}
        </p>

        <div class="flex gap-md">
            <ButtonBasic
                class="rounded-lg bg-color-brand-four w-half aspect-ratio color-brand-one p-lg flex flex-column gap-sm justify-between"
                @click="add_item_modal = true"
            >
                <div class="flex">
                    <div class="color-brand-two ghost rounded-md p-md">
                        <MiscIcon
                            icon="box-fill"
                            class="bg-color-brand-two"
                            :size="[20,20]"
                        />
                    </div>
                </div>
                <div class="color-brand-two text-start">
                    <h1 class="font-md">{{ $tr("market_view.add_item") }}</h1>
                    <p class="font-sm">{{ $tr("market_view.add_item_description") }}</p>
                </div>
            </ButtonBasic>
            <div
                class="w-half flex flex-column gap-md"
            >
                <ButtonBasic
                    class="rounded-lg bg-color-brand-four w-full h-full color-brand-one p-lg flex gap-md"
                    @click=""
                >
                    <div class="color-brand-two text-start flex flex-column y-start x-center">
                        <h1 class="font-md">{{ $tr("market_view.save_list") }}</h1>
                        <p class="font-sm">{{ $tr("market_view.save_list_description") }}</p>
                    </div>
                </ButtonBasic>
                <ButtonBasic
                    class="rounded-lg bg-color-brand-four w-full h-full color-brand-one p-lg flex gap-md"
                    @click=""
                >
                    <div class="color-brand-two text-start flex flex-column y-start x-center">
                        <h1 class="font-md">{{ $tr("market_view.compare_list") }}</h1>
                        <p class="font-sm">{{ $tr("market_view.compare_list_description") }}</p>
                    </div>
                </ButtonBasic>
            </div>
        </div>

        <div 
            class="flex flex-column gap-md scroll-y" 
            style="
                height: 75%; 
                padding-bottom: 80px;"
        >

            <div
                v-for="(item, index) in items_list"
                class="flex gap-md"
                :index="index"
            >
                <ButtonBasic 
                    class="w-full rounded-md p-lg flex flex-column text-start x-start color-brand-two bg-color-brand-four"
                    @click="note_preview_form = item, note_preview_modal = true"
                >
                    <p class="font-md">{{ item.name }}</p>
                </ButtonBasic>
            </div>

        </div>

        <ModalBasic
            v-if="add_item_modal"
            title="Adicionar item a lista"
            :cancel-button="$tr('modals.cancel')"
            :confirm-button="$tr('modals.include')"
            @cancel-action="add_item_modal = false"
            @confirm-action="addItem(), add_item_modal = false, showSuggestions = true, item_form = {}"
        >
            <div class="flex flex-column gap-lg">
                <div class="flex gap-md">
                    <div class="relative w-full">
                        <InputBasic
                            v-model="item_form['name']"
                            class="rounded-md p-lg w-full"
                            input-class="color-brand-two"
                            style="
                                border: 1px solid var(--color-brand-three);
                                box-shadow: 2px 2px 8px #00000011;
                            "
                            placeholder="Insira o nome do item"
                            :value="item_form['name']"
                        />
                        <div 
                            v-if="filteredItems.length"
                            class="absolute bg-color-brand-one p-lg rounded-lg w-full flex gap-md"
                            style="box-shadow: 2px 2px 8px #00000022; margin-top: 5px; flex-wrap: wrap;"
                        >
                            <ButtonBasic
                                v-for="(item, index) in filteredItems"
                                class="rounded bg-color-brand-three p-md color-brand-one"
                                :index="index"
                                @click="selectItem(item)"
                            >
                                <p>{{ item.name }}</p>
                            </ButtonBasic>                            
                        </div>
                    </div>
                </div>
                <div class="flex gap-md">
                    <InputBasic
                        v-model="item_form['amount']"
                        class="rounded-md p-lg w-full flex gap-md"
                        input-class="color-brand-two"
                        style="
                            border: 1px solid var(--color-brand-three);
                            box-shadow: 2px 2px 8px #00000011;
                        "
                        placeholder="Quantidade"
                        :value="item_form['amount']"
                    >
                        <p>Unidade(s)</p>
                    </InputBasic>
                    <InputBasic
                        v-model="item_form['value']"
                        class="rounded-md p-lg w-full flex gap-md"
                        input-class="color-brand-two"
                        style="
                            border: 1px solid var(--color-brand-three);
                            box-shadow: 2px 2px 8px #00000011;
                        "
                        placeholder="Valor"
                        :value="item_form['value']"
                    >
                        <p>R$</p>
                    </InputBasic>
                </div>
                <InputText
                    v-model="item_form['description']"
                    input-class="color-brand-two"
                    input-style="height: 60px;"
                    placeholder="Tem observações do produto?"
                    :value="item_form['description']"
                />
            </div>
        </ModalBasic>

    </div>

</template>

<script>

import { useEnvironmentStore } from '@/stores/environment.js'

import { MarketItems } from '@/assets/market/items.js'

import * as Misc from "@/components/Misc"
import * as Button from "@/components/Button"
import * as Sound from "@/components/Sound"
import * as Modal from "@/components/Modal"
import * as Input from "@/components/Input"

export default {
    data(){
        return{
            showSuggestions: true,
            add_item_modal: false,
            item_form: {},
            items_list: [],
            item_units: [
                {
                    text: "UN"
                },
                {
                    text: "PCT"
                }
            ]
        }
    },
    components: {
        ...Misc,
        ...Button,
        ...Sound,
        ...Modal,
        ...Input
    },
    methods: {
        toggleEnvironmentInterface(){
            useEnvironmentStore().toggleEnvironmentInterface()
        },
        toggleFavoriteEnvironmentInterface(){
            useEnvironmentStore().toggleFavoriteEnvironmentInterface()
        },
        togglePause(index){
            useEnvironmentStore().togglePause(index)
        },
        setVolume(index, volume){
            useEnvironmentStore().setVolume(index, volume)
        },
        selectItem(item) {
            this.item_form = { ...this.item_form, ...item }
            this.item_form.name = item.name
            this.showSuggestions = false
        },
        addItem(){
            this.items_list.push({...this.item_form})
        }
    },
    computed: {
        getEnvironmentSounds(){
            return useEnvironmentStore().getEnvironmentSounds
        },
        filteredItems() {
            if (!this.item_form?.name || !this.showSuggestions) return []
            const search = this.item_form.name.toLowerCase()
            return MarketItems.filter(item =>
            item.name.toLowerCase().startsWith(search)
            )
        }
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
