import {useLocation, useNavigate} from "react-router-dom";
import "./TabBar.css";
import {useState} from "react";
import {HiOutlineHome, HiHome} from "react-icons/hi";
import {MdOutlineDashboard, MdDashboard} from "react-icons/md";
import {TbSettings, TbSettingsFilled} from "react-icons/tb";
import {RiTeamLine, RiTeamFill} from "react-icons/ri";
import {MdInfoOutline, MdInfo} from "react-icons/md";

const TABS = [
	{path: "/", label: "Home", icon: {active: HiHome, inactive: HiOutlineHome}},
	{
		path: "/dashboard",
		label: "Dashboard",
		icon: {active: MdDashboard, inactive: MdOutlineDashboard},
	},
	{
		path: "/team",
		label: "Team",
		icon: {active: RiTeamFill, inactive: RiTeamLine},
	},
	{
		path: "/settings",
		label: "Settings",
		icon: {active: TbSettingsFilled, inactive: TbSettings},
	},
	{
		path: "/about",
		label: "About",
		icon: {active: MdInfo, inactive: MdInfoOutline},
	},
];

const TabBarItem = ({
	path,
	icon: {active: ActiveIcon, inactive: InactiveIcon},
	label,
	isActive,
	onClick,
}) => {
	return (
		<div className="tab-menu">
			<button
				className={`tab-menu-item ${isActive ? "active" : ""}`}
				onClick={() => onClick(path)}
			>
				{isActive ? <ActiveIcon size={24} /> : <InactiveIcon size={24} />}
			</button>
			<p className="tab-menu-item-label">{label}</p>
		</div>
	);
};

export default function TabBar() {
	const location = useLocation();
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState(location.pathname);

	const handleTabClick = (path) => {
		navigate(path);
		setActiveTab(path);
	};

	return (
		<div className="tabs-container">
			{TABS.map((tab) => (
				<TabBarItem
					key={tab.path}
					path={tab.path}
					label={tab.label}
					icon={tab.icon}
					isActive={activeTab === tab.path}
					onClick={handleTabClick}
				/>
			))}
		</div>
	);
}
