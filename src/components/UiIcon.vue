<template>
    <img :src="iconSrc" alt="icon" class="hover:fill-green-500">
</template>

<script setup>
import Twitter from '@/assets/icons/footer/twitter.svg';
import GitHub from '@/assets/icons/footer/github.svg';
import Facebook from '@/assets/icons/footer/facebook.svg';
import Dribble from '@/assets/icons/footer/dribbble.svg';
import Exclamation from '@/assets/icons/exclamation.svg';
import Notification from '@/assets/icons/header/notification.svg';
import Burger from '@/assets/icons/header/burger.svg';
import Arrow from '@/assets/icons/sidebar/arrow.svg';
import Overview from '@/assets/icons/sidebar/overview.svg';
import Adjustments from '@/assets/icons/sidebar/adjustments.svg';
import Globe from '@/assets/icons/sidebar/globe.svg';
import Settings from '@/assets/icons/sidebar/settings.svg';
import Page from '@/assets/icons/sidebar/page.svg';
import Sales from '@/assets/icons/sidebar/sales.svg';
import Messages from '@/assets/icons/sidebar/messages.svg';
import Authentication from '@/assets/icons/sidebar/authentication.svg';
import Docs from '@/assets/icons/sidebar/docs.svg';
import Components from '@/assets/icons/sidebar/components.svg';
import Help from '@/assets/icons/sidebar/help.svg';
import Search from '@/assets/icons/header/search.svg';
import Login from '@/assets/icons/header/login.svg';

import { computed } from 'vue';

const icons = {
    twitter: Twitter,
    github: GitHub,
    facebook: Facebook,
    dribbble: Dribble,
    exclamation: Exclamation,
    notification: Notification,
    burger: Burger,
    overview: Overview,
    arrow: Arrow,
    adjustments: Adjustments,
    globe: Globe,
    settings: Settings,
    page: Page,
    sales: Sales,
    messages: Messages,
    authentication: Authentication,
    docs: Docs,
    components: Components,
    help: Help,
    search: Search,
    login: Login,
};

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
});

const iconSrc = computed(() => icons[props.icon]);
</script>

<style scoped></style>