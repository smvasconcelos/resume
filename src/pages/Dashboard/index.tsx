import dividerIcon from "assets/divider.svg";
import ptIcon from "assets/flags/pt.svg";
import enIcon from "assets/flags/en.svg";
import menuIcon from "assets/menu.svg";
import githubIcon from "assets/github.svg";
import reactjsIcon from "assets/reactjs.svg";

import SideBar from "components/SideBar";
import LangContext from "contexts/Lang";

import React, { useContext, useEffect, useState } from "react";
import { DashContainer, SideBarContainer } from "components/SideBar/styles";
import {
	Article,
	ArticleDivider,
	Container,
	Content,
	Divider,
	ExperienceContainer,
	ExperienceIcon,
	ExperienceItem,
	ExperiencePeriod,
	ExperienceTitle,
	MenuIcon,
	MenuItem,
	SubTitle,
	Text,
	Title,
	TopMenu,
	WorkIcon
} from "./styles";
import { useNavigate } from "react-router-dom";

const DashboardContent: React.FC = () => {
	const { lang, changeLang } = useContext(LangContext);
	const [openSideBar, setOpenSiteBar] = useState<boolean>(false);
	const navigate = useNavigate();

	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const updateWindowDimensions = () => {
			setScreenWidth(window.innerWidth);
		};

		updateWindowDimensions();
		window.addEventListener("resize", updateWindowDimensions);
		return () => window.removeEventListener("resize", updateWindowDimensions);
	}, []);

	const About = () => {
		return (
			<Article>
				<Title>{lang.ABOUT}</Title>
				<Divider />
				<Text>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
					consectetur voluptates veniam deleniti odio architecto in quam!
					Nostrum rem dolor ipsam voluptas voluptate vero, alias, vitae quasi
					repudiandae qui placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur numquam accusantium doloribus in recusandae assumenda, et laudantium esse facere! Veritatis totam tenetur iste nam dicta similique earum officia accusantium consectetur!
				</Text>
			</Article>
		);
	};

	const Experience = () => {
		return (
			<Article>
				<Title>{lang.EXPERIENCE}</Title>
				<Divider />
				{lang.SECTIONS.EXP.map((item, idx) => {
					return (
						<ExperienceContainer key={idx + "exp"}>
							<ExperiencePeriod>
								{item.DATE.toString().length == 4
									? item.DATE + " - " + Date().split(" ")[3]
									: item.DATE}
							</ExperiencePeriod>
							<ExperienceIcon src={dividerIcon} />
							<div>
								<ExperienceTitle>{item.TITLE}</ExperienceTitle>
								<SubTitle>{item.SUBTITLE}</SubTitle>
								<Text>{item.DESCRIPTION}</Text>
							</div>
						</ExperienceContainer>
					);
				})}
			</Article>
		);
	};

	const PersonalWorks = () => {
		return (
			<Article>
				<Title>{lang.PROJECTS}</Title>
				<Divider />
				<br />
				{lang.SECTIONS.PROJECTS.map((item, idx) => {
					return (
						<ExperienceItem key={idx + "proj"}>
							<ExperienceTitle
								onClick={
									item.GITHUB != "/"
										? () => window.open(item.GITHUB, "_blank")
										: () => { }
								}
								hover={true}
							>
								{" "}
								<WorkIcon src={githubIcon} /> {item.TITLE}
							</ExperienceTitle>
							<Text>{item.DESCRIPTION}</Text>
							{lang.SECTIONS.PROJECTS.length != idx + 1 ? (
								<ArticleDivider />
							) : (
								<></>
							)}
						</ExperienceItem>
					);
				})}
			</Article>
		);
	};
	const Clones = () => {
		return (
			<Article>
				<Title>Clones</Title>
				<Divider />
				<br />
				{lang.SECTIONS.CLONES.map((item, idx) => {
					return (
						<ExperienceItem key={idx + "proj"}>
							<ExperienceTitle onClick={() => navigate(item.LINK)} hover={true}>
								{" "}
								<WorkIcon src={reactjsIcon} /> {item.TITLE}
							</ExperienceTitle>
							<Text>{item.DESCRIPTION}</Text>
							{lang.SECTIONS.CLONES.length != idx + 1 ? (
								<ArticleDivider />
							) : (
								<></>
							)}
						</ExperienceItem>
					);
				})}
			</Article>
		);
	};

	return (
		<DashContainer>
			<SideBar
				mobile={screenWidth < 1200}
				open={openSideBar}
				setOpen={setOpenSiteBar}
			/>
			<Container>
				<TopMenu>
					<MenuItem onClick={() => changeLang("pt")}>
						<MenuIcon src={ptIcon} />
					</MenuItem>
					<MenuItem onClick={() => changeLang("en")}>
						<MenuIcon src={enIcon} />
					</MenuItem>
					{screenWidth < 1200 ? (
						<MenuItem onClick={() => setOpenSiteBar(true)}>
							<MenuIcon src={menuIcon} />
						</MenuItem>
					) : (
						<></>
					)}
				</TopMenu>
				<Content>
					<About />
					<ArticleDivider />
					<Experience />
					<ArticleDivider />
					<PersonalWorks />
					{/* <ArticleDivider /> */}
					{/* <Clones /> */}
				</Content>
			</Container>
		</DashContainer>
	);
};

const Dashboard: React.FC = () => {
	return <DashboardContent />;
};

export default Dashboard;
