<template>
    <div>
        <!-- Mỗi section sẽ chiếm 200vh nhưng ảnh chỉ dính 100vh, 
     tạo khoảng trống cho ảnh sau trồi lên -->
        <ImageSection v-for="pic in large" :key="pic.src" :pic="pic" />

        <!-- Thêm một div trống ở cuối để ảnh cuối cùng có thể cuộn lên được -->
        <!-- <div class="h-screen"></div> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ImageSection from './ImageSection.vue'; // Tách ra component con
import { getCloudinaryUrl } from '../composal/cloudinary';

const large = ref([
    {
        src: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778426730/large_reyxxd.jpg'),
        text1: 'May your creativity ',
        text2: 'never run dry',
    },
    {
        src: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778410658/memory2023_03_hscglk.jpg'),
        text1: 'The journey ',
        text2: 'is the reward',
    },
    {
        src: getCloudinaryUrl('https://res.cloudinary.com/drukcjhcg/image/upload/v1778408488/memory4_rithev.jpg'),
        text1: 'Keep pushing ',
        text2: 'the boundaries',
    },
]);
</script>