<template>
                <!-- TODO: Fix chapterItems (potential solution = splice string array and create one large string to search on) -->

    <div>
        <!-- Navbar -->
        <b-navbar >
            <b-navbar-nav >
                    <!-- Regular version -->
                    <b-form-input   v-show="!isCompact"
                                    v-model="Search"
                                    class="ml-5 col-6" 
                                    placeholder="Search"></b-form-input>
                    <b-button v-show="!isCompact" class="ml-1" size="sm" type="Submit">Search</b-button>

                    <!-- Compact version -->
                    <b-form-input   v-show="isCompact"
                                    v-model="Search"
                                    class="ml-1 col-3" 
                                    ></b-form-input>
                    <b-button v-show="isCompact" class="ml-1" size="sm" type="Submit">Search</b-button>
            </b-navbar-nav>
        </b-navbar>

        <!-- Main section -->
        <b-card v-for="chapter in filteredChapters"
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
                        Title: "Tacos",
                        Description: "Tacos are the best",
                        ChapterItems: ["Wheat", "Corn", "Multigrain"]
                    }, 
                    {
                        Number: "Chapter 3",
                        Title: "Burritos",
                        Description: "Burritos come at a close second",
                        ChapterItems: ["Beef", "Chicken", "Salsa"]

                    }
                ],
                Search: "",

            }
    
        },
        computed: {
            filteredChapters: function() {
                return this.Chapters.filter((chapter) => {
                    // match method = matches search term with the title
                    return chapter.Title.toLowerCase().match(this.Search.toLowerCase()) 
                            || chapter.Description.toLowerCase().match(this.Search.toLowerCase())
                            // Looping and filtering through each chapterItems = doesn't work...)
                            // || chapter.ChapterItems.forEach(chapterItem => {
                            //     chapterItem.toLowerCase().match(this.Search.toLowerCase())
                            // })
                            || chapter.ChapterItems.toString().toLowerCase().match(this.Search.toLowerCase())
                })
            }
    
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
    