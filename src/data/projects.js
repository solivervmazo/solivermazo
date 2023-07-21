// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.
const sources = {
	coursera: {
		id: 'coursera',
		name: 'Coursera.org',
		url: 'https://www.coursera.org/',
	},
	youtube: {
		id: 'youtube',
		name: 'Youtube.com',
		url: 'https://www.youtube.com/',
	}
}

const repos = {
	kaggle: {
		name: 'Kaggle',
		icon: 'kaggle',
		set: 'fab',
		logo: 'https://www.kaggle.com/static/images/site-logo.svg'
	},
	github: {
		name: 'Github',
		icon: 'github',
		set: 'fab',
	},
	bigquery: {
		name: 'BigQuery',
		icon: 'google',
		set: 'fab',
	},
	tableau: {
		name: 'Tableau',
		icon: false,
		set: false,
		logo: 'https://public.tableau.com/app/assets/tableau-public-logo-rgb.07774149.svg'
	}
}

const categories = [
	"Sql",
	"Python",
	"Tableau",
	"Sheets",
	"Others"
]

const projects = [
	{
		id: 1,
		dir: "portfolio",
		project: 'soliver-portfolio-using-vue-vite-tailwind',
		title: 'Soliver portfolio using Vue+Vite and TailwinCSS hosted in Github pages',
		category: 'others',
		img: 'cover.png' ,
		type: 'soliver mazo',
		date: 'July 2023',
		details: {
			client: false,
			guided: false,
			objective: {
				key: 'objective',
				heading: 'Objective',
				text: `To create a portfolio for showcasing your my skills. With interactive project displays, skill highlighting, and optimized performance, impress potential employers and clients.`,
			},
			tags: {
				key: 'tags',
				heading: 'Tools & Technologies',
				tags: ['Vue3', 'Vite', 'TailwindCSS', 'GitHub Pages']
			}
		},
		src: {
			coverImg: 'cover.png',
			images: ['about.png', /*'about-dark.png',*/ 'project1.png', 'project2.png'],
			md: 'README'
		},
		link: {
			...repos.github,
			url: 'https://github.com/solivervmazo/soliver'
		}
	},
	{
		id: 2,
		dir: "sql_airbnb_london",
		project: 'sql-data-cleaning-london-airbnb-listings-2023',
		title: 'Data cleaning using SQL: London AirBnb listings March 2023',
		category: 'Data Analysis',
		img: 'cover.png' ,
		type: 'soliver mazo',
		date: 'June 2023',
		details: {
			client: false,
			guided: false,
			objective: {
				key: 'objective',
				heading: 'Objective',
				text: `This project aims to prepare the data for analysis by filtering out data outside Uk.`,
			},
			tags: {
				key: 'tags',
				heading: 'Tools & Technologies',
				tags: ['SQL', 'Data Analysis', 'BigQuery']
			}
		},
		src: {
			coverImg: 'cover.png',
			images: [],
			md: 'README'
		},
		link: {
			...repos.bigquery,
			url: 'https://console.cloud.google.com/bigquery?sq=855219307890:df8ae76bb28948059671d59ab8a5d913'
		}
	},
	{
		id: 3,
		dir: "1",
		project: 'exploratory-data-analysis-python-pandas',
		title: 'Exploratory Data Analysis With Python and Pandas',
		category: 'Data Analysis',
		img: 'cover.png' ,
		type: 'guided project',
		date: 'July 2023',
		details: {
			client: false,
			guided: {
				heading: 'About Project',
				details: {
					provider: sources['coursera'],
					course :{
						name: `Exploratory Data Analysis With Python and Pandas`,
						url: 'https://www.coursera.org/projects/exploratory-data-analysis-python-pandas'
					},
					certificate: {
						name: '98S98F7JS7CT',
						url: 'https://www.coursera.org/account/accomplishments/certificate/98S98F7JS7CT'
					}
				}
			},
			objective: {
				key: 'objective',
				heading: 'Objective',
				text: `Apply practical Exploratory Data Analysis (EDA) techniques on any tabular dataset using Python packages such as Pandas and Numpy.`,
			},
			tags: {
				key: 'tags',
				heading: 'Tools & Technologies',
				tags: ['Python', 'Data Analysis', 'Pandas', 'EDA']
			}
		},
		src: {
			coverImg: 'cover.png',
			images: ['output_15_1.png','output_14_1.png','output_32_2.png'],
			md: 'notebook'
		},
		link: {
			...repos.kaggle,
			url: 'https://www.kaggle.com/code/solivermazo/exploratory-data-analysis-with-python-and-pandas'
		}
	},
	{
		id: 4,
		dir: "coursera_py2",
		project: 'python-for-data-analysis-pandas-numpy',
		title: 'Python for Data Analysis: Pandas & NumPy',
		category: 'Data Analysis',
		img: 'cover.png' ,
		type: 'guided project',
		date: 'July 2023',
		details: {
			client: false,
			guided: {
				heading: 'About Project',
				details: {
					provider: sources['coursera'],
					course :{
						name: `Python for Data Analysis: Pandas & NumPy`,
						url: 'https://www.coursera.org/projects/python-for-data-analysis-numpy'
					},
					certificate: {
						name: '527RS23WZTLH',
						url: 'https://www.coursera.org/account/accomplishments/certificate/527RS23WZTLH'
					}
				}
			},
			objective: {
				key: 'objective',
				heading: 'Objective',
				text: ` Understand the fundamentals of data analysis in Python and we will leverage the power of two important python libraries known as Numpy and pandas. NumPy and Pandas are two of the most widely used python libraries in data science. They offer high-performance, easy to use structures and data analysis tools.`,
			},
			tags: {
				key: 'tags',
				heading: 'Tools & Technologies',
				tags: ['Python', 'Data Analysis', 'Pandas', 'NumPy', 'Data Science']
			}
		},
		src: {
			coverImg: 'cover.png',
			images: [],
			md: 'notebook'
		},
		link: {
			...repos.kaggle,
			url: 'https://www.kaggle.com/solivermazo/python-for-data-analysis-pandas-numpy'
		}
	},
	{
		id: 4,
		dir: "sql_window_func",
		project: 'sql-window-functions-for-analytics',
		title: 'SQL Window Functions for Analytics',
		category: 'Data Analysis',
		img: 'cover.png' ,
		type: 'guided project',
		date: 'July 2023',
		details: {
			client: false,
			guided: {
				heading: 'About Project',
				details: {
					provider: sources['coursera'],
					course :{
						name: `SQL Window Functions for Analytics`,
						url: 'https://www.coursera.org/projects/sql-window-functions-for-analytics'
					},
					// certificate: {
					// 	name: '527RS23WZTLH',
					// 	url: 'https://www.coursera.org/account/accomplishments/certificate/527RS23WZTLH'
					// }
				}
			},
			objective: {
				key: 'objective',
				heading: 'Objective',
				text: `This is a hands-on project that will help SQL users use window functions extensively for database insights. In this project, you will learn how to explore and query the project-db database extensively. We will start this hands-on project by retrieving the data in the table in the database.`,
			},
			tags: {
				key: 'tags',
				heading: 'Tools & Technologies',
				tags: ['SQL', 'MySql Workbench', 'Data Analysis', 'Data Science']
			}
		},
		src: {
			coverImg: 'cover.png',
			images: ['1.png'],
			md: 'README'
		},
		link: false
	},
	{
		id: 5,
		dir: "london_bike_eda",
		project: 'london-bike-eda-dataviz',
		title: 'London Bike Sharing - EDA with Python',
		category: 'Data Analysis',
		img: 'cover.png' ,
		metaImg: 'meta.png' ,
		type: 'youtube project',
		date: 'July 2023',
		details: {
			client: false,
			guided: {
				heading: 'About Project',
				details: {
					provider: sources['youtube'],
					title :{
						name: `Data Analyst Portfolio Project | From data gathering to data visualisation`,
						url: 'https://youtu.be/nl9eZl1IOKI'
					},
				}
			},
			objective: {
				key: 'objective',
				heading: 'Objective',
				text: `End to end data analyst portfolio project from gathering data, through data exploration, assessment and manipulation using the pandas library in Python, to data visualisation in Tableau.`,
			},
			tags: {
				key: 'tags',
				heading: 'Tools & Technologies',
				tags: ['Data Analysis', 'Python', 'Data Science', 'Tableau']
			}
		},
		src: {
			coverImg: 'cover.png',
			images: ['cover.png', 'heatmap.png', 'hour.png'],
			md: 'EDA'
		},
		viz: {
			...repos.tableau,
			url: 'https://public.tableau.com/views/LondonBikeRidesViz/LondonBikeRides?:language=en-US&:display_count=n&:origin=viz_share_link'
		},
		link: {
			...repos.kaggle,
			url: 'https://www.kaggle.com/solivermazo/london-bike-sharing-eda'
		}
	}
];

function getProject(projectName) {
	return projects.find(x => x.project == projectName) ?? false;
}

export default projects;
export { projects , categories , getProject };
