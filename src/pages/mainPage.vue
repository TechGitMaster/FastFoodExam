<template>

    <div :class="`${showNav ? 'min-w-[400px] h-[100vh]':''} ${ pageSelected === 0 ? 'pb-[90px]':'pb-[20px]'} relative`">
        <div 
            v-if="showNav" 
            @click="showNavF()"
            class="bg-[#0909096c] w-full h-[100vh] absolute top-0 left-0 z-10 "></div>
            
        <!--___Header___-->
        <div v-if="pageSelected != 4" class="mb-4 p-3">
            <Header :showNavF="showNavF" :pageSelected="pageSelected" 
                :pageSelectedF="pageSelectedF" :pageName="pageName" :selectedMeal="selectedMeal" />
        </div>
        

        <!--____Pages_____-->
        <div v-if="pageSelected === -1">
            <LoyaltyPoints />
        </div>

        <div v-else-if="pageSelected === 0">
            <Home :showNav="showNav" :pageSelectedF="pageSelectedF" :categoriesList="categoriesList" :wifiConnectivity="wifiConnectivity" />
        </div>
        
        <div v-else-if="pageSelected === 1">
            <OrderNow :pageSelectedF="pageSelectedF" :categoriesList="categoriesList" :wifiConnectivity="wifiConnectivity"
                :filterByCateg="filterByCateg" :filterList="filterList" :callSelectedMeal="callSelectedMeal" :callApi="callApi" />
        </div>

        <div v-else-if="pageSelected === 2">
            <FilterFoods :pageSelectedF="pageSelectedF" :selectedMeal="selectedMeal" />
        </div>

        <div v-else-if="pageSelected === 3">
            <OrderSummary :pageSelectedF="pageSelectedF" :selectedMeal="selectedMeal" />
        </div>

        <div v-else-if="pageSelected === 4">
            <OrderReceived :pageSelectedF="pageSelectedF" />
        </div>

        <div v-else="pageSelected > 4">
            <ComingSoon :pageName="pageName" />
        </div>
    </div>

</template>

<script>
    import Header from '../components/Header/index.vue';    
    import Home from './Home/index.vue';
    import OrderNow from './OrderNow/index.vue';
    import ComingSoon from './ComingSoon/index.vue';
    import LoyaltyPoints from './LoyaltyPoints/index.vue';
    import FilterFoods from './FilterFoods/index.vue';
    import OrderSummary from './OrderSummary/index.vue';
    import OrderReceived from './OrderReceived/index.vue';

    //Api integration calls_____________________
    import { categories, filterCateg, detailsById } from '../utilities/apiCall';


    export default {
        props: ['showNavF', 'showNav', 'pageSelected', 'pageSelectedF', 'pageName'],
        components: {
            Header,
            Home,
            OrderNow,
            ComingSoon,
            LoyaltyPoints,
            FilterFoods,
            OrderSummary,
            OrderReceived
        },

        data(){
            return {
                categoriesList: [{ idCategory: 0, strCategory: 'All', strCategoryThumb: '' }],
                filterList: [],
                selectedMeal: {},
                wifiConnectivity: false
            }
        },

        created(){
            this.callApi();
        },

        methods: {
            callApi(){
                this.categoriesList = [{ idCategory: 0, strCategory: 'All', strCategoryThumb: '' }];
                this.callCateg();
                this.filterByCateg('All');
            },

            async callCateg(){
                const { success, data } = await categories();

                if(success) this.categoriesList = [...this.categoriesList, ...data];

                this.wifiConnectivity = success;
            },

            async filterByCateg(filter){
                const { success, data } = await filterCateg(filter);

                if(success) this.filterList = data;

                this.wifiConnectivity = success;
            },

            async callSelectedMeal(id){
                const { success, data } = await detailsById(id);

                if(success) this.selectedMeal = data;

                this.wifiConnectivity = success;
            }
        }

    }
</script>