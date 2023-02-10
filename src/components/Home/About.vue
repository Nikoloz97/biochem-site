<template>
    <div>
        <b-row align-h="center" class="mt-5"> <h1>About G-Science</h1></b-row>

        <!-- Accordion -->
        <!-- role attribute = used for screen readers -->
        <!-- To make any section not-collapsed (open) by default, add a "visible" attribute to b-collapse-->
        <b-card no-body 
                class="mb-1 ml-5 mr-5">

                <!-- Goal... -->
                <b-card-header header-tag="header"
                               class="p-1"
                               role="tab">

                    <b-button block 
                              v-b-toggle.accordion-1 
                              variant="info"> {{ firstSection.Title }}</b-button>
                </b-card-header>

                <b-collapse id="accordion-1"
                            accodion="my-accordion"
                            role="tabpanel">
                    <b-card-body>
                        <b-card-text> {{firstSection.Goal }}</b-card-text>
                        <b-card-text>{{ firstSection.History}}</b-card-text>
                    </b-card-body>
                </b-collapse>


                <!-- About me... -->

                <b-card-header header-tag="header"
                               class="p-1"
                               role="tab">

                    <b-button block 
                              v-b-toggle.accordion-2 
                              variant="info"> {{ secondSection.Title }}</b-button>
                </b-card-header>

                
                <b-collapse id="accordion-2"
                            accodion="my-accordion"
                            role="tabpanel">
                    <b-card-body>
                        <b-card-text> {{secondSection.Description }}</b-card-text>
                    </b-card-body>
                </b-collapse>


                <!-- Resources...  -->

                <b-card-header header-tag="header"
                               class="p-1"
                               role="tab">

                    <b-button block 
                              v-b-toggle.accordion-3 
                              variant="info"> {{ thirdSection.Title }}</b-button>
                </b-card-header>

                <b-collapse id="accordion-3"
                            accodion="my-accordion"
                            role="tabpanel">
                    <b-card-body>
                        <b-card-text v-for="link in thirdSection.LinksArray" :key="link.Id"
                        > {{link.Title }}, {{ link.Link }}</b-card-text>
                    </b-card-body>
                </b-collapse>

                
        </b-card>

    </div>

</template>

<script>
// import blank from ''

export default {
    name: 'about',
    components: {},
    data() {
        return {
            firstSection: {
                Title: "The Mission",
                Goal: "The goal of G-science is to create a place where students can learn about Biochemistry",
                History: "The website was started after saving up diagrams/notes by a tutor, Nick Gotsiridze, which was found useful by a lot of his students"
            },
            secondSection: {
                Title: "Meet the Creator",
                Description: "Hey there! I'm Nick Gotsy, and I started G-Science"
            },
            thirdSection: {
                Title: "Useful resources",
                LinksArray: [
                    {
                        Id: 1,
                        Title: "Link 1",
                        Link: "https://link1"
                    },
                    {
                        Id: 2,
                        Title: "Link 2",
                        Link: "https://link2"
                    },
                    {
                        Id: 3,
                        Title: "Link 3",
                        Link: "https://link3"
                    }
                ]
            }

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