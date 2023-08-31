<template>


    <div class="px-3">

        <!--____Search____-->
        <div>
            <div class='p-5 rounded-[15px] bg-[#F8F9FA] flex justify-between items-center' style="border:1px solid #DBDEE2">
                <img :src="pngs[0]" alt="ico" class="h-[20px] mr-3" />

                <input type="text" placeholder="try our new Beef Bibimbowl" class="w-full text-[15px] outline-none bg-[#F8F9FA]" />

                <img :src="pngs[1]" alt="ico" class="h-[20px] ml-3" />
            </div>
        </div>


        <div v-if="wifiConnectivity">
            <!--____Categories_____-->
            <div class="flex overflow-x-scroll scrollbar-none mt-4 mb-2">
                <div 
                    v-for="(data, index) in categoriesList" 
                    @click="selectedCategF(index, data.strCategory)"
                    :class="`py-3 px-5 ${categSelect === index ? 'text-white bg-[#CC101B]':'text-[#6D757D] bg-[#DEE2E6]'} font-semibold rounded-[18px] mr-2`">

                    {{ data.strCategory }}
                </div>
            </div>


            <!--____Foods____-->
            <div>
                <div class="grid grid-cols-2">
                    <div v-for="(data, index) in filterList">
                        <div @click="selectedMeal((categSelect !== 0 ? categoriesList[categSelect].strCategory: data.strCategory), data.idMeal)" class="rounded-[17px] overflow-hidden bg-[#E9ECEF] mx-1 mt-3">
                            <div class="mb-5 overflow-hidden">
                                <img :src="data.strMealThumb" alt="img" class="w-full h-[150px] object-cover"/>
                            </div>

                            <div class="px-3 pb-4">
                                <p class="text-[14px] font-semibold truncate">{{ data.strMeal }}</p>
                                <p class="text-[13px] mb-3">{{ categSelect !== 0 ? categoriesList[categSelect].strCategory: data.strCategory }}</p>

                                <div class="flex justify-between items-center">
                                    <p class="text-[#CC0F1B] font-bold text-[14px]">P {{ Math.floor(Math.random() * (200 - 100 + 1)) + 100 }}</p>

                                    <img :src="pngs[2]" alt="star" class="-mr-[5px] h-[20px]" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--___No Wifi only___-->
        <div v-else class="p-5 rounded-[18px] shadow-md mt-3">
            <div class="flex justify-center">
                <img :src="pngs[3]" alt="ico"  class="h-[30px] mb-3" />
            </div>

            <div class="flex justify-center">
                <p class="w-[90%] text-center">For better experience use this application with internet.</p>
            </div>
        </div>

    </div>


</template>

<script>
    import { Search, Filter, Star, Wifi } from '../../utilities/png.js';

    export default {
        props: [ 'pageSelectedF', 'categoriesList', 'filterByCateg', 'filterList', 'callSelectedMeal', 'callApi', 'wifiConnectivity' ],

        data(){
            return {
                pngs: [Search, Filter, Star, Wifi],
                categSelect: 0
            }
        },
        methods: {
            selectedCategF(count, filter){
                this.categSelect = count;
                
                this.filterByCateg(filter);
            },

            selectedMeal(category, id){
                this.callSelectedMeal(id);
                console.log(category);
                this.pageSelectedF(2, category);
            }
        },
        created(){
            this.callApi();
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }, (100));
        }
    }
</script>