<template>
    <div>
        <b-row align-h="center" class="mt-5"> <h1>Explore Diagrams</h1></b-row>
            <!-- See styles - making all images the same size broke the animation -->
            <b-row align-h="center">
                <b-carousel
                id="carousel-1"
                ref="carousel"
                :interval="0"
                controls
                no-animation
                indicators
                background=""
                class="carousel"
                >
                    <!-- TODO: design = Card column groups: https://bootstrap-vue.org/docs/components/card#card-column-groups -->
                    <!-- TODO: Hook (bind?) the data to an API-->
                    <!-- TODO: Make images the same dimension -->

                    <b-carousel-slide
                    caption="First Slide"
                    text="This is the first slide"
                    img-src="https://biologydictionary.net/wp-content/uploads/2020/03/Essential-amino-acid.jpg"
                    >
                    <h1>Amino acids</h1>
                    </b-carousel-slide>
                    <b-carousel-slide
                    caption="First Slide"
                    text="This is the first slide"
                    img-src="https://media.proprofs.com/images/QM/user_images/2503852/Glycolysis.jpg"
                    >
                    <h1>Amino acids</h1>
                    </b-carousel-slide>
                    <b-carousel-slide
                    caption="First Slide"
                    text="This is the first slide"
                    img-src="https://alevelnotes.com/static/content_images/AminoAcidball-labels.png"
                    >
                    <h1>Amino acids</h1>
                    </b-carousel-slide>
                </b-carousel>
            </b-row>

    </div>

</template>

<script>
// import blank from ''

export default {
    name: 'HomeExplorer',
    components: {},
    data() {
        return {

        }

    },
    computed: {

    },
    methods: {

    },

  mounted()  {
    // this.$refs.carousel.$children.forEach((child) => console.log(child.computedHeight = 100))
  },
};
</script>

<style>

/* Overwriting the image-fluid properties (makes each sliding image different dimensions) */
/* Downside = makes transitions weird (therefore, turned off animation) */
img.img-fluid {
    height: 200px !important;
    width: 300px !important;
}

</style>