import React, { useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom';

import ColorsList from './ColorsList'
import NewColorForm from './NewColorForm';
import ColorPage from './ColorPage'

function Routes() {

    const initialColors = {
        Red: "#FF0000",
        Green: "#00FF00",
        Blue: "#0000FF"
    }
    const [colors, setColors] = useState(initialColors);

    function handleAddColor(newColor){
        console.log(newColor)
        setColors(colorArr => ({...colorArr, ...newColor}))
    }

    function renderColorPage(props) {
        const { color } = props.match.params;
        const hex = colors[color]
        return <ColorPage {...props} hex={hex} color={color} />;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <ColorsList colors={colors} />
                </Route>
                <Route path="/colors/new">
                    <NewColorForm createColor={handleAddColor}/>
                </Route>
                <Route path="/colors/:color" render={renderColorPage}>
                </Route>
                <Redirect to="/colors" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;