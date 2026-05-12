<template>
    <section class="relative">
        <!-- <header class="relative z-20 flex items-center justify-between px-10 pt-24">
            <h1 class="text-5xl font-black tracking-tight">
                nari<span class="text-pink-500">.</span>
            </h1>



            <button class="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-105">
                surprise
            </button>
        </header> -->
        <wishes></wishes>
        <div ref="container" class="h-[120vh] bg-pink-300/15 relative rounded-3xl p-8">
            <p
                class="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-700 md:text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 text-center">
                I hope beautiful things
                <br>
                always find their way to you.

            </p>
            <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div v-for="(card, index) in cards" :key="index"
                    class="absolute rounded-3xl border-[6px] border-white shadow-2xl transition-all duration-1200 ease-out overflow-hidden hover:scale-105"
                    :style="[getCardStyle(card), { height: card.height, aspectRatio: card.ratio }]"
                    @click="openImage(card)">
                    <img :src="card.image" class="absolute inset-0 w-full h-full object-cover" />
                    <!-- <div class="absolute bottom-0 w-full p-4 bg-white/20 backdrop-blur-md text-white font-bold">
                        {{ card.title }}
                    </div> -->
                </div>
            </div>
            <transition name="fade">
                <div v-if="selectedImage" class="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center"
                    @click="closeImage">
                    <img :src="selectedImage.image" class="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl" />
                </div>
            </transition>
            <div class="h-[100vh]"></div>
        </div>
    </section>
</template>

<script setup>
import wishes from './wishes.vue';
import { ref, onMounted, onUnmounted } from 'vue';
const container = ref(null);
const scrollProgress = ref(0);
import { getCloudinaryUrl } from '../composal/cloudinary';

const cards = ref([
    {
        image: getCloudinaryUrl("https://res.cloudinary.com/drukcjhcg/image/upload/v1778411964/memory_2026_01_m5iugf.jpg"),

        // top-left
        initial: { x: 0, y: 5, r: -45 },
        target: { x: -30, y: -32, r: 0 },
        title: 'Pose 1',
        height: 'clamp(130px, 22vw, 220px)',
        ratio: '1 / 1',
        z: 10,
    },

    {
        image: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778411963/memory2026_05_vndwlv.jpg'),

        // top-right
        initial: { x: 0, y: -5, r: -45 },
        target: { x: -18, y: -40, r: 0 },

        title: 'Pose 2',
        height: 'clamp(130px, 22vw, 220px)',
        ratio: '1 / 1',
        z: 10,
    },

    {
        image: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778408487/memory1_yhlcrd.jpg'),

        // bottom-left
        initial: { x: 0, y: -5, r: 45 },
        target: { x: -33, y: 30, r: 0 },

        title: 'Pose 3',
        height: 'clamp(240px, 22vw, 320px)',
        ratio: '4 / 5',
        z: 10,
    },

    {
        image: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778408487/memory202002_ze1ba0.jpg'),

        // bottom-right
        initial: { x: 0, y: 5, r: -45 },
        target: { x: 10, y: -34, r: 0 },

        title: 'Pose 4',
        height: 'clamp(130px, 22vw, 280px)',
        ratio: '3 / 4',
        z: 10,
    },
    {
        image: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778408488/memory2023_iszsya.jpg'),

        // bottom-right
        initial: { x: 0, y: 5, r: -42 },
        target: { x: 33, y: 28, r: 0 },

        title: 'Pose 7',
        height: 'clamp(360px, 22vw, 460px)',
        ratio: '4 / 6',
        z: 10,
    },
    {
        image: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778586623/pic03_fapqto.jpg'),

        // bottom-right
        initial: { x: 0, y: 5, r: -44 },
        target: { x: 18, y: 34, r: 0 },

        title: 'Pose 5',
        height: 'clamp(140px, 22vw, 220px)',
        ratio: '1 / 1',
        z: 10,
    },
    {
        image: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778586623/pic04_tgcwot.jpg'),

        // bottom-right
        initial: { x: 0, y: -4, r: -42 },
        target: { x: 34, y: -30, r: 0 },

        title: 'Pose 6',
        height: 'clamp(380px, 22vw, 420px)',
        ratio: '4 / 5',
        z: 0,
    },
    {
        image: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778586622/pic02_btyti1.jpg'),

        // bottom-right
        initial: { x: 0, y: 4, r: 44 },
        target: { x: -22, y: 28, r: 0 },

        title: 'Pose 8',
        height: 'clamp(130px, 22vw, 220px)',
        ratio: '3 / 4',
        z: 10,
    }
]);
const scaleFactor = window.innerWidth / 1920;
const handleScroll = () => {
    if (!container.value) return;

    const rect = container.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Tính toán tiến trình cuộn dựa trên vị trí của container so với màn hình
    let raw = -rect.top / (rect.height - windowHeight);

    scrollProgress.value = Math.max(0, Math.min(1, raw / 0.6));
};
const getCardStyle = (card) => {
    // Công thức: Giá trị hiện tại = Initial + (Target - Initial) * Progress
    const x = card.initial.x + (card.target.x - card.initial.x) * scrollProgress.value;
    const y = card.initial.y + (card.target.y - card.initial.y) * scrollProgress.value;
    const r = card.initial.r + (card.target.r - card.initial.r) * scrollProgress.value;
    // const height = card.target.h * scrollProgress.value;
    // Hiệu ứng đổ bóng cũng thay đổi khi bung ra cho "thật" hơn
    const shadowBlur = 10 + (scrollProgress.value * 20);
    const shadowOpacity = 0.2 + (scrollProgress.value * 0.1);

    return {
        // height: `${height}px`,
        transform: `translate(${x}vw, ${y}vh)rotate(${r}deg)`,
        boxShadow: `0 ${shadowBlur / 2}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`,
        zIndex: card.z
    };
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
const selectedImage = ref(null)

const openImage = (card) => {
    selectedImage.value = card
}

const closeImage = () => {
    selectedImage.value = null
}
</script>

<style scoped>
.floating {
    animation: float 5s ease-in-out infinite;
}

.floating:nth-child(2) {
    animation-delay: 1s;
}

.floating:nth-child(3) {
    animation-delay: 2s;
}

.floating:nth-child(4) {
    animation-delay: 1.5s;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0px);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
</style>