// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import {TabsList} from '@mui/base/TabsList';
import {TabPanel} from '@mui/base/TabPanel';
import {Tabs} from '@mui/base/Tabs';
import TabButton from '@ui/TabButton';
import Profile from '@widgets/Team/TeamSettings/Profile';
import Fade from '@mui/material/Fade';

// hooks
import {useState} from 'react';
import {useWindowSize} from 'react-use';

const TeamSettings = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const {width} = useWindowSize();

    return (
        <Spring >
            <br></br>
            <br></br>

            <div className="d-flex flex-column justify-content-between flex-1">
                <Tabs value={activeTab}>
                    <TabsList className={`${styles.tabs_list} tab-nav `}>
                        <TabButton title={width >= 375 ? 'Basic Team' : 'Profile'}
                                   onClick={() => setActiveTab('profile')}
                                   active={activeTab === 'profile'}/>
                
                    </TabsList>
                    <TabPanel value="profile">
                        <Fade in={activeTab === 'profile'} timeout={400}>
                            <div>
                                <Profile/>
                            </div>
                        </Fade>
                    </TabPanel>
                    <TabPanel value="basic">
                        <Fade in={activeTab === 'basic'} timeout={400}>
                            <div>
                                <Profile/>
                            </div>
                        </Fade>
                    </TabPanel>
                </Tabs>
            </div>
        </Spring>
    )
}

export default TeamSettings