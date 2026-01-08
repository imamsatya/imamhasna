<template>
  <div class="sakura-container">
    <div v-for="i in count" :key="i" class="sakura" :style="getStyle(i)"></div>
  </div>
</template>

<script setup>
const count = 30; // Number of petals

const getStyle = (i) => {
  const left = Math.random() * 100 + "vw";
  const animationDelay = Math.random() * 10 + "s"; // Varied start times
  const animationDuration = 8 + Math.random() * 10 + "s"; // Slow fall
  const size = 10 + Math.random() * 15 + "px";
  const opacity = 0.4 + Math.random() * 0.4;

  return {
    left,
    animationDelay: `-${Math.random() * 10}s`, // Start immediately at random positions
    animationDuration,
    width: size,
    height: size,
    opacity,
  };
};
</script>

<style scoped>
.sakura-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50; /* Subtle overlay */
  overflow: hidden;
}

.sakura {
  position: absolute;
  top: -20px;
  background: linear-gradient(to right, #ffc0cb, #ffb7b2);
  border-radius: 100% 0 100% 0;
  animation-name: fall;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes fall {
  0% {
    top: -10%;
    transform: rotate(0deg) translateX(0);
  }
  25% {
    transform: rotate(45deg) translateX(20px);
  }
  50% {
    transform: rotate(90deg) translateX(-20px);
  }
  75% {
    transform: rotate(135deg) translateX(20px);
  }
  100% {
    top: 110%;
    transform: rotate(180deg) translateX(50px);
  }
}
</style>
