
var cv = {

	'name' : 'Ernesto Roldán',
	
	'title' : 'Software Engineer',

	'profile' : {

		'description' : 'IT professional highly motivated with more than a decade of experience designing, implementing and adapting online web applications, web portals and software development tools.',
		'description2' : 'Proficient in arquitecture and domain design, object oriented modeling, Design Patterns, TDD / BDD / DDD.',
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
			'street' 	: '',
			'CP' 		: '',
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
		'time'		: '1996 - 2000'
	},

	'skills' : [
			{ 'label' : 'Agile SCRUM', 	 'value' : 80 },  
			{ 'label' : 'HTML5', 	     'value' : 80 },
			{ 'label' : 'JS', 		     'value' : 80 },
			{ 'label' : 'Polymer',       'value' : 90 },
			{ 'label' : 'Angular',       'value' : 70 },
			{ 'label' : 'Spring', 	     'value' : 70 },
			{ 'label' : 'NodeJS', 	     'value' : 70 },			
			{ 'label' : 'Java-JEE',      'value' : 90 },
			{ 'label' : 'REST', 	     'value' : 90 },
			{ 'label' : 'TDD - BDD',     'value' : 90 },
			{ 'label' : 'DDD-CQRS',		 'value' : 90 }
	],

	'social' : [ 
		{ 
			'label' : 'Linked In',
			'link'  : 'https://es.linkedin.com/in/ernesto-roldán-garcía-48317731',
			'icon'	: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-black-square-icons-social-media-logos/127717-simple-black-square-icon-social-media-logos-linkedin-logo.png',
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
                    'label' : 'ECI DVD',
                    'relevance': 'A',
                    'from' : '2015 May',
                    'to' : 'today',
                    'rol' : 'Testing & QA',
                    'description' : 'New supermarket site',
                    'tasks' : [
                        'BDD Evangelist',
                        'CucumberJS implantation',
                        'REST API design',
                        'DB governance tool'
                    ],
                    'references':{},
                    'methodologies':'Agile SCRUM',
                    'technologies' : [
                        'docker',
                        'nodeJS',
                        'CucumberJS',
                        'Mocha / sinon / chai',
                        'GO'
                    ]
                },

                {
                    'label' : 'QUVE',
                    'relevance' : 'A',
                    'from' : '2014 September',
                    'to' : '2015 April',
                    'rol' : 'Front End Developer',
                    'description' : 'Web console for applications deployment',
                    'tasks' : [
                        'WebComponents design and development'
                    ],
                    'references': {},
                    'methodologies' : 'Agile SCRUM',
                    'technologies' : ['WebComponents', 'Polymer', 'Angular', 'HTML/Javascript']
                },

                {
                    'label' : 'Internal Technical Office',
                    'relevance' : 'A',
                    'from' : '2012',
                    'to' : '2014 August',
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
						'App life cycle DDD modelling'
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
