<template>
  <div>
    <slot name="hello">App did not send info to me...</slot>
    <slot
      name="hello2"
      :source="source"
    ></slot>
    <slot name="hello3"> App did not send info to me...</slot>
    <ul>
      <li
        v-for="item in list"
        :key="item"
        ref="items"
      >
        {{ item }}
      </li>
    </ul>

    <input ref="myInput" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      source: "I'm passing info from component data slot!",
      // We're also going to learn how to use refs...
      list: ["tacos are the best", "burritos", "salsa", "queso"],
      list_two: ["tacos are the best", "burritos", "salsa", "queso"],
    };
  },

  methods: {
    // Go to App.vue to see how this child component was referenced
    changeList() {
      this.list[0] = "I CHANGED";
      console.log((this.$refs.items[0].textContent = this.list[0]));
    },
  },
  mounted() {
    // Cool attributes list...
    // For each item, will list out ALL the possible properties/attributes on there...
    // console.log(this.$refs.items);
    // makes element draggable
    // this.$refs.items.forEach((item) => (item.draggable = true));
    // capitalizes the first letter the user inputs into input element
    // this.$refs.myInput.autocapitalize = true;
    // focuses (jumps to) element on page load. No more than one element per page can have this attribute
    // this.$refs.myInput.autofocus = true;
    // Allows the user to change the content of element
    // this.$refs.items.forEach((item) => (item.contentEditable = true));
    // sets the value of an input element
    // this.$refs.myInput.value = "click here";
    // Makes element uneditable by user
    // this.$refs.myInput.inert = true;
    //Hides the element
    // this.$refs.myInput.hidden = true;
    // list of attribute objects (name: value) of an element
    // this.$refs.items.forEach((item) => console.log(item.attributes[0]));
    // list of content for each item
    // this.$refs.items.forEach((item) => console.log(item.textContent));

    // sets the placeholder of an input
    this.$refs.myInput.placeholder = "hello";

    // on page display, user's cursor automatically starts in the input element
    this.$refs.myInput.focus();
  },
};
</script>
