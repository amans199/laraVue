<template>
  <div class="container">
    <div class="justify-content-center">
      <ul
        id="breadcrumb199__list"
        data-splitter=" / "
        data-margin-items="2px"
        data-selected-color="#000"
      ></ul>

      <!-- <div class="box box-widget widget-user">
          <div
            class="widget-user-header bg-black bg-primary"
            style="background: url('/img/bg-profile.png') center center;"
          >
            <h3 class="widget-user-username">Elizabeth Pierce</h3>
            <h5 class="widget-user-desc">Web Designer</h5>
          </div>
          <div class="widget-user-image">
            <img class="img-circle" src alt="User Avatar" />
          </div>
          <div class="box-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">3,200</h5>
                  <span class="description-text">SALES</span>
                </div>
              </div>
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">13,000</h5>
                  <span class="description-text">FOLLOWERS</span>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">35</h5>
                  <span class="description-text">PRODUCTS</span>
                </div>
              </div>
            </div>
          </div>
      </div>-->
      <section class="content">
        <div class="row">
          <div class="col-md-3">
            <!-- Profile Image -->
            <div class="box box-primary">
              <div class="box-body box-profile">
                <img
                  class="profile-user-img img-responsive img-circle"
                  id="profile-user-img"
                  :src="getProfilePhoto(this.profilePhoto)"
                  alt="User profile picture"
                />

                <h3 class="profile-username text-center">{{form.name}}</h3>

                <p class="text-muted text-center">{{form.type}}</p>

                <ul class="list-group list-group-unbordered">
                  <li class="list-group-item">
                    <b>Followers</b>
                    <a class="pull-right">1,322</a>
                  </li>
                  <li class="list-group-item">
                    <b>Following</b>
                    <a class="pull-right">543</a>
                  </li>
                  <li class="list-group-item">
                    <b>Friends</b>
                    <a class="pull-right">13,287</a>
                  </li>
                </ul>

                <a href="#" class="btn btn-primary btn-block">
                  <b>Follow</b>
                </a>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->

            <!-- About Me Box -->
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">About Me</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <strong>
                  <i class="fa fa-book margin-r-5"></i> Education
                </strong>

                <p
                  class="text-muted"
                >B.S. in Computer Science from the University of Tennessee at Knoxville</p>

                <hr />

                <strong>
                  <i class="fa fa-map-marker margin-r-5"></i> Location
                </strong>

                <p class="text-muted">Malibu, California</p>

                <hr />

                <strong>
                  <i class="fa fa-pencil margin-r-5"></i> Skills
                </strong>

                <p>
                  <span class="label label-danger">UI Design</span>
                  <span class="label label-success">Coding</span>
                  <span class="label label-info">Javascript</span>
                  <span class="label label-warning">PHP</span>
                  <span class="label label-primary">Node.js</span>
                </p>

                <hr />

                <strong>
                  <i class="fa fa-file-text-o margin-r-5"></i> Notes
                </strong>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          <!-- /.col -->
          <div class="col-md-9">
            <div class="nav-tabs-custom">
              <ul class="nav nav-tabs">
                <li>
                  <a href="#settings" data-toggle="tab">Settings</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="settings">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label for="inputName" class="col control-label">Name</label>

                      <div class="col-sm-10">
                        <input
                          type="text"
                          v-model="form.name"
                          class="form-control"
                          id="inputName"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail" class="col control-label">Email</label>

                      <div class="col-sm-10">
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail"
                          placeholder="Email"
                          v-model="form.email"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="photo" class="col control-label">Profile photo</label>

                      <div class="col-sm-10">
                        <b-form-file
                          placeholder="Choose a file or drop it here..."
                          id="photo"
                          drop-placeholder="Drop file here..."
                          @change="updateProfile"
                        ></b-form-file>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="BIO" class="col control-label">BIO</label>

                      <div class="col-sm-10">
                        <textarea
                          class="form-control"
                          id="BIO"
                          placeholder="BIO"
                          v-model="form.bio"
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        for="password"
                        class="col control-label"
                      >Password (Leave empty to not change)</label>

                      <div class="col-sm-10">
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="password"
                          v-model="form.password"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="col-sm-offset-2 col-sm-10">
                        <button
                          type="submit"
                          @click.prevent="updateInfo"
                          class="btn btn-danger"
                        >Update</button>
                      </div>
                    </div>
                  </form>
                </div>
                <!-- /.tab-pane -->
              </div>
              <!-- /.tab-content -->
            </div>
            <!-- /.nav-tabs-custom -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </section>
    </div>
  </div>
</template>
<style scoped lang="scss">
// .widget-user .widget-user-header {
//   background-size: cover;
// }
</style>
<script>
import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

export default {
  data() {
    return {
      form: new Form({
        id: "",
        name: "",
        email: "",
        password: "",
        type: null,
        bio: "",
        photo: ""
      }),
      profilePhoto: ""
    };
  },
  methods: {
    getProfilePhoto(photo) {
      if (photo) {
        return "img/profile/" + photo;
      } else {
        return "img/profile/no-img.jpg";
      }
    },
    updateInfo() {
      // we dont put the ID here because any one can see it and change it through the developer tools
      this.$Progress.start();
      this.form
        .put("api/profile/")
        .then(() => {
          this.$Progress.finish();
        })
        .catch(() => {
          this.$Progress.fail();
        })
        .finally(() => {
          // location.reload();
        });
    },
    updateProfile(e) {
      // prepare file upload with Base64
      let file = e.target.files[0],
        reader = new FileReader();
      if (file["size"] < 2111775) {
        reader.onloadend = file => {
          this.form.photo = reader.result;
          document.getElementById("profile-user-img").src = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        Swal.fire("Failed!", "There was something wrong", "warning");
      }
    }
  },
  mounted() {
    // console.log("Component mounted.");
    // this.getProfilePhoto();
  },
  created() {
    axios
      .get("api/profile")
      .then(({ data }) => this.form.fill(data))
      .finally(() => {
        this.profilePhoto = this.form.photo;
      });
  }
};
</script>
