<template>
    <motion.div
        class="relative w-full overflow-hidden bg-transparent z-50 mask-edge transition-all duration-300 ease-out"
        :initial="{ opacity: 0.8, y: -30, filter: 'blur(6px)' }"
        :whileInView="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :transition="{ duration: 0.2, ease: 'easeOut' }"
        :viewport="{ once: true }">
        <div
            class="flex whitespace-nowrap border-t border-b border-pink-300/30 bg-pink-400/5 backdrop-blur-xs py-3 shadow-[0_0_20px_rgba(244,114,182,0.2)]">
            <motion.div class="flex space-x-12 items-center" :animate="{ x: ['0%', '-50%'] }" :transition="{
                duration: 60,         // Số giây càng lớn chữ chạy càng chậm
                ease: 'linear',       // Chạy đều, không dừng
                repeat: Infinity      // Lặp lại mãi mãi
            }" :while-hover="{ transition: { duration: 1000 } }">
                <div v-for="(quote, index) in [...quotes, ...quotes]" :key="index" class="flex items-center space-x-12">
                    <span
                        class="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] tracking-wider">
                        {{ quote }}
                    </span>
                    <span class="text-pink-400/50 text-xl">❤️💕</span>
                </div>
            </motion.div>
        </div>
    </motion.div>
</template>
<script setup>
import { motion, useScroll, useTransform } from "motion-v"
const quotes = [
    "good things come to those who wait",
    "patience is a virtue",
    "all in good time",
    "Bloom where you are planted.",
    "Happiness looks good on you.",

]
</script>

<style lang="scss" scoped></style>