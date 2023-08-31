<template>

    <div class="px-3">
        <div class="flex justify-between items-center mb-3">
            <div class="flex items-center">
                <img :src="pngs[0]" alt="ico" class="h-[45px] mr-4" />
                <p class="text-[16px] font-semibold">Beginner Tier</p>
            </div>

            <div class="flex items-center">
                <span class="text-[#CB121E] font-semibold">View All</span>
                <img :src="pngs[1]" alt="ico" class="ml-2 mt-[2px] h-[9px]" />
            </div>
        </div>

        <p class='text-[#716d6d]'>Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>


        <!--___Progress bar___-->
        <div class="my-12 flex justify-center">
            <div class="progress-bar shadow-md" style="background:radial-gradient(closest-side, white 79%, transparent 80% 100%),
            conic-gradient(#CC111C 20%, #F3D1D3 0);">
                <p class="font-semibold text-[23px]">20 / 160</p>
            </div>
        </div>


        <!--___Rewards___-->
        <div>
            <div class="flex justify-between">
                <p class="font-semibold text-[22px]">Rewards</p>
                <div class="flex items-center">
                    <span class="text-[#CB121E] font-semibold">How it Works</span>
                    <img :src="pngs[1]" alt="ico" class="ml-2 mt-[2px] h-[9px]" />
                </div>
            </div>

            <!--___Categories___-->
            <div class="flex overflow-x-scroll scrollbar-none my-3">
                <div 
                v-for="(data, index) in categ" 
                @click="categSelect = index"
                :class="`py-3 px-5 ${categSelect === index ? 'text-white bg-[#CC101B]':'text-[#6D757D] bg-[#DEE2E6]'} font-semibold rounded-[18px] mr-2`">

                {{ data }}
                </div>
            </div>

            <!--____Points____-->
            <div class="rounded-[15px] p-2 flex bg-[#E9ECEF] mt-4">
                <img :src="pngs[2]" alt="img" class="h-[80px] mr-2" />

                <div>
                    <p class="font-semibold">Steak Fries Veggies</p>
                    <p class="text-[13px]">Meat</p>

                    <div class="flex mt-3">
                        <img :src="pngs[0]" alt="ico" class="h-[25px] mr-4" />
                        <p class="font-semibold text-[17px]">20 points</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { Crown, Arrow, Mp1 } from '../../utilities/png.js';

    export default {
        data(){
            return {
                pngs: [ Crown, Arrow, Mp1 ],
                categ: ['All', 'Beginner', 'Intermediate', 'Loyal'],
                categSelect: 0
            }
        }
    }

</script>