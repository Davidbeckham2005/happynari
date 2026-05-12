<script setup>
import { ref } from 'vue'
import { X } from '@lucide/vue';
</script>

<template>
    <!-- Nền đỏ toàn màn hình -->
    <div class="rounded-xl shadow-2xl p-8 m-16 transition-all duration-500 z-20 relative">
        <div class="transition-all duration-700 overflow-hidden max-h-60 opacity-100 mb-4 ">
            <div class=" text-white font-mono text-xs md:text-lg">
                <h2 class="mb-3">Chúc mừng sinh nhật chị haii! 🎂</h2>
                <p class="leading-relaxed">
                    Chị là người chị tuyệt vời nhất mà em có thể mong đợi. Cảm ơn chị đã luôn ở bên, chia sẻ niềm vui và
                    khó khăn cùng em. Chúc chị một ngày sinh nhật thật vui vẻ, tràn ngập tiếng cười và những khoảnh khắc
                    đáng nhớ. Mong rằng mọi điều tốt đẹp nhất sẽ đến với chị trong năm mới của cuộc đời! Yêu chị nhiều
                    lắm! ❤️
                </p>
                <component :is="X" size="30"
                    class="absolute top-0 right-0 font-bold hover:text-pink-400 transition-all duration-200 cursor-pointer">
                </component>

            </div>
        </div>
    </div>


</template>

<style scoped>
/* Hiệu ứng xoay nắp thư nếu muốn mượt hơn */
.-rotate-x-180 {
    transform: rotateX(-180deg);
}
</style>