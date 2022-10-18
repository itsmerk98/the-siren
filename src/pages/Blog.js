import React from 'react'
import '../components/css/blog.scss';

import profile from './MaskGroup.png';
const Blog = () => {
    return (
        <>
            <div className='blog_cantainar'>
                <div className='blog-sec'>
                    <h1>5 Ways to animate a React app.</h1>
                    <div className='bloger'>
                        <div className='blog_img'>
                            <img className='blog_image' src={profile} alt='error' />
                        </div>
                        <div className='bloger_detail'>
                            <h3 className='blog_name'>Ram kishor</h3>
                            <p className='time'>Ram kishor</p>
                        </div>
                        <div className='blogger_socil_icons'>
                            <span className='socil_icon'>f</span>
                            <span className='socil_icon'>I</span>
                            <span className='socil_icon'>t</span>
                            <span className='socil_icon'>Y</span>
                        </div>
                    </div>

                    <div className='image'>
                        <img src='./' alt='error'/>
                    </div>

                    <div>
                        <p>
                            Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. 
                        </p>
                        <br/>
                        <p>Let’s talk about them</p>
                    </div>

                    <div className='image'>
                        <img src='./' alt='error' />
                    </div>

                    <div className='blog_writer'>
                        <div className='blog_img'>
                            <img className='blog_image' src={profile} alt='error' />
                        </div>
                        <div className='bloger_detail'>
                            <h3 className='blog_name'>Ram kishor</h3>
                            <p className='time'>Ram kishor</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog;