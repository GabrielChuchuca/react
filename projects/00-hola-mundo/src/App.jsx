import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    //const format = (userName) => `@${userName}`
    
    return (
        //<article style={{ display: 'flex', alignItems: 'center', color: '#fff'}}>
        <section className='App'>
            <TwitterFollowCard isFollowing userName="alx" name="Gabriel"/>
            <TwitterFollowCard isFollowing={false} userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk"/>
            <TwitterFollowCard isFollowing userName="vxnder" name="Vanderhart" />
        </section>
    )
}