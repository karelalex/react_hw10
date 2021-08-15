import React from 'react'
import {Link, Redirect, Route, Switch, useParams, useRouteMatch} from "react-router-dom";

const topics = [{
    id: 1,
    name: 'Машинки',
    content: 'Страничка про машинки'
}, {
    id: 2,
    name: 'Игрушки',
    content: 'Страничка про игрушки'
}, {
    id: 3,
    name: 'Листики',
    content: 'Страничка про Листики'
}]

export const Themes = () => {
    const {path, url} = useRouteMatch()
    console.log(path, url)
    return (
        <Switch>
            <Route path={path} exact>
                <div>
                    <ul>
                        {topics.map((topic) => (
                            <li key={topic.id}><Link to={`${url}/${topic.id}`}>{topic.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </Route>
            <Route path={`${path}/:id`}>
                <Topic upperUrl={url}/>
            </Route>
        </Switch>

    );
}

const Topic = ({upperUrl}) => {
    const {id} = useParams();
    const topic = topics.find((item) => item.id === Number(id))
    if (!topic) {

        return <Redirect to={upperUrl} />
    }
    return (
        <div>
            <h1>{topic.name}</h1>
            <p>{topic.content}</p>
            <Link to={upperUrl}>К списку</Link>
        </div>
    )
}
