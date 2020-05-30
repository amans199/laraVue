<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-if="!$gate.isAdmin()">
        <not-found></not-found>
      </div>
      <div class="col-md-12" v-if="$gate.isAdmin()">
        <passport-clients></passport-clients>
        <passport-authorized-clients></passport-authorized-clients>
        <passport-personal-access-tokens></passport-personal-access-tokens>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
