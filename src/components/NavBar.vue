<template>
<div>
    <b-navbar type="dark" variant="info" sticky class="">
        <b-navbar-brand href="#"><img class="logo" src="../assets/Logo.png" alt=""> </b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item to="">Home</b-nav-item>
            <b-nav-item to="/content">Content</b-nav-item>
            <b-nav-item to="/flashcards">Study</b-nav-item>
            <b-nav-item to="/planner">Planner</b-nav-item>
            <b-nav-item to="/statusExam">Status Exam</b-nav-item>
            <b-nav-item>Settings</b-nav-item>
            <b-nav-item-dropdown text="User">
                <b-dropdown-item>Profile</b-dropdown-item>
                <b-dropdown-item>Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
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

        }
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