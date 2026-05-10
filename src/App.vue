<script setup>
import memory from './components/memory.vue';
import memory2 from './components/memory2.vue';
import hero from './components/hero.vue';
import picture_show from './components/picture_show.vue';
import { motion, useScroll, useTransform, useSpring } from "motion-v"
const { scrollY } = useScroll()
const rawFontSize = useTransform(scrollY, [0, 600], ["18vw", "2.5vw"])

// 2. Làm mượt bằng useSpring (giúp chữ thu nhỏ mượt như nhung)
const fontSize = useSpring(rawFontSize, { stiffness: 100, damping: 30, restDelta: 0.001 })
const color = useTransform(
  scrollY,
  [0, 4000, 8000],
  ["#FFFFFF", "#F472B6", "#8B5CF6"]
)
</script>
<template>
  <header class="fixed top-10 left-0 w-full z-50 pointer-events-none h-16">
    <motion.span :style="{ fontSize, color }" class="text-white px-4 leading-tight text-center font-bold ">
      happy Nari
    </motion.span>
  </header>
  <hero></hero>
  <memory></memory>
  <picture_show></picture_show>
</template>
