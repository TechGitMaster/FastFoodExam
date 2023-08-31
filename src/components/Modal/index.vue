<template>
    <div 
        @click="closeModal()"
        class="fixed top-0 left-0 w-full min-h-[100vh] bg-[#0000006b] z-20 px-6 flex justify-center items-center">

        <div @click.stop="() => {}" class="w-full bg-white rounded-[20px] shadow-lg px-4 py-[25px]">

            <div class="flex justify-center mb-2">
                <img :src="pngs[0]" alt="ico" class="h-[75px]" />
            </div>

            <p class="text-center text-[17px] font-semibold mt-4 mb-2">Successfully Added!</p>
            <p class="text-center text-[#767E85] mb-7">What do you want to do now?</p>

            <div class="flex justify-center mb-4">
                <button
                    @click="pageSelectedF(3, 'Order Summary')"
                    class=" w-[70%] bg-[#D20F1B] text-white rounded-[15px] py-3 z-10 font-semibold shadow-lg">Proceed to Checkout</button>
            </div>

            <p @click="pageSelectedF(1, 'Order Now!')" class="text-center text-[#CC0F1B] font-semibold">Add More</p>

        </div>
    </div>
</template>


<script>
    import { Success } from '../../utilities/png.js';

    export default {
        props: [ 'pageSelectedF', 'closeModal' ],

        data(){
            return {
                pngs: [Success]
            }
        }
    }
</script>