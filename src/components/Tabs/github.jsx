import Container from "../Common/container";
import config from "../../../config";
import { MdLanguage, MdRemoveRedEye, MdStar, MdLocationOn } from "react-icons/md";
import { VscRepoForked } from "react-icons/vsc";
import { GrOrganization } from "react-icons/gr";
import {useRecoilValueLoadable } from "recoil";
import { githubData, followersData, repoDetails } from "../../atoms/github";
import { Audio } from "react-loader-spinner";
import { useRef } from "react";
import { RootTransition, ChildTransition } from "../Common/transition";
import TabsContainer from "../Common/tabcontainer";
import RepoCard from "../Common/repocard";

export default function Github() {
  const githubProfile = useRecoilValueLoadable(githubData);
  const followers = useRecoilValueLoadable(followersData);
  const repos = useRecoilValueLoadable(repoDetails);
  const githubRef = useRef(null);
  if (githubProfile.state === "loading" || followers.state === "loading" || repos.state === "loading") {
    return (
      <>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </>
    );
  } else {
    return (
      <div className="flex gap-4 p-4 h-screen bg-gray-100 overflow-hidden">
        <div className="w-[30%] text-sm flex flex-col gap-4 max-h-screen sticky overflow-y-auto">
          <Container >
            <div className="flex flex-col items-center gap-4">
              <img
                src={config.avatar}
                alt="Profile Picture"
                className="rounded-full w-20 h-20"
              />
              <div className="flex flex-col gap-0 font-semibold items-center">
                <div>{config.name}</div>
                <div className="text-sm font-light ">@{config.instagram}</div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="gap-1 flex items-center">
                  <MdLocationOn size={16} />
                  <div>{config.hometown}</div>
                </div>
                <div className="gap-1 flex items-center">
                  <GrOrganization size={16} />
                  <div>{config.company}</div>
                </div>
              </div>
              <div className="text-center whitespace-pre-line">{githubProfile.contents.bio}</div>
              <div className="text-center whitespace-pre-line">{}</div>
              <div>
                <div className="flex space-x-4 divide-x divide-gray-light">
                  <div className="flex flex-col items-center gap-1">
                    <div>Followers</div>
                    <div className="text-gray-dark">
                      {githubProfile.contents.followers}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 pl-4">
                    <div>Following</div>
                    <div className="text-gray-dark">
                      {githubProfile.contents.following}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container title="Followers" >
            <RootTransition show={true} ref={githubRef}>
              <div className="flex flex-wrap gap-1">
                {/* Render each follower using ChildTransition */}
                {followers.contents.map((follower, index) => (
                  <ChildTransition
                    key={follower.login}
                    direction="left"
                    delay={index * 100} // Adjust the delay as needed
                    speed={100}
                  >
                    <div className="relative">
                      <img
                        src={follower.avatar_url}
                        alt="Profile Picture"
                        width={32}
                        height={32}
                        className="rounded-full peer"
                      />
                      <div className="absolute -top-[24px] whitespace-nowrap -translate-x-1/2 left-1/2 transition-all -z-10 peer-hover:z-10 opacity-0 peer-hover:opacity-100 ease-in-out duration-500 bg-black px-2 rounded text-white translate-y-6 peer-hover:translate-y-0 pointer-events-none">
                        {follower.login}
                      </div>
                    </div>
                  </ChildTransition>
                ))}
              </div>
            </RootTransition>
          </Container>
        </div>

        <div className="w-[45%] overflow-y-auto bg-white ">
          <TabsContainer reference={githubRef} tabNames={["Top Repositories"]} 
          repodetails={[repos.contents.map((repo, index) => (
            <RepoCard key={index} repodetails={repo} cardindex={index} BottomIcons={[
              {
                Icon: <MdRemoveRedEye size={16} />,
              },
              {
                Icon: <VscRepoForked size={16} />,
              },
              {
                Icon: <MdStar size={16} />,
              },
            ]} />
          ))]}
          />
            
          
        </div>
        <div className="w-[25%] flex flex-col gap-4 h-fit sticky border border-black"></div>
      </div>
    );
  }
}
