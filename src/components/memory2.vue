<template>
    <section class="sticky top-0 h-screen">
        <div class="w-full h-10 bg-blue-600 border sticky top-0 z-10">
            <span class="text-lg font-bold p-4 text-white">Năm?</span>

        </div>
        <div id="timeline" class="max-w-6xl mx-auto relative space-y-24">

            <div
                class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-pink-400 via-purple-400 to-pink-400 -translate-x-1/2 rounded-full">
            </div>

            <div v-for="(memory, index) in memories" :key="index"
                class="relative flex flex-col md:flex-row items-center"> <!-- left/right card -->
                <div :class="index % 2 === 0 ? 'md:w-1/2 md:pr-16' : 'md:w-1/2 md:order-2 md:pl-16'">
                    <div
                        class="bg-white/70 backdrop-blur-xl border border-white/50 rounded-4xl p-6 shadow-xl transition-all duration-500">
                        <img :src="memory.image" :alt="memory.title"
                            class="w-full h-72 object-cover rounded-3xl mb-5 shadow-lg" />
                        <div class="text-pink-500 text-3xl font-bold mb-2"> {{ memory.year }} </div>
                        <h3 class="text-2xl font-semibold text-gray-800 mb-3"> {{ memory.title }} </h3>
                        <p class="text-gray-600 leading-relaxed"> {{ memory.text }} </p>
                    </div>
                </div>
                <div
                    class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-linear-to-br from-pink-400 to-purple-500 shadow-xl items-center justify-center z-10">
                    <Star class="text-white fill-white" :size="24" />
                </div>
                <div class="hidden md:block md:w-1/2"></div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { motion, useScroll, useTransform } from "motion-v"

const { scrollY } = useScroll()

// LOGIC HIỆN CHỮ:
// Từ 0px đến 300px: Opacity từ 0 (ẩn) lên 1 (hiện)
// Từ 0px đến 300px: Y (vị trí) từ 20px (hơi thấp) lên 0px (vị trí chuẩn) để tạo hiệu ứng trồi lên
const textOpacity = useTransform(scrollY, [600, 1200], [0, 1])
const textY = useTransform(scrollY, [600, 1200], [20, 50])
const memories = [
    {
        title: "Kỷ niệm 1",
        image: "/images/memory2.jpg",
        year: 2020,
        text: "Đây là kỷ niệm đầu tiên của chúng ta vào năm 2020. Chúng ta đã có những khoảnh khắc tuyệt vời bên nhau và tạo nên những kỷ niệm đáng nhớ."
    },
    {
        title: "Kỷ niệm 2",
        image: "/images/memory2.jpg",
        year: 2021,
        text: "Năm 2021, chúng ta đã trải qua nhiều thử thách nhưng cũng có những khoảnh khắc vui vẻ và ý nghĩa. Đây là một năm đáng nhớ trong hành trình của chúng ta."
    },
];

</script>
