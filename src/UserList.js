import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'Velopert',
            email: 'velopert@gmail.com'
        },
        {
            id: 2,
            username: 'Javajigi',
            email: 'javajigi@gmail.com'
        },
        {
            id: 3,
            username: 'honux',
            email: 'hoyoung.jung@gmail.com'
        }
    ];

    return (
        <div>
            {
                users.map(user => (
                    <User user={user} key={user.id}></User>
                ))
            }
        </div>
    );
}

export default UserList;