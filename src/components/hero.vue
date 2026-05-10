<script setup>
import { motion, useScroll, useTransform } from "motion-v"
import { getCloudinaryUrl } from "../composal/cloudinary"

const { scrollY } = useScroll()
const quotes = [
    "good things come to those who wait",
    "patience is a virtue",
    "all in good time",
    "Bloom where you are planted.",
    "Happiness looks good on you.",

]
// Khi cuộn 200px, chữ từ 100px (rất to) về 24px (vừa đủ nằm trong menu)
const fontSize = useTransform(scrollY, [0, 600], ["16vw", "2vw"])
</script>

<template>
    <div class="h-[100vh] flex flex-col">
        <div class="relative w-full overflow-hidden bg-transparent z-50 mask-edge">
            <div
                class="flex whitespace-nowrap border-t border-b border-pink-300/30 bg-pink-400/5 backdrop-blur-xs py-3 shadow-[0_0_20px_rgba(244,114,182,0.2)]">
                <motion.div class="flex space-x-12 items-center" :animate="{ x: ['0%', '-50%'] }" :transition="{
                    duration: 60,         // Số giây càng lớn chữ chạy càng chậm
                    ease: 'linear',       // Chạy đều, không dừng
                    repeat: Infinity      // Lặp lại mãi mãi
                }" :while-hover="{ transition: { duration: 1000 } }">
                    <div v-for="(quote, index) in [...quotes, ...quotes]" :key="index"
                        class="flex items-center space-x-12">
                        <span
                            class="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] tracking-wider">
                            {{ quote }}
                        </span>
                        <span class="text-pink-400/50 text-xl">❤️💕</span>
                    </div>
                </motion.div>
            </div>
        </div>
        <img :src="getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778408488/hero_xt7kg0.jpg')"
            class="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-100" />
        <!-- <div class="sticky top-0 w-full h-24 z-50">
            <motion.span :style="{ fontSize }" class="text-white px-4 leading-tight text-center">
                happy Nari
            </motion.span>

        </div> -->
        <div class=" justify-end flex-1 flex flex-col">
            <p class="relative z-50 text-[40px] text-white px-4 leading-tight">
                “Like fireflies at dusk,
            </p>
            <p class="relative z-50 text-[40px] text-white px-4 leading-tight mb-8">
                you make moments glow.”
            </p>
        </div>
    </div>
</template>

<style scoped>
/* Tạo hiệu ứng mờ dần ở 2 cạnh màn hình */
.mask-edge {
    mask-image: linear-gradient(to right,
            transparent,
            black 15%,
            black 85%,
            transparent);
    -webkit-mask-image: linear-gradient(to right,
            transparent,
            black 15%,
            black 85%,
            transparent);
}

.playwrite {
    /* Font chữ viết tay sẽ làm dải chữ mềm mại hơn nhiều */
    font-family: 'Playwrite', cursive;
}
</style>