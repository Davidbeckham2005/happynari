<script setup>
import memory from './components/memory.vue';
import hero from './components/hero.vue';
import wishes from './components/wishes.vue';
import largepicture from './components/largepicture.vue';
import complex_image from './components/complex_image.vue';
import { motion, useScroll, useTransform, useSpring } from "motion-v"
const { scrollY } = useScroll()
const rawFontSize = useTransform(scrollY, [0, 600], ["18vw", "2.5vw"])

// 2. Làm mượt bằng useSpring (giúp chữ thu nhỏ mượt như nhung)
const fontSize = useSpring(rawFontSize, { stiffness: 100, damping: 30, restDelta: 0.001 })
const color = useTransform(
  scrollY,
  [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000],
  ["#FFFFFF", "#F472B6", "#8B5CF6", "#FFFFFF", "#F472B6", "#8B5CF6", "#FFFFFF", "#F472B6", "#8B5CF6"]
)
import { getHello } from "./services/api.service.js"
const test = async () => {
  const res = await getHello()
  console.log(res)
}
test()
</script>
<template>
  <header class="fixed top-5 left-8 w-full z-50 pointer-events-none h-16">
    <motion.span :style="{ fontSize, color }" class="text-white leading-tight text-center font-bold ">
      happy Nari
    </motion.span>
  </header>
  <hero></hero>
  <div class="bg-pink-300/30">
    <memory></memory>
    <largepicture></largepicture>
    <complex_image>
    </complex_image>

  </div>
</template>
