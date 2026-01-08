<template>
  <div>
    <div class="column items-center" style="height: 150px">
      <transition
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated fadeOut"
      >
        <q-card dark bordered class="my-card bg-accent">
          <q-card-section class="text-primary">
            <div class="text-h6">About</div>
            <div class="text-subtitle2">by Imam Satya Wedhatama</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section class="text-primary">
            Halo - halo semuanya semoga selalu bahagia seperti pasangan yang
            baru saja menikah. <br />
            Semoga aplikasinya bermanfaat :D
          </q-card-section>
        </q-card>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
// No reactive data or methods needed for this simple page
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
