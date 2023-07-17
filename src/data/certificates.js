// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const certificates = {
    featured: [
        {
            id: 1,
            title: 'Python for Everybody Specialization',
            credential: 'https://www.coursera.org/account/accomplishments/specialization/certificate/74TB8VE8HFQ9',
            img:  new URL('../assets/images/certs/74TB8VE8HFQ9.png', import.meta.url).href,
            org: 'Coursera | University of Michigan',
            featured: true,
            skills: ['Python', 'JSON', 'XML', 'DBMS']
        },
    ],
    courses: [
        {
            id: 1,
            title: 'SQL for Data Science',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/RPHXLFSDMY5Q',
            img:  new URL('../assets/images/certs/RPHXLFSDMY5Q.png', import.meta.url).href,
            org: 'Coursera | University of California, Davis',
            featured: false,
            skills: ['Data Science']
        },
        {
            id: 2,
            title: 'Foundations: Data, Data, Everywhere',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/WQTCNGESCJE6',
            img:  new URL('../assets/images/certs/WQTCNGESCJE6.png', import.meta.url).href,
            org: 'Coursera | Google Career Certificates',
            featured: false,
            skills: ['Data Analysis']
        },
        {
            id: 3,
            title: 'Ask Questions to Make Data-Driven Decisions',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4',
            img:  new URL('../assets/images/certs/4PACMBRHMSD4.png', import.meta.url).href,
            org: 'Coursera | Google Career Certificates',
            featured: false,
            skills: ['Data Analysis']
        },
        {
            id: 4,
            title: 'Prepare Data for Exploration',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4',
            img:  new URL('../assets/images/certs/4PACMBRHMSD4.png', import.meta.url).href,
            org: 'Coursera | Google Career Certificates',
            featured: false,
            skills: ['Data Analysis']
        },
        {
            id: 5,
            title: 'Process Data from Dirty to Clean',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/VSMTAGTWLBN3',
            img:  new URL('../assets/images/certs/VSMTAGTWLBN3.png', import.meta.url).href,
            org: 'Coursera | Google Career Certificates',
            featured: false,
            skills: ['Data Analysis']
        },
        {
            id: 6,
            title: 'Analyze Data to Answer Questions',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/7BUJPD6TJL3Q',
            img:  new URL('../assets/images/certs/7BUJPD6TJL3Q.png', import.meta.url).href,
            org: 'Coursera | Google Career Certificates',
            featured: false,
            skills: ['Google BigQuery', 'Data Analysis', 'Google Sheets', 'SQL']
        },
        {
            id: 7,
            title: 'Share Data Through the Art of Visualization',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/FL94MR4L6JZY',
            img:  new URL('../assets/images/certs/FL94MR4L6JZY.png', import.meta.url).href,
            org: 'Coursera | Google Career Certificates',
            featured: false,
            skills: ['']
        },
        {
            id: 8,
            title: 'Programming for Everybody (Getting Started with Python)',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/AN5QQMNDFDKM',
            img:  new URL('../assets/images/certs/AN5QQMNDFDKM.png', import.meta.url).href,
            org: 'Coursera | University of Michigan',
            featured: false,
            skills: ['']
        },
        {
            id: 9,
            title: 'Python Data Structures',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/WW9AXFF2J87L',
            img:  new URL('../assets/images/certs/WW9AXFF2J87L.png', import.meta.url).href,
            org: 'Coursera | University of Michigan',
            featured: false,
            skills: ['']
        },
        {
            id: 10,
            title: 'Using Python to Access Web Data',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/VRHW6YK5CAR9',
            img:  new URL('../assets/images/certs/VRHW6YK5CAR9.png', import.meta.url).href,
            org: 'Coursera | University of Michigan',
            featured: false,
            skills: ['']
        },
        {
            id: 11,
            title: 'Using Databases with Python',
            credential: 'https://www.coursera.org/account/accomplishments/certificate/D5V2D4PUP35R',
            img:  new URL('../assets/images/certs/D5V2D4PUP35R.png', import.meta.url).href,
            org: 'Coursera | University of Michigan',
            featured: false,
            skills: ['']
        },
    ]
} ;

export default certificates;
export { certificates };