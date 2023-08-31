<template>
    

    <div class="mt-5">
        
        <div class="flex justify-center mb-2">
            <img :src="pngs[0]" alt="ico" class="h-[230px]" />
        </div>

        <div class="flex justify-center">
            <p class='w-[60%] text-center font-semibold text-[#cc8742] text-[20px]'>{{ pageName }} Feature Comming Soon!</p>
        </div>

    </div>


</template>

<script>
    import { ComingSoon } from '../../utilities/png.js';

    export default {
        props: [ 'pageName' ],
        data(){
            return {
                pngs: [ComingSoon]
            }
        }
    }
</script>