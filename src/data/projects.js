// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'UNNCLang Interpreter',
		category: 'Compiler & Language',
		img: require('@/assets/images/web-project-1.jpg'),
		slug: 'unnclang-interpreter',
		description: 'A lightweight tool for converting teaching pseudocode to Python, designed for UNNC CELEN086 course.',
		github: 'https://github.com/Gentle-Lijie/UNNCLang-Intepreter',
		technologies: ['Python', 'Compiler', 'AST', 'PyPI'],
		features: [
			'Statement macros registration (e.g., endif) to prevent NameErrors',
			'Preprocessing teaching syntax into valid Python',
			'Command-line tool for running UNNCLang source files',
			'Concise interface for automated testing',
		],
		details: {
			objective: 'This compiler is prepared for UNNC CELEN086, enabling quick testing of pseudocode provided in the course within Python. It provides a seamless way to bridge the gap between teaching materials and practical Python implementation.',
			challenge: 'The main challenge was to create a system that could parse and transform educational pseudocode syntax (like then:, otherwise, endif) into valid Python code while maintaining the educational intent and preventing common runtime errors.',
		},
	},
	{
		id: 2,
		title: 'MUN System',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
		slug: 'mun-system',
		description: 'A comprehensive management system for Model United Nations conferences, covering the entire process from preparation to closure.',
		github: 'https://github.com/Gentle-Lijie/MUN-system',
		technologies: ['Vue 3', 'PHP 8.3+', 'MySQL 8.4', 'Tailwind CSS', 'Docker'],
		features: [
			'Unified authentication & permission system',
			'Dais business operations (motions, speakers list, roll call, electronic display)',
			'Delegate file submission & crisis feedback',
			'Venue, delegate, and schedule management',
			'Document workflow (submission, approval, publication)',
			'Log audit and operation tracking',
		],
		details: {
			objective: 'Designed for school clubs, conference companies, and academic conference organizing committees, it can be directly used for multi-session, multi-venue MUN conference management. The system aims to streamline the entire MUN process from registration to closing ceremonies.',
			challenge: 'Building a comprehensive system that handles multiple user roles (admin, dais, delegates, observers) with fine-grained permissions while maintaining real-time updates for electronic displays and managing complex workflows like document approval and crisis responses.',
		},
	},
	{
		id: 3,
		title: 'ZY Service',
		category: 'Web Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
		slug: 'zy-service',
		description: 'Student course selection information management system built with PHP7/MySQL, featuring powerful data statistics and query functions.',
		github: 'https://github.com/Gentle-Lijie/ZY-service',
		technologies: ['PHP 7', 'MySQL', 'HTML/CSS', 'JavaScript'],
		features: [
			'Accurate recording and querying of student information',
			'Student reward and punishment record management',
			'Department and faculty management',
			'Course management and selection system',
			'Exam score registration and makeup exam management',
			'Comprehensive data statistics and report generation',
		],
		details: {
			objective: 'This system aims to accurately record and query student information including name, department, age, gender, and ID number. It provides powerful data statistics, query, report generation, and printing functions for educational institutions.',
			challenge: 'Creating a robust system that handles complex relationships between students, courses, departments, and exam results while providing intuitive interfaces for different user roles including administrators and students.',
		},
	},
	{
		id: 4,
		title: 'Program Competition Host',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-1.jpg'),
		slug: 'program-competition-host',
		description: 'A lightweight PHP program for managing program schedules and displaying scores, suitable for LAN or small-scale events.',
		github: 'https://github.com/Gentle-Lijie/program-competition-host',
		technologies: ['PHP 8.0+', 'MySQL/MariaDB', 'Docker', 'Nginx'],
		features: [
			'Program schedule management (add/edit/delete)',
			'Score recording and display',
			'Simple administrative backend and API',
			'Large screen display support',
			'CSV import for program listings',
			'Easy deployment to campus activities',
		],
		details: {
			objective: 'Provide an easy-to-use basic implementation for quickly deploying and customizing in campus activities, clubs, or small performance scenarios. The system is designed to be lightweight and easy to set up for various competition hosting needs.',
			challenge: 'Creating a system that is both lightweight enough for quick deployment but robust enough to handle real-time score updates and large display requirements for audience viewing during competitions.',
		},
	},
	{
		id: 5,
		title: 'Autonomous Driving Code',
		category: 'Robotics & AI',
		img: require('@/assets/images/ui-project-2.jpg'),
		slug: 'autonomous-driving-code',
		description: 'Implementation of micro-scene-based autonomous driving and multi-vehicle cooperative control algorithms.',
		github: 'https://github.com/Gentle-Lijie/autonomous-driving-code',
		technologies: ['ROS', 'Python', 'C++', 'Computer Vision', 'Control Systems'],
		features: [
			'Micro-scene-based autonomous driving algorithms',
			'Multi-vehicle cooperative control',
			'ROS integration through catkin workspace',
			'Real-time decision making and path planning',
			'Sensor fusion and perception systems',
		],
		details: {
			objective: 'This code supports the thesis "Design of Micro-Scene-Based Autonomous Driving and Multi-Vehicle Cooperative Control Algorithm". It implements advanced algorithms for autonomous vehicles operating in constrained environments with coordination between multiple vehicles.',
			challenge: 'Developing robust algorithms that enable multiple autonomous vehicles to coordinate their movements in micro-scenes while ensuring safety, efficiency, and real-time performance. The system must handle sensor data processing, decision making, and control in a distributed manner.',
		},
	},
];

export default projects;
