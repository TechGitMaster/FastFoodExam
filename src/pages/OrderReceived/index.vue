<template>
    
    <div class="h-[100vh] py-7 px-3 relative">
        <div class="flex justify-center mb-6">
            <img :src="pngs[0]" alt="ico" class="h-[190px]" />
        </div>

        <p class="text-center font-semibold text-[25px] mb-3">Order Received!</p>
        <p class="text-[#767E85] text-center text-[15px]">Your order <span class="text-[#CC0F1B]">No. 19049585</span> has successfully take and now being processed. Kindly wait for our notification regarding your oder.</p>
    
        <div class="absolute left-0 bottom-5 px-3 w-full">
            <button
                @click="pageSelectedF((8+3), 'Order Tracker')"
                class="w-[100%] bg-[#D20F1B] text-white rounded-[15px] py-5 text-[15px] mb-4 shadow-lg font-semibold">Track Order</button>
            <p 
                @click="pageSelectedF(0, 'Home')"
                class="text-center text-[16px] font-semibold text-[#CC0F1B]">Back to Home</p>
        </div>
    </div>

</template>

<script>
    import { Success } from '../../utilities/png.js';

    export default {
        props: [ 'pageSelectedF' ],
        data(){
            return {
                pngs: [ Success ]
            }
        }
    }

</script>