import { MdAccessTime, MdLocationOn, MdLocationPin, MdSettingsEthernet } from "react-icons/md";
import config from "../../../config";
import Container from "../Common/container";
import { GrOrganization } from "react-icons/gr";
import { githubAtom } from "../../atoms/github";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useEffect, useRef } from "react";
import { classNames } from "../Common/common";
import { useNavigate } from "react-router-dom";
import TabsContainer from "../Common/tabcontainer";
import ProfileCard from "../Common/profilecard";
import { IoMdBriefcase } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";

const fetchGitHubData = async () => {
  try {
    const response = await axios.get(config.github, {
      headers: {
        Authorization: `Bearer ${config.github_token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const CustomLink = ({ href, children, ...props }) => {
  const navigate = useNavigate();
  const isExternal = href.startsWith('http') || href.startsWith('//');

  const handleClick = (e) => {
    if (!isExternal) {
      e.preventDefault();
      navigate(href);
    }
  };

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }
};

export default function Profile() {
  const profileLinks = config.profilelinks;
  const [profileStats, setProfileStats] = useRecoilState(githubAtom);
  const profileRef = useRef(null);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await fetchGitHubData();
        setProfileStats([
          { name: "Repos", value: data.public_repos },
          { name: "Followers", value: data.followers },
          { name: "Gists", value: data.public_gists },
        ]);
      } catch (error) {
        console.error("Error fetching blog stats:", error);
      }
    };
    fetchProfileData();
  }, [setProfileStats]);

  return (
    <div className="flex gap-4 p-4 h-screen bg-gray-100 sticky overflow-auto">
      <div className="w-[40%] text-sm flex flex-col gap-4 h-fit sticky">
        <Container>
          <div className="flex flex-col items-center gap-4">
            <img
              src={config.avatar}
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="flex flex-col gap-0 font-semibold items-center">
              <div>{config.name}</div>
              <div className="text-sm font-light ">@{config.instagram}</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="gap-1 flex items-center">
                <MdLocationOn size={16} />
                <div>{config.location}</div>
              </div>
              <div className="gap-1 flex items-center">
                <GrOrganization size={16} />
                <div>{config.company}</div>
              </div>
            </div>
            <div className="text-center whitespace-pre-line">{config.bio}</div>
            <div>
              <div className="flex space-x-4 divide-x divide-gray-light">
                {profileStats.map((info, index) => (
                  <div
                    key={index}
                    className={classNames(
                      "flex flex-col items-center gap-1",
                      index !== 0 ? "pl-4" : ""
                    )}
                  >
                    <div>{info.name}</div>
                    <div className="text-gray-dark">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <div className="grid grid-cols-1 gap-4 sm:flex sm:gap-x-4">
  {profileLinks.map(({ icon: Icon, link, name }, index) => (
    <CustomLink
      key={index}
      href={link}
      target={link}
      className="flex-1 max-w-[calc((100vw - 72px) / 4)] h-32 sm:max-w-[none] sm:h-auto cursor-pointer border-gray-light hover:border-transparent hover:bg-white group border-2 grid place-items-center rounded transition-all"
    >
      <div className="flex flex-col items-center gap-2 p-3">
        <Icon size={25} className="group-hover:text-black transition-all" />
        <div className="group-hover:text-black transition-all">{name}</div>
      </div>
    </CustomLink>
  ))}
</div>

      </div>
      <div className="w-[60%] h-full overflow-auto">
        <TabsContainer
            reference={profileRef}
            tabNames={["Experience", "Skills"]}
            childdetails={[
              [config.companies.map((company, index) => (
                <ProfileCard
                key={index} 
                cardindex={index}
                profiledetails={{
                  icon: company.image,
                  name: company.name,
                  link: company.url,
                  published: company.published,
                  verified: config.verified_icon,
                  description: company.acronym,
                  text: company.text,
                  numbers:[
                    {
                      data: company.experience
                    },
                    {
                      data: company.location
                    },
                   {
                      data: company.designation
                   }
                 ]
               }}
              
              InfoIcon={<MdAccessTime size={16} />}
              BottomIcons={[
                  {
                    Icon: <MdAccessTime size={16} />,
                  },
                  {
                    Icon: <MdLocationPin size={16} />,
                  },
                  {
                    Icon: <IoMdBriefcase size={16} />,
                  },
                ]}
              />
              ))],
              [config.skills.map((company, index) => (
                <ProfileCard
                key={index} 
                cardindex={index}
                profiledetails={{
                  icon: company.image,
                  name: company.name,
                  link: company.url,
                  published: company.published,
                  verified: config.verified_icon,
                  description: company.acronym,
                  text: company.text,
                  numbers:[
                    {
                      data: company.experience
                    },
                    {
                      data: company.location
                    },
                   {
                      data: company.designation
                   }
                 ]
               }}
              
              InfoIcon={<MdAccessTime size={16} />}
              BottomIcons={[
                {
                  Icon: <MdAccessTime size={16} />,
                },
                {
                  Icon: <MdSettingsEthernet size={16} />,
                },
                {
                  Icon: <AiFillHeart size={16} />,
                },
              ]}
              />
              ))]
            ]}
          />
      </div>
    </div>
  );
}
