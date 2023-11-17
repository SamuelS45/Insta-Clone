import { ContextProvider } from './Context'
import Profile from './Profile'


function ProfileApp(){
    return(
        <div>
            <ContextProvider>
                <Profile/>
            </ContextProvider>
        </div>
    )
}

export default ProfileApp