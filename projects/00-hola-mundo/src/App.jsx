import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'alx',
        name: 'Gabriel',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    }
]
export function App() {
    //const format = (userName) => `@${userName}`
    
    return (
        //<article style={{ display: 'flex', alignItems: 'center', color: '#fff'}}>
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}