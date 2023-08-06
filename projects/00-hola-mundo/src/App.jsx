import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    //const format = (userName) => `@${userName}`
    
    return (
        //<article style={{ display: 'flex', alignItems: 'center', color: '#fff'}}>
        <section className='App'>
            <TwitterFollowCard isFollowing userName="alx">Gabriel</TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="pheralb">Pablo Hernandez</TwitterFollowCard>
        </section>
    )
}