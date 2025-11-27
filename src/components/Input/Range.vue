<template>
    <input ref="slider" class="sound-basic-slide w-full" type="range" min="0" max="100" @input="updateFill"/>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    methods: {
        updateFill(e) {
            const el = e.target;
            const min = el.min ? el.min : 0;
            const max = el.max ? el.max : 100;

            const percent = (el.value - min) / (max - min);

            const thumbWidth = 20;
            const trackWidth = el.clientWidth;

            const offset = (thumbWidth / 2) / trackWidth * 100;

            const value = percent * (100 - offset * 2) + offset;

            el.style.setProperty("--value", `${value}%`);
        }
    },
    mounted(){
        this.$nextTick(() => {
            const input = this.$refs.slider;
            if (input) this.updateFill({ target: input });
        });
    }
}

</script>

<style lang="scss">

.sound-basic-slide {
    appearance: none;
    width: 100%;
    height: 100%;
    border-radius: var(--scale-brand-md);

    background: linear-gradient(
        to right,
        white var(--value, 0%),
        var(--color-brand-six) var(--value, 0%)
    );

    outline: none;
}

.sound-basic-slide::-webkit-slider-runnable-track {
    height: 100%;
    background: transparent; 
    border-radius: var(--scale-brand-md);
}

.sound-basic-slide::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 100%;
    background: white;
    box-shadow: 2px 2px 8px #00000011;
    border-radius: var(--scale-brand-md);
    cursor: pointer;
}

</style>