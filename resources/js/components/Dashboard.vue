<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{names.pagaName}}</div>

          <div class="card-body">
            <div class="form-group">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <input
                  v-model="names.pagaName"
                  type="text"
                  name="pagaName"
                  class="form-control"
                  placeholder="Name"
                />
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "This field is required"
});
export default {
  data() {
    return {
      names: {
        pagaName: "Dashboard Test"
      }
    };
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
