import SidebarOption from './SidebarOption';
import './sidebar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from '../DataLayer';

export default function SideBar({}){

  const [{playlists}, dispatch] = useDataLayerValue();

return(
    <div className="sidebar">
        <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeOutlinedIcon} title = 'Home'/>
      <SidebarOption Icon={SearchIcon} title = 'Search'/>
      <SidebarOption Icon={LibraryMusicIcon} title = 'Your Library'/>
      <br/>
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map(playlists=>(
        <SidebarOption title ={playlists.name} />
      ))}

    </div>
)
}