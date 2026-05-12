<template>
    <section class="relative overflow-hidden min-h-screen">
        <div class="absolute inset-0 pointer-events-none">
            <div v-for="heart in hearts" :key="heart.id" class="absolute animate-float opacity-0 z-0" :style="{
                left: heart.left + '%',
                animationDuration: heart.duration + 's',
                fontSize: heart.size + 'px',
                animationDelay: heart.delay + 's',
                bottom: 0
            }">
                ❤️
            </div>
            <div v-for="star in stars" :key="star.id" class="absolute opacity-1 animate-pulse z-0" :style="{
                left: star.left + '%',
                animationDuration: 2 + 's',
                fontSize: star.size + 'px',
                animationDelay: star.delay + 's',
                top: star.top + '%',
            }">
                ✨
            </div>
        </div>
        <div class="w-full h-10 bg-pink-600 border sticky top-0 z-10 shadow-lg shadow-pink-500/20">
            <span class="text-lg font-bold p-4 text-white"></span>

        </div>
        <div id="timeline" class="max-w-6xl mx-auto relative space-y-24 mt-4">

            <div
                class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-pink-400 via-purple-400 to-pink-400 -translate-x-1/2">
            </div>

            <div v-for="(memory, mindex) in memories" :key="mindex" D
                class="relative flex flex-col md:flex-row items-center my-8 p-8 md:p-0">
                <!-- left/right card -->
                <Motion as="div" :class="mindex % 2 === 0 ? 'md:w-1/2 md:pr-16' : 'md:w-1/2 md:order-2 md:pl-16'"
                    :initial="{ opacity: 0, x: mindex % 2 === 0 ? -50 : 50, y: 30 }"
                    :whileInView="{ opacity: 1, x: 0, y: 0 }" :viewport="{ once: true, margin: '-100px' }"
                    :transition="{ duration: 0.8, ease: 'easeOut' }">
                    <div
                        class="bg-linear-to-br from-pink-100 via-purple-50 to-pink-50 backdrop-blur-xl border-2 border-pink-200 rounded-4xl p-6 shadow-2xl shadow-pink-200/50 transition-all duration-500 hover:shadow-pink-300/70 hover:scale-105 hover:border-pink-300 relative overflow-hidden group">
                        <div
                            class="absolute inset-0 bg-linear-to-tr from-rose-400/10 to-pink-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl pointer-events-none">
                        </div>
                        <div class="relative cursor-pointer aspect-[4/3]">
                            <div
                                class="absolute inset-0 bg-pink-100 rounded-3xl shadow-md transform rotate-6 scale-95 origin-bottom-right transition-transform duration-500 group-hover:rotate-12 group-hover:scale-90 opacity-70">
                            </div>

                            <div
                                class="absolute min-h-80 inset-0 bg-white/70 border border-pink-100 rounded-3xl shadow-lg transform rotate-3 scale-98 origin-bottom-right transition-transform duration-500 group-hover:rotate-6 group-hover:scale-95 z-0">
                            </div>
                            <transition name="fade" mode="out-in">
                                <img :src="getCloudinaryUrl(memory.images[memory.activeImage])" loading="lazy"
                                    :key="memory.activeImage" :alt="memory.title" @click="nextImage(mindex)"
                                    class="w-full h-full object-cover rounded-3xl mb-5 shadow-lg shadow-pink-200/40 ring-2 ring-pink-200 relative z-10" />
                            </transition>
                            <div
                                class="absolute bottom-2 right-2 z-20 text-xs px-3 py-2 rounded-full font-mono text-pink-400 font-bold bg-pink-100/80 backdrop-blur-sm shadow-sm shadow-pink-200/30">
                                {{
                                    memory.activeImage + 1 }}/{{ memory.images.length }}</div>
                        </div>

                        <div class="text-pink-500 text-3xl font-bold mb-2 relative z-10"> {{ memory.year }} </div>
                        <h3 class="text-2xl font-semibold text-gray-700 mb-3 relative z-10"> {{ memory.title }} </h3>
                        <p class="text-gray-600 leading-relaxed relative z-10"> {{ memory.text }} </p>
                    </div>

                </Motion>
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
import { Motion, useScroll, useTransform } from "motion-v"
import { Star } from "lucide-vue-next"
const { scrollY } = useScroll()
import { ref, onMounted } from 'vue'
import { getCloudinaryUrl } from "../composal/cloudinary"
// LOGIC HIỆN CHỮ:
// Từ 0px đến 300px: Opacity từ 0 (ẩn) lên 1 (hiện)
// Từ 0px đến 300px: Y (vị trí) từ 20px (hơi thấp) lên 0px (vị trí chuẩn) để tạo hiệu ứng trồi lên
const textOpacity = useTransform(scrollY, [600, 1200], [0, 1])
const textY = useTransform(scrollY, [600, 1200], [20, 50])
const nextImage = (index) => {
    console.log("Clicked memory", index)
    if (memories.value[index].activeImage < memories.value[index].images.length - 1) {
        memories.value[index].activeImage++
    } else {
        memories.value[index].activeImage = 0

    }
    console.log("Next image index", memories.value[index].activeImage)
}
const memories = ref([
    {
        title: "Kỷ niệm 1",
        images: ["https://res.cloudinary.com/drukcjhcg/image/upload/v1778408488/memory2020_1_lvd5lo.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778408488/memory2020_2_o8uq8t.jpg"],
        year: 2020,
        text: "Đây là kỷ niệm đầu tiên của chúng ta vào năm 2020. Chúng ta đã có những khoảnh khắc tuyệt vời bên nhau và tạo nên những kỷ niệm đáng nhớ.",
        activeImage: 0,
    },
    {
        title: "Kỷ niệm 2",
        images: ["https://res.cloudinary.com/drukcjhcg/image/upload/v1778408489/memory2021_alumzx.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778409608/memory2021_02_huna0m.jpg"],
        year: 2021,
        text: "Hi Anh",
        activeImage: 0,

    },
    {
        title: "Kỷ niệm 3",
        images: ["https://res.cloudinary.com/drukcjhcg/image/upload/v1778408489/memory2022_ho3cpe.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778410230/memory2022_02_ayv3rg.jpg"],
        year: 2022,
        text: "Hãy dùng nụ cười của bạn để thay đổi thế giới, đừng để thế giới thay đổi nụ cười của bạn.",
        activeImage: 0,

    },
    {
        title: "Kỷ niệm 4",
        images: ["https://res.cloudinary.com/drukcjhcg/image/upload/v1778408488/memory2023_iszsya.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778410393/memory2023_02_ntedty.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778410497/memory2023_01_jupeo1.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778410658/memory2023_03_hscglk.jpg"],
        year: 2023,
        text: "New year, new me. 💞",
        activeImage: 0,

    },
    {
        title: "Kỷ niệm 5",
        images: ["https://res.cloudinary.com/drukcjhcg/image/upload/v1778410876/memory2024_01_e3ytdf.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778410880/memory2024_02_uuisdq.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778408488/memory4_rithev.jpg"],
        year: 2024,
        text: "Đôi lúc tha thứ không phải một lần là xong, mà mỗi lần nhớ đến, lại phải tha thứ thêm một lần nữa.",
        activeImage: 0,

    },
    {
        title: "Kỷ niệm 6",
        images: ["https://res.cloudinary.com/drukcjhcg/image/upload/v1778408490/memory2025_cxgzte.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778411152/memory2025_01_ux680m.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778411335/memory2025_02_zsytzx.jpg"],
        year: 2025,
        text: "Ngồi một mình, bạn sẽ tìm thấy tất cả câu trả lời của mình.",
        activeImage: 0,

    },
    {
        title: "Kỷ niệm 7",
        images: ["https://res.cloudinary.com/drukcjhcg/image/upload/v1778408487/memory2026_trop1k.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778411963/memory2026_03_rbtdzg.jpg ", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778411963/memory2026_02_o7pwya.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778411963/memory2026_05_vndwlv.jpg", "https://res.cloudinary.com/drukcjhcg/image/upload/v1778411962/memory2026_04_nd4xuu.jpg"],
        year: 2026,
        text: "Tân Cử Nhân xin chàooooo 🥳",
        activeImage: 0,

    },

]);
const hearts = ref([])
const stars = ref([])
onMounted(() => {
    // Tạo ra 30 trái tim với các thông số ngẫu nhiên
    for (let i = 0; i < 30; i++) {
        hearts.value.push({
            id: i,
            left: Math.random() * 100,      // Vị trí ngang ngẫu nhiên (0-100vw)
            duration: Math.random() * 30 + 5, // Tốc độ bay (5-10 giây)
            size: Math.random() * 20 + 15,   // Kích thước (15-35px)
            delay: Math.random() * 5         // Độ trễ lúc bắt đầu để không bay cùng lúc
        })
    }
    for (let i = 0; i < 30; i++) {
        stars.value.push({
            id: i,
            left: Math.random() * 100,      // Vị trí ngang ngẫu nhiên (0-100vw)
            size: Math.random() * 20 + 15,   // Kích thước (15-35px)
            delay: Math.random() * 5,        // Độ trễ lúc bắt đầu để không bay cùng lúc
            top: Math.random() * 100,
        })
    }
})

</script>
<style>
/* ĐỊNH NGHĨA HOẠT ẢNH BAY */
@keyframes float {
    0% {
        transform: translateY(0) scale(0.5);
        opacity: 0;
    }

    20% {
        opacity: 0.8;
    }

    100% {
        transform: translateY(-5000px) scale(1.2);
        opacity: 0;
    }
}

.animate-float {
    animation-name: float;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    will-change: transform, opacity;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s ease, transform 0.1s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: scale(1.05);
}

.fade-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

@keyframes star-twinkle {

    0%,
    100% {
        opacity: 0.3;
        transform: scale(0.8);
    }

    50% {
        opacity: 1;
        transform: scale(1.2);
    }
}

.animate-pulse {
    animation-name: star-twinkle;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
</style>