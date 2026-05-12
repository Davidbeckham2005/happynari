<template>
    <div ref="container" class="relative h-[150vh]">
        <!-- Phần tử con này sẽ dính ở đỉnh màn hình -->
        <Motion as="div" class="sticky top-0 h-screen w-full overflow-hidden pt-8 pl-8 pr-8">

            <img :src="pic.src" alt="Large Image" class="w-full h-full object-cover rounded-3xl " />
            <div
                class="absolute inset-0 flex flex-col justify-center top-1/2 items-center md:items-start md:pl-[15%] text-center md:text-left p-6">



                <Motion as="span"
                    class="z-50 text-[50px] md:text-[90px] text-white leading-tight font-bold drop-shadow-2xl"
                    :initial="{ opacity: 0, y: 60, filter: 'blur(10px)' }"
                    :whileInView="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
                    :viewport="{ once: false, margin: '-100px' }"
                    :transition="{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }">

                    {{ pic.text1 }}

                </Motion>
                <Motion as="span"
                    class="z-50 text-[50px] md:text-[90px] text-pink-300 leading-tight font-bold drop-shadow-2xl mt-2"
                    :initial="{ opacity: 0, y: 60, filter: 'blur(10px)' }"
                    :whileInView="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
                    :viewport="{ once: false, margin: '-100px' }"
                    :transition="{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }">
                    {{ pic.text2 }}
                </Motion>
                <!-- <Motion class="h-1 bg-white mt-6 rounded-full" :initial="{ width: 0 }" :whileInView="{ width: '200px' }"
                    :transition="{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }" /> -->

            </div>
        </Motion>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Motion, useScroll, useTransform } from 'motion-v';

const props = defineProps(['pic']);
const container = ref(null);

// Theo dõi tiến trình cuộn của container cha
const { scrollYProgress } = useScroll({
    target: container,
    // "start start": khi đỉnh container chạm đỉnh màn hình
    // "end end": khi đáy container chạm đáy màn hình
    offset: ["start start", "end end"]
});


</script>