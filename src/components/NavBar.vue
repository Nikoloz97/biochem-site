<template>
<div>
    <b-navbar type="dark" variant="info" sticky class="">
        <b-navbar-brand href="#"><img class="logo" :src="logoURL" alt=""> </b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item to="">Home</b-nav-item>
            <b-nav-item to="/content">Content</b-nav-item>
            <b-nav-item to="/flashcards">Study</b-nav-item>
            <b-nav-item to="/planner">Planner</b-nav-item>
            <b-nav-item to="/statusExam">Status Exam</b-nav-item>
            <b-nav-item to="/how-to">Tutorial</b-nav-item>
        </b-navbar-nav>
        
        <!-- ml-auto = defaults to pushing content all the way to the right -->
        <!-- The v-bind src attribute's variable path = needs require()... See data section -->
        <!-- Can V-bind image dimensions... See data section -->
        <b-navbar-nav class="ml-auto">
            <b-img rounded="circle" :src="profileURL" v-bind="imgDimensions" class="mr-2"></b-img>
            <b-nav-item-dropdown :src="profileURL" text="User">
                <b-dropdown-item>Edit Profile</b-dropdown-item>
                <b-dropdown-item>Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>Settings</b-nav-item>
            
        </b-navbar-nav>
        
    </b-navbar>

</div>
</template>



<script>

export default {
    name: "NavBar",
    components: {},
    data() {
        return {
            logoURL: require('../assets/Logo.png'),
            profileURL: require('../assets/Profile.png'),
            imgDimensions: {height: 50, width:50}
        }
    },
    computed: {

    },
    methods: {
        

    }
}
</script>

<style>

.logo {
    height: 2.5rem
}

</style>