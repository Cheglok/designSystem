<template>
    <ul>
        <li v-for="item in allIcons" :key="item">
            {{ item }}
            <TheIcon :icon-name="item" :icon-size="IconSizes.S" />
            <TheIcon :icon-name="item" :icon-size="IconSizes.M" />
            <TheIcon :icon-name="item" :icon-size="IconSizes.L" />
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconSizes } from "@/constants/enums";
import TheIcon from "@/components/icons/TheIcon.vue";

export default defineComponent({
    name: "AllIcons",
    components: { TheIcon },
    data: () => {
        return {
            allIcons: ["IconBaking", "IconPizza", "IconRollChief", "IconWrite"],
        };
    },
    computed: {
        IconSizes() {
            return IconSizes;
        },
    },
});
</script>

<style scoped lang="scss"></style>
