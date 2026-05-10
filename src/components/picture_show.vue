<template>
    <!-- Container cuộn: h-[300vh] để tạo không gian cho hiệu ứng bung -->
    <div ref="container" class="h-[300vh] bg-zinc-950 relative">

        <!-- Sticky Wrapper: Giữ ảnh luôn ở giữa màn hình khi cuộn -->
        <div class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

            <div class="relative w-[280px] h-[380px]">
                <div v-for="(card, index) in cards" :key="index"
                    class="absolute inset-0 rounded-3xl border-[6px] border-white shadow-2xl transition-all duration-150 ease-out overflow-hidden"
                    :style="getCardStyle(card)">
                    <img :src="card.image" class="w-full h-full object-cover" />

                    <!-- Lớp phủ Glassmorphism nhẹ ở dưới ảnh cho "cute" -->
                    <div class="absolute bottom-0 w-full p-4 bg-white/20 backdrop-blur-md text-white font-bold">
                        {{ card.title }}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const container = ref(null);
const scrollProgress = ref(0);

// Danh sách ảnh và vị trí đích khi bung ra
const cards = ref([
    {
        image: 'https://picsum.photos/400/600?1',
        initial: { x: -10, y: 5, r: -5 }, // Lệch nhẹ ban đầu
        target: { x: -320, y: -80, r: -15 }, // Bung ra vị trí này
        title: 'Pose 1'
    },
    {
        image: 'https://picsum.photos/400/600?2',
        initial: { x: 15, y: -10, r: 8 },
        target: { x: 320, y: -80, r: 15 },
        title: 'Pose 2'
    },
    {
        image: 'https://picsum.photos/400/600?3',
        initial: { x: -5, y: -15, r: -3 },
        target: { x: -160, y: 120, r: -5 },
        title: 'Squat'
    },
    {
        image: 'https://picsum.photos/400/600?4',
        initial: { x: 10, y: 10, r: 4 },
        target: { x: 160, y: 120, r: 5 },
        title: 'Victory'
    }
]);

const handleScroll = () => {
    if (!container.value) return;

    const rect = container.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Tính toán tiến trình cuộn dựa trên vị trí của container so với màn hình
    let progress = -rect.top / (rect.height - windowHeight);

    scrollProgress.value = Math.max(0, Math.min(1, progress));
};

const getCardStyle = (card) => {
    // Công thức: Giá trị hiện tại = Initial + (Target - Initial) * Progress
    const x = card.initial.x + (card.target.x - card.initial.x) * scrollProgress.value;
    const y = card.initial.y + (card.target.y - card.initial.y) * scrollProgress.value;
    const r = card.initial.r + (card.target.r - card.initial.r) * scrollProgress.value;

    // Hiệu ứng đổ bóng cũng thay đổi khi bung ra cho "thật" hơn
    const shadowBlur = 10 + (scrollProgress.value * 20);
    const shadowOpacity = 0.2 + (scrollProgress.value * 0.1);

    return {
        transform: `translate(${x}px, ${y}px) rotate(${r}deg)`,
        boxShadow: `0 ${shadowBlur / 2}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`,
        zIndex: Math.abs(card.initial.x) < 5 ? 10 : 1 // Card nào ít lệch nhất ban đầu thì nằm trên
    };
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>