<template>

    <div>

        <!--____Home Header____-->
        <div v-if="pageSelected === 0 || pageSelected > 4" class="flex items-center justify-between">

            <!--___Burger icon___-->
            <div @click="showNavF()">
                <img :src="pngs[0]" alt="ico" class="h-[30px]" />
            </div>

            <!--___Middle___-->
            <div class="flex items-center">
                <img :src="pngs[1]" alt="ico" class="h-[25px]" />
                <p class="font-semibold mt-[1px] mx-4">0 Points</p>
                <img :src="pngs[2]" alt="ico" class="h-[12px] mt-[2px]" />
            </div>

            <!--___User Icon___-->
            <div>
                <img :src="pngs[3]" alt="user" class="h-[35px]" />
            </div>
        </div>


        <!--____Order Now, Loyalty Points, and others Header_____-->
        <div v-else-if="pageSelected <= 3" class="flex items-center justify-between">
            <div class="flex items-center">

                <!--___Burger Icon___-->
                <div v-if="pageSelected === 1 || pageSelected === -1" @click="showNavF()">
                    <img :src="pngs[0]" alt="ico" class="h-[30px]" />
                </div>
                
                <!--___Arrow Back Icon___-->
                <div v-else @click="pageSelectedF(pageSelected === 3 ? 2:1, pageSelected === 3 ? selectedMeal.strCategory:'Our Foods')" class="rounded-[15px] bg-[#DEE2E6] p-3">
                    <img :src="pngs[5]" alt="ico" class="h-[16px]" />
                </div>


                <p class="text-[25px] font-semibold ml-5">{{ pageName === 'Order Now!' ? 'Our Foods': pageName }}</p>
            </div>

            <!--___Bag Icon___-->
            <div v-if="pageSelected === 1 || pageSelected === 2">
                <img :src="pngs[4]" alt="ico" class="h-[30px]" />
            </div>
        </div>
    </div>

</template>


<script>
    import { Burger, Crown, Arrow, User, Bag, ArrowLeft } from '../../utilities/png.js';

    export default {
        props: ['showNavF', 'pageSelected', 'pageSelectedF', 'pageName', 'selectedMeal'],

        data(){
            return {
                pngs: [Burger, Crown, Arrow, User, Bag, ArrowLeft]
            }
        }
    }
</script>