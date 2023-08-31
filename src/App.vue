<script src="./App.js"></script>

<template>
    <div class="flex text-[14px]">

        <!--___Left Side Nav___-->
        <div v-if="showNav" class="w-[80%]">
            <LeftSideNav :pageSelectedF="pageSelectedF" />
        </div>
        

        <!--___Main Pages___-->
        <div :class="`${showNav ? 'w-[20%]':'w-full'} overflow-hidden`">
            <Main :showNavF="showNavF" :showNav="showNav" :pageSelected="pageSelected" :pageSelectedF="pageSelectedF" :pageName="pageName" />
        </div>
    </div>
</template>