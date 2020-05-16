<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard (Testing animejs)</div>
          <div class="card-body">
            <div class="boxes">
              <div class="box d-inline-block position-relative red">red</div>
              <div class="box d-inline-block position-relative blue">blue</div>
              <div class="box d-inline-block position-relative teal">teal</div>
              <div class="box d-inline-block position-relative purple">purple</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus"></style>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  data() {
    return {};
  },
  mounted() {
    // anime({
    //   targets: "div.box",
    //   translateY: [
    //     { value: 20, duration: 500 },
    //     { value: 0, duration: 800 }
    //   ],
    //   autoplay: true,
    //   loop: true,
    //   easing: "easeInOutSine",
    //   delay: function(el, i, l) {
    //     return i * 1000;
    //   }
    // });
    function getScrollPercent() {
      var h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    }
    const els = document.querySelectorAll(".box"),
      tl = anime.timeline({ autoplay: false });

    _.map(els, el => {
      anime.set(el, {
        // top: anime.random(0, 150) + "vh",
        // left: anime.random(0, 100) + "vw"
      });

      tl.add(
        {
          targets: el,
          translateY: [{ value: 100, duration: 500 }],
          loop: true,
          easing: "easeInOutSine",
          delay: function(el, i, l) {
            return i * 1000;
          }
        },
        0
      );
    });
    window.addEventListener("scroll", () => {
      const persentage = getScrollPercent();
      tl.seek(tl.duration * (persentage * 0.01));
    });
  }
};
</script>
