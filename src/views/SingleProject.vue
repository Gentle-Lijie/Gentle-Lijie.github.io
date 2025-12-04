<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data() {
		return {
			project: null,
			singleProjectHeader: {},
			projectImages: [],
			projectInfo: {},
			relatedProject: {},
		};
	},
	created() {
		this.loadProject();
	},
	watch: {
		'$route.params.slug': function() {
			this.loadProject();
		}
	},
	methods: {
		loadProject() {
			const slug = this.$route.params.slug;
			const currentProject = projects.find(p => p.slug === slug);
			
			if (!currentProject) {
				// Redirect to projects page if project not found
				this.$router.push('/projects');
				return;
			}

			this.project = currentProject;

			// Set project header
			this.singleProjectHeader = {
				singleProjectTitle: currentProject.title,
				singleProjectDate: 'Recent Project',
				singleProjectTag: currentProject.category,
			};

			// Set project images (use the main image multiple times as placeholder)
			this.projectImages = [
				{
					id: 1,
					title: currentProject.title,
					img: currentProject.img,
				},
			];

			// Set project info
			this.projectInfo = {
				clientHeading: 'About Project',
				companyInfos: [
					{
						id: 1,
						title: 'Category',
						details: currentProject.category,
					},
					{
						id: 2,
						title: 'Repository',
						details: currentProject.github,
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails: currentProject.details.objective,
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: currentProject.technologies,
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details: currentProject.details.challenge,
					},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/realGentle-Lijie',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/realGentle-Lijie',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/c/Gentle-LijieStudio',
					},
				],
			};

			// Set related projects (all other projects)
			this.relatedProject = {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: projects
					.filter(p => p.id !== currentProject.id)
					.slice(0, 4)
					.map(p => ({
						id: p.id,
						title: p.title,
						img: p.img,
					})),
			};
		}
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
