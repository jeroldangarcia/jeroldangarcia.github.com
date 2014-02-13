
var cv = {

	'name' : 'Ernesto Roldán García',
	
	'title' : 'Software Engineer',

	'profile' : {

		'description' : 'IT professional highly motivated with more than a decade of experience designing, implementing and adapting online web applications, web portals and software development tools. Proficient in arquitecture and domain design, object oriented modeling, Design Patterns, TDD / BDD / DDD.',

		'qualifications' : [

			'Open to **Agile Methodologies** for planning, develop and implement successful large projects',
			
			'Experienced in manual and automated testing of applications',

			'Good capacity for problem solving driving out complexity',

			'Good team player, concerned about team satisfaction and productivity'
		]
	},

	'personal' : {
		'born' 		: '12 Jul. 1975',
		'country'	: 'Spain',
		'address' 	: {
			'street' 	: 'Limonita 3',
			'CP' 		: '28021',
			'city' 		: 'Madrid',
			'country' 	: 'Spain'
		},
		'status'	: 'married',
		'contact' 	: {
			'email' : 'jeroldan@gmail.com',
			'tfn' 	: '(0034) 647425 037'
		}
	},

	'education' : {
		'school'	: 'University Carlos III Madrid',
		'title' 	: 'Technical Engineer in Computer Management',
		'time'		: '1996 - 2000',
		'note'		: 'absence of Degree Project' 
	},

	'skills' : [

			{ 'label' : 'Agile SCRUM', 	'value' : 75 },
			{ 'label' : 'XP', 		'value' : 65 },
			{ 'label' : 'TDD',		'value' : 80 },
			{ 'label' : 'BDD',		'value' : 80 },
			{ 'label' : 'DDD',		'value' : 75 },
			{ 'label' : 'CQRS',		'value' : 70 },

			{ 'label' : 'Java', 	'value' : 90 },
			{ 'label' : 'JS', 		'value' : 70 },

			{ 'label' : 'HTML5', 	'value' : 85 },
			{ 'label' : 'REST', 	'value' : 85 },
			{ 'label' : 'JEE', 		'value' : 75 },
			{ 'label' : 'Spring', 	'value' : 80 },
			{ 'label' : 'NodeJS', 	'value' : 65 },
			{ 'label' : 'NOSQL', 	'value' : 55 }

	],

	'social' : [ 
		{ 
			'label' : 'twitter',
			'link'  : 'http://twitter.com/juergas',
			'icon'	: 'http://leongaban.com/images/twitter.png',
		},
		{ 
			'label' : 'Linked In',
			'link'  : 'es.linkedin.com/pub/ernesto-roldán-garcía/31/177/483/',
			'icon'	: 'http://leongaban.com/images/linkedin.png',
		},
		{ 
			'label' : 'github',
			'link'  : 'https://github.com/jeroldangarcia',
			'icon'	: 'http://jeremie.astori.fr/img/github_icon.png',
		}
	],

	'experience' : [
		{ 	
			'company' : 'at Sistemas', 
			'from' : '2000',
			'to' : 'today',
			'rol' : 'Enterprise Web Solution Arquitect and IT Consultan',
			'projects' : [

				{
					'label' : 'Internal Technical Office',
					'relevance' : 'A',
					'from' : '2012',
					'to' : 'today',
					'rol' : 'Software Consultant',
					'description' : 'Consultory, Auditory and support to internal projects',
					'tasks' : [
						'Presales and technical support',
						'Development Team Leadership',
						'Training tasks'
					],
					'references' : {},
					'methodologies' : 'Agile SCRUM',
					'technologies' : [ 'JIRA', 'GIT']
				},

				{
					'label' : 'MAPFRE application ALM monitor',
					'relevance' : 'A',
					'from' : '2012 June',
					'to' : '2012 October',
					'rol' : 'Software Arquitect and Developer',
					'description' : 'Application state monitoring in a CI environment',
					'tasks' : [
						'App lide cycle DDD modelling'
					],
					'references' : {},
					'methodologies' : 'AGILE DDD CQRS',
					'technologies' : [ 'Axon Framework', 'Spring Test', 'MongoDB']
				},

				{
					'label' : 'MAPFRE Users Directory',
					'relevance' : 'A',
					'from' : '2012',
					'to' : '2012',
					'rol' : 'Software Arquitect',
					'description' : 'Agile SCRUM methodology demostration project for MAPFRE.',
					'tasks' : [
						'entusiast Agile Team developer',
						'Business Web Services development',
						'LDAP Integreation via Spring LDAP'
					],
					'references' : {},
					'methodologies' : 'Agile SCRUM',
					'technologies' : [
						'Java JEE (JSF, WS)',
						'Spring 3.1 (Spring-LDAP)'
					]
				},

				{
					'label' : 'RTVE Alacarta',
					'relevance' : 'A',
					'from' : '2010',
					'to' : '2012',
					'rol' : 'Software Arquitect and Development Technical Leader',
					'description' : 'Platform arquitecture definition, CI environment implementation, design and development of public RTVE site exposing multimedia contents on demand. Team worked under SCRUM methodology.',
					'tasks' : [
						'WebPortal Development platform from scratch',
						'Legacy CMS abstract data migration to DDD business model. (Entities, Repositories, Bounded Contexts, Anticorruption Layer, etc...)',
						'REST Content API design exposing domain resources',
						'Customer activity social network (CQRS and NOSQL technologies POC)'
					],
					'references' : {
						'site' 	: 'www.rtve.es/alacarta',
						'api' 	: 'rtve.es/api'
					},
					'methodologies' : 'SCRUM, Continuous Integration',
					'technologies' : [
						'Java JEE (Jsp/Servlet, JMS)',
						'Spring 3.1 (SpringData, Spring MVC, Spring Test...)',
						'Hibernate - Oracle',
						'HTML5/Javascript',
						'nodeJS',
						'Neo4j Graph Database'
					]
				},

				{
					'label' : 'XQUID RIA Framework',
					'relevance' : 'A',
					'from' : '2007',
					'to' : '2008',
					'rol' : 'Java and Javascript Senior Programmer',
					'description' : 'RIA component oriented development framework based on HTML and JavaScript',
					'tasks' : [
						'Design and implementation of the visual components.',
						'Demo portfolio development'
					],
					'references' : {
						'site' 	: 'www.xquid.org'
					},
					'methodologies' : '',
					'technologies' : [
						'Java (Eclipse plugins)',
						'HTML/Javascript'
					]
				},

				{
					'label' : 'El Corte Ingles B2B & B2E portal',
					'relevance' : 'A',
					'from' : '2007',
					'to' : '2007',
					'rol' :  'Web Solutions Architect',
					'description' : 'Corporative B2B and B2E portal development.',
					'tasks' : [
						'developing new portlet-based applications',
						'integrating legacy applications under Portal'
					],
					'references' : {
						'site' 	: ''
					},
					'methodologies' : '',
					'technologies' : [
						'Java J2EE',
						'IBM WAS 6',
						'IBM Websphere Portal Server 5'
					]
				}
			]
		}
	]
}


function CVCtrl ($scope) {
	$scope.cv = cv;
}
