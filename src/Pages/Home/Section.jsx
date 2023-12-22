

import { FaLaptopCode, FaBriefcase, FaUniversity, FaGraduationCap, FaUserTie, FaStore, FaPaintBrush, FaFlask, FaMedkit } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Section = () => {
    const userTypesData = [
        {
            title: 'Developers',
            description: 'Enhance your productivity and manage your tasks efficiently with our powerful tools.',
            icon: <FaLaptopCode />,
            img: 'https://i.ibb.co/8D4cjx7/medium-shot-man-working-laptop.jpg',
        },
        {
            title: 'Corporate Company',
            description: 'Organize your work, collaborate with team members, and achieve your business goals.',
            icon: <FaBriefcase />,
            img: 'https://i.ibb.co/nbp2yp1/stylish-business-group.jpg',
        },
        {
            title: 'Bankers',
            description: 'Stay on top of your tasks, deadlines, and financial activities seamlessly.',
            icon: <FaUniversity />,
            img: 'https://i.ibb.co/bFythdX/smiling-ceo-blue-suit-1.jpg',
        },
        {
            title: 'Students',
            description: 'Keep track of your assignments, projects, and deadlines to stay ahead in your studies.',
            icon: <FaGraduationCap />,
            img: 'https://i.ibb.co/qdTtz4C/front-view-young-beautiful-lady-red-t-shirt-black-jeans-holding-different-copybooks-files-smiling-wi.jpg',
        },
        {
            title: 'Freelancers',
            description: 'Manage your projects, set milestones, and increase your efficiency as a freelancer.',
            icon: <FaUserTie />,
            img: 'https://i.ibb.co/gVZtXFL/guy-working-laptop-having-icons-surrounding-him.jpg',
        },
        {
            title: 'Small Business',
            description: 'Streamline your business tasks, manage projects, and boost your overall productivity.',
            icon: <FaStore />,
            img: 'https://i.ibb.co/VLX7zVR/elevated-view-businessman-shaking-hands-with-his-partner-workplace-2.jpg',
        },
        {
            title: 'Designers',
            description: 'Bring your creative projects to life with organized task management and collaboration.',
            icon: <FaPaintBrush />,
            img: 'https://i.ibb.co/1R5ffGs/medium-shot-woman-working-interior-design-project-2.jpg',
        },
        {
            title: 'Researchers',
            description: 'Efficiently organize your research tasks, collaborate with your team, and stay on track.',
            icon: <FaFlask />,
            img: 'https://i.ibb.co/L63S2jT/woman-working-lab-with-microscope.jpg',
        },

    ];
    AOS.init({
        disable: false,
        offset: 120,
        delay: 0,
        duration: 200,
        easing: 'ease',
    });

    return (
        <section className=" py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold mb-10 text-gray-800">Who Can Benefit from This Website?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {userTypesData.map((userType, index) => (
                        <div
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay={index * 100} // Use dynamic delay for staggered effect
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement=""
                            key={index}
                            className=" bg-white p-8  rounded-lg shadow-md transition-transform hover:shadow-lg hover:bg-blue-100"
                        >
                            <img src={userType.img} alt={userType.title} className=" mb-6  w-full rounded-md" />
                            <div className=' flex justify-start gap-3'>
                                <div className="icon-container text-3xl">{userType.icon}</div>
                                <h3 className="text-xl font-semibold text-blue-500 mb-4">{userType.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">{userType.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section;
