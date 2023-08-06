export function TwitterFollowCard({children, userName, isFollowing}) {
    console.log(isFollowing);
    const text = isFollowing ? 'Siguiendo' :  'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="" />
                <div className='tw-followCard-info'>
                    <strong>{children} </strong>
                    <span className='tw-followCard-infoUserName'>@{userName} </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}