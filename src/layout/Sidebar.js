import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./Sidebar.css";
import {HiOutlineHome} from "react-icons/hi";
import {MdOutlineDashboard} from "react-icons/md";
import {RiTeamLine} from "react-icons/ri";
import {TbSettings} from "react-icons/tb";
import {MdInfoOutline} from "react-icons/md";

const SidebarMenuItem = ({path, icon, label}) => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleItemClick = () => {
		navigate(path);
	};

	return (
		<div className="sidebar-menu">
			<button
				className={
					location.pathname === path
						? "sidebar-menu-item active"
						: "sidebar-menu-item"
				}
				onClick={handleItemClick}
			>
				{icon}
			</button>
			<p className="sidebar-menu-item-label">{label}</p>
		</div>
	);
};

export default function Sidebar() {
	return (
		<div className="sidebar-container">
			<SidebarMenuItem
				path="/"
				icon={<HiOutlineHome size={24} />}
				label="Home"
			/>
			<SidebarMenuItem
				path="/dashboard"
				icon={<MdOutlineDashboard size={24} />}
				label="Dashboard"
			/>
			<SidebarMenuItem
				path="/team"
				icon={<RiTeamLine size={24} />}
				label="Team"
			/>
			<SidebarMenuItem
				path="/settings"
				icon={<TbSettings size={24} />}
				label="Settings"
			/>
			<SidebarMenuItem
				path="/about"
				icon={<MdInfoOutline size={24} />}
				label="About"
			/>
		</div>
	);
}
