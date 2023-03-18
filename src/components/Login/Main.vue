<template>
    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
        >
          <b-form-checkbox value="RememberMe">Remember Me</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>


      <b-container>
        <b-row>
          <b-col align-self="center">
            <b-button>Forgot Password?</b-button>
            <b-button>Don't have an account?</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-col>
          <b-col>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-col>
        </b-row>
      </b-container>

      
    </b-form>

    <!-- Shows the form object in real time -->
    
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
        
    </div>

</template>

<script>

export default {
    name: 'LoginMain',
    components: {},
    data() {
        return {
            form: {
          email: '',
          password: '',
          food: null,
          checked: []
        },
        show: true
        }

    },
    computed: {

    },
    methods: {
        // On submitting, shows the version of the form
        onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}

</script>

<style>
</style>