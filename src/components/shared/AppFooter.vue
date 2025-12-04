<script>
import feather from 'feather-icons';
import FooterCopyright from './FooterCopyright.vue';
import { socialLinks } from '../../data/socialLinks';

export default {
	components: { FooterCopyright },
	data() {
		return {
			socials: socialLinks,
			hoverImageSrc: null,
			hoverVisible: false,
			hoverStyle: {
				top: '0px',
				left: '0px',
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {
		onSocialEnter(event, social) {
			if (!social.hoverImage) return;
			// social.hoverImage should already be a resolved URL (we require() it in the data file)
			this.hoverImageSrc = social.hoverImage;
			this.hoverVisible = true;
			// position tooltip near the element
			const rect = event.currentTarget.getBoundingClientRect();
			this.hoverStyle.top = `${rect.top - 10 - 120}px`;
			this.hoverStyle.left = `${rect.left + rect.width / 2 - 80}px`;
		},
		onSocialLeave() {
			this.hoverVisible = false;
			this.hoverImageSrc = null;
		},
	},
};
</script>

<template>
	<div class="container mx-auto">
		<div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<!-- Footer social links -->
			<div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
				<p
					class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5">
					Follow me
				</p>
				<ul class="flex gap-4 sm:gap-8 relative">
					<a v-for="social in socials" :key="social.id" :href="social.url" target="__blank"
						class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
						@mouseenter="onSocialEnter($event, social)" @mouseleave="onSocialLeave">
						<template v-if="social.faviconUrl">
							<img :src="social.faviconUrl" alt="" class="w-5 sm:w-8 h-5 sm:h-8 object-contain" />
						</template>
						<template v-else>
							<i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
						</template>
					</a>
					<!-- hover image preview -->
					<div v-if="hoverVisible" :style="hoverStyle" class="pointer-events-none fixed z-50">
						<img :src="hoverImageSrc" alt="preview" class="w-40 h-30 object-cover rounded shadow-lg border" />
					</div>
				</ul>
			</div>

			<!-- Footer copyright -->
			<FooterCopyright />
		</div>
	</div>
</template>

<style scoped></style>
