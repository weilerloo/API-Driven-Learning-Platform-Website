import user2 from "/src/assets/images/profile/user-2.jpg";
import user3 from "/src/assets/images/profile/user-3.jpg";
import img1 from "/src/assets/images/blog/blog-img1.jpg";
import img2 from "/src/assets/images/blog/blog-img2.jpg";
import img3 from "/src/assets/images/blog/blog-img3.jpg";
import { Badge } from "flowbite-react";
import { TbPoint }   from "react-icons/tb";
import { Icon } from "@iconify/react";
import { Link } from "react-router";


const BlogCardsData = [
  {
    avatar: user2,
    coveravatar: img1,
    title: "Upgrade my knowledge about the universe.",
    category: "Social",
    name: "Georgeanna Ramero",
    view: "9,125",
    comments: "3",
    time: "Mon, Dec 19",
    url:''
  },
  {
    avatar: user2,
    coveravatar: img2,
    title:
      "I get to learn more about the latest tech trends.",
    category: "Gadget",
    name: "Georgeanna Ramero",
    view: "4,150",
    comments: "38",
    time: "Sun, Dec 18",
    url:''
  },
  {
    avatar: user3,
    coveravatar: img3,
    title: "This is an amazing platform to learn new skills.",
    category: "Health",
    name: "Georgeanna Ramero",
    view: "9,480",
    comments: "12",
    time: "Sat, Dec 17",
    url:''
  },
];

const BlogCards = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-30 mx-20 my-10">
        {BlogCardsData.map((item, i) => (
          <div className="lg:col-span-4 col-span-12" key={i}>
            <Link to={item.url} className="group">
            <div className="rounded-xl dark:shadow-dark-md shadow-md bg-gradient-to-r from-violet-600 to-indigo-600 p-0 relative w-full break-words overflow-hidden">
                <div className="relative">
                  <img src={item.coveravatar} alt="matdash" />
                </div>

                <div className="px-6 pb-6">
                  <img
                    src={item.avatar}
                    className="h-10 w-10 rounded-full -mt-7 relative z-1"
                    alt="user"
                  />
                  <Badge color={"muted"} className="mt-6">
                    {item.name}
                  </Badge>
                  <h5 className="text-lg text-black-600/100 my-6 group-hover:text-primary line-clamp-2">{item.title}</h5>
                  <div className="flex">
                    <div className="flex gap-2 me-6 items-center">
                    <Icon icon="solar:eye-outline" height="18" className="text-dark" />
                      <span className="text-sm text-darklink">{item.view}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                    <Icon icon="solar:chat-line-outline" height="18" className="text-dark" />
                      <span className="text-sm text-darklink">{item.view}</span>
                    </div>
                    <div className="flex gap-1 items-center ms-auto">
                      <TbPoint
                        size={15}
                        className="text-dark"
                      />{" "}
                      <span className="text-sm text-darklink">{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCards;
