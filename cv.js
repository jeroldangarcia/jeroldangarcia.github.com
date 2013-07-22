
var cv = {

	'name' : 'Ernesto Roldán García',
	
	'title' : 'Software Engineer',

	'profile' : {

		'description' : 'More than a decade of experience designing, implementing and adapting online web applications, web portals and software development tools. Proficient in arquitecture and domain design, object oriented modeling, TDD / BDD, and more...',

		'qualifications' : [

			'Plan, develop and implement successful large projects from conception to completion',
			
			'Develop and implement web applications that support day-to-day operations',

			'Collaboration and problem-solving skills',

			'Concerned about team satisfaction and productivity'
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

			{ 'label' : 'SCRUM', 	'value' : 75 },
			{ 'label' : 'XP', 		'value' : 65 },

			{ 'label' : 'Java', 	'value' : 90 },
			{ 'label' : 'JS', 		'value' : 65 },
			{ 'label' : 'Groovy', 	'value' : 40 },

			{ 'label' : 'HTML5', 	'value' : 85 },
			{ 'label' : 'REST', 	'value' : 85 },
			{ 'label' : 'JEE', 		'value' : 85 },
			{ 'label' : 'Spring', 	'value' : 80 },
			{ 'label' : 'NodeJS', 	'value' : 65 },
			{ 'label' : 'NOSQL', 	'value' : 55 }

	],

	'experience' : [
		{ 	
			'company' : 'at Sistemas', 
			'from' : '2000',
			'to' : 'today',
			'rol' : 'Enterprise Web Solution Arquitect and IT Consultan',
			'projects' : [

				{
					'label' : 'MAPFRE Users Directory',
					'relevance' : 'A',
					'from' : '2012',
					'to' : '2013',
					'rol' : 'Software Arquitect',
					'description' : 'SCRUM methodology demostration project for MAPFRE.',
					'tasks' : [
						'Business Web Services development',
						'LDAP Integreation via Spring LDAP'
					],
					'references' : {},
					'methodologies' : 'SCRUM',
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
					'description' : 'Design and development of public RTVE site exposing multimedia contents on demand. Team worked under SCRUM methodology.',
					'tasks' : [
						'WebPortal Development platform from scratch',
						'Legacy CMS data migration to custom business model',
						'REST Content API design',
						'Customer activity social network (POC)'
					],
					'references' : {
						'site' 	: 'www.rtve.es/alacarta',
						'api' 	: 'rtve.es/api'
					},
					'methodologies' : 'SCRUM',
					'technologies' : [
						'Java JEE (Jsp/Servlet, JMS)',
						'Spring 3.1 (SpringData, Spring MVC, ...)',
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
