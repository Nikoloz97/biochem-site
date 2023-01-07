<template>
    <div>
        <!-- Navbar -->
        <b-navbar>
            <b-navbar-nav>
                <b-button>Hide</b-button>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-form >
                    <b-form-input class="ml-auto col-6" placeholder="Search"></b-form-input>
                    <b-button class="ml-1" size="sm" type="Submit">Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>

        <!-- Main section -->
        <b-card>
            <b-card-header>
                <h4>Chapter 1</h4>
            </b-card-header>

            <b-card-body>
                <b-card-title>Amino Acids</b-card-title>
                <b-card-text>Learning the structure, behavior, and functionality of the essential Amino Acids</b-card-text>
            </b-card-body>

            <b-list-group>
                <b-list-group-item> Structure </b-list-group-item>
                <b-list-group-item> Behavior </b-list-group-item>
                <b-list-group-item> Functionality </b-list-group-item>
            </b-list-group>


            <b-card-header>
                <h4>Chapter 2</h4>
            </b-card-header>

            <b-card-body>
                <b-card-title>Amino Acids</b-card-title>
                <b-card-text>Learning the structure, behavior, and functionality of the essential Amino Acids</b-card-text>
            </b-card-body>

            <b-list-group>
                <b-list-group-item> Structure </b-list-group-item>
                <b-list-group-item> Behavior </b-list-group-item>
                <b-list-group-item> Functionality </b-list-group-item>
            </b-list-group>
            

        </b-card>      
    
    
    </div>
    </template>
    
    <script>
    // import blank from ''
    
    export default {
        name: 'ContentNav',
        components: {},
        data() {
            return {
                
            }
    
        },
        computed: {
    
        },
        methods: {
    
        }
    }
    
    </script>
    
    <style>
    </style>
    