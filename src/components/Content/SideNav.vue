<template>

    <div>
        <!-- Navbar (left-side of Content view) -->
        <b-card :class="{compact_card: isCompact}">

             <!-- Search input field + button -->
            <b-navbar >
                <b-navbar-nav >
                        <!-- Regular -->
                        <b-form-input   v-show="!isCompact"
                                        v-model="Search"
                                        class="ml-4 col-6"
                                        placeholder="Search"></b-form-input>

                        <!-- Compact -->
                        <b-form-input   v-show="isCompact"
                                        v-model="Search"
                                        class="ml-2 col-6"
                                        placeholder="Search"></b-form-input>
                        <b-button variant="outline-secondary" class="ml-1" size="sm" type="Submit">Search</b-button>
                </b-navbar-nav>
            </b-navbar>

            <!-- Menu button -->
            <!-- Pressed.sync = toggles boolean upon click-->
            <b-button  
                       :pressed.sync="isCompact" 
                       variant="outline-info"
                       class="col-7 mb-2">Menu</b-button>


            
            <b-card v-for="chapter,index in filteredChapters"
                    :key="chapter.Number">
                <b-card-header>
                    <b-button @click="setDisplay(index)"
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
                Chapters: this.$store.state.ContentList,
                Search: "",

            }
    
        },
        computed: {
            filteredChapters: function() {
                return this.Chapters.filter((chapter) => {
                    // match method = matches search term with a given string
                    return chapter.Title.toLowerCase().match(this.Search.toLowerCase()) 
                            || chapter.Description.toLowerCase().match(this.Search.toLowerCase())
                            // toString = converts string array into one long string
                            || chapter.ChapterItems.toString().toLowerCase().match(this.Search.toLowerCase())
                })
            }
    
        },
        methods: {
            setDisplay(index) {
                this.$store.commit("SET_DISPLAY", index)
            },
            
    
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
    