import Main from './pages/mainPage.vue';
import LeftSideNav from './components/LeftSideNavigation/index.vue';

export default {
    components: {
        Main,
        LeftSideNav
    },
    
    data(){
        return {
            showNav: false,
            pageSelected: 0,
            pageName: 'Home'
        }
    },

    created(){},

    methods:{
        showNavF(){
            this.showNav = !this.showNav;
        },
        pageSelectedF(count, pageName){
            this.pageSelected = count;
            this.pageName = pageName;
            this.showNav = false;
        }
    }
}