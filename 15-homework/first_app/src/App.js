import './App.css';
import React from "react";
import {Post} from './components/Post'
import { logRoles } from '@testing-library/react';

function App() {
  const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
  return (
    <div className='container'>
      <Post author={{
                      name: "Anakin skywalker",
                      photo: ANAKIN_IMAGE,
                      nickname: "@dart_vader"
                    }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={"26 февр."}
      />
      <Post author={{
                      name: "Luntik",
                      photo: null,
                      nickname: "@luntik"
                    }}
            content="IDK Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam rerum consectetur at neque error aliquid aut nam quasi, enim, quia ab nobis cum vero explicabo possimus? Incidunt, neque quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam rerum consectetur at neque error aliquid aut nam quasi, enim, quia ab nobis cum vero explicabo possimus? Incidunt, neque quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam rerum consectetur at neque error aliquid aut nam quasi, enim, quia ab nobis cum vero explicabo possimus? Incidunt, neque quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam rerum consectetur at neque error aliquid aut nam quasi, enim, quia ab nobis cum vero explicabo possimus? Incidunt, neque quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam rerum consectetur at neque error aliquid aut nam quasi, enim, quia ab nobis cum vero explicabo possimus? Incidunt, neque quos."
            image={null}
            date={"26 февр."}
      />
    </div>
  );
}

export default App;
