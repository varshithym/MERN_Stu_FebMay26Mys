// composition
import React from 'react';

function DashboardLayout({ children }) {
    return (
        <div className='layout'>{children} </div>
    )
}
function AccountSidebar({ children }) {
    return <aside className='sideBar'>{children}</aside>
}
function UserInfoPanel({ children }) {
    return <aside className='user-panel'>{children}</aside>

}
function ProfileAvatar({ user }){
    return <img src={`/${user.name}.png`} alt={user.name} height={200}/>
}
export function CompositionDemo() {
    const user = { name: "Varshith" };
    return (
        <div>
            <h3>Composition solution</h3>
            <DashboardLayout>
                <AccountSidebar>
                    <UserInfoPanel>
                        <ProfileAvatar user={user} />
                    </UserInfoPanel>
                </AccountSidebar>
            </DashboardLayout>

            
        </div>
    )
}