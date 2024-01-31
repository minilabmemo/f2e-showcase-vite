<template>
  <div class="flex items-center "  ref="hBgRef">
    <header
      ref="hRef"
      class="transition-[height] fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-screen-3xl flex items-center justify-between px-[60px] bg-white text-blue-150 font-semibold fill-white drop-shadow-default"
    >
      <div class="logo "
      :class="matchPhone ? 'w-[100px]' : 'w-[142px]'"
      >
        
        <img :src="logo" alt="logo" />
      </div>
      <nav class="m-auto hidden md:block">
        <ul class="flex justify-between text-2xl xl:text-[32px]">
          <NavLink href="#about" text="關於薩卡" :animate="true"></NavLink>
          <NavLink href="#policies" text="政策議題" :animate="true"></NavLink>
          <NavLink href="#news" text="最新活動" :animate="true"></NavLink>
          <NavLink href="#services" text="民眾服務" :animate="true"></NavLink>
        </ul>
      </nav>
      <div class="w-[250px] h-[30px] items-center xl:h-[40px] hidden md:flex">
        <img :src="Facebook" alt="Facebook" />
        <img :src="Instagram" alt="Instagram" />
        <img :src="TwitterX" alt="TwitterX" />
        <img :src="YouTube" alt="YouTube" />
        <img :src="LINE" alt="LINE" />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from '@/assets/images/logo.svg'
import LINE from '@/assets/images/LINE.svg'
import Facebook from '@/assets/images/Facebook.svg'
import Instagram from '@/assets/images/Instagram.svg'
import TwitterX from '@/assets/images/TwitterX.svg'
import YouTube from '@/assets/images/YouTube.svg'
export default defineComponent({
  name: "AppHeader",
  props: {
    msg: String,
  },
});
</script>
<script setup lang="ts">
import NavLink from "@/components/sakka/NavLink.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useMediaQuery } from "@vueuse/core";

const matchPhone = useMediaQuery("(max-width: 768px)");

const hRef = ref<HTMLElement | null>(null);
const hBgRef = ref<HTMLElement | null>(null);
const headerHeight="135px"
const headerHeightSmall="95px"
const headerHeightToSmall="87px"
const handleScroll = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY > 100) {
    if (hBgRef.value) {
      hBgRef.value.style.height = headerHeightToSmall;
    }
    if (hRef.value) {
      hRef.value.style.transition = ".5s";
      hRef.value.style.height =headerHeightToSmall;
    }
  } else {
    if (hBgRef.value) {
      hBgRef.value.style.height = matchPhone.value? headerHeightSmall:headerHeight;
    }
    if (hRef.value) {
      hRef.value.style.transition = "0s";
      hRef.value.style.height = matchPhone.value? headerHeightSmall:headerHeight;
    }
  }
};



onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  if (hRef.value) {
    hRef.value.style.height =matchPhone.value? headerHeightSmall:headerHeight;
   
    }
  if (hBgRef.value) {
      hBgRef.value.style.height =matchPhone.value? headerHeightSmall:headerHeight;
    }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
