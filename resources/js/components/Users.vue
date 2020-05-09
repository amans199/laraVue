<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header d-flex align-items-center">
            <h3 class="card-title mb-0">Users</h3>

            <div class="card-tools d-flex flex-row">
              <div>
                <b-button variant="outline-primary" v-b-modal.modal-1>
                  <i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> Create
                </b-button>
                <b-modal id="modal-1" centered title="BootstrapVue">
                  <div class="form-group">
                    <!-- <ValidationProvider rules="required" v-slot="{ errors }">
                      <input
                        v-model="form.name"
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Name"
                      />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>-->
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="form.email"
                      type="text"
                      name="email"
                      class="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="form.password"
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <b-form-select v-model="form.type" name="type" class="mb-3">
                      <b-form-select-option :value="null">Please select an option</b-form-select-option>
                      <b-form-select-option value="a">Option A</b-form-select-option>
                      <b-form-select-option value="b" disabled>Option B (disabled)</b-form-select-option>
                    </b-form-select>
                  </div>
                  <div class="form-group">
                    <textarea
                      v-model="form.bio"
                      type="text"
                      name="bio"
                      class="form-control"
                      placeholder="bio"
                    />
                  </div>
                </b-modal>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body p-0 table-responsive no-padding">
            <table class="table table-hover">
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Modify</th>
                </tr>
                <tr>
                  <td>183</td>
                  <td>John Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span class="label label-success">Approved</span>
                  </td>
                  <td>
                    <a href="#">
                      <i class="fas fa-edit mr-2"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-trash red" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
    </div>
  </div>
</template>
<style  lang="scss">
</style>

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
        pagaName: "Dashboard"
      },
      form: {
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: ""
      }
    };
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
