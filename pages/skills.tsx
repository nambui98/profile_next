import React from 'react'

type Props = {}
type item = {
    title: string,
    link: string,
    image: string,
}
const Skills = (props: Props) => {
    const data: item[] = [
         {
            title: "Nextjs",
            link: "",
            image: "/assets/img/nextjs.png"
        },
         {
            title: "Reactjs",
            link: "",

            image: "/assets/img/reactjs.png"
        },
        
        {
            title: "Flutter",
            link: "",
            image: "/assets/img/flutter.png"
        },

       
        {
            title: "React Native",
            link: "",
            image: "/assets/img/react-native.png"
        },

       
        {
            title: "Tailwind",
            link: "",
            image: "/assets/img/Tailwind.png"
        },
        {
            title: "CSS3",
            link: "",
            image: "/assets/img/css3.png"
        },
        {
            title: "SCSS",
            link: "",
            image: "/assets/img/scss.png"
        },
        {
            title: "Angular",
            link: "",
            image: "/assets/img/angular.png"
        },
        {
            title: "C#",
            link: "",
            image: "/assets/img/net.png"
        },
        {
            title: "SQL",
            link: "",
            image: "/assets/img/sql.webp"
        },
        {
            title: "HTML",
            link: "",
            image: "/assets/img/html.png"
        },

    ]
    return (
        <div className=" rounded-3xl bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark relative w-full h-full scroll-mb-1 p-6">
            <p className='text-black dark:text-white text-xl text-left font-bold mb-2'>Skills</p>
            {/* <img className="w-full" src={IOK} alt="Sunset in the mountains" /> */}
            <div className='w-full h-[500px] overflow-y-auto  grid  gap-3 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 smx:grid-cols-1 scrollbar'>
                {
                    data.map((item, index) => <div key={index} className="border mb-5 dark:border-dark">
                        <img className='w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] p-2 !object-contain' src={item.image} alt="" />
                    </div>)
                }
            </div>
        </div>
    )
}
export default Skills
