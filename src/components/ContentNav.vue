<template>
    <div>
        <!-- Navbar -->
        <b-navbar >
            <b-navbar-nav >
                <b-nav-form>
                    <!-- TODO: Make search bar filter out chapters based on input-->
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
        <b-card v-for="chapter in Chapters"
                :key="chapter.Number"
                :class="{compact_list_items: isCompact}">

            <b-card-header>
                <!-- toggling nav. Pressed.sync attribute = toggles boolean upon click-->
                <b-button :pressed.sync="isCompact">
                    <h4 :class="{compact_chapters: isCompact}">{{ chapter.Number }}</h4>
                </b-button>
            </b-card-header>

            <b-card-body>
                <b-card-title >{{ chapter.Title }}</b-card-title>
                <b-card-text v-show="!isCompact">{{ chapter.Description }}</b-card-text>
            </b-card-body>

            <b-list-group v-for="chapterItem in chapter.ChapterItems" :key="chapterItem">
                <b-list-group-item> {{ chapterItem}} </b-list-group-item>
            </b-list-group>

        </b-card>      


            <!-- Main Section 2 (hard-coded) -->
            <!-- <b-card-header>
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
            </b-list-group> -->
            

    
    
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
                Chapters: [
                    {
                        Number: "Chapter 1",
                        Title: "Amino Acids",
                        Description: "Learning the structure, behavior, and functionality of the essential Amino Acids",
                        ChapterItems: ["Structure", "Behavior", "Functionality"]
                    },
                    {
                        Number: "Chapter 2",
                        Title: "Amino Acids",
                        Description: "Learning the structure, behavior, and functionality of the essential Amino Acids",
                        ChapterItems: ["Structure", "Behavior", "Functionality"]
                    }, 
                    {
                        Number: "Chapter 3",
                        Title: "Amino Acids",
                        Description: "Learning the structure, behavior, and functionality of the essential Amino Acids",
                        ChapterItems: ["Structure", "Behavior", "Functionality"]

                    }
                ],
                Search: "",

            }
    
        },
        computed: {
            // filteredSearch: function() {
            //     return 
            // }
    
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
    