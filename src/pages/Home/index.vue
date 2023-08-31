<template>

    <div>

        <!--____Title_____-->
        <div class="px-3 flex">
            <div class="mr-2">
                <img :src="pngs[0]" alt="logo" class="max-h-[80px]" />
            </div>
            
            <div>
                <p class="text-[13px]">Anneoyang, Chou!</p>
                <p class="w-[90%] text-[23px] font-semibold" style="line-height: 120%;">What do you want to eat?</p>
            </div>
        </div>


        <!--____Search_____-->
        <div class="px-3 my-6">
            <div class='p-4 rounded-[15px] bg-[#F8F9FA] flex items-center' style="border:1px solid #DBDEE2">
                <img :src="pngs[1]" alt="ico" class="h-[17px] mr-3" />

                <input type="text" placeholder="try our new Steak Fries Veggies" class="w-full outline-none bg-[#F8F9FA]" />
            </div>
        </div>


        <!--____Special Offers_____-->
        <div class="mb-5">
            <div class="flex justify-between px-3">
                <p class="font-semibold text-[18px]">Special Offers!</p>

                <div class="flex items-center">
                    <span class="text-[13px] text-[#CB121E]">View All</span>
                    <img :src="pngs[4]" alt="ico" class="ml-2 mt-[2px] h-[9px]" />
                </div>
            </div>

            <div class="pl-3 py-2 flex items-center overflow-y-scroll scrollbar-none">
                <div v-for="(count, index) in '.'.repeat(4).split('')" class="min-w-[320px] mr-2 relative">
                    
                    <div class="absolute top-0 left-0 h-full flex items-center -ml-[15px]">
                        <div class="rounded-[50%] p-[11px] bg-white"></div>
                    </div>

                    <img :src="pngs[2]" alt="img"  class="min-w-full h-[130px] rounded-[10px]" />


                    <div v-if="index==3" class="absolute top-0 -right-[15px] h-full flex items-center">
                        <div class="rounded-[50%] p-[11px] bg-white"></div>
                    </div>
                </div>
            </div>
        </div>



        <!--____Category____-->
        <div class="mb-5">
            <p class="px-3 text-[18px] font-semibold">Category</p>

            <div v-if="wifiConnectivity" class="py-2 pl-3 flex overflow-y-scroll scrollbar-none">
                <div v-for="(data, index) in categoriesList.slice(1)" class="min-w-[200px] h-[300px] overflow-hidden rounded-[17px] relative mr-2">
                    <img :src="data.strCategoryThumb" alt="img" class="w-full h-full object-cover" />
                    <div class='absolute top-0 w-full h-full bg-[#00000080] p-4'>
                        <div class='absolute bottom-[9%] text-white'>
                            <p class="font-semibold">{{ data.strCategory }}</p>
                            <p>9 Recipes</p>
                        </div>
                    </div>
                </div>
            </div>

            <!--___No Wifi only___-->
            <div v-else class="p-5 mx-3 rounded-[18px] shadow-md">

                <div class="flex justify-center">
                    <img :src="pngs[7]" alt="ico"  class="h-[30px] mb-3" />
                </div>

                <div class="flex justify-center">
                    <p class="w-[90%] text-center">For better experience use this application with internet.</p>
                </div>
            </div>
        </div>


        <!--____What's New____-->    
        <div class="px-3 mb-5">
            <p class="text-[18px] font-semibold">What's New</p>
            <div class="my-2 rounded-[17px] overflow-hidden">
                <img :src="pngs[3]" alt="img" class="w-full h-full"/>
            </div>
        </div>



        <!--____Most Popular____-->
        <div class="px-3">
            <p class="text-[18px] font-semibold">Most Popular</p>

            <div class="grid grid-cols-2">
                <div v-for="(data, index) in mP" class="overflow-hidden">
                    <div class="bg-[#E9ECEF] rounded-[17px] mx-1 mt-2 p-3">
                        <div class="flex justify-center mb-5">
                            <img :src="data.img" alt="img" class="h-[110px] p-2"/>
                        </div>

                        <div class="px-2 pb-3">
                            <p class="text-[14px] font-semibold truncate">{{ data.name }}</p>
                            <p class="text-[13px] mb-3">{{ data.category }}</p>

                            <div class="flex justify-between items-center">
                                <p class="text-[#CC0F1B] font-bold text-[14px]">P {{ data.price }}</p>

                                <img :src="pngs[6]" alt="star" class="-mr-[5px] h-[20px]" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <button 
            v-if="!showNav" 
            @click="pageSelectedF(1, 'Order Now!')"
            class="fixed bottom-[2%] right-[3%] bg-[#D20F1B] text-white rounded-[15px] py-4 z-10 text-[15px] w-[40%] shadow-lg">Order Now!</button>
    </div>

</template>

<script>
    import { Logo, Search, Img1, Img2, Arrow, SampleImg, Mp1, Mp2, Mp3, Mp4, Star, Wifi } from '../../utilities/png.js';

    export default {
        props: ['showNav', 'pageSelectedF', 'categoriesList', 'wifiConnectivity'],
        data(){
            return {
                pngs: [Logo, Search, Img1, Img2, Arrow, SampleImg, Star, Wifi],
                mP: [{
                    img: Mp1,
                    name: 'Steak Fries Veggies',
                    category: 'Meat',
                    price: '175'
                }, {
                    img: Mp2,
                    name: 'Chicken Salad',
                    category: 'Chicken',
                    price: '172'
                },
                {
                    img: Mp3,
                    name: 'Sovertes Primaver aasdas asd ',
                    category: 'Desset',
                    price: '185'
                },
                {
                    img: Mp4,
                    name: 'Fried Chicken',
                    category: 'Chicken',
                    price: '175'
                }]
            }
        }
    }
</script>