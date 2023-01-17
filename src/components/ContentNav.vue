<template>

    <div>
        <!-- Navbar -->
        <b-card :class="{compact_card: isCompact}">
            <b-navbar >
                <b-navbar-nav >
                        <!-- Regular version -->
                        <b-form-input   v-show="!isCompact"
                                        v-model="Search"
                                        class="ml-4 col-6"
                                        placeholder="Search"></b-form-input>
                        <b-form-input   v-show="isCompact"
                                        v-model="Search"
                                        class="ml-2 col-6"
                                        placeholder="Search"></b-form-input>
                        <b-button variant="outline-secondary" class="ml-1" size="sm" type="Submit">Search</b-button>
                        <!-- Compact version -->
                        
                </b-navbar-nav>
            </b-navbar>

            <b-button  
                       :pressed.sync="isCompact" 
                       variant="outline-info"
                       class="col-7 mb-2">Menu</b-button>

            <!-- Main section -->
            <b-card v-for="chapter in filteredChapters"
                    :key="chapter.Number">
                <b-card-header>
                    <!-- toggling nav. Pressed.sync attribute = toggles boolean upon click-->
                    <b-button 
                               variant="outline-secondary" >
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
                            // toString = converts string array into one long string
                            || chapter.ChapterItems.toString().toLowerCase().match(this.Search.toLowerCase())
                })
            }
    
        },
        methods: {
            
    
        }
    }
    
    </script>
    
    <style>
    .compact_card {
        width: 65%
    }
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
    