// single source for team members, used by the home page strip and the team page
import elaine from '$lib/assets/team/elaine.jpg';
import coachdai from '$lib/assets/team/coachdai.jpeg';
import erik from '$lib/assets/team/erik.jpg';
import johnathan from '$lib/assets/team/jonathan.jpeg';
import nathan from '$lib/assets/team/nathan.jpeg';
import max from '$lib/assets/team/max.jpg';
import coachwan from '$lib/assets/team/john.jpg';
import sherry from '$lib/assets/team/sherry1.jpg';
import vincent from '$lib/assets/team/vincent.jpg';
import zilong from '$lib/assets/team/zilong.jpg';
import mentorzhang from '$lib/assets/team/baoshe.jpg';
import niko from '$lib/assets/team/niko.jpg';
import justin from '$lib/assets/team/justin.jpg';

export type Member = {
	slug: string; // used in /team#slug to open a bio directly
	img: string;
	name: string;
	role: string;
	bio: string;
};

export const teamGroups: { name: string; members: Member[] }[] = [
	{
		name: 'Leadership',
		members: [
			{
				slug: 'coach-dai',
				img: coachdai,
				name: 'Coach Dai',
				role: 'Head Coach',
				bio: 'Coach Dai is in his third year coaching the Ingenuity FTC team. He earned his PhD in Electrical Engineering from Boston University and currently works as a Senior Staff Engineer at Northrop Grumman. He is passionate about circuit design, control systems, and automation, and enjoys sharing that enthusiasm with students. His goal is to guide the team through the entire engineering process—from concept and design to testing and refinement—while ensuring they have the support and resources they need to learn, grow, and succeed.'
			},
			{
				slug: 'coach-wan',
				img: coachwan,
				name: 'Coach Wan',
				role: 'Assistant Coach',
				bio: 'John Wan is a Supervisory Data Scientist at the U.S. FDA and an experienced FIRST mentor. He coaches FTC and FLL teams with a focus on engineering design, autonomous strategy, and data-driven problem solving. John also teaches data science at UMBC and brings real-world analytics and leadership experience to youth STEM education. He holds an MBA from Georgia Tech and a B.S. in Computer Engineering.'
			},
			{
				slug: 'mentor-zhang',
				img: mentorzhang,
				name: 'Mentor Zhang',
				role: 'Software Mentor',
				bio: "Dr. Baoshe Zhang is a software mentor for Team Ingenuity. He holds a Ph.D. in Physics from the Hong Kong University of Science and Technology and is an Associate Professor at the University of Maryland School of Medicine. With a background in software engineering and expertise in programming and automation, he helps guide the team's software development."
			},
			{
				slug: 'elaine',
				img: elaine,
				name: 'Elaine',
				role: 'Team Captain',
				bio: 'Elaine is a Junior and fourth-year team member with seven years of experience in FIRST. With past experience in hardware, software, and outreach, she is eager to assist her team in any aspect. In her free time, you can find Elaine hiding in a corner or managing her minions.'
			}
		]
	},
	{
		name: 'Hardware',
		members: [
			{
				slug: 'erik',
				img: erik,
				name: 'Erik',
				role: 'Hardware Lead',
				bio: 'Erik is the Hardware Lead of Team Ingenuity, overseeing the mechanical design and construction of the robot. With a keen eye for detail and a passion for engineering, Erik ensures that the robot is built to perform at its best during competitions. Erik is currently a Junior and enjoys playing squash in his free time.'
			},
			{
				slug: 'nathan',
				img: nathan,
				name: 'Nathan',
				role: 'Electrical Lead',
				bio: 'Nathan is a 4th year FTC student on team Ingenuity 24220. He also participated in 4 years of FLL, even going to nationals once. He enjoys playing soccer and spending times with his friends and family.'
			},
			{
				slug: 'vincent',
				img: vincent,
				name: 'Vincent',
				role: 'Hardware Specialist',
				bio: "Vincent is a member of Team Ingenuity's hardware team, where he helps with robot construction and assembly. He enjoys working hands-on with mechanical components and collaborating with teammates to bring designs to life."
			},
			{
				slug: 'sherry',
				img: sherry,
				name: 'Sherry',
				role: 'Hardware Specialist',
				bio: 'Sherry works on the hardware and portfolio, where she leads design initiatives, active building, and portfolio development. In her free time, she enjoys reading, fencing, and exploring cool concepts.'
			}
		]
	},
	{
		name: 'Software',
		members: [
			{
				slug: 'niko',
				img: niko,
				name: 'Niko',
				role: 'Software Lead',
				bio: "Niko manages the software side of Team Ingenuity, having worked on the robot's vision system along with maintaining and building out the website as it stands today. In his free time, he likes to code projects, mostly in Python or Javascript, and work on running events with Hack Club."
			},
			{
				slug: 'justin',
				img: justin,
				name: 'Justin',
				role: 'Software Specialist',
				bio: 'Justin works alongside Niko on software for Team Ingenuity. He helps with website development and the more mathematical side of robotics. He is currently a sophomore. In his free time, you can find him playing piano or doing math.'
			}
		]
	},
	{
		name: 'CAD',
		members: [
			{
				slug: 'zilong',
				img: zilong,
				name: 'Zilong',
				role: 'CAD Lead',
				bio: 'Zilong is the CAD Lead of Team Ingenuity, specializing in computer-aided design and 3D modeling, helping out with creating parts which are not available off the shelf. His high level of CAD skill and creative problem-solving skills helps to bring the robot to life.'
			}
		]
	},
	{
		name: 'Outreach',
		members: [
			{
				slug: 'jonathan',
				img: johnathan,
				name: 'Jonathan',
				role: 'Outreach Specialist',
				bio: 'Johnathan, a new addition to team ingenuity, focuses on the completion of various tasks necessary for the team, ranging from hardware roles to mission strategy. in his downtime, he enjoys associating with friends and family.'
			},
			{
				slug: 'max',
				img: max,
				name: 'Max',
				role: 'Outreach Specialist',
				bio: 'Max works on outreach for Team Ingenuity, helping to connect with the community and spread awareness about FIRST robotics. He assists with events, coordinates with sponsors, and works to inspire the next generation of engineers.'
			}
		]
	}
];

export const members: Member[] = teamGroups.flatMap((group) => group.members);
