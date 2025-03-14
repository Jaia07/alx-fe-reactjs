import { BrowserRouter as Router, Routes, Route, Link, useMatch } from 'react-router-dom'
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

// Profile component that contains nested routes
const Profile = () => {
    // useRouteMatch provides the current URL and path
    let match = useMatch('/profile/*')
    let { path, url } = match || { path: '/profile', url: '/profile' };

    return (
        <div>
            <h2>Profile</h2>
            <ul>
                <li>
                    <Link to="/profile/profileDetails">Profile Details</Link>
                </li>
                <li>
                    <Link to="/profile/profileSettings">Profile Settings</Link>
                </li>
            </ul>

            {/* Nested routes within the Profile component */}
            <Routes>
                {/* Default route that displays a message */}
                <Route index element={<h3>Please select an option</h3>} />
                
                {/* Nested route for ProfileDetails */}
                <Route path="profileDetails" element={<ProfileDetails />} />
                    
                {/* Nested route for ProfileSettings */}
                <Route path="ProfileSettings" element={<ProfileSettings />} />

            </Routes>
        </div>
    );
};

export default Profile