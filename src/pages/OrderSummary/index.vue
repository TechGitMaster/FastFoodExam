<template>

    <div class="relative pb-[80px]">

        <!--_____Information and Addresses____-->
        <div v-for="(data, index) in info" :class="`flex mx-3 mb-2 ${ data.clicked ? '':'items-center' }`">
            <div 
                @click="data.clicked = !data.clicked"
                :class="`rounded-[20px] mr-2 p-4 bg-[#E9ECEF] text-[#767E85] ${ data.clicked ? 'w-[75%]':'w-[95%]' }`">

                <div class="flex justify-between">
                    <p class="font-semibold mb-2 text-black truncate">{{ data.titleN }}</p>

                    <input v-if="index > 0" @click.stop="() => {}" name="radio" type="radio" class="w-[17px]" :checked="index === 1" />
                </div>

                <div class="w-[90%]">
                    <p>{{ data.addressC }}</p>
                    <p>{{ data.email }}</p>
                </div>
            </div>

            <!--___Pen and Delete___-->
            <div v-if="data.clicked" class="w-[25%] min-h-full flex">
                <div class="bg-[#FCE4CF] p-3 flex items-center rounded-[15px] mr-2">
                    <img :src="pngs[0]" alt="ico" class="max-h-[23px]" />
                </div>

                <div class="bg-[#F5D7DA] p-3 flex items-center rounded-[15px]">
                    <img :src="pngs[1]" alt="ico" class="max-h-[23px]" />
                </div>
            </div>


            <!--___3 Dots____-->
            <div v-if="!data.clicked" :class="`w-[5%] flex items-center justify-center`">
                <div>
                    <div class="p-[4px] bg-[#F9BE05] rounded-[50%]"></div>
                    <div class="p-[4px] bg-[#F9BE05] rounded-[50%] my-2"></div>
                    <div class="p-[4px] bg-[#F9BE05] rounded-[50%]"></div>
                </div>
            </div>
        </div>


        <!--____Orders____-->
        <div class="my-6">
            <p class="font-semibold text-[20px] mb-2 px-3">Orders</p>

            <div :class="`flex mx-3 mb-2 ${ orderClicked ? '':'items-center' }`">
                 <div 
                    @click="orderClicked = !orderClicked"
                    :class="`rounded-[20px] mr-2 p-5 bg-[#E9ECEF] ${ orderClicked ? 'w-[87%]':'w-[95%]' }`">

                     <!--____Info foods_____-->
                    <div class="flex">
                        <img :src="selectedMeal.strMealThumb" alt="food" class="h-[60px] mr-3 rounded-[20px]" />
                        <div class="">
                            <p class="font-semibold text-[15px] mb-2 truncate">{{ selectedMeal.strMeal }}</p>
                            <p>1x Tomato Sauce</p>
                            <p>1x Regular Coke</p>
                            <p>1x Friend Chicken</p>
                        </div>
                    </div>

                    <div class="my-5" style="border: 1px solid rgb(228, 222, 222)"></div>

                    <!--____Price_____-->
                    <div class="flex justify-between">
                        <p class="text-[20px] text-[#CC0F1B] font-semibold">P 185</p>

                        <div class="flex items-center">
                            <div class="p-3 rounded-lg bg-[#cbced1]" @click.stop="bttnPlusMinus > 1 ? bttnPlusMinus--:bttnPlusMinus = 1">
                                <img :src="pngs[4]" alt="ico" class="h-[10px]" />
                            </div>
                        
                            <p class="mx-5 font-semibold text-[15px]">{{ bttnPlusMinus }}</p>
                        
                            <div class="p-3 rounded-lg bg-[#cbced1]" @click.stop="bttnPlusMinus++">
                                <img :src="pngs[3]" alt="ico" class="h-[10px]" />
                            </div>
                        </div>

                    </div>
                 </div>
             
                 <!--___Delete___-->
                 <div v-if="orderClicked" class="w-[13%] min-h-full flex">                     
                     <div class="bg-[#F5D7DA] p-3 flex items-center rounded-[15px]">
                         <img :src="pngs[1]" alt="ico" class="max-h-[23px]" />
                     </div>
                 </div>
             
             
                 <!--___3 Dots____-->
                 <div v-if="!orderClicked" :class="`w-[5%] flex items-center justify-center`">
                     <div>
                         <div class="p-[4px] bg-[#F9BE05] rounded-[50%]"></div>
                         <div class="p-[4px] bg-[#F9BE05] rounded-[50%] my-2"></div>
                         <div class="p-[4px] bg-[#F9BE05] rounded-[50%]"></div>
                     </div>
                 </div>
             </div>
        </div>


        <!--____Payment Option_____-->
        <div class="px-3">
            <div class="mb-4">
                <p class="font-semibold text-[20px] mb-2">Payment Option</p>

                <div v-for="(options, index) in paymentOptions" class="rounded-[20px] p-4 bg-[#E9ECEF] mb-3">
                    <div class="flex justify-between mb-1">

                        <div v-if="index <= 1">
                            <p class="font-semibold mb-2 text-black text-[15px]">
                                {{ options.titleI }}
                                <span v-if="index === 1" class="text-[#CC0F1B]">{{ options.titleP }}</span>
                            </p>
                        </div>
                        
                        <img v-else :src="options.titleI" alt="ico" class="h-[30px] mb-2" />

                        <input name="payment" type="radio" class="w-[17px]" :checked="index === 0" />
                    </div>

                    <p class="text-[#767E85]">{{ options.description }}</p>
                </div>
            </div>

            <div class="font-semibold text-[15px] mb-3">
                <div class="flex justify-between mb-1">
                    <p>Subtotal</p>
                    <p>P 185</p>
                </div>
                <div class="flex justify-between">
                    <p>Delivery Charge</p>
                    <p>P 59</p>
                </div>
            </div>


            <div class="bg-[#F8F9FA] p-4 rounded-[20px]" style="border: 1px solid #E6E9EC">
                <p class="text-[#999EA4] mb-1">Change for</p>
                <p class="text-[16px] text-[#E6E9EC]">e.g. 1,000</p>
            </div>
        </div>


        <!--____Place Order_____-->
        <div 
            class="fixed w-full flex justify-between bg-white items-center left-0 bottom-0 px-4 py-3" 
            style="border-top: 2px solid #E6E9EC">

            <div>
                <p class="mb-1">Grand Total</p>
                <p class="text-[17px] font-semibold">P 244</p>
            </div>

            <button 
                @click="pageSelectedF(4, 'Order Received')"
                class="w-[60%] bg-[#D20F1B] text-white rounded-[15px] py-4 z-10 shadow-lg font-semibold">Place Order</button>
        </div>
    </div>

</template>

<script>
    import { Pen, Delete, Mp1, Plus, Minus, Paypal, Paynamics } from '../../utilities/png.js';

    export default {
        props: [ 'pageSelectedF', 'selectedMeal' ],

        data(){
            return {
                pngs: [ Pen, Delete, Mp1, Plus, Minus ],
                info: [
                    {
                        titleN: 'Chou Tzuyu',
                        addressC: '+63 912 345 6789',
                        email: 'chou.tzu-yu@email.com',
                        clicked: false
                    },
                    {
                        titleN: 'My Home Address',
                        addressC: 'No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234 Philippines',
                        email: '',
                        clicked: false
                    },
                    {
                        titleN: 'Work/Office',
                        addressC: '3rd flor Aneyeong Bldg. Seareal St. Joaqin City 3456 Philippines',
                        email: '',
                        clicked: false
                    }
                ],
                orderClicked: false,
                bttnPlusMinus: 1,
                paymentOptions: [
                    {
                        titleI: 'Cash on Delivery',
                        titleP: '',
                        description: 'Pay when you received the order'
                    },
                    {
                        titleI: 'Loyalty Points',
                        titleP: '(0 points)',
                        description: 'Pay when you received the order'
                    },
                    {
                        titleI: Paypal,
                        titleP: '',
                        description: 'A new tab will open to access your account'
                    },
                    {
                        titleI: Paynamics,
                        titleP: '',
                        description: 'Choose paynamics services available from you'
                    }
                ]
            }
        },

        created(){
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }, (100));
        }
    }

</script>