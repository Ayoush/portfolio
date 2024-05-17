import Container from "../Common/container";
import config from "../../../config";
import {fetchMediumPosts, getMediumFollowersCount, queryGraphQL} from "../../atoms/blogstats";
import { useEffect, useRef } from "react";
import { classNames } from "../Common/common";
import { badgesAtom, blogAtom, blogStatsAtom, hblogAtom, tagsAtom } from "../../atoms/blog";
import { useRecoilState } from "recoil";
import TabsContainer from "../Common/tabcontainer";
import BlogCard from "../Common/blogcard";
import { MdAccessTime, MdModeComment, MdRemoveRedEye } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Button from "../Common/normal_button";






const getHashnodeAndMediumLinks = () => {
  const filteredLinks = config.social_links.filter(
    link => link.name === "Hashnode" || link.name === "Medium"
  );

  const hashnode = filteredLinks.find(link => link.name === "Hashnode");
  const medium = filteredLinks.find(link => link.name === "Medium");

  return { hashnode, medium };
};

function getUsername(socialMediaName) {
  return socialMediaName.replace(/^@/, '');
}

const fetchHashnodeData = async (hashnode_username, hashnodePageSize, totalHashnodeDocuments) => {
  const hashnodeViewsPromises = [];
  const totalPages = Math.ceil(totalHashnodeDocuments / hashnodePageSize);
  
  for (let page = 1; page <= totalPages; page++) {
    hashnodeViewsPromises.push(
      queryGraphQL(
        `query {
            user(username: "${hashnode_username}") {
              posts(page: ${page}, pageSize: ${hashnodePageSize}) {
                edges {
                  node {
                    views
                  }
                }
              }
            }
          }
        `,
        config.hashnode_token
      )
    );
  }

  const hashnodeViewsData = await Promise.all(hashnodeViewsPromises);

  const totalHashnodeViews = hashnodeViewsData.reduce((total, pageData) => {
    const views = pageData.data.user.posts.edges.map(edge => edge.node.views).reduce((a, b) => a + b, 0);
    return total + views;
  }, 0);

  return totalHashnodeViews;
};


export default function Blog() {
  const {hashnode, medium} = getHashnodeAndMediumLinks();
  const [blogStats, setBlogStats] = useRecoilState(blogStatsAtom);
  const [mediumBlogs, setBlog] = useRecoilState(blogAtom);
  const [hashnodeBlogs, setHBlog] = useRecoilState(hblogAtom);
  const [hashnodeBadge, sethashnodeBadge] = useRecoilState(badgesAtom);
  const [tags, settags] = useRecoilState(tagsAtom);
  const blogRef = useRef();
  useEffect(() => {
    const fetchBlogStats = async () => {
      try {
        const [stats, blogs, hashnodebadges, hblogs, tags] = await blogStatsQuery();
        setBlogStats(stats);
        setBlog(blogs.dataMedium);
        sethashnodeBadge(hashnodebadges);
        setHBlog(hblogs)
        settags(tags)
      } catch (error) {
        console.error("Error fetching blog stats:", error);
      }
    };

    fetchBlogStats();
  }, []);


  const blogStatsQuery = async () => {
    const mediam_username = getUsername(config.social_links.find(link => link.name === "Medium").username);
    const hashnode_username = getUsername(config.social_links.find(link => link.name === "Hashnode").username);
    const [mediumPosts, graphQLData, medium_followers, blogs] = await Promise.all([
      fetchMediumPosts(mediam_username),
      queryGraphQL(
        `
          query {
            user(username: "${hashnode_username}") {
              followersCount
              badges {
                name
                description
                image
              }
              posts(page: 1, pageSize: 100) {
                edges {
                  node {
                    title
                    subtitle
                    tags {
                      name
                    }
                    url
                    coverImage {
                      url
                    }
                    views
                    reactionCount
                    replyCount
                    responseCount
                    publishedAt
                  }
                }
                totalDocuments
              }
            }
          }
        `,
        config.hashnode_token
      ),
      getMediumFollowersCount(),
      fetchMediumPosts(mediam_username),
    ]);
    const hashnode_views = await fetchHashnodeData(hashnode_username, 20, graphQLData.data.user.posts.totalDocuments);
    const blogStats = [
      {
        name: 'Blogs',
        value: mediumPosts.dataMedium.length + graphQLData.data.user.posts.totalDocuments,
      },
      {
        name: 'Followers',
        value: graphQLData.data.user.followersCount + medium_followers.followersCount
      },
      {
        name: 'Views',
        value: hashnode_views
      }
    ];
    const normalizeTag = (tag) => `#${tag.toLowerCase().replace(/\s+/g, '')}`;

    const tagsmedium = blogs.dataMedium.slice(0, 2).flatMap(article => article.tags.map(normalizeTag));
    const tagshashnode = graphQLData.data.user.posts.edges.slice(0, 3).flatMap(article => article.node.tags.map(tag => normalizeTag(tag.name)));
    const allTags = [...new Set([...tagsmedium, ...tagshashnode])];
    return [blogStats, blogs, graphQLData.data.user.badges, graphQLData.data.user.posts.edges, allTags];
  };
  

  return (
    <div className="flex gap-4 p-4 h-screen bg-gray-100 overflow-hidden">
      <div className="w-[30%] text-sm flex flex-col gap-4 max-h-screen sticky overflow-y-auto">
        <Container>
          <div className="flex flex-col items-center gap-4">
            <img
              src={config.avatar}
              alt="Profile Picture"
              className="rounded-full w-20 h-20"
            />
            <div className="flex flex-col gap-0 items-center font-medium">
              <div className="font-semibold">{config.name}</div>
              <div className="font-light ">@{config.instagram}</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="gap-2 flex items-center">
                <hashnode.icon size={16} />
                <a
                  href={hashnode.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {hashnode.username}
                </a>
              </div>
              <div className="gap-2 flex items-center">
                <medium.icon size={16} />
                <a href={medium.href} target="_blank" rel="noreferrer">
                  {medium.username}
                </a>
              </div>
            </div>
            <div className="text-center whitespace-pre-line">{config.bio}</div>
            <div>
              <div className="flex space-x-4 divide-x divide-gray-light">
                {blogStats.map((info, index) => (
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
        <Container title="Badges">
        <div className="flex flex-wrap gap-1">
                {
                  hashnodeBadge.map((badge, index) => (
                    <img
                      key={index}
                      alt={badge.name}
                      src={badge.image}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ))
                }
              </div>
        </Container>
      </div>
      {/* ending first div */}

      
      <div className="w-[45%] overflow-y-auto bg-white">
      <TabsContainer
            reference={blogRef}
            tabNames={["Medium", "Hashnode"]}
            childdetails={[
              [ 
                mediumBlogs.map((blog, index) => (
                  <BlogCard key={index} 
                blogdetails={{
                  image: blog.image,
                  icon: config.medium_icon,
                  blogName: "Medium.com",
                  link: blog.link,
                  published: blog.date,
                  title: blog.title,
                }}
                cardindex={0}
                InfoIcon={<MdAccessTime size={16} />}
                BottomIcons={[
                  {
                    Icon: <MdRemoveRedEye size={16} />,
                  },
                  {
                    Icon: <FaHeart size={16} />,
                  },
                  {
                    Icon: <MdModeComment size={16} />,
                  },
                ]}
                />
                ))
              ],
              [hashnodeBlogs.map((blog, index) => (
                <BlogCard key={index} 
              blogdetails={{
                image: blog.node.coverImage.url,
                icon: config.hashnode_icon,
                blogName: "Hashnode.com",
                link: blog.node.url,
                published: blog.node.publishedAt.substring(0, 10),
                title: blog.node.title,
                numbers:[
                  {
                    data: blog.node.views
                  },
                  {
                    data: blog.node.reactionCount
                  },
                  {
                    data: blog.node.responseCount
                  }
                ]
              }}
              cardindex={0}
              InfoIcon={<MdAccessTime size={16} />}
              BottomIcons={[
                {
                  Icon: <MdRemoveRedEye size={16} />,
                },
                {
                  Icon: <FaHeart size={16} />,
                },
                {
                  Icon: <MdModeComment size={16} />,
                },
              ]}
              />
              ))]
            ]}
          />   
      </div>
      <div className="w-[25%] flex flex-col gap-4 h-fit sticky ">
      <Container title="Tags">
          <div className="flex flex-col gap-4 text-sm">
            {tags.slice(0, 7).map((language) => (
              <div key={language} className="lowercase">
                {language}
              </div>
            ))}
          </div>
        </Container>
        <Container title="You may checkout">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <img
                    alt="Medium logo"
                    src={config.medium_icon}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="font-medium">Medium</div>
                  <img
                    alt="verified bage"
                    src={config.verified_icon}
                    width={12}
                    height={12}
                    className="rounded-full"
                  />
                </div>
              </div>
              <Button referrerPolicy="no-referrer" target="_blank" href={config.profile_url}>
                Check now
              </Button>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <img
                    alt="Hashnode logo"
                    src={config.hashnode_icon}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="font-medium">Hashnode</div>
                  <img
                    alt="verified bage"
                    src={config.verified_icon}
                    width={12}
                    height={12}
                    className="rounded-full"
                  />
                </div>
              </div>
              <Button
                referrerPolicy="no-referrer"
                target="_blank"
                href={config.profile_url}
              >
                Check now
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
