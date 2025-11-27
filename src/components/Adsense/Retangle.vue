<template>
    <ins 
        v-if="adsLoaded"
        class="adsbygoogle"
        style="display:block"
        :data-ad-client="adClient"
        :data-ad-slot="adSlot"
        data-ad-format="auto"
        data-full-width-responsive="true">
    </ins>
</template>

<script>
export default {
    name: "GoogleAd",
    data(){
        return{
            adsLoaded: false
        }
    },
    props: {
        adClient: {
            type: String,
            default: "ca-pub-5574985001749299"
        },
        adSlot: {
            type: String,
            required: true
        }
    },
    mounted() {
        if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
            this.adsLoaded = true;
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.warn("AdSense error:", e);
            }
        }
    }
};
</script>
