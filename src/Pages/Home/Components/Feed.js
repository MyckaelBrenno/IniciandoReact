import React from 'react';
import { makeStyles } from '@material-ui/core/Styles';
import PostCard from '../../../components/PostCard';
const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Myckael Brenno',
            username: 'MyckaelBrenno',
            avatar: '/images/avatars/Avatar_1.jpg'
        },
        title: "Criando um App do zero utilizando React.js",
        date: "December 19, 2020",
        description: 'Fala Dev! Qual a desculpa de hoje para não aprender?!',
        hastags: "#React, #CSS, #javascript, #html",
        image: "/images/posts/post1.png"
},
{
    id: 2,
    author: {
        id: 2,
        name: 'Anderson Helder',
        username: 'AndersonHelder',
        avatar: '/images/avatars/Avatar_2.jpg'
    },
    title: "Aprendendo a linguagem Java do básico ao avançado",
    date: "December 19, 2020",
    description: 'Tô na área! Programa para o salão da minha mãe',
    hastags: "#angular, #CSS, #javascript, #mysql",
    image: "/images/posts/post2.png"
},
];

function Feed() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))

            }
        </div>
    )
}

export default Feed;