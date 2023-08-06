import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    //const format = (userName) => `@${userName}`
    
    return (
        //<article style={{ display: 'flex', alignItems: 'center', color: '#fff'}}>
        <section className='App'>
            <TwitterFollowCard userName="alx">Gabriel</TwitterFollowCard>
            <TwitterFollowCard userName="pheralb" isFollowing>Pablo Hernandez</TwitterFollowCard>
        </section>
    )
}