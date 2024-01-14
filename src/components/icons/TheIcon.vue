<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="iconSize"
        :height="iconSize"
        :viewBox="`0 0 20 20`"
        role="presentation"
    >
        <g :fill="iconColor">
            <component :is="iconName" />
        </g>
    </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IconSizes } from "@/constants/enums";

export default defineComponent({
    name: "TheIcon",
    props: {
        iconName: {
            type: String,
            default: "box",
        },
        iconSize: {
            type: Number as PropType<IconSizes>,
            default: 20,
        },
        iconColor: {
            type: String,
            default: "currentColor",
        },
    },
});
</script>
