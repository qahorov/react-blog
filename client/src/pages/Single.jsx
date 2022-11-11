import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://interesnyefakty.org/wp-content/uploads/Interesnye-fakty-pro-osen.jpg" alt="" />
        <div className="user">
          <img src="https://img.freepik.com/premium-photo/autumn-nature-people-concept-young-woman-in-a-blue-coat-standing-in-the-park-on-a-background-of_230311-15826.jpg" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nihil, numquam rem molestiae, sint assumenda voluptas error modi dolorem accusantium quibusdam aliquam quasi sequi sapiente repudiandae natus repellat eius corporis! 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat adipisci, voluptatum amet esse nihil obcaecati quaerat molestias est! Accusantium debitis beatae saepe voluptatem ullam veritatis tempore itaque tempora? Dolorem, molestias.
        <br/>
        <br/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis vitae, quia at nemo cupiditate odit officia non nihil tempore tempora animi qui eum esse nisi est soluta illum fugiat iure! Dolore amet, animi odio provident dicta earum vero itaque inventore esse molestiae tempore. Ipsum quis eos repellendus numquam sapiente sunt! Amet omnis modi molestias accusantium obcaecati minus laborum, quas blanditiis, ratione dolor dolore hic quod repellendus, earum nobis optio ipsa beatae rerum laboriosam! Ab corrupti quibusdam inventore optio enim earum neque ad dignissimos, veritatis cupiditate placeat ea, accusantium amet. Illum libero minus aut debitis rerum voluptate, et error laboriosam ipsa!
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ex aut eligendi eveniet quidem nulla voluptatibus est labore quasi. Autem, possimus eveniet voluptates optio explicabo hic magnam fugit doloribus neque veritatis. Itaque libero aspernatur autem accusantium, reprehenderit, iusto quia cum temporibus praesentium molestias magnam iste, inventore exercitationem nihil nulla veniam!
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single