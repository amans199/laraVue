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

                <b-modal id="modal-1" centered title="BootstrapVue" @ok="handleOk">
                  <form ref="form" @submit.stop.prevent="createUser">
                    <div class="form-group">
                      <div class="form-group">
                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Name"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                        />
                        <has-error :form="form" field="name"></has-error>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-group">
                        <input
                          v-model="form.email"
                          type="text"
                          name="email"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('email') }"
                        />
                        <has-error :form="form" field="email"></has-error>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-group">
                        <input
                          v-model="form.password"
                          type="password"
                          name="password"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('password') }"
                        />
                        <has-error :form="form" field="password"></has-error>
                      </div>
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
                    <div class="form-group">
                      <input v-model="form.photo" type="text" name="photo" class="form-control" />
                    </div>
                    <!-- <alert-errors :form="form">There were some problems with your input.</alert-errors> -->
                  </form>
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
                  <th>Registered at</th>
                  <th>Modify</th>
                </tr>
                <tr v-for="user in users" :key="user.id">
                  <td>{{user.id}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.type | UpText}}</td>
                  <td>{{user.created_at | myDate}}</td>
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
// import { extend } from "vee-validate";
// import { required } from "vee-validate/dist/rules";
// extend("required", {
//   ...required,
//   message: "This field is required"
// });
import { Form, HasError, AlertError } from "vform";

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
export default {
  data() {
    return {
      names: {
        pagaName: "Dashboard"
      },
      users: {},
      form: new Form({
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: ""
      }),
      loading: true
    };
  },
  methods: {
    resetModal() {
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
      this.form.type = "";
      this.form.bio = "";
      this.form.photo = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.createUser();
      this.fetchUsers();
    },

    createUser() {
      this.$Progress.start();
      this.form
        .post("api/user")
        .then(({ data }) => {
          this.$nextTick(() => {
            this.$bvModal.hide("modal-1");
            this.resetModal();
            // todo : revise Custom events on vue docs
            this.fetchUsers();
            Toast.fire({
              icon: "success",
              title: "User Created successfully"
            });
          });
        })
        .finally(() => {
          this.$Progress.finish();
        });
      // Hide the modal manually
      // todo make the model doesn't hide if there are errors

      // this.users.push(this.form);
      // let newUser = {'id' : };
      // this.users = [...this.users, this.form];
      // this.users = [...this.users, user]
    },
    fetchUsers() {
      axios
        .get("api/user")
        .then(reponse => {
          this.users = reponse.data.data;
          if (this.users.length) {
            setTimeout(() => {}, 0);
          }
        })
        .catch(err => console.log(err))
        .finally(() => (this.loading = false));
    }
  },
  // created() {
  //   this.loadUsers();
  // },
  mounted() {
    // EventBus.$on("soft-reload", () => {
    //   this.fetchTrips();
    // });
    this.fetchUsers();
  }
};
</script>
