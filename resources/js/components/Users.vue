<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header d-flex align-items-center">
            <h3 class="card-title mb-0">Users</h3>

            <div class="card-tools d-flex flex-row">
              <div>
                <!-- <b-button variant="outline-primary" v-b-modal.modal-1> -->
                <b-button variant="outline-primary" @click="newModal">
                  <i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> Add New User
                </b-button>

                <b-modal
                  id="modal-1"
                  centered
                  :title="editmode ? 'Edit user' : 'Add New user'"
                  @ok="handleOk"
                >
                  <form ref="form" @submit.stop.prevent="editmode ? updateUser() : createUser()">
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
                          placeholder="Email"
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
                          placeholder="Password"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('password') }"
                        />
                        <has-error :form="form" field="password"></has-error>
                      </div>
                    </div>
                    <div class="form-group">
                      <b-form-select v-model="form.type" name="type" class="mb-3">
                        <b-form-select-option :value="null">Please select a Type</b-form-select-option>
                        <b-form-select-option value="author">Author</b-form-select-option>
                        <b-form-select-option value="contibutor">Contibutor</b-form-select-option>
                        <b-form-select-option value="subscriber">Subscriber</b-form-select-option>
                      </b-form-select>
                    </div>
                    <div class="form-group">
                      <textarea
                        v-model="form.bio"
                        type="text"
                        name="bio"
                        class="form-control"
                        placeholder="Bio"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        v-model="form.photo"
                        type="text"
                        placeholder="Photo"
                        name="photo"
                        class="form-control"
                      />
                    </div>
                    <!-- <alert-errors :form="form">There were some problems with your input.</alert-errors> -->
                  </form>
                  <!-- <template v-slot:modal-footer>
                    <div class="w-100">
                      <b-button
                        variant="secondary"
                        data-dismiss="modal-1"
                        size="md"
                        class="float-right"
                      >Cancel</b-button>
                      <b-button
                        variant="success"
                        size="md"
                        type="submit"
                        v-show="!editmode"
                        class="float-right"
                      >Create</b-button>
                      <b-button
                        variant="primary"
                        size="md"
                        type="submit"
                        class="float-right"
                        v-show="editmode"
                      >Update</b-button>
                    </div>
                  </template>-->
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
                    <a href="#" @click="editModal(user)">
                      <i class="fas fa-edit mr-2"></i>
                    </a>
                    <a href="#" @click="deleteUser(user.id)">
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
import { Form, HasError, AlertError } from "vform";

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
export default {
  data() {
    return {
      editmode: false,
      users: {},
      userToEditID: "",
      form: new Form({
        id: "",
        name: "",
        email: "",
        password: "",
        type: null,
        bio: "",
        photo: ""
      }),
      loading: true
    };
  },
  methods: {
    updateUser() {
      this.$Progress.start();
      this.form
        .put("api/user/" + this.form.id)
        .then(() => {
          //success
        })
        .catch(() => {
          this.$Progress.fail();
        });
    },
    editModal(user) {
      this.editmode = true;
      this.form.clear();
      this.form.reset();
      this.$bvModal.show("modal-1");
      this.form.fill(user);
      this.userToEditID = user.id;
      console.log("this.form.id" + this.form.id);
      console.log("this.userToEditID" + this.userToEditID);
    },
    newModal() {
      this.editmode = false;
      this.form.clear();
      this.form.reset();
      this.$bvModal.show("modal-1");
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.createUser();
      this.fetchUsers();
    },
    createUser() {
      this.form
        .post("api/user")
        .then(({ data }) => {
          this.$nextTick(() => {
            this.$Progress.start();
            this.$bvModal.hide("modal-1");
            this.form.reset();
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
    },
    deleteUser(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          this.form
            .delete("api/user/" + id)
            .then(() => {
              this.$Progress.start();

              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              this.$nextTick(() => {
                this.fetchUsers();
              });
            })
            .catch(err => {
              Swal.fire("Failed!", "There was something wrong", "warning");
              this.$Progress.fail();
            })
            .finally(() => {
              this.loading = false;
              this.$Progress.finish();
            });
        }
      });
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
