<template>
    <div>
        <!-- Navbar -->
        <b-navbar >
            <b-navbar-nav >
                <b-nav-form>
                    <!-- Regular version -->
                    <b-form-input   v-show="!isCompact"
                                    class="ml-5 col-6" 
                                    placeholder="Search"></b-form-input>
                    <b-button v-show="!isCompact" class="ml-1" size="sm" type="Submit">Search</b-button>

                    <!-- Compact version -->
                    <b-form-input   v-show="isCompact"
                                    class="ml-1 col-3" 
                                    ></b-form-input>
                    <b-button v-show="isCompact" class="ml-1" size="sm" type="Submit">Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>

        <!-- Main section -->
        <b-card :class="{compact_list_items: isCompact}">
            <b-card-header>
                <!-- toggling nav. Pressed.sync attribute = toggles boolean upon click-->
                <b-button :pressed.sync="isCompact">
                    <h4 :class="{compact_chapters: isCompact}">Chapter 1</h4>
                </b-button>
            </b-card-header>

            <b-card-body>
                <b-card-title >Amino Acids</b-card-title>
                <b-card-text v-show="!isCompact">Learning the structure, behavior, and functionality of the essential Amino Acids</b-card-text>
            </b-card-body>

            <b-list-group>
                <b-list-group-item> Structure </b-list-group-item>
                <b-list-group-item> Behavior </b-list-group-item>
                <b-list-group-item> Functionality </b-list-group-item>
            </b-list-group>


            <!-- Main Section 2 (hard-coded) -->
            <b-card-header>
                <b-button :pressed.sync="isCompact">
                    <h4 :class="{compact_chapters: isCompact}">Chapter 2</h4>
                </b-button>
            </b-card-header>

            <b-card-body>
                <b-card-title>Amino Acids</b-card-title>
                <b-card-text  v-show="!isCompact">Learning the structure, behavior, and functionality of the essential Amino Acids</b-card-text>
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
                isCompact: false,
            }
    
        },
        computed: {
    
        },
        methods: {
            
    
        }
    }
    
    </script>
    
    <style>
    .compact_nav {
        width: 50%;
    }
    .compact_chapters {
        font-size: 0.5rem;
    }

    .compact_titles {
        width: 50%;
    }

    .compact_list_items {
        width: 50%;
        font-size: 0.5rem;
    }

    
    
    </style>
    